---
title: setprimvertex
order: 36
---
`int  setprimvertex(int geohandle, int prim, int vtxofprim, int pt)`

将指定顶点重新连接到点编号。

如果点编号为-1，则不进行重新连接。

如果prim为-1，则`vtxofprim`被视为线性索引，反之亦然。否则，使用(`prim`, `vtxofprim`)这对参数来标识基元顶点列表中的某个顶点。

由于此函数设置的是顶点的点连接关系，而非基元的顶点，因此建议改用功能相同的[setvertexpoint](/zh-cn/houdini-vex/geometry/setvertexpoint "将几何体中的顶点重新连接到不同的点。")函数以获得更清晰的表达。
