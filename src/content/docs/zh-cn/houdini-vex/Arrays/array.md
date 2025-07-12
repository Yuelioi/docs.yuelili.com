---
title: array
order: 3
---
`<type>[] array(...)`

返回给定类型的项目数组。

您应该使用函数式类型转换来确保数组成员具有正确的类型：

```vex
vector v[] = vector[](array( 1, {1,2,3}, 3, s, t, Cl, P, N));
float f[] = float[](array(1, 2, s, t, length(P-L), length(N)));

```
