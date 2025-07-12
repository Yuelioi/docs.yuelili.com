---
title: 数据类型
---
# 数据类型

在可能的情况下，After Effects 会向插件提供不透明的数据类型，并提供用于操作它们的访问函数。例如，视频帧使用不透明的 AEGP_WorldH 表示。虽然在某些情况下直接修改底层结构可能更高效，但通过保持数据类型的不透明性，我们可以在不影响您重新编译（和重新分发）插件的情况下对实现进行更改

---

## AEGP API Data Types

| 类型 | Describes | Manage Using |
| --- | --- | --- |
| `AEGP_MemHandle` | 该结构体包含的内容远不止被引用的内存，因此不应直接解引用。 | [AEGP Memory Suite](../aegp-suites#aegp_memorysuite1) |
| | 使用 AEGP 内存套件中的 `AEGP_LockMemHandle` 来获取 `AEGP_MemHandle` 所引用内存的指针。完成后请务必解锁。 | |
| `AEGP_ProjectH` | 当前 After Effects 项目。项目是一组通过树状结构分层排列以保持语义关系的元素。 | [AEGP Project Suite](../aegp-suites#aegp_projsuite6) |
| | 树的内部节点是文件夹。 | |
| | 自 CS6 版本起，只会存在一个打开的项目。 | |
| `AEGP_ItemH` | 描述项目中任何元素的抽象概念（包括文件夹）。项目项是任何可被选择的对象。 | [AEGP Item Suite](../aegp-suites#aegp_itemsuite9) |
| | 由于多种对象类型都可被选择，在需要更具体类型前我们统一视为 AEGP_ItemH。 | |
| `AEGP_Collection2H` | 一组被选中的项目项集合。 | [AEGP Collection Suite](../aegp-suites#aegp_collectionsuite2) |
| `AEGP_CompH` | 合成是多个可渲染项目项的序列，共同产生输出结果。 | [AEGP Composition Suite](../aegp-suites#aegp_compositesuite2) |
| | 合成存在于特定时间区间内。 | |
| | 一个项目可包含多个合成。 | |
| `AEGP_FootageH` | 可渲染的项目项。文件夹和合成是仅有的非素材类型。 | [AEGP Footage Suite](../aegp-suites#aegp_footagesuite5) |
| `AEGP_LayerH` | 合成的组成元素。图层按顺序渲染以实现遮挡效果。 | [AEGP Layer Suite](../aegp-suites#aegp_layersuite9) |
| | 固态层、文本、绘画、摄像机、灯光、图像及图像序列都以图层形式表现。 | |
| | 当前 After Effects 项目。项目是一组通过树状结构分层排列以保持语义关系的元素。 | |
| `AEGP_WorldH` | 单帧像素数据。 | [AEGP World Suite](../aegp-suites#aegp_worldsuite3) |
| `AEGP_EffectRefH` | 应用于图层的特效。特效函数以图层（可能包含其他参数）为输入，返回修改后的渲染版本。 | [AEGP Effect Suite](../aegp-suites#aegp_effectsuite4) |
| `AEGP_StreamRefH` | 合成中附加到图层的任何[parameter stream](../aegp-suites#diving-into-streams) | [AEGP Stream Suite](../aegp-suites#stream-suite), |
| | | [AEGP Dynamic Stream Suite](../aegp-suites#aegp_dynamicstreamsuite4), |
| | See the description of `AEGP_GetNewLayerStream` from [AEGP_StreamSuite5](../aegp-suites#stream-suite) for a full list of stream types. | [AEGP Keyframe Suite](../aegp-suites#aegp_keyframesuite3) |
| `AEGP_MaskRefH` | 应用于图层的遮罩。AEGP_MaskRefH 用于访问遮罩流信息，而非构成遮罩的具体顶点数据。 | [AEGP Mask Suite](../aegp-suites#aegp_masksuite6) |
| | 遮罩是栅格化路径（顶点序列），可将图层分割为两个部分以便分别渲染。 | |
| `AEGP_MaskOutlineValH` | 构成遮罩的具体顶点数据。 | [AEGP Mask Outline Suite](../aegp-suites#aegp_maskoutlinesuite3) |
| | 遮罩轮廓顶点按顺序排列，遮罩路径无需闭合。 | |
| `AEGP_TextDocumentH` | 表示文本图层关联的实际文本内容。 | [AEGP Text Document Suite](../aegp-suites#aegp_textdocumentsuite1) |
| `AEGP_TextOutlinesH` | 引用构成文本图层轮廓的所有路径。 | [AEGP Text Layer Suite](../aegp-suites#aegp_textlayersuite1) |
| `AEGP_MarkerVal` | 时间轴标记关联的数据。 | [AEGP Marker Suite](../aegp-suites#aegp_markersuite2) |
| `AEGP_PersistentBlobH` | 包含当前首选项设置的"二进制数据块"。 | [AEGP Persistent Data Suite](../aegp-suites#persistent-data-suite) |
| `AEGP_RenderOptionsH` | 渲染请求关联的设置参数。 | [AEGP Render Options Suite](../aegp-suites#aegp_renderoptionssuite4) |
| `AEGP_LayerRenderOptionsH` | 图层渲染请求关联的设置参数。 | [AEGP Layer Render Options Suite](../aegp-suites#aegp_layerrenderoptionssuite1) |
| `AEGP_FrameReceiptH` | 已渲染帧的引用。 | [AEGP Render Suite](../aegp-suites#render-suites) |
| `AEGP_RQItemRefH` | 渲染队列中的条目。 | [AEGP Render Queue Suite](../aegp-suites#render-queue-suite), |
| | | [AEGP Render Queue Item Suite](../aegp-suites#render-queue-item-suite) |
| `AEGP_OutputModuleRefH` | 附加到渲染队列中特定 AEGP_RQItemRef 的输出模块。 | [AEGP Output Module Suite](../aegp-suites#output-module-suite) |
| `AEGP_SoundDataH` | 图层使用的[audio settings](../aegp-suites#audio-settings) | [AEGP Sound Data Suite](../aegp-suites#aegp_sounddatesuite1) |
| `AEGP_RenderLayerContextH` | After Effects 发送给 Artisan 的渲染时状态信息。 | [AEGP Canvas Suite](../../artisans/artisan-data-types#aegp_canvassuite8) |
| `AEGP_RenderReceiptH` | Artisan 渲染时使用的引用凭证。 | [AEGP Canvas Suite](../../artisans/artisan-data-types#aegp_canvassuite8) |

---

## 恶劣、野蛮且短暂

关于图层、流以及其他许多项目的信息不会长久保存；它们经常因用户活动而失效。

任何修改项目数量（而非质量）的操作都会使这些项目的引用失效；向流中添加关键帧会使该流的引用失效，但强制渲染图层并不会使其引用失效。不要缓存图层的像素数据。

不建议在插件内部对特定钩子函数的调用之间缓存引用；应在需要时获取信息，并尽快忘记（释放）它。

---

## 你打算就这样把数据丢在那里不管吗？

当你要求After Effects填充并返回数据结构句柄时，重要的是你要自行清理。对于以下数据类型，你必须调用相应的清理例程
---

## 需要处置的数据类型

| 数据类型 | 处置函数 |
| --- | --- |
| `AEGP_Collection2H` | `AEGP_DisposeCollection`, from [AEGP_CollectionSuite2](../aegp-suites#aegp_collectionsuite2) |
| `AEGP_FootageH` | `AEGP_DisposeFootage`, from [AEGP_FootageSuite5](../aegp-suites#aegp_footagesuite5) |
| `AEGP_WorldH` | `AEGP_Dispose`, from [AEGP_WorldSuite3](../aegp-suites#aegp_worldsuite3) |
| | (Or `AEGP_DisposeTexture`, from [AEGP_CanvasSuite8](../../artisans/artisan-data-types#aegp_canvassuite8), if layer texture created using `AEGP_RenderTexture`) |
| `AEGP_EffectRefH` | `AEGP_DisposeEffect`, from [AEGP_EffectSuite4](../aegp-suites#aegp_effectsuite4) |
| `AEGP_MaskRefH` | `AEGP_DisposeMask`, from [AEGP_MaskSuite6](../aegp-suites#aegp_masksuite6) |
| `AEGP_RenderOptionsH` | `AEGP_Dispose`, from [AEGP_RenderQueueMonitorSuite1](../aegp-suites#aegp_renderqueuemonitorsuite1) |
| `AEGP_LayerRenderOptionsH` | `AEGP_Dispose`, from [AEGP_LayerRenderOptionsSuite1](../aegp-suites#aegp_layerrenderoptionssuite1) |
| `AEGP_RenderReceiptH` | `AEGP_DisposeRenderReceipt`, from [AEGP_CanvasSuite8](../../artisans/artisan-data-types#aegp_canvassuite8) |
