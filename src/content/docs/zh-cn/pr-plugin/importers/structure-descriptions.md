---
title: 结构描述
---
# 结构描述

## imAcceleratorRec

选择器: [imRetargetAccelerator](../selector-descriptions#imretargetaccelerator)

描述当项目管理器复制媒体及其加速器时创建的新媒体和新加速器的路径。

```cpp
typedef struct {
 const prUTF16Char *inOriginalPath;
 const prUTF16Char *inAcceleratorPath;
} imAcceleratorRec;
```

| 成员 | 描述 |
| --- | --- |
| `inOriginalPath` | 复制的媒体的Unicode路径和名称。 |
| `inAcceleratorPath` | 复制的加速器的Unicode路径和名称。 |

---

## imAnalysisRec

选择器: [imAnalysis](../selector-descriptions#imanalysis)

发送回分析数据是一个两步过程。首先，将buffersize设置为字符缓冲区的大小并返回imNoErr。

Premiere将立即再次发送`imAnalysis`；用文本填充缓冲区。之前存储的首选项和privateData在此结构中返回。

```cpp
typedef struct {
 void *privatedata;
 void *prefs;
 csSDK_int32 buffersize;
 char *buffer;
 csSDK_int32 *timecodeFormat;
} imAnalysisRec;
```

| 成员 | 描述 |
| --- | --- |
| `privatedata` | 来自`imGetInfo8`或`imGetPrefs8`的实例数据。 |
| `prefs` | 来自`imGetPrefs8`的剪辑源设置数据（设置对话框信息）。 |
| `buffersize` | 设置为所需大小并返回imNoErr给Premiere，Premiere将重新调整大小并使用`imGetPrefs8`选择器再次调用插件。 |
| `buffer` | 文本缓冲区。用行结束符（CR和LF）终止行。 |
| `timecodeFormat` | 主机发送的首选时间码格式。 |

---

## imAsyncImporterCreationRec

选择器: [imCreateAsyncImporter](../selector-descriptions#imcreateasyncimporter)

使用提供的数据创建异步导入器对象，并将其存储在此处。

```cpp
typedef struct {
 void *inPrivateData;
 void *inPrefs;
 AsyncImporterEntry outAsyncEntry;
 void *outAsyncPrivateData;
}
```

| 成员 | 描述 |
| --- | --- |
| `inPrivateData` | 来自`imGetInfo8`或`imGetPrefs8`的实例数据。 |
| `inPrefs` | 来自`imGetPrefs8`的剪辑源设置（设置对话框信息）。 |
| `outAsyncEntry` | 提供异步选择器的入口函数，这些选择器将发送到异步导入器对象。 |
| `outAsyncPrivateData` | 异步导入器对象的`PrivateData`。 |

---

## imAudioInfoRec7

选择器: [imGetInfo8](../selector-descriptions#imgetinfo8) ([imFileInfoRec8](#imfileinforec8)的成员)

文件的音频数据属性（或如果您生成的是合成数据，则为将生成的数据的属性）。

```cpp
typedef struct {
 csSDK_int32 numChannels;
 float sampleRate;
 PrAudioSampleType sampleType;
}
```

| 成员 | 描述 |
|---|---|
| `numChannels` | 音频流中的音频通道数。 |
| | 可以是1、2或6。 |
| `sampleRate` | 以赫兹为单位。 |
| `sampleType` | 这仅用于信息目的，以披露磁盘上音频的格式，在导入器将其转换为32位浮点、非交错格式之前。 |
| | 音频样本类型列在[Universals](../../universals/universals)中。 |

---

## imCalcSizeRec

选择器: [imCalcSize8](../selector-descriptions#imcalcsize8)

要求导入器根据提供的修剪边界估算剪辑使用的磁盘空间。

```cpp
typedef struct {
 void *privatedata;
 void *prefs;
 csSDK_int32 trimIn;
 csSDK_int32 duration;
 prInt64 sizeInBytes;
 csSDK_int32 scale;
 csSDK_int32 sampleSize;
} imCalcSizeRec;
```

| 成员 | 描述 |
|---|---|
| `privatedata` | 来自`imGetInfo8`或`imGetPrefs8`的实例数据。 |
| `prefs` | 来自`imGetPrefs8`的剪辑源设置（设置对话框信息）。 |
| `trimIn` | 修剪剪辑的入点，导入器应计算其大小，时间基准由scale和sampleSize指定。 |
| `duration` | 修剪剪辑的持续时间，导入器应计算其大小。 |
| | 如果为0，则导入器应计算未修剪剪辑的大小。 |
| `sizeInBytes` | 返回计算的大小（以字节为单位）。 |
| `scale` | 视频剪辑的帧速率，表示为scale除以sampleSize。 |
| `sampleSize` | |

---

## imCheckTrimRec

选择器: [imCheckTrim8](../selector-descriptions#imchecktrim8)

提供请求的修剪边界给导入器，并允许将调整后的修剪边界传递回Premiere。

```cpp
typedef struct {
 void *privatedata;
 void *prefs;
 csSDK_int32 trimIn;
 csSDK_int32 duration;
 csSDK_int32 keepAudio;
 csSDK_int32 keepVideo;
 csSDK_int32 newTrimIn;
 csSDK_int32 newDuration;
 csSDK_int32 scale;
 csSDK_int32 sampleSize;
} imCheckTrimRec;
```

| 成员 | 描述 |
| --- | --- |
| `privatedata` | 来自`imGetInfo8`或`imGetPrefs8`的实例数据。 |
| `prefs` | 来自`imGetPrefs8`的剪辑源设置（设置对话框信息）。 |
| `trimIn` | 请求的修剪剪辑的入点，时间基准由scale和sampleSize指定。 |
| `duration` | 请求的持续时间。如果为0，则请求是保持剪辑未修剪，并保持当前持续时间。 |
| `keepAudio` | 如果非零，请求是在修剪结果中保留音频。 |
| `keepVideo` | 如果非零，请求是在修剪结果中保留视频。 |
| `newTrimIn` | 返回可接受的修剪剪辑的入点。它必须在请求的入点之前或与之相同。 |
| `newDuration` | 返回可接受的持续时间。newTrimIn + newDuration必须在trimIn + duration之后或与之相同。 |
| `scale` | 视频剪辑的帧速率，表示为scale除以sampleSize。 |
| `sampleSize` | |

---

## imClipFrameDescriptorRec

选择器: [imSelectClipFrameDescriptor](../selector-descriptions#imselectclipframedescriptor)

根据`inDesiredClipFrameDescriptor`中的请求和导入器的源设置，根据需要修改`outBestFrameDescriptor`以描述导入器将提供的格式。

```cpp
typedef struct {
 void* inPrivateData;
 void* inPrefs;
 ClipFrameDescriptor inDesiredClipFrameDescriptor;
 ClipFrameDescriptor outBestFrameDescriptor;
} imClipFrameDescriptorRec;
```

| 成员 | 描述 |
|---|---|
| `inPrivatedata` | 来自`imGetInfo8`或`imGetPrefs8`的实例数据。 |
| `inPrefs` | 来自`imGetPrefs8`的剪辑源设置（设置对话框信息）。 |
| `inDesiredClipFrameDescriptor` | 请求的帧属性，由主机描述。 |
| | `ClipFrameDescriptor`结构在PrSDKImporterShared.h中定义。 |
| `outBestFrameDescriptor` | 要生成的帧属性，填充初始猜测。 |

---

## imCompleteAsyncClosedCaptionScanRec

选择器: [imCompleteAsyncClosedCaptionScan](../selector-descriptions#imcompleteasyncclosedcaptionscan)

此结构用于提供最后一次清理和处置`inAsyncCaptionScanPrivateData`的机会，并标记封闭字幕扫描是否无错误完成。

```cpp
typedef struct {
 void* inPrivateData;
 const void* inPrefs;
 void* inAsyncCaptionScanPrivateData;
 prBool inScanCompletedWithoutError;
} imCompleteAsyncClosedCaptionScanRec;
```

| 成员 | 描述 |
|---|---|
| `inPrivatedata` | 来自`imGetInfo8`或`imGetPrefs8`的实例数据。 |
| `inPrefs` | 来自`imGetPrefs8`的剪辑源设置（设置对话框信息）。 |
| `inAsyncCaptionScanPrivateData` | 清理并处置在`imInitiateAsyncClosedCaptionScan`或`imGetNextClosedCaption`中分配的任何数据。 |
| | 在此调用返回后不应再访问此数据。 |
| `inScanCompletedWithoutError` | 如果没有错误，则设置为true。 |

---

## imIndColorProfileRec

选择器: [imGetIndColorProfile](../selector-descriptions#imgetindcolorprofile)

自13.0起已弃用。描述剪辑支持的颜色配置文件。

第一次发送`imGetIndColorProfile`时，`inDestinationBuffer`将为NULL，`ioBufferSize`将为0。

将`ioBufferSize`设置为缓冲区所需的大小，主机将分配内存并再次调用导入器，使用有效的`inDestinationBuffer`，并将`ioBufferSize`设置为导入器刚刚提供的值。

```cpp
typedef struct {
 void *inPrivateData;
 csSDK_int32 ioBufferSize;
 void *inDestinationBuffer;
 PrSDKString outName;
} imIndColorProfileRec;
```

---

## imCopyFileRec

选择器: [imCopyFile](../selector-descriptions#imcopyfile)

描述如何复制剪辑。还提供回调以更新进度条并检查用户是否取消。

```cpp
typedef struct {
 void *inPrivateData;
 csSDK_int32 *inPrefs;
 const prUTF16Char *inSourcePath;
 const prUTF16Char *inDestPath;
 importProgressFunc inProgressCallback;
 void *inProgressCallbackID;
} imTrimFileRec;
```

| 成员 | 描述 |
|---|---|
| `inPrivateData` | 在`imGetInfo8`或`imGetPrefs8`期间收集的实例数据。 |
| `inPrefs` | 在`imGetPrefs8`期间收集的剪辑源设置（设置对话框）。 |
| `inSourcePath` | 源文件的完整Unicode路径。 |
| `inDestPath` | 目标文件的完整Unicode路径。 |
| `inProgressCallback` | importProgressFunc回调，用于重复调用以提供进度并检查用户是否取消。 |
| | 可能为NULL指针，因此在调用之前请确保函数指针有效。 |
| `inProgressCallbackID` | 传递给`progressCallback`。 |

---

## imDataRateAnalysisRec

选择器: [imDataRateAnalysis](../selector-descriptions#imdatarateanalysis)

指定所需的buffersize，返回`imNoErr`给Premiere；在下一次调用时，用`imDataSamples`填充缓冲区，并指定音频的基本数据速率（如果有）。

此结构与`imAnalysisRec`类似。

```cpp
typedef struct {
 void *privatedata;
 void *prefs;
 csSDK_int32 buffersize;
 char *buffer;
 csSDK_int32 baserate;
} imDataRateAnalysisRec;
```

| 成员 | 描述 |
| --- | --- |
| `privatedata` | 来自`imGetInfo8`或`imGetPrefs8`的实例数据。 |
| `prefs` | 来自`imGetPrefs8`的剪辑源设置（设置对话框信息）。 |
| `buffersize` | 您在从Premiere传递回数据之前请求的缓冲区大小。 |
| `buffer` | 指向要填充`imDataSamples`的分析缓冲区的指针（见下文结构）。 |
| `baserate` | 文件的数据速率（每秒字节数）。 |

```cpp
typedef struct {
 csSDK_uint32 sampledur;
 csSDK_uint32 samplesize;
} imDataSample;
```

| 成员 | 描述 |
| --- | --- |
| `sampledur` | 一个样本的持续时间，以视频时间基准为单位，以samplesize为增量；如果这是关键帧，则设置高位。 |
| `samplesize` | 此样本的大小（以字节为单位）。 |

---

## imDeferredProcessingRec

选择器: [imDeferredProcessing](../selector-descriptions#imdeferredprocessing)

描述由inPrivateData引用的剪辑的延迟处理的当前进度。

```cpp
typedef struct {
 void *inPrivateData;
 float outProgress;
 char outInvalidateFile;
 char outCallAgain;
} imDeferredProcessingRec;
```

| 成员 | 描述 |
| --- | --- |
| `inPrivateData` | 来自`imGetInfo8`或`imGetPrefs8`的实例数据。 |
| `outProgress` | 将此设置为当前进度，从0.0到1.0。 |
| `outInvalidateFile` | 导入器已更新文件的信息。 |
| `outCallAgain` | 将此设置为true以请求立即再次调用导入器。 |

---

## imDeleteFileRec

选择器: [imDeleteFile](../selector-descriptions#imdeletefile)

描述要删除的文件。

```cpp
typedef struct {
 csSDK_int32 filetype;
 const prUTF16Char deleteFile;
} imDeleteFileRec;
```

| 成员 | 描述 |
| --- | --- |
| `filetype` | 文件的唯一四字符代码，定义在IMPT资源中。 |
| `deleteFile` | 指定要删除的文件的名称（和路径）。 |

---

## imFileAccessRec8

选择器: `imGetInfo8` 和 `imGetPrefs8`

描述正在导入的文件。

```cpp
typedef struct {
 void *importID;
 csSDK_int32 filetype;
 const prUTF16Char *filepath;
 imFileRef fileref;
 PrMemoryPtr newfilename;
} imFileAccessRec;
```

| 成员 | 描述 |
|---|---|
| `importID` | Premiere提供的唯一ID。请勿修改！ |
| `filetype` | 文件的唯一四字符代码，定义在IMPT资源中。 |
| `filepath` | Unicode文件路径和名称。 |
| `fileref` | Windows HANDLE。Premiere不会通过内部使用此值来重载它，尽管将其设置为常量kBadFileRef可能会导致Premiere认为文件已关闭。 |
| | 此值始终有效。 |
| `newfilename` | 如果文件是合成的，导入器可以在`imGetPrefs8`期间指定可显示的名称，作为prUTF16Char字符串。 |

---

## imFileAttributesRec

选择器: [imGetFileAttributes](../selector-descriptions#imgetfileattributes)

Premiere Pro 3.1新增。提供剪辑创建日期。

```cpp
typedef struct {
 prDateStamp creationDateStamp;
 csSDK_int32 reserved[40];
} imFileAttributesRec;
```

| 成员 | 描述 |
| --- | --- |
| `creationDateStamp` | 存储剪辑创建时间的时间戳结构。 |

---

## imFileInfoRec8

选择器: [imGetInfo8](../selector-descriptions#imgetinfo8)

描述剪辑或具有streamIdx ID的流。从文件头或数据源设置剪辑或流的属性。创建并存储任何私有数据(privateData)。

当创建合成剪辑时，如果用户在"新建合成"对话框中提供了所需的分辨率、帧率、像素宽高比和音频采样率，这些值将由Premiere预先初始化。

如果导入立体素材，streamID 0对应左眼视频通道，streamID 1对应右眼视频通道。

```cpp
typedef struct {
 char hasVideo;
 char hasAudio;
 imImageInfoRec vidInfo;
 csSDK_int32 vidScale;
 csSDK_int32 vidSampleSize;
 csSDK_int32 vidDuration;
 imAudioInfoRec7 audInfo;
 PrAudioSample audDuration;
 csSDK_int32 accessModes;
 void *privatedata;
 void *prefs;
 char hasDataRate;
 csSDK_int32 streamIdx;
 char streamsAsComp;
 prUTF16Char streamName[256];
 csSDK_int32 sessionPluginID;
 char alwaysUnquiet;
 char unused;
 prUTF16Char filePath[2048];
 char canProvidePeakData;
 char mayBeGrowing;
} imFileInfoRec8;
```

| 成员 | 描述 |
|---|---|
| `hasVideo` | 非零表示文件包含视频 |
| `hasAudio` | 非零表示文件包含音频 |
| `vidInfo` | 如果文件有视频，填写`imImageInfoRec`结构(如高度、宽度、alpha信息等) |
| `vidScale` | 视频帧率，表示为scale/sampleSize |
| `vidSampleSize` | |
| `vidDuration` | 视频总帧数，以视频时基表示 |
| `audInfo` | 如果文件有音频，填写imAudioInfoRec7结构 |
| `audDuration` | 音频采样帧总数 |
| `accessModes` | 文件访问模式，使用以下常量之一: |
| | - `kRandomAccessImport` - 可随机访问读取(默认) |
| | - `kSequentialAudioOnly` - 访问音频时仅允许顺序读取(用于可变比特率文件) |
| | - `kSequentialVideoOnly` - 访问视频时仅允许顺序读取 |
| | - `kSequentialOnly` - 音频和视频都需顺序访问 |
| | - `kSeparateSequentialAudio` - 同时支持随机访问和顺序访问 |
| | 此设置允许在音频匹配期间仍能获取音频进行擦洗或播放 |
| `privatedata` | 私有实例数据 |
| | 使用Premiere的内存函数分配句柄并存储在此处 |
| | Premiere将在后续选择器中返回该句柄 |
| `prefs` | 从`imGetPrefs8`(设置对话框信息)收集的剪辑源设置数据 |
| | 当使用"文件>新建"创建合成剪辑时，`imGetPrefs8`会在`imGetInfo8`之前发送，因此此设置结构将已有效 |
| `hasDataRate` | 如果设置，导入器可以读取或生成此文件的数据率信息，并将发送`imDataRateAnalysis` |
| `streamIdx` | Premiere指定的流索引号 |
| | 仅在剪辑使用多流时有意义 |
| `streamsAsComp` | 如果是多流且这是流0，指示是否作为合成导入或多个剪辑导入 |
| `streamName` | 可选。多流时此流的Unicode名称 |
| | Premiere Pro 3.1新增，导入器可基于元数据而非文件名设置剪辑名称 |
| | 导入器应将`imImportInfoRec.canSupplyMetadataClipName`设为true，并在此填写名称 |
| `sessionPluginID` | 此ID应用于[文件注册套件](../../universals/sweetpea-suites#file-registration-suite)注册外部文件(如纹理、徽标等)，这些文件被导入器实例使用但不会作为素材出现在项目窗口中 |
| | 使用项目管理器修剪或复制项目时会考虑已注册文件 |
| | `sessionPluginID`仅在传递它的调用中有效 |
| `alwaysUnquiet` | 设为非零告诉Premiere当应用程序重新获得焦点时是否应立即取消静音该剪辑 |
| `filepath` | Premiere Pro 4.1新增。对于音频与视频文件分离的剪辑，在此设置文件名，以便在将序列导出为AAF时能正确生成UMID |
| `canProvidePeakData` | Premiere Pro CS6新增。允许导入器按剪辑切换是否提供峰值音频数据 |
| | 默认为`imImportInfoRec.canProvidePeakAudio`中的设置 |
| | !!! 警告 |
| | 不要在增长文件中使用此设置 |
| `mayBeGrowing` | Premiere Pro CS6.0.2新增。如果此剪辑正在增长且应按媒体首选项中设置的间隔刷新，则设为非零 |

## imFileOpenRec8

选择器: [imOpenFile8](../selector-descriptions#imopenfile8)

Premiere 希望导入器打开的文件。

```cpp
typedef struct {
 imFileAccessRec8 fileinfo;
 void *privatedata;
 csSDK_int32 reserved;
 PrFileOpenAccess inReadWrite;
 csSDK_int32 inImporterID;
 csSDK_size_t outExtraMemoryUsage;
 csSDK_int32 inStreamIdx;
} imFileOpenRec8;
```

| 成员 | 描述 |
|---|---|
| `fileinfo` | 描述传入文件的 `imFileAccessRec8`。 |
| `privatedata` | 从 `imGetInfo8` 或 `imGetPrefs8` 收集的实例数据。 |
| `reserved` | 请勿使用。 |
| `inReadWrite` | 文件应以指定的访问模式打开： |
| | 可以是 `kPrOpenFileAccess_ReadOnly` 或 `kPrOpenFileAccess_ReadWrite` |
| `inImporterID` | 可用作 [PPix Cache Suite](../../universals/sweetpea-suites#ppix-cache-suite) 中调用的 ID。 |
| `outExtraMemoryUsage` | 新增于 CS5。如果导入器仅因打开而使用内存，且无法在缓存中注册，请在此字段中填写大小（以字节为单位）。 |
| `inStreamIdx` | 新增于 CS6。如果剪辑有多个流（用于立体视频或其他用途），此 ID 用于区分它们。 |

---

## imFileRef

选择器:

- [imAnalysis](../selector-descriptions#imanalysis),
- [imDataRateAnalysis](../selector-descriptions#imdatarateanalysis),
- [imOpenFile8](../selector-descriptions#imopenfile8),
- [imQuietFile](../selector-descriptions#imquietfile),
- [imCloseFile](../selector-descriptions#imclosefile),
- [imGetTimeInfo8](../selector-descriptions#imgettimeinfo8),
- [imSetTimeInfo8](../selector-descriptions#imsettimeinfo8),
- [imImportImage](../selector-descriptions#imimportimage),
- [imImportAudio7](../selector-descriptions#imimportaudio7)

在 Windows 上是文件句柄，在 MacOS 上是 void\*。

`imFileRef` 也是 `imFileAccessRec` 的成员。

操作 `imFileRef` 时，请使用操作系统特定的函数，而不是 ANSI 文件函数。

---

## imFrameFormat

选择器: [imGetSourceVideo](../selector-descriptions#imgetsourcevideo) (成员为 [imSourceVideoRec](#imsourcevideorec))

描述帧的尺寸和像素格式。

```cpp
typedef struct {
 csSDK_int32 inFrameWidth;
 csSDK_int32 inFrameHeight;
 PrPixelFormat inPixelFormat;
} imFrameFormat;
```

| 成员 | 描述 |
|---|---|
| `inFrameWidth` | 请求的帧尺寸。 |
| `inFrameHeight` | |
| `inPixelFormat` | 请求的帧的像素格式。 |

---

## imGetAudioChannelLayoutRec

选择器: [imGetAudioChannelLayout](../selector-descriptions#imgetaudiochannellayout)

导入器应为正在导入的剪辑中的每个音频通道标记标签。

如果未指定标签，则假定通道布局为离散的。

```cpp
typedef struct {
 void* inPrivateData;
 PrAudioChannelLabel outChannelLabels[kMaxAudioChannelCount];
} imGetAudioChannelLayoutRec;
```

| 成员 | 描述 |
|---|---|
| `inPrivatedata` | 从 `imGetInfo8` 或 `imGetPrefs8` 收集的实例数据。 |
| `outChannelLabels` | 应为剪辑中的每个通道分配一个有效的音频通道标签。 |
| | 标签在 [Audio Suite](../../universals/sweetpea-suites#audio-suite) 中定义。 |

---

## imGetNextClosedCaptionRec

选择器: [imGetNextClosedCaption](../selector-descriptions#imgetnextclosedcaption)

此结构提供了在 `imInitiateAsyncClosedCaptionScan` 中分配的私有数据，并应填写以返回一个隐藏字幕、其时间、格式、大小以及隐藏字幕扫描的总体进度。

```cpp
typedef struct {
 void* inPrivateData;
 const void* inPrefs;
 void* inAsyncCaptionScanPrivateData;
 float outProgress;
 csSDK_int64 outScale;
 csSDK_int64 outSampleSize;
 csSDK_int64 outPosition;
 PrClosedCaptionFormat outClosedCaptionFormat;
 PrMemoryPtr outCaptionData;
 prUTF8Char outTTMLData[kTTMLBufferSize];
 csSDK_size_t ioCaptionDataSize;
} imGetNextClosedCaptionRec;
```

| 成员 | 描述 |
|---|---|
| `inPrivatedata` | 从 `imGetInfo8` 或 `imGetPrefs8` 收集的实例数据。 |
| `inPrefs` | 从 `imGetPrefs8` 收集的剪辑源设置（设置对话框信息）。 |
| `inAsyncCaptionScanPrivateData` | 提供在 `imInitiateAsyncClosedCaptionScan` 中分配的任何私有数据。 |
| `outProgress` | 更新此值以表示当前遍历所有字幕的进度。有效值在 0.0 到 1.0 之间。 |
| `outScale` | `outPosition` 的时间基准，表示为 scale 除以 sampleSize。 |
| `outSampleSize` | |
| `outPosition` | 隐藏字幕的位置。 |
| `outClosedCaptionFormat` | 隐藏字幕的格式。以下之一： |
| | - `kPrClosedCaptionFormat_Undefined` |
| | - `kPrClosedCaptionFormat_CEA608` - CEA-608 字节流 |
| | - `kPrClosedCaptionFormat_CEA708` - CEA-708 字节流（可能包含 608 数据包装在 708 中） |
| | - `kPrClosedCaptionFormat_TTML` - 符合 [W3C Timed Text Markup Language (TTML) 1.0](http://www.w3.org/TR/ttaf1-dfxp/) 或可选符合 [SMPTE ST 2052-1:2010](http://store.smpte.org/)，或可选符合 [EBU Tech 3350](http://tech.ebu.ch/webdav/site/tech/shared/tech/)。 |
| | 如果 TTML 字符串包含隧道数据（例如 CEA-608 数据），则建议插件通过适当的字节流格式（例如 `kPrClosedCaptionFormat_CEA608`）提供该数据。 |
| `outCaptionData` | 如果提供 CEA-608 或 CEA-708，插件应将隐藏字幕字节写入的内存位置。 |
| `outTTMLData` | 有效的 W3C TTML 数据的 UTF-8 字符串。 |
| | 整个字符串可以拆分为子字符串（例如逐行），主机将连接并解码它们（仅在 `outCaptionData` 为 `kPrClosedCaptionFormat_TTML` 时使用）。 |
| `ioCaptionDataSize` | 从主机分配的 `outCaptionData` 缓冲区的大小（以字节为单位）。导入器应设置此变量为实际写入 `outCaptionData` 的字节数，或 `outTTMLData` 指向的字符串的长度（字符数，而非字节数）。 |

---

## imGetPrefsRec

选择器: [imGetPrefs8](../selector-descriptions#imgetprefs8)

包含从设置对话框收集的设置/首选项数据（或默认值填充）。

如果您正在创建媒体，则可以生成包含时间轴背景帧的视频预览。

```cpp
typedef struct {
 char *prefs;
 csSDK_int32 prefsLength;
 char firstTime;
 PrTimelineID timelineData;
 void *privatedata;
 TDB_TimeRecord tdbTimelineLocation;
 csSDK_int32 sessionPluginID;
 csSDK_int32 imageWidth;
 csSDK_int32 imageHeight;
 csSDK_uint32 pixelAspectNum;
 csSDK_uint32 pixelAspectDen;
 csSDK_int32 vidScale;
 csSDK_int32 vidSampleSize;
 float sampleRate;
} imGetPrefsRec;
```

| 成员 | 描述 |
|---|---|
| `prefs` | 指向用于存储剪辑源设置的私有结构（您分配）的指针。 |
| `prefsLength` | 在将任何内容存储到 `prefs` 成员之前，请将 `prefsLength` 设置为您的结构的大小并返回 `imNoErr`；Premiere 将重新调整大小并再次调用插件 `imGetPrefs8`。 |
| `firstTime` | 如果设置，则 `imGetPrefs8` 是第一次发送。 |
| | 相反，请检查 `prefs` 是否已分配。如果没有，则 `imGetPrefs8` 是第一次发送。设置 `prefsLength` 缓冲区的默认值并显示任何设置对话框。 |
| `timelineData` | *可以* 传递给 `getPreviewFrameEx` 回调以及 `tdbTimelineLocation` 以获取当前剪辑或时间轴位置下方的时间轴帧。这对于标题插件很有用。 |
| `privatedata` | 私有实例数据。 |
| | 如果尚未在 `imGetInfo8` 中分配，请使用 Premiere 的内存函数分配一个句柄并将其存储在此处。 |
| | Premiere 将在后续选择器中返回该句柄。 |
| `tdbTimelineLocation` | *可以* 传递给 `getPreviewFrameEx` 回调以及 `timelineData` 以获取当前剪辑或时间轴位置下方的时间轴帧。这对于标题插件很有用。 |
| `sessionPluginID` | 此 ID 应用于 [File Registration Suite](../../universals/sweetpea-suites#file-registration-suite) 中注册外部文件（例如纹理、徽标等），这些文件由导入器实例使用但不会作为素材出现在项目窗口中。 |
| | 使用项目管理器修剪或复制项目时，将考虑已注册的文件。`sessionPluginID` 仅在传递它的调用中有效。 |
| `imageWidth` | 新增于 CS5。视频的原生分辨率。 |
| `imageHeight` | |
| `pixelAspectNum` | 新增于 CS5。视频的像素宽高比。 |
| `pixelAspectDen` | |
| `vidScale` | 新增于 CS5。视频的帧速率，表示为 scale 除以 sampleSize。 |
| `vidSampleSize` | |
| `sampleRate` | 新增于 CS5。音频采样率。 |

---

## imImageInfoRec

选择器: [imGetInfo8](../selector-descriptions#imgetinfo8) (成员为 [imFileInfoRec8](#imfileinforec8))

描述要导入的视频。

```cpp
typedef struct {
 csSDK_int32 imageWidth;
 csSDK_int32 imageHeight;
 csSDK_uint16 pixelAspectV1;
 csSDK_uint16 depth;
 csSDK_int32 subType;
 char fieldType;
 char fieldsStacked;
 char reserved_1;
 char reserved_2;
 char alphaType;
 matteColRec matteColor;
 char alphaInverted;
 char isVectors;
 char drawsExternal;
 char canForceInternalDraw;
 char dontObscure;
 char isStill;
 char noDuration;
 char reserved_3;
 csSDK_uint32 pixelAspectNum;
 csSDK_uint32 pixelAspectDen;
 char isRollCrawl;
 char reservedc[3];
 csSDK_int32 importerID;
 csSDK_int32 supportsAsyncIO;
 csSDK_int32 supportsGetSourceVideo;
 csSDK_int32 hasPulldown;
 csSDK_int32 pulldownCadence;
 csSDK_int32 posterFrame;
 csSDK_int32 canTransform;
 csSDK_int32 interpretationUncertain;
 csSDK_int32 colorProfileSupport;
 PrSDKString codecDescription;
 csSDK_int32 colorSpaceSupport;
 PrTime frameRate;
 prBool hasEmbeddedLUT;
 csSDK_int32 reserved[12];
} imImageInfoRec;
```

### 插件信息

| 成员 | 描述 |
|---|---|
| `importerID` | *可以* 用作 [PPix Cache Suite](../../universals/sweetpea-suites#ppix-cache-suite) 中调用的 ID。 |
| `supportsAsyncIO` | 如果导入器支持 `imCreateAsyncImporter` 和 ai\* 选择器，请将此设置为 true。 |
| `supportsGetSourceVideo` | 如果导入器支持 `imGetSourceVideo` 选择器，请将此设置为 true。 |

### 边界信息

| 成员 | 描述 |
|---|---|
| `imageWidth` | 帧宽度（以像素为单位）。 |
| `imageHeight` | 帧高度（以像素为单位）。 |
| `pixelAspectNum` | 像素宽高比的分子和分母。 |
| | 对于合成导入器，默认情况下这些是项目的 PAR。 |
| | 仅当您需要特定的 PAR 以使合成素材的几何形状正确时才设置此值。 |
| `pixelAspectDen` | |

### 时间信息

| 成员 | 描述 |
|---|---|
| `isStill` | 如果设置，则文件包含单帧，因此只会缓存一帧。 |
| `noDuration` | 以下之一： |
| | - `imNoDurationFalse` |
| | - `imNoDurationNoDefault` |
| | - `imNoDurationStillDefault` - 使用用户在首选项中设置的静止图像默认持续时间 |
| | - `imNoDurationNoDefault` - 导入器将提供自己的持续时间 |
| | 这主要用于合成剪辑，但也可用于导入非顺序静止图像。 |
| `isRollCrawl` | 设置为非零值以指定此剪辑为滚动或爬行标题。 |
| | 这允许播放器可选地使用 [RollCrawl Suite](../../universals/sweetpea-suites#rollcrawl-suite) 获取此标题的部分内容以进行实时播放。 |
| `hasPulldown` | 如果剪辑包含 NTSC 胶片素材并带有 3:2 下拉，请将此设置为 true。 |
| `pulldownCadence` | 将此设置为描述剪辑下拉的枚举值： |
| | - `importer_PulldownPhase_NO_PULLDOWN` |
| | **2:3 节奏：** |
| | - `importer_PulldownPhase_WSSWW` |
| | - `importer_PulldownPhase_SSWWW` |
| | - `importer_PulldownPhase_SWWWS` |
| | - `importer_PulldownPhase_WWWSS` |
| | - `importer_PulldownPhase_WWSSW` |
| | **24pa 节奏：** |
| | - `importer_PulldownPhase_WWWSW` |
| | - `importer_PulldownPhase_WWSWW` |
| | - `importer_PulldownPhase_WSWWW` |
| | - `importer_PulldownPhase_SWWWW` |
| | - `importer_PulldownPhase_WWWWS` |
| `posterFrame` | 新增于 Premiere Pro CS3。要显示的海报帧号。 |
| | 如果未指定，海报帧将是剪辑的第一帧。 |

### 格式信息

| 成员 | 描述 |
|---|---|
| `depth` | 每像素的位数。目前没有效果，应保持不变。 |
| `subType` | 文件编解码器的四字符代码；将文件与MAL插件关联。对于未压缩的文件，设置为`imUncompressed`。 |
| `fieldType` | 以下之一： |
| | - `prFieldsNone` |
| | - `prFieldsUpperFirst` |
| | - `prFieldsLowerFirst` |
| | - `prFieldsUnknown` |
| `fieldsStacked` | 存在字段，且未交错。自Premiere Pro 7.0起已弃用。 |
| `alphaType` | 当深度为32或更大时使用。以下之一： |
| | - `alphaNone` - 无Alpha通道（默认） |
| | - `alphaStraight` - 直通Alpha通道 |
| | - `alphaBlackMatte` - 预乘以黑色 |
| | - `alphaWhiteMatte` - 预乘以白色 |
| | - `alphaArbitrary` - 预乘以`matteColor`中指定的颜色 |
| | - `alphaOpaque` - 用于Alpha通道预填充为不透明的视频。 |
| | 这为Premiere提供了优化机会，跳过如果设置为`alphaNone`时将执行的填充到不透明的操作。 |
| `matteColor` | 在Premiere Pro CS3中新增。如果`alphaType`设置为`alphaArbitrary`，则用于指定遮罩颜色。 |
| `alphaInverted` | 如果非零，则Alpha被视为反转（例如黑色变为透明）。 |
| `canTransform` | 设置为非零值以指定此导入器处理分辨率独立的文件，并可以应用变换矩阵。 |
| | 矩阵将在导入请求期间通过`imImportImageRec.transform`传递。 |
| | 目前Premiere Pro未调用此代码路径。After Effects使用此调用来导入Flash视频。 |
| `interpretationUncertain` | 使用“或”运算符组合以下任何标志： |
| | - `imPixelAspectRatioUncertain` |
| | - `imFieldTypeUncertain` |
| | - `imAlphaInfoUncertain` |
| | - `imEmbeddedColorProfileUncertain` |
| `colorProfileSupport` | 自13.0起已弃用。CS5.5新增。 |
| | 设置为`imColorProfileSupport_Fixed`以支持色彩管理。 |
| | 如果导入器不确定，应使用上面的`interpretationUncertain`。 |
| `codecDescription` | 使用的编解码器的文本描述。 |
| `ColorProfileRec` | 13.0新增；描述导入器使用的色彩配置文件，与此媒体一起使用。 |
| `colorSpaceSupport` | 设置为`imColorSpaceSupport_Fixed`以支持色彩管理。 |
| | 如果导入器不确定，应使用上面的`imColorSpaceSupport_None`。 |
| `hasEmbeddedLUT` | 如果媒体包含嵌入式LUT，则设置为`kPrTrue`。否则设置为`kPrFalse`。 |

### 未使用

| 成员 | 描述 |
|---|---|
| `pixelAspectV1` | 已过时。为向后兼容而保留。 |
| | 为Premiere 6.x或Premiere Pro API编写的插件应使用`pixelAspectNum`和`pixelAspectDen`。 |
| `isVectors` | 使用`canTransform`代替。 |
| `drawsExternal` | |
| `canForceInternalDraw` | |
| `dontObscure` | |

---

## imImportAudioRec7

选择器: [imImportAudio7](../selector-descriptions#imimportaudio7)

描述要返回的音频样本，并包含一个分配的缓冲区供导入器填充。

以32位浮点、非交错音频格式提供音频。

```cpp
typedef struct {
 PrAudioSample position;
 csSDK_uint32 size;
 float **buffer;
 void *privatedata;
 void *prefs;
} imImportAudioRec7;
```

| 成员 | 描述 |
|---|---|
| `position` | 入点，以音频样本帧为单位。 |
| | 导入器应将请求的出点保存在privatedata中，因为如果position小于零，则音频请求是连续的，这意味着导入器应从上次`imImportAudio7`调用返回连续的样本。 |
| `size` | 要导入的音频样本帧数。 |
| `buffer` | 一个缓冲区数组，每个通道一个缓冲区，长度由size指定。 |
| | 这些缓冲区由主机应用程序分配，供插件填充音频数据。 |
| `privatedata` | 从`imGetInfo8`或`imGetPrefs8`收集的实例数据。 |
| `prefs` | 从`imGetPrefs8`收集的剪辑源设置数据（设置对话框信息）。 |

---

## imImportImageRec

选择器: [imImportImage](../selector-descriptions#imimportimage)

描述要返回的帧。

```cpp
typedef struct {
 csSDK_int32 onscreen;
 csSDK_int32 dstWidth;
 csSDK_int32 dstHeight;
 csSDK_int32 dstOriginX;
 csSDK_int32 dstOriginY;
 csSDK_int32 srcWidth;
 csSDK_int32 srcHeight;
 csSDK_int32 srcOriginX;
 csSDK_int32 srcOriginY;
 csSDK_int32 unused2;
 csSDK_int32 unused3;
 csSDK_int32 rowbytes;
 char *pix;
 csSDK_int32 pixsize;
 PrPixelFormat pixformat;
 csSDK_int32 flags;
 prFieldType fieldType;
 csSDK_int32 scale;
 csSDK_int32 sampleSize;
 csSDK_int32 in;
 csSDK_int32 out;
 csSDK_int32 pos;
 void *privatedata;
 void *prefs;
 prRect alphaBounds;
 csSDK_int32 applyTransform;
 float transform[3][3];
 prRect destClipRect;
} imImportImageRec;
```

### 边界信息（用于imImportImageRec）

| 成员 | 描述 |
|---|---|
| `dstWidth` | 目标矩形的宽度（以像素为单位）。 |
| `dstHeight` | 目标矩形的高度（以像素为单位）。 |
| `dstOriginX` | 原点X点（0表示帧在屏幕外绘制）。 |
| `dstOriginY` | 原点Y点（0表示帧在屏幕外绘制）。 |
| `srcWidth` | 与dstWidth返回的相同数字。 |
| `srcHeight` | 与dstHeight返回的相同数字。 |
| `srcOriginX` | 与dstOriginX返回的相同数字。 |
| `srcOriginY` | 与dstOriginY返回的相同数字。 |

### 帧信息

| 成员 | 描述 |
|---|---|
| `rowbytes` | 单行像素的字节数。 |
| `pix` | 指向导入器应绘制的缓冲区的指针。根据`imGetInfo8`中的信息分配。 |
| `pixsize` | 像素数。rowbytes \* height。 |
| `pixformat` | Premiere请求的像素格式。 |
| `flags` | `imDraftMode` - 如果可能，快速绘制，使用更快且可能不太准确的算法。 |
| | 从时间线播放时可能会传递此标志。 |
| | `imSamplesAreFields` - 大多数导入器将忽略，因为Premiere已经缩放入/出/缩放以考虑字段，但如果您需要知道这种情况已经发生（因为您可能以“帧”为单位测量某些内容），请检查此标志。 |
| | 另外，我们建议考虑以秒而不是帧为单位进行测量。 |
| `fieldType` | 如果导入器可以交换字段，它应使用给定的字段优势渲染帧：`imFieldsUpperFirst`或`imFieldsLowerFirst`。 |
| `scale` | 视频的帧速率，表示为scale除以sampleSize。 |
| `sampleSize` | |
| `in` | 入点，基于scale除以sampleSize定义的时间基准。 |
| `out` | 出点，基于scale除以sampleSize定义的时间基准。 |
| `pos` | 导入位置，基于上述时间基准。 |
| | **API错误**：合成和自定义导入器将始终接收零。 |
| | 因此，调整时间线上的入点不会偏移入点。 |
| `privatedata` | 在`imGetInfo`或`imGetPrefs`期间收集的实例数据。 |
| `prefs` | 在`imGetPrefs`期间收集的剪辑源设置数据（设置对话框信息）。 |
| `alphaBounds` | 这是Alpha始终为0的矩形外部。如果Alpha边界与目标边界匹配，则只需不更改此字段。 |
| | 如果设置，Alpha边界必须包含在目标边界内。目前仅在插件调用`ppixGetAlphaBounds`时使用，目前没有任何原生插件使用。 |
| `applyTransform` | After Effects CS3新增。目前Premiere未提供。 |
| | 如果非零，主机请求导入器在返回结果图像到pix之前应用transform和destClipRect中指定的变换。 |
| `transform` | After Effects CS3新增。目前Premiere未提供。源到目标的变换矩阵。 |
| `destClipRect` | After Effects CS3新增。目前Premiere未提供。pix缓冲区边界内的目标矩形。 |

---

## imImportInfoRec

选择器: [imInit](../selector-descriptions#iminit)

描述导入器的功能给Premiere。

```cpp
typedef struct {
 csSDK_uint32 importerType;
 csSDK_int32 canOpen;
 csSDK_int32 canSave;
 csSDK_int32 canDelete;
 csSDK_int32 canResize;
 csSDK_int32 canDoSubsize;
 csSDK_int32 canDoContinuousTime;
 csSDK_int32 noFile;
 csSDK_int32 addToMenu;
 csSDK_int32 hasSetup;
 csSDK_int32 dontCache;
 csSDK_int32 setupOnDblClk;
 csSDK_int32 keepLoaded;
 csSDK_int32 priority;
 csSDK_int32 canAsync;
 csSDK_int32 canCreate;
 csSDK_int32 canCalcSizes;
 csSDK_int32 canTrim;
 csSDK_int32 avoidAudioConform;
 prUTF16Char *acceleratorFileExt;
 csSDK_int32 canCopy;
 csSDK_int32 canSupplyMetadataClipName;
 csSDK_int32 private;
 csSDK_int32 canProvidePeakAudio;
 csSDK_int32 canProvideFileList;
 csSDK_int32 canProvideClosedCaptions;
 prPluginID fileInfoVersion;
} imImportInfoRec;
```

### 屏幕信息

| 成员 | 描述 |
|---|---|
| `noFile` | 如果设置，这是一个合成导入器。文件引用将为零。 |
| `addToMenu` | 如果设置为`imMenuNew`，导入器将出现在文件>新建菜单中。 |
| `canDoContinuousTime` | 如果设置，导入器可以在任意时间渲染帧，并且没有固定的时间码。 |
| | 颜色遮罩生成器或标题器将设置此标志。 |
| `canCreate` | 如果设置，Premiere将将此合成导入器视为创建磁盘上的文件以引用帧和音频。 |
| | 有关自定义导入器的更多信息，请参阅附加详细信息。 |

### 文件处理标志

| 成员 | 描述 |
|---|---|
| `canOpen` | 如果设置，导入器处理打开和关闭操作。 |
| | 如果插件需要被调用来处理`imOpenFile`、`imQuietFile`和`imCloseFile`，则设置此标志。 |
| `canSave` | 如果设置，导入器处理文件>保存和文件>另存为在剪辑捕获后，并且必须处理`imSaveFile`选择器。 |
| `canDelete` | 如果设置，导入器可以删除自己的文件。 |
| | 插件必须处理`imDeleteFile`选择器。 |
| `canCalcSizes` | 如果设置，导入器可以在imCalcSize期间计算剪辑使用的磁盘空间。 |
| | 如果导入器使用表示为Premiere中的一个顶级文件的文件树，则应支持此调用。 |
| `canTrim` | 如果设置，导入器可以在imTrimFile期间修剪文件。 |
| `canCopy` | 如果导入器支持在项目管理器中复制剪辑，则设置为true。 |

### 设置标志

| 成员 | 描述 |
|---|---|
| `hasSetup` | 如果设置，导入器有一个设置对话框。对话框应在`imGetPrefs`响应中呈现。 |
| `setupOnDblClk` | 如果设置，每当用户在时间线或项目箱中双击由插件导入的文件时，应打开设置对话框。 |

### 内存处理标志

| 成员 | 描述 |
|---|---|
| `dontCache` | 未使用。 |
| `keepLoaded` | 如果设置，导入器插件应永远不会被卸载。 |
| | 除非绝对必要（通常不是），否则不要设置此标志。 |

### 其他

| 成员 | 描述 |
|---|---|
| `priority` | 确定处理相同文件类型的导入器的优先级级别。 |
| | 数字较高的导入器将覆盖数字较低的导入器。 |
| | 对于覆盖Premiere附带的导入器，使用100或更大的值。 |
| | 较高优先级的导入器可以通过在`imOpenFile8`或`imGetInfo8`期间返回`imBadFile`将文件推迟到较低优先级的导入器。 |
| `importType` | 基于插件的IMPT资源分配的导入模块类型标识符。 |
| | 不要修改此字段。 |
| `canProvideClosedCaptions` | Premiere Pro CC新增。如果导入器支持带有嵌入式隐藏字幕的媒体，则设置为true。 |
| `avoidAudioConform` | 如果导入器支持快速音频检索并且不需要其导入的音频剪辑进行转换，则设置为true。 |
| `canProvidePeakAudio` | Premiere Pro CS5.5新增。如果您的非合成导入器希望使用`imGetPeakAudio`提供**峰值音频数据**，则设置为true。 |
| `acceleratorFileExt` | 用导入器创建和使用的加速器文件的文件扩展名填充此大小为256的prUTF16Char数组。 |
| `canSupplyMetadataClipName` | 允许基于文件的导入器从元数据设置剪辑名称。 |
| | 在`imFileInfoRec8.streamName`中设置此标志。 |
| `canProvideFileList` | CS6新增。如果导入器将在`imQueryInputFileList`响应中提供复制操作的所有文件列表，则设置为true。 |
| `fileInfoVersion` | CC 2014新增。此标志由内部导入器中的优化使用。请勿使用。

### 未使用 (在 imImportInfoRec 中)

| 成员 | 描述 |
| --- | --- |
| `canResize` | |
| `canDoSubsize`| |
| `canAsync` | |

---

## imIndFormatRec

选择器: [imGetIndFormat](../selector-descriptions#imgetindformat)

描述导入器支持的格式。合成文件只能有一种格式。

```cpp
typedef struct {
 csSDK_int32 filetype;
 csSDK_int32 flags;
 csSDK_int32 canWriteTimecode;
 char FormatName[256];
 char FormatShortName[32];
 char PlatformExtension[256];
 prBool hasAlternateTypes;
 csSDK_int32 alternateTypes[kMaxAlternateTypes];
 csSDK_int32 canWriteMetaData;
} imIndFormatRec;
```

| 成员 | 描述 |
|---|---|
| `filetype` | 文件的唯一四字符代码 (fourcc)。 |
| `flags` | 描述导入器功能的旧机制。 |
| | 尽管为了向后兼容性仍然会使用这些标志，但当前和未来的导入器不应使用这些标志。 |
| | 详情见下表。 |
| `canWriteTimecode` | 如果设置，可以为此文件类型写入时间码。 |
| `FormatName[256]` | 描述性导入器名称。 |
| `FormatShortName[256]` | 插件的短名称，出现在格式菜单中。 |
| `PlatformExtension[256]` | 此导入器支持的所有文件扩展名列表。 |
| | 如果有多个，请用空字符分隔。 |
| `hasAlternateTypes` | 未使用 |
| `alternateTypes[kMaxAlternateTypes]` | 未使用 |
| `canWriteMetaData` | 6.0 新增。如果设置，支持为此文件类型调用 `imSetMetaData`。 |

以下标志仅适用于旧插件，不应使用。

| 标志 | 用途 |
|---|---|
| `xfIsMovie` | 未使用 |
| `xfCanReplace` | 未使用 |
| `xfCanOpen` | 未使用：请改用 `imImportInfoRec.canOpen`。 |
| `xfCanImport` | 未使用：PiPL 资源将文件描述为导入器。 |
| `xfIsStill` | 表示导入器处理静态图像。 |
| `xfIsSound` | 未使用：请改用 `imFileInfoRec.hasAudio`。 |
| `xfCanWriteTimecode` | 如果设置，导入器可以响应 `imGetTimecode` 和 `imSetTimecode`。 |
| | 已过时：请改用 `imIndFormatRec.canWriteTimecode`。 |
| `xfCanWriteMetaData` | 写入（和读取）元数据，特定于导入器的四字符代码文件类型。 |
| | 已过时：请改用 `imIndFormatRec.canWriteMetaData`。 |
| `xfCantBatchProcess` | 未使用 |

---

## imIndPixelFormatRec

选择器: [imGetIndPixelFormat](../selector-descriptions#imgetindpixelformat)

描述导入器支持的像素格式。

```cpp
typedef struct {
 void *privatedata;
 PrPixelFormat outPixelFormat;
 const void* prefs;
} imIndPixelFormatRec;
```

| 成员 | 描述 |
| --- | --- |
| `privatedata` | 来自 `imGetInfo8` 或 `imGetPrefs8` 的实例数据。 |
| `outPixelFormat` | 导入器支持的像素格式之一。 |
| `prefs` | CC 新增。在 `imGetPrefs8`（设置对话框）期间收集的剪辑源设置数据。 |

---

## imInitiateAsyncClosedCaptionScanRec

选择器: [imInitiateAsyncClosedCaptionScan](../selector-descriptions#iminitiateasyncclosedcaptionscan)

`imGetNextClosedCaption` 和 `imCompleteAsyncClosedCaptionScan` 可能会从与 `imInitiateAsyncClosedCaptionScan` 最初调用的线程不同的线程中调用。

为了帮助实现这一点，导入器可以分配 `outAsyncCaptionScanPrivateData` 用于即将进行的隐藏字幕扫描调用，然后在 `imCompleteAsyncClosedCaptionScan` 中释放。

还可以填写所有隐藏字幕的估计持续时间。

这对于某些情况下嵌入的字幕包含许多空数据帧的情况很有用。

```cpp
typedef struct {
 void* privatedata;
 void* prefs;
 void* outAsyncCaptionScanPrivateData;
 csSDK_int64 outScale;
 csSDK_int64 outSampleSize;
 csSDK_int64 outEstimatedDuration;
} imInitiateAsyncClosedCaptionScanRec;
```

| 成员 | 描述 |
| --- | --- |
| `privatedata` | 在 `imGetInfo8` 或 `imGetPrefs8` 期间收集的实例数据。 |
| `prefs` | 在 `imGetPrefs8`（设置对话框）期间收集的剪辑源设置数据。 |
| `outAsyncCaptionScanPrivateData` | 导入器可以为此隐藏字幕扫描分配实例数据，并在此处传递回来。 |
| `outScale` | CC 2013 年 10 月新增。视频剪辑的帧速率，表示为 scale 除以 sampleSize。 |
| `outSampleSize` | |
| `outEstimatedDuration` | CC 2013 年 10 月新增。所有字幕的估计持续时间，以上述时间尺度表示。 |

---

## imMetaDataRec

选择器: [imGetMetaData](../selector-descriptions#imgetmetadata) 和 [imSetMetaData](../selector-descriptions#imsetmetadata)

描述特定于给定四字符代码的元数据。

```cpp
typedef struct {
 void *privatedata;
 void *prefs;
 csSDK_int32 fourCC;
 csSDK_uint32 buffersize;
 char *buffer;
} imMetaDataRec;
```

| 成员 | 描述 |
| --- | --- |
| `privatedata` | 在 `imGetInfo8` 或 `imGetPrefs8` 期间收集的实例数据。 |
| `prefs` | 在 `imGetPrefs8`（设置对话框）期间收集的剪辑源设置数据。 |
| `fourcc` | 元数据块的四字符代码。 |
| `buffersize` | `buffer` 中数据的大小。 |
| `buffer` | 元数据。 |

---

## imPeakAudioRec

选择器: [imGetPeakAudio](../selector-descriptions#imgetpeakaudio)

描述指定位置的音频峰值。

```cpp
typedef struct {
 void *inPrivateData;
 void *inPrefs;
 PrAudioSample inPosition;
 float inSampleRate;
 csSDK_int32 inNumSampleFrames;
 float **outMaxima;
 float **outMinima;
} imPeakAudioRec;
```

| 成员 | 描述 |
| --- | --- |
| `inPrivateData` | 在 `imGetInfo8` 或 `imGetPrefs8` 期间收集的实例数据。 |
| `inPrefs` | 在 `imGetPrefs8`（设置对话框）期间收集的实例数据。 |
| `inPosition` | 峰值数据的起始音频采样帧。 |
| `inSampleRate` | 生成峰值数据的采样率。 |
| `inNumSampleFrames` | 每个缓冲区中的采样帧数。 |
| `outMaxima` | 要填充最大采样值的数组数组。 |
| `outMinima` | 要填充最小采样值的数组数组。 |

---

## imPreferredFrameSizeRec

选择器: [imGetPreferredFrameSize](../selector-descriptions#imgetpreferredframesize)

描述导入器首选的帧大小。

```cpp
typedef struct {
 void *inPrivateData;
 void *inPrefs;
 PrPixelFormat inPixelFormat;
 csSDK_int32 inIndex;
 csSDK_int32 outWidth;
 csSDK_int32 outHeight;
} imPreferredFrameSizeRec;
```

| 成员 | 描述 |
| --- | --- |
| `inPrivateData` | 在 `imGetInfo8` 或 `imGetPrefs8` 期间收集的实例数据。 |
| `inPrefs` | 在 `imGetPrefs8`（设置对话框）期间收集的剪辑源设置数据。 |
| `inPixelFormat` | 此首选帧大小的像素格式。 |
| `inIndex` | 此首选帧大小的索引。 |
| `outWidth` | 此首选帧大小的尺寸。 |
| `outHeight` | |

---

## imQueryContentStateRec

选择器: [imQueryContentState](../selector-descriptions#imquerycontentstate)

填写 `outContentStateID`，它应该是基于 `inSourcePath` 处剪辑内容状态计算的 GUID。

如果自上次调用以来状态未更改，则应返回相同的 GUID。

```cpp
typedef struct {
 const prUTF16Char* inSourcePath;
 prPluginID outContentStateID;
} imQueryContentStateRec;
```

---

## imQueryDestinationPathRec

选择器: [imQueryDestinationPath](../selector-descriptions#imquerydestinationpath)

根据 `inSourcePath` 和 `inSuggestedDestinationPath` 填写所需的 `outActualDestinationPath`。

```cpp
typedef struct {
 void *inPrivateData;
 void *inPrefs;
 const prUTF16Char *inSourcePath;
 const prUTF16Char *inSuggestedDestinationPath;
 prUTF16Char *outActualDestinationPath;
} imQueryDestinationPathRec;
```

| 成员 | 描述 |
| --- | --- |
| `inPrivateData` | 在 `imGetInfo8` 或 `imGetPrefs8` 期间收集的实例数据。 |
| `inPrefs` | 在 `imGetPrefs8`（设置对话框）期间收集的剪辑源设置数据。 |
| `inSourcePath` | 要修剪的源文件的路径。 |
| `inSuggestedDestinationPath` | Premiere 建议创建目标文件的路径。 |
| `outActualDestinationPath` | 导入器希望创建目标文件的路径。 |

---

## imQueryInputFileListRec

选择器: [imQueryInputFileList](../selector-descriptions#imqueryinputfilelist)

填写 `outContentStateID`，它应该是基于 `inSourcePath` 处剪辑内容状态计算的 GUID。

如果自上次调用以来状态未更改，则应返回相同的 GUID。

```cpp
typedef struct {
 void* inPrivateData;
 void* inPrefs;
 PrSDKString inBasePath;
 csSDK_int32 outNumFilePaths;
 PrSDKString *outFilePaths;
} imQueryInputFileListRec;
```

| 成员 | 描述 |
|---|---|
| `inPrivateData` | 从 `imGetInfo8` 或 `imGetPrefs8` 收集的实例数据。 |
| `inPrefs` | 从 `imGetPrefs8`（设置对话框信息）收集的剪辑源设置数据。 |
| `inBasePath` | 之前在 `imOpenFile` 中传递的主文件路径。 |
| `outNumFilePaths` | 第一次发送 `imQueryInputFileList` 时，填写媒体使用的文件数量。 |
| `outFilePaths` | 第二次发送 `imQueryInputFileList` 时，这将预分配为 NULL 字符串数组。 |
| | 使用 [String Suite](../../universals/sweetpea-suites#string-suite) 将数组填充为实际路径的 PrSDKStrings。 |

---

## imQueryStreamLabelRec

选择器: [imQueryStreamLabel](../selector-descriptions#imquerystreamlabel)

CS6 新增。根据传入的流 ID，分配并返回流的标签。

对于立体导入器，请使用 `PrSDKStreamLabel.h` 中的预定义标签。

```cpp
typedef struct {
 void *inPrivateData;
 csSDK_int32 *inPrefs;
 csSDK_int32 inStreamIdx;
 PrSDKString* outStreamLabel;
} imQueryStreamLabelRec;
```

| 成员 | 描述 |
| --- | --- |
| `privatedata` | 从 `imGetInfo8` 或 `imGetPrefs8` 收集的实例数据。 |
| `prefs` | 从 `imGetPrefs8`（设置对话框信息）收集的剪辑源设置数据。 |
| `inStreamIdx` | 需要标记的流的 ID。 |
| `outStreamLabel` | 使用 [String Suite](../../universals/sweetpea-suites#string-suite) 分配的流标签。 |

---

## imSaveFileRec8

选择器: [imSaveFile8](../selector-descriptions#imsavefile8)

描述要保存的文件。

```cpp
typedef struct {
 void *privatedata;
 csSDK_int32 *prefs;
 const prUTF16Char* sourcePath;
 const prUTF16Char* destPath;
 char move;
 importProgressFunc progressCallback;
 void *progressCallbackID;
} imSaveFileRec8;
```

| 成员 | 描述 |
| --- | --- |
| `privatedata` | 从 `imGetInfo8` 或 `imGetPrefs8` 收集的实例数据。 |
| `prefs` | 从 `imGetPrefs8`（设置对话框信息）收集的剪辑设置数据。 |
| `sourcePath` | 要保存的文件的完整路径。 |
| `destPath` | 文件应保存到的完整路径。 |
| `move` | 如果非零，这是一个移动操作，复制完成后可以删除原始文件（sourcePath）。 |
| `progressCallback` | 要重复调用的函数，以提供进度并检查用户是否取消。可能是一个 NULL 指针，因此在调用之前请确保函数指针有效。 |
| `progressCallbackID` | 传递给 `progressCallback`。 |

---

## imSourceVideoRec

选择器: [imGetSourceVideo](../selector-descriptions#imgetsourcevideo), `aiInitiateAsyncRead`, `aiGetFrame`

描述请求的帧，将在 `outFrame` 中传递回来。

```cpp
typedef struct {
 void *inPrivateData;
 csSDK_int32 currentStreamIdx;
 PrTime inFrameTime;
 imFrameFormat *inFrameFormats;
 csSDK_int32 inNumFrameFormats;
 bool removePulldown;
 PPixHand *outFrame;
 void *prefs;
 csSDK_int32 prefsSize;
 PrSDKString selectedColorProfileName;
 PrRenderQuality inQuality;
 imRenderContext inRenderContext;
 PrSDKColorSpaceID opaqueColorSpaceIdentifier;
} imSourceVideoRec;
```

| 成员 | 描述 |
| --- | --- |
| `inPrivateData` | 在 `imGetInfo8` 或 `imGetPrefs8` 期间收集的实例数据。 |
| `currentStreamIdx` | CS6 新增。如果剪辑有多个流（用于立体视频或其他用途），此 ID 用于区分它们。 |
| `inFrameTime` | 请求的帧时间。 |
| `inFrameFormats` | 请求的帧格式数组，按优先级排序。如果为 NULL，则任何格式均可接受。 |
| `inNumFrameFormats` | `inFrameFormats` 中的帧格式数量。 |
| `removePulldown` | 如果为 true，则如果像素格式支持，应移除下拉。 |
| `outFrame` | 分配内存以保存请求的帧，并在此处传递回来。 |
| `prefs` | Premiere Pro 4.1 新增。来自 `imGetPrefs8` 的 prefs 数据。 |
| `prefsSize` | Premiere Pro 4.1 新增。prefs 数据的大小。 |
| `selectedColorProfileName` | Premiere Pro CS5.5 新增。指定导入帧颜色配置文件的字符串。 |
| `inQuality` | Premiere Pro CC 2014 新增。 |
| `inQuality` | Premiere Pro CC 2014 新增。 |
| `inQuality` | Premiere Pro CC 2014 新增。 |

---

## imSubTypeDescriptionRec

选择器: [imGetSubTypeNames](../selector-descriptions#imgetsubtypenames)

Premiere Pro CS3 新增。描述与给定 fourcc 关联的编解码器名称。

```cpp
typedef struct {
 csSDK_int32 subType;
 prUTF16Char subTypeName[256];
} imSubTypeDescriptionRec;
```

---

## imTimeInfoRec8

选择器: [imGetTimeInfo8](../selector-descriptions#imgettimeinfo8) 和 [imSetTimeInfo8](../selector-descriptions#imsettimeinfo8)

描述与剪辑关联的时间码和时间码速率。

```cpp
typedef struct {
 void *privatedata;
 void *prefs;
 char orgtime[18];
 csSDK_int32 orgScale;
 csSDK_int32 orgSampleSize;
 char alttime[18];
 csSDK_int32 altScale;
 csSDK_int32 altSampleSize;
 char orgreel[40];
 char altreel[40];
 char logcomment[256];
 csSDK_int32 dataType;
} imTimeInfoRec;
```

| 成员 | 描述 |
|---|---|
| `privatedata` | 在 `imGetInfo8` 或 `imGetPrefs8` 期间收集的实例数据。 |
| `prefs` | 在 `imGetPrefs8` 期间收集的剪辑源设置数据（设置对话框）。 |
| `orgtime[18]` | 原始时间，格式为小时;分钟;秒;帧，从源卷轴捕获。 |
| | 使用分号表示（对 Premiere）丢帧时间码，例如 "00;00;00;00"。 |
| | 使用冒号表示非丢帧时间码，例如 "00:00:00:00"。 |
| `orgScale` | orgtime 中时间码的时间基准，表示为 scale 除以 sampleSize。 |
| `orgSampleSize` | |
| `alttime[18]` | 替代时间码（可能与源时间码不同），格式如上所述。 |
| `altScale` | alttime 中时间码的时间基准。 |
| `altSampleSize` | |
| `orgreel[40]` | 原始卷轴名称。 |
| `altreel[40]` | 替代卷轴名称。 |
| `logcomment[256]` | 注释字符串。 |
| `dataType` | 当前始终设置为 1，表示 SMPTE 时间码。未来可能会添加更多值。 |

---

## imTrimFileRec8

选择器: [imTrimFile8](../selector-descriptions#imtrimfile8)

描述如何根据导入器在 `imCheckTrim8` 期间返回的信息修剪剪辑。

还提供了更新进度条并检查用户是否取消的回调。

```cpp
typedef struct {
 void *privatedata;
 void *prefs;
 csSDK_int32 trimIn;
 csSDK_int32 duration;
 csSDK_int32 keepAudio;
 csSDK_int32 keepVideo;
 const prUTF16Char *destFilePath;
 csSDK_int32 scale;
 csSDK_int32 sampleSize;
 importProgressFunc progressCallback;
 void *progressCallbackID;
} imTrimFileRec8;
```

| 成员 | 描述 |
|---|---|
| `privatedata` | 在 `imGetInfo8` 或 `imGetPrefs8` 期间收集的实例数据。 |
| `prefs` | 在 `imGetPrefs8` 期间收集的剪辑设置数据（设置对话框）。 |
| `trimIn` | 修剪剪辑的入点，以 scale 和 sampleSize 指定的时间基准表示。 |
| `duration` | 修剪剪辑的持续时间。如果为 0，则请求不修剪剪辑，并保持当前持续时间。 |
| `keepAudio` | 如果非零，则请求在修剪结果中保留音频。 |
| `keepVideo` | 如果非零，则请求在修剪结果中保留视频。 |
| `destFilePath` | 要创建的文件的 Unicode 路径和名称。 |
| `scale` | 视频的帧速率，表示为 scale 除以 sampleSize。 |
| `sampleSize` | |
| `progressCallback` | `importProgressFunc` 回调函数，用于重复调用以提供进度并检查用户是否取消。 |
| | 可能为 NULL 指针，因此在调用前确保函数指针有效。 |
| `progressCallbackID` | 传递给 `progressCallback`。 |

---

## imIndColorSpaceRec

选择器: [imGetIndColorSpace](../selector-descriptions#imgetindcolorspace)

描述媒体的色彩空间。

```cpp
typedef ColorSpaceRec imIndColorSpaceRec;

typedef struct {
 void *privatedata;
 PrSDKColorSpaceType outColorSpaceType;
 RawColorProfileRec ioProfileRec;
 prSEIColorCodesRec outSEICodesRec;
} ColorSpaceRec;
```

| 成员 | 描述 |
|---|---|
| `privatedata` | 私有。 |
| `outColorSpaceType` | 以下之一： |
| | - `kPrSDKColorSpaceType_Undefined` |
| | - `kPrSDKColorSpaceType_ICC` |
| | - `kPrSDKColorSpaceType_LUT` // 14.x 之后请勿使用。 |
| | - `kPrSDKColorSpaceType_SEITags` |
| | - `kPrSDKColorSpaceType_MXFTags` // 请勿使用，不支持。 |
| | - `kPrSDKColorSpaceType_Predefined` |
| `ioProfileRec` | 描述色彩配置文件的结构。 |
| | <pre lang="cpp">csSDK_int32  ioBufferSize;<br/>void*    inDestinationBuffer;<br/>PrSDKString  outName;</pre> |
| `outSEICodesRec` | 使用代码描述色彩空间的结构；用于 H.265、HEVC、AVC 和 ProRes 媒体。 |
| | <pre lang="cpp">csSDK_int32  colorPrimariesCode;<br/>csSDK_int32  transferCharacteristicCode;<br/>csSDK_int32  matrixEquationsCode;<br/>csSDK_int32  bitDepth;<br/>prBool   isFullRange;<br/>prBool   isRGB;</pre> |

## RawColorSpaceRec

选择器: `imGetIndColorSpace`

描述与媒体一起使用的色彩空间。

```cpp
typedef struct
{
 PrSDKColorSpaceType colorSpaceType;
 RawColorProfileRec profileRec; // 用于 ICC 和预定义色彩空间
 prSEIColorCodesRec seiCodesRec; // H-265 代码用于 HEVC、AVC、ProRes
} RawColorSpaceRec;
```

| 成员 | 描述 |
|---|---|
| `colorSpaceType` | 以下之一： |
| | - `kPrSDKColorSpaceType_Undefined` |
| | - `kPrSDKColorSpaceType_ICC` |
| | - `kPrSDKColorSpaceType_LUT` // 14.x 之后请勿使用。 |
| | - `kPrSDKColorSpaceType_SEITags` |
| | - `kPrSDKColorSpaceType_MXFTags` // 请勿使用，不支持。 |
| | - `kPrSDKColorSpaceType_Predefined` |
| `profileRec` | 描述色彩空间的结构。 |
| | <pre lang="cpp">csSDK_int32  ioBufferSize;<br/>void*    inDestinationBuffer;<br/>PrSDKString  outName;</pre> |
| `seiCodesRec` | 描述色彩空间的结构；用于 H.265、HEVC、AVC 和 ProRes 媒体。 |
| | <pre lang="cpp">csSDK_int32  colorPrimariesCode;<br/>csSDK_int32  transferCharacteristicCode;<br/>csSDK_int32  matrixEquationsCode;<br/>csSDK_int32  bitDepth;<br/>prBool   isFullRange;<br/>prBool   isRGB;</pre> |

色彩空间可以通过多种方式描述，类型取决于 `colorSpaceType`。

如果类型为 `kPrSDKColorSpaceType_Predefined` - 色彩空间通过 `PrSDKColorSpaces.h` 中的预定义字符串指定。

如果类型为 `kPrSDKColorSpaceType_ICC` - 色彩空间通过 `profileRec` 中的 ICC 配置文件指定。

如果类型为 `kPrSDKColorSpaceType_SEITags` - 色彩空间通过颜色原色 (C)、传输特性 (T)、矩阵方程 (M) 的枚举代码指定。支持的 C-T-M 枚举在 `PrSDKColorSEICodes.h` 中定义。

---

## EmbeddedLUTRec

选择器: `imGetIndColorSpace`

描述嵌入在媒体中的 LUT。

```cpp
typedef struct
{
 void* privateData;
 RawColorProfileRec lutBlobRec;
 RawColorSpaceRec lutInColorSpaceRec;
 RawColorSpaceRec lutOutColorSpaceRec;
} EmbeddedLUTRec;
```

| 成员 | 描述 |
|---|---|
| `privatedata` | 私有。 |
| `lutBlobRec` | 描述嵌入的 LUT。 |
| `lutInColorSpaceRec` | 描述 LUT 输入色彩空间记录。 |
| `lutOutColorSpaceRec` | 描述 LUT 输出色彩空间记录。 |

---

## imRenderContext

选择器: [imGetSourceVideo](../selector-descriptions#imgetsourcevideo) ([imSourceVideoRec](#imsourcevideorec) 的成员)

描述渲染的上下文；渲染的原因以及使用的速率和比例。

```cpp
typedef struct
{
 imRenderIntent inIntent;
 double inPlaybackRatio;
 double inPlaybackRate;
} imRenderContext;
```

| 成员 | 描述 |
|---|---|
| `inIntent` | 请求渲染的意图。 |
| | - `imRenderIntent_Unknown` (-1) |
| | - `imRenderIntent_Export` 0 |
| | - `imRenderIntent_Stopped` // 14.x 之后请勿使用。 |
| | - `imRenderIntent_Scrubbing` |
| | - `imRenderIntent_Preroll` |
| | - `imRenderIntent_Playing` |
| | - `imRenderIntent_SpeculativePrefetch` |
| | - `imRenderIntent_Thumbnail` // 14.x 之后请勿使用。 |
| | - `imRenderIntent_Analysis` |
| | - `imRenderIntent_ExportPreview` |
| | - `imRenderIntent_ExportProxies` |
| `inPlaybackRatio` | `1.0` 表示全帧速率，较低的值表示播放质量下降。 |
| `inPlaybackRate` | `1.0` 表示 1 倍速前进，`-1.0` 表示 1 倍速后退。 |
