---
title: 控制面板
---
# 控制面板

从 Premiere Pro CC 2014 开始，控制面板插件可以与硬件控制面板进行交互。此 API 提供了对 EUCON 和 Mackie 设备的内置支持，用于控制音频混音和基本传输控制。该 API 支持与 Premiere Pro 的双向通信，因此硬件推子、VU 表等与应用程序保持同步。

将示例插件编译到主应用程序文件夹的子文件夹中：`Plugins\\ ControlSurface\\`

在 PPro 用户界面的“首选项 > 控制面板”中，点击“添加”按钮时，您应该会在设备类下拉菜单中看到该插件，作为 Mackie 和 EUCON 旁边的选项之一（目前显示为“SDK 控制面板示例”）。

您需要为插件套件中定义的任何相关函数实现处理程序，插件套件位于：`adobesdk\controlsurface\plugin`

为此，您可以使用任何 API 调用主机套件中定义的主机函数，主机套件位于：`adobesdk\controlsurface\host`

---

## 调用顺序

当应用程序启动时，控制面板插件会被加载，并调用入口函数。主机 ID 和 API 版本会传入，插件会返回 ADOBESDK_ControlSurfacePluginFuncs，这是一个函数指针数组。

接下来，调用 Startup() 函数，插件在其中注册一组函数，这些函数在 ControlSurfacePluginSuite.h 中定义。对于它将继承的每个基类（在 adobesdkcontrolsurfacepluginwrapper 中定义），它会调用 RegisterSuite()。这些套件是主机应用程序稍后调用控制面板插件的方式。传输控制、音频混音器、Lumetri 颜色控制等都有单独的基类。

然后，调用 CreatePluginInstance()。当打开项目时，调用 Connect()。在这里，插件实例化一个 ControlSurface 对象，该对象继承自前面提到的任何基类。它获取所需的任何主机套件，然后返回对 ControlSurface 对象的引用。

---

## 入门指南

如果您需要进一步的指导，请写信给我们。
