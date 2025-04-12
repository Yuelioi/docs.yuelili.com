---
title: pointvertices
order: 23
---
`int [] pointvertices(<geometry>geometry, int ptnum)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是用于指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`ptnum`

要获取顶点的点编号。

返回值

连接到给定点的顶点数组。不应依赖这些数字的特定顺序。

如果给定点不包含任何顶点，则该数组将为空。
