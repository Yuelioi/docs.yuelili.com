---
title: prerotate
order: 17
---
| 版本 | 17.5 |
| --- | --- |

`void  prerotate(matrix3 &m, float amount, vector axis)`

`void  prerotate(matrix &m, float amount, vector axis)`

`void  prerotate(matrix3 &m, vector angles, int xyz)`

`void  prerotate(matrix &m, vector angles, int xyz)`

`void  prerotate(matrix3 &m, float angle, int axis)`

`void  prerotate(matrix &m, float angle, int axis)`

对给定矩阵应用预旋转。角度必须以弧度为单位给出，且旋转轴必须已归一化。xyz参数表示旋转顺序。
旋转轴也可以用整数表示，其中XAXIS=1，YAXIS=2，ZAXIS=4。
