---
title: predicate_orient3d
order: 57
---
`float  predicate_orient3d(vector a, vector b, vector c, vector d)`

给定空间中的3个点 `a`、`b` 和 `c`，如果点 `d` 位于由三角形 `abc` 定义的平面后方（遵循右手定则的环绕顺序），则返回负值；如果位于平面前方则返回正值；若点 `a`、`b`、`c` 和 `d` 共面则返回零。

更准确地说，该函数计算以下矩阵的行列式：

```vex
[a_x a_y a_z 1; b_x b_y b_z 1; c_x c_y c_z 1; d_x d_y d_z 1]
```

...并保证符号的正确性。
