---
title: vertexhedge
order: 22
---
`int  vertexhedge(<geometry>geometry, int vertex)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`vertex`

几何体中的线性顶点编号。`0`表示第一个顶点。

返回值

返回以`vertex`为源点、以`vertex`所在图元中`vertex`的下一个顶点为目标点的半边编号。
如果找不到对应顶点，则返回`-1`。

## 示例

```vex
int vtxhedge;

// 获取顶点编号2的出半边
vtxhedge = vertexhedge("defgeo.bgeo", 2);

```
