---
title: 结构描述
---
# 结构描述

## exDoExportRec

选择器: [exSelExport](../selector-descriptions#exselexport)

提供通用的导出设置。导出器应从 [Export Param Suite](../suites#export-param-suite) 中检索参数设置。

```cpp
typedef struct {
 csSDK_uint32 exporterPluginID;
 void* privateData;
 csSDK_uint32 fileType;
 csSDK_int32 exportAudio;
 csSDK_int32 exportVideo;
 PrTime startTime;
 PrTime endTime;
 csSDK_uint32 fileObject;
 PrTimelineID timelineData;
 csSDK_int32 reserveMetaDataSpace;
 csSDK_int32 maximumRenderQuality;
 csSDK_int32 embedCaptions
} exDoExportRec;
```

| 成员 | 描述 |
|---|---|
| `exporterPluginID` | 主机的内部标识符，用于此导出器，用于各种套件调用，例如在 [Sequence Render Suite](../suites#sequence-render-suite) 和 [Sequence Audio Suite](../suites#sequence-audio-suite) 中。 |
| `privateData` | 由导出器分配和管理的数据。 |
| `fileType` | 导出器在 [exSelStartup](../selector-descriptions#exselstartup) 期间设置的文件格式四字符代码。 |
| | 指示导出器应写入的格式，因为导出器可以支持多种格式。 |
| `exportAudio` | 如果非零，则导出音频。 |
| `exportVideo` | 如果非零，则导出视频。 |
| `startTime` | 要导出的序列的开始时间。 |
| `endTime` | 要导出的序列的结束时间。如果 startTime 为 0，则也是要导出的总持续时间。 |
| | 指定的范围是 `[startTime, endTime)`，意味着 `endTime` 实际上不包含在范围内。 |
| `fileObject` | 用于 [Export File Suite](../suites#export-file-suite)，以获取和操作用户指定的文件。 |
| `timelineData` | 用于时间轴函数的句柄。 |
| `reserveMetaDataSpace`| 在文件中保留用于元数据存储的空间量。 |
| `maximumRenderQuality`| 如果非零，导出器应将 `SequenceRender_ParamsRec.inRenderQuality` 和 `inDeinterlaceQuality` 设置为 `kPrRenderQuality_Max`。 |
| `embedCaptions` | 新增于 CC。如果非零，导出器应嵌入从 [Captioning Suite](../../universals/sweetpea-suites#captioning-suite) 获取的字幕。 |
| `colorProfile` | 在文件中保留用于元数据存储的空间量。 |
| `exportColorSpaceID` | 在文件中保留用于元数据存储的空间量。 |
| `maximumFileSize` | 在文件中保留用于元数据存储的空间量。 |

---

## exDoExportRec2

选择器: [exSelExport](../selector-descriptions#exselexport)

提供通用的导出设置。导出器应从 [Export Param Suite](../suites#export-param-suite) 中检索参数设置。

```cpp
typedef struct {
 csSDK_uint32 exporterPluginID;
 void* privateData;
 csSDK_uint32 fileType;
 csSDK_int32 exportAudio;
 csSDK_int32 exportVideo;
 PrTime startTime;
 PrTime endTime;
 csSDK_uint32 fileObject;
 PrTimelineID timelineData;
 csSDK_int32 reserveMetaDataSpace;
 csSDK_int32 maximumRenderQuality;
 csSDK_int32 embedCaptions;
 ColorProfileRec colorProfile; // 如果颜色配置文件有效，导出器应根据格式标准将其嵌入输出；适用于将 canEmbedColorProfile 设置为 True 的格式
 PrSDKColorSpaceID exportColorSpaceID; // 不透明的颜色空间 ID，导出器在使用颜色管理 API 时应将其传递给主机
 csSDK_int32 maximumFileSize; // 如果非零，尝试导出不超出此大小的文件，并可能为此调整目标比特率。
 PrSDKLUTID exportLUTID;
} exDoExportRec2;
```

| 成员 | 描述 |
|---|---|
| `exporterPluginID` | 主机的内部标识符，用于此导出器，用于各种套件调用，例如在 [Sequence Render Suite](../suites#sequence-render-suite) 和 [Sequence Audio Suite](../suites#sequence-audio-suite) 中。 |
| `privateData` | 由导出器分配和管理的数据。 |
| `fileType` | 导出器在 [exSelStartup](../selector-descriptions#exselstartup) 期间设置的文件格式四字符代码。 |
| | 指示导出器应写入的格式，因为导出器可以支持多种格式。 |
| `exportAudio` | 如果非零，则导出音频。 |
| `exportVideo` | 如果非零，则导出视频。 |
| `startTime` | 要导出的序列的开始时间。 |
| `endTime` | 要导出的序列的结束时间。如果 startTime 为 0，则也是要导出的总持续时间。 |
| | 指定的范围是 `[startTime, endTime)`，意味着 `endTime` 实际上不包含在范围内。 |
| `fileObject` | 用于 [Export File Suite](../suites#export-file-suite)，以获取和操作用户指定的文件。 |
| `timelineData` | 用于时间轴函数的句柄。 |
| `reserveMetaDataSpace`| 在文件中保留用于元数据存储的空间量。 |
| `maximumRenderQuality`| 如果非零，导出器应将 `SequenceRender_ParamsRec.inRenderQuality` 和 `inDeinterlaceQuality` 设置为 `kPrRenderQuality_Max`。 |
| `embedCaptions` | 新增于 CC。如果非零，导出器应嵌入从 [Captioning Suite](../../universals/sweetpea-suites#captioning-suite) 获取的字幕。 |
| `colorProfile` | 新增于 13.1。颜色配置文件，根据格式标准嵌入输出。适用于将 `canEmbedColorProfile` 设置为 true 的格式。 |
| `exportColorSpaceID` | 新增于 13.1。要使用的颜色空间的 ID。不能为 `kPrSDKColorSpaceID_Invalid`。 |
| `maximumFileSize` | 新增于 15.x。如果非零，导出器应将其视为文件大小的上限，并根据需要重新压缩以满足该目标。 |
| `exportLUTID` | 新增于 14.x。用于导出的 LUT。 |

---

## exExporterInfoRec

选择器: [exSelStartup](../selector-descriptions#exselstartup) 和 [exSelShutdown](../selector-descriptions#exselshutdown)（从 CS6 开始）

通过在 [exSelStartup](../selector-descriptions#exselstartup) 期间填写此结构来描述导出器的功能。

对于每种文件类型，填充 exExporterInfoRec 并返回 `exportReturnIterateExporter`。

然后会重新发送 [exSelStartup](../selector-descriptions#exselstartup)。重复此过程，直到没有更多文件格式需要描述，然后返回 `exportReturn_IterateExporterDone`。

fileType 指示导出器在后续调用中应处理的格式。

```cpp
typedef struct {
 csSDK_uint32 unused;
 csSDK_uint32 fileType;
 prUTF16Char fileTypeName[256];
 prUTF16Char fileTypeDefaultExtension[256];
 csSDK_uint32 classID;
 csSDK_int32 exportReqIndex;
 csSDK_int32 wantsNoProgressBar;
 csSDK_int32 hideInUI;
 csSDK_int32 doesNotSupportAudioOnly;
 csSDK_int32 canExportVideo;
 csSDK_int32 canExportAudio;
 csSDK_int32 singleFrameOnly;
 csSDK_int32 maxAudiences;
 csSDK_int32 interfaceVersion;
 csSDK_uint32 isCacheable;
 csSDK_uint32 canConformToMatchParams;
 csSDK_uint32 canEmbedCaptions;
} exExporterInfoRec;
```

| 成员 | 描述 |
|---|---|
| `fileType` | 文件格式四字符代码（例如 'AVIV' = Video for Windows，'MooV' = QuickTime）。 |
| `fileTypeName` | 文件类型的本地化显示名称。 |
| `fileTypeDefaultExtension`| 文件类型的默认扩展名。导出器可以通过实现 `exSelQueryExportFileExtension` 来支持每个文件类型的多个扩展名。 |
| `classID` | 模块的类标识符，用于区分支持相同文件类型的导出器，并在不同的媒体抽象层插件之间创建关联。 |
| `exportReqIndex` | 如果导出器支持多种文件类型，则每次调用时此索引将由主机递增，因为导出器被要求描述其每种文件类型的功能。 |
| | 初始为零，每次导出器返回 `exportReturn_IterateExporter` 时由主机递增。 |
| `wantsNoProgressBar` | 如果非零，默认的导出器进度对话框将被关闭，允许导出器显示自己的进度对话框。 |
| | 导出器在回调期间也不会从主机获取 `exportReturn_Abort` 错误 - 它必须自行检测中止，并在用户中止导出时从 `exSelExport` 返回 `exportReturn_Abort`。 |
| `hideInUI` | 如果此文件类型仅用于制作预览文件，并且不应作为通用导出选择可见，则将其设置为非零。 |
| `doesNotSupportAudioOnly`| 如果文件类型不支持仅音频导出，则将其设置为非零。 |
| `canExportVideo` | 如果导出器可以输出视频，则将其设置为非零。 |
| `canExportAudio` | 如果导出器可以输出音频，则将其设置为非零。 |
| `singleFrameOnly` | 如果导出器生成单帧（用于静态图像导出器），则将其设置为非零。 |
| `maxAudiences` | |
| `interfaceVersion` | 插件支持的导出器 API 版本。 |
| `isCacheable` | 新增于 CS5。将其设置为非零以使 Premiere Pro 缓存此导出器。 |
| `canConformToMatchParams`| 新增于 CC。如果导出器希望支持“匹配源”按钮，则将其设置为非零。 |
| `canEmbedCaptions` | 新增于 CC。如果导出器可以直接在文件中嵌入隐藏字幕，则将其设置为非零。 |
| `flags` | 新增于 13.0。将是以下标志的某种组合： |
| | - `kExInfoRecFlag_None` |
| | - `kExInfoRecFlag_VideoOnlyExportNotSupported` - 仅导出视频和音频 |
| | - `kExInfoRecFlag_PostEncodePublishNotSupported` - 导出结果是复杂的文件夹结构或其他不适合启用上传选项的结构 |
| `canEmbedColorProfile` | 新增于 11.1。如果导出器可以将颜色配置文件嵌入到生成的媒体文件中，则将其设置为非零 |
| `supportsColorManagement`| 新增于 13.0。如果导出器支持颜色管理，则将其设置为非零。 |

---

## exExporterInstanceRec

选择器: [exSelBeginInstance](../selector-descriptions#exselbegininstance) 和 [exSelEndInstance](../selector-descriptions#exselendinstance)

提供对指定文件类型的 privateData 的访问，以便导出器可以分配 privateData 并将其传递给主机，或释放它。

```cpp
typedef struct {
 csSDK_uint32 exporterPluginID;
 csSDK_uint32 fileType;
 void* privateData;
} exExporterInstanceRec;
```

| 成员 | 描述 |
|---|---|
| `exporterPluginID`| 主机的内部标识符，用于此导出器。请勿修改。 |
| `fileType` | 导出器在 [exSelStartup](../selector-descriptions#exselstartup) 期间设置的文件格式四字符代码。 |
| `privateData` | 由导出器分配和管理的数据。 |

---

## exGenerateDefaultParamRec

选择器: [exSelGenerateDefaultParams](../selector-descriptions#exselgeneratedefaultparams)

提供对指定文件类型的 privateData 的访问，以便导出器可以生成默认参数集。

```cpp
typedef struct {
 csSDK_uint32 exporterPluginID;
 void* privateData;
 csSDK_uint32 fileType;
} exExporterInstanceRec;
```

| 成员 | 描述 |
|---|---|
| `exporterPluginID`| 主机的内部标识符，用于此导出器。请勿修改。 |
| `privateData` | 由导出器分配和管理的数据。 |
| `fileType` | 导出器在 [exSelStartup](../selector-descriptions#exselstartup) 期间设置的文件格式四字符代码。 |

---

## exParamButtonRec

选择器: [exSelParamButton](../selector-descriptions#exselparambutton)

提供对指定文件类型的 privateData 的访问，并披露用户点击的特定按钮，因为可以有多个按钮参数。

```cpp
typedef struct {
 csSDK_uint32 exporterPluginID;
 void* privateData;
 csSDK_uint32 fileType;
 csSDK_int32 exportAudio;
 csSDK_int32 exportVideo;
 csSDK_int32 multiGroupIndex;
 exParamIdentifier buttonParamIdentifier;
} exParamButtonRec;
```

| 成员 | 描述 |
|---|---|
| `exporterPluginID` | 主机的内部标识符，用于此导出器。请勿修改。 |
| `privateData` | 由导出器分配和管理的数据。 |
| `fileType` | 导出器在 [exSelStartup](../selector-descriptions#exselstartup) 期间设置的文件格式四字符代码。 |
| `exportAudio` | 如果非零，则当前设置设置为导出音频。 |
| `exportVideo` | 如果非零，则当前设置设置为导出视频。 |
| `multiGroupIndex` | 披露包含用户点击的按钮的多组索引。 |
| `buttonParamIdentifier`| 披露用户点击的按钮的参数 ID。 |

---

## exParamChangedRec

选择器: [exSelValidateParamChanged](../selector-descriptions#exselvalidateparamchanged)

提供对指定文件类型的 `privateData` 的访问，并披露用户更改的特定参数。

要通知主机插件正在更改其他参数，请将 `rebuildAllParams` 设置为非零值。

```cpp
typedef struct {
 csSDK_uint32 exporterPluginID;
 void* privateData;
 csSDK_uint32 fileType;
 csSDK_int32 exportAudio;
 csSDK_int32 exportVideo;
 csSDK_int32 multiGroupIndex;
 exParamIdentifier changedParamIdentifier;
 csSDK_int32 rebuildAllParams;
} exParamChangedRec;
```

| 成员 | 描述 |
|---|---|
| `exporterPluginID` | 主机为此导出器分配的内部标识符。请勿修改。 |
| `privateData` | 由导出器分配和管理的数据。 |
| `fileType` | 导出器在 [exSelStartup](../selector-descriptions#exselstartup) 期间设置的文件格式四字符代码。 |
| `exportAudio` | 如果为非零值，则当前设置将导出音频。 |
| `exportVideo` | 如果为非零值，则当前设置将导出视频。 |
| `multiGroupIndex` | 披露包含用户更改参数的多组索引。 |
| `changedParamIdentifier` | 披露用户更改的参数ID。 |
| | 如果更改的项目是 `exportAudio`、`exportVideo` 或当前 `multiGroupIndex`，则可能为空。 |
| `rebuildAllParams` | 将此设置为非零值以告诉主机使用最新提供的信息刷新所有参数。 |
| | 这可以解决动态更新参数可见性、有效范围等问题。 |

---

## exParamSummaryRec

选择器: [exSelGetParamSummary](../selector-descriptions#exselgetparamsummary)

提供对指定文件类型的 `privateData` 的访问，并为导出器提供缓冲区以填充参数的本地化摘要。

```cpp
typedef struct {
 csSDK_uint32 exporterPluginID;
 void* privateData;
 csSDK_int32 exportAudio;
 csSDK_int32 exportVideo;
 prUTF16Char videoSummary[256];
 prUTF16Char audioSummary[256];
 prUTF16Char bitrateSummary[256];
} exParamSummaryRec;
```

| 成员 | 描述 |
|---|---|
| `exporterPluginID` | 主机为此导出器分配的内部标识符。请勿修改。 |
| `privateData` | 由导出器分配和管理的数据。 |
| `exportAudio` | 如果为非零值，则当前设置将导出音频。 |
| `exportVideo` | 如果为非零值，则当前设置将导出视频。 |
| `videoSummary` | 使用参数的本地化摘要填充这些内容。 |
| `audioSummary` | |
| `bitrateSummary` | |

---

## exPostProcessParamsRec

选择器: [exSelPostProcessParams](../selector-descriptions#exselpostprocessparams)

提供对指定文件类型的 `privateData` 的访问。

```cpp
typedef struct {
 csSDK_uint32 exporterPluginID;
 void* privateData;
 csSDK_uint32 fileType;
 csSDK_int32 exportAudio;
 csSDK_int32 exportVideo;
 csSDK_int32 doConformToMatchParams;
} exPostProcessParamsRec;
```

| 成员 | 描述 |
|---|---|
| `exporterPluginID` | 主机为此导出器分配的内部标识符。请勿修改。 |
| `privateData` | 由导出器分配和管理的数据。 |
| `fileType` | 导出器在 [exSelStartup](../selector-descriptions#exselstartup) 期间设置的文件格式四字符代码。 |
| `exportAudio` | 如果为非零值，则当前设置将导出音频。 |
| `exportVideo` | 如果为非零值，则当前设置将导出视频。 |
| `doConformToMatchParams` | 新增于 CC。 |

---

## exQueryExportFileExtensionRec

选择器: [exSelQueryExportFileExtension](../selector-descriptions#exselqueryexportfileextension)

提供对指定文件类型的 `privateData` 的访问，并为导出器提供缓冲区以填充文件扩展名。

```cpp
typedef struct {
 csSDK_uint32 exporterPluginID;
 void* privateData;
 csSDK_uint32 fileType;
 prUTF16Char outFileExtension[256];
} exQueryExportFileExtensionRec;
```

| 成员 | 描述 |
|---|---|
| `exporterPluginID` | 主机为此导出器分配的内部标识符。请勿修改。 |
| `privateData` | 由导出器分配和管理的数据。 |
| `fileType` | 导出器在 [exSelStartup](../selector-descriptions#exselstartup) 期间设置的文件格式四字符代码。 |
| `outFileExtension` | 根据当前参数设置提供文件扩展名。 |

---

## exQueryOutputFileListRec

选择器: [exSelQueryOutputFileList](../selector-descriptions#exselqueryoutputfilelist)

提供对指定文件类型的 `privateData` 的访问，并为导出器提供指向 `exOutputFileRecs` 数组的指针以填充文件路径。

```cpp
typedef struct {
 csSDK_uint32 exporterPluginID;
 void* privateData;
 csSDK_uint32 fileType;
 csSDK_uint32 numOutputFiles;
 PrSDKString path;
 exOutputFileRec *outputFileRecs;
} exQueryOutputFileListRec;
```

| 成员 | 描述 |
|---|---|
| `exporterPluginID` | 主机为此导出器分配的内部标识符。请勿修改。 |
| `privateData` | 由导出器分配和管理的数据。 |
| `fileType` | 导出器在 [exSelStartup](../selector-descriptions#exselstartup) 期间设置的文件格式四字符代码。 |
| `numOutputFiles` | 在第一次调用 `exSelQueryOutputFileList` 时，提供文件路径的数量。 |
| `path` | 新增于 CS5。包含主机提供的主要目标路径。 |
| `outputFileRecs` | `exOutputFileRecs` 数组。 |
| | 在第二次调用 `exSelQueryOutputFileList` 时，每个路径的长度（包括尾随的空字符）。 |
| | 在第三次调用时，填充每个 `exOutputFileRec` 的路径。 |
| | <pre lang="cpp">typedef struct {<br/>  int      pathLength;<br/>  prUTF16Char*  path;<br/>} exOutputFileRec;</pre> |

---

## exQueryOutputSettingsRec

选择器: [exSelQueryOutputSettings](../selector-descriptions#exselqueryoutputsettings)

提供对指定文件类型的 `privateData` 的访问，并为导出器提供一组成员以填充当前导出设置。

```cpp
typedef struct {
 csSDK_uint32 exporterPluginID;
 void* privateData;
 csSDK_uint32 fileType;
 csSDK_int32 inMultiGroupIndex;
 csSDK_int32 inExportVideo;
 csSDK_int32 inExportAudio;
 csSDK_int32 outVideoWidth;
 csSDK_int32 outVideoHeight;
 PrTime outVideoFrameRate;
 csSDK_int32 outVideoAspectNum;
 csSDK_int32 outVideoAspectDen;
 csSDK_int32 outVideoFieldType;
 double outAudioSampleRate;
 PrAudioSampleType outAudioSampleType;
 PrAudioChannelType outAudioChannelType;
 csSDK_uint32 outBitratePerSecond;
 csSDK_int32 outUseMaximumRenderPrecision;
} exQueryOutputSettingsRec;
```

| 成员 | 描述 |
|---|---|
| `exporterPluginID` | 主机为此导出器分配的内部标识符。请勿修改。 |
| `privateData` | 由导出器分配和管理的数据。 |
| `fileType` | 导出器在 [exSelStartup](../selector-descriptions#exselstartup) 期间设置的文件格式四字符代码。 |
| `inMultiGroupIndex` | 返回具有此索引的多组的参数设置。 |
| `inExportVideo` | 如果为非零值，则当前设置将导出视频。 |
| `inExportAudio` | 如果为非零值，则当前设置将导出音频。 |
| `outVideoWidth` | 通过使用 [Export Param Suite](../suites#export-param-suite) 获取参数的当前值来返回每个参数设置。 |
| `outVideoHeight` | |
| | 某些设置（如 `outVideoFieldType`）可能是隐式的，例如如果格式仅支持逐行帧。 |
| `outUseMaximumRenderPrecision` | 新增于 CS6。如果为非零值，渲染将始终以最大位深度进行。 |

---

## exQueryStillSequenceRec

选择器: [exSelQueryStillSequence](../selector-descriptions#exselquerystillsequence)

提供对指定文件类型的 `privateData` 的访问，并为导出器提供一组成员以提供有关如何导出静态图像序列的信息。

```cpp
typedef struct {
 csSDK_uint32 exporterPluginID;
 void* privateData;
 csSDK_uint32 fileType;
 csSDK_int32 exportAsStillSequence;
 PrTime exportFrameRate;
} exQueryStillSequenceRec;
```

| 成员 | 描述 |
|---|---|
| `exporterPluginID` | 主机为此导出器分配的内部标识符。请勿修改。 |
| `privateData` | 由导出器分配和管理的数据。 |
| `fileType` | 导出器在 [exSelStartup](../selector-descriptions#exselstartup) 期间设置的文件格式四字符代码。 |
| `exportAsStillSequence` | 将此设置为非零值以告诉主机导出器可以将静态图像导出为序列。 |
| `exportFrameRate` | 将此设置为静态图像序列的帧率。 |

---

## exValidateOutputSettingsRec

选择器: [exSelValidateOutputSettings](../selector-descriptions#exselvalidateoutputsettings)

提供对指定文件类型的 `privateData` 的访问，以便导出器可以验证当前参数设置。

```cpp
typedef struct {
 csSDK_uint32 exporterPluginID;
 void* privateData;
 csSDK_uint32 fileType;
} exExporterInstanceRec;
```

| 成员 | 描述 |
|---|---|
| `exporterPluginID` | 主机为此导出器分配的内部标识符。请勿修改。 |
| `privateData` | 由导出器分配和管理的数据。 |
| `fileType` | 导出器在 [exSelStartup](../selector-descriptions#exselstartup) 期间设置的文件格式四字符代码。 |

---

## exQueryExportColorSpaceRec

选择器: [exSelQueryExportColorSpace](../selector-descriptions#exselqueryexportcolorspace)

提供对指定文件类型的 `privateData` 的访问，以便导出器可以验证当前参数设置。

```cpp
typedef struct
{
 csSDK_uint32 exporterPluginID;
 void* privateData;
 ColorSpaceRec outExportColorSpace;
} exQueryExportColorSpaceRec;
```

| 成员 | 描述 |
|---|---|
| `exporterPluginID` | 主机为此导出器分配的内部标识符。请勿修改。 |
| `privateData` | 由导出器分配和管理的数据。 |
| `outExportColorSpace` | 描述导出期间使用的色彩空间的结构。请查看 `ColorSpaceRec` 以获取详细信息。 |
