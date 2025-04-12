---
title: setedgegroup
order: 35
---
`int  setedgegroup(int geohandle, string name, int pt0, int pt1, int value)`

修改给定几何体上的边组(group)成员关系。如果组不存在，将会被创建。

`geohandle` 是要写入的几何体的句柄。可以使用 `geoself()` 获取当前几何体的句柄。

`name` 是要修改的组的名称。

`pt0`, `pt1` 是要修改组关系的边的点对。

如果 `value` 不是0，该边将被包含在组中。

注意：只有有效的边才能通过这种方式创建，如果给定的点对不能构成一条边，则不会有任何边被添加到组中。
