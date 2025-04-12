---
title: svddecomp
order: 83
---
| 始于版本 | 18.0 |
| --- | --- |

`void  svddecomp(matrix2 input_M, matrix2 &output_U, vector2 &output_S, matrix2 &output_V)`

`void  svddecomp(matrix3 input_M, matrix3 &output_U, vector &output_S, matrix3 &output_V)`

`void  svddecomp(matrix input_M, matrix &output_U, vector4 &output_S, matrix &output_V)`

计算给定矩阵的[奇异值分解](http://en.wikipedia.org/wiki/Singular_value_decomposition)。更准确地说，计算`U`、`S`、`V`使得`M = U*T*transpose(V)`，其中`T`是由奇异值向量`S`构造的对角矩阵。

`vector2  svddecomp(matrix2 input_M)`

`vector  svddecomp(matrix3 input_M)`

`vector4  svddecomp(matrix input_M)`

此函数的第二种形式仅返回奇异值向量。
