---
title: 概述
---
# ExtendScript 工具包

:::warning
Extendscript 工具包已被弃用，推荐使用 [VS Code 调试器](../../vscode-debugger/index)！
:::

此信息在此保留以供历史参考，但 Extendscript 工具包不再被积极维护或支持，并且将不再适用于仅支持 64 位的 MacOS 版本。

ExtendScript 工具包为所有支持 JavaScript 的 Adobe 应用程序中的 ExtendScript 提供了一个交互式开发和测试环境。

它包括一个功能齐全、支持语法高亮的文本编辑器，具有 Unicode 能力和多次撤销/重做支持。该工具包是 ExtendScript 文件的默认编辑器，这些文件使用 `.jsx` 扩展名。

该工具包包含一个 JavaScript 调试器，允许您：

- 在应用程序中单步执行 JavaScript 脚本（JS 或 JSX 文件）。
- 检查运行脚本的所有数据。
- 设置并执行断点。

当您在平台的窗口环境中双击一个 JSX 文件时，脚本会在工具包中运行，除非它使用 `#target` 指令指定了特定的目标应用程序。

更多信息，请参阅 [选择调试目标](../debugging-in-the-toolkit#选择调试目标) 和 [预处理器指令](../../extendscript-tools-features/preprocessor-directives)。
