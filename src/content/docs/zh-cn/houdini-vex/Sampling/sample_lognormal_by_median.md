---
title: sample_lognormal_by_median
order: 23
---

`float  sample_lognormal_by_median(float median, float stddev, float u)`

`float  sample_lognormal_by_median(float origmedian, float origstddev, float minvalue, float maxvalue, float u)`

`median`

该分布的中位数。

`origmedian`

如果没有`minvalue`和`maxvalue`限制范围时，该分布原本应该具有的中位数。

`stddev`

该分布的标准差。

`origstddev`

如果没有`minvalue`和`maxvalue`限制范围时，该分布原本应该具有的标准差（尺度参数）。

`u`

一个范围在`[0,1)`之间的数字。

`minvalue`,`maxvalue`

当提供这两个参数时，将不会对整个对数正态分布进行采样，而是采样范围限制在`[minvalue,maxvalue]`之间的分布。

使用指定的`median`和`stddev`采样对数正态分布，可选择性地使用`minvalue`和`maxvalue`参数。若要使用基础正态分布的参数`mu`和`sigma`而非`median`和`stddev`，请使用`sample_lognormal`函数。
给定在`[0,1)`范围内均匀随机的`u`值，该函数将返回对数正态分布的随机数。返回值将相对于`u`单调递增。

对数正态分布是通过对正态分布采样并对结果取指数得到的，因此该分布总是产生正值，所以常被用于生成随机点尺度。
