---
title: predicate_orient2d
order: 56
---
`float  predicate_orient2d(vector2 a, vector2 b, vector2 c)`

给定平面上的两点 `a` 和 `b`，如果点 `c` 位于线段 `(a,b)` 的左侧则返回正值，若位于线段右侧则返回负值，若 `a`、`b` 和 `c` 三点共线则返回零。

更准确地说，该函数计算以下矩阵的行列式：

```vex
[a_x a_y 1; b_x b_y 1; c_x c_y 1]
```

...并确保符号的正确性。
