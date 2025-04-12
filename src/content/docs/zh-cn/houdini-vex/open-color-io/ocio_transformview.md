---
title: ocio_transformview
order: 8
---
`vector  ocio_transformview(string src, string display, string view, vector clr)`

将三通道颜色转换至新的视图空间。

`vector4  ocio_transformview(string src, string display, string view, vector4 clr)`

将四通道颜色转换至新的视图空间。

`src`

源色彩空间的名称。

`display`

包含目标视图的显示设备名称。

`view`

要转换至的目标视图名称。

`clr`

待转换的颜色值。
