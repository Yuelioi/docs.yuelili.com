---
title: setpointgroup
order: 10
---

`int  setpointgroup(int geohandle, string name, int point_num, int value, string mode="set")`

`geohandle`

要写入的几何体句柄。目前唯一有效的值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。）

`name`

要修改的组名称。

`point_num`

要添加或从组中移除的点的编号。

`value`

`1` 表示将点加入组，`0` 表示将点从组中移除。
如果 `mode` 为 `"toggle"`，则忽略此参数。

`mode`

使用 `"set"` 根据 `value` 设置点的成员资格。
使用 `"toggle"` 切换点的成员资格，无论 `value` 为何值。
