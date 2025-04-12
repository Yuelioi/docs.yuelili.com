---
title: dot
order: 22
---
`float  dot(vector2 a, vector2 b)`

`float  dot(vector a, vector b)`

`float  dot(vector4 a, vector4 b)`

`float  dot(vector a, vector4 b)`

`float  dot(vector4 a, vector b)`

`float  dot(matrix2 a, matrix2 b)`

`float  dot(matrix3 a, matrix3 b)`

`float  dot(matrix a, matrix b)`

返回参数的[点积](http://en.wikipedia.org/wiki/Dot_product)值。

当计算`vector`与`vector4`的点积时，仅使用前三个分量。

`float  dot(<type>a[], <type>b[])`

`int  dot(int a[], int b[])`

返回点积之和，即`dot(a, b) = dot(a[0], b[0]) + ... + dot(a[n-1], b[n-1])`，其中`n = min(len(a), len(b))`。
