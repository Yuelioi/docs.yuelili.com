---
title: agentfindlayer
order: 25
---
`int  agentfindlayer(<geometry>geometry, int prim, string layername)`

返回代理定义中某图层的索引。
如果`prim`超出范围、`prim`不是代理图元或图层不存在，则返回-1。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

图元编号。

`layername`

代理定义中某图层的名称。
