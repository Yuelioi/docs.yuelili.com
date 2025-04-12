---
title: sample_normal
order: 24
---
`float  sample_normal(float u)`

`float  sample_normal(float mean, float stddev, float u)`

`float  sample_normal(float origmean, float origstddev, float minvalue, float maxvalue, float u)`

`vector2  sample_normal(vector2 u)`

`vector  sample_normal(vector u)`

`vector4  sample_normal(vector4 u)`

`u`

一个或多个在 `[0,1)` 范围内的数值。

`mean`

分布的均值，未指定时默认为0。

`origmean`

不考虑 `minvalue` 和 `maxvalue` 范围限制时的原始分布均值。

`stddev`

分布的标准差（尺度参数），未指定时默认为1。

`origstddev`

不考虑 `minvalue` 和 `maxvalue` 范围限制时的原始分布标准差。

`minvalue`,`maxvalue`

当提供这两个参数时，将采样范围限制在 `[minvalue,maxvalue]` 内的正态分布。

根据指定的 `mean` 和 `stddev` 参数采样正态分布，可选择性地使用 `minvalue` 和 `maxvalue` 限制范围。
给定 `[0,1)` 区间内的均匀随机数 `u`，该函数将返回符合正态分布的随机数。返回值相对于 `u` 是单调递增的。

`vector2`、`vector` 和 `vector4` 版本返回均值为0、标准差为1的多个采样值。这些向量的分布具有天然的等向性（isotropic），即旋转分布不会改变其特性，这在模拟中很有用。
若要在保持分布等向性的同时限制与原点的最大距离，可使用：

`sample_normal(0,1,0,maxdist,u.x) * sample_direction_uniform(set(u.y,u.z))`
