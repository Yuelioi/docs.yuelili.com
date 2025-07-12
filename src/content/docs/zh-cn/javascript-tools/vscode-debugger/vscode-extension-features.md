---
title: VS Code 扩展功能
---
# VS Code 扩展功能

一旦你安装并运行了 Extendscript VS Code 扩展，你还可以做一些其他事情；[导出为 jsxbin](#导出为二进制文件)，[在代码中使用断点](#使用断点)，以及更多功能。

:::note
本指南旨在提供如何使用 VS Code 中特定 Extendscript 功能的见解。
:::

如果你想知道如何开始使用该扩展，请参阅 [VS Code 调试器入门](../getting-started-with-vscode-debugger)。

---

## 使用断点

断点允许你在代码的特定行停止运行，让你可以探索调用堆栈、变量状态和函数参数。

你可以通过两种方式创建断点；使用 [VS Code 的原生断点系统](#vs-code-断点)，或使用 [Extendscript 的内联断点方法](#extendscript-断点)。

### VS Code 断点

使用 VS Code 的一个优势是我们可以设置 VS Code 断点，并让调试器遵守它们！请参阅官方的 [Visual Studio 关于断点的文章](https://code.visualstudio.com/docs/editor/debugging#_breakpoints)。

### Extendscript 断点

你可以在源代码文件的任何位置添加 `$.bp()`，调试器会在正确的位置捕获它，允许你查看调用堆栈/数据浏览器。

这与浏览器中基于 Javascript 的 `debugger;` 方法完全相同。

更多信息请参阅 [bp()](../../extendscript-tools-features/dollar-object#bp)。

---

## 导出为二进制文件

在旧的 Extendscript ToolKit 中，你可以非常轻松地将项目保存为混淆的二进制文件。此功能在 VS Code 调试器中仍然存在！

你可以通过 [vscode 界面](#从-vs-code-导出-jsxbin) 或 [命令行](#从命令行导出-jsxbin) 导出。

### 从 VS Code 导出 JSXBIN

要将脚本导出为二进制文件，你有几种选择：

- 打开文件后，右键单击文档并选择“导出为二进制文件”
- 打开命令面板（Ctrl + Shift + P）并输入“导出为二进制文件”
- 使用相同的快捷键（Ctrl + Shift + J）

### 从命令行导出 JSXBIN

VS Code 扩展允许你通过命令行导出单个文件或整个目录，但这需要你做一些额外的工作。

:::warning
虽然有一种内置的方法可以实现这一点，但这个过程可能不太友好。作为替代方案，可以考虑使用 gulp-accessible 的 [npm 包 jsxbin](https://www.npmjs.com/package/jsxbin)。它的功能与下面相同，但用户参与度更低。
:::

有报告称此包在 Windows 上存在问题。作为替代的 gulp 任务，你可以尝试 [Justin Taylor](http://justintaylor.tv/) 提供的 [这个脚本](https://bitbucket.org/motiondesign/workspace/snippets/aLzaX5)。

以上两种方法都需要安装 VS Code 扩展。

所有文件都保存在同一目录中，并使用相同的文件名（尽管后缀为 .jsxbin）。任何传递的目录都将被递归遍历。

1. 在扩展安装目录中，有一个 `exportToJSX.js` 脚本文件，它接受要转换的文件路径或目录。我们需要获取此路径。
 - 注意，你需要将 X.X.X 替换为当前版本号
 - MacOS: `$HOME/.vscode/extensions/adobe.extendscript-debug-X.X.X/public-scripts/exportToJSX.js`
 - Windows: `%USERPROFILE%\.vscode\extensions\adobe.extendscript-debug-X.X.X\public-scripts\exportToJSX.js`
2. 此脚本接受几个参数；
 - `-f`, `--force`: 如果 '.jsxbin' 文件已存在，则覆盖它
 - `-n`, `--name`: '.js/.jsx' 脚本路径或包含这些文件的目录路径。
 - `h`, `--help`: 显示帮助信息并退出
3. 运行脚本
 - 在命令行中运行 `node path/to/exportToJSX.js [options] [file/directory]`

#### 示例

**导出单个脚本**

```sh
sh node "C:/Users/Dev/.vscode/extensions/adobe.extendscript-debug-1.1.2/public-scripts/exportToJSX.js" "d:/projects/scripting/coolTool.jsx"
```

**导出文件夹并覆盖**

```sh
sh node "C:/Users/Dev/.vscode/extensions/adobe.extendscript-debug-1.1.2/public-scripts/exportToJSX.js" --force "d:/projects/scripting/"
```
