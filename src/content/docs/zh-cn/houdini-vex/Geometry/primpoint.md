---
title: primpoint
order: 26
---
`int  primpoint(<geometry>geometry, int primnum, int vertex)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是一个指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`primnum`

要获取顶点的基元编号。

`vertex`

基元内部的顶点编号。0表示第一个顶点。

返回值

顶点连接到的点编号。
如果未能找到对应的点，则返回`-1`。
