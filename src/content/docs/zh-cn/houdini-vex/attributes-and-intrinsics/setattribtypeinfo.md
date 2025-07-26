---
title: setattribtypeinfo
order: 64
---

`int  setattribtypeinfo(int geohandle, string attribclass, string name, string typeinfo)`

`geohandle`

要写入的几何体句柄。目前唯一有效的值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前节点几何体的句柄")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。）

`attribclass`

可以是 `"detail"`（或 `"global"`）、`"point"`、`"prim"` 或 `"vertex"` 之一。

也可以使用 `"primgroup"`、`"pointgroup"` 或 `"vertexgroup"` 来[从组中读取](../groups.html "在VEX中，可以像读取属性一样读取基元/点/顶点组的内容。")。

`name`

要更改变换信息的属性名称。

`typeinfo`

属性的含义，由变换节点用来确定如何修改该属性。可选值包括：

| `"none"` | 不进行变换。 |
| --- | --- |
| `"point"` | 应用缩放、旋转和变换。 |
| `"hpoint"` | 对这个vector4应用缩放、旋转和变换。 |
| `"vector"` | 应用缩放和旋转，但不应用变换。 |
| `"normal"` | 应用旋转，缩放时使用逆转置。 |
| `"color"` | 不进行变换。 |
| `"matrix"` | 对这个矩阵应用缩放、旋转和变换。 |
| `"quaternion"` | 应用旋转。 |
| `"indexpair"` | 不进行变换。 |
| `"integer"` | 在点平均时不混合此值。 |
| `"integer-blend"` | 在点平均时会混合的整数值。 |
| `"texturecoord"` | 不进行变换，并在插值时尝试保持接缝。具有此类型的属性会显示在UV视口菜单中。 |
