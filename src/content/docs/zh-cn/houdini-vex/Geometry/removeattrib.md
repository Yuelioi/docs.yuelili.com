---
title: removeattrib
order: 31
---
`int  removeattrib(int geohandle, string attribclass, string name)`

`geohandle`

要写入的几何体句柄。目前唯一有效的值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。）

`attribclass`

可以是 `"detail"`（或 `"global"`）、`"point"`、`"prim"` 或 `"vertex"` 之一。

你也可以使用 `"primgroup"`、`"pointgroup"` 或 `"vertexgroup"` 来[从组中读取](../groups.html "在VEX中，你可以像读取属性一样读取基元/点/顶点组的内容。")。

`name`

要移除的属性或组的名称。
