---
title: Adobe Illustrator CC 中的脚本语言支持
---
# Adobe Illustrator CC 中的脚本语言支持

Illustrator 脚本支持 Windows 上的 VBScript 和 JavaScript 脚本，以及 Mac OS 上的 AppleScript 和 JavaScript 脚本。

---

## 脚本文件扩展名

为了使 Adobe Illustrator CC 2017 能够识别文件为有效的脚本文件，文件必须具有正确的文件扩展名：

| 脚本类型 | 文件类型（扩展名） | 平台 |
|---|---|---|
| AppleScript | 编译脚本 ( .scpt ) 或 OSAS 文件（无扩展名） | Mac OS |
| JavaScript 或 ExtendScript | 文本文件 ( .js 或 .jsx ) | Windows 和 Mac OS |
| VBScript | 文本文件 ( .vbs ) | Windows |

---

## JavaScript 开发选项

您可以使用 ExtendScript Toolkit 专门为 Illustrator 创建 JavaScript 脚本，或者使用 Adobe Extension Builder 和 Creative Cloud SDK 以 ActionScript 开发扩展。

扩展基于 Flash (SWF)，并可能适用于多种 Creative Cloud 应用程序。

### 使用 ActionScript 开发 CC 扩展

Creative Cloud 应用程序具有可扩展性基础设施，允许开发者扩展应用程序的功能；该基础设施基于 Flash/Flex 技术，每个扩展以编译后的 Flash (SWF) 文件形式交付。

Creative Cloud 包含 Extension Manager，用于启用扩展的安装。

随产品附带的扩展示例之一是 Adobe Kuler。Kuler 在不同的套件应用程序中具有一致的用户界面，但每个应用程序中的逻辑不同，以适应宿主应用程序。

扩展的用户界面使用 Flex 框架以 ActionScript 编写。扩展通常通过应用程序的扩展菜单中的菜单项访问。

Adobe Extension Builder 允许您使用 Flash Builder 的设计视图交互式设计用户界面。Creative Cloud SDK 还允许您以 ActionScript 开发扩展的所有应用程序逻辑；您可以在熟悉的 Flash Builder 环境中开发和调试扩展。

为了开发应用程序逻辑，我们建议使用 ActionScript 包装库 (CSAWLib)，它将每个宿主应用程序的脚本 DOM 公开为 ActionScript 库。这与 Adobe Extension Builder 环境紧密集成，其中包括向导，帮助您构建扩展的基本结构，并针对套件应用程序（如 Adobe InDesign、Photoshop 和 Illustrator）运行和调试代码。

脚本 DOM 的方法、属性和行为如宿主应用程序的 JavaScript 脚本参考中所述。

有关如何使用 Adobe Extension Builder 和包装库的详细信息，请参阅 Creative Cloud SDK 文档，该文档可从 Adobe Extension Builder 中访问。

### 脚本插件

CC JavaScript 脚本接口允许对插件进行有限的脚本编写。插件可以定义一个命令，包含事件和通知器，以及执行某些操作的处理器。然后，JavaScript 脚本可以使用 [`app.sendScriptMessage()`](../../jsobjref/Application#applicationsendscriptmessage) 方法向该插件定义的命令发送参数，并接收插件定义的响应。

例如，Adobe Custom Workspace 插件定义了一个命令“Switch Workspace”。脚本可以使用以下代码调用此命令：

```javascript
result = app.sendScriptMessage (
 "Adobe Custom Workspace",
 "Switch Workspace",
 '<workspace="Essentials" >'
);
```

在这种情况下，插件返回的值是字符串：

```javascript
"<error= errNo>".
```

### ExtendScript 功能

如果您编写直接使用 Illustrator JavaScript DOM 的特定于 Illustrator 的脚本，您将创建 ExtendScript 文件，这些文件以 .jsx 扩展名区分。

为您的 JavaScript 文件提供 .jsx 扩展名（而不是标准的 .js 扩展名）可以让您利用 ExtendScript 功能和工具。

ExtendScript 提供所有标准的 JavaScript 功能，以及开发和调试环境 ExtendScript Toolkit (ESTK)。

ESTK 随所有可脚本化的 Adobe 应用程序一起安装，并且是 JSX 文件的默认编辑器。ESTK 包括一个对象模型查看器，其中包含 JavaScript 对象的方法和属性的完整文档。有关访问 ESTK 和对象模型查看器的信息，请参阅 [查看对象模型](../viewingTheObjectModel)。

ExtendScript 还提供了各种工具和实用程序，包括以下内容：

- 本地化实用程序
- 允许您组合脚本并将其定向到特定应用程序的工具
- 平台无关的文件和文件夹表示
- 用于为脚本构建用户界面的工具
- 消息传递框架，允许您在支持脚本的 Adobe 应用程序之间发送和接收脚本和数据

无论您是直接使用 JSX 文件与 DOM 交互，还是通过 ActionScript 包装库和 Adobe Extension Builder 间接使用，所有这些功能都可用。有关这些功能及其他功能的详细信息，请参阅 [JavaScript 工具指南](https://extendscript.docsforadobe.dev/)。
