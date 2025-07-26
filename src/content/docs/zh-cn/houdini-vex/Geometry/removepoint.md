---
title: removepoint
order: 32
---

`int removepoint(int geohandle, int point_number)`

`int removepoint(int geohandle, int point_number, int and_prims)`

`geohandle`

要写入的几何体句柄。目前唯一有效的值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。）

`point_number`

如果该值为 `-1`，则函数不产生任何效果。

`and_prims`

如果该值为 `1`，函数会删除所有引用被移除点的*退化*图元（例如，顶点少于3个的闭合多边形或顶点少于2个的开放多边形）。

如果该值为 `0`，函数仅删除因移除点而失效的图元（例如，顶点少于4个的四面体，或零顶点的体积体）。
