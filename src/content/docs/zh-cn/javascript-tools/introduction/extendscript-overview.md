---
title: extendscript-概述
---
# ExtendScript 概述

Adobe 提供了一种扩展的 JavaScript 实现，称为 ExtendScript，许多提供脚本接口的 Adobe 应用程序都使用它。除了根据 ECMA JavaScript 规范实现 JavaScript 语言外，ExtendScript 还提供了一些额外的功能和实用工具。

本文档描述了所有支持 JavaScript 的 Adobe 应用程序可用的 JavaScript 模块、工具、实用工具和功能。

:::note
某些模块及其功能是可选的。请查看每个应用程序的产品文档，了解哪些模块和功能已实现的详细信息。
:::

## 示例代码

[Adobe ExtendScript SDK](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ExtendScript-Toolkit) 包含了本文档，同时还包含了一组代码示例，展示了如何使用 ScriptUI、应用程序间通信和外部通信的功能。本书通过示例名称来引用这些示例，以说明概念和技术。

你可以从 [Github](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ExtendScript-Toolkit) 下载最新（也是最后一个）的 SDK。早期版本可能仍然可以通过 [直接链接](https://github.com/aenhancers/javascript-tools-guide/issues/2#issuecomment-1019312237) 访问。

示例位于 ExtendScript SDK 根目录下：

- `SDKroot/Samples/javascript/`: 示例脚本
- `SDKroot/Samples/resources/`: 资源文件，如图像或 Flash 文件

## 开发和调试工具

为了帮助开发、调试和测试脚本，Adobe 提供了 ExtendScript Toolkit，这是一个用于 ExtendScript 的交互式开发和测试环境，随所有支持 JavaScript 的应用程序一起安装。

有关完整详细信息，请参阅 [ExtendScript Toolkit](../../extendscript-toolkit/index#the-extendscript-toolkit)。

ExtendScript 还提供了支持开发和调试的全局对象：

- 一个全局调试对象，即 Dollar ($) 对象。
- 一个用于报告 ExtendScript 元素的实用工具，即 ExtendScript 反射接口。

有关完整详细信息，请参阅 [ExtendScript 工具和功能](../../extendscript-tools-features/index#extendscript-tools-and-features)。

## 跨平台文件系统访问

Adobe ExtendScript 定义了 File 和 Folder 类，简化了跨平台文件系统的访问。这些类对所有支持 JavaScript 接口的应用程序都可用。

有关完整详细信息，请参阅 [文件系统访问](../../file-system-access/index#file-system-access)。

## 用户界面开发工具

Adobe 提供了 ScriptUI 模块，它与 ExtendScript JavaScript 解释器一起工作，使 JavaScript 脚本能够创建用户界面元素并与之交互。它为 Adobe 应用程序中的窗口和用户界面控件元素提供了一个对象模型。有关完整详细信息，请参阅 [用户界面工具](../../user-interface-tools/index#user-interface-tools)。

此外，ExtendScript 还提供了：

- 用于本地化显示字符串的全局函数；请参阅 [本地化 ExtendScript 字符串](../../extendscript-tools-features/localizing-extendscript-strings)。
- 用于在对话框中显示简短消息的全局函数；请参阅 [用户通知对话框](../../extendscript-tools-features/user-notification-dialogs)。
- 一种用于指定测量值及其单位的对象类型；请参阅 [指定测量值](../../extendscript-tools-features/specifying-measurement-values)。

## 应用程序间通信和消息传递

ExtendScript 为所有支持 JavaScript 的 Adobe 应用程序提供了一个通用的脚本环境，并允许通过脚本进行应用程序间通信。

通过跨 DOM 和消息传递框架提供了不同级别的通信。

- 跨 DOM 函数是一组有限的、跨所有支持消息传递的应用程序的基本函数，允许你的脚本通过调用其他应用程序的打开或打印函数来打开或打印文件。除了基本函数集外，一些应用程序还提供了更广泛的导出 JavaScript 函数集给其他应用程序。
- 应用程序间消息传递框架是一个应用程序编程接口 (API)，允许对应用程序之间的通信进行广泛的控制。该 API 允许你向其他应用程序发送消息并接收结果，以及接收其他应用程序发送的消息并返回结果。通常，应用程序之间传递的数据是 JavaScript 脚本。然而，消息传递框架是可扩展的。它允许你定义不同类型的数据在应用程序之间传递，并指定如何处理它们。

有关完整详细信息，请参阅 [使用脚本进行应用程序间通信](../../interapplication-communication/index#interapplication-communication-with-scripts)。

## 外部通信

ExtendScript 提供了使用标准协议与其他计算机或互联网通信的工具。Socket 对象支持低级别的 TCP 连接。

有关完整详细信息，请参阅 [外部通信工具](../../external-communication/index#external-communication-tools)。

## 外部共享库集成

你可以通过编写 C 或 C++ 共享库，将其编译为你所使用的平台，并将其作为 ExternalObject 实例加载到 JavaScript 中来扩展应用程序的 JavaScript DOM。共享库在 Windows 中由 DLL 实现，在 Mac OS 中由 bundle 或 framework 实现，在 UNIX 中由 SharedObject 实现。

有关完整详细信息，请参阅 [集成外部库](../../integrating-external-libraries/index#integrating-external-libraries)。

## 其他实用工具和功能

ExtendScript 提供了以下实用工具和功能：

- JavaScript 语言增强
 - 用于组合脚本的工具，例如 `#include` 指令。请参阅 [预处理器指令](../../extendscript-tools-features/preprocessor-directives)。
 - 支持按类扩展或覆盖数学和逻辑运算符行为。请参阅 [运算符重载](../../extendscript-tools-features/operator-overloading)。
 - 有关完整详细信息，请参阅 [ExtendScript 工具和功能](../../extendscript-tools-features/index#extendscript-tools-and-features)。
- 通过 ExtendScript Toolkit 进行 JavaScript 编译。请参阅 [ExtendScript Toolkit](../../extendscript-toolkit/index#the-extendscript-toolkit)。
- XML 集成：ExtendScript 定义了 XML 对象，允许你使用 JavaScript 脚本处理 XML。有关完整详细信息，请参阅 [将 XML 集成到 JavaScript 中](../../integrating-xml/index#integrating-xml-into-javascript)。
- 支持 XMP 元数据操作的脚本：XMPScript 提供了一个用于 Adobe 的 JavaScript API。
