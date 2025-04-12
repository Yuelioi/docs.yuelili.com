---
title: makebasis
order: 41
---
`void  makebasis(vector &xaxis, vector &yaxis, vector zaxis)`

`void  makebasis(vector &xaxis, vector &yaxis, vector zaxis, vector u)`

为给定的 `zaxis` 向量补全一个由 `xaxis` 和 `yaxis` 基向量组成的标准正交基。当仅提供 `zaxis` 向量时，基的朝向将是任意的。当提供第二个向量 `u` 时，`yaxis` 向量将被约束为与该向量对齐。
