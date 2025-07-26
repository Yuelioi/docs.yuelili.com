---
title: invertexgroup
order: 7
---
`int  invertexgroup(string filename, string groupname, int vertexnum)`

`int  invertexgroup(int opinput, string groupname, int vertexnum)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`vertexnum`

要测试的顶点的线性顶点编号。

要将基元编号和该基元内的顶点编号转换为`vertexnum`参数的线性顶点编号，请使用[vertexindex](/zh-cn/houdini-vex/geometry/vertexindex "将基元/顶点对转换为线性顶点。")函数。

返回值

如果组存在且顶点在组中，则返回`1`，否则返回`0`。

此函数可以使用临时组，如`42p0-2`。它遵循SOP组命名约定，特别是空字符串表示所有顶点。
