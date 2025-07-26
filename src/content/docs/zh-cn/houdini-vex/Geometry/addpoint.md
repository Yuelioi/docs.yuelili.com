---
title: addpoint
order: 1
---
`int  addpoint(int geohandle, int point_number)`

创建一个新点，该点具有给定点号对应点的所有属性和组关系。

`int  addpoint(int geohandle, vector pos)`

创建一个具有给定位置的新点。

`geohandle`

要写入的几何体的句柄。目前唯一有效的值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。（此参数将来可能用于允许写入其他几何体。）

返回值

所创建点的点号，如果无法创建点则返回 `-1`。

您可以使用返回值配合 [setpointattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/setpointattrib "设置几何体中点的属性") 来设置新点的属性，但这可能不是该点的最终编号。
