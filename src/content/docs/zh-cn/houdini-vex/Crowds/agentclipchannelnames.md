---
title: agentclipchannelnames
order: 8
---

`string [] agentclipchannelnames(<geometry>geometry, int prim, string clipname)`

`string [] agentclipchannelnames(<geometry>geometry, int prim, int clipindex)`

如果 `clipname` 不是代理的[动画剪辑](/zh-cn/houdini-vex/crowds/agentclipcatalog "返回代理基元加载的所有动画剪辑")之一，`prim` 超出范围，或 `prim` 不是代理基元，则返回空数组。

要获取代理的变换列表，请使用 [agenttransformnames](/zh-cn/houdini-vex/crowds/agenttransformnames "返回代理基元骨骼中每个变换的名称")。

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，此参数可以是一个整数，表示要读取几何体的输入编号（从0开始）。

或者，该参数可以是指定要读取的几何文件（例如 `.bgeo`）的字符串。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 引用。

`prim`

基元编号。

`clipname`

动画剪辑的名称。

`clipindex`

代理定义中剪辑的索引。
剪辑的索引可通过 [agentfindclip](/zh-cn/houdini-vex/crowds/agentfindclip "查找代理定义中剪辑的索引") 获取。
