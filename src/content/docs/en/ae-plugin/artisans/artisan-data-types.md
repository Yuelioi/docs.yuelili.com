---
title: artisan-data-types
---
# Artisan Data Types

Below are the data types most commonly used in the Artisan API.

---

## Data Types Used In The Artisan API

| Type | Describes |
|---|---|
| `AEGP_RenderLayerContextH` | State information at the time of a render request, sent to an Artisan by After Effects. |
| `PR_RenderContextH` | A collection of settings defining what is to be rendered, and how. |
| `AEGP_SoundDataH` | The audio settings used for a given layer. |
| `AEGP_RenderReceiptH` | Used by Artisans when rendering. |
| `AEGP_FrameReceiptH` | |
| `AEGP_WorldH` | A frame of pixels. |
| `AEGP_RenderOptionsH` | The settings associated with a render queue item. |

---

## Horz? Vert?

After Effects' matrix is row based; OpenGL's is column based. This means more work for you. Yay, billable hours!

---

## Implementation And Design

An Artisan is nearly an application unto itself. Because we realized early in the After Effects 5.0 that there are many ways to approach the problems inherent in 3D rendering; intersections and shading, for example.

We provided an API with which we and third parties (yes, we really do use our own APIs) could implement any 3D rendering scheme desired.

---

## 3D Compositing, Not Modeling

After Effects is *not* a 3D modeling application. Users work in a responsive mode, switching to higher quality only at for proofing or final output. Consider providing at least two quality modes, one for layout and another for final output. Be conscious of render time in low quality mode.

---

## Registering An Artisan

An Artisan is an AEGP, and has a single entry point. Artisans must also register their own function entry points and have a special callback for this purpose. See `AEGP_RegisterArtisan()` from [AEGP_RegisterSuites5](../../aegps/aegp-suites#aegp_registersuites5).

This tables shows the functions that Artisans can support as defined by `PR_ArtisanEntryPoints`: only `render_func` is required.

### Artisan Entry Points

| PR_ArtisanEntryPoints | |
|---|---|
| `global_setup_func0` | Called only once, right after `GP_Main`. The global data is common across all instances of the plug-in. |
| | If you allocate memory during Global Setup, you must free it during your `global_setdown_func`. |
| | <pre lang="cpp">PR_GlobalSetupFunc(<br/>  const PR_InData    \*in_dataP,<br/>  PR_GlobalContextH  global_contextH,<br/>  PR_GlobalDataH     \*global_dataPH);</pre> |
| `global_setdown_func0` | Dispose of any global data you allocated. |
| | <pre lang="cpp">PR_GlobalSetdownFunc(<br/>  const PR_InData    \*in_dataP,<br/>  PR_GlobalContextH  global_contextH,<br/>  PR_GlobalDataH     global_dataH);</pre> |
| `global_do_about_func0` | Tell the world about yourself! Use `in_dataP>msg_func` to display your dialog. |
| | <pre lang="cpp">PR_GlobalDoAboutFunc(<br/>  const PR_InData    \*in_dataP,<br/>  PR_GlobalContextH  global_contextH,<br/>  PR_GlobalDataH     global_dataH);</pre> |
| `setup_instance_func0` | Allocate and instantiate any data specific to this instance of your Artisan. |
| | <pre lang="cpp">PR_InstanceSetupFunc(<br/>  const PR_InData      \*in_dataP,<br/>  PR_GlobalContextH    global_contextH,<br/>  PR_InstanceContextH  instance_contextH,<br/>  PR_GlobalDataH       global_dataH,<br/>  PR_InstanceFlags     flags,<br/>  PR_FlatHandle        flat_dataH0,<br/>  PR_InstanceDataH     \*instance_dataPH);</pre> |
| `setdown_instance_func0` | Deallocate and free any data specific to this instance of your Artisan. |
| | <pre lang="cpp">PR_InstanceSetdownFunc(<br/>  const PR_InData      \*in_dataP,<br/>  PR_GlobalContextH    global_contextH,<br/>  PR_InstanceContextH  instance_contextH,<br/>  PR_GlobalDataH       global_dataH,<br/>  PR_InstanceDataH     instance_dataH);</pre> |
| `flatten_instance_func0` | Flatten your data in preparation to being written to disk. (making sure it's OS independent, if your Artisan is). |
| | <pre lang="cpp">PR_FlattenInstanceFunc(<br/>  const PR_InData      \*in_dataP,<br/>  PR_GlobalContextH    global_contextH,<br/>  PR_InstanceContextH  instance_contextH,<br/>  PR_GlobalDataH       global_dataH,<br/>  PR_InstanceDataH     instance_dataH,<br/>  PR_FlatHandle        \*flatH);</pre> |
| `do_instance_dialog_func0` | If your Artisan has a additional parameters (accessed through its Options dialog), this function will be called to get and set them. |
| | <pre lang="cpp">PR_DoInstanceDialogFunc(<br/>  const PR_InData      \*in_dataP,<br/>  PR_GlobalContextH    global_contextH,<br/>  PR_InstanceContextH  instance_contextH,<br/>  PR_GlobalDataH       global_dataH,<br/>  PR_InstanceDataH     instance_dataH,<br/>  PR_DialogResult      \*resultP);</pre> |
| | `PR_DialogResultis` is either `PR_DialogResult_NO_CHANGE` or `PR_DialogResult_CHANGE_MADE`. |
| `frame_setup_func0` | Perform any setup necessary to render a frame (called immediately before rendering). |
| | <pre lang="cpp">PR_FrameSetupFunc(<br/>  const PR_InData      \*in_dataP,<br/>  PR_GlobalContextH    global_contextH,<br/>  PR_InstanceContextH  instance_contextH<br/>  PR_RenderContextH    render_contextH,<br/>  PR_GlobalDataH       global_dataH,<br/>  PR_InstanceDataH     instance_dataH,<br/>  PR_RenderDataH       \*render_dataPH);</pre> |
| `frame_setdown_func0` | Dispose of any setup data allocated during `frame_setup` (sent immediately after rendering). |
| | <pre lang="cpp">PR_FrameSetdownFunc(<br/>  const PR_InData      \*in_dataP,<br/>  PR_GlobalContextH    global_contextH,<br/>  PR_InstanceContextH  instance_contextH<br/>  PR_RenderContextH    render_contextH,<br/>  PR_GlobalDataH       global_dataH,<br/>  PR_InstanceDataH     instance_dataH,<br/>  PR_RenderDataH       render_dataH);</pre> |
| `render_func` | Render the scene. |
| | <pre lang="cpp">PR_FrameRenderFunc(<br/>  const PR_InData      \*in_dataP,<br/>  PR_GlobalContextH    global_contextH,<br/>  PR_InstanceContextH  instance_contextH<br/>  PR_RenderContextH    render_contextH,<br/>  PR_GlobalDataH       global_dataH,<br/>  PR_InstanceDataH     instance_dataH,<br/>  PR_RenderDataH       render_dataH);</pre> |
| `query_func0` | Artisans can draw their own projection axes, should the need arise. |
| | After Effects will call this function to obtain the transform between the composition world and those axes, as well as for a number of other functions related to on- and off-screen preview drawing (the former is relevant only to interactive artisans). |
| | <pre lang="cpp">PR_QueryFunc(<br/>  const PR_InData      \*in_dataP,<br/>  PR_GlobalContextH    global_contextH,<br/>  PR_InstanceContextH  instance_contextH<br/>  PR_QueryContextH     query_contextH,<br/>  PR_QueryType         query_type,<br/>  PR_GlobalDataH       global_dataH,<br/>  PR_InstanceDataH     instance_dataH);</pre> |
| | `PR_QueryType` can be one of the following: |
| | - `PR_QueryType_NONE = 0` |
| | - `PR_QueryType_TRANSFORM` |
| | - `PR_QueryType_INTERACTIVE_WINDOW_DISPOSE` |
| | - `PR_QueryType_INTERACTIVE_WINDOW_CLEAR` |
| | - `PR_QueryType_INTERACTIVE_WINDOW_FROZEN_PROXY` |
| | - `PR_QueryType_INTERACTIVE_SWAP_BUFFER` |
| | - `PR_QueryType_INTERACTIVE_DRAW_PROCS` |
| | - `PR_QueryType_PREPARE_FOR_LINE_DRAWING` |
| | - `PR_QueryType_UNPREPARE_FOR_LINE_DRAWING` |
| | - `PR_QueryType_GET_CURRENT_CONTEXT_SAFE_FOR_LINE_DRAWING` |
| | - `PR_QueryType_GET_ARTISAN_QUALITY` (New in CS6.) |

---

## The World Is Your Canvas

`AEGP_RenderTexture()` supplies the raw pixels of a layer, untransformed, into an arbitrarily-sized buffer.

`AEGP_RenderLayer()` invokes the entire After Effects render pipeline, including transforms, masking, et cetera, providing the layer as it appears in its composition, in a composition-sized buffer.

If the layer being rendered is 3D, the default (Standard 3D) Artisan is invoked to perform any 3D geometrics.

Your Artisan can use this to render track matte layers, and apply them only in a strictly 2D sense, to the transformed 3D layer.

Before rendering, the Artisans that ship with After Effects apply an inverse transform to get square pixels, then re-apply the transform before display.

For example, if the pixel aspect ratio is 10/11 (DV NTSC), we multiply by 11/10 to get square pixels. We process and composite 3D layers, then re-divide to get back to the original pixel aspect ratio.

The following suite supplies the layers, compositions, texture and destination buffers. This is a vital suite for all artisans.

### AEGP_CanvasSuite8

| Function | Purpose |
|---|---|
| `AEGP_GetCompToRender` | Given the render context provided to the Artisan at render time, returns a handle to the composition. |
| | <pre lang="cpp">AEGP_GetCompToRender(<br/>  PR_RenderContextH  render_contextH,<br/>  AEGP_CompH         \*compPH)</pre> |
| `AEGP_GetNumLayersToRender` | Given the render context, returns the number of layers the Artisan needs to render. |
| | <pre lang="cpp">AEGP_GetNumLayersToRender(<br/>  PR_RenderContextH  render_contextH,<br/>  A_long             \*num_to_renderPL)</pre> |
| `AEGP_GetNthLayerContextToRender` | Used to build a list of layers to render after determining the total number of layers that need rendering by the Artisan. |
| | <pre lang="cpp">AEGP_GetNthLayerContextToRender(<br/>  PR_RenderContextH         render_contextH,<br/>  A_long                    n,<br/>  AEGP_RenderLayerContextH  \*layer_indexPH)</pre> |
| `AEGP_GetLayerFromLayerContext` | Given a `AEGP_RenderLayerContextH`,retrieves the associated `AEGP_LayerH` (required by many suite functions). |
| | <pre lang="cpp">AEGP_GetLayerFromLayerContext(<br/>  const PR_RenderContextH   render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  AEGP_LayerH               \*layerPH);</pre> |
| `AEGP_GetLayerAndSubLayerFromLayerContext` | Allows for rendering of sub-layers (as within a Photoshop file). |
| | <pre lang="cpp">AEGP_GetLayerAndSubLayerFromLayerContext(<br/>  const PR_RenderContextH   render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  AEGP_LayerH               \*layerPH,<br/>  AEGP_SubLayerIndex        \*sublayerP);</pre> |
| `AEGP_GetTopLayerFromLayerContext` | With collapsed geometrics "on" this gives the layer in the root composition containing the layer context. |
| | With collapsed geometrics off this is the same as `AEGP_GetLayerFromLayerContext`. |
| | <pre lang="cpp">AEGP_GetTopLayerFromLayerContext(<br/>  const PR_RenderContextH   r_contextH,<br/>  AEGP_RenderLayerContextH  l_contextH,<br/>  AEGP_LayerH               \*layerPH);</pre> |
| `AEGP_GetCompRenderTime` | Given the render context, returns the current point in (composition) time to render. |
| | <pre lang="cpp">AEGP_GetNthLayerIndexToRender(<br/>  PR_RenderContextH  render_contextH,<br/>  A_long             \*time,<br/>  A_long             \*time_step)</pre> |
| `AEGP_GetCompDestinationBuffer` | Given the render context, returns a buffer in which to place the final rendered output. |
| | <pre lang="cpp">AEGP_GetCompToRender(<br/>  PR_RenderContextH  render_contextH,<br/>  AEGP_CompH         compH,<br/>  PF_EffectWorld     \*dst);</pre> |
| `AEGP_GetROI` | Given the render context provided to the Artisan at render time, returns a handle to the composition. |
| | <pre lang="cpp">AEGP_GetROI(<br/>  PR_RenderContextH  render_contextH,<br/>  A_LegacyRect       \*roiPR);</pre> |
| `AEGP_RenderTexture` | Given the render context and layer, returns the layer texture. |
| | All parameters with a trailing '0' are optional; the returned `PF_EffectWorld` can be NULL. |
| | <pre lang="cpp">AEGP_RenderTexture(<br/>  PR_RenderContextH  render_contextH,<br/>  AEGP_LayerH        layerH,<br/>  AEGP_RenderHints   render_hints,<br/>  A_FloatPoint       \*suggested_scaleP0,<br/>  A_FloatRect        \*suggsted_src_rectP0,<br/>  A_Matrix3          \*src_matrixP0,<br/>  PF_EffectWorld     \*render_bufferP);</pre> |
| | `AEGP_RenderHints` contains one or more of the following: |
| | - `AEGP_RenderHints_NONE` |
| | - `AEGP_RenderHints_IGNORE_EXTENTS` |
| | - `AEGP_RenderHints_NO_TRANSFER_MODE` (prevents application of opacity & transfer mode; for use with `RenderLayer` calls.) |
| `AEGP_DisposeTexture` | Disposes of an acquired layer texture. |
| | <pre lang="cpp">AEGP_DisposeTexture(<br/>  PR_RenderContextH  render_contextH,<br/>  AEGP_LayerH        layerH,<br/>  AEGP_WorldH        \*dst0);</pre> |
| `AEGP_GetFieldRender` | Returns the field settings of the given `PR_RenderContextH`. |
| | <pre lang="cpp">AEGP_GetFieldRender(<br/>  PR_RenderContextH  render_contextH,<br/>  PF_Field           \*field);</pre> |
| `AEGP_ReportArtisanProgress` | Given the render context provided to the Artisan at render time, returns a handle to the composition. |
| | !!! note |
| | This is NOT thread-safe on macOS; only use this function when the current thread ID is 0. |
| | <pre lang="cpp">AEGP_ReportArtisanProgress(<br/>  PR_RenderContextH  render_contextH,<br/>  A_long             countL,<br/>  A_long             totalL);</pre> |
| `AEGP_GetRenderDownsampleFactor` | Returns the downsample factor of the `PR_RenderContextH`. |
| | <pre lang="cpp">AEGP_GetRenderDownsampleFactor(<br/>  PR_RenderContextH      render_contextH,<br/>  AEGP_DownsampleFactor  \*dsfP);</pre> |
| `AEGP_IsBlankCanvas` | Determines whether the `PR_RenderContextH` is blank (empty). |
| | <pre lang="cpp">AEGP_IsBlankCanvas(<br/>  PR_RenderContextH  render_contextH,<br/>  A_Boolean          \*is_blankPB);</pre> |
| `AEGP_GetRenderLayerToWorldXform` | Given a render context and a layer (at a given time), retrieves the 4 by 4 transform to move between their coordinate spaces. |
| | <pre lang="cpp">AEGP_GetRenderLayerToWorldXform(<br/>  PR_RenderContextH         render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  const A_Time              \*comp_timeP,<br/>  A_Matrix4                 \*transform);</pre> |
| `AEGP_GetRenderLayerBounds` | Retrieves the bounding rectangle of the layer_contextH (at a given time) within the `render_contextH`. |
| | <pre lang="cpp">AEGP_GetRenderLayerBounds(<br/>  PR_RenderContextH         render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  const A_Time              \*comp_timeP,<br/>  A_LegacyRect              \*boundsP);</pre> |
| `AEGP_GetRenderOpacity` | Returns the opacity of the given layer context at the given time, within the render context. |
| | <pre lang="cpp">AEGP_GetRenderOpacity(<br/>  PR_RenderContextH         render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  const A_Time              \*comp_timePT,<br/>  A_FpLong                  \*opacityPF);</pre> |
| `AEGP_IsRenderLayerActive` | Returns whether or not a given layer context is active within the render context, at the given time. |
| | <pre lang="cpp">AEGP_IsRenderLayerActive(<br/>  PR_RenderContextH         render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  const A_Time              \*comp_timePT,<br/>  A_Boolean                 \*activePB);</pre> |
| `AEGP_SetArtisanLayerProgress` | Sets the progress information for a rendering Artisan. |
| | - `countL` is the number of layers completed, |
| | - `num_layersL` is the total number of layers the Artisan is rendering. |
| | <pre lang="cpp">AEGP_SetArtisanLayerProgress(<br/>  PR_RenderContextH  render_contextH,<br/>  A_long             countL,<br/>  A_long             num_layersL);</pre> |
| `AEGP_RenderLayerPlus` | Similar to `AEGP_RenderLayer`, but takes into account the `AEGP_RenderLayerContextH`. |
| | <pre lang="cpp">AEGP_RenderLayerPlus(<br/>  PR_RenderContextH          r_contextH,<br/>  AEGP_LayerH                layerH,<br/>  AEGP_RenderLayerContextH   l_contextH,<br/>  AEGP_RenderHints           render_hints,<br/>  AEGP_WorldH                \*bufferP);</pre> |
| `AEGP_GetTrackMatteContext` | Retrieves the `AEGP_RenderLayerContextH` for the specified render and fill contexts. |
| | <pre lang="cpp">AEGP_GetTrackMatteContext(<br/>  PR_RenderContextH         rnder_contextH,<br/>  AEGP_RenderLayerContextH  fill_contextH,<br/>  AEGP_RenderLayerContextH  \*mattePH);</pre> |
| `AEGP_RenderTextureWithReceipt` | Renders a texture into an `AEGP_WorldH`, and provides an `AEGP_RenderReceiptH` for the operation. |
| | The returned `receiptPH` must be disposed of with `AEGP_DisposeRenderReceipt`. |
| | <pre lang="cpp">AEGP_RenderTextureWithReceipt(<br/>  PR_RenderContextH         render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  AEGP_RenderHints          render_hints,<br/>  A_FloatPoint              \*suggested_scaleP0,<br/>  A_FloatRect               \*suggest_src_rectP0,<br/>  A_Matrix3                 \*src_matrixP0,<br/>  AEGP_RenderReceiptH       \*receiptPH,<br/>  AEGP_WorldH               \*dstPH);</pre> |
| `AEGP_GetNumberOfSoftwareEffects` | Returns the number of software effects applied in the given `AEGP_RenderLayerContextH`. |
| | <pre lang="cpp">AEGP_GetNumberOfSoftwareEffects(<br/>  PR_RenderContextH         ren_contextH,<br/>  AEGP_RenderLayerContextH  lyr_contextH,<br/>  A_short                   \*num_sft_FXPS);</pre> |
| `AEGP_RenderLayerPlusWithReceipt` | An improvement over `AEGP_RenderLayerPlus`, this function also provides an `AEGP_RenderReceiptH` for caching purposes. |
| | <pre lang="cpp">AEGP_RenderLayerPlusWithReceipt(<br/>  PR_RenderContextH            render_contextH,<br/>  AEGP_LayerH                  layerH,<br/>  AEGP_RenderLayerContextH     layer_contextH,<br/>  AEGP_RenderHints             render_hints,<br/>  AEGP_NumEffectsToRenderType  num_effectsS,<br/>  AEGP_RenderReceiptH          \*receiptPH,<br/>  AEGP_WorldH                  \*bufferPH);</pre> |
| `AEGP_DisposeRenderReceipt` | Frees an `AEGP_RenderReceiptH`. |
| | <pre lang="cpp">AEGP_DisposeRenderReceipt(<br/>  AEGP_RenderReceiptH  receiptH);</pre> |
| `AEGP_CheckRenderReceipt` | Checks with After Effects' internal caching to determine whether a given `AEGP_RenderReceiptH` is still valid. |
| | <pre lang="cpp">AEGP_CheckRenderReceipt(<br/>  PR_RenderContextH            current_contextH,<br/>  AEGP_RenderLayerContextH     current_lyr_ctxtH,<br/>  AEGP_RenderReceiptH          old_receiptH,<br/>  A_Boolean                    check_aceB,<br/>  AEGP_NumEffectsToRenderType  num_effectsS,<br/>  AEGP_RenderReceiptStatus     \*receipt_statusP);</pre> |
| `AEGP_GenerateRenderReceipt` | Generates a `AEGP_RenderReceiptH` for a layer as if the first `num_effectsS` have been rendered. |
| | <pre lang="cpp">AEGP_GenerateRenderReceipt(<br/>  PR_RenderContextH            current_contextH,<br/>  AEGP_RenderLayerContextH     current_lyr_contextH,<br/>  AEGP_NumEffectsToRenderType  num_effectsS,<br/>  AEGP_RenderReceiptH          \*render_receiptPH);</pre> |
| `AEGP_GetNumBinsToRender` | Returns the number of bins After Effects wants the artisan to render. |
| | <pre lang="cpp">AEGP_GetNumBinsToRender(<br/>  const PR_RenderContextH  contextH,<br/>  A_long                   \*num_binsPL);</pre> |
| `AEGP_SetNthBin` | Sets the given render context to be the n-th bin to be rendered by After Effects. |
| | <pre lang="cpp">AEGP_SetNthBin(<br/>  const PR_RenderContextH  contextH,<br/>  A_long                   n);</pre> |
| `AEGP_GetBinType` | Retrieves the type of the given bin. |
| | <pre lang="cpp">AEGP_GetBinType(<br/>  const PR_RenderContextH  contextH,<br/>  AEGP_BinType             \*bin_typeP);</pre> |
| | `AEGP_BinType` will be one of the following: |
| | - `AEGP_BinType_NONE` |
| | - `AEGP_BinType_2D` |
| | - `AEGP_BinType_3D` |
| `AEGP_GetRenderLayerToWorldXform2D3D` | Retrieves the transform to correctly orient the layer being rendered with the output world. |
| | Pass `TRUE` for `only_2dB` to constrain the transform to two dimensions. |
| | <pre lang="cpp">AEGP_GetRenderLayerToWorldXform2D3D(<br/>  PR_RenderContextH         render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  const A_Time              \*comp_timeP,<br/>  A_Boolean                 only_2dB,<br/>  A_Matrix4                 \*transformP);</pre> |

:::note
Functions below are for interactive artisans only.
:::

| Function | Purpose |
|---|---|
| `AEGP_GetPlatformWindowRef` | Retrieves the platform-specific window context into which to draw the given `PR_RenderContextH`. |
| | <pre lang="cpp">AEGP_GetPlatformWindowRef(<br/>  const PR_RenderContextH  contextH,<br/>  AEGP_PlatformWindowRef   \*window_refP);</pre> |
| `AEGP_GetViewportScale` | Retrieves the source-to-frame downsample factor for the given `PR_RenderContextH`. |
| | <pre lang="cpp">AEGP_GetViewportScale(<br/>  const PR_RenderContextH  contextH,<br/>  A_FpLong                 \*scale_xPF,<br/>  A_FpLong                 \*scale_yPF);</pre> |
| `AEGP_GetViewportOrigin` | Retrieves to origin of the source, within the frame (necessary to translate between the two), for the given `PR_RenderContextH`. |
| | <pre lang="cpp">AEGP_GetViewportOrigin(<br/>  const PR_RenderContextH  contextH,<br/>  A_long                   \*origin_xPL,<br/>  A_long                   \*origin_yPL);</pre> |
| `AEGP_GetViewportRect` | Retrieves the bounding rectangle for the area to be drawn, for the given `PR_RenderContextH`. |
| | <pre lang="cpp">AEGP_GetViewportRect(<br/>  const PR_RenderContextH  contextH,<br/>  A_LegacyRect             \*v_rectPR);</pre> |
| `AEGP_GetFallowColor` | Retrieves the color used for the fallow regions in the given `PR_RenderContextH`. |
| | <pre lang="cpp">AEGP_GetFallowColor(<br/>  const PR_RenderContextH  contextH,<br/>  PF_Pixel8                \*fallow_colorP);</pre> |
| `AEGP_GetInteractiveCheckerboard` | Retrieves whether or not the checkerboard is currently active for the given `PR_RenderContextH`. |
| | <pre lang="cpp">AEGP_GetInteractiveCheckerboard(<br/>  const PR_RenderContextH  contextH,<br/>  A_Boolean                \*cboard_onPB);</pre> |
| `AEGP_GetInteractiveCheckerboardColors` | Retrieves the colors used in the checkerboard. |
| | <pre lang="cpp">AEGP_GetInteractiveCheckerboardColors(<br/>  const PR_RenderContextH  contextH,<br/>  PF_Pixel                 \*color1P,<br/>  PF_Pixel                 \*color2P);</pre> |
| `AEGP_GetInteractiveCheckerboardSize` | Retrieves the width and height of one checkerboard square. |
| | <pre lang="cpp">AEGP_GetInteractiveCheckerboardSize(<br/>  const PR_RenderContextH  contextH,<br/>  A_u_long                 \*cbd_widthPLu,<br/>  A_u_long                 \*cbd_heightPLu);</pre> |
| `AEGP_GetInteractiveCachedBuffer` | Retrieves the cached AEGP_WorldH last used for the `PR_RenderContextH`. |
| | <pre lang="cpp">AEGP_GetInteractiveCachedBuffer(<br/>  const PR_RenderContextH  contextH,<br/>  AEGP_WorldH              \*buffer);</pre> |
| `AEGP_ArtisanMustRenderAsLayer` | Determines whether or not the artisan must render the current `AEGP_RenderLayerContextH` as a layer. |
| | <pre lang="cpp">AEGP_ArtisanMustRenderAsLayer(<br/>  const PR_RenderContextH   contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  A_Boolean                 \*use_txturePB);</pre> |
| `AEGP_GetInteractiveDisplayChannel` | Returns which channels should be displayed by the interactive artisan. |
| | <pre lang="cpp">AEGP_GetInteractiveDisplayChannel(<br/>  const PR_RenderContextH  contextH,<br/>  AEGP_DisplayChannelType  \*channelP);</pre> |
| | `AEGP_DisplayChannelType` will be one of the following: |
| | - `AEGP_DisplayChannel_NONE` |
| | - `AEGP_DisplayChannel_RED` |
| | - `AEGP_DisplayChannel_GREEN` |
| | - `AEGP_DisplayChannel_BLUE` |
| | - `AEGP_DisplayChannel_ALPHA` |
| | - `AEGP_DisplayChannel_RED_ALT` |
| | - `AEGP_DisplayChannel_GREEN_ALT` |
| | - `AEGP_DisplayChannel_BLUE_ALT` |
| | - `AEGP_DisplayChannel_ALPHA_ALT` |
| `AEGP_GetInteractiveExposure` | Returns the exposure for the given `PR_RenderContextH`, expressed as a floating point number. |
| | <pre lang="cpp">AEGP_GetInteractiveExposure(<br/>  const PR_RenderContextH  rcH,<br/>  A_FpLong                 \*exposurePF);</pre> |
| `AEGP_GetColorTransform` | Returns the color transform for the given `PR_RenderContextH`. |
| | <pre lang="cpp">AEGP_GetColorTransform(<br/>  const PR_RenderContextH  render_contextH,<br/>  A_Boolean                \*cms_onB,<br/>  A_u_long                 \*xform_keyLu,<br/>  void                      \*xformP);</pre> |
| `AEGP_GetCompShutterTime` | Returns the shutter angle for the given `PR_RenderContextH`. |
| | <pre lang="cpp">AEGP_GetCompShutterTime(<br/>  PR_RenderContextH  render_contextH,<br/>  A_Time             \*shutter_time,<br/>  A_Time             \*shutter_dur);</pre> |
| `AEGP_MapCompToLayerTime` | New in CC. Unlike [AEGP_ConvertCompToLayerTime](../../aegps/aegp-suites#aegp_layersuite9), this handles time remapping with collapsed or nested comps. |
| | <pre lang="cpp">AEGP_MapCompToLayerTime(<br/>  PR_RenderContextH         render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  const A_Time              \*comp_timePT,<br/>  A_Time                    \*layer_timePT);</pre> |

---

## Convert Between Different Contexts

Convert between render and instance contexts, and manage global data specific to the artisan.

### AEGP_ArtisanUtilSuite1

| Function | Purpose |
|---|---|
| `AEGP_GetGlobalContextFromInstanceContext` | Given an instance context, returns a handle to the global context. |
| | <pre lang="cpp">AEGP_GetGlobalContextFromInstanceContext(<br/>  const PR_InstanceContextH  instance_contextH,<br/>  PR_GlobalContextH          \*global_contextPH);</pre> |
| `AEGP_GetInstanceContextFromRenderContext` | Given the render context, returns a handle to the instance context. |
| | <pre lang="cpp">AEGP_GetInstanceContextFromRenderContext(<br/>  const PR_RenderContextH  render_contextH,<br/>  PR_InstanceContextH      \*instnc_ctextPH);</pre> |
| `AEGP_GetInstanceContextFromQueryContext` | Given a query context, returns a handle to the instance context. |
| | <pre lang="cpp">AEGP_GetInstanceContextFromQueryContext(<br/>  const PR_QueryContextH  query_contextH,<br/>  PR_InstanceContextH     \*instnce_contextPH);</pre> |
| `AEGP_GetGlobalData` | Given the global context, returns a handle to global data. |
| | <pre lang="cpp">AEGP_GetGlobalData(<br/>  const PR_GlobalContextH  global_contextH,<br/>  PR_GlobalDataH           \*global_dataPH);</pre> |
| `AEGP_GetInstanceData` | Given an instance context, return the associated instance data. |
| | <pre lang="cpp">AEGP_GetInstanceData(<br/>  const PR_InstanceContextH  instance_contextH,<br/>  PR_InstanceDataH           \*instance_dataPH);</pre> |
| `AEGP_GetRenderData` | Given a render context, returns the associated render data. |
| | <pre lang="cpp">AEGP_GetRenderData(<br/>  const PR_RenderContextH  render_contextH,<br/>  PR_RenderDataH           \*render_dataPH);</pre> |

---

## Smile! Cameras

Obtains the camera geometry, including camera properties (type, lens, depth of field, focal distance, aperture, et cetera).

### AEGP_CameraSuite2

| Function | Purpose |
|---|---|
| `AEGP_GetCamera` | Given a layer handle and time, returns the current camera layer handle. |
| | <pre lang="cpp">AEGP_GetCamera(<br/>  PR_RenderContextH  render_contextH,<br/>  const A_Time       \*comp_timeP,<br/>  AEGP_LayerH        \*camera_layerPH);</pre> |
| `AEGP_GetCameraType` | Given a layer, returns the camera type of the layer. |
| | <pre lang="cpp">AEGP_GetCameraType(<br/>  AEGP_LayerH      aegp_layerH,<br/>  AEGP_CameraType  \*camera_typeP;</pre> |
| | The camera type can be the following: |
| | - `AEGP_CameraType_NONE = -1` |
| | - `AEGP_CameraType_PERSPECTIVE` |
| | - `AEGP_CameraType_ORTHOGRAPHIC` |
| `AEGP_GetDefaultCameraDistanceToImagePlane` | Given a composition handle, returns the camera distance to the image plane. |
| | <pre lang="cpp">AEGP_GetDefaultCamera DistanceToImagePlane(<br/>  AEGP_CompH  compH,<br/>  A_FpLong    \*dist_to_planePF)</pre> |
| `AEGP_GetCameraFilmSize` | Retrieves the size (and units used to measure that size) of the film used by the designated camera. |
| | <pre lang="cpp">AEGP_GetCameraFilmSize(<br/>  AEGP_LayerH         camera_layerH,<br/>  AEGP_FilmSizeUnits  \*film_size_unitsP,<br/>  A_FpLong            \*film_sizePF0);</pre> |
| `AEGP_SetCameraFilmSize` | Sets the size (and unites used to measure that size) of the film used by the designated camera. |
| | <pre lang="cpp">AEGP_SetCameraFilmSize)(<br/>  AEGP_LayerH         camera_layerH,<br/>  AEGP_FilmSizeUnits  film_size_units,<br/>  A_FpLong            \*film_sizePF0);</pre> |

---

## Notes Regarding Camera Behavior

Camera orientation is in composition coordinates, and the rotations are in layer (the camera's layer) coordinates.

If the camera layer has a parent, the position is in a coordinate space relative to the parent.

---

## Orthographic Camera Matrix

Internally, we use composition width and height to set the matrix described by the OpenGL specification as

```cpp
glOrtho(-width/2, width/2, -height/2, height/2, -1, 100);
```

The orthographic matrix describes the projection. The position of the camera is described by another, scaled matrix. The inverse of the camera position matrix provides the "eye" coordinates.

---

## Focus On Focal

Remember, focal length affects field of view; focal distance only affects depth of field.

---

## Film Size

In the real world, film size is measured in millimeters. In After Effects, it's measured in pixels. Multiply by 72 and divide by 25.4 to move from millimeters to pixels.

Field of view is more complex;

ϴ = 1/2 field of view

tan(ϴ) = 1/2 composition height / focal length

focal length = 2 tan(ϴ) / composition height

---

## Hit The Lights!

Get and set the type of lights in a composition.

### AEGP_LightSuite2

| Function | Purpose |
|---|---|
| `AEGP_GetLightType` | Retrieves the `AEGP_LightType` of the specified camera layer. |
| | <pre lang="cpp">AEGP_GetLightType(<br/>  AEGP_LayerH     light_layerH,<br/>  AEGP_LightType  \*light_typeP);</pre> |
| | `AEGP_LightType` will be one of the following: |
| | - `AEGP_LightType_PARALLEL` |
| | - `AEGP_LightType_SPOT` |
| | - `AEGP_LightType_POINT` |
| | - `AEGP_LightType_AMBIENT` |
| `AEGP_SetLightType` | Sets the `AEGP_LightType` for the specified camera layer. |
| | <pre lang="cpp">AEGP_SetLightType(<br/>  AEGP_LayerH     light_layerH,<br/>  AEGP_LightType  light_type);</pre> |

### Notes On Light Behavior

The formula for parallel lights is found in Foley and Van Dam's "Introduction to Computer Graphics" (ISBN 0-201-60921-5) as is the formula for point lights.

We use the half angle variant proposed by Jim Blinn instead.

Suppose we have a point on a layer and want to shade it with the light.

Let V be the unit vector from the layer point to the eye point.
Let L be the unit vector to the light (in the parallel light case this is constant). Let H be (V+L)/2 (normalized).
Let N be the unit normal vector to the layer.

The amount of specular reflected light is S \* power(H Dot N, shine), where S is the specular coefficient.

---

## How Should I Draw That?

After Effects relies upon Artisans to draw 3D layer handles. If your Artisan chooses not to respond to this call, the default Artisan will draw 3D layer handles for you. Querying transforms is important for optimization of After Effects' caching.

The coordinate system is positive x to right, positive y down, positive z into the screen. The origin is the upper left corner. Rotations are x then y then z. For matrices the translate is the bottom row, orientations are quaternions (which are applied first), then any x-y-z rotation after that. As a general rule, use orientation or rotation but not both. Also use rotations if you need control over angular velocity.

---

## Query Transform Functions

These functions give artisans information about the transforms they'll need in order to correctly place layers within a composition and respond appropriately to the various queries After Effects will send to their `PR_QueryFunc` entry point function.

As that entry point is optional, so is your artisan's response to the queries; however, if you don't, your users may be disappointed that (while doing interactive preview drawing) all the camera and light indicators vanish, until they stop moving! Artisans are complex beasts; contact us if you have any questions.

### AEGP_QueryXFormSuite2

| Function | Purpose |
|---|---|
| `AEGP_QueryXformGetSrcType` | Given a query context, returns trasnsform source currently being modified. |
| | <pre lang="cpp">AEGP_QueryXformGetSrcType(<br/>  PR_QueryContextH     query_contextH,<br/>  AEGP_QueryXformType  \*src_type);</pre> |
| | The query context will be one of the following: |
| | - `AEGP_Query_Xform_LAYER` |
| | - `AEGP_Query_Xform_WORLD` |
| | - `AEGP_Query_Xform_VIEW` |
| | - `AEGP_Query_Xform_SCREEN` |
| `AEGP_QueryXformGetDstType` | Given a query context, returns the currently requested transform destination. |
| | <pre lang="cpp">AEGP_QueryXformGetDstType(<br/>  PR_QueryContextH     query_contextH,<br/>  AEGP_QueryXformType  \*dst_type);</pre> |
| `AEGP_QueryXformGetLayer` | Used if the source or destination type is a layer. Given a query context, returns the layer handle. |
| | <pre lang="cpp">AEGP_QueryXformGetLayer(<br/>  PR_QueryContextH  query_contextH,<br/>  AEGP_LayerH       \*layerPH);</pre> |
| `AEGP_QueryXformGetComp` | Given a query context, returns the current composition handle. |
| | <pre lang="cpp">AEGP_QueryXformGetComp(<br/>  PR_QueryContextH  query_contextH,<br/>  AEGP_CompH        \*compPH);</pre> |
| `AEGP_QueryXformGetTransformTime` | Given a query context, returns the time of the transformation. |
| | <pre lang="cpp">AEGP_QueryXformGetTransformTime(<br/>  PR_QueryContextH  query_contextH,<br/>  A_Time            \*time);</pre> |
| `AEGP_QueryXformGetViewTime` | Given a query context, returns the time of the associated view. |
| | <pre lang="cpp">AEGP_QueryXformGetViewTime(<br/>  PR_QueryContextH  query_contextH,<br/>  A_Time            \*time);</pre> |
| `AEGP_QueryXformGetCamera` | Given a query context, returns the current camera layer handle. |
| | <pre lang="cpp">AEGP_QueryXformGetCamera(<br/>  PR_QueryContextH  query_contextH,<br/>  AEGP_LayerH       \*camera_layerPH);</pre> |
| `AEGP_QueryXformGetXform` | Given a query context, returns the current matrix transform. |
| | <pre lang="cpp">AEGP_QueryXformGetXform(<br/>  PR_QueryContextH  query_contextH,<br/>  A_Matrix4         \*xform);</pre> |
| `AEGP_QueryXformSetXform` | Given a query context, return the matrix transform you compute in `xform`. |
| | <pre lang="cpp">AEGP_QueryXformSetXform(<br/>  PR_QueryContextH  query_contextH,<br/>  A_Matrix4         \*xform);</pre> |
| `AEGP_QueryWindowRef` | Sets the window reference to be used (by After Effects) for the given `PR_QueryContextH`. |
| | <pre lang="cpp">AEGP_QueryWindowRef(<br/>  PR_QueryContextH        q_contextH,<br/>  AEGP_PlatformWindowRef  \*window_refP);</pre> |
| `AEGP_QueryWindowClear` | Returns which `AEGP_PlatformWindowRef` (and `A_Rect`) to clear, for the given `PR_QueryContextH`. |
| | <pre lang="cpp">AEGP_QueryWindowClear(<br/>  PR_QueryContextH        q_contextH,<br/>  AEGP_PlatformWindowRef  \*window_refP,<br/>  A_LegacyRect            \*boundsPR);</pre> |
| `AEGP_QueryFrozenProxy` | Returns whether or not the textures used in the given `PR_QueryContextH` should be frozen. |
| | <pre lang="cpp">AEGP_QueryFrozenProxy(<br/>  PR_QueryContextH  q_contextH,<br/>  A_Boolean         \*onPB);</pre> |
| `AEGP_QuerySwapBuffer` | Sent after rendering and camera/light handle drawing is complete; After Effects returns the buffer into which the artisan should draw its output. |
| | <pre lang="cpp">AEGP_QuerySwapBuffer(<br/>  PR_QueryContextH        q_contextH,<br/>  AEGP_PlatformWindowRef  \*window_refP,<br/>  AEGP_WorldH             \*dest_bufferp);</pre> |
| `AEGP_QueryDrawProcs` | Sets the interactive drawing functions After Effects will call while drawing camera and lighting handles into the artisan's provided context. |
| | <pre lang="cpp">AEGP_QueryDrawProcs(<br/>  PR_QueryContextH         query_contextH,<br/>  PR_InteractiveDrawProcs  \*window_refP);</pre> |
| `AEGP_QueryPrepareForLineDrawing` | Informs After Effects about the context into which it will be drawing. |
| | <pre lang="cpp">AEGP_QueryPrepareForLineDrawing(<br/>  PR_QueryContextH        query_contextH,<br/>  AEGP_PlatformWindowRef  \*window_refP,<br/>  A_LegacyRect            \*viewportP,<br/>  A_LPoint                \*originP,<br/>  A_FloatPoint            \*scaleP);</pre> |
| `AEGP_QueryUnprepareForLineDrawing` | As far as After Effects is concerned, the artisan is done drawing lines. |
| | <pre lang="cpp">AEGP_QueryUnprepareForLineDrawing(<br/>  PR_QueryContextH        query_contextH,<br/>  AEGP_PlatformWindowRef  \*window_refP);</pre> |

---

## Interactive Drawing Functions

We've added the ability for artisans to provide functions After Effects can use to do basic drawing functions for updating the comp window display during preview, including camera, light, and wireframe preview modeling.

### PR_InteractiveDrawProcs

| Function | Purpose |
| --- | --- |
| `PR_Draw_MoveToFunc` | <pre lang="cpp">PR_Draw_MoveToFunc(<br/>  short  x,<br/>  short  y);</pre> |
| `PR_Draw_LineToFunc` | <pre lang="cpp">PR_Draw_LineToFunc(<br/>  short  x,<br/>  short  y);</pre> |
| `PR_Draw_ForeColorFunc` | <pre lang="cpp">PR_Draw_ForeColorFunc(<br/>  const A_Color  \*fore_colo</pre> |
| `PR_Draw_FrameRectFunc` | <pre lang="cpp">PR_Draw_FrameRectFunc(<br/>  const A_Rect  \*rectPR );</pre> |
| `PR_Draw_PaintRectFunc` | <pre lang="cpp">PR_Draw_PaintRectFunc(<br/>  const A_Rect  \*rectPR );</pre> |

---

## Notes On Query Time Functions

`AEGP_QueryXformGetTransformTime()` and `AEGP_QueryXformGetViewTime()` are both necessary for an artisan to build a representation of the scene to render.

`AEGP_QueryXformGetTransformTime()` gets the time of the transform, which is then passed to `AEGP_GetCompShutterFrameRange()` from [AEGP_CompSuite11](../../aegps/aegp-suites#aegp_compsuite11).

`AEGP_QueryXformGetViewTime()` gets the time of the view, which is used in calling `AEGP_GetLayerToWorldXformFromView()` from [AEGP_LayerSuite9](../../aegps/aegp-suites#aegp_layersuite9).
