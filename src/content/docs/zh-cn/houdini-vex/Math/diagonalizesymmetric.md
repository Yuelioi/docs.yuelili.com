---
title: diagonalizesymmetric
order: 18
---

| 版本 | 17.0 |
| --- | --- |

`matrix2 diagonalizesymmetric(matrix2 symmat, vector2 &diag)`

`matrix3 diagonalizesymmetric(matrix3 symmat, vector &diag)`

`matrix diagonalizesymmetric(matrix symmat, vector4 &diag)`

对角化一个[对称矩阵](http://en.wikipedia.org/wiki/Symmetric_matrix)。

返回一个正交矩阵，该矩阵与第二个参数隐含的对角矩阵组合后，将构成原始对称矩阵。

这对于分析一系列外积更新求和的结果很有用。

`symmat`

要对角化的对称矩阵。

`diag`

对角矩阵的对角元素。
