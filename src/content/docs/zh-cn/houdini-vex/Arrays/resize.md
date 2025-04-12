---
title: resize
order: 13
---
`void  resize(<type>&array[], int size)`

改变给定数组的大小。如果 `size` 大于数组当前长度，数组末尾的额外项将被初始化为该类型的默认值（例如 `0`、空字符串、`{0,0,0}` 等）。

`void  resize(<type>&array[], int size, <type>val)`

改变给定数组的大小。如果 `size` 大于数组当前长度，数组末尾的额外项将被初始化为 `val`。
