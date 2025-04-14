---
title: pcimportbyidx3
order: 15
---
`matrix3  pcimportbyidx3(int handle, string channel_name, int idx)`

在[pcopen](./pcopen "返回点云文件的句柄")和[pcnumfound](./pcnumfound "该节点返回pcopen找到的点数")之后，可以使用此函数从找到的点中提取特定的搜索结果。

如果通道不存在，将返回0。
