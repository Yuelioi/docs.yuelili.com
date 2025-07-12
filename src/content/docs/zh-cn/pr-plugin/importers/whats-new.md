---
title: 新功能
---
# 新功能

## Premiere Pro CC 2019 (13.0) 中的新功能

我们已开始在 Premiere Pro 的 API 中添加色彩空间支持，首先从导入器开始。

添加了 API `AddFrameToCacheWithColorSpace()` 和 `GetFrameFromCacheWithColorSpace()`，它们将取代 `AddFrameToCacheWithColorProfile2()` 和 `GetFrameFromCacheWithColorProfile2()`。

---

## Premiere Pro CC 2014 中的新功能

导入器现在可以选择它们渲染的格式，这允许导入器根据启用的硬件和其他剪辑源设置（如 HDR）更改像素格式和质量。为了处理协商，请实现 `imSelectClipFrameDescriptor`。

`imSourceVideoRec` 现在包含一个质量属性。[PPix Cache Suite](../../universals/sweetpea-suites#ppix-cache-suite) 现在为版本 6，添加了 `AddFrameToCacheWithColorProfile2()` 和 `GetFrameFromCacheWithColorProfile2()`，它们与版本 5 中添加的相同，但增加了一个 PrRenderQuality 参数。

`imFileInfoRec8.highMemUsage` 不再受支持。

---

## Premiere Pro CC 2013 年 10 月版本中的新功能

`imInitiateAsyncClosedCaptionScanRec` 现在提供了额外的字段，供导入器填写所有字幕的估计持续时间。这对于某些嵌入字幕包含许多空数据帧的情况非常有用。

---

## Premiere Pro CC 中的新功能

从 CC 开始，导入器可以支持嵌入在源媒体中的隐藏字幕。请注意，Premiere Pro 还可以导入和导出与任何媒体文件一起的旁字幕文件（例如 .mcc、.scc 或 .xml），无论媒体文件格式如何。这不需要导入器端进行任何特定工作。导入器只需要在支持嵌入隐藏字幕时添加支持。

导入器现在可以支持超出基本单声道、立体声和 5.1 的音频，而无需实现多个流（现有导入器无需更新）。导入器通过实现新的 `imGetAudioChannelLayout` 选择器来指定通道布局。否则，通道布局将被假定为离散的。

剪辑首选项现在通过 `imIndPixelFormatRec` 传递，以便导入器可以根据剪辑源设置选择返回不同的像素格式。

---

## Premiere Pro CS6.0.2 中的新功能

此版本通过添加新标志 `imFileInfoRec8.mayBeGrowing` 增加了对增长文件的支持。

---

## Premiere Pro CS6 中的新功能

导入器现在可以将立体素材作为具有单独左右通道的单个剪辑导入。

通过一些额外的工作，导入器现在可以支持增长文件。增长文件的刷新率由用户在首选项 > 媒体 > 增长文件中设置。导入器应使用 Importer File Manager Suite 中的新调用 `GetGrowingFileRefreshInterval()` 获取刷新率。调用 `RefreshFileAsync()` 以刷新文件。

添加了一个新的选择器 `imQueryInputFileList`，以支持 After Effects 中的收集文件功能，适用于使用多个文件的文件类型。在 imImportInfoRec 中，一个新成员 `canProvideFileList` 指定导入器是否可以为复制操作提供所有文件的列表。如果导入器未实现此选择器，主机将假定媒体仅使用原始导入媒体路径中的单个文件。

Media Accelerator Suite 现在为版本 4。`FindPathInDatabaseAndValidateContentState` 提供了一种查找现有媒体加速器的新方法，确保它们是最新的。

导入器现在可以选择是否在逐个剪辑的基础上提供峰值音频数据。

导入器范围的设置仍然保留在 `imImportInfoRec.canProvidePeakAudio` 中，但导入器可以通过适当设置 `imFileInfoRec8.canProvidePeakAudio` 来覆盖一般设置。

---

## Premiere Pro CS5.5 中的新功能

导入器现在可以在 After Effects 中运行时支持色彩管理。导入器应将 `imImageInfoRec.colorProfileSupport` 设置为 `imColorProfileSupport_Fixed`，然后使用新的 `imGetIndColorProfile` 选择器描述剪辑支持的颜色配置文件。在导入帧时，在 `imSourceVideoRec.selectedColorProfileName` 中指定颜色配置文件。[PPix Cache Suite](../../universals/sweetpea-suites#ppix-cache-suite) 也已更新以区分颜色配置文件。

新的 `canProvidePeakAudio` 标志允许导入器通过响应 `imGetPeakAudio` 提供峰值音频数据。

新的返回值 `imRequiresProtectedContent` 允许导入器在其依赖的库未激活时被禁用。

---

## Premiere Pro CS5 中的新功能

当导入器的设置对话框打开时，导入器现在可以访问源剪辑的分辨率、像素宽高比、时间基和音频采样率，这些信息在 `imGetPrefsRec` 中。

自定义导入器现在可以使用 Importer File Manager Suite 中的新调用 `RefreshFileAsync()`，以便在 `imGetPrefs8` 中修改剪辑后更新剪辑。

添加了两个新的选择器。

- `imQueryDestinationPath` 允许导入器在修剪或复制文件时更改目标路径。
- `imQueryContentState` 为主机提供了一种检查剪辑状态的替代方法，适用于具有多个源文件的剪辑。

如果剪辑因离线或已删除而不再可用，可以从 `imQueryContentState` 返回新的返回值 `inFileNotAvailable`。

为了方便起见，当文件打开时，导入器可以告诉 Premiere Pro 为导入器的使用保留多少内存，而不是调用 [Memory Manager Suite](../../universals/sweetpea-suites#memory-manager-suite) 中的 ReserveMemory。导入器应在 `imFileOpenRec8.outExtraMemoryUsage` 中传回此值。

提供了几个新的返回值，用于更详细的错误报告：

- `imBadHeader`,
- `imUnsupportedCompression`,
- `imFileOpenFailed`,
- `imFileHasNoImportableStreams`,
- `imFileReadFailed`,
- `imUnsupportedAudioFormat`,
- `imUnsupportedVideoBitDepth`,
- `imDecompressionError`, 和
- `imInvalidPreferences`

---

## Premiere Pro CS4 中的新功能

仅在 CS4 中，导入器从单独的进程中加载和调用。由于在单独的进程中，(1) 所有导入器必须自己处理文件，(2) `privateData` 不再可以从 `imGetPrefs8` 访问，(3) 不再支持压缩帧选择器，如 `imGetCompressedFrame`（现在可以通过使用自定义像素格式和渲染器插件实现）。

要调试导入器，请附加到 `ImporterProcessServer` 进程。还有一个单独的 Importer Process Plugin Loading.log。

所有旧的选择器已被移除，不再受支持。仅在这些旧选择器中使用的所有结构也已移除。

对于已知文件类型，有内置的 XMP 元数据处理器。这些处理器在不通过导入器的情况下读取和写入文件的元数据。`imSetTimeInfo8` 不再被调用，因为这是由该文件类型的 XMP 处理器设置的。

所有基于文件的导入器（不包括合成器）现在需要自己处理文件，而不是由 Premiere Pro 打开文件。`imCallbackFuncs`：`OpenFileFunc` 和 `ReleaseFileFunc` 不再受支持。

由于进程外导入，`privateData` 在 `imGetPrefs8` 期间不可访问，并且已从 `imGetPrefsRec` 中移除。

`imGetFrameInfo`、`imDisposeFrameInfo`、`imGetCompressedFrame` 和 `imDisposeCompressedFrame` 不再受支持。在导入器、渲染器和导出器中支持自定义像素格式是通过从输入到输出传递自定义压缩数据来实现智能渲染的新方法。

新的 `imFrameNotFound` 返回代码。如果导入器找不到请求的帧（通常用于异步导入器），则返回此代码。

Premiere Pro 4.1 中的新功能，导入器首选项现在是 imSourceVideoRec 的一部分，传递给 `imGetSourceVideo` 和异步导入调用。

Premiere Pro 4.1 中的新功能，imFileInfoRec8 中有一个新的文件路径成员。对于音频与视频文件分开的剪辑，请在此处设置文件名，以便可以为 AAF 正确生成 UMID。

---

## Premiere Pro CS3 中的新功能

导入器可以在 imImageInfoRec 中指定剪辑的初始海报帧。

导入器可以在新的 `imGetSubTypeNames` 选择器中指定子类型名称。此选择器在每个 `imGetIndFormat` 之后发送，这为导入器提供了枚举所有已知压缩类型的 fourCC 和显示名称（例如 "Cinepak"）的机会。导入器可以返回 imUnsupported，或者为所有已知的编解码器/子类型创建一个 `imSubTypeDescriptionRec` 记录数组（fourCC 和编解码器名称字符串对）。

打开自己文件的导入器应使用新的 Importer File Manager Suite 指定在 `imOpenFile8` 和 `imQuietFile` 之间保持打开的文件数量，如果数量不等于 1。不打开自己文件的导入器或仅打开单个文件的导入器不应使用此套件。Premiere 的文件管理器现在跟踪导入器保持打开的文件数量，并在打开太多文件时通过关闭最近最少使用的文件来限制同时打开的文件数量。在 Windows 上，这有助于内存使用，但在 Mac OS 上，这解决了当打开太多文件时可能发生的一类错误。

导入器还可以通过设置 `imFileInfoRec8.highMemUsage` 来指定某些文件具有非常高的内存使用率。目前，允许打开此标志设置为 true 的文件数量上限为 5。

导入器现在可以在 `imImageInfoRec.matteColor` 中为预乘 alpha 通道指定任意遮罩颜色。导入器可以在 imImageInfoRec.interpretationUncertain 中声明它们对剪辑的像素宽高比、场类型或 alpha 信息不确定。

对于 Mac OS，imInvalidHandleValue 现在为 -1。

导入器可以通过设置 `imImageInfoRec.canTransform = kPrTrue` 来指定帧的变换矩阵，然后在 `imImportImage` 期间，当 `imImportImageRec.applyTransform` 非零时，使用 `imImportImageRec.transform` 和 `destClipRect` 来计算变换 - 此代码路径目前未被 Premiere Pro 调用。After Effects 使用此调用来导入 Flash 视频。

Premiere Pro 3.1 中的新功能，新的能力标志 `imImportInfoRec.canSupplyMetadataClipName` 允许导入器从元数据设置剪辑名称，而不是文件名。剪辑名称应在 `imFileInfoRec8.streamName` 中设置。这对于某些基于文件的摄像机录制的剪辑非常有用。

Premiere Pro 3.1 中的新功能，新的 `imGetFileAttributes` 选择器允许导入器在新的 imFileAttributesRec 中提供剪辑创建日期。
