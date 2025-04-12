---
title: refract
order: 63
---
`vector  refract(vector 方向, vector 法线, float 折射率)`

根据入射方向、归一化法线和折射率返回折射光线。

该折射率是相对折射率，即内部折射率与外部折射率的比值，其中外部由法线方向定义（法线指向远离内部的方向）。

在发生全内反射的情况下，此函数返回反射向量。

例如：

```vex
refract(normalize(I), normalize(N), outside_to_inside_ior)

```
