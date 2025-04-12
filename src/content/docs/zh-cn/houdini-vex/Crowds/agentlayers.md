---
title: agentlayers
order: 28
---
`string [] agentlayers(<geometry>geometry, int prim)`

如果`prim`超出范围或不是代理图元，则返回空数组。

`<geometry>`

在节点上下文中运行时（例如wrangle SOP），此参数可以是一个表示输入编号的整数（从0开始），用于从中读取几何体。

或者，该参数可以是一个指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

图元编号。
