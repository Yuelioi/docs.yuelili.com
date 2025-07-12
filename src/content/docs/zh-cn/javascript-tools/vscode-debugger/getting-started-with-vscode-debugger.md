---
title: 开始使用 VS Code 调试器
---
# 开始使用 VS Code 调试器

与 ExtendScript Toolkit 不同，VS Code 调试器需要一些工作才能启动和运行。本文档旨在使该过程尽可能简单明了。

:::note
本指南旨在引导您如何安装和运行 VS Code 的 Extendscript 调试器。
:::

如果您想了解如何使用扩展的特定功能，请参阅 [VS Code 扩展功能](../vscode-extension-features)。

通常，您需要按照以下步骤操作：

- [安装扩展](#installing-the-extension)
- [打开项目目录](#opening-a-project-directory)
- [创建调试启动任务](#creating-a-debug-launch-task)
- [附加调试器](#attaching-the-debugger)
- [运行调试器](#running-the-debugger)
- [进一步阅读](#futher-reading)

---

## 安装扩展

您可以前往 [扩展市场链接](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug) 并从那里安装，或者在 VS Code 的扩展浏览器中搜索 "ExtendScript Debugger" 并安装。

如果您选择后者，请确保安装的是 Adobe 提供的版本！

---

## 打开项目目录

- 文件 > 打开文件夹
- 选择您的项目目录

---

## 创建调试启动任务

要使用此扩展，您需要为 VS Code 创建一个调试任务，以便在调试 ExtendScript 时运行。

在您的项目目录中：

- 创建一个名为 `.vscode` 的文件夹（带点号）
- 在该文件夹中，创建一个名为 `launch.json` 的文件
- 粘贴以下代码：

```json
{
 "version": "0.2.0",
 "configurations": [
 {
 "type": "extendscript-debug",
 "request": "attach",
 "name": "extendScript-Debug attach",
 }
 ]
}
```

这将为 VS Code 的调试器创建一个配置，用于附加到您选择的主机应用程序。

---

## 附加调试器

安装扩展后：

- 打开一个 JS 工作区
- 启动您选择的 Adobe 应用程序
- 从侧边栏中选择“运行和调试”选项卡，或按 `Ctrl+Shift+D`，然后在下拉菜单中选择 "extendScript-Debug attach"
- 从出现的下拉列表中选择主机应用程序

底部的状态栏将变为橙色，表示调试器已附加到主机应用程序。您可以使用调试控制台来评估命令和查询变量，即使脚本未运行。

---

## 运行调试器

设置好环境并构建脚本后：

- 点击状态栏上标有 "▷ Eval in host app name" 的按钮以启动当前脚本，或使用命令面板并选择 "ExtendScript - Evaluate Script In Attached Host"。
- 如果脚本抛出任何错误，您将能够查看变量和调用堆栈

:::note
如果您从多个源文件编译最终的 `.jsx` 文件，调试器将捕获*编译后*脚本中的错误，而不是源文件中的错误——除非您以某种方式构建源映射，否则您需要自己回溯以确定错误来自哪个源文件。
:::

这可能不适用于使用 `#include` 编译的文件

---

## 进一步阅读

- [在 VS Code 中调试](https://code.visualstudio.com/docs/editor/debugging)
