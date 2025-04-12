---
title: priminteriorweights
order: 52
---
`int  priminteriorweights(<geometry>geometry, int prim_num, vector uvw, int &verts[], float &weights[])`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim_num`

要读取属性的基元编号。

`uvw`

读取属性时的基元UVW坐标。

根据UVW坐标，查找将计算内部点的顶点索引和权重。这些索引是线性顶点索引。
