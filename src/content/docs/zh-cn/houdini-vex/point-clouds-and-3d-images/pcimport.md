---
title: pcimport
order: 14
---

此函数仅在通过 `pciterate` 或 `pcunshaded` 进行循环时有效。

`int  pcimport(int handle, string channel_name, <type>&value)`

将点云文件中的数据导入到给定变量中。

`channel_name`

可以导入两种特殊通道名称：

`point.number`

当前处理点的编号。

`point.distance`

当前处理点与查询点之间的距离。
此通道仅在遍历未着色点时可用。

`value`

如果导入成功，该函数会用通道值覆盖此变量。

返回值

导入成功返回 `1`，导入失败返回 `0`（通常是由于给定的通道名称不存在）。
