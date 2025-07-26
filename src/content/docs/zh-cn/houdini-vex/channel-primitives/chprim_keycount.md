---
title: chprim_keycount
order: 6
---
`int  chprim_keycount(<geometry>geometry, int prim)`

返回通道基元中的键数量。

`geohandle`

要写入的几何体句柄。当前唯一有效的值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前节点中几何体的句柄。")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。）

`prim`

通道基元的基元编号。
