---
title: slideframe
order: 74
---
`vector  slideframe(vector t0, vector t1, vector v0)`

`vector  slideframe(vector x0, vector t0, vector v0, vector x1, vector t1)`

给定任意向量 `v0` 和两个单位向量 `t0` 和 `t1`，该函数对 `v0` 施加将 `t0` 旋转至 `t1` 的最小旋转，并返回结果。这等同于 `v0*dihedral(t0,t1)`，但执行效率会稍高一些。

第二个函数签名要求 `x1-x0` 的方向必须与 `t0` 和 `t1` 的平均方向相同，该版本主要用于保持兼容性，不过计算结果应该大致相同。

您可以使用此函数以旋转最小化的方式，将曲线起点处的法线向量沿着整条曲线进行延展。
