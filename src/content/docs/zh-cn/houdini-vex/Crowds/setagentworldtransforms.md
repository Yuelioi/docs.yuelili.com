---
title: setagentworldtransforms
order: 63
---
`void  setagentworldtransforms(int geohandle, int prim, matrix transforms[])`

当只需要修改单个变换时，使用[setagentworldtransform](/zh-cn/houdini-vex/crowds/setagentworldtransform "覆盖代理基元骨骼的世界空间变换。")可能会显著提高性能。

`geohandle`

要写入的几何体句柄。可以使用`geoself()`获取当前几何体的句柄。

`prim`

基元编号。

`transforms`

代理骨骼装配中每个骨骼的新变换（世界空间坐标系下）。
