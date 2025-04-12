---
title: agentcliplength
order: 10
---

`float  agentcliplength(<geometry>geometry, int prim, string clipname)`

`float  agentcliplength(<geometry>geometry, int prim, int clipindex)`

如果`prim`超出范围或不是代理图元，或者`clipname`不是该代理的[动画片段](agentclipcatalog.html "返回已为代理图元加载的所有动画片段")之一，则返回`0`。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

图元编号。

`clipname`

动画片段的名称。

`clipindex`

代理定义中片段的索引。
可以通过[agentfindclip](agentfindclip.html "查找代理定义中片段的索引")获取片段的索引。