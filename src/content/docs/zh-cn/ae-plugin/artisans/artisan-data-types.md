---
title: artisan 数据类型
---
# Artisan 数据类型

以下是 Artisan API 中最常用的数据类型。

---

## Artisan API 中使用的数据类型

| 类型 | 描述 |
| --- | --- |
| `AEGP_RenderLayerContextH` | 渲染请求时的状态信息，由 After Effects 发送给 Artisan。 |
| `PR_RenderContextH` | 定义渲染内容和方式的设置集合。 |
| `AEGP_SoundDataH` | 用于给定图层的音频设置。 |
| `AEGP_RenderReceiptH` | 由 Artisan 在渲染时使用。 |
| `AEGP_FrameReceiptH` | |
| `AEGP_WorldH` | 一帧像素。 |
| `AEGP_RenderOptionsH` | 与渲染队列项相关的设置。 |

---

## 水平还是垂直？

After Effects 的矩阵是基于行的；OpenGL 的矩阵是基于列的。这意味着你需要做更多的工作。耶，可计费的时间！

---

## 实现与设计

Artisan 几乎是一个独立的应用程序。因为在 After Effects 5.0 的早期阶段，我们就意识到 3D 渲染中存在许多问题需要解决；例如交叉和阴影。

我们提供了一个 API，使我们和第三方（是的，我们确实使用自己的 API）可以实现任何所需的 3D 渲染方案。

---

## 3D 合成，而非建模

After Effects **不是** 3D 建模应用程序。用户在响应模式下工作，仅在校对或最终输出时切换到更高质量。考虑提供至少两种质量模式，一种用于布局，另一种用于最终输出。在低质量模式下要注意渲染时间。

---

## 注册 Artisan

Artisan 是一个 AEGP，并且只有一个入口函数。Artisan 还必须注册自己的函数入口函数，并为此目的有一个特殊的回调。请参阅 [AEGP_RegisterSuites5](../../aegps/aegp-suites#aegp_registersuites5) 中的 `AEGP_RegisterArtisan()`。

此表显示了 Artisan 可以支持的函数，由 `PR_ArtisanEntryPoints` 定义：只有 `render_func` 是必需的。

### Artisan 入口函数

| PR_ArtisanEntryPoints | |
| --- | --- |
| `global_setup_func0` | 仅在 `GP_Main` 之后调用一次。全局数据在所有插件实例之间共享。 |
| | 如果在全局设置期间分配了内存，则必须在 `global_setdown_func` 期间释放它。 |
| | `<pre lang="cpp">`PR_GlobalSetupFunc(``const PR_InData    \*in_dataP,``  PR_GlobalContextH  global_contextH,``  PR_GlobalDataH     \*global_dataPH);`</pre>` |
| `global_setdown_func0` | 释放你分配的任何全局数据。 |
| | `<pre lang="cpp">`PR_GlobalSetdownFunc(``const PR_InData    \*in_dataP,``  PR_GlobalContextH  global_contextH,``  PR_GlobalDataH     global_dataH);`</pre>` |
| `global_do_about_func0` | 向世界介绍你自己！使用 `in_dataP>msg_func` 显示你的对话框。 |
| | `<pre lang="cpp">`PR_GlobalDoAboutFunc(``const PR_InData    \*in_dataP,``  PR_GlobalContextH  global_contextH,``  PR_GlobalDataH     global_dataH);`</pre>` |
| `setup_instance_func0` | 分配并实例化此 Artisan 实例的特定数据。 |
| | `<pre lang="cpp">`PR_InstanceSetupFunc(``const PR_InData      \*in_dataP,``  PR_GlobalContextH    global_contextH,``PR_InstanceContextH  instance_contextH,``  PR_GlobalDataH       global_dataH,``PR_InstanceFlags     flags,``  PR_FlatHandle        flat_dataH0,``  PR_InstanceDataH     \*instance_dataPH);`</pre>` |
| `setdown_instance_func0` | 释放并释放此 Artisan 实例的特定数据。 |
| | `<pre lang="cpp">`PR_InstanceSetdownFunc(``const PR_InData      \*in_dataP,``  PR_GlobalContextH    global_contextH,``PR_InstanceContextH  instance_contextH,``  PR_GlobalDataH       global_dataH,``  PR_InstanceDataH     instance_dataH);`</pre>` |
| `flatten_instance_func0` | 在准备写入磁盘时展平你的数据。（确保它是操作系统独立的，如果你的 Artisan 是）。 |
| | `<pre lang="cpp">`PR_FlattenInstanceFunc(``const PR_InData      \*in_dataP,``  PR_GlobalContextH    global_contextH,``PR_InstanceContextH  instance_contextH,``  PR_GlobalDataH       global_dataH,``PR_InstanceDataH     instance_dataH,``  PR_FlatHandle        \*flatH);`</pre>` |
| `do_instance_dialog_func0` | 如果你的 Artisan 有额外的参数（通过其选项对话框访问），将调用此函数来获取和设置它们。 |
| | `<pre lang="cpp">`PR_DoInstanceDialogFunc(``const PR_InData      \*in_dataP,``  PR_GlobalContextH    global_contextH,``PR_InstanceContextH  instance_contextH,``  PR_GlobalDataH       global_dataH,``PR_InstanceDataH     instance_dataH,``  PR_DialogResult      \*resultP);`</pre>` |
| | `PR_DialogResultis` 是 `PR_DialogResult_NO_CHANGE` 或 `PR_DialogResult_CHANGE_MADE`。 |
| `frame_setup_func0` | 执行渲染帧所需的任何设置（在渲染之前立即调用）。 |
| | `<pre lang="cpp">`PR_FrameSetupFunc(``const PR_InData      \*in_dataP,``  PR_GlobalContextH    global_contextH,``PR_InstanceContextH  instance_contextH``  PR_RenderContextH    render_contextH,``PR_GlobalDataH       global_dataH,``  PR_InstanceDataH     instance_dataH,``  PR_RenderDataH       \*render_dataPH);`</pre>` |
| `frame_setdown_func0` | 释放 `frame_setup` 期间分配的任何设置数据（在渲染后立即发送）。 |
| | `<pre lang="cpp">`PR_FrameSetdownFunc(``const PR_InData      \*in_dataP,``  PR_GlobalContextH    global_contextH,``PR_InstanceContextH  instance_contextH``  PR_RenderContextH    render_contextH,``PR_GlobalDataH       global_dataH,``  PR_InstanceDataH     instance_dataH,``  PR_RenderDataH       render_dataH);`</pre>` |
| `render_func` | 渲染场景。 |
| | `<pre lang="cpp">`PR_FrameRenderFunc(``const PR_InData      \*in_dataP,``  PR_GlobalContextH    global_contextH,``PR_InstanceContextH  instance_contextH``  PR_RenderContextH    render_contextH,``PR_GlobalDataH       global_dataH,``  PR_InstanceDataH     instance_dataH,``  PR_RenderDataH       render_dataH);`</pre>` |
| `query_func0` | Artisan 可以绘制自己的投影轴，如果需要的话。 |
| | After Effects 将调用此函数以获取合成世界与这些轴之间的变换，以及与屏幕内外预览绘制相关的许多其他函数（前者仅与交互式 Artisan 相关）。 |
| | `<pre lang="cpp">`PR_QueryFunc(``const PR_InData      \*in_dataP,``  PR_GlobalContextH    global_contextH,``PR_InstanceContextH  instance_contextH``  PR_QueryContextH     query_contextH,``PR_QueryType         query_type,``  PR_GlobalDataH       global_dataH,``  PR_InstanceDataH     instance_dataH);`</pre>` |
| | `PR_QueryType` 可以是以下之一： |
| | -`PR_QueryType_NONE = 0` |
| | -`PR_QueryType_TRANSFORM` |
| | -`PR_QueryType_INTERACTIVE_WINDOW_DISPOSE` |
| | -`PR_QueryType_INTERACTIVE_WINDOW_CLEAR` |
| | -`PR_QueryType_INTERACTIVE_WINDOW_FROZEN_PROXY` |
| | -`PR_QueryType_INTERACTIVE_SWAP_BUFFER` |
| | -`PR_QueryType_INTERACTIVE_DRAW_PROCS` |
| | -`PR_QueryType_PREPARE_FOR_LINE_DRAWING` |
| | -`PR_QueryType_UNPREPARE_FOR_LINE_DRAWING` |
| | -`PR_QueryType_GET_CURRENT_CONTEXT_SAFE_FOR_LINE_DRAWING` |
| | -`PR_QueryType_GET_ARTISAN_QUALITY` (CS6 新增) |

---

## 世界是你的画布

`AEGP_RenderTexture()` 将图层的原始像素（未变换）提供到任意大小的缓冲区中。

`AEGP_RenderLayer()` 调用整个 After Effects 渲染管道，包括变换、遮罩等，提供图层在合成中的外观，并在合成大小的缓冲区中提供。

如果要渲染的图层是 3D 的，则调用默认的（标准 3D）Artisan 来执行任何 3D 几何操作。

你的 Artisan 可以使用它来渲染轨道遮罩图层，并仅以严格的 2D 方式将其应用于变换后的 3D 图层。

在渲染之前，After Effects 附带的 Artisan 会应用逆变换以获得方形像素，然后在显示之前重新应用变换。

例如，如果像素宽高比为 10/11（DV NTSC），我们乘以 11/10 以获得方形像素。我们处理和合成 3D 图层，然后重新除以以恢复原始像素宽高比。

以下套件提供了图层、合成、纹理和目标缓冲区。这是所有 Artisan 的重要套件。

### AEGP_CanvasSuite8

| 函数 | 用途 |
|---|---|
| `AEGP_GetCompToRender` | 给定渲染时提供给 Artisan 的渲染上下文，返回合成的句柄。 |
| | <pre lang="cpp">AEGP_GetCompToRender(<br/>  PR_RenderContextH  render_contextH,<br/>  AEGP_CompH   \*compPH)</pre> |
| `AEGP_GetNumLayersToRender` | 给定渲染上下文，返回 Artisan 需要渲染的图层数量。 |
| | <pre lang="cpp">AEGP_GetNumLayersToRender(<br/>  PR_RenderContextH  render_contextH,<br/>  A_long   \*num_to_renderPL)</pre> |
| `AEGP_GetNthLayerContextToRender` | 用于在确定 Artisan 需要渲染的总图层数量后，构建要渲染的图层列表。 |
| | <pre lang="cpp">AEGP_GetNthLayerContextToRender(<br/>  PR_RenderContextH   render_contextH,<br/>  A_long    n,<br/>  AEGP_RenderLayerContextH  \*layer_indexPH)</pre> |
| `AEGP_GetLayerFromLayerContext` | 给定一个 `AEGP_RenderLayerContextH`，检索关联的 `AEGP_LayerH`（许多套件函数需要）。 |
| | <pre lang="cpp">AEGP_GetLayerFromLayerContext(<br/>  const PR_RenderContextH   render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  AEGP_LayerH   \*layerPH);</pre> |
| `AEGP_GetLayerAndSubLayerFromLayerContext` | 允许渲染子图层（如 Photoshop 文件中的子图层）。 |
| | <pre lang="cpp">AEGP_GetLayerAndSubLayerFromLayerContext(<br/>  const PR_RenderContextH   render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  AEGP_LayerH   \*layerPH,<br/>  AEGP_SubLayerIndex    \*sublayerP);</pre> |
| `AEGP_GetTopLayerFromLayerContext` | 当折叠几何体“开启”时，返回包含图层上下文的根合成中的图层。 |
| | 当折叠几何体关闭时，这与 `AEGP_GetLayerFromLayerContext` 相同。 |
| | <pre lang="cpp">AEGP_GetTopLayerFromLayerContext(<br/>  const PR_RenderContextH   r_contextH,<br/>  AEGP_RenderLayerContextH  l_contextH,<br/>  AEGP_LayerH   \*layerPH);</pre> |
| `AEGP_GetCompRenderTime` | 给定渲染上下文，返回要渲染的当前（合成）时间点。 |
| | <pre lang="cpp">AEGP_GetNthLayerIndexToRender(<br/>  PR_RenderContextH  render_contextH,<br/>  A_long   \*time,<br/>  A_long   \*time_step)</pre> |
| `AEGP_GetCompDestinationBuffer` | 给定渲染上下文，返回用于放置最终渲染输出的缓冲区。 |
| | <pre lang="cpp">AEGP_GetCompToRender(<br/>  PR_RenderContextH  render_contextH,<br/>  AEGP_CompH   compH,<br/>  PF_EffectWorld   \*dst);</pre> |
| `AEGP_GetROI` | 给定渲染时提供给 Artisan 的渲染上下文，返回合成的句柄。 |
| | <pre lang="cpp">AEGP_GetROI(<br/>  PR_RenderContextH  render_contextH,<br/>  A_LegacyRect   \*roiPR);</pre> |
| `AEGP_RenderTexture` | 给定渲染上下文和图层，返回图层纹理。 |
| | 所有以 '0' 结尾的参数都是可选的；返回的 `PF_EffectWorld` 可以为 NULL。 |
| | <pre lang="cpp">AEGP_RenderTexture(<br/>  PR_RenderContextH  render_contextH,<br/>  AEGP_LayerH    layerH,<br/>  AEGP_RenderHints   render_hints,<br/>  A_FloatPoint   \*suggested_scaleP0,<br/>  A_FloatRect    \*suggsted_src_rectP0,<br/>  A_Matrix3    \*src_matrixP0,<br/>  PF_EffectWorld   \*render_bufferP);</pre> |
| | `AEGP_RenderHints` 包含以下一个或多个： |
| | - `AEGP_RenderHints_NONE` |
| | - `AEGP_RenderHints_IGNORE_EXTENTS` |
| | - `AEGP_RenderHints_NO_TRANSFER_MODE`（防止应用不透明度和传输模式；用于 `RenderLayer` 调用。） |
| `AEGP_DisposeTexture` | 释放获取的图层纹理。 |
| | <pre lang="cpp">AEGP_DisposeTexture(<br/>  PR_RenderContextH  render_contextH,<br/>  AEGP_LayerH    layerH,<br/>  AEGP_WorldH    \*dst0);</pre> |
| `AEGP_GetFieldRender` | 返回给定 `PR_RenderContextH` 的场设置。 |
| | <pre lang="cpp">AEGP_GetFieldRender(<br/>  PR_RenderContextH  render_contextH,<br/>  PF_Field   \*field);</pre> |
| `AEGP_ReportArtisanProgress` | 给定渲染时提供给 Artisan 的渲染上下文，返回合成的句柄。 |
| | !!! 注意 |
| | 在 macOS 上，这不是线程安全的；仅当当前线程 ID 为 0 时才使用此函数。 |
| | <pre lang="cpp">AEGP_ReportArtisanProgress(<br/>  PR_RenderContextH  render_contextH,<br/>  A_long   countL,<br/>  A_long   totalL);</pre> |
| `AEGP_GetRenderDownsampleFactor` | 返回 `PR_RenderContextH` 的下采样因子。 |
| | <pre lang="cpp">AEGP_GetRenderDownsampleFactor(<br/>  PR_RenderContextH    render_contextH,<br/>  AEGP_DownsampleFactor  \*dsfP);</pre> |
| `AEGP_IsBlankCanvas` | 确定 `PR_RenderContextH` 是否为空白（空）。 |
| | <pre lang="cpp">AEGP_IsBlankCanvas(<br/>  PR_RenderContextH  render_contextH,<br/>  A_Boolean    \*is_blankPB);</pre> |
| `AEGP_GetRenderLayerToWorldXform` | 给定渲染上下文和图层（在给定时间），检索 4x4 变换以在它们的坐标空间之间移动。 |
| | <pre lang="cpp">AEGP_GetRenderLayerToWorldXform(<br/>  PR_RenderContextH   render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  const A_Time    \*comp_timeP,<br/>  A_Matrix4   \*transform);</pre> |
| `AEGP_GetRenderLayerBounds` | 检索 `render_contextH` 中 `layer_contextH`（在给定时间）的边界矩形。 |
| | <pre lang="cpp">AEGP_GetRenderLayerBounds(<br/>  PR_RenderContextH   render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  const A_Time    \*comp_timeP,<br/>  A_LegacyRect    \*boundsP);</pre> |
| `AEGP_GetRenderOpacity` | 返回给定图层上下文在给定时间内的不透明度，在渲染上下文中。 |
| | <pre lang="cpp">AEGP_GetRenderOpacity(<br/>  PR_RenderContextH   render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  const A_Time    \*comp_timePT,<br/>  A_FpLong    \*opacityPF);</pre> |
| `AEGP_IsRenderLayerActive` | 返回给定图层上下文在给定时间内是否在渲染上下文中处于活动状态。 |
| | <pre lang="cpp">AEGP_IsRenderLayerActive(<br/>  PR_RenderContextH   render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  const A_Time    \*comp_timePT,<br/>  A_Boolean   \*activePB);</pre> |
| `AEGP_SetArtisanLayerProgress` | 设置渲染 Artisan 的进度信息。 |
| | - `countL` 是已完成的图层数量， |
| | - `num_layersL` 是 Artisan 正在渲染的总图层数量。 |
| | <pre lang="cpp">AEGP_SetArtisanLayerProgress(<br/>  PR_RenderContextH  render_contextH,<br/>  A_long   countL,<br/>  A_long   num_layersL);</pre> |
| `AEGP_RenderLayerPlus` | 类似于 `AEGP_RenderLayer`，但考虑了 `AEGP_RenderLayerContextH`。 |
| | <pre lang="cpp">AEGP_RenderLayerPlus(<br/>  PR_RenderContextH    r_contextH,<br/>  AEGP_LayerH    layerH,<br/>  AEGP_RenderLayerContextH   l_contextH,<br/>  AEGP_RenderHints   render_hints,<br/>  AEGP_WorldH    \*bufferP);</pre> |
| `AEGP_GetTrackMatteContext` | 检索指定渲染和填充上下文的 `AEGP_RenderLayerContextH`。 |
| | <pre lang="cpp">AEGP_GetTrackMatteContext(<br/>  PR_RenderContextH   rnder_contextH,<br/>  AEGP_RenderLayerContextH  fill_contextH,<br/>  AEGP_RenderLayerContextH  \*mattePH);</pre> |
| `AEGP_RenderTextureWithReceipt` | 将纹理渲染到 `AEGP_WorldH` 中，并提供操作的 `AEGP_RenderReceiptH`。 |
| | 返回的 `receiptPH` 必须使用 `AEGP_DisposeRenderReceipt` 释放。 |
| | <pre lang="cpp">AEGP_RenderTextureWithReceipt(<br/>  PR_RenderContextH   render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  AEGP_RenderHints    render_hints,<br/>  A_FloatPoint    \*suggested_scaleP0,<br/>  A_FloatRect   \*suggest_src_rectP0,<br/>  A_Matrix3   \*src_matrixP0,<br/>  AEGP_RenderReceiptH   \*receiptPH,<br/>  AEGP_WorldH   \*dstPH);</pre> |
| `AEGP_GetNumberOfSoftwareEffects` | 返回给定 `AEGP_RenderLayerContextH` 中应用的软件效果数量。 |
| | <pre lang="cpp">AEGP_GetNumberOfSoftwareEffects(<br/>  PR_RenderContextH   ren_contextH,<br/>  AEGP_RenderLayerContextH  lyr_contextH,<br/>  A_short   \*num_sft_FXPS);</pre> |
| `AEGP_RenderLayerPlusWithReceipt` | 对 `AEGP_RenderLayerPlus` 的改进，此函数还提供了用于缓存的 `AEGP_RenderReceiptH`。 |
| | <pre lang="cpp">AEGP_RenderLayerPlusWithReceipt(<br/>  PR_RenderContextH    render_contextH,<br/>  AEGP_LayerH    layerH,<br/>  AEGP_RenderLayerContextH   layer_contextH,<br/>  AEGP_RenderHints   render_hints,<br/>  AEGP_NumEffectsToRenderType  num_effectsS,<br/>  AEGP_RenderReceiptH    \*receiptPH,<br/>  AEGP_WorldH    \*bufferPH);</pre> |
| `AEGP_DisposeRenderReceipt` | 释放 `AEGP_RenderReceiptH`。 |
| | <pre lang="cpp">AEGP_DisposeRenderReceipt(<br/>  AEGP_RenderReceiptH  receiptH);</pre> |
| `AEGP_CheckRenderReceipt` | 检查 After Effects 的内部缓存，以确定给定的 `AEGP_RenderReceiptH` 是否仍然有效。 |
| | <pre lang="cpp">AEGP_CheckRenderReceipt(<br/>  PR_RenderContextH    current_contextH,<br/>  AEGP_RenderLayerContextH   current_lyr_ctxtH,<br/>  AEGP_RenderReceiptH    old_receiptH,<br/>  A_Boolean    check_aceB,<br/>  AEGP_NumEffectsToRenderType  num_effectsS,<br/>  AEGP_RenderReceiptStatus   \*receipt_statusP);</pre> |
| `AEGP_GenerateRenderReceipt` | 为图层生成 `AEGP_RenderReceiptH`，就好像前 `num_effectsS` 个效果已被渲染一样。 |
| | <pre lang="cpp">AEGP_GenerateRenderReceipt(<br/>  PR_RenderContextH    current_contextH,<br/>  AEGP_RenderLayerContextH   current_lyr_contextH,<br/>  AEGP_NumEffectsToRenderType  num_effectsS,<br/>  AEGP_RenderReceiptH    \*render_receiptPH);</pre> |
| `AEGP_GetNumBinsToRender` | 返回 After Effects 希望 Artisan 渲染的 bin 数量。 |
| | <pre lang="cpp">AEGP_GetNumBinsToRender(<br/>  const PR_RenderContextH  contextH,<br/>  A_long   \*num_binsPL);</pre> |
| `AEGP_SetNthBin` | 将给定的渲染上下文设置为 After Effects 要渲染的第 n 个 bin。 |
| | <pre lang="cpp">AEGP_SetNthBin(<br/>  const PR_RenderContextH  contextH,<br/>  A_long   n);</pre> |
| `AEGP_GetBinType` | 检索给定 bin 的类型。 |
| | <pre lang="cpp">AEGP_GetBinType(<br/>  const PR_RenderContextH  contextH,<br/>  AEGP_BinType   \*bin_typeP);</pre> |
| | `AEGP_BinType` 将是以下之一： |
| | - `AEGP_BinType_NONE` |
| | - `AEGP_BinType_2D` |
| | - `AEGP_BinType_3D` |
| `AEGP_GetRenderLayerToWorldXform2D3D` | 检索变换以正确定向正在渲染的图层与输出世界。 |
| | 传递 `TRUE` 给 `only_2dB` 以将变换限制为二维。 |
| | <pre lang="cpp">AEGP_GetRenderLayerToWorldXform2D3D(<br/>  PR_RenderContextH   render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  const A_Time    \*comp_timeP,<br/>  A_Boolean   only_2dB,<br/>  A_Matrix4   \*transformP);</pre> |

:::note
以下函数仅适用于交互式 Artisan。
:::

| 函数 | 用途 |
|---|---|
| `AEGP_GetPlatformWindowRef` | 获取平台特定的窗口上下文，用于绘制给定的 `PR_RenderContextH`。 |
| | <pre lang="cpp">AEGP_GetPlatformWindowRef(<br/>  const PR_RenderContextH  contextH,<br/>  AEGP_PlatformWindowRef   \*window_refP);</pre> |
| `AEGP_GetViewportScale` | 获取给定 `PR_RenderContextH` 的源到帧的下采样因子。 |
| | <pre lang="cpp">AEGP_GetViewportScale(<br/>  const PR_RenderContextH  contextH,<br/>  A_FpLong          \*scale_xPF,<br/>  A_FpLong          \*scale_yPF);</pre> |
| `AEGP_GetViewportOrigin` | 获取源在帧内的原点（用于在两者之间进行转换），适用于给定的 `PR_RenderContextH`。 |
| | <pre lang="cpp">AEGP_GetViewportOrigin(<br/>  const PR_RenderContextH  contextH,<br/>  A_long    \*origin_xPL,<br/>  A_long    \*origin_yPL);</pre> |
| `AEGP_GetViewportRect` | 获取要绘制的区域的边界矩形，适用于给定的 `PR_RenderContextH`。 |
| | <pre lang="cpp">AEGP_GetViewportRect(<br/>  const PR_RenderContextH  contextH,<br/>  A_LegacyRect      \*v_rectPR);</pre> |
| `AEGP_GetFallowColor` | 获取给定 `PR_RenderContextH` 中用于休耕区域的颜色。 |
| | <pre lang="cpp">AEGP_GetFallowColor(<br/>  const PR_RenderContextH  contextH,<br/>  PF_Pixel8         \*fallow_colorP);</pre> |
| `AEGP_GetInteractiveCheckerboard` | 获取给定 `PR_RenderContextH` 的棋盘格是否当前处于活动状态。 |
| | <pre lang="cpp">AEGP_GetInteractiveCheckerboard(<br/>  const PR_RenderContextH  contextH,<br/>  A_Boolean         \*cboard_onPB);</pre> |
| `AEGP_GetInteractiveCheckerboardColors` | 获取棋盘格中使用的颜色。 |
| | <pre lang="cpp">AEGP_GetInteractiveCheckerboardColors(<br/>  const PR_RenderContextH  contextH,<br/>  PF_Pixel          \*color1P,<br/>  PF_Pixel          \*color2P);</pre> |
| `AEGP_GetInteractiveCheckerboardSize` | 获取棋盘格方块的宽度和高度。 |
| | <pre lang="cpp">AEGP_GetInteractiveCheckerboardSize(<br/>  const PR_RenderContextH  contextH,<br/>  A_u_long          \*cbd_widthPLu,<br/>  A_u_long          \*cbd_heightPLu);</pre> |
| `AEGP_GetInteractiveCachedBuffer` | 获取上次用于 `PR_RenderContextH` 的缓存 AEGP_WorldH。 |
| | <pre lang="cpp">AEGP_GetInteractiveCachedBuffer(<br/>  const PR_RenderContextH  contextH,<br/>  AEGP_WorldH       \*buffer);</pre> |
| `AEGP_ArtisanMustRenderAsLayer` | 确定工匠是否必须将当前的 `AEGP_RenderLayerContextH` 渲染为图层。 |
| | <pre lang="cpp">AEGP_ArtisanMustRenderAsLayer(<br/>  const PR_RenderContextH   contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  A_Boolean          \*use_txturePB);</pre> |
| `AEGP_GetInteractiveDisplayChannel` | 返回交互式工匠应显示的通道。 |
| | <pre lang="cpp">AEGP_GetInteractiveDisplayChannel(<br/>  const PR_RenderContextH  contextH,<br/>  AEGP_DisplayChannelType  \*channelP);</pre> |
| | `AEGP_DisplayChannelType` 将是以下之一： |
| | - `AEGP_DisplayChannel_NONE` |
| | - `AEGP_DisplayChannel_RED` |
| | - `AEGP_DisplayChannel_GREEN` |
| | - `AEGP_DisplayChannel_BLUE` |
| | - `AEGP_DisplayChannel_ALPHA` |
| | - `AEGP_DisplayChannel_RED_ALT` |
| | - `AEGP_DisplayChannel_GREEN_ALT` |
| | - `AEGP_DisplayChannel_BLUE_ALT` |
| | - `AEGP_DisplayChannel_ALPHA_ALT` |
| `AEGP_GetInteractiveExposure` | 返回给定 `PR_RenderContextH` 的曝光值，表示为浮点数。 |
| | <pre lang="cpp">AEGP_GetInteractiveExposure(<br/>  const PR_RenderContextH  rcH,<br/>  A_FpLong          \*exposurePF);</pre> |
| `AEGP_GetColorTransform` | 返回给定 `PR_RenderContextH` 的颜色变换。 |
| | <pre lang="cpp">AEGP_GetColorTransform(<br/>  const PR_RenderContextH  render_contextH,<br/>  A_Boolean         \*cms_onB,<br/>  A_u_long          \*xform_keyLu,<br/>  void        \*xformP);</pre> |
| `AEGP_GetCompShutterTime` | 返回给定 `PR_RenderContextH` 的快门角度。 |
| | <pre lang="cpp">AEGP_GetCompShutterTime(<br/>  PR_RenderContextH  render_contextH,<br/>  A_Time      \*shutter_time,<br/>  A_Time      \*shutter_dur);</pre> |
| `AEGP_MapCompToLayerTime` | CC 新增功能。与 [AEGP_ConvertCompToLayerTime](../../aegps/aegp-suites#aegp_layersuite9) 不同，此功能处理折叠或嵌套合成的时间重映射。 |
| | <pre lang="cpp">AEGP_MapCompToLayerTime(<br/>  PR_RenderContextH         render_contextH,<br/>  AEGP_RenderLayerContextH  layer_contextH,<br/>  const A_Time       \*comp_timePT,<br/>  A_Time      \*layer_timePT);</pre> |

---

## 在不同上下文之间转换

在渲染和实例上下文之间转换，并管理特定于工匠的全局数据。

### AEGP_ArtisanUtilSuite1

| 函数 | 用途 |
|---|---|
| `AEGP_GetGlobalContextFromInstanceContext` | 给定实例上下文，返回全局上下文的句柄。 |
| | <pre lang="cpp">AEGP_GetGlobalContextFromInstanceContext(<br/>  const PR_InstanceContextH  instance_contextH,<br/>  PR_GlobalContextH   \*global_contextPH);</pre> |
| `AEGP_GetInstanceContextFromRenderContext` | 给定渲染上下文，返回实例上下文的句柄。 |
| | <pre lang="cpp">AEGP_GetInstanceContextFromRenderContext(<br/>  const PR_RenderContextH  render_contextH,<br/>  PR_InstanceContextH      \*instnc_ctextPH);</pre> |
| `AEGP_GetInstanceContextFromQueryContext` | 给定查询上下文，返回实例上下文的句柄。 |
| | <pre lang="cpp">AEGP_GetInstanceContextFromQueryContext(<br/>  const PR_QueryContextH  query_contextH,<br/>  PR_InstanceContextH     \*instnce_contextPH);</pre> |
| `AEGP_GetGlobalData` | 给定全局上下文，返回全局数据的句柄。 |
| | <pre lang="cpp">AEGP_GetGlobalData(<br/>  const PR_GlobalContextH  global_contextH,<br/>  PR_GlobalDataH    \*global_dataPH);</pre> |
| `AEGP_GetInstanceData` | 给定实例上下文，返回关联的实例数据。 |
| | <pre lang="cpp">AEGP_GetInstanceData(<br/>  const PR_InstanceContextH  instance_contextH,<br/>  PR_InstanceDataH    \*instance_dataPH);</pre> |
| `AEGP_GetRenderData` | 给定渲染上下文，返回关联的渲染数据。 |
| | <pre lang="cpp">AEGP_GetRenderData(<br/>  const PR_RenderContextH  render_contextH,<br/>  PR_RenderDataH    \*render_dataPH);</pre> |

---

## 微笑！摄像机

获取摄像机的几何信息，包括摄像机属性（类型、镜头、景深、焦距、光圈等）。

### AEGP_CameraSuite2

| 函数 | 用途 |
|---|---|
| `AEGP_GetCamera` | 给定图层句柄和时间，返回当前摄像机图层句柄。 |
| | <pre lang="cpp">AEGP_GetCamera(<br/>  PR_RenderContextH  render_contextH,<br/>  const A_Time       \*comp_timeP,<br/>  AEGP_LayerH        \*camera_layerPH);</pre> |
| `AEGP_GetCameraType` | 给定图层，返回图层的摄像机类型。 |
| | <pre lang="cpp">AEGP_GetCameraType(<br/>  AEGP_LayerH      aegp_layerH,<br/>  AEGP_CameraType  \*camera_typeP;</pre> |
| | 摄像机类型可以是以下之一： |
| | - `AEGP_CameraType_NONE = -1` |
| | - `AEGP_CameraType_PERSPECTIVE` |
| | - `AEGP_CameraType_ORTHOGRAPHIC` |
| `AEGP_GetDefaultCameraDistanceToImagePlane` | 给定合成句柄，返回摄像机到图像平面的距离。 |
| | <pre lang="cpp">AEGP_GetDefaultCamera DistanceToImagePlane(<br/>  AEGP_CompH  compH,<br/>  A_FpLong    \*dist_to_planePF)</pre> |
| `AEGP_GetCameraFilmSize` | 获取指定摄像机使用的胶片尺寸（以及用于测量该尺寸的单位）。 |
| | <pre lang="cpp">AEGP_GetCameraFilmSize(<br/>  AEGP_LayerH         camera_layerH,<br/>  AEGP_FilmSizeUnits  \*film_size_unitsP,<br/>  A_FpLong     \*film_sizePF0);</pre> |
| `AEGP_SetCameraFilmSize` | 设置指定摄像机使用的胶片尺寸（以及用于测量该尺寸的单位）。 |
| | <pre lang="cpp">AEGP_SetCameraFilmSize)(<br/>  AEGP_LayerH         camera_layerH,<br/>  AEGP_FilmSizeUnits  film_size_units,<br/>  A_FpLong     \*film_sizePF0);</pre> |

---

## 关于摄像机行为的注意事项

摄像机方向在合成坐标中，旋转在图层（摄像机的图层）坐标中。

如果摄像机图层有父级，则位置是相对于父级的坐标空间。

---

## 正交摄像机矩阵

在内部，我们使用合成宽度和高度来设置 OpenGL 规范中描述的矩阵：

```cpp
glOrtho(-width/2, width/2, -height/2, height/2, -1, 100);
```

正交矩阵描述了投影。摄像机的位置由另一个缩放矩阵描述。摄像机位置矩阵的逆提供了“眼睛”坐标。

---

## 聚焦于焦距

记住，焦距影响视野；焦距仅影响景深。

---

## 胶片尺寸

在现实世界中，胶片尺寸以毫米为单位测量。在 After Effects 中，它以像素为单位测量。将毫米转换为像素，乘以 72 并除以 25.4。

视野更复杂；

ϴ = 1/2 视野

tan(ϴ) = 1/2 合成高度 / 焦距

焦距 = 2 tan(ϴ) / 合成高度

---

## 点亮灯光

获取和设置合成中的灯光类型。

### AEGP_LightSuite2

| 函数 | 用途 |
|---|---|
| `AEGP_GetLightType` | 获取指定摄像机图层的 `AEGP_LightType`。 |
| | <pre lang="cpp">AEGP_GetLightType(<br/>  AEGP_LayerH     light_layerH,<br/>  AEGP_LightType  \*light_typeP);</pre> |
| | `AEGP_LightType` 将是以下之一： |
| | - `AEGP_LightType_PARALLEL` |
| | - `AEGP_LightType_SPOT` |
| | - `AEGP_LightType_POINT` |
| | - `AEGP_LightType_AMBIENT` |
| `AEGP_SetLightType` | 设置指定摄像机图层的 `AEGP_LightType`。 |
| | <pre lang="cpp">AEGP_SetLightType(<br/>  AEGP_LayerH     light_layerH,<br/>  AEGP_LightType  light_type);</pre> |

### 关于灯光行为的注意事项

平行光的公式可以在 Foley 和 Van Dam 的《计算机图形学导论》（ISBN 0-201-60921-5）中找到，点光的公式也是如此。

我们使用 Jim Blinn 提出的半角变体。

假设我们有一个图层上的点，并希望用灯光对其进行着色。

设 V 为从图层点到视点的单位向量。
设 L 为指向灯光的单位向量（在平行光情况下，这是恒定的）。设 H 为 (V+L)/2（归一化）。
设 N 为图层的单位法向量。

镜面反射光的量为 S \* power(H Dot N, shine)，其中 S 是镜面反射系数。

---

## 我应该如何绘制？

After Effects 依赖工匠绘制 3D 图层句柄。如果您的工匠选择不响应此调用，默认工匠将为您绘制 3D 图层句柄。查询变换对于优化 After Effects 的缓存非常重要。

坐标系是正 x 向右，正 y 向下，正 z 进入屏幕。原点是左上角。旋转顺序为 x 然后 y 然后 z。对于矩阵，平移是底行，方向是四元数（首先应用），然后是任何 x-y-z 旋转。一般来说，使用方向或旋转，但不要同时使用两者。如果需要控制角速度，则使用旋转。

---

## 查询变换函数

这些函数为工匠提供了有关他们需要的信息，以便正确地将图层放置在合成中，并适当地响应 After Effects 将发送到其 `PR_QueryFunc` 入口函数的各种查询。

由于该入口函数是可选的，因此您的工匠对查询的响应也是可选的；但是，如果您不这样做，您的用户可能会失望，因为（在进行交互式预览绘制时）所有摄像机和灯光指示器都会消失，直到他们停止移动！工匠是复杂的野兽；如果您有任何问题，请联系我们。

### AEGP_QueryXFormSuite2

| 函数 | 用途 |
|---|---|
| `AEGP_QueryXformGetSrcType` | 给定查询上下文，返回当前正在修改的变换源。 |
| | <pre lang="cpp">AEGP_QueryXformGetSrcType(<br/>  PR_QueryContextH     query_contextH,<br/>  AEGP_QueryXformType  \*src_type);</pre> |
| | 查询上下文将是以下之一： |
| | - `AEGP_Query_Xform_LAYER` |
| | - `AEGP_Query_Xform_WORLD` |
| | - `AEGP_Query_Xform_VIEW` |
| | - `AEGP_Query_Xform_SCREEN` |
| `AEGP_QueryXformGetDstType` | 给定查询上下文，返回当前请求的变换目标。 |
| | <pre lang="cpp">AEGP_QueryXformGetDstType(<br/>  PR_QueryContextH     query_contextH,<br/>  AEGP_QueryXformType  \*dst_type);</pre> |
| `AEGP_QueryXformGetLayer` | 如果源或目标类型是图层，则使用此函数。给定查询上下文，返回图层句柄。 |
| | <pre lang="cpp">AEGP_QueryXformGetLayer(<br/>  PR_QueryContextH  query_contextH,<br/>  AEGP_LayerH       \*layerPH);</pre> |
| `AEGP_QueryXformGetComp` | 给定查询上下文，返回当前合成的句柄。 |
| | <pre lang="cpp">AEGP_QueryXformGetComp(<br/>  PR_QueryContextH  query_contextH,<br/>  AEGP_CompH        \*compPH);</pre> |
| `AEGP_QueryXformGetTransformTime` | 给定查询上下文，返回变换的时间。 |
| | <pre lang="cpp">AEGP_QueryXformGetTransformTime(<br/>  PR_QueryContextH  query_contextH,<br/>  A_Time     \*time);</pre> |
| `AEGP_QueryXformGetViewTime` | 给定查询上下文，返回关联视图的时间。 |
| | <pre lang="cpp">AEGP_QueryXformGetViewTime(<br/>  PR_QueryContextH  query_contextH,<br/>  A_Time     \*time);</pre> |
| `AEGP_QueryXformGetCamera` | 给定查询上下文，返回当前相机图层句柄。 |
| | <pre lang="cpp">AEGP_QueryXformGetCamera(<br/>  PR_QueryContextH  query_contextH,<br/>  AEGP_LayerH       \*camera_layerPH);</pre> |
| `AEGP_QueryXformGetXform` | 给定查询上下文，返回当前矩阵变换。 |
| | <pre lang="cpp">AEGP_QueryXformGetXform(<br/>  PR_QueryContextH  query_contextH,<br/>  A_Matrix4         \*xform);</pre> |
| `AEGP_QueryXformSetXform` | 给定查询上下文，返回你在 `xform` 中计算的矩阵变换。 |
| | <pre lang="cpp">AEGP_QueryXformSetXform(<br/>  PR_QueryContextH  query_contextH,<br/>  A_Matrix4         \*xform);</pre> |
| `AEGP_QueryWindowRef` | 设置要使用的窗口引用（由 After Effects 使用），针对给定的 `PR_QueryContextH`。 |
| | <pre lang="cpp">AEGP_QueryWindowRef(<br/>  PR_QueryContextH        q_contextH,<br/>  AEGP_PlatformWindowRef  \*window_refP);</pre> |
| `AEGP_QueryWindowClear` | 返回要清除的 `AEGP_PlatformWindowRef`（和 `A_Rect`），针对给定的 `PR_QueryContextH`。 |
| | <pre lang="cpp">AEGP_QueryWindowClear(<br/>  PR_QueryContextH        q_contextH,<br/>  AEGP_PlatformWindowRef  \*window_refP,<br/>  A_LegacyRect     \*boundsPR);</pre> |
| `AEGP_QueryFrozenProxy` | 返回给定 `PR_QueryContextH` 中使用的纹理是否应冻结。 |
| | <pre lang="cpp">AEGP_QueryFrozenProxy(<br/>  PR_QueryContextH  q_contextH,<br/>  A_Boolean         \*onPB);</pre> |
| `AEGP_QuerySwapBuffer` | 在渲染和相机/灯光句柄绘制完成后发送；After Effects 返回 artisan 应绘制其输出的缓冲区。 |
| | <pre lang="cpp">AEGP_QuerySwapBuffer(<br/>  PR_QueryContextH        q_contextH,<br/>  AEGP_PlatformWindowRef  \*window_refP,<br/>  AEGP_WorldH      \*dest_bufferp);</pre> |
| `AEGP_QueryDrawProcs` | 设置 After Effects 在绘制相机和灯光句柄到 artisan 提供的上下文时将调用的交互式绘制函数。 |
| | <pre lang="cpp">AEGP_QueryDrawProcs(<br/>  PR_QueryContextH         query_contextH,<br/>  PR_InteractiveDrawProcs  \*window_refP);</pre> |
| `AEGP_QueryPrepareForLineDrawing` | 通知 After Effects 它将绘制的上下文。 |
| | <pre lang="cpp">AEGP_QueryPrepareForLineDrawing(<br/>  PR_QueryContextH        query_contextH,<br/>  AEGP_PlatformWindowRef  \*window_refP,<br/>  A_LegacyRect     \*viewportP,<br/>  A_LPoint         \*originP,<br/>  A_FloatPoint     \*scaleP);</pre> |
| `AEGP_QueryUnprepareForLineDrawing` | 就 After Effects 而言，artisan 已完成线条绘制。 |
| | <pre lang="cpp">AEGP_QueryUnprepareForLineDrawing(<br/>  PR_QueryContextH        query_contextH,<br/>  AEGP_PlatformWindowRef  \*window_refP);</pre> |

---

## 交互式绘制函数

我们增加了 artisan 提供函数的能力，After Effects 可以使用这些函数在预览期间更新合成窗口显示，包括相机、灯光和线框预览建模。

### PR_InteractiveDrawProcs

| 函数 | 用途 |
| --- | --- |
| `PR_Draw_MoveToFunc` | <pre lang="cpp">PR_Draw_MoveToFunc(<br/>  short  x,<br/>  short  y);</pre> |
| `PR_Draw_LineToFunc` | <pre lang="cpp">PR_Draw_LineToFunc(<br/>  short  x,<br/>  short  y);</pre> |
| `PR_Draw_ForeColorFunc` | <pre lang="cpp">PR_Draw_ForeColorFunc(<br/>  const A_Color  \*fore_colo</pre> |
| `PR_Draw_FrameRectFunc` | <pre lang="cpp">PR_Draw_FrameRectFunc(<br/>  const A_Rect  \*rectPR );</pre> |
| `PR_Draw_PaintRectFunc` | <pre lang="cpp">PR_Draw_PaintRectFunc(<br/>  const A_Rect  \*rectPR );</pre> |

---

## 关于查询时间函数的说明

`AEGP_QueryXformGetTransformTime()` 和 `AEGP_QueryXformGetViewTime()` 都是 artisan 构建要渲染的场景表示所必需的。

`AEGP_QueryXformGetTransformTime()` 获取变换的时间，然后传递给 [AEGP_CompSuite11](../../aegps/aegp-suites#aegp_compsuite11) 中的 `AEGP_GetCompShutterFrameRange()`。

`AEGP_QueryXformGetViewTime()` 获取视图的时间，用于调用 [AEGP_LayerSuite9](../../aegps/aegp-suites#aegp_layersuite9) 中的 `AEGP_GetLayerToWorldXformFromView()`。
