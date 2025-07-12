---
title: 选择器描述
---
# 选择器描述

本节简要概述每个选择器，并重点介绍实现问题。

更多实现细节请参见本章末尾。

## imInit

- param1 - [imImportInfoRec\*](../structure-descriptions#imimportinforec)
- param2 - `unused`

在应用程序启动时发送。

在 `imImportInfoRec` 中描述导入器的功能；所有选项默认均为 `false`。

`imIndFormatRec.flags` 中类似命名的标志已过时，不应使用。

如果导入器有设置对话框，请将 `hasSetup` 设置为 `kPrTrue`，并将 `setupOnDblClk` 设置为 `kPrTrue`，以便在用户双击项目面板中的文件时显示该对话框；即使未显示设置对话框，Premiere 也会丢弃为此设置导入的文件生成的任何预览文件。

如果插件不需要在每次启动 Premiere 时调用初始化，请从 `*imInit` 返回 `imIsCacheable`。

这将有助于减少应用程序启动时间。

### 合成导入器

将 `noFile` 设置为 `kPrTrue` 表示导入器是合成的。

将 `addToMenu` 设置为 `kPrTrue` 以将导入器添加到“文件 > 新建”菜单中。

### 自定义导入器

要创建自定义导入器，必须设置以下功能。

有关自定义导入器的更多信息，请参见附加详细信息。

```cpp
noFile = kPrTrue;
hasSetup = kPrTrue;
canOpen = kPrTrue;
canCreate = kPrTrue;
addToMenu = imMenuNew;
```

---

## imShutdown

- param1 - `unused`
- param2 - `unused`

释放所有资源并执行任何其他必要的清理；在 Premiere 退出时发送。

---

## imGetIndFormat

- param1 - `(int) index`
- param2 - [imIndFormatRec\*](../structure-descriptions#imindformatrec)

在 `imInit` 之后立即重复发送；通过填充 `imIndFormatRec` 枚举插件支持的文件类型。

完成后，返回 `imBadFormatIndex`。

`imIndFormatRec.flags` 已过时，不应使用。

### 合成导入器选择器

由于它们没有文件，合成导入器只需响应其资源中建立的文件类型。

为每种合成文件类型创建一个单独的插件。

---

## imGetSupports8

- param1 - `unused`
- param2 - `unused`

支持 Premiere Pro 2.0 API（及更高版本）的插件必须返回 `malSupports8`。

---

## imGetSupports7

- param1 - `unused`
- param2 - `unused`

支持 Premiere Pro 1.0 API（及更高版本）的插件必须返回 `malSupports7`。

---

## imGetInfo8

- param1 - [imFileAccessRec8\*](../structure-descriptions#imfileaccessrec8)
- param2 - [imFileInfoRec8\*](../structure-descriptions#imfileinforec8)

描述剪辑，或如果剪辑有多个流，则描述剪辑的单个流。

在实例化特定文件时调用。

导入器检查文件有效性，可选地分配文件实例数据，并通过填充 `imFileInfoRec8` 描述正在导入的文件的属性。

### 合成导入器

您可以创建静态帧、设定时长的影片或“无限”长度的影片，但一旦导入后无法更改合成文件的属性。

---

## imCloseFile

- param1 - [imFileRef\*](../structure-descriptions#imfileref)
- param2 - `(void*) PrivateData**`

指定的文件不再需要；释放 `privateData`。

仅在 `imGetInfo8` 期间分配了 `privateData` 时发送。

---

## imGetIndPixelFormat

- param1 - `(int) index`
- param2 - [imIndPixelFormatRec\*](../structure-descriptions#imindpixelformatrec)

新的可选选择器，用于枚举特定文件可用的像素格式。

此消息将重复发送，直到返回所有格式。

像素格式应按导入器支持的首选顺序返回。

枚举所有格式后，导入器应返回 `imBadFormatIndex`。

如果仅支持 *yawn* BGRA_4444_8u，则应在第一次调用时返回 `imUnsupported`。

您应该支持哪些像素格式？保持真实。

只需返回与文件中存储的数据最匹配的像素格式。

如果解码为两种或更多格式的速度大致相同，则声明支持两者，但优先选择更紧凑的像素格式，以节省内存和带宽。

---

## imGetPreferredFrameSize

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imPreferredFrameSizeRec\*](../structure-descriptions#impreferredframesizerec)

提供导入器首选的帧大小。

---

## imSelectClipFrameDescriptor

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imClipFrameDescriptorRec\*](../structure-descriptions#imclipframedescriptorrec)

Premiere Pro CC 2014 新增。

如果导入器可以提供多种格式，请在此处描述它将提供的格式。

这允许导入器根据启用的硬件和其他源设置（如 HDR）更改像素格式。

---

## imGetSourceVideo

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imSourceVideoRec\*](../structure-descriptions#imsourcevideorec)

获取主机的未缩放视频帧。

如果在 `imGetInfo8` 期间将 `supportsGetSourceVideo` 设置为 `true`，则会发送此选择器而不是 `imImportImage`。

---

## imCreateAsyncImporter

- param1 - [imAsyncImporterCreationRec\*](../structure-descriptions#imasyncimportercreationrec)
- param2 - `unused`

使用提供的数据创建异步导入器对象，并将其存储在 `imAsyncImporterCreationRec` 中。

---

## imImportImage

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imImportImageRec\*](../structure-descriptions#imimportimagerec)

:::note
在大多数情况下，`imGetSourceVideo` 是更好的选择。
:::

在走这条路之前，请先阅读此处的讨论。

向主机提供一帧视频；用像素数据填充 `imImportImageRec` 缓冲区，或者（如果您在 `imInit` 期间将 `canDraw` 设置为 `true`）使用平台特定的调用在提供的窗口中绘制到屏幕上。

您必须缩放图像数据以适应窗口；Premiere 依赖导入模块提供正确缩放的帧。

---

## imImportAudio7

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imImportAudioRec7\*](../structure-descriptions#imimportaudiorec7)

使用新的 `imAudioInfoRec7` 替换 `imImportAudio`。

调用以使用新的 32 位浮点、非交错音频格式导入音频。

用 `imImportAudioRec7->size` 中指定的采样帧数填充 `imImportAudioRec7->buffer`，从 `imImportAudioRec7->position` 开始。

始终返回 32 位浮点、非交错采样，如 [Universals](../../universals/universals) 中所述。

您可以使用 [Audio Suite](../../universals/sweetpea-suites#audio-suite) 中的调用进行一些常见转换。

---

## imGetPrefs8

- param1 - [imFileAccessRec8\*](../structure-descriptions#imfileaccessrec8)
- param2 - [imGetPrefsRec\*](../structure-descriptions#imgetprefsrec)

仅在剪辑文件类型使用 Premiere 中的设置对话框时发送。

当用户导入（或创建，如果是合成的）您的类型的文件时，或双击现有剪辑时，Premiere 会发送此选择器。

您必须在 `imInit` 期间将 `hasSetup` 设置为 `true` 才能接收此选择器。

存储首选项是一个两步过程。

如果 `imGetPrefsRec.prefs` 中的指针为 `NULL`，请将 `prefsLength` 设置为首选项结构的大小并返回 `imNoErr`。

Premiere 会再次发送 `imGetPrefs`；显示您的对话框，并将首选项指针传递回 `imGetPrefsRec.prefs`。

从 Premiere Pro 1.5 开始，导入器可以从当前剪辑或时间轴位置下方的时间轴获取帧。

这对于标题插件很有用。

使用 `getPreviewFrameEx` 回调与 `imGetPrefsRec` 中 `TDB_TimeRecord` `tdbTimelocation` 提供的时间。

### 合成导入器

合成导入器可以通过更改 `imFileAccessRec8` 的 `newfilename` 成员来指定可显示的名称。

第一次发送此选择器时，`imGetPrefsRec.timelineData` 虽然非空，但包含垃圾数据，不应使用。

只有在用户将剪辑放入时间轴并双击它时，它才会包含有效信息。

### 自定义导入器

自定义导入器应在成功创建新文件后返回 `imSetFile`，并将文件访问信息存储在 `imFileAccessRec8` 中。

Premiere 将使用此数据要求导入器打开它创建的文件。

有关自定义导入器的更多信息，请参见附加详细信息。

---

## imOpenFile8

- param1 - [imFileRef\*](../structure-descriptions#imfileref)
- param2 - [imFileOpenRec8\*](../structure-descriptions#imfileopenrec8)

打开文件并将其句柄提供给 Premiere。

仅在 `imInit` 期间将 `canOpen` 设置为 `true` 时发送此选择器；如果您生成子文件，需要在 Premiere 会话期间具有读写访问权限，或使用自定义文件系统，请执行此操作。

如果您响应此选择器，则还必须响应 `imQuietFile` 和 `imCloseFile`。

您可能还需要响应 `imDeleteFile` 和 `imSaveFile`；请参见附加详细信息。

在 `imCloseFile` 期间关闭任何子文件。

如果打开的文件数量不等于一个，则打开自己文件的导入器应使用新的导入器文件管理器套件指定它们在 `imOpenFile8` 和 `imQuietFile` 之间保持打开的文件数量。

不打开自己文件的导入器，或仅打开单个文件的导入器不应使用此套件。

Premiere 的文件管理器现在会跟踪导入器保持打开的文件数量，并在打开太多文件时通过关闭最近最少使用的文件来限制同时打开的文件数量。

在 Windows 上，这有助于内存使用，但在 Mac OS 上，这解决了打开太多文件时可能出现的整类错误。

---

## imQuietFile

- param1 - [imFileRef\*](../structure-descriptions#imfileref)
- param2 - `(void*) PrivateData**`

关闭 `imFileRef` 中的文件，并释放与其关联的任何硬件资源。

仅在 `imInit` 期间将 `canOpen` 设置为 `true` 时响应此选择器。

静默的文件已关闭（在操作系统级别），但 Premiere 会维护关联的 `privateData`。

不要在响应 `imQuietFile` 时释放 `privateData`；在 `imCloseFile` 期间执行此操作。

---

## imSaveFile8

- param1 - [imSaveFileRec8\*](../structure-descriptions#imsavefilerec8)
- param2 - `unused`

保存 `imSaveFileRec8` 中指定的文件。

仅在 `imInit` 期间将 `canOpen` 设置为 `true` 时发送。

---

## imDeleteFile

- param1 - [imDeleteFileRec\*](../structure-descriptions#imdeletefilerec)
- param2 - `unused`

仅在您有与文件关联的子文件或相关文件时请求此选择器（通过在 `imInit` 期间将 `canDelete` 设置为 `true`）。

如果每个剪辑只有一个文件，则不需要删除自己的文件。

编号的静态文件导入器不需要响应此选择器；每个文件都是单独处理的。

---

## imCalcSize8

- param1 - [imCalcSizeRec\*](../structure-descriptions#imcalcsizerec)
- param2 - [imFileAccessRec8\*](../structure-descriptions#imfileaccessrec8)

在 Premiere 修剪剪辑之前调用，以获取剪辑使用的磁盘大小。

如果导入器将 `imImportInfoRec.canCalcSizes` 设置为非零，则会调用此选择器。

如果导入器使用表示为 Premiere 的一个顶级文件的文件树，则应支持此调用。

导入器应计算文件的修剪大小或当前大小并返回。

如果 `trimIn` 和 `duration` 设置为零，Premiere 正在请求文件的当前大小。

如果 `trimIn` 和 `duration` 是有效值，Premiere 正在请求修剪大小。

---

## imCheckTrim8

- param1 - [imCheckTrimRec\*](../structure-descriptions#imchecktrimrec)
- param2 - [imFileAccessRec8\*](../structure-descriptions#imfileaccessrec8)

在 Premiere 修剪剪辑之前调用，以检查剪辑是否可以在指定的边界修剪。

传入 `imCheckTrimRec` 和 `imFileAccessRec`。

导入器检查文件的建议修剪大小，如果文件只能在某些位置修剪（例如 MPEG 文件中的 GOP 边界），则可以更改请求的入点和持续时间为新值。

如果导入器更改了入点和持续时间，则新值必须包括原始修剪请求中请求的所有材料。

如果导入器不需要更改入点和持续时间，则可以返回 `imUnsupported`，或返回 `imNoErr` 并且不更改入点/持续时间字段。

如果导入器不希望修剪文件（可能是因为修剪后音频或视频会降级），则可以返回 `imCantTrim`，修剪操作将失败，文件将被复制。

对于同时具有音频和视频的文件，此选择器将发送多次。

第一次，`imCheckTrimRec` 将同时设置 `keepAudio` 和 `keepVideo` 为非零值，修剪边界将代表整个文件，Premiere 正在询问文件是否可以修剪。

如果导入器返回错误，则不会再次调用。

第二次，`imCheckTrimRec` 将设置 `keepAudio` 为非零值，修剪边界将代表音频时间基中的音频入点和出点，Premiere 正在询问音频是否可以在这些边界修剪。

第三次，`imCheckTrimRec` 将设置 `keepVideo` 为非零值，修剪边界将代表视频时间基中的视频入点和出点，Premiere 正在询问视频是否可以在这些边界修剪。

如果视频或音频边界超出其他边界，Premiere 将在最远的边界修剪文件。

---

## imTrimFile8

- param1 - [imFileAccessRec8\*](../structure-descriptions#imfileaccessrec8)
- param2 - [imTrimFileRec8\*](../structure-descriptions#imtrimfilerec8)

在 Premiere 修剪剪辑时调用。

传入 `imFileAccessRec8` 和 `imTrimFileRec8`。

如果在修剪期间发生错误，可能会返回 `imDiskFull` 或 `imDiskErr`。

提供当前文件、入点和新持续时间以及目标文件路径。

如果文件有视频和音频，则修剪时间在视频的时间基中。

对于仅音频，修剪时间在音频时间基中。

一个简单的回调和 `callbackID` 传递给 `imTrimFile8` 和 `imSaveFile8`，允许插件查询用户是否取消了操作。

如果非零（并且它们可以为 `nil`），则应调用回调指针以检查是否取消。

回调函数将返回 `imProgressAbort` 或 `imProgressContinue`。

---

## imCopyFile

- param1 - [imCopyFileRec\*](../structure-descriptions#imcopyfilerec)
- param2 - `unused`

在使用项目管理器执行复制操作时，`imCopyFile` 会发送给设置了 `imImportInfoRec` 可以复制的导入器，而不是 `imSaveFile`。

导入器应维护原始文件的数据，而不是在从选择器返回时维护副本。

---

## imRetargetAccelerator

- param1 - [imAcceleratorRec\*](../structure-descriptions#imacceleratorrec)
- param2 - `unused`

当项目管理器复制媒体及其加速器时，此选择器提供了更新加速器以引用复制的媒体的机会。

---

## imQueryDestinationPath

- param1 - [imQueryDestinationPathRec\*](../structure-descriptions#imquerydestinationpathrec)
- param2 - `unused`

CS5 新增。

这允许插件修改将用于修剪剪辑的路径，以便修剪的项目使用正确的路径写入。

---

## imInitiateAsyncClosedCaptionScan

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imInitiateAsyncClosedCaptionScanRec\*](../structure-descriptions#iminitiateasyncclosedcaptionscanrec)

CC 新增。

为导入器提供机会，分配在扫描剪辑中嵌入的任何隐藏字幕期间使用的私有数据。

如果没有隐藏字幕，返回 `imNoCaptions`。

---

## imGetNextClosedCaption

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imGetNextClosedCaptionRec\*](../structure-descriptions#imgetnextclosedcaptionrec)

CC 新增。

迭代调用，每次要求导入器提供剪辑中嵌入的单个隐藏字幕。

返回最后一个隐藏字幕后，返回 `imNoCaptions` 以表示扫描结束。

---

## imCompleteAsyncClosedCaptionScan

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imCompleteAsyncClosedCaptionScanRec\*](../structure-descriptions#imcompleteasyncclosedcaptionscanrec)

CC 新增。

调用以清理在获取剪辑中嵌入的隐藏字幕时使用的任何临时数据，并查看扫描是否完成无误。

---

## imAnalysis

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imAnalysisRec\*](../structure-descriptions#imanalysisrec)

在 `imAnalysisRec` 中提供有关文件的信息；当用户查看文件的属性对话框时发送。

Premiere 显示一个包含文件信息的对话框，包括您提供的文本。

---

## imDataRateAnalysis

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imDataRateAnalysisRec\*](../structure-descriptions#imdatarateanalysisrec)

为 Premiere 提供文件的数据速率分析。

当用户在属性对话框中按下“数据速率”按钮时发送，并且仅在 *imGetInfo* 期间返回的 imFileInfoRec 中的 hasDataRate 为 true 时启用。

Premiere 根据提供的数据生成数据速率分析图。

---

## imGetTimeInfo8

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imTimeInfoRec8\*](../structure-descriptions#imtimeinforec8)

读取文件中嵌入的任何时间码数据。

取代 `imGetTimeInfo`。

---

## imSetTimeInfo8

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imTimeInfoRec8\*](../structure-descriptions#imtimeinforec8)

在捕获完成后发送，其中时间码由记录器或设备控制器提供。

使用此功能将时间码数据和时间码速率写入文件。

有关 Premiere 中时间的更多信息，请参阅 [Universals](../../universals/universals)。

取代 `imSetTimeInfo`。

时间码速率对于具有时间码但没有隐式帧速率的文件，或者采样速率可能与时间码速率不同的文件非常重要。

例如，从磁带捕获的音频使用视频的帧速率作为时间码，尽管其采样速率不等于时间码速率。

另一个例子是从磁带捕获的静止图像，可以标记时间码，但没有媒体帧速率。

---

## imGetFileAttributes

- param1 - [imFileAttributesRec\*](../structure-descriptions#imfileattributesrec)

可选。

`在 imFileAttributesRec 中传回创建日期戳。`

---

## imGetMetaData

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imMetaDataRec\*](../structure-descriptions#immetadatarec)

调用以获取由四字符代码指定的元数据块。

如果 imMetaDataRec->buffer 为 null，插件应将 buffersize 设置为所需的缓冲区大小并返回 imNoErr。

Premiere 将再次调用，并已分配适当的缓冲区。

---

## imSetMetaData

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imMetaDataRec\*](../structure-descriptions#immetadatarec)

调用以添加由四字符代码指定的元数据块。

---

## imDeferredProcessing

- param1 - [imDeferredProcessingRec\*](../structure-descriptions#imdeferredprocessingrec)
- param2 - `未使用`

描述剪辑上延迟处理的当前进度。

---

## imGetAudioChannelLayout

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imGetAudioChannelLayoutRec\*](../structure-descriptions#imgetaudiochannellayoutrec)

CC 新增。

调用以获取文件中的音频通道布局。

---

## imGetPeakAudio

- param1 - [imFileRef](../structure-descriptions#imfileref)
- param2 - [imPeakAudioRec\*](../structure-descriptions#impeakaudiorec)

可选选择器允许 Premiere 直接从导入器获取音频峰值数据。

这用于超过五分钟的合成剪辑。

提供峰值数据可以显著提高用户在源监视器中查看剪辑的音频波形时的波形渲染性能。

提供的值是 `浮点数`，幅度范围为 0.0 到 1.0。有一个数组，其中包含导入器为此流报告的每个音频通道的 `float *` 数组。`float *` 指向 `float[inNumSampleFrames]`，需要由导入器填充。`inSampleRate` 是返回数据的采样率；在 `inNumSampleFrame = 1000` 和 `inSampleRate = 10` 的情况下，导入器将为每个通道填充 1000 个最小值和 1000 个最大值，每秒原始音频有 10 个值。

---

## imQueryContentState

- param1 - [imQueryContentStateRec\*](../structure-descriptions#imquerycontentstaterec)
- param2 - `未使用`

CS5 新增。

这用于流式导入器和基于文件夹的导入器（P2、XDCAM 等），这些导入器具有多个文件组成内容。

如果导入器不支持选择器，则主机检查主文件的最后修改时间。

---

## imQueryStreamLabel

- param1 - [imQueryStreamLabelRec\*](../structure-descriptions#imquerystreamlabelrec)
- param2 - `未使用`

CS6 新增。

这用于立体声导入器以指定哪些流 ID 代表左眼和右眼。

---

## imGetSubTypeNames

- param1 - `(csSDK_int32) fileType`
- param2 - [imSubTypeDescriptionRec\*](../structure-descriptions#imsubtypedescriptionrec)

After Effects CS3 新增的可选选择器。

截至 CS4，此信息仍未在 Premiere Pro 中使用，但在 After Effects 中用于在项目面板中显示编解码器名称。

导入器应填写提供的特定子类型四字符代码的编解码器名称。

此选择器将重复发送，直到请求所有子类型的名称。

`imSubTypeDescriptionRec` 必须由导入器分配，并由插件主机释放。

---

## imGetIndColorProfile

- param1 - `(int) index`
- param2 - [imIndColorProfileRec\*](../structure-descriptions#imindcolorprofilerec)

仅在导入器将 `imImageInfoRec.colorProfileSupport` 设置为 `imColorProfileSupport_Fixed` 时发送。

此选择器迭代发送，以便导入器提供剪辑支持的每个颜色配置文件的描述。

描述完所有颜色配置文件后，返回非零值。

---

## imGetIndColorSpace

- param1 - `(int) index`
- param2 - [imIndColorSpaceRec\*](../structure-descriptions#imindcolorspacerec)

这是用于枚举媒体颜色空间的新选择器。

仅在导入器将 `imImageInfoRec.colorSpaceSupport` 设置为 `imColorSpaceSupport_Fixed` 时发送。

此选择器迭代发送，以便导入器提供剪辑支持的每个颜色空间的描述。

描述完所有颜色空间后，返回非零值。

---

## imQueryInputFileList

- param1 - [imQueryInputFileListRec\*](../structure-descriptions#imqueryinputfilelistrec)
- param2 - `未使用`

After Effects CS6 新增；未在 Premiere Pro 中使用。

如果导入器支持使用多个文件的媒体（即具有用于元数据的单独文件，或单独的视频和音频文件的文件结构），这是导入器指定其所有源文件的方式，以支持 After Effects 中的“收集文件”功能。

在 `imImportInfoRec` 中，新成员 `canProvideFileList` 指定导入器是否可以提供所有文件的列表以进行复制操作。

如果导入器未实现此选择器，主机将假定媒体仅使用原始导入媒体路径中的单个文件。

---

## imGetEmbeddedLUT

这是用于枚举媒体中嵌入的 LUT 的选择器。

- param1 - `(int) index`.
- param2 - [EmbeddedLUTRec\*](../structure-descriptions#embeddedlutrec)

如果导入器报告其具有嵌入的 LUT，则发送。第一次调用时，inDestinationBuffer 将为 NULL。填写缓冲区所需的大小，设置正确的空间类型，Premiere Pro 将使用足够的内存再次调用您的导入器。
