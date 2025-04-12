---
title: agentfindclip
order: 24
---
`int  agentfindclip(<geometry>geometry, int prim, string clipname)`

返回代理定义中某个剪辑片段的索引。
如果`prim`超出范围、`prim`不是代理图元或剪辑不存在，则返回-1。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是一个指定几何文件（例如`.bgeo`）的字符串以从中读取。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

图元编号。

`clipname`

代理定义中剪辑片段的名称。
