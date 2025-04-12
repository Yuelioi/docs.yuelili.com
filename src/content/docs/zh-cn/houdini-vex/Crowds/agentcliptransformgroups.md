---
title: agentcliptransformgroups
order: 18
---
更多信息请参阅[变换组](../../crowds/agents.html#xformgroups)。

`string [] agentcliptransformgroups(<geometry>geometry, int prim)`

如果`prim`超出范围或不是代理图元，则返回空数组。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个整数，表示要从中读取几何图形的输入编号（从0开始）。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

图元编号。
