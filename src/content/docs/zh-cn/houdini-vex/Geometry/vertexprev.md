---
title: vertexprev
order: 43
---
`int  vertexprev(<geometry>geometry, int linearvertex)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`linearvertex`

顶点的线性索引。
如果您有点编号和点顶点编号，可以使用[vertexindex](/zh-cn/houdini-vex/geometry/vertexindex "将基元/顶点对转换为线性顶点。")将其转换为线性索引。

返回值

与给定顶点共享同一点的上一个顶点的线性索引，
如果该顶点没有更早的共享顶点，则返回`-1`。
（要向另一个方向遍历，请使用[vertexnext](/zh-cn/houdini-vex/geometry/vertexnext "返回与给定顶点共享点的下一个顶点的线性顶点编号。")。）

## 示例

```vex
int vtx;

// 获取顶点3的前一个顶点
vtx = vertexprev("defgeo.bgeo", 3);

```
