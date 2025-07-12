---
title: Premiere Pro 插件类型
---
# Premiere Pro 插件类型

| 类型 | 描述 |
|---|---|
| [导入器](../../importers/importers) | 将视频和音频媒体导入 Premiere。 |
| | 合成导入器是其中的一个子集，动态合成媒体而无需在磁盘上创建实际文件。 |
| | 自定义导入器，动态合成媒体到磁盘。 |
| [导出控制器](../../export-controllers/export-controllers) | 可以驱动任何导出器生成任何格式的文件并执行自定义后处理操作。 |
| | 希望将 Premiere Pro 与资源管理系统集成的开发者应使用此 API 而不是导出器 API。 |
| [导出器](../../exporters/exporters) | 允许用户将媒体输出到磁盘。 |
| [传输器](../../transmitters/transmitters) | 在播放和编辑期间将视频、音频和隐藏字幕发送到任何外部设备。 |
| [视频滤镜](../../video-filters/video-filters) | **我们强烈建议使用 After Effects SDK 来开发效果插件。Premiere Pro 中包含的大多数效果都是 After Effects 插件。** |
| | 处理一系列视频帧，参数可以随时间动画化。 |
| [GPU 效果与过渡](../../gpu-effects-transitions/gpu-effects-transitions) | 将两个视频源处理为单个目标，随时间变化。 |
| | 此 API 基于 After Effects API，具有某些功能以支持 Premiere Pro 中的过渡功能。 |
| [控制面板](../../control-surfaces/control-surfaces) | 与硬件控制面板接口，支持音频混音、基本传输控制和 Lumetri 颜色面板。 |
| | API 支持与 Premiere Pro 的双向通信，以便电动硬件推子、VU 表等可以与应用程序同步。 |

## 其他支持的插件标准

| 类型 | 描述 |
|---|---|
| Adobe After Effects API | Premiere Pro 支持部分 AE API。 |
| | After Effects SDK 不包含在 Premiere Pro SDK 中。 |
| | After Effects SDK 中包含的 After Effects SDK Guide.pdf 的最后一章包含有关 Premiere Pro 支持 AE API 的已知差异的信息。 |
| VST | 从 CC 开始，Premiere 支持 VST 规范的第 3 版用于音频效果。 |
| | 在 CS6.x 及更早版本中，支持仅限于 2.4 版。 |
| ASIO | ASIO 驱动程序通常与传输插件一起提供，以在编辑、播放和导出到磁带期间提供音频输出。 |
| | 在 CS6 之前，ASIO 驱动程序是支持音频混音器中语音录制音频输入所必需的。在 macOS 上，可能会提供 Core Audio 组件而不是 ASIO 驱动程序。 |
| Core Audio | 仅限 macOS。可以代替 ASIO 驱动程序提供。 |

---

### Adobe 视频和音频应用程序中的插件支持

此图表显示了各种视频和音频应用程序支持的第三方插件。

| | Premiere Pro | After Effects | Media Encoder | Audition | Character Animator | Prelude |
| --- | --- | --- | --- | --- | --- | --- |
| After Effects AEGPs | | X | | | | |
| After Effects 效果 | X | X | | | | |
| After Effects 过渡 | X | | | | | |
| ASIO | X | X | | X | | X |
| 控制面板 | X | | | X | | |
| CoreAudio | X | X | | X | | X |
| Premiere 设备控制器 | X | | | | | |
| Premiere 导出控制器 | X | | | | | |
| Premiere 导出器 | X | X | X | X | | |
| Premiere 导入器 | X | X | X | X | | X |
| Premiere 录制器 | X | | | | | |
| Premiere 传输器 | X | X | | | X | X |
| Premiere 视频滤镜 | X | | | | | |
| QuickTime 编解码器 | X | X | X | X | | X |
| 过渡 | X | | | | | |
| VfW 编解码器 | X | X | X | X | | X |
| VST 音频效果 | X | | | X | | |

---

### Premiere Elements 插件支持

Premiere Elements 使用与 Premiere Pro 相同的核心库来支持插件，尽管 Premiere Elements 是 32 位的，而 Premiere Pro 从 CS5 开始是 64 位的。

| Premiere Elements 版本 | 等效的 Premiere Pro API 版本 |
| --- | --- |
| 12 | CS6 |
| 11 | CS5.5 |
| 10 | CS5.5 |
| 9 | CS5 |
| 8 | CS4 |

在宣传兼容性之前，始终需要在每个应用程序中全面测试插件。

查看 [Premiere Elements 中导出器的指南](../../exporters/additional-details#guidelines-for-exporters-in-premiere-elements) 以了解如何设置导出器以在 Premiere Elements 中使用。

---

### Premiere Pro 插件到底是什么？

Premiere 插件包含一个特定于每个 API 类型的单一入口函数。

插件在 Windows 上是 DLL，在 macOS 上是 Carbon 或 Cocoa 包。

位于 \\Plug-ins[language] 文件夹及其任何子文件夹中的插件将在启动时加载。

插件可以具有私有资源。

每个文件只能解析一个插件，这与 After Effects 和 Photoshop 插件不同，后者可以包含多个入口函数。
