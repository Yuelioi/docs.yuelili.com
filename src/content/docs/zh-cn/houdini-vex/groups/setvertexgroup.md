---
title: setvertexgroup
order: 12
---
`int  setvertexgroup(int geohandle, string name, int prim_num, int vertex_num, int value, string mode="set")`

`geohandle`

要写入的几何体句柄。目前唯一有效的值是`0`或[geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前节点的几何体句柄")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。）

**要使用线性顶点索引**，请将`prim_num`设置为**线性顶点编号**，并将`vertex_num`设置为`-1`。注意**这与大多数其他顶点函数的工作方式不同**。

`name`

要修改的顶点组名称。

`prim_num`

包含要添加/删除顶点的基元编号。

`vertex_num`

要添加/删除顶点在基元上的顶点偏移量。

`value`

`1`表示将顶点加入组，`0`表示从组中移除顶点。
如果`mode`为`"toggle"`，则忽略此参数。

`mode`

使用`"set"`根据`value`值设置顶点成员资格。
使用`"toggle"`切换顶点成员资格，忽略`value`值。
