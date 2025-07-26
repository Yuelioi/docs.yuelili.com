---
title: agentclipchannel
order: 7
---

`int  agentclipchannel(<geometry>geometry, int prim, string clipname, string channel)`

`int  agentclipchannel(<geometry>geometry, int prim, int clipindex, string channel)`

返回指定动画片段中某个通道的索引。
如果`clipname`不是该代理的[动画片段](/zh-cn/houdini-vex/crowds/agentclipcatalog "返回已加载到代理图元的所有动画片段")之一、`prim`超出范围、`prim`不是代理图元，或者`channel`不存在，则返回-1。

要采样片段中的变换通道，请使用[agentrigfind](/zh-cn/houdini-vex/crowds/agentrigfind "查找代理图元骨骼中某个变换的索引")以及[agentclipsamplelocal](/zh-cn/houdini-vex/crowds/agentclipsamplelocal "在特定时间采样代理的动画片段")或[agentclipsampleworld](/zh-cn/houdini-vex/crowds/agentclipsampleworld "在特定时间采样代理的动画片段")。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

图元编号。

`clipname`

动画片段的名称。

`clipindex`

代理定义中片段的索引。
可以通过[agentfindclip](/zh-cn/houdini-vex/crowds/agentfindclip "查找代理定义中某个片段的索引")获取片段的索引。

`channel`

动画片段中的通道名称。
