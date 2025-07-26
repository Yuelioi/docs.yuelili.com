---
title: addpointattrib
order: 3
---

如果在运行时才知道属性的类别，请使用[addattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/addattrib "向几何体添加属性")。

`int addpointattrib(int geohandle, string name, <type>defvalue)`

`int addpointattrib(int geohandle, string name, <type>defvalue[])`

向指定几何体添加点属性。

`int addpointattrib(int geohandle, string name, <type>defvalue, string typeinfo)`

`int addpointattrib(int geohandle, string name, <type>defvalue[], string typeinfo)`

添加带有给定转换信息的点属性。详情请参阅[attribtypeinfo](/zh-cn/houdini-vex/attributes-and-intrinsics/attribtypeinfo "返回几何体属性的转换元数据")。

`geohandle`

要写入的几何体句柄。目前唯一有效的值是`0`或[geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。(此参数未来可能用于支持写入其他几何体)

`name`

要创建的属性名称。

`defvalue`

属性的默认值，并决定要创建的属性类型。字符串和数组属性不能有默认值，因此在这些情况下仅使用类型。

成功时返回`geohandle`，失败时返回`-1`。

- 如果已存在同名属性，函数将尝试将其转换为新类型。
