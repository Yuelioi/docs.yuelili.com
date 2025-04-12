---
title: rotate
order: 21
---
`void  rotate(matrix2 &m, float amount)`

`void  rotate(matrix3 &m, float amount, vector axis)`

`void  rotate(matrix &m, float amount, vector axis)`

`void  rotate(matrix3 &m, vector angles, int xyz)`

`void  rotate(matrix &m, vector angles, int xyz)`

`void  rotate(matrix3 &m, float angle, int axis)`

`void  rotate(matrix &m, float angle, int axis)`

对给定矩阵应用旋转。角度必须以弧度给出，且旋转轴必须已归一化。xyz参数表示旋转顺序。
旋转轴也可以使用整数表示，其中XAXIS=1，YAXIS=2，ZAXIS=4。
