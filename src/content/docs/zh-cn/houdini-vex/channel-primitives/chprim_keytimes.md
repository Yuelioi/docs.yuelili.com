---
title: chprim_keytimes
order: 7
---
`float [] chprim_keytimes(<geometry>geometry, int prim)`

返回通道图元中每个关键帧的时间（以秒为单位）数组。

`geohandle`

要写入的几何体句柄。目前唯一有效的值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前节点中几何体的句柄。")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。）

`prim`

通道图元的图元编号。
