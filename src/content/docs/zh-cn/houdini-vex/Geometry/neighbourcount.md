---
title: neighbourcount
order: 15
---
`int  neighbourcount(<geometry>geometry, int point_num)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`point_num`

需要计算邻点的顶点编号。

返回值

连接到指定顶点的邻点数量。
如果顶点在多边形中相邻、位于网格或NURBs曲面中的四个周围顶点之一，或以其他方式直接与`point_num`共享边，则视为连接。如果没有输入或顶点编号超出范围，则返回0。
