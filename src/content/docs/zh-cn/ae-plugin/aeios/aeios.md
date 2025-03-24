---
title: aeios
---
# AEIOs

AEIOs 是执行媒体文件导入和/或导出的 AEGP。AEIOs 为给定类型的文件执行 After Effects（或随 After Effects 附带的插件）通常会执行的所有操作。在导入方面，AEIOs 可以打开现有文件，管理文件特定的解释选项，并以 AEGP_SoundWorld 和 PF_EffectWorld 格式向 After Effects 提供文件中的音频和帧。此外，AEIOs 可以交互式地创建文件，向用户询问他们想要的设置，而不是从文件中读取这些设置。在导出方面，AEIOs 可以为渲染队列项创建和管理输出选项，创建输出文件并将帧（由 After Effects 提供为 PF_EffectWorlds）保存到这些文件中。

AEIOs 处理未压缩的视频，像素按 ARGB 顺序从低字节到高字节排列。像素可以是每通道 8 位、16 位或 32 位浮点数。AEIOs 必须自行处理其支持的任何编解码器的压缩/解压缩。

---

## AEIO 还是 AEGP？

AEIOs 向 After Effects 提供像素和音频数据。

如果你正在为表示时间线或项目格式的文件格式编写导入器/导出器（引用 After Effects 或其他已安装的 AEIOs 支持的文件格式），请编写一个 AEGP 并将其命令添加到导入/导出子菜单中。

---

## 使用 AEIO 导入，还是 MediaCore 导入器？

After Effects 支持 MediaCore 导入器插件。MediaCore 是一组源自 Premiere Pro 的共享库；因此，MediaCore API 在 [Premiere Pro SDK](http://ppro-plugin-sdk.aenhancers.com/) 中有描述。

只有 MediaCore 导入器插件支持导入器优先级系统：最高优先级的导入器首先有机会导入文件，如果特定导入的文件不受支持，则次高优先级的导入器将有机会尝试导入它，依此类推。MediaCore 导入器不能将文件导入推迟到 AEIO。因此，如果你的目标是接管 After Effects 已经提供插件的任何文件类型的文件处理，你需要开发一个 MediaCore 导入器插件。

如果上述限制尚未回答你需要构建 AEIO 还是 MediaCore 导入器，那么你可能会希望构建一个 MediaCore 导入器，它可以在包括 Premiere Pro、Media Encoder、Prelude、SpeedGrade 和 Audition 在内的视频和音频应用程序中使用。

---

## 工作原理

在其入口函数中，AEIO 填充一个函数指针结构，其中包含它希望在响应某些事件时调用的函数的名称。这些函数钩子中有许多是可选的。

---

## After Effects 会做什么？

对于许多 AEIO 钩子函数，你可以要求 After Effects 执行默认处理（此功能在每个钩子的描述中都有说明）。

除非你有充分的理由不这样做，否则从函数中返回 `AEIO_Err_USE_DFLT_CALLBACK`，并让 After Effects 完成工作。

这也是在开始实现之前学习调用顺序的好方法。

---

## 注册你的 AEIO

在你的插件的入口函数中，填充一个描述 AEIO 支持的文件类型的 AEIO_ModuleInfo，以及一个指向你的文件处理函数的 AEIO_FunctionBlock 结构。对于其中一些函数，你可以通过返回 AEIO_Err_USE_DFLT_CALLBACK 来依赖 After Effects 的默认行为。但是，你仍然必须提供一个符合所需签名的函数来执行此操作。填写完这两个结构后，调用 [AEGP_RegisterSuites5](../../aegps/aegp-suites#aegp_registersuites5) 中的 `AEGP_RegisterIO()`。

在你传递给注册调用的 AEIO_ModuleInfo 中，你提供了 After Effects 在导入对话框中使用的文件类型和描述信息，用于 Windows 上的“文件类型”下拉菜单或 MacOS 上的启用下拉菜单。自 CS6 以来，文件扩展名不能超过三个字符，即使我们有一些内置的导入器具有更长的扩展名。

---

## InSpec, OutSpec

在大多数与导入相关的函数中，会传递一个 `AEIO_InSpecH`。在大多数与输出相关的函数中，会传递一个 `AEIO_OutSpecH`。

这些神秘的句柄是什么？这些不透明的数据句柄可以与 [AEGP_IOInSuite5](../new-kids-on-the-function-block#aegp_ioinsuite5) 和 [AEGPIOOutSuite4](../new-kids-on-the-function-block#aegpiooutsuite4) 一起使用，以设置或查询有关导入或输出的信息。

例如，在导入时，你将在调用 AEGP_IOInSuite 中的 `AEGP_SetInSpecDimensions` 时使用 `AEIO_InSpecH`。

在导出期间，你将在调用 `AEGP_IOOutSuite` 中的 `AEGP_GetOutSpecDimensions` 时使用 `AEIO_OutSpecH`。因此，使用这些句柄与 After Effects 交换有关输入或输出详细信息的信息。
