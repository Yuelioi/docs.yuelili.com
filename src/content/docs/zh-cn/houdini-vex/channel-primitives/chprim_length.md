---
title: chprim_length
order: 9
---
`float  chprim_length(<geometry>geometry, int prim)`

返回通道基元的长度（以秒为单位）。

`geohandle`

要写入的几何体句柄。目前唯一有效的值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄。")，表示节点中的当前几何体。（此参数未来可能用于允许写入其他几何体。）

`prim`

通道基元的基元编号。
