---
title: chprim_setkeyslope
order: 11
---
`int  chprim_setkeyslope(int geohandle, int prim, float time, float slope)`

`int  chprim_setkeyslope(int geohandle, int prim, float time, float slope, int half)`

此函数用于设置现有通道基元键的斜率。

`geohandle`

要写入的几何体句柄。可使用`geoself()`获取当前几何体的句柄。

`prim`

待修改通道基元的图元编号。

`time`

要修改的键的时间（以秒为单位）。

`slope`

要应用于键的新斜率值。

`half`

指定要设置的键的半部分，可选值为`CHPRIM_KEY_IN`、`CHPRIM_KEY_OUT`或`CHPRIM_KEY_INOUT`。默认为`CHPRIM_KEY_INOUT`。
这些值定义在`chprim_utils.h`头文件中。
注意：若设置为此参数为`CHPRIM_KEY_INOUT`以外的值，将在键处产生斜率不连续性。
