---
title: chprim_setkeyaccel
order: 10
---
`int  chprim_setkeyaccel(int geohandle, int prim, float time, float accel)`

`int  chprim_setkeyaccel(int geohandle, int prim, float time, float accel, int half)`

此函数用于设置现有通道基元键的加速度值。

`geohandle`

要写入的目标几何体句柄。可使用`geoself()`获取当前几何体的句柄。

`prim`

待修改通道基元的图元编号。

`time`

要修改的键对应的时间值（秒）。

`accel`

要应用于该键的新加速度值。

`half`

指定要设置的键的半边，可选值为`CHPRIM_KEY_IN`、`CHPRIM_KEY_OUT`或`CHPRIM_KEY_INOUT`。默认为`CHPRIM_KEY_INOUT`。
这些常量定义在`chprim_utils.h`头文件中。
注意：若设置为`CHPRIM_KEY_INOUT`以外的值，将在该键处产生加速度不连续性。
