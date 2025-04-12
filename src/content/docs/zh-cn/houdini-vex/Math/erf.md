---
title: erf
order: 24
---
`float  erf(float v)`

`vector2  erf(vector2 v)`

[高斯误差函数](http://en.wikipedia.org/wiki/Error_function)。Houdini内部使用Boost库的实现。

erf(vector2)版本计算的是复误差函数，并返回复数结果。对于实数计算，该函数比erf(float)函数慢得多。
