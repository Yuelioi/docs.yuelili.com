---
title: addvariablename
order: 1
---

`void addvariablename(string aname, string vname)`

在当前几何体上下文中，为几何体添加一个映射关系。

`int addvariablename(int geohandle, string aname, string vname)`

为指定几何体添加映射关系。成功时返回`geohandle`。

`geohandle`

要写入的几何体句柄。目前唯一有效的值是`0`或[geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。(此参数未来可能用于支持写入其他几何体)

添加属性`aname`到局部变量`vname`的映射。在支持此功能的SOP中，您将可以使用局部变量`$vname`来引用属性aname。这模拟了[AttribCreate SOP](../../nodes/sop/attribcreate.html "添加或编辑用户定义属性")的行为。
