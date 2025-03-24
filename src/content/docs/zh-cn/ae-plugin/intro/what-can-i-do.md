---
title: 我能用这个SDK做什么
---
# 我能用这个SDK做什么？

这个SDK描述了开发者用来构建插件的应用程序编程接口（API）。这些插件可以扩展After Effects的功能，以及其他支持After Effects API的应用程序的功能。插件还可以用于弥合After Effects与其他应用程序之间的差距。

---

## 我能用这个SDK构建哪些插件？

*效果插件*可以应用于合成中的视频或音频，以处理视频和/或音频数据。内置效果的一些示例包括亮度和对比度、色相/饱和度、高斯模糊和变形稳定器。效果插件可以提供给用户一组参数控件，以微调效果。这些参数值可以随时间变化，效果可能会在不同时间使用其他图层和参数来计算输出。通常认为所有插件都是效果。但效果只是After Effects使用的一种插件类型。

观看一个关于构建效果的快速入门视频（在macOS上）：[adobe.ly/2sjMDwM](https://adobe.ly/2sjMDwM)

*After Effects通用插件（AEGP）*可以读取和修改After Effects项目和偏好设置的几乎所有元素。它们可以添加菜单项，“挂钩”（注册自己以接收）并触发After Effects的内部命令，并添加在After Effects UI中停靠和调整大小的新面板。它们可以与标记和关键帧一起工作，并管理渲染队列。它们甚至可以运行脚本。内置AEGP的一些示例包括AAF导入器和SWF导出器。Automatic Duck Pro Import AE是另一个著名的AEGP。

*After Effects输入/输出（AEIO）插件*为新的媒体文件类型提供支持。除非您需要一个自定义设置对话框来指定解释设置，否则[Premiere Pro导入器](../other-integration-possibilities#premiere-pro-importers) API提供了类似的功能，并且在许多情况下更可取。AEIO使用AEGP API以及特定于AEIO的某些API。虽然After Effects仍然支持Photoshop格式插件和过滤器，以及外部项目格式（FPF）插件，但这些API早已被弃用，转而支持AEIO API。

*BlitHook*插件将视频输出到外部硬件，用于广播质量监控和磁带播放。EMP示例项目提供了一个起点。在After Effects CC 2014及更高版本中，[Mercury Transmit](../other-integration-possibilities#mercury-transmit)是推荐的API。

*Artisans*提供3D图层的渲染输出，接管After Effects的3D渲染（After Effects仍然处理所有2D图层的渲染）。Artisans使用AEGP API以及特定于Artisans的某些API。

没有看到您需要的集成类型？After Effects非常灵活，还有其他几种与After Effects集成的方式。请参阅：[其他集成可能性](../other-integration-possibilities)。

---

## 插件在After Effects中出现在哪里？

效果插件出现在*效果*菜单和效果与预设面板中，位于其PiPL中指定的效果类别中。一旦应用，效果的参数控件（滑块、弹出窗口等）将出现在效果控制面板（ECP）中。

After Effects通用插件（AEGP）可以将项目添加到任何After Effects菜单中，以及Window菜单中列出的其他面板中。这些菜单项与After Effects自己的菜单项无法区分。

[AEIOs](../../aeios/aeios)和Photoshop格式插件可以出现在*文件 > 导入*菜单中，或者出现在*导入文件*对话框中的*文件类型*下拉菜单中，具体取决于导入器的类型。AEIO和格式插件还可以作为渲染队列中的可用输出格式出现。

BlitHook插件由AE自动加载和使用，但不会出现在任何菜单或对话框中。插件可以选择提供一个菜单项，打开其自定义设置对话框。它将使用AEGP API注册和更新菜单项。

它可以注册为After Effects调用以使用`AEGP_RegisterUpdateMenuHook()`更新菜单，并且可以使用`AEGP_EnableCommand()`/`DisableCommand()`来禁用/激活菜单项。

Artisans出现在*合成设置*对话框的*高级*选项卡中的*渲染插件*下拉菜单中。

---

## After Effects如何与插件交互？

用C或C++编写的插件在macOS上是捆绑包，在Windows上是DLL。它们必须在两个平台上包含插件属性列表（[PiPL资源](../pipl-resources)）资源。插件必须位于几个特定文件夹之一中，才能被After Effects加载和使用。

对于效果插件，After Effects将命令选择器（及相关信息）发送到效果[入口函数](../../effect-basics/entry-point)中指定的插件入口函数，该入口函数在效果的[PiPL资源](../pipl-resources)资源中指定。选择器是响应用户操作发送的——应用效果、更改参数、在时间轴中拖动帧以及渲染都会提示不同的选择器序列。

After Effects创建效果的多个实例，每个序列具有唯一的设置和输入数据。所有实例共享相同的全局数据，并且可以在其序列内的所有帧之间共享数据。After Effects不会在用户应用效果时立即处理所有图像数据；它仅在需要其输出时调用效果。

After Effects通用插件（AEGP）在应用程序启动期间调用其入口函数，并在那时注册所需的任何消息传递。对AEGP的进一步调用由用户操作启动，作为插件对菜单命令或UI事件的响应的一部分。根据其功能，插件可能还需要响应特定于操作系统的入口函数，以进行UI工作和线程管理。

对于BlitHook插件，帧在显示在合成面板中时被推送。用户可以启动时间轴某个区域的RAM预览，以便将其渲染到RAM中，然后以全速播放。

---

## SDK内容

SDK包含定义After Effects API的头文件、展示集成功能的示例项目以及本SDK指南。

它们与SDK头文件一起编译，这些头文件公开了各种After Effects功能供插件使用。
