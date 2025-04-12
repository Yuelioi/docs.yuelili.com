---
title: sample_exponential
order: 16
---
`float  sample_exponential(float u)`

`float  sample_exponential(float mean, float u)`

`float  sample_exponential(float origmean, float maxvalue, float u)`

`u`

范围在 `[0,1)` 之间的数值。

`mean`

分布的均值，若未指定则默认为1。

`origmean`

在没有 `maxvalue` 限制范围的情况下，分布应有的均值。

`maxvalue`

当给定该参数时，将不对完整的指数分布进行采样，而是采样范围限制在 `[0,maxvalue]` 的分布。

对具有指定 `mean` 的指数分布进行采样，可选择使用 `maxvalue` 参数。
给定均匀随机数 `u` 的值在 `[0,1)` 范围内时，该函数将返回指数分布的随机数。返回值相对于 `u` 是单调递增的。
