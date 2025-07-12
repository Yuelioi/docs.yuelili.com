---
title: 其他集成可能性
---
# 其他集成可能性

尽管此 SDK 描述了与 After Effects 的大多数集成可能性，但还有一些其他可能性不容忽视。

---

## 脚本编写

脚本编写是一种相对灵活且轻量级的方式，用于在 After Effects 中执行自动化任务。ScriptUI 是一种可以通过自定义对话框和面板提供 UI 集成的方式（也可以参见 [HTML5 面板](#html5-panels)）。在某些情况下，脚本编写可以与插件开发结合使用，特别是当某些功能通过脚本提供而不是通过本文档中描述的 C API 提供时。

在 After Effects 中，脚本编写使用基于 JavaScript 的 ExtendScript 完成。After Effects 包含 ExtendScript 工具包，这是一个方便的界面，用于创建和测试您自己的脚本。脚本可以编译为 .jsxbin 二进制文件，以保护知识产权。

您可以访问 After Effects 脚本指南，并在 Adobe I/O 网站上找到脚本论坛的链接：[https://www.adobe.io/apis/creativecloud/aftereffects.html](https://www.adobe.io/apis/creativecloud/aftereffects.html)

After Effects 可以通过从命令行执行脚本来驱动。在您的脚本中，您可以打开项目并对其运行脚本操作。例如，您可以直接从命令行执行以下语句来运行脚本：

```sh
AfterFX -s "app.quit()"
```

或者您可以执行以下语句来运行包含退出命令的 .jsx 脚本：

```sh
AfterFX -r path_to_jsx_script
```

在 Windows 上，AfterFX.com 是获取控制台反馈的方式，因为 AfterFX.com 是一个命令行应用程序。

---

## HTML5 面板

在 CC 2014 及更高版本中，After Effects 支持 HTML5 面板。它们可以通过 After Effects 中的“窗口 > 扩展 >（您的面板名称）”访问。面板可以像 After Effects 中的任何其他面板一样调整大小和停靠。面板是使用 HTML5、After Effects 脚本和 JavaScript 构建的。您可以从 Adobe I/O 网站下载 After Effects 面板 SDK：[https://www.adobe.io/apis/creativecloud/aftereffects.html](https://www.adobe.io/apis/creativecloud/aftereffects.html)

---

## AERender

与脚本编写密切相关的是 aerender 提供的命令行界面。aerender 主要用于实现自动化渲染，但也可以用于从命令行执行任何脚本命令序列。After Effects 帮助文档中提供了概述：[https://helpx.adobe.com/after-effects/using/automated-rendering-network-rendering.html](https://helpx.adobe.com/after-effects/using/automated-rendering-network-rendering.html)

---

## Premiere Pro 导入器

Premiere Pro 导入器提供了将媒体导入 Adobe Creative Cloud 中大多数应用程序的支持，包括 Premiere Pro、Media Encoder、Prelude 和 Audition。由于这种更广泛的兼容性，除非您需要通过此 SDK 中的 AEIO API 实现与 After Effects 的非常特定的集成，否则我们建议开发 Premiere Pro 导入器。Premiere Pro SDK 可在以下位置获取：[https://www.adobe.io/apis/creativecloud/premierepro.html](https://www.adobe.io/apis/creativecloud/premierepro.html)

MediaCore 导入器插件相对于 AEIO 的一个优势是其优先级系统：最高优先级的导入器首先尝试导入文件，如果特定导入文件不受支持，则次高优先级的导入器将有机会尝试导入，依此类推。

---

## Mercury Transmit

Mercury Transmit 插件用于将视频发送到输出硬件以进行广播质量的监控。发射器在 Adobe Creative Cloud 中的大多数应用程序中受支持，包括 Premiere Pro、After Effects、Prelude 和 Character Animator。Mercury Transmit API 记录在 Premiere Pro SDK 中，可在以下位置获取：[https://www.adobe.io/apis/creativecloud/premierepro.html](https://www.adobe.io/apis/creativecloud/premierepro.html)
