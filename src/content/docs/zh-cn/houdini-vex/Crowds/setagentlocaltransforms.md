---
title: setagentlocaltransforms
order: 61
---
`void  setagentlocaltransforms(int geohandle, int prim, matrix transforms[])`

当只需修改单个变换时，使用[setagentlocaltransform](/zh-cn/houdini-vex/crowds/setagentlocaltransform "覆盖代理图元骨骼的局部空间变换。")可能会显著提高效率。

`geohandle`

要写入的目标几何体句柄。可使用`geoself()`获取当前几何体的句柄。

`prim`

图元编号。

`transforms`

代理骨骼系统中每个骨骼的新变换矩阵（基于局部空间坐标系）。
