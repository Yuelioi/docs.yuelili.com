---
title: polardecomp
order: 16
---
`matrix3  polardecomp(matrix3 transform)`

计算伸缩矩阵(S)和正交矩阵(Q)，使得 `M = S*Q`。
这对于形变匹配或变换混合非常有用。

`transform`

需要进行极分解的矩阵(M)。

返回值

'Q'，即最匹配给定变换的正交矩阵。

`void  polardecomp(matrix3 transform, matrix3 &rot, matrix3 &stretch, int check_determinant=1)`

`&rot`

返回极分解的正交矩阵。

`&stretch`

返回极分解的伸缩矩阵。

`check_determinant`

是否检查负行列式(缩放)。如果存在负行列式且此参数未设置为0，正交矩阵和缩放矩阵将被取反。
