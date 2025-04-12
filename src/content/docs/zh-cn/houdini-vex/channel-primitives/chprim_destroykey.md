---
title: chprim_destroykey
order: 2
---
`int  chprim_destroykey(int geohandle, int prim, float time)`

此函数用于移除通道基元中的关键帧。

`geohandle`

要写入的目标几何体的句柄。可使用`geoself()`获取当前几何体的句柄。

`prim`

待修改通道基元的基元编号。

`time`

要移除的关键帧时间（以秒为单位）。
