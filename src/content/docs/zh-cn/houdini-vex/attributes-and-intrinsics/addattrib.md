---
title: addattrib
order: 1
---

如果提前知道要添加的属性类别，使用 [adddetailattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/adddetailattrib "向几何体添加细节属性")、[addprimattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/addprimattrib "向几何体添加图元属性")、[addpointattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/addpointattrib "向几何体添加点属性") 或 [addvertexattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/addvertexattrib "向几何体添加顶点属性") 可能更快。

`int  addattrib(int geohandle, string attribclass, string name, <type>defvalue)`

`int  addattrib(int geohandle, string attribclass, string name, <type>defvalue[])`

`geohandle`

要写入的几何体句柄。目前唯一有效的值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前节点的几何体句柄")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体）

`attribclass`

可以是 `"detail"`（或 `"global"`）、`"point"`、`"prim"` 或 `"vertex"` 之一。

也可以使用 `"primgroup"`、`"pointgroup"` 或 `"vertexgroup"` 来[从组中读取](../groups.html "在VEX中可以将图元/点/顶点组的内容作为属性读取")。

`name`

要创建的属性名称。

`defvalue`

属性的默认值，决定了要创建的属性类型。字符串和数组属性不能有默认值，因此这些情况下仅使用类型信息。

返回值

成功时返回 `geohandle`，失败时返回 `-1`。

- 如果已存在同名属性，函数会尝试将其转换为新类型。
