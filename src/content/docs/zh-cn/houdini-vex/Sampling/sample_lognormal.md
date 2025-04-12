---
title: sample_lognormal
order: 22
---
`float  sample_lognormal(float mu, float sigma, float u)`

`float  sample_lognormal(float mu, float sigma, float minvalue, float maxvalue, float u)`

`mu`

基础正态分布的平均值。

`sigma`

基础正态分布的标准差。

`u`

范围在 `[0,1)` 之间的数值。

`minvalue`,`maxvalue`

当提供时，不会对整个对数正态分布进行采样，而是采样范围限制在 `[minvalue,maxvalue]` 内的分布。

使用指定的 `mu` 和 `sigma` 采样对数正态分布，可选地使用 `minvalue` 和 `maxvalue`。如需使用更直观的参数 `median`（中位数）和 `stddev`（标准差），请使用 `sample_lognormal_by_median`。
给定均匀随机的 `u` 值在 `[0,1)` 范围内，此函数将返回对数正态分布的随机数。返回值将相对于 `u` 单调递增。

对数正态分布是通过采样正态分布并对结果取指数来采样的，因此结果总是正数，所以该分布常用于生成随机点尺度。
