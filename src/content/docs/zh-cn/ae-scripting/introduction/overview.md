---
title: 概述
---

# 概述

## After Effects 脚本编写简介

脚本是一系列命令，用于指示应用程序执行一系列操作。您可以在大多数 Adobe 应用程序中使用脚本来自动化重复任务、执行复杂计算，甚至使用一些未通过图形用户界面直接暴露的功能。例如，您可以指示 After Effects 重新排列合成中的图层、查找并替换文本图层中的源文本，或在渲染完成时发送电子邮件。

尽管 After Effects 表达式语言和 After Effects ExtendScript 脚本语言都基于 JavaScript，但 After Effects 的表达式功能和脚本功能是独立且不同的。表达式无法访问脚本中的信息（例如变量和函数）。脚本告诉应用程序执行某些操作，而表达式则表示某个属性是什么。然而，由于 After Effects 表达式语言和 ExtendScript 都基于 JavaScript，熟悉其中一种语言对理解另一种语言非常有帮助。

可脚本化应用程序的核心是对象模型。当您使用 Adobe After Effects 时，您会创建项目、合成和渲染队列项，以及它们包含的所有元素：素材、图像、纯色、图层、遮罩、效果和属性。在脚本术语中，这些项目中的每一个都是一个对象。本指南描述了为 After Effects 项目定义的 ExtendScript 对象。

After Effects 对象模型由项目、项、合成、图层和渲染队列项组成。每个对象都有其特殊的属性，并且 After Effects 项目中的每个对象都有其自己的身份（尽管并非所有对象都可以通过脚本访问）。为了创建脚本，您应该熟悉 After Effects 对象模型。

:::note
在本指南中，通常称为“属性”的 JavaScript 对象一致被称为“属性”，以避免与 After Effects 自己对属性的定义（单个图层中效果、遮罩或变换的可动画值）混淆。
:::

几乎所有脚本可以实现的功能都可以通过 After Effects 图形用户界面完成。对应用程序本身及其图形用户界面的深入了解对于理解如何在 After Effects 中使用脚本至关重要。

---

## ExtendScript 语言

After Effects 脚本使用 Adobe ExtendScript 语言，这是一种扩展形式的 JavaScript，被多个 Adobe 应用程序使用，包括 Photoshop、Illustrator 和 InDesign。ExtendScript 根据 ECMA-262 规范实现了 JavaScript 语言。After Effects 脚本引擎支持 ECMA-262 标准的第 3 版，包括其符号和词汇约定、类型、对象、表达式和语句。ExtendScript 还实现了 E4X ECMA-357 规范，该规范定义了以 XML 格式访问数据的方式。

ExtendScript 定义了一个全局调试对象，即美元符号（`$`）对象，以及一个用于 ExtendScript 元素的报告工具，即 ExtendScript 反射接口。

### 文件和文件夹对象

由于不同操作系统中的路径名语法差异很大，Adobe ExtendScript 定义了 [Extendscript 文件](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 和 [Extendscript 文件夹](https://extendscript.docsforadobe.dev/file-system-access/folder-object.html) 对象，以提供与底层文件系统的平台无关的访问。

### ScriptUI 用户界面模块

ExtendScript 的 ScriptUI 模块提供了创建和与用户界面元素交互的能力。ScriptUI 提供了一个用于窗口和 UI 控制元素的对象模型，您可以使用它来为脚本创建用户界面。

### 工具和实用程序

此外，ExtendScript 提供了工具和功能，例如用于提供不同语言的用户界面字符串值的本地化实用程序，以及用于在对话框中显示短消息的全局函数（alert、confirm 和 prompt）。

### 外部通信

ExtendScript 提供了一个 Socket 对象，允许您从 After Effects 脚本与远程系统通信。

### 应用程序间通信

ExtendScript 为所有 Adobe 应用程序提供了一个通用的脚本环境，并允许通过脚本进行应用程序间通信。

---

## ExtendScript 工具包 (ESTK)

After Effects 包含一个脚本编辑器和调试器，即 ExtendScript 工具包 (ESTK)，它提供了一个方便的界面来创建和测试您自己的脚本。

要启动 ESTK，请选择“文件”>“脚本”>“打开脚本编辑器”。

如果您选择使用其他文本编辑器来创建、编辑和保存脚本，请确保选择一个在保存文件时不会自动添加头信息并以 Unicode (UTF-8) 编码保存的应用程序。在许多文本编辑器中，您可以设置以 UTF-8 编码保存的偏好设置。某些应用程序（例如 Microsoft Word）默认会在文件中添加头信息，这可能会导致脚本中出现“第 0 行”错误，从而导致脚本失败。

有关 ExtendScript 工具包的详细信息，请参阅 [JavaScript 工具指南](https://extendscript.docsforadobe.dev/)。

---

## .jsx 和 .jsxbin 文件扩展名

ExtendScript 脚本文件以 `.jsx` 文件扩展名区分，这是标准 `.js` 扩展名的变体，用于 JavaScript 文件。After Effects 脚本必须包含 `.jsx` 文件扩展名，以便应用程序正确识别。任何带有 `.jsx` 扩展名的 UTF-8 编码文本文件都被识别为 ExtendScript 文件。

您可以使用 ExtendScript 工具包导出 ExtendScript 文件的二进制版本，其扩展名为 .jsxbin。这种二进制文件可能无法与 After Effects 中的所有脚本集成功能一起使用。

---

## 激活完整的脚本功能

默认情况下，脚本不允许写入文件或通过网络发送或接收通信。要允许脚本写入文件并通过网络通信，请选择“编辑”>“首选项”>“常规”（Windows）或“After Effects”>“首选项”>“常规”（Mac OS），然后选择“允许脚本写入文件和访问网络”选项。

任何包含错误导致无法完成的 After Effects 脚本都会生成应用程序的错误消息。此错误消息包括有关错误性质的信息以及发生错误的脚本行。当应用程序遇到脚本错误时，ExtendScript 工具包 (ESTK) 调试器可以自动打开。默认情况下禁用此功能，以免普通用户遇到它。要激活此功能，请选择“首选项”>“常规”，然后选择“启用 JavaScript 调试器”。

---

## 加载和运行脚本

### 直接从“文件”>“脚本”菜单运行脚本

当 After Effects 启动时，它会在脚本文件夹中搜索要加载的脚本。加载的脚本可从“文件”>“脚本”菜单中获得。

要运行已加载的脚本，请选择“文件”>“脚本”> [脚本名称]。

如果您在 After Effects 运行时编辑脚本，则必须保存更改才能使更改生效。如果您在 After Effects 运行时将脚本放置在脚本文件夹中，则必须重新启动 After Effects 才能使脚本出现在脚本菜单中，尽管您可以使用“运行脚本文件”命令立即运行新脚本。

### 使用“文件”>“脚本”>“运行脚本文件”运行脚本

要运行尚未加载的脚本，请选择“文件”>“脚本”>“运行脚本文件”，找到并选择一个脚本，然后单击“打开”。

### 从命令行、批处理文件或 AppleScript 脚本运行脚本

如果您熟悉如何在 Windows 中从命令行运行脚本或通过 AppleScript 运行脚本，则可以直接将脚本发送到打开的 After Effects 应用程序，以便应用程序自动运行脚本。

要从命令行运行脚本，请从命令行调用 afterfx.exe。使用 `-r` 开关和要运行的脚本的完整路径作为参数。此命令不会打开新的 After Effects 应用程序实例；它会在现有实例中运行脚本。

示例（适用于 Windows）：

```bat
afterfx -r c:\script_path\example_script.jsx
```

您可以将此命令行技术与随附可自定义键盘的软件结合使用，将脚本的调用绑定到键盘快捷键。

以下是 Windows 命令行条目的示例，这些条目将在不使用 After Effects 用户界面的情况下将 After Effects 脚本发送到应用程序以执行脚本。

在第一个示例中，您可以直接在命令行上复制并粘贴您的 After Effects 脚本，然后运行它。脚本文本出现在 `afterfx.exe -s` 命令后的引号中：

```javascript
afterfx.exe -s "alert("You just sent an alert to After Effects")"
```

或者，您可以指定要执行的 JSX 文件的位置。例如：

```bat
afterfx.exe -r c:\myDocuments\Scripts\yourAEScriptHere.jsx afterfx.exe -r "c:\myDocuments\Scripts\Script Name with Spaces.jsx"
```

### 如何在 AppleScript (Mac OS) 中包含 After Effects 脚本

以下是三个 AppleScript 脚本的示例，这些脚本将发送包含 After Effects 脚本的现有 JSX 文件到应用程序，而无需使用 After Effects 用户界面来执行脚本。

在第一个示例中，您直接将 After Effects 脚本复制到脚本编辑器中，然后运行它。脚本文本出现在 DoScript 命令后的引号中，因此脚本中的内部引号必须使用反斜杠转义字符进行转义，如下所示：

```applescript
tell application "Adobe After Effects CS6"
 DoScript "alert(\"You just sent an alert to After Effects\")"
end tell
```

或者，您可以显示一个对话框，要求输入要执行的 JSX 文件的位置，如下所示：

```applescript
set theFile to choose file
tell application "Adobe After Effects CS6"
 DoScriptFile theFile
end tell
```

最后，当您直接编辑 JSX 脚本并希望将其发送到 After Effects 进行测试或运行时，此脚本可能最有用。要有效地使用它，您必须输入包含打开的 JSX 文件的应用程序（在此示例中为 TextEdit）；如果您不知道应用程序的正确名称，请键入您的最佳猜测以替换“TextEdit”，AppleScript 会提示您找到它。

只需突出显示要运行的脚本文本，然后激活此 AppleScript：

```applescript
(*
此脚本将当前选择作为脚本发送到 After Effects。
*)

tell application "TextEdit"
 set the_script to text of front document
end tell

tell application "Adobe After Effects CS6" activate
 DoScript the_script
end tell
```

### 在应用程序启动或关闭期间自动运行脚本

在脚本文件夹中有两个名为“启动”和“关闭”的文件夹。After Effects 会在启动和退出时分别按字母顺序自动运行这些文件夹中的脚本。

在“启动”文件夹中，您可以放置希望在应用程序启动时执行的脚本。它们会在应用程序初始化和所有插件加载后执行。

脚本共享一个全局环境，因此在启动时执行的任何脚本都可以定义变量和函数，这些变量和函数对所有脚本都可用。在所有情况下，一旦通过运行包含它们的脚本定义了变量和函数，它们就会在后续脚本中持续存在，直到 After Effects 会话结束。一旦应用程序退出，所有此类全局定义的变量和函数都会被清除。请确保为脚本中的变量提供唯一的名称，以免脚本无意中重新分配旨在在整个会话期间持续存在的全局变量。

还可以向现有对象（例如 [应用程序对象](../../general/application) 添加属性，以扩展应用程序以供其他脚本使用。

“关闭”文件夹中的脚本会在应用程序退出时执行。这发生在项目关闭之后，但在其他应用程序关闭之前。

### 从“窗口”菜单运行脚本

ScriptUI 面板文件夹中的脚本可从“窗口”菜单底部获得。如果脚本已编写为在可停靠面板中提供用户界面，则应将脚本放入 ScriptUI 文件夹中。ScriptUI 面板的工作方式与 After Effects 用户界面中的默认面板非常相似。

与创建窗口对象并向其添加控件不同，ScriptUI 面板脚本使用表示面板的 `this` 对象。例如，以下代码向面板添加了一个按钮：

```javascript
var myPanel = this;
myPanel.add("button", [10, 10, 100, 30], "Tool #1");
```

如果您的脚本在函数中创建其用户界面，则不能使用 `this`，因为它将引用函数本身，而不是面板。在这种情况下，您应将 `this` 对象作为参数传递给您的函数。例如：

```javascript
function createUI(thisObj) {
 var myPanel = thisObj;
 myPanel.add("button", [10, 10, 100, 30], "Tool #1");
 return myPanel;
}
var myToolsPanel = createUI(this);
```

您不能使用“文件”>“脚本”>“运行脚本文件”菜单命令来运行引用 `this` 的脚本。要使您的脚本与窗口对象（可从“文件”>“脚本”菜单访问）或本机面板（可从“窗口”菜单访问）一起工作，请检查 `this` 是否为面板对象。例如：

```javascript
function createUI(thisObj) {
 var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "My Tools",
 [100, 100, 300, 300]);
 myPanel.add("button", [10, 10, 100, 30], "Tool #1");
 return myPanel;
}
var myToolsPanel = createUI(this);
```

### 停止正在运行的脚本

当 After Effects 或脚本的用户界面具有焦点时，可以通过按 Esc 或 Cmd+period（在 Mac OS 中）来停止脚本。但是，忙于处理大量数据的脚本可能响应速度较慢。
