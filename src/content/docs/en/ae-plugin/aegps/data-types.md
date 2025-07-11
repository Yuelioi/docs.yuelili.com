---
title: data-types
---
# Data Types

Whenever possible, After Effects presents plug-ins with opaque data types, and provides accessor functions for manipulating them. For example, video frames are represented using the opaque AEGP_WorldH. While in some cases it might be more efficient to simply modify the underlying structure, by maintaining the opaqueness of the data types we allow for changes to our implementation without making you recompile (and redistribute) your plug-ins.

---

## AEGP API Data Types

| Type | Describes | Manage Using |
|---|---|---|
| `AEGP_MemHandle` | This structure contains more than just the referenced memory. So it should not be dereferenced directly. | [AEGP Memory Suite](../aegp-suites#aegp_memorysuite1) |
| | Use `AEGP_LockMemHandle` in the AEGP Memory Suite to get a pointer to the memory referenced by the `AEGP_MemHandle`. And of course, unlock it when you're done. | |
| `AEGP_ProjectH` | The current After Effects project. Projects are a set of elements arranged hierarchically in a tree to preserve semantic relationships. | [AEGP Project Suite](../aegp-suites#aegp_projsuite6) |
| | Interior nodes of the tree are folders. | |
| | As of CS6, there will only ever be one open project. | |
| `AEGP_ItemH` | An abstraction describing any element of a project, including folders. An item is anything that can be selected. | [AEGP Item Suite](../aegp-suites#aegp_itemsuite9) |
| | Since multiple object types can be selected, we treat them as AEGP_ItemHs until more specificity is required. | |
| `AEGP_Collection2H` | A set of selected items. | [AEGP Collection Suite](../aegp-suites#aegp_collectionsuite2) |
| `AEGP_CompH` | A composition is a sequence of renderable items that, together, produce output. | [AEGP Composition Suite](../aegp-suites#aegp_compositesuite2) |
| | A composition exists over a time interval. | |
| | Multiple compositions can exist within one project. | |
| `AEGP_FootageH` | An item that can be rendered. Folders and compositions are the only items that are not footage. | [AEGP Footage Suite](../aegp-suites#aegp_footagesuite5) |
| `AEGP_LayerH` | An element of a composition. Layers are rendered in sequence, which allows for occlusions. | [AEGP Layer Suite](../aegp-suites#aegp_layersuite9) |
| | Solids, text, paint, cameras, lights, images, and image sequences are all represented as layers. | |
| | Layers may be defined over sub-intervals of the composition's time interval. | |
| `AEGP_WorldH` | A frame of pixels. | [AEGP World Suite](../aegp-suites#aegp_worldsuite3) |
| `AEGP_EffectRefH` | An effect applied to a layer. An effect is a function that takes as its argument a layer (and possibly other parameters) and returns an altered version of the layer for rendering. | [AEGP Effect Suite](../aegp-suites#aegp_effectsuite4) |
| `AEGP_StreamRefH` | Any [parameter stream](../aegp-suites#diving-into-streams) attached to a layer, in a composition. | [AEGP Stream Suite](../aegp-suites#stream-suite), |
| | | [AEGP Dynamic Stream Suite](../aegp-suites#aegp_dynamicstreamsuite4), |
| | See the description of `AEGP_GetNewLayerStream` from [AEGP_StreamSuite5](../aegp-suites#stream-suite) for a full list of stream types. | [AEGP Keyframe Suite](../aegp-suites#aegp_keyframesuite3) |
| `AEGP_MaskRefH` | A mask applied to a layer. An AEGP_MaskRefH is used to access details about the mask stream, not the specific points which constitute the mask. | [AEGP Mask Suite](../aegp-suites#aegp_masksuite6) |
| | A mask is a rasterized path (sequence of vertices) that partitions a layer into two pieces, allowing each to be rendered differently. | |
| `AEGP_MaskOutlineValH` | The specific points which constitute the mask. | [AEGP Mask Outline Suite](../aegp-suites#aegp_maskoutlinesuite3) |
| | The points in a mask outline are ordered, and the mask need not be closed. | |
| `AEGP_TextDocumentH` | Represents the actual text associated with a text layer. | [AEGP Text Document Suite](../aegp-suites#aegp_textdocumentsuite1) |
| `AEGP_TextOutlinesH` | A reference to all the paths that make up the outlines of a given text layer. | [AEGP Text Layer Suite](../aegp-suites#aegp_textlayersuite1) |
| `AEGP_MarkerVal` | The data associated with a given timeline marker. | [AEGP Marker Suite](../aegp-suites#aegp_markersuite2) |
| `AEGP_PersistentBlobH` | A "blob" of data containing the current preferences. | [AEGP Persistent Data Suite](../aegp-suites#persistent-data-suite) |
| `AEGP_RenderOptionsH` | The settings associated with a render request. | [AEGP Render Options Suite](../aegp-suites#aegp_renderoptionssuite4) |
| `AEGP_LayerRenderOptionsH` | The settings associated with a layer render request. | [AEGP Layer Render Options Suite](../aegp-suites#aegp_layerrenderoptionssuite1) |
| `AEGP_FrameReceiptH` | A reference to a rendered frame. | [AEGP Render Suite](../aegp-suites#render-suites) |
| `AEGP_RQItemRefH` | An item in the render queue. | [AEGP Render Queue Suite](../aegp-suites#render-queue-suite), |
| | | [AEGP Render Queue Item Suite](../aegp-suites#render-queue-item-suite) |
| `AEGP_OutputModuleRefH` | An output module, attached to a specific AEGP_RQItemRef in the render queue. | [AEGP Output Module Suite](../aegp-suites#output-module-suite) |
| `AEGP_SoundDataH` | The [audio settings](../aegp-suites#audio-settings) used for a given layer. | [AEGP Sound Data Suite](../aegp-suites#aegp_sounddatesuite1) |
| `AEGP_RenderLayerContextH` | State information at the time of a render request, sent to an Artisan by After Effects. | [AEGP Canvas Suite](../../artisans/artisan-data-types#aegp_canvassuite8) |
| `AEGP_RenderReceiptH` | Used by Artisans when rendering. | [AEGP Canvas Suite](../../artisans/artisan-data-types#aegp_canvassuite8) |

---

## Nasty, Brutish, and Short

Information about layers, streams, and many other items doesn't survive long; it's often invalidated by user activity.

Anything that modifies the quantity (not quality) of items will invalidate references to those items; adding a keyframe to a stream invalidates references to that stream, but forcing a layer to be rendered doesn't invalidate references to it. Do not cache layer pixels.

Caching references between calls to a specific hook function within your plug-in is not recommended; acquire information when you need it, and forget (release) it as soon as possible.

---

## Were You Just Going To Leave That Data Lying Around?

When you ask After Effects to populate and return handles to data structures, it's important that you clean up after yourself. For the following data types, you must call the appropriate disposal routines.

---

## Data Types Requiring Disposal

| Data Type | Disposal Function |
|---|---|
| `AEGP_Collection2H` | `AEGP_DisposeCollection`, from [AEGP_CollectionSuite2](../aegp-suites#aegp_collectionsuite2) |
| `AEGP_FootageH` | `AEGP_DisposeFootage`, from [AEGP_FootageSuite5](../aegp-suites#aegp_footagesuite5) |
| `AEGP_WorldH` | `AEGP_Dispose`, from [AEGP_WorldSuite3](../aegp-suites#aegp_worldsuite3) |
| | (Or `AEGP_DisposeTexture`, from [AEGP_CanvasSuite8](../../artisans/artisan-data-types#aegp_canvassuite8), if layer texture created using `AEGP_RenderTexture`) |
| `AEGP_EffectRefH` | `AEGP_DisposeEffect`, from [AEGP_EffectSuite4](../aegp-suites#aegp_effectsuite4) |
| `AEGP_MaskRefH` | `AEGP_DisposeMask`, from [AEGP_MaskSuite6](../aegp-suites#aegp_masksuite6) |
| `AEGP_RenderOptionsH` | `AEGP_Dispose`, from [AEGP_RenderQueueMonitorSuite1](../aegp-suites#aegp_renderqueuemonitorsuite1) |
| `AEGP_LayerRenderOptionsH` | `AEGP_Dispose`, from [AEGP_LayerRenderOptionsSuite1](../aegp-suites#aegp_layerrenderoptionssuite1) |
| `AEGP_RenderReceiptH` | `AEGP_DisposeRenderReceipt`, from [AEGP_CanvasSuite8](../../artisans/artisan-data-types#aegp_canvassuite8) |
