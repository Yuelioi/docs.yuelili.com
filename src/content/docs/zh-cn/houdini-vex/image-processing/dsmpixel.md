---
title: dsmpixel
order: 9
---

`int  dsmpixel(string map, string channel, int x, int y, <type>&values[])`

深度阴影图(DSM)通道的每个像素都包含多个值。此函数将提取指定像素对应通道的值列表。

返回深度像素中的值的数量（失败时返回-1）。

DSM始终包含`Pz`和`Of`通道。`Pz`通道存储每个记录的z深度值，`Of`通道存储不透明度值。
