---
title: chprim_setkeyvalue
order: 12
---
`int  chprim_setkeyvalue(int geohandle, int prim, float time, float value)`

`int  chprim_setkeyvalue(int geohandle, int prim, float time, float value, int half)`

此函数用于设置现有通道基元键的值。

`geohandle`

要写入的几何体句柄。可使用`geoself()`获取当前几何体的句柄。

`prim`

待修改通道基元的基元编号。

`time`

要修改的键的时间（以秒为单位）。

`value`

要应用于键的新值。

`half`

指定要设置的键的半部分，取值为`CHPRIM_KEY_IN`、`CHPRIM_KEY_OUT`或`CHPRIM_KEY_INOUT`之一。默认为`CHPRIM_KEY_INOUT`。
这些值定义在`chprim_utils.h`头文件中。
注意：将此参数设置为`CHPRIM_KEY_INOUT`以外的值将在键处创建不连续性。
