---
title: predicate_incircle
order: 54
---
`float  predicate_incircle(vector2 a, vector2 b, vector2 c, vector2 d)`

给定平面上的3个点`a`、`b`和`c`，如果点`d`位于三角形`abc`的外接圆内则返回正值，若在圆外则返回负值，若恰好在圆上则返回零。

更准确地说，该函数计算以下矩阵的行列式：

```vex
[a_x a_y a^2 1; b_x b_y b^2 1; c_x c_y c^2 1; d_x d_y d^2 1]
```

...并保证符号正确，其中`a^2`、`b^2`、`c^2`和`d^2`分别是各输入向量的平方长度。
