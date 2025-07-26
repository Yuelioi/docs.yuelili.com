---
title: setvertexpoint
order: 37
---
`int  setvertexpoint(int geohandle, int prim, int vtxofprim, int pt)`

将指定顶点重新连接到某个点编号。

如果点编号为-1，则不进行重新连接。

如果prim为-1，则`vtxofprim`被视为线性索引，反之亦然。否则，使用(prim, vtxofprim)这对参数来标识基元顶点列表中的某个顶点。

此函数是等效函数[setprimvertex](/zh-cn/houdini-vex/geometry/setprimvertex "将几何体中的顶点重新连接到不同的点。")的新名称，为更清晰表达而添加。
