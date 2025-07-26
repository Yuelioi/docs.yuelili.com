---
title: pcnumfound
order: 25
---

该节点返回通过[pcopen](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcopen "返回点云文件的句柄。")查询找到的点数量。

例如，如果有10个点被筛选，其中6个在搜索半径内，`pcnumfound`将返回6。

`int  pcnumfound(int handle)`

返回由[pcopen](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcopen "返回点云文件的句柄。")执行的搜索所找到的点数量。
