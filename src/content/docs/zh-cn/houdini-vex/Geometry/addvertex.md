---
title: addvertex
order: 3
---

`int  addvertex(int geohandle, int prim_num, int point_num)` 

`geohandle` 

要写入的几何体句柄。目前唯一有效的值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄。")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。） 

`prim_num` 

要添加顶点的图元编号。 

`point_num` 

要将新顶点连接到的点编号。 

返回值 

返回一个*线性*顶点索引，如果无法添加顶点则返回 `-1`。您可以使用此编号通过 [setvertexattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/setvertexattrib "设置几何体中的顶点属性。") 为新顶点设置属性，但请注意该编号可能不是最终的顶点索引。
