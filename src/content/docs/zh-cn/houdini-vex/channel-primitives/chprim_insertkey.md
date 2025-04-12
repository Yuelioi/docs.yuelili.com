---
title: chprim_insertkey
order: 5
---
`int  chprim_insertkey(int geohandle, int prim, float time)`

此函数用于向通道基元添加关键帧。

`geohandle`

要写入的目标几何体的句柄。可使用`geoself()`获取当前几何体的句柄。

`prim`

待修改的通道基元的图元编号。

`time`

插入关键帧的时间点（以秒为单位）。
