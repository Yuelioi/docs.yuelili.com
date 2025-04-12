---
title: shrz
order: 70
---
`int  shrz(int a, int bits)`

将 `a` 向右移动 `bits` 位。这是一个零扩展移位，因此新位始终为零。因此，`shrz(-1, 2)` 的结果是 0，而不是 -1。
