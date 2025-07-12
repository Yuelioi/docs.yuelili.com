---
title: 入门指南
---
# 入门指南

## 导入的基础知识

对于每个剪辑，导入器可以告诉 Premiere 它们可以将视频帧解码为的分辨率和像素格式。

Premiere 会在拖动、播放或导出期间根据需要请求视频帧。

如果需要进行音频转换或峰值文件生成，音频将在剪辑导入时立即被请求。

如果不需要音频转换，音频帧将在拖动、播放或导出期间根据需要被请求。

Premiere 以 32 位浮点、非交错格式的数组请求音频。

---

## 尝试示例导入器插件

选择三个示例导入器中最接近您所需功能的一个。

构建其中一个，或者如果您仍然不确定，构建所有三个！在调试器中逐步执行代码以了解事件的顺序。

通过修改 SDK 示例之一来启动您的导入器。

---

## `imGetSourceVideo` 与 `imImportImage`

对于同步导入，导入器可以使用两个不同的选择器来向主机提供帧。

为什么？*imGetSourceVideo* 最适合具有特定分辨率的媒体。

支持 *imGetSourceVideo* 的导入器可以以其原生分辨率导入帧或指定首选分辨率，而不必将帧缩放到任意大小。

*imImportImage* 仅对分辨率无关的视频（如基于矢量的图形）有用。

选择适合您的导入器将支持的媒体的选择器。

SDK 导入器演示了 *imGetSourceVideo*，因为分辨率相关的视频更为常见。

合成导入器示例演示了 *imImportImage*，因为它动态生成视频，并且对视频分辨率没有偏好。

如果导入器希望支持 *imGetSourceVideo*，则应将 `imImageInfoRec.supportsGetSourceVideo` 设置为 true。

---

## 异步导入

导入器可以选择支持异步调用以读取帧，以获得更好的性能。如果导入器希望支持异步导入，则应将 `imImageInfoRec.supportsAsyncIO` 设置为 true。导入器可以实现 *imCreateAsyncImporter*，它告诉导入器使用提供的数据创建一个异步导入器对象，并将其存储在 `imAsyncImporterCreationRec` 中。

此异步导入器对象必须实现与标准导入器不同的入口函数，因为它不遵循与标准导入器相同的规则。

除了 *aiClose* 选择器外，所有对 AsyncImporterEntry 的调用都是可重入的。*aiClose* 只会被调用一次，但可能会在其他调用仍在执行时被调用。在调用 *aiClose* 后，不会进行任何调用。

以下是异步导入器的生命周期概述：

1. 主机在标准导入器上调用 *imOpenFile* 和 *imGetInfo*。
2. 主机在标准导入器上调用 *imCreateAsyncImporter*。此时，标准导入器为异步导入器创建私有数据。异步导入器**不得**包含指向标准导入器的链接，因为它们的生命周期现在已解耦。因此，异步导入器必须包含来自创建者导入器的所有相关私有数据的副本。导入器首选项也保证在异步导入器的生命周期内不会更改。
3. 主机使用异步导入器执行 I/O。
4. 主机关闭异步导入器，忘记它。这将在应用程序失去焦点或不再需要异步导入器时发生。

---

## privateData

不要使用全局变量来存储数据。请改用 privateData。每个剪辑都可以有自己的 privateData。主机应用程序会自动将正确的 privateData 传递给相应的导入器实例。

对于 privateData，创建一个指向您希望存储的自定义结构的句柄（在 `imGetInfo8` 或 `imGetPrefs8` 期间），并将句柄保存到传入结构的 privateData 成员中。

导入器负责使用 Premiere 的内存函数分配和释放 privateData 的内存。

在 *imCloseFile* 或 *imShutdown* 期间释放分配的 privateData，视情况而定。

---

## 剪辑源设置

此数据对于每个剪辑实例是唯一的，可用于存储影响剪辑中视频和/或音频外观的剪辑范围数据，通常是用户可修改的。

例如，标题/图形导入器的剪辑源设置可以包含描述该剪辑的文本和形状的所有数据。

对于原始视频剪辑，它可以包含影响视频在导入前如何开发的元数据。

从 Premiere Pro CC 2014 开始，导入器现在可以选择它们渲染的格式，这允许导入器根据启用的硬件和其他剪辑源设置（如 HDR）更改像素格式和质量。

要处理协商，请实现 `imSelectClipFrameDescriptor`。

剪辑源设置可以在文件创建时显示（对于合成或自定义导入器），或者在双击剪辑时显示。

设置数据应存储在由导入器定义的磁盘安全的首选项结构中。

Premiere 将根据第一次调用 *imGetPrefs8* 时返回的 prefsLength 分配首选项。

当不再需要时，Premiere 将释放首选项。

一旦分配了首选项，导入器应在所有后续调用 *imGetPrefs8* 时显示其设置对话框，并将任何设置对话框设置存储在首选项中。

与 privateData 一样，每个剪辑都有自己的首选项，主机应用程序会自动将正确的首选项传递给相应的导入器实例。

如果用户以应重新导入帧的方式更改剪辑源设置，则导入器应使用导入器文件管理器套件调用主文件上的 RefreshFileAsync()。

这在 SDK 自定义导入器示例代码中进行了演示。

### 在设置对话框中显示视频预览

如果剪辑放置在时间轴中，并且通过双击时间轴中的剪辑打开其设置对话框，则导入可以从设置对话框的时间轴中获取帧。只有位于当前剪辑或时间轴位置下方的图层上的渲染帧可用。使用 `getPreviewFrameEx` 回调与 imGetPrefsRec 中由 tdbTimelocation 提供的时间。timelineData 在 *imGetPrefs8* 期间也有效。

---

## 文件处理

从单个文件导入媒体的基本导入器可以依赖主机提供基本的文件处理。如果剪辑有子文件或自定义文件系统，导入器可以提供自己的文件处理。在 `imInit` 期间将 canOpen、canSave 和 canDelete 设置为 true，并响应 `imOpenFile8`、*imQuietFile*、*imCloseFile*、*imSaveFile8*、*imDeleteFile8*。

使用 [异步文件读取器套件](../suites#async-file-reader-suite) 进行跨平台文件操作。

### 静默与关闭文件

当应用程序失去焦点时，导入器会收到 *imQuietFile*，用于它被要求打开的每个文件。更新任何 PrivateData 并关闭文件。如果项目关闭，则发送 *imCloseFile*，告诉导入器释放任何 PrivateData。如果导入器没有存储任何 PrivateData，则不会收到 *imCloseFile*。

### 增长中的文件

当 Premiere Pro 尝试刷新增长中的文件（在 N 秒后，由首选项值确定）时，它会静默现有的导入器实例，并打开一个指向同一文件的新实例。作为响应，导入器应报告当前（新）持续时间，并在确定文件是否仍在增长后，适当设置 `imFileInfoRec.mayBeGrowing`。

### 从流媒体源导入

为了从流媒体源导入视频，以假装文件是本地文件或可在网络上访问，请创建一个占位符文件，如 video_proxy.abc。

在此文件中，包含让您的导入器知道它是您自己的类型的信息，以及 http 路径，如下所示：

"MyCompany ABC 流媒体格式占位符文件 [https://myurl.com/video.abc](https://myurl.com/video.abc)"

您的导入器将打开本地的 video_proxy.abc 文件，检查标头并发现它是您自己的占位符文件，然后访问包含的 http 位置的实际内容。要创建本地的 .abc 文件，您可以使用一个自定义导入器，该导入器会显示一个操作系统对话框以选择远程文件，或者使用 Premiere 面板来执行此操作。面板 SDK 可以在这里找到：

[https://github.com/Adobe-CEP/Samples/tree/master/PProPanel](https://github.com/Adobe-CEP/Samples/tree/master/PProPanel)

如果文件类型是 Premiere Pro 支持的现有文件类型，则在 `imImportInfoRec.priority` 中设置一个高值，以让您的导入器首先处理该文件。

为了使您的文件类型在代理 > 附加代理窗口中可见，请设置 imIndFormatRec.flags |= xfIsMovie（此标志标记为过时，但仍需要用于此情况）

如果您的导入器支持不同的分数分辨率和解码质量，则可以在响应 *imGetPreferredFrameSize* 选择器时枚举分数分辨率，并且在导入请求中将解码质量提示发送给您的导入器（例如在 imSourceVideoRec.inQuality 中）。

---

## 音频转换和峰值文件生成

当包含音频的剪辑导入到 Premiere 时，可能会生成一种或两种类型的文件：

首先，始终会创建一个单独的 .pek 文件。这包含峰值音频样本，以便在 Premiere 需要绘制音频波形时快速访问，例如在源监视器或时间轴面板中。

其次，音频可能会转换为单独的 .cfa 文件。转换后的音频是交错的 32 位浮点格式，与序列音频采样率匹配，以最大化 Premiere 在不牺牲质量的情况下渲染音频效果和混合的速度。

这两种文件都可以通过使用 *imImportAudio7* 的顺序调用来生成音频。音频转换无法通过 Premiere 菜单或 API 禁用。但是，如果导入器可以提供剪辑的随机访问、未压缩的音频，Premiere 将不会转换音频。所有压缩的音频数据都必须转换。

具体来说，设置这些标志以避免转换非常重要：imImportInfoRec.avoidAudioConform = kPrTrue; imFileInfoRec8.accessModes |= kRandomAccessImport;

从 CS5.5 开始，如果导入器实现了从剪辑中读取峰值音频数据的更快方法，则导入器也可以选择提供峰值音频数据。通过将 imImportInfoRec.canProvidePeakAudio 设置为非零，导入器将在请求此数据时发送 *imGetPeakAudio*。从 CS6 开始，如果导入器希望逐个剪辑提供峰值音频数据，则可以相应地设置 imFileInfoRec8.canProvidePeakData。

.cfa 和 .pek 文件的位置由用户在编辑 > 首选项 > 媒体 > 媒体缓存文件中指定的路径确定。当项目关闭时，文件将被清理。如果源剪辑未保存在项目中，则相关的转换音频文件将被删除。

导入器可以在转换完成之前获取用于拖动、播放和其他时间轴操作的音频，从而在转换期间获得响应的音频反馈。为此，它们必须支持随机访问和顺序访问音频导入。应在 imFileInfoRec8.accessModes 中设置 `kSeparateSequentialAudio` 访问模式。

---

## 质量级别

导入器可以选择支持两种不同的质量模式，使用 imImportImageRec 中的 imDraftMode 标志。

---

## 隐藏字幕

从 CC 开始，导入器可以支持嵌入在源媒体中的隐藏字幕。内置的 QuickTime 导入器提供了此功能。

:::note
Premiere Pro 还可以导入和导出与任何媒体文件一起的旁注文件（例如 .mcc、.scc 或 .xml）中的字幕。这不需要导入器方面的任何特定工作。
:::

要支持嵌入的隐藏字幕，请将 `imImportInfoRec.canSupportClosedCaptions` 设置为 true。导入器应处理以下选择器：`imInitiateAsyncClosedCaptionScan`、`imGetNextClosedCaption` 和 *imCompleteAsyncClosedCaptionScan*。

*imInitiateAsyncClosedCaptionScan* 将为通过设置 canSupportClosedCaptions 为 true 的导入器导入的每个文件调用。此时，插件应确定此文件是否有隐藏字幕数据。如果没有，则插件应简单地返回 imNoCaptions，一切就完成了。如果插件没有为该调用报告错误，则将调用 *imGetNextClosedCaption*，直到插件返回 imNoCaptions。之后，将调用 *imCompleteAsyncClosedCaptionScan*，通知导入器主机已完成请求字幕。

*imGetNextClosedCaption* 和 *imCompleteAsyncClosedCaptionScan* 可能会从与最初调用 `imInitiateAsyncClosedCaptionScan` 的线程不同的线程调用。为了帮助实现这一点，`imInitiateAsyncClosedCaptionScan` 期间的 `outAsyncCaptionScanPrivateData` 可以由导入器分配，用于即将到来的调用，可以在 *imCompleteAsyncClosedCaptionScan* 中释放。

---

## 多通道音频

从 CC 开始，对于单声道、立体声和 5.1 之外的音频配置，导入器可以通过实现新的 *imGetAudioChannelLayout* 选择器来指定通道布局。否则，通道布局将被假定为离散的。对于 CC 之前的支持，导入器需要将它们作为多个流导入。

---

## 多流

导入器可以支持多个音频和/或视频流。对于大多数具有单个视频和简单音频配置（单声道、立体声或 5.1）的文件类型，只需要一个流。多流对于立体声素材、分层文件类型（如 Photoshop PSD 文件）或具有复杂音频配置的剪辑（例如 4 个单声道音频通道）非常有用。以下描述了多流的一般情况。对于立体声导入器，请参阅下面的描述。

导入器在迭代调用 *imGetInfo8* 期间逐个描述每个流。在每次调用中，导入器描述一个流，并返回 imIterateStreams，直到达到最后一个流，然后返回 imBadStreamIndex。将 imFileInfoRec8->streamsAsComp 设置为 kPrFalse，以便在 Premiere Pro 中将流集显示为单个剪辑。

在 *imGetInfo8* 中，将 streamIdx 保存在 privateData 中，以便以后访问。这样，当在 *imImportAudio7* 中调用时，导入器将知道要传递回哪个音频流。

请参阅 SDK 文件导入器中的示例代码，可以通过在 SDK_File_Import.h 中取消注释 MULTISTREAM_AUDIO_TESTING 定义来启用。

### 立体声视频

首先，导入器必须宣传多个视频流。在 *imGetInfo8* 期间，主机在 imFileInfoRec8.streamIdx 中传递流索引。如果剪辑有第二个流，则在索引 0 上，导入器应返回 imIterateStreams，并再次调用第二个流。在第二个流上，您返回 imNoErr，如前所述。好处是这在 Premiere Pro CS5.5 及更早版本中有效 - 当存在两个视频流时，在导入时，它们将仅显示为两个不同的项目项。

在 CS6 之前，导入器需要有一个首选项结构，并且在 *imGetInfo8* 上需要将流索引存储在该结构中。使用 CS6，这要简单得多。现在，在 `imSourceVideoRec`（在 *imGetSourceVideo* 中传递，并且是异步导入器的 *aiFrameRequest* 的一部分）中，主机应用程序传递 currentStreamIndex（在以前称为 unused1 的值中）。这使得在提供 PPix 时更容易检查并区分两个流。

现在，显然不希望有两个项目项。为了将它们合并，导入器需要标记流（这里的逻辑非常简单，如果有多个标记的视频流，它将显示为单个项目项，并且该项目的所有视图将显示第一个流）。为此，有一个新的选择器：*imQueryStreamLabel*。传递给导入器的结构具有其 privateData、首选项数据和流索引，并且需要在 PrSDKString 中传递回标签。如果您不熟悉 PrSDKStringSuite，使用起来相当明显。在这种情况下，您将分配一个字符串，传递 UTF-8 数据或 UTF-16 数据。

在 PrSDKStreamLabel.h 中，我们定义了两个标签：kPrSDK_StreamLabelStereoscopicLeft 和 kPrSDKStreamLabel_Stereoscopic_Right。按照惯例，我们希望左流为流 0，右流为流 1。这纯粹是为了一致性 - 如果我们有来自多个导入器的多个立体声剪辑，我们希望缩略图都一致。如果我们坚持这个惯例，那么缩略图都将显示左流。

为了与其他第三方良好集成，我们强烈建议在立体声导入器中使用这些标签。但是，整个 StreamLabel 机制故意保持非常通用。您可以在导入器和效果中使用任何标签，并且在请求视频段时，您可以传递任何您想要的标签。如果您有其他用途，我们很乐意听取您的意见，并欢迎任何错误报告。

---

## 项目管理器支持

Premiere Pro 中的项目管理器允许用户归档项目、修剪未使用的媒体或将所有源文件收集到一个位置。导入器对其处理的源最为了解。因此，Premiere Pro 不会对源媒体做出任何假设，而是依赖导入器来处理修剪和文件大小估计。只有专门支持修剪的导入器才会在项目管理器修剪项目时修剪而不复制。

要支持修剪，导入器需要在 *imInit* 期间设置 canCalcSizes 和 canTrim 标志，并支持 *imCalcSize8*、*imCheckTrim8* 和 *imTrimFile8*。

如果每个剪辑有多个源文件（例如音频通道在单独的文件中），导入器还应设置 canCopy 并支持 *imCopyFile*。否则，项目管理器将不知道其他源文件。

外部文件，例如纹理、徽标等，由导入器实例使用但未在项目面板中显示为素材的文件，应在 *imGetInfo8* 或 *imGetPrefs8* 期间使用 [文件注册套件](../../universals/sweetpea-suites#file-registration-suite) 注册到 Premiere Pro。注册的文件将在使用项目管理器修剪或复制项目时被考虑在内。

---

## 创建自定义导入器

此导入器 API 的变体允许导入器在 Premiere 中工作时动态创建基于磁盘的媒体。标题插件或类似插件应使用此 API。一旦您的剪辑创建，它将被视为任何其他标准文件，并将接收所有标准缺失文件处理。

自定义导入器**必须**执行以下操作：

- 在 imImportInfoRec 中将以下标志设置为 true；canCreate、canOpen、addToMenu、noFile。这告诉 Premiere 您的插件将在 *imGetPrefs8* 时在磁盘上创建一个剪辑。
- 要确定何时需要创建新剪辑与修改现有剪辑，请检查 `imFileAccessRec` 文件名。如果它与插件显示名称（在 PiPL 中设置）相同，则创建新剪辑；否则修改剪辑。
- 如果用户在创建新剪辑时从对话框中取消，则返回 imCancel。
- 如果剪辑被修改，导入器需要做一些事情以便 Premiere 能够获取更改。将您的文件访问信息放入提供的 `imFileAccessRec` 中。Premiere 将使用此数据从现在开始引用您的剪辑。创建文件句柄后关闭它。在 *imGetPrefs8* 中创建文件句柄后返回 imSetFile，并在导入器文件管理器套件中调用 RefreshFileAsync() 以通知 Premiere 剪辑已被修改。Premiere 将立即调用您以打开文件并返回有效的 imFileRef。至少响应 *imOpenFile8*、*imQuietFile*、*imCloseFile*。

---

## 实时滚动标题

对于实时滚动标题，播放器和导入器必须专门设计以协同工作。导入器可以实现适当的功能，但播放器需要利用这些功能。

导入器可以使用 `imImageInfoRec.isRollCrawl` 来提供用于滚动标题的图像数据。如果导入器将其设置为非零值，则表示该图像是一个标题或其他可以滚动/爬行的图像，并且导入器支持 *imGetRollCrawlInfo* 和 *imRollCrawlRenderPage* 选择器。*imGetRollCrawlInfo* 用于从导入器获取滚动/爬行的信息，而 *imRollCrawlRenderPage* 用于获取滚动/爬行的渲染页面。

---

## 故障排除

### 如何优先处理文件

为了优先处理由内置导入器支持的文件类型（例如 MPEG、AVI、QuickTime 等），请提供不同的子类型和 classID，以便为支持的文件类型调用您的导入器。`imImportInfoRec.priority` 必须高于该文件类型的其他导入器。将此值设置为 100 或更高以覆盖所有内置导入器。Premiere Pro 有不止一种 AVI 导入器和 MPEG 导入器，它们使用相同的优先级机制。因此，您的导入器可以覆盖所有这些导入器，并优先处理文件类型。

仅仅因为您希望接管某些文件类型的处理，并不意味着您必须处理所有文件。要将不支持的子类型推迟到较低优先级的导入器，请在 *imOpenFile8* 或 *imGetInfo8* 期间返回 `imBadFile`。有关文件类型、子类型和 classID 的更多信息，请参阅媒体抽象章节。

### 菜单中重复的格式？

为了避免您的导入器在支持的文件格式弹出列表中多次出现，请在 *imGetIndFormat* 期间填写 `formatName`、`formatShortName` 和平台扩展名，且仅填写一次。

---

## 资源

导入器必须包含一个 IMPT 资源。Premiere 使用此资源来识别插件为导入器。此外，根据导入器的类型（标准、合成或自定义），可能需要 PiPL。

---

## 入口函数

```cpp
csSDK_int32 xImportEntry (
 csSDK_int32 selector,
 imStdParms *stdParms,
 void *param1,
 void *param2)
```

*selector* 是 Premiere 希望导入器执行的操作。`stdParms` 提供了回调函数，用于从 Premiere 获取更多信息或让 Premiere 执行任务。

`param1` 和 `param2` 根据选择器的不同而变化；它们可能包含特定值或指向结构的指针。如果成功，返回 `imNoErr`，否则返回适当的错误代码。

---

## 标准参数

此结构的指针会随每个选择器从主机应用程序发送到插件。

```cpp
typedef struct {
 csSDK_int32 imInterfaceVer;
 imCallbackFuncs *funcs;
 piSuitesPtr piSuites;
} imStdParms;
```

| 成员 | 描述 |
|---|---|
| `imInterfaceVer` | 导入器 API 版本 |
| | - Premiere Pro CC 2014 - `IMPORTMOD_VERSION_15` |
| | - Premiere Pro CC - `IMPORTMOD_VERSION_14` |
| | - Premiere Pro CS6.0.2 - `IMPORTMOD_VERSION_13` |
| | - Premiere Pro CS6 - `IMPORTMOD_VERSION_12` |
| | - Premiere Pro CS5.5 - `IMPORTMOD_VERSION_11` |
| | - Premiere Pro CS5 - `IMPORTMOD_VERSION_10` |
| | - Premiere Pro CS4 - `IMPORTMOD_VERSION_9` |
| `funcs` | 指向导入器回调函数的指针 |
| `piSuites` | 指向通用回调套件的指针 |

---

## 导入器特定的回调

```cpp
typedef struct {
 ClassDataFuncsPtr classFuncs;
 csSDK_int32 unused1;
 csSDK_int32 unused2;
} imCallbackFuncs;

typedef csSDK_int32 (*importProgressFunc){
 csSDK_int32 partDone;
 csSDK_int32 totalToDo;
void *trimCallbackID};
```

| 函数 | 描述 |
|---|---|
| `classFuncs` | 参见 [ClassData 函数](../../hardware/classdata-functions)。 |
| `importProgressFunc` | 在 *imSaveFile8* 和 *imTrimFile8* 期间，可在 `imSaveFileRec` 和 `imTrimFileRec` 中使用。 |
| | 回调函数指针，用于在项目归档或修剪期间调用 Premiere 并更新进度条并检查是否取消。 |
| | 将返回 `imProgressAbort` 或 `imProgressContinue`。 |
| | `trimCallbackID` 参数在相同的结构中传递。 |
