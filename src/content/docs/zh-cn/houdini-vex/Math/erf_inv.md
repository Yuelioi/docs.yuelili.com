---
title: erf_inv
order: 25
---
`float  erf_inv(float v)`

[高斯误差函数](http://en.wikipedia.org/wiki/Error_function)的反函数。

`erf_inv(erf(v)) = v = erf(erf_inv(v))`

要从一个均匀分布在0到1之间的随机数`u`生成一个均值为`mu`、标准差为`sigma`的正态分布随机数`n`，可使用公式：

`n = mu + sqrt(2)*sigma*erf_inv(2*u - 1)`
