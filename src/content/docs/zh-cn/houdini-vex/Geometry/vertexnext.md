---
title: vertexnext
order: 41
---
`int  vertexnext(<geometry>geometry, int linearvertex)`

`<geometry>`

在节点上下文（例如wrangle SOP）中运行时，该参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数也可以是一个指定几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`这样的引用路径。

`linearvertex`

顶点的线性索引。
如果有点号和点顶点号，可以使用[vertexindex](/zh-cn/houdini-vex/geometry/vertexindex "将基元/顶点对转换为线性顶点。")将其转换为线性索引。

返回值

与给定顶点共享同一点的下一个顶点的线性索引，
如果该顶点没有后续共享顶点，则返回`-1`。
（如需反向遍历，请使用[vertexprev](/zh-cn/houdini-vex/geometry/vertexprev "返回与给定顶点共享同一点的前一个顶点的线性顶点编号。")。）

## 示例

```vex
int vtx;

// 获取顶点3的下一个顶点
vtx = vertexnext("defgeo.bgeo", 3);

```
