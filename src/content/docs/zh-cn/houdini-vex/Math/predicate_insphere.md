---
title: predicate_insphere
order: 55
---

`float  predicate_insphere(vector a, vector b, vector c, vector d, vector e)`

给定三维空间中的4个点 `a`、`b`、`c` 和 `d`，如果点 `e` 位于四面体 `abcd` 的外接球内部则返回正值，如果 `e` 在外接球外部则返回负值，若 `e` 恰好位于外接球上则返回零。

更准确地说，该函数计算以下矩阵的行列式：

```vex
[a_x a_y a_z a^2 1; b_x b_y b_z b^2 1; c_x c_y c_z c^2 1; d_x d_y d_z d^2 1; e_x
e_y e_z e^2 1]
```

其中 `a^2`、`b^2`、`c^2`、`d^2` 和 `e^2` 表示对应输入向量的平方长度，并确保符号计算正确。
