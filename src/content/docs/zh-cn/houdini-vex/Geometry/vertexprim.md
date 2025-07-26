---
title: vertexprim
order: 44
---
`int  vertexprim(<geometry>geometry, int linearvertex)`

注意
要将线性索引转换为基元编号和基元顶点编号，
请使用[vertexprim](/zh-cn/houdini-vex/geometry/vertexprim "返回包含给定顶点的基元编号。")和[vertexprimindex](/zh-cn/houdini-vex/geometry/vertexprimindex "将线性顶点索引转换为基元顶点编号。")函数。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`linearvertex`

顶点的线性索引。
如果您有点编号和点顶点编号，可以使用[vertexindex](/zh-cn/houdini-vex/geometry/vertexindex "将基元/顶点对转换为线性顶点。")函数将它们转换为线性索引。

返回值

包含该顶点的基元编号，
如果顶点没有基元则返回`-1`。

## 示例

```vex
int pt;

// 获取顶点3所属的基元
pt = vertexprim("defgeo.bgeo", 3);

```
