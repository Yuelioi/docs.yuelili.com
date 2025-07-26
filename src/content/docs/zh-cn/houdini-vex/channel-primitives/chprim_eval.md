---
title: chprim_eval
order: 4
---
`float  chprim_eval(<geometry>geometry, int prim, float time)`

返回通道图元在指定时间的评估值。

`geohandle`

要写入的几何体句柄。当前唯一有效值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前节点几何体的句柄")，表示节点中的当前几何体。（该参数未来可能用于支持写入其他几何体。）

`prim`

要评估的通道图元的图元编号。

`time`

评估时间（以秒为单位）。
