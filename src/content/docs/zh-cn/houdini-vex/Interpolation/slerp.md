---
title: slerp
order: 13
---
`vector4  slerp(vector4 q1, vector4 q2, float bias)`

基于偏置值在四元数q1和q2之间进行混合插值。

`vector4  slerp(vector4 qs[], float weights[], int normalize=0)`

使用指定的对应权重在任意数量的四元数之间进行混合插值。`slerp(q1,q2,bias)`等价于`slerp(array(q1,q2), array(1.0-bias,bias))`。

默认情况下，假定权重已归一化。若未归一化，可将normalize参数设为1以在插值前进行归一化处理，否则将返回未定义结果。

`matrix3  slerp(matrix3 m1, matrix3 m2, float bias)`

`matrix  slerp(matrix m1, matrix m2, float bias)`

基于偏置值在矩阵m1和m2之间进行混合插值。

`matrix3  slerp(matrix3 ms[], float weights[], int normalize=1)`

`matrix  slerp(matrix ms[], float weights[], int normalize=1)`

通过极分解方式，使用指定对应权重在任意数量矩阵的各个分量之间进行混合插值。

默认情况下，权重会在混合前进行归一化。若权重已归一化，可将normalize参数设为0。
