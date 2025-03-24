---
title: 概述
---
# 概述

AEGP（After Effects通用插件）使用插件组件架构（PICA）功能套件来访问所有功能。

它们还可以发布自己的功能套件，供效果插件使用（由于插件的加载顺序不同，AEGP不能依赖于After Effects未提供的套件）。

AEGP还可以请求一个套件，如果该套件不存在，它们可以自己提供替代功能。

---

## AEGP与After Effects的通信

对于效果插件来说，所有与After Effects的通信都通过一个单一的入口函数进行。但AEGP并非如此。

虽然After Effects确实会调用在AEGP的PiPL中指定的入口函数（这仍然是必需的），但之后的所有通信都由AEGP注册的钩子函数处理。

此注册必须在插件的入口函数内执行，使用[注册套件](../aegp-suites#aegp_registersuites5)。

---

## 不同的任务，相同的API

无论专业领域如何，AEGP的工作方式都是相同的。

它们可以是简单的，只需[添加一个菜单项](../implementation#example-adding-a-menu-item)来触发外部应用程序；也可以是复杂的，像Artisans那样复杂。

虽然任何插件都可以访问任何功能套件，但只有适当类型的插件才能访问所有必需的参数。

只有Artisans才会有渲染上下文；只有AEIO插件才会接收输入和输出规范；消息传递取决于注册了哪些钩子函数。
