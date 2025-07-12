---
title: 概述
---
# 概述

Premiere Pro 提供了一个 ExtendScript API，允许访问和操作大多数项目元素，包括元数据、导出和渲染选项。

:::note
本文档不教授 ExtendScript、ExtendScript 调试或其他开发技术。它专注于 Premiere Pro 的 ExtendScript API 和脚本的执行上下文。
:::

虽然最初不完整且仅用于内部测试，但 Premiere Pro 的 ExtendScript API 多年来一直在稳步增长。截至 12.1.1 版本（撰写本文时的最新版本），该 API 提供了对所有项目元素以及应用程序设置的全面访问（通常还包括控制）。

## 示例代码

PProPanel 示例展示了如何使用 Premiere Pro 的 ExtendScript API：[https://github.com/Adobe-CEP/Samples/tree/master/PProPanel](https://github.com/Adobe-CEP/Samples/tree/master/PProPanel)。

## 开发和调试工具

ExtendScript Toolkit (ESTK) 已不再由 Adobe 更新；推荐的 ExtendScript 调试环境是 Microsoft Visual Studio Code，配合 Adobe 的 ExtendScript 调试扩展：

[https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug)
