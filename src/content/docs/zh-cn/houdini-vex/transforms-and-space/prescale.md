---
title: prescale
order: 18
---
| 始于 | 17.5 |
| --- | --- |

`void  prescale(matrix &m, vector scale_vector)`

`void  prescale(matrix3 &m, vector scale_vector)`

通过向量中的因子同时在三个方向上对矩阵进行预缩放。
此操作会原地修改矩阵，而不是返回一个新矩阵。
