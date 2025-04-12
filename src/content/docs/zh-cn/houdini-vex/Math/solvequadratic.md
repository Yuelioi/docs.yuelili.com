---
title: solvequadratic
order: 77
---
`int  solvequadratic(float a, float b, float c, float &t1, float &t2)`

`int  solvequadratic(float a, float b, float c, vector2 &t2, vector2 &t2)`

求解给定的二次函数，其中a、b、c为系数，形式为：`ax^2 + bx + c = 0`。

返回实数根的数量。

在实数情况下，t1和t2会被填充，且满足t1 ≤ t2。如果只有一个根，则t1 = t2。如果没有实数根，则t1 = t2且表示二次函数顶点在x轴上的投影。

在复数情况下，t1和t2表示复数根。
