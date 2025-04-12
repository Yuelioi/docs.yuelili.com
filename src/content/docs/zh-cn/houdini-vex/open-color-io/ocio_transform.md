---
title: ocio_transform
order: 7
---
`vector  ocio_transform(string dest, vector clr)`

`vector  ocio_transform(string src, string dest, vector clr)`

`vector  ocio_transform(string src, string dest, string looks, vector clr)`

将三分量颜色转换至新的色彩空间。

`vector4  ocio_transform(string dest, vector4 clr)`

`vector4  ocio_transform(string src, string dest, vector4 clr)`

`vector4  ocio_transform(string src, string dest, string looks, vector4 clr)`

将四分量颜色转换至新的色彩空间。

`src`

源色彩空间名称。若未指定，则默认使用分配给`"data"`的空间。

`dest`

目标色彩空间名称。

`looks`

以逗号分隔的色彩分级列表（也称为"外观"）。

`clr`

待转换的颜色值。
