---
title: 返回代码
---
# 返回代码

| 返回代码 | 原因 |
|---|---|
| `imNoErr` | 操作已完成，没有错误。 |
| `imTooWide` | 文件尺寸过大。 |
| `imBadFile` | 文件格式错误。 |
| | 要将不受支持的子类型推迟到较低优先级的导入器，请在 `imOpenFile8` 或 `imGetInfo8` 期间返回此代码。 |
| `imUnsupported` | 不支持的选项。 |
| `imMemErr` | 内存错误。 |
| `imOtherErr` | 未知错误。 |
| `imNoContent` | 没有音频或视频。 |
| `imBadRate` | 音频速率错误。 |
| `imBadCompression` | 压缩错误。 |
| `imBadCodec` | 未找到编解码器。 |
| `imNotFlat` | 未展开的 QuickTime 影片。 |
| `imBadSndComp` | 声音压缩错误。 |
| `imNoTimecode` | 支持时间码，但未找到。 |
| `imMissingComponent` | 缺少打开文件所需的组件。 |
| `imSaveErr` | 保存文件时出错。 |
| `imDeleteErr` | 删除文件时出错。 |
| `imNotFoundErr` | 未找到请求的元数据块。 |
| `imSetFile` | 仅在自定义导入器且需要 Premiere 更改其文件访问信息（例如创建了新路径或文件名）时从 `imGetPrefs8` 返回此代码。 |
| `imIterateStreams` | 从 `imGetInfo8` 返回以指示还有更多流需要描述。 |
| | Premiere 将为下一个流发送 `imGetInfo8`。 |
| `imBadStreamIndex` | 在遍历流后从 `imGetInfo8` 返回以指示没有更多流需要描述。 |
| `imCantTrim` | 如果导入器无法修剪文件，则从 `imCheckTrim` 返回。 |
| `imDiskFull` | 如果空间不足无法完成修剪操作，则从 `imTrimFile8` 返回。 |
| `imDiskErr` | 如果在修剪操作期间发生一般磁盘或 I/O 错误，则从 `imTrimFile8` 返回。 |
| `imFileShareViolation` | 如果由于另一个进程具有独占读取访问权限而无法打开文件，则从 `imOpenFile8` 返回。 |
| `imIterateFrameSizes` | 从 `imGetPreferredFrameSize` 返回，以便再次调用以描述特定像素格式的更多帧大小。 |
| `imMediaPending` | 如果导入器仍在处理文件且无法返回视频帧，则从 `imGetSourceVideo` 或 `imCreateAsyncImporter` 返回。 |
| `imDRMControlled` | 如果文件因受权限管理而无法打开，则从 `imOpenFile8` 返回。 |
| `imActivationFailed` | 组件激活失败（通常由于用户取消）。 |
| | 此代码由 Premiere Elements 使用。 |
| `imFrameNotFound` | CS4 新增。如果导入器找不到请求的帧（通常用于异步导入器），则返回此代码。 |
| `imBadHeader` | CS5 新增。由于标头错误，文件无法打开。 |
| `imUnsupportedCompression` | CS5 新增。文件的压缩类型不受导入器支持。 |
| `imFileOpenFailed` | CS5 新增。导入器无法打开磁盘上的文件。 |
| `imFileHasNoImportableStreams` | CS5 新增。文件没有音频或视频流。 |
| `imFileReadFailed` | CS5 新增。从打开的文件读取失败。 |
| `imUnsupportedAudioFormat` | CS5 新增。导入器无法导入音频格式中的内容。 |
| `imUnsupportedVideoBitDepth` | CS5 新增。文件的视频位深度不受导入器支持。 |
| `imDecompressionError` | CS5 新增。导入器在解压缩音频或视频时遇到错误。 |
| `imInvalidPreferences` | CS5 新增。传递给导入器的偏好设置数据无效。 |
| `inFileNotAvailable` | CS5 新增。如果文件/流因脱机或删除而不再可用，则从 `imQueryContentState` 返回。 |
| `imRequiresProtectedContent` | CS5.5 新增。如果导入器依赖于尚未激活的库，则从 `imInit` 返回。 |
| `imNoCaptions` | CC 新增。如果剪辑没有隐藏字幕，则从 `imInitiateAsyncClosedCaptionScan` 返回，或者在没有更多字幕时从 `imGetNextClosedCaption` 返回。 |
| `imCancel` | 如果用户取消或插件无法打开文件（自定义/合成导入器），则从 `imGetPrefs8` 返回。 |
| `imBadFormatIndex` | 当给定的格式索引超出范围时返回此代码，或者当插件没有更多格式可枚举时从 `imGetIndFormat` 返回。 |
| `imIsCacheable` | 如果插件不需要在每次启动 Premiere 时调用初始化，则从 `imInit` 返回。 |
| | 这将有助于减少应用程序启动时间。 |
