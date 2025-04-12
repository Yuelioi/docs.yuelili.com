---
title: agentfindtransformgroup
order: 26
---
`int  agentfindtransformgroup(<geometry>geometry, int prim, string transformgroup)`

返回代理定义中变换组的索引。
如果`prim`超出范围、`prim`不是代理图元或变换组不存在，则返回-1。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是一个指定几何体文件（例如`.bgeo`）的字符串以从中读取。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

图元编号。

`transformgroup`

代理定义中变换组的名称。
