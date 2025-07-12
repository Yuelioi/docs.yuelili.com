---
title: 返回代码
---
# 返回代码

| 返回代码 | 原因 |
| --- | --- |
| `exportReturn_ErrNone` | 操作已完成，没有错误。 |
| `exportReturn_Abort` | 用户中止了导出。 |
| `exportReturn_Done` | 导出正常完成。 |
| `exportReturn_InternalError` | 如果没有其他错误适用，则返回此错误。 |
| `exportReturn_OutOfDiskSpace` | 磁盘空间不足错误。 |
| `exportReturn_BufferFull` | 缓冲区中的偏移量将导致溢出。 |
| `exportReturn_ErrOther` | 越模糊越好，对吧？ |
| `exportReturn_ErrMemory` | 内存不足。 |
| `exportReturn_ErrFileNotFound` | 文件未找到。 |
| `exportReturn_ErrTooManyOpenFiles` | 打开的文件过多。 |
| `exportReturn_ErrPermErr` | 权限违规。 |
| `exportReturn_ErrOpenErr` | 无法打开文件。 |
| `exportReturn_ErrInvalidDrive` | 无效的驱动器。 |
| `exportReturn_ErrDupFile` | 文件名重复。 |
| `exportReturn_ErrIo` | 文件I/O错误。 |
| `exportReturn_ErrInUse` | 文件正在使用中。 |
| `exportReturn_IterateExporter` | 从 `exSelStartup` 返回的值，用于请求导出器迭代。 |
| `exportReturn_IterateExporterDone` | 从 `exSelStartup` 返回的值，表示没有更多的导出器。 |
| `exportReturn_InternalErrorSilent` | 从 `exSelExport` 返回的错误代码，用于在将控制权返回给主机之前在屏幕上显示自定义错误消息。 |
| `exportReturn_ErrCodecBadInput` | 视频编解码器拒绝了输入格式。 |
| `exportReturn_ErrLastErrorSet` | 导出器正在使用 [错误套件](../../universals/sweetpea-suites#error-suite) 返回错误。 |
| `exportReturn_ErrLastWarningSet` | 导出器正在使用 [错误套件](../../universals/sweetpea-suites#error-suite) 返回警告。 |
| `exportReturn_ErrLastInfoSet` | 导出器正在使用 [错误套件](../../universals/sweetpea-suites#error-suite) 返回信息。 |
| `exportReturn_ErrExceedsMaxFormatDuration` | 导出器（或主机）认为导出的持续时间过长。 |
| `exportReturn_VideoCodecNeedsActivation` | 当前的视频编解码器未激活，无法使用。 |
| `exportReturn_AudioCodecNeedsActivation` | 当前的音频编解码器未激活，无法使用。 |
| `exportReturn_IncompatibleAudioChannelType` | 请求的音频通道与源音频不兼容。 |
| `exportReturn_IncompatibleVideoCodec` | 新增于CS5。用户尝试加载带有无效视频编解码器的预设。 |
| `exportReturn_IncompatibleAudioCodec` | 新增于CS5。用户尝试加载带有无效音频编解码器的预设。 |
| `exportReturn_ParamButtonCancel` | 新增于CS5.5。如果用户通过按下取消按钮取消了设置对话框，则从 `exSelParamButton` 返回此值。 |
| `exportReturn_ErrMediaFormat` | 写入媒体格式时遇到错误。 |
| `exportReturn_ErrVideoEncoderCreation` | 创建视频编码器时遇到错误。 |
| `exportReturn_ErrAudioEncoderConfiguration` | 配置音频编码器时遇到错误。 |
| `exportReturn_ErrVideoEncoderConfiguration` | 配置视频编码器时遇到错误。 |
| `exportReturn_ErrInvalidPixelFormat` | 像素格式与输出格式不兼容。 |
| `exportReturn_ErrOutputBuffer` | 创建输出缓冲区时遇到错误。 |
| `exportReturn_ErrInputBuffer` | 访问输入缓冲区时遇到错误。 |
| `exportReturn_ErrAudioEncoder` | 音频编码过程中遇到错误。 |
| `exportReturn_ErrVideoEncoder` | 视频编码过程中遇到错误。 |
| `exportReturn_ErrMuxer` | 混流过程中遇到错误。 |
| `exportReturn_ErrVersion` | 由于版本问题遇到错误。 |
| `exportReturn_ErrColorSpace` | 指定的颜色空间与输出格式不兼容。 |
| `exportReturn_ErrVideoEncoderAdaptor` | 使用视频编码适配器时遇到错误。 |
| `exportReturn_ErrPixelBufferCreation` | 创建像素缓冲区时遇到错误。 |
| `exportReturn_ErrPixelBufferLock` | 锁定缓冲区时遇到错误。 |
| `exportReturn_ErrPixelBufferPlanarFormat` | 像素缓冲区平面格式遇到错误。 |
| `exportReturn_ErrPixelBufferBytesMatch` | 像素缓冲区内的字节匹配遇到错误。 |
| `exportReturn_ErrPixelBufferUnlock` | 解锁缓冲区时遇到错误。 |
| `exportReturn_ErrPixelBufferException` | 访问缓冲区时遇到异常错误。 |
| `exportReturn_ErrPixelBufferAppend` | 追加到像素缓冲区时遇到错误。 |
| `exportReturn_Unsupported` | 不支持的选项。 |
