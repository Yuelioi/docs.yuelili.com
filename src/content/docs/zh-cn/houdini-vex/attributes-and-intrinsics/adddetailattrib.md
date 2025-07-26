---
title: adddetailattrib
order: 2
---

如果直到运行时才知道属性的类别，请使用 [addattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/addattrib "向几何体添加属性")。

`int  adddetailattrib(int geohandle, string name, <type>defvalue)`

`int  adddetailattrib(int geohandle, string name, <type>defvalue[])`

向指定几何体添加一个细节属性。

`int  adddetailattrib(int geohandle, string name, <type>defvalue, string typeinfo)`

`int  adddetailattrib(int geohandle, string name, <type>defvalue[], string typeinfo)`

添加带有给定转换信息的细节属性。更多详情请参阅 [attribtypeinfo](/zh-cn/houdini-vex/attributes-and-intrinsics/attribtypeinfo "返回几何体属性的转换元数据")。

`geohandle`

要写入的几何体的句柄。目前唯一有效的值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。（此参数将来可能用于允许写入其他几何体。）

`name`

要创建的属性名称。

`defvalue`

属性的默认值，并确定要创建的属性类型。字符串和数组属性不能有默认值，因此在这些情况下仅使用类型。

返回值

成功时返回 `geohandle`，失败时返回 `-1`。

- 如果已存在同名属性，函数将尝试将其转换为新类型。
