---
title: setagentlocaltransform
order: 60
---
`int  setagentlocaltransform(int geohandle, int prim, matrix transform, int index)`

`geohandle`

要写入的目标几何体的句柄。可以使用`geoself()`获取当前几何体的句柄。

`prim`

图元编号。

`transform`

骨骼的新变换矩阵（局部空间坐标系下）。

`index`

代理骨骼装配系统中变换矩阵的索引号。
