---
title: shr
order: 69
---
`int  shr(int a, int bits)`

将 `a` 向右位移 `bits` 位。

这是算术位移，符号位会一同移动。因此，`shr(-1, 2)` 的结果是 -1，而不是 0。
