---
title: setprimgroup
order: 11
---

`int  setprimgroup(int geohandle, string name, int prim_num, int value, string mode="set")`

`geohandle`

要写入的几何体句柄。目前唯一有效的值是`0`或[geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。）

`name`

要修改的组名称。

`prim_num`

要从组中添加或移除的基元编号。

`value`

`1`表示将基元加入组，`0`表示从组中移除基元。
如果`mode`为`"toggle"`，则忽略此参数。

`mode`

使用`"set"`根据`value`值设置基元的成员关系。
使用`"toggle"`切换基元的成员关系，忽略`value`值。
