---
title: 发射器
---
# 发射器

此 API 提供了将视频、音频和隐藏式字幕推送到外部硬件的支持。用户可以在“首选项 > 播放”中指定发射器。其他插件（如导入器和带有设置预览对话框的效果）可以将视频发送到活动的发射器，从而为硬件监控开辟了新的可能性。Premiere Pro、After Effects（从 CC 2014 开始）和 Character Animator 支持发射插件。

当创建新的发射器实例时，系统会要求其描述希望接收渲染视频的格式。发射器插件可以根据源剪辑或时间线格式请求不同的格式。宿主应用程序将处理所有转换为所需视频格式的操作。例如，发射器实例可能指定它只能处理固定的宽度和高度，但可以处理任何像素格式。除了视频转换外，宿主还负责调度媒体的预取和异步渲染。

发射器可以选择让宿主通过系统的声音驱动程序（ASIO 或 CoreAudio）播放音频。或者，如果发射器希望自己处理音频并将其发送到外部硬件，则可以使用 [Playmod Audio Suite](../suites#playmod-audio-suite) 中的 `GetNextAudioBuffer` 请求音频。

在播放时，宿主会为发射器提供一个时钟回调，发射器必须在每一帧调用该回调以更新宿主的时间。这使得发射器能够协调音频/视频同步。

发射器可以使用 [Captioning Suite](../../universals/sweetpea-suites#captioning-suite) 获取序列的任何隐藏式字幕。

发射器不需要调用 Playmod Device Controller 套件来处理“导出到磁带”功能。这是在播放器级别处理的。

---

## Premiere Pro 24.0 的新功能

增加了对额外音频输出设备的支持。

---

## Premiere Pro CS6.0.2 的新功能

发射器现在可以在 `tmAudioMode.outOutputAudioNames` 中提供字符串来标记其音频通道。这些字符串将用于音频输出映射首选项，而不是默认字符串。
