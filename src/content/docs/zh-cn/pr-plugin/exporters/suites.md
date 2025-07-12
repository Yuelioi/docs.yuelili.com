---
title: 套件
---
# 套件

有关如何获取和管理套件的信息，请参阅 [SweetPea 套件](../../universals/sweetpea-suites)。

---

## 导出文件套件

一个跨平台的套件，用于将文件写入磁盘。还提供了一个调用，用于根据文件对象获取文件路径。

版本 2 解决了版本 1 中寻址模式不匹配的问题，其中 `fileSeekMode_End` 被处理为 `fileSeekMode_Current`，反之亦然。

请参阅 PrSDKExportFileSuite.h。

---

## 导出信息套件

### GetExportSourceInfo

获取当前正在导出的源的信息。

```cpp
prSuiteError (*GetExportSourceInfo)(
 csSDK_uint32 inExporterPluginID,
 PrExportSourceInfoSelector inSelector,
 PrParam *outSourceInfo);
```

| 值 | 类型 | 描述 |
|---|---|---|
| `kExportInfo_VideoWidth` | Int32 | 源视频的宽度 |
| `kExportInfo_VideoHeight` | Int32 | 源视频的高度 |
| `kExportInfo_VideoFrameRate` | PrTime | 帧率 |
| `kExportInfo_VideoFieldType` | Int32 | prFieldType 值之一 |
| `kExportInfo_VideoDuration` | Int64 | PrTime 值 |
| `kExportInfo_PixelAspectNumerator` | Int32 | 像素宽高比（PAR）分子 |
| `kExportInfo_PixelAspectDenominator`| Int32 | 像素宽高比分母 |
| `kExportInfo_AudioDuration` | Int64 | PrTime 值 |
| `kExportInfo_AudioChannelsType` | Int32 | `PrAudioChannelType` 值之一。 |
| | | 如果没有音频，则返回 `0`（未定义）。 |
| `kExportInfo_AudioSampleRate` | Float64 | |
| `kExportInfo_SourceHasAudio` | Bool | 如果源有音频，则为非零值 |
| `kExportInfo_SourceHasVideo` | Bool | 如果源有视频，则为非零值 |
| `kExportInfo_RenderAsPreview` | Bool | 如果当前正在渲染预览文件，则返回非零值。 |
| `kExportInfo_SequenceGUID` | Guid | 一个 `PrPluginID`，它是序列的唯一 GUID。 |
| `kExportInfo_SessionFilePath` | PrMemoryPtr | 一个 `prUTF16Char` 数组。导出器应使用 [内存管理器套件](../../universals/sweetpea-suites#memory-manager-suite) 释放指针。 |
| `kExportInfo_VideoPosterFrameTickTime` | Int64 | CS5 新增。PrTime 值。 |
| `kExportInfo_SourceTimecode` | PrMemoryPtr | CS5.0.2 新增。源剪辑或序列的时间码。 |
| | | 序列时间码由序列的起始时间设置，使用序列的右键菜单。指向 ExporterTimecodeRec 结构的指针。 |
| | | 导出器应使用 [内存管理器套件](../../universals/sweetpea-suites#memory-manager-suite) 释放指针。 |
| `kExportInfo_UsePreviewFiles` | Bool | CC 新增。使用此选项检查用户是否在导出设置对话框中勾选了“使用预览”。 |
| | | 如果勾选，尽可能重用已渲染的任何预览文件，可以使用 [视频片段套件](../../universals/sweetpea-suites#video-segment-suite) 中的 `AcquireVideoSegmentsWithPreviewsID` 检索。 |
| `kExportInfo_NumAudioChannels` | Int32 | CC 新增。获取给定源中的音频通道数。 |
| | | 这可以用于自动初始化导出设置中音频选项卡中的音频通道参数以匹配源。 |

```cpp
typedef struct {
 csSDK_int64 mTimecodeTicks;
 csSDK_int64 mTicksPerFrame;
 bool mTimecodeStartPrefersDropFrame;
} ExporterTimecodeRec;
```

---

## 导出参数套件

为您的导出器 UI 指定所有参数。请参阅 PrSDKExportParamSuite.h。

此外，请参阅 SDK 导出示例，了解如何使用此套件的演示。

要提供一组单选按钮或下拉选择列表，请使用 `AddConstrainedValuePair()`。

添加两个选择将导致一对并排的单选按钮。

三个或更多选择将显示为下拉框。

仅添加一个值将导致硬编码的字符串。

在 CS5 及更高版本中，5.0.2 修复了宽度和高度范围未正确设置的问题。

当您在导出设置 UI 中调整宽度和高度时，您可能会注意到这一点。

通过取消选中约束宽度和高度比例的链，您将能够修改宽度和高度。

由于此错误的副作用，如果导出器用于在编辑模式下渲染预览文件，用户将能够选择 24x24 到 10240x8192 之间的任何预览帧大小。

CS6 添加了 `SetParamDescription()`，用于设置参数的提示字符串。

CC 添加了 `MoveParam()`，用于将现有参数移动到新位置。这可以用于标准参数和组参数。

---

## 导出进度套件

用于拉取模型的导出器。在导出过程中报告进度。此外，处理用户暂停或取消导出的情况。请参阅 PrSDKExportProgressSuite.h。

---

## 导出标准参数套件

CS6 新增。用于注册一组常见参数集的套件，减少插件端的参数管理代码。

### AddStandardParams

注册一组标准参数供导出器使用。

在 `exSelGenerateDefaultParams` 期间调用。

```cpp
prSuiteError (*AddStandardParams)(
 csSDK_uint32 inExporterID,
 PrSDKStdParamType inSDKStdParamType);
```

| 成员 | 描述 |
|---|---|
| `inExporterID` | 传入 `exDoExportRec` 中的 `exporterPluginID`。 |
| `inSDKStdParamType` | 使用以下之一： |
| | <pre lang="cpp">enum PrSDKStdParamType {<br/>  SDKStdParams_Video,<br/>  SDKStdParams_Audio,<br/>  SDKStdParams_Still,<br/>  SDKStdParams_VideoBitrateGroup,<br/>  SDKStdParams_Video_NoRenderMax,<br/>  SDKStdParams_Video_AddRenderMax,<br/>  SDKStdParams_AudioTabOnly,<br/>  SDKStdParams_AudioBitrateGroup,<br/>  SDKStdParams_VideoWithSizePopup<br/>};</pre> |

### PostProcessParamNames

在 `exSelPostProcessParams` 期间调用。

```cpp
prSuiteError (*PostProcessParamNames)(
 csSDK_uint32 inExporterID,
 PrAudioChannelType inSourceAudioChannelType);
```

| 成员 | 描述 |
| --- | --- |
| `inExporterID` | 传入 `exDoExportRec` 中的 `exporterPluginID`。 |
| `inSourceAudioChannelType` | 传入源音频通道类型，可以从 [导出信息套件](#export-info-suite) 中的 `GetExportSourceInfo` 查询。 |

### QueryOutputSettings

在 `exSelQueryOutputSettings` 期间调用。

```cpp
prSuiteError (*QueryOutputSettings)(
 csSDK_uint32 inExporterID,
 exQueryOutputSettingsRec* outOutputSettings);
```

| 成员 | 描述 |
| --- | --- |
| `inExporterID` | 传入 `exDoExportRec` 中的 `exporterPluginID`。 |
| `outOutputSettings` | 此结构将根据标准参数设置填充。 |

### MakeParamSummary

在 `exSelGetParamSummary` 期间调用。

```cpp
prSuiteError (*MakeParamSummary)(
 csSDK_uint32 inExporterID,
 csSDK_int32 inDoVideo,
 csSDK_int32 inDoAudio,
 prUTF16Char* outVideoDescription,
 prUTF16Char* outAudioDescription);
```

| 成员 | 描述 |
| --- | --- |
| `inExporterID` | 传入 `exDoExportRec` 中的 `exporterPluginID`。 |
| `inDoVideo` | 传入 `exParamSummaryRec.exportVideo` / `exportAudio`，以便根据是否导出视频/音频来设置摘要。 |
| `inDoAudio` | |
| `outVideoDescription` | 这些将根据标准参数设置填充。 |
| `outAudioDescription` | |

---

## 导出器实用套件

CS6 新增。为推送模型的导出器提供功能，并提供一种方式注册导出事件（错误、警告或信息）以由主机显示并写入日志。

### DoMultiPassExportLoop

注册回调以将视频帧推送到导出器。此函数假定您的导出器支持 `exSelQueryOutputSettings`，该函数将被调用。

```cpp
prSuiteError (*DoMultiPassExportLoop)(
 csSDK_uint32 inExporterID,
 const ExportLoopRenderParams* inRenderParams,
 csSDK_uint32 inNumberOfPasses,
 PrSDKMultipassExportLoopFrameCompletionFunction inCompletionFunction,
 void* inCompletionParam);
```

| 成员 | 描述 |
|---|---|
| `inExporterID` | 传入 `exDoExportRec` 中的 `exporterPluginID`。 |
| `inRenderParams` | 传入将用于渲染循环的参数，该循环将通过提供的回调 `inCompletionFunction` 推送渲染的帧。 |
| | `inReservedProgressPreRender` 和 `inReservedProgressPostRender` 应设置为在开始渲染循环之前显示在进度条中的进度量，以及在完成渲染循环后剩余的进度量。 |
| | 这些值默认为零。 |
| | <pre lang="cpp">typedef struct {<br/>  csSDK_int32    inRenderParamsSize;<br/>  csSDK_int32    inRenderParamsVersion;<br/>  PrPixelFormat  inFinalPixelFormat;<br/>  PrTime     inStartTime;<br/>  PrTime     inEndTime;<br/>  float      inReservedProgressPreRender;<br/>  float      inReservedProgressPostRender;<br/>  bool       inHardwareResidentFrameOutputSupported;  // new in 14.x<br/>} ExportLoopRenderParams;</pre> |
| `inNumberOfPasses` | 设置为 1，除非您需要多通道编码，例如两通道或三通道编码。 |
| `inCompletionFunction` | 在此处提供您自己的回调，当主机推送渲染的帧时将调用该回调。使用以下函数签名： |
| | <pre lang="cpp">typedef prSuiteError (\*PrSDKMultipassExportLoop FrameCompletionFunction)(<br/>  csSDK_uint32  inWhichPass,<br/>  csSDK_uint32  inFrameNumber,<br/>  csSDK_uint32  inFrameRepeatCount,<br/>  PPixHand      inRenderedFrame,<br/>  void*     inCallbackData);</pre> |
| | 目前，没有简单的方法确保推送的帧在函数调用生命周期之外存活。 |
| | 如果您对此功能感兴趣，请联系我们并解释您的需求。 |
| `inCompletionParam` | 传入一个 void \* 到您希望发送到 `inCompletionFunction` 的数据，在 `inCallbackData` 中。 |

### ReportIntermediateProgressForRepeatedVideoFrame

注册回调以将视频帧推送到导出器。

此函数假定您的导出器支持 `exSelQueryOutputSettings`，该函数将被调用。

```cpp
prSuiteError (*ReportIntermediateProgressForRepeatedVideoFrame)(
 csSDK_uint32 inExporterID,
 csSDK_uint32 inRepetitionsProcessedSinceLastUpdate);
```

| 成员 | 描述 |
| --- | --- |
| `inExporterID` | 传入 `exDoExportRec` 中的 `exporterPluginID`。 |
| `inRepetitionsProcessedSinceLastUpdate` | 传入自上次调用以来处理的重复帧数（如果有）。 |

### ReportEvent

向主机报告事件，用于 Adobe Media Encoder 渲染队列或 Premiere Pro 中正在进行的特定编码。

这些事件显示在应用程序 UI 中，并添加到 AME 编码日志中。

```cpp
prSuiteError (*ReportEvent)(
 csSDK_uint32 inExporterID,
 csSDK_uint32 inEventType,
 const prUTF16Char* inEventTitle,
 const prUTF16Char* inEventDescription);
```

| 成员 | 描述 |
|---|---|
| `inExporterID` | 传入 `exDoExportRec` 中的 `exporterPluginID`。 |
| `inEventType` | 使用 [错误套件](../../universals/sweetpea-suites#error-suite) 中的类型之一： |
| | - `kEventTypeInformational` |
| | - `kEventTypeWarning` |
| | - `kEventTypeError` |
| `inEventTitle` | 为用户提供有关事件的信息。 |
| `inEventDescription` | |

---

## 调色板套件

一个很少使用的套件，用于对图像进行调色板化，例如用于 GIF。请参阅 PrSDKPaletteSuite.h。

---

## 序列音频套件

从主机获取音频。

### MakeAudioRenderer

创建一个音频渲染器，准备从主机获取渲染的音频。

```cpp
prSuiteError (*MakeAudioRenderer)(
 csSDK_uint32 inPluginID,
 PrTime inStartTime,
 PrAudioChannelType inChannelType,
 PrAudioSampleType inSampleType,
 float inSampleRate,
 csSDK_uint32* outAudioRenderID);
```

| 成员 | 描述 |
| --- | --- |
| `inPluginID` | 传入 `exDoExportRec` 中的 `exporterPluginID`。 |
| `inStartTime` | 音频请求的开始时间。 |
| `inChannelType` | 所需通道类型的 `PrAudioChannelType` 枚举值。 |
| `inSampleType` | 这应始终为 `kPrAudioSampleType_32BitFloat`。其他类型不受支持。 |
| `inSampleRate` | 每秒采样数。 |
| `outAudioRenderID` | 此 ID 传回后，需要用于后续调用此套件。 |

### ReleaseAudioRenderer

当导出器完成请求音频时，释放音频渲染器。

```cpp
prSuiteError (*ReleaseAudioRenderer)(
 csSDK_uint32 inPluginID,
 csSDK_uint32 inAudioRenderID);
```

| 成员 | 描述 |
| --- | --- |
| `inPluginID` | 传入 `exDoExportRec` 中的 `exporterPluginID`。 |
| `inAudioRenderID` | 此调用将释放具有此 ID 的音频渲染器。 |

### GetAudio

从主机返回下一个连续的请求音频采样帧数，指定在 `inFrameCount` 中，`inBuffer` 中为非交错浮点值数组。

如果没有错误，则返回 `suiteError_NoError`。

插件必须管理 `inBuffer` 的内存分配，`inBuffer` 必须指向长度为 `inFrameCount` 的 n 个浮点值缓冲区，其中 n 是通道数。

当 `inClipAudio` 为非零时，此参数会使 `GetAudio` 在 +/- 1.0 处裁剪音频采样。

```cpp
prSuiteError (*GetAudio)(
 csSDK_uint32 inAudioRenderID,
 csSDK_uint32 inFrameCount,
 float** inBuffer,
 char inClipAudio);
```

| 成员 | 描述 |
|---|---|
| `inAudioRenderID` | 传入从 `MakeAudioRenderer()` 返回的 `outAudioRenderID`。 |
| | 这为主机提供了音频渲染的上下文。 |
| `inFrameCount` | 返回 `inBuffer` 中的音频帧数。 |
| | 除非刚刚调用了 `ResetAudioToBeginning`，否则始终返回下一个连续的音频帧。 |
| `inBuffer` | 由导出器分配的浮点数组数组。 |
| | 主机返回每个音频通道的采样在单独的数组中。 |
| `inClipAudio` | 当为 true 时，`GetAudio` 将返回在 +/- 1.0 处裁剪的音频。否则，它将返回未裁剪的音频。 |

### ResetAudioToBeginning

此调用将重置音频生成的位置到时间零。这可以用于多通道编码。

```cpp
prSuiteError (*ResetAudioToBeginning)(
 csSDK_uint32 inAudioRenderID);
```

### GetMaxBlip

返回可以从 `GetAudio` 调用中请求的最大音频采样帧数，结果存储在 `maxBlipSize` 中。

```cpp
prSuiteError (*GetMaxBlip)(
 csSDK_uint32 inAudioRenderID,
 PrTime inTicksPerFrame,
 csSDK_uint32* maxBlipSize);
```

---

## 序列渲染套件

从主机可用的渲染器中获取渲染后的视频。这可能会使用主机内置的渲染器，或者插件渲染器（如果可用）。为了获得最佳性能，请使用异步渲染请求与源媒体预取调用，尽管同步渲染也可用。

版本 4，新增于 CS5.5，添加了 `RenderVideoFrameAndConformToPixelFormat()`。

### MakeVideoRenderer()

创建一个视频渲染器，准备获取渲染后的视频。

```cpp
prSuiteError (*MakeVideoRenderer)(
 csSDK_uint32 pluginID,
 csSDK_uint32* outVideoRenderID
 PrTime inFrameRate);
```

| 成员 | 描述 |
| --- | --- |
| `pluginID` | 传入 `exDoExportRec` 中的 `exporterPluginID`。 |
| `outVideoRenderID` | 返回的 ID 用于后续调用此套件。 |
| `inFrameRate` | 帧率，以 ticks 为单位。 |

### ReleaseVideoRenderer()

当导出器完成视频请求时，释放视频渲染器。

```cpp
prSuiteError (*ReleaseVideoRenderer)(
 csSDK_uint32 pluginID,
 csSDK_uint32 inVideoRenderID);
```

| 成员 | 描述 |
| --- | --- |
| `pluginID` | 传入 `exDoExportRec` 中的 `exporterPluginID`。|
| `inVideoRenderID` | 调用将释放具有此 ID 的视频渲染器。 |

### struct SequenceRender_ParamsRec

在调用 `RenderVideoFrame()`、`QueueAsyncVideoFrameRender()` 或 `PrefetchMediaWithRenderParameters()` 之前填充此结构。

:::note
如果请求的帧宽高比与序列的宽高比不匹配，帧将被信箱化或柱状化，而不是拉伸以适合帧。
:::

```cpp
typedef struct {
 const PrPixelFormat* inRequestedPixelFormatArray;
 csSDK_int32 inRequestedPixelFormatArrayCount;
 csSDK_int32 inWidth;
 csSDK_int32 inHeight;
 csSDK_int32 inPixelAspectRatioNumerator;
 csSDK_int32 inPixelAspectRatioDenominator;
 PrRenderQuality inRenderQuality;
 prFieldType inFieldType;
 csSDK_int32 inDeinterlace;
 PrRenderQuality inDeinterlaceQuality;
 csSDK_int32 inCompositeOnBlack;
} SequenceRender_ParamsRec;
```

| 成员 | 描述 |
| --- | --- |
| `inRequestedPixelFormatArray` | 一个 PrPixelFormats 数组，按顺序列出您的格式偏好。 |
| `inRequestedPixelFormatArrayCount` | 像素格式数组的大小。 |
| `inWidth` | 渲染的宽度。 |
| `inHeight` | 渲染的高度。 |
| `inPixelAspectRatioNumerator` | 像素宽高比的分子。 |
| `inPixelAspectRatioDenominator` | 像素宽高比的分母。 |
| `inRenderQuality` | 使用 PrRenderQuality 枚举值之一。 |
| `inFieldType` | 使用 prFieldType 常量之一。 |
| `inDeinterlace` | 设置为非零以强制显式去隔行。否则，渲染器将使用输出字段设置来确定是否自动去隔行任何隔行源。 |
| `inDeinterlaceQuality` | 使用 PrRenderQuality 枚举值之一。 |
| `inCompositeOnBlack` | 设置为非零以在黑色背景上合成渲染。 |

### struct SequenceRender_ParamsRecExt

在调用 `RenderVideoFrame()`、`QueueAsyncVideoFrameRender()` 或 `PrefetchMediaWithRenderParameters()` 之前填充此结构。

:::note
如果请求的帧宽高比与序列的宽高比不匹配，帧将被信箱化或柱状化，而不是拉伸以适合帧。
:::

```cpp
typedef struct {
 const PrPixelFormat* inRequestedPixelFormatArray;
 csSDK_int32 inRequestedPixelFormatArrayCount;
 csSDK_int32 inWidth;
 csSDK_int32 inHeight;
 csSDK_int32 inPixelAspectRatioNumerator;
 csSDK_int32 inPixelAspectRatioDenominator;
 PrRenderQuality inRenderQuality;
 prFieldType inFieldType;
 csSDK_int32 inDeinterlace;
 PrRenderQuality inDeinterlaceQuality;
 csSDK_int32 inCompositeOnBlack;
 PrSDKColorSpaceID inPrSDKColorSpaceID;
} SequenceRender_ParamsRecExt;
```

| 成员 | 描述 |
| --- | --- |
| `inRequestedPixelFormatArray` | 一个 PrPixelFormats 数组，按顺序列出您的格式偏好。 |
| `inRequestedPixelFormatArrayCount` | 像素格式数组的大小。 |
| `inWidth` | 渲染的宽度。 |
| `inHeight` | 渲染的高度。 |
| `inPixelAspectRatioNumerator` | 像素宽高比的分子。 |
| `inPixelAspectRatioDenominator` | 像素宽高比的分母。 |
| `inRenderQuality` | 使用 PrRenderQuality 枚举值之一。 |
| `inFieldType` | 使用 prFieldType 常量之一。 |
| `inDeinterlace` | 设置为非零以强制显式去隔行。否则，渲染器将使用输出字段设置来确定是否自动去隔行任何隔行源。 |
| `inDeinterlaceQuality` | 使用 PrRenderQuality 枚举值之一。 |
| `inCompositeOnBlack` | 设置为非零以在黑色背景上合成渲染。 |
| `inPrSDKColorSpaceID` | 标识正在使用的色彩空间。 |

### struct SequenceRender_ParamsRecExt2

在调用 `RenderVideoFrame()`、`QueueAsyncVideoFrameRender()` 或 `PrefetchMediaWithRenderParameters()` 之前填充此结构。

:::note
如果请求的帧宽高比与序列的宽高比不匹配，帧将被信箱化或柱状化，而不是拉伸以适合帧。
:::

```cpp
typedef struct {
 const PrPixelFormat* inRequestedPixelFormatArray;
 csSDK_int32 inRequestedPixelFormatArrayCount;
 csSDK_int32 inWidth;
 csSDK_int32 inHeight;
 csSDK_int32 inPixelAspectRatioNumerator;
 csSDK_int32 inPixelAspectRatioDenominator;
 PrRenderQuality inRenderQuality;
 prFieldType inFieldType;
 csSDK_int32 inDeinterlace;
 PrRenderQuality inDeinterlaceQuality;
 csSDK_int32 inCompositeOnBlack;
 PrSDKColorSpaceID inPrSDKColorSpaceID;
 PrSDKLUTID inPrSDKLUTID; // 新增以支持导出 LUT
} SequenceRender_ParamsRecExt2;
```

| 成员 | 描述 |
| --- | --- |
| `inRequestedPixelFormatArray` | 一个 PrPixelFormats 数组，按顺序列出您的格式偏好。 |
| `inRequestedPixelFormatArrayCount` | 像素格式数组的大小。 |
| `inWidth` | 渲染的宽度。 |
| `inHeight` | 渲染的高度。 |
| `inPixelAspectRatioNumerator` | 像素宽高比的分子。 |
| `inPixelAspectRatioDenominator` | 像素宽高比的分母。 |
| `inRenderQuality` | 使用 PrRenderQuality 枚举值之一。 |
| `inFieldType` | 使用 prFieldType 常量之一。 |
| `inDeinterlace` | 设置为非零以强制显式去隔行。否则，渲染器将使用输出字段设置来确定是否自动去隔行任何隔行源。 |
| `inDeinterlaceQuality` | 使用 PrRenderQuality 枚举值之一。 |
| `inCompositeOnBlack` | 设置为非零以在黑色背景上合成渲染。 |
| `inPrSDKColorSpaceID` | 新增于 13.0。标识正在使用的色彩空间。 |
| `inPrSDKLUTID` | 新增于 14.4。标识正在使用的色彩空间。 |

### struct SequenceRender_GetFrameReturnRec

从 `RenderVideoFrame()` 返回，并通过 `PrSDKSequenceAsyncRenderCompletionProc()` 传递。

```cpp
typedef struct {
 void* asyncCompletionData;
 csSDK_int32 returnVal;
 csSDK_int32 repeatCount;
 csSDK_int32 onMarker;
 PPixHand outFrame;
} SequenceRender_GetFrameReturnRec;
```

| 成员 | 描述 |
|---|---|
| `asyncCompletionData` | 从 `QueueAsyncVideoFrameRender()` 传递给 `PrSDKSequenceAsyncRenderCompletionProc()`。 |
| | 不被 `RenderVideoFrame()` 使用。 |
| `returnVal` | `ErrNone`、`Abort`、`Done` 或错误代码。 |
| `repeatCount` | 从此帧开始的重复帧数。 |
| | 在输出文件中，这可能是写入 NULL 帧、更改当前帧的持续时间，或根据编解码器适当的任何操作。 |
| `onMarker` | 如果非零，则此帧上有标记。 |
| `outFrame` | 从 `RenderVideoFrame()` 返回。不从 `PrSDKSequenceAsyncRenderCompletionProc()` 返回。 |

### RenderVideoFrame()

基本的同步调用，从主机获取渲染后的帧。

返回：

- `suiteError_NoError` 如果可以继续导出，
- `exportReturn_Abort` 如果用户中止了导出，
- `exportReturn_Done` 如果导出已完成，或
- 错误代码。

```cpp
prSuiteError (*RenderVideoFrame)(
 csSDK_uint32 inVideoRenderID,
 PrTime inTime,
 SequenceRender_ParamsRec* inRenderParams,
 PrRenderCacheType inCacheFlags,
 SequenceRender_GetFrameReturnRec* getFrameReturn);
```

| 成员 | 描述 |
|---|---|
| `inVideoRenderID` | 传入从 `MakeVideoRenderer()` 返回的 `outVideoRenderID`。 |
| | 这为主机提供了视频渲染的上下文。 |
| `inTime` | 请求的帧时间。 |
| `inRenderParams` | 渲染的详细信息。 |
| `inCacheFlags` | 一个或多个缓存标志。 |
| `getFrameReturn` | 传递回一个结构，其中包含有关返回帧的信息以及渲染后的帧本身。 |

### GetFrameInfo()

获取有关给定帧的信息。

目前，`SequenceRender_FrameInfoRec` 仅包含 `repeatCount`，即从此帧开始的重复帧数。

```cpp
prSuiteError (*GetFrameInfo)(
 csSDK_uint32 inVideoRenderID,
 PrTime inTime,
 SequenceRender_FrameInfoRec* outFrameInfo);
```

### SetAsyncRenderCompletionProc()

注册一个通知回调，用于在渲染完成时获取异步渲染的帧。

`asyncGetFrameCallback` 应具有 `PrSDKSequenceAsyncRenderCompletionProc` 中描述的签名。

```cpp
prSuiteError (*SetAsyncRenderCompletionProc)(
 csSDK_uint32 inVideoRenderID,
 PrSDKSequenceAsyncRenderCompletionProc asyncGetFrameCallback,
 long callbackRef);
```

| 成员 | 描述 |
|---|---|
| `inVideoRenderID` | 传入从 `MakeVideoRenderer()` 返回的 `outVideoRenderID`。 |
| | 这将传递给 `PrSDKSequenceAsyncRenderCompletionProc`。 |
| `asyncGetFrameCallback` | 通知回调。 |
| `inCallbackRef` | 一个指针，保存导出器的私有数据。 |
| | 例如，这可以是指向导出器实例的指针。这也将传递给 `PrSDKSequenceAsyncRenderCompletionProc`。 |

### PrSDKSequenceAsyncRenderCompletionProc()

使用此函数签名作为您的回调，用于异步帧通知，传递给 `SetAsyncRenderCompletionProc`。

错误状态（错误或中止）在 `inGetFrameReturn` 中返回。

```cpp
void (*PrSDKSequenceAsyncRenderCompletionProc)(
 csSDK_uint32 inVideoRenderID,
 void* inCallbackRef,
 PrTime inTime,
 PPixHand inRenderedFrame,
 SequenceRender_GetFrameReturnRec *inGetFrameReturn);
```

| 成员 | 描述 |
|---|---|
| `inVideoRenderID` | 导出器之前传递给 `SetAsyncRenderCompletionProc` 的 `outVideoRenderID`。 |
| `inCallbackRef` | 导出器使用 `SetAsyncRenderCompletionProc()` 设置的指针。 |
| | 例如，这可以是指向导出器实例的指针。 |
| `inTime` | 请求的帧时间。 |
| `inRenderedFrame` | 渲染后的帧。导出器负责使用 [PPix Suite](../../universals/sweetpea-suites#ppix-suite) 中的 `Dispose()` 调用处理此 PPixHand。 |
| `inGetFrameReturn` | 一个结构，其中包含有关返回帧的信息，并且包括最初传递给 `QueueAsyncVideoFrameRender()` 的 `inAsyncCompletionData`。 |

### QueueAsyncVideoFrameRender()

使用此调用而不是 `RenderVideoFrame()` 来排队请求异步渲染特定帧。

渲染可以在单独的线程或处理器上进行。

当渲染完成时，将调用使用 `SetAsyncRenderCompletionProc` 设置的 `PrSDKSequenceAsyncRenderCompletionProc`。

```cpp
prSuiteError (*QueueAsyncVideoFrameRender)(
 csSDK_uint32 inVideoRenderID,
 PrTime inTime,
 csSDK_uint32* outRequestID,
 SequenceRender_ParamsRec* inRenderParams,
 PrRenderCacheType inCacheFlags,
 void* inAsyncCompletionData);
```

| 成员 | 描述 |
|---|---|
| `inVideoRenderID` | 传入从 `MakeVideoRenderer()` 返回的 `outVideoRenderID`。 |
| | 这为主机提供了视频渲染的上下文。 |
| `inTime` | 请求的帧时间。 |
| `outRequestID` | 传递回一个请求 ID，这…似乎没有用处。 |
| `inRenderParams` | 渲染的详细信息。 |
| `inCacheFlags` | 一个或多个缓存标志。 |
| `inAsyncCompletionData` | 此数据将传递给 `PrSDKSequenceAsyncRenderCompletionProc` 中的 `inGetFrameReturn.asyncCompletionData`。 |

### PrefetchMedia()

预取渲染此帧所需的媒体。这是对导入器的提示，开始读取渲染此视频帧所需的媒体。

```cpp
prSuiteError (*PrefetchMedia)(
 csSDK_uint32 inVideoRenderID,
 PrTime inFrame);
```

### PrefetchMediaWithRenderParameters()

使用渲染帧的所有参数预取渲染此帧所需的媒体。

这是对导入器的提示，开始读取渲染此视频帧所需的媒体。

```cpp
prSuiteError (*PrefetchMediaWithRenderParameters)(
 csSDK_uint32 inVideoRenderID,
 PrTime inTime,
 SequenceRender_ParamsRec* inRenderParams);
```

### CancelAllOutstandingMediaPrefetches()

取消所有仍在进行中的媒体预取。

```cpp
prSuiteError (*PrefetchMedia)(
 csSDK_uint32 inVideoRenderID);
```

### IsPrefetchedMediaReady()

检查预取请求的状态。

```cpp
prSuiteError (*IsPrefetchedMediaReady)(
 csSDK_uint32 inVideoRenderID,
 PrTime inTime,
 prBool* outMediaReady);
```

### MakeVideoRendererForTimeline()

类似于 MakeVideoRenderer，但用于渲染器插件。

创建一个视频渲染器，准备从主机获取渲染后的视频。

所涉及的 `TimelineID` 必须引用顶级序列。

```cpp
prSuiteError (*MakeVideoRendererForTimeline)(
 PrTimelineID inTimeline,
 csSDK_uint32* outVideoRendererID);
```

### MakeVideoRendererForTimelineWithFrameRate()

类似于 MakeVideoRendererForTimeline，带有额外的帧率参数。

这对于嵌套的多机位序列的情况很有用。

```cpp
prSuiteError (*MakeVideoRendererForTimelineWithFrameRate)(
 PrTimelineID inTimeline,
 PrTime inFrameRate,
 csSDK_uint32* outVideoRendererID);
```

### ReleaseVideoRendererForTimeline()

类似于 ReleaseVideoRenderer，但用于渲染器插件。当渲染器插件完成视频请求时，释放视频渲染器。

```cpp
prSuiteError (*ReleaseVideoRendererForTimeline)(
 csSDK_uint32 inVideoRendererID);
```

### **RenderVideoFrameAndConformToPixelFormat()**

CS5.5 新增。类似于 `RenderVideoFrame`，但会将生成的帧转换为特定的像素格式。

允许导出器请求特定像素格式的帧。

```cpp
prSuiteError (*RenderVideoFrameAndConformToPixelFormat)(
 csSDK_uint32 inVideoRenderID,
 PrTime inTime,
 SequenceRender_ParamsRec* inRenderParams,
 PrRenderCacheType inCacheFlags,
 PrPixelFormat inConformToFormat,
 SequenceRender_GetFrameReturnRec* getFrameReturn);
```

### **MakeVideoRendererForTimelineWithStreamLabel()**

CS6 新增。类似于 `MakeVideoRenderer`，但支持流标签。

允许导出器从多个视频流请求渲染帧。

```cpp
prSuiteError (*MakeVideoRendererForTimelineWithStreamLabel)(
 PrTimelineID inTimeline,
 PrSDKStreamLabel inStreamLabel,
 csSDK_uint32* outVideoRendererID);
```

### **RenderColorManagedVideoFrame()**

使用指定的色彩管理渲染视频帧。

```cpp
prSuiteError (*RenderColorManagedVideoFrame)(
 csSDK_uint32 inVideoRenderID,
 PrTime inTime,
 SequenceRender_ParamsRecExt* inRenderParamsExt,
 PrRenderCacheType inCacheFlags,
 SequenceRender_GetFrameReturnRec* getFrameReturn);
```

### **QueueAsyncColorManagedVideoFrameRender()**

使用指定的色彩管理，排队渲染视频帧。

```cpp
prSuiteError (*QueueAsyncColorManagedVideoFrameRender)(
 csSDK_uint32 inVideoRenderID,
 PrTime inTime,
 csSDK_uint32* outRequestID,
 SequenceRender_ParamsRecExt* inRenderParamsExt,
 PrRenderCacheType inCacheFlags,
 void* inAsyncCompletionData);
```

### **PrefetchColorManagedMedia()**

预取色彩管理的媒体帧。

```cpp
prSuiteError (*PrefetchColorManagedMedia)(
 csSDK_uint32 inVideoRenderID,
 PrTime inFrame,
 PrSDKColorSpaceID inPrSDKColorSpaceID);
```

### **PrefetchColorManagedMediaWithRenderParameters()**

使用指定的渲染参数，预取色彩管理的媒体帧。

```cpp
prSuiteError (*PrefetchColorManagedMediaWithRenderParameters)(
 csSDK_uint32 inVideoRenderID,
 PrTime inTime,
 SequenceRender_ParamsRecExt* inRenderParamsExt);
```

### **RenderColorManagedVideoFrameAndConformToPixelFormat()**

将色彩管理的媒体帧渲染为指定的像素格式。

```cpp
prSuiteError (*RenderColorManagedVideoFrameAndConformToPixelFormat)(
 csSDK_uint32 inVideoRenderID,
 PrTime inTime,
 SequenceRender_ParamsRecExt* inRenderParamsExt,
 PrRenderCacheType inCacheFlags,
 PrPixelFormat inConformToFormat,
 SequenceRender_GetFrameReturnRec* getFrameReturn);
```

### **RenderColorManagedVideoFrame2()**

使用 `SequenceRender_ParamsRecExt2` 中指定的设置，将色彩管理的媒体帧渲染为指定的像素格式。

```cpp
prSuiteError (*RenderColorManagedVideoFrame2)(
 csSDK_uint32 inVideoRenderID,
 PrTime inTime,
 SequenceRender_ParamsRecExt2* inRenderParamsExt2,
 PrRenderCacheType inCacheFlags,
 SequenceRender_GetFrameReturnRec* outGetFrameReturn);
```

### **QueueAsyncColorManagedVideoFrameRender2()**

使用 `SequenceRender_ParamsRecExt2` 中指定的设置，排队请求色彩管理的媒体帧渲染为指定的像素格式。

```cpp
prSuiteError (*QueueAsyncColorManagedVideoFrameRender2)(
 csSDK_uint32 inVideoRenderID,
 PrTime inTime,
 csSDK_uint32* outRequestID,
 SequenceRender_ParamsRecExt2* inRenderParamsExt2,
 PrRenderCacheType inCacheFlags,
 void* inAsyncCompletionData);
```

### **PrefetchColorManagedMediaWithRenderParameters2()**

使用 `SequenceRender_ParamsRecExt2` 中指定的设置，预取色彩管理的媒体帧。

```cpp
prSuiteError(*PrefetchColorManagedMediaWithRenderParameters2)(
 csSDK_uint32 inVideoRenderID,
 PrTime inTime,
 SequenceRender_ParamsRecExt2* inRenderParamsExt2);
```

### **RenderColorManagedVideoFrameAndConformToPixelFormat2()**

使用 `SequenceRender_ParamsRecExt2` 中指定的设置，将色彩管理的媒体帧渲染为指定的像素格式。

```cpp
prSuiteError (*RenderColorManagedVideoFrameAndConformToPixelFormat2)(
 csSDK_uint32 inVideoRenderID,
 PrTime inTime,
 SequenceRender_ParamsRecExt2* inRenderParamsExt2,
 PrRenderCacheType inCacheFlags,
 PrPixelFormat inConformToFormat,
 SequenceRender_GetFrameReturnRec* outGetFrameReturn);
```

---

## **PF Utility Suite**

用于在 Premiere Pro 中运行的 AE 风格插件的实用函数。

版本 11，15.0 新增，添加了 `GetVideoResolutionString`。

### **GetFilterInstanceID()**

获取当前效果引用的过滤器 ID。

```cpp
prSuiteError(*GetFilterInstanceID)(
 PF_ProgPtr effect_ref,
 A_long* outFilterInstanceID);
```

### **GetMediaTimecode()**

检索格式化时间码以及当前活动的视频帧。

```cpp
prSuiteError(*GetMediaTimecode)(
 PF_ProgPtr effect_ref,
 A_long* outCurrentFrame,
 PF_TimeDisplay* outTimeDisplay);
```

### **GetClipSpeed()**

检索剪辑的速度倍数。

```cpp
prSuiteError(*GetClipSpeed)(
 PF_ProgPtr effect_ref,
 double* speed);
```

### **GetClipDuration()**

检索剪辑的持续时间。

```cpp
prSuiteError(*GetClipDuration)(
 PF_ProgPtr effect_ref,
 A_long* frameDuration);
```

### **GetClipStart()**

检索剪辑的开始时间。

```cpp
prSuiteError(*GetClipStart)(
 PF_ProgPtr effect_ref,
 A_long* frameDuration);
```

### **GetUnscaledClipDuration()**

检索剪辑的持续时间，不受速度或重新定时变化的影响。

```cpp
prSuiteError(*GetUnscaledClipDuration)(
 PF_ProgPtr effect_ref,
 A_long* frameDuration);
```

### **GetUnscaledClipStart()**

检索剪辑的开始时间，不受速度或重新定时变化的影响。

```cpp
prSuiteError(*GetUnscaledClipStart)(
 PF_ProgPtr effect_ref,
 A_long* frameDuration);
```

### **GetTrackItemStart()**

获取轨道项的开始时间。

```cpp
prSuiteError(*GetTrackItemStart)(
 PF_ProgPtr effect_ref,
 A_long* frameDuration);
```

### **GetMediaFieldType()**

检索与媒体一起使用的字段类型。

```cpp
prSuiteError(*GetMediaFieldType)(
 PF_ProgPtr effect_ref,
 prFieldType* outFieldType); // prFieldsNone, prFieldsUpperFirst, prFieldsLowerFirst, prFieldsUnknown
```

### **GetMediaFrameRate()**

获取媒体的每帧的 ticks 数。

```cpp
prSuiteError(*GetMediaFrameRate)(
 PF_ProgPtr effect_ref,
 PrTime* outTicksPerFrame);
```

### **GetContainingTimelineID()**

获取包含应用效果的剪辑的时间线 ID。

```cpp
prSuiteError(*GetContainingTimelineID)(
 PF_ProgPtr effect_ref,
 PrTimelineID* outTimelineID);
```

### **GetClipName()**

获取应用效果的剪辑的名称（或主剪辑的名称）。

```cpp
prSuiteError(*GetClipName)(
 PF_ProgPtr effect_ref,
 A_Boolean inGetMasterClipName,
 PrSDKString* outSDKString);
```

### **EffectWantsCheckedOutFramesToMatchRenderPixelFormat()**

指示效果希望接收与目标渲染格式相同的签出帧。

```cpp
prSuiteError(*EffectWantsCheckedOutFramesToMatchRenderPixelFormat)(
 PF_ProgPtr effect_ref);
```

### **EffectDependsOnClipName()**

指示（基于第二个参数）效果是否依赖于应用它的剪辑的名称。

```cpp
prSuiteError(*EffectDependsOnClipName)(
 PF_ProgPtr effect_ref,
 A_Boolean inDependsOnClipName);
```

### **SetEffectInstanceName()**

```cpp
prSuiteError(*SetEffectInstanceName)(
 PF_ProgPtr effect_ref,
 const PrSDKString* inSDKString);
```

### **GetFileName()**

检索应用效果实例的媒体文件的名称。

```cpp
prSuiteError(*GetFileName)(
 PF_ProgPtr effect_ref,
 PrSDKString* outSDKString);
```

### **GetOriginalClipFrameRate()**

检索应用效果实例的媒体的原始（未解释、未重新定时）帧率。

```cpp
prSuiteError(*GetOriginalClipFrameRate)(
 PF_ProgPtr effect_ref,
 PrTime* outTicksPerFrame);
```

### **GetSourceTrackMediaTimecode()**

检索指定层中指定帧的源媒体时间码，可选择应用变换和开始时间偏移。

```cpp
prSuiteError(*GetSourceTrackMediaTimecode)(
 PF_ProgPtr effect_ref,
 csSDK_uint32 inLayerParamIndex,
 bool inApplyTransform,
 bool inAddStartTimeOffset,
 A_long* outCurrentFrame);
```

### **GetSourceTrackClipName()**

检索效果实例使用的层的名称。

```cpp
prSuiteError(*GetSourceTrackClipName)(
 PF_ProgPtr effect_ref,
 csSDK_uint32 inLayerParamIndex,
 A_Boolean inGetMasterClipName,
 PrSDKString* outSDKString);
```

### **GetSourceTrackFileName()**

检索指定层参数的源轨道项的文件名。

```cpp
prSuiteError(*GetSourceTrackFileName)(
 PF_ProgPtr effect_ref,
 csSDK_uint32 inLayerParamIndex,
 PrSDKString* outSDKString);
```

### **EffectDependsOnClipName2()**

指定效果实例是否依赖于指定的层参数。

```cpp
prSuiteError(*EffectDependsOnClipName2)(
 PF_ProgPtr effect_ref,
 A_Boolean inDependsOnClipName,
 csSDK_uint32 inLayerParamIndex);
```

### **GetMediaTimecode2()**

检索格式化时间码和当前帧号，可选择应用修剪。

```cpp
prSuiteError(*GetMediaTimecode2)(
 PF_ProgPtr effect_ref,
 bool inApplyTrim,
 A_long* outCurrentFrame,
 PF_TimeDisplay* outTimeDisplay);
```

### **GetSourceTrackMediaTimecode2()**

给定特定的序列时间，检索指定层参数的源轨道媒体时间码。

```cpp
prSuiteError(*GetSourceTrackMediaTimecode2)(
 PF_ProgPtr effect_ref,
 csSDK_uint32 inLayerParamIndex,
 bool inApplyTransform,
 bool inAddStartTimeOffset,
 PrTime inSequenceTime,
 A_long* outCurrentFrame);
```

### **GetSourceTrackClipName2()**

检索特定层参数使用的剪辑名称。

```cpp
prSuiteError(*GetSourceTrackClipName2)(
 PF_ProgPtr effect_ref,
 csSDK_uint32 inLayerParamIndex,
 A_Boolean inGetMasterClipName,
 PrSDKString* outSDKString,
 PrTime inSequenceTime);
```

### **GetSourceTrackFileName2()**

检索指定层参数使用的剪辑名称。

```cpp
prSuiteError(*GetSourceTrackFileName2)(
 PF_ProgPtr effect_ref,
 csSDK_uint32 inLayerParamIndex,
 PrSDKString* outSDKString,
 PrTime inSequenceTime);
```

### **GetCommentString()**

检索与指定源轨道项关联的注释字符串，在指定时间。

```cpp
prSuiteError(*GetCommentString)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 PrSDKString* outSDKString);
```

### **GetLogNoteString()**

检索与源轨道关联的日志注释，在指定时间。

```cpp
prSuiteError(*GetLogNoteString)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 PrSDKString* outSDKString);
```

### **GetCameraRollString()**

检索与源轨道关联的日志注释，在指定时间。

```cpp
prSuiteError(*GetCameraRollString)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 PrSDKString* outSDKString);
```

### **GetClientMetadataString()**

检索与源轨道关联的元数据字符串，在指定时间。

```cpp
prSuiteError(*GetClientMetadataString)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 PrSDKString* outSDKString);
```

### **GetDailyRollString()**

检索与源轨道关联的每日卷字符串，在指定时间。

```cpp
prSuiteError(*GetDailyRollString)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 PrSDKString* outSDKString);
```

### **GetDescriptionString()**

检索与源轨道关联的每日卷字符串，在指定时间。

```cpp
prSuiteError(*GetDescriptionString)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 PrSDKString* outSDKString);
```

### **GetLabRollString()**

检索与源轨道关联的实验室卷字符串，在指定时间。

```cpp
prSuiteError(*GetLabRollString)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 PrSDKString* outSDKString);
```

### **GetSceneString()**

检索与源轨道关联的场景字符串，在指定时间。

```cpp
prSuiteError(*GetSceneString)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 PrSDKString* outSDKString);
```

### **GetShotString()**

检索与源轨道项关联的镜头字符串，在指定时间。

```cpp
prSuiteError(*GetShotString)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 PrSDKString* outSDKString);
```

### **GetTapeNameString()**

检索与源轨道项关联的磁带名称字符串，在指定时间。

```cpp
prSuiteError(*GetTapeNameString)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 PrSDKString* outSDKString);
```

### **GetVideoCodecString()**

检索表示与源轨道项关联的视频编解码器的字符串，在指定时间。

```cpp
prSuiteError(*GetVideoCodecString)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 PrSDKString* outSDKString);
```

### **GetGoodMetadataString()**

检索表示源轨道项“良好”状态的字符串，在指定时间。

```cpp
prSuiteError(*GetGoodMetadataString)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 PrSDKString* outSDKString);
```

### **GetSoundRollString()**

检索表示源轨道项“声音卷”状态的字符串，在指定时间。

```cpp
prSuiteError(*GetSoundRollString)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 PrSDKString* outSDKString);
```

### **GetSequenceTime()**

检索应用效果的序列的时间基准。

```cpp
prSuiteError(*GetSequenceTime)(
 PF_ProgPtr inEffectRef,
 PrTime* outSequenceTime);
```

### **GetSoundTimecode()**

检索指定源时间的帧。

```cpp
prSuiteError(*GetSoundTimecode)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 A_long* outCurrentFrame);
```

### **GetOriginalClipFrameRateForSourceTrack()**

检索指定源轨道的原始“每帧 ticks 数”。

```cpp
prSuiteError(*GetOriginalClipFrameRateForSourceTrack)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime* outTicksPerFrame);
```

### **GetMediaFrameRateForSourceTrack()**

检索指定源轨道的媒体帧率。

```cpp
prSuiteError(*GetMediaFrameRateForSourceTrack)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 PrTime* outTicksPerFrame);
```

### **GetSourceTrackMediaActualStartTime()**

检索指定层参数的实际开始时间。

```cpp
prSuiteError(*GetSourceTrackMediaActualStartTime)(
 PF_ProgPtr inEffectRef,
 csSDK_uint32 inLayerParamIndex,
 PrTime inSequenceTime,
 PrTime* outClipActualStartTime);
```

### IsSourceTrackMediaTrimmed()

检索源轨道项是否已被修剪。

```cpp
prSuiteError(*IsSourceTrackMediaTrimmed)(
 PF_ProgPtr inEffectRef,
 csSDK_uint32 inLayerParamIndex,
 PrTime inSequenceTime,
 bool* outTrimApplied);
```

### IsMediaTrimmed()

检索轨道项是否已被修剪。

```cpp
prSuiteError(*IsMediaTrimmed)(
 PF_ProgPtr inEffectRef,
 PrTime inSequenceTime,
 bool* outTrimApplied);
```

### IsTrackEmpty()

检索指定图层参数的轨道是否为空。

```cpp
prSuiteError(*IsTrackEmpty)(
 PF_ProgPtr inEffectRef,
 csSDK_uint32 inLayerParamIndex,
 PrTime inSequenceTime,
 bool* outIsTrackEmpty);
```

### IsTrackItemEffectAppliedToSynthetic()

检索效果是否应用于由合成导入器支持的轨道项。

```cpp
prSuiteError(*IsTrackItemEffectAppliedToSynthetic)(
 PF_ProgPtr inEffectRef,
 bool* outIsTrackItemEffectAppliedToSynthetic);
```

### GetSourceTrackCurrentMediaTimeInfo()

检索当前媒体时间，包括每帧的刻度数和表示该时间的格式化字符串。

```cpp
prSuiteError(*GetSourceTrackCurrentMediaTimeInfo)(
 PF_ProgPtr effect_ref,
 csSDK_uint32 inLayerParamIndex,
 bool inUseSoundTimecodeAsStartTime,
 PrTime inSequenceTime,
 PrTime* outCurrentMediaTime,
 PrTime* outMediaTicksPerFrame,
 PF_TimeDisplay* outMediaTimeDisplay);
```

### GetSequenceZeroPoint()

检索应用效果的序列的零点（开始时间）。

```cpp
prSuiteError(*GetSequenceZeroPoint)(
 PF_ProgPtr inEffectRef,
 PrTime* outZeroPointTime);
```

### GetSourceTrackCurrentClipDuration()

检索指定图层索引处、在 `inSequenceTime` 时间点的剪辑时长。

```cpp
prSuiteError(*GetSourceTrackCurrentClipDuration)(
 PF_ProgPtr inEffectRef,
 csSDK_uint32 inLayerParamIndex,
 PrTime inSequenceTime,
 PrTime* outClipDuration);
```

### GetSequenceDuration()

检索应用效果的序列的时长。

```cpp
prSuiteError(*GetSequenceDuration)(
 PF_ProgPtr inEffectRef,
 PrTime* outSequenceDuration);

 /*
 ** 获取视频分辨率字符串，格式为 '宽度 x 高度'，
 ** 表示在 `inSequenceTime` 时间点的 `inSourceTrack` 上的剪辑（即轨道项）的分辨率。
 ** 将 `inSourceTrack` 设置为 -1 以查询在 `inSequenceTime` 时间点的最顶层剪辑
 ** （仅当效果应用于调整图层时）
 */
```

### GetVideoResolutionString()

检索表示应用效果的轨道项尺寸的字符串。

```cpp
prSuiteError(*GetVideoResolutionString)(
 PF_ProgPtr inEffectRef,
 int32_t inSourceTrack,
 PrTime inSequenceTime,
 PrSDKString* outSDKString);
```
