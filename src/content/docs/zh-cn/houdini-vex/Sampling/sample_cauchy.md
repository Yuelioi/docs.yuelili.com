---
title: sample_cauchy
order: 6
---
`float  sample_cauchy(float u)`

`float  sample_cauchy(float scale, float u)`

`vector2  sample_cauchy(float scale, vector2 u)`

`float  sample_cauchy(float origscale, float minvalue, float maxvalue, float u)`

`<vector> sample_cauchy(<vector>u)`

从均值为0、尺度参数为1的多元柯西分布中采样。
这些向量的分布被强制为各向同性，即旋转分布不会改变它，这在模拟中很有用。
如果像单变量柯西分布那样独立采样向量分量，就不会保持这种特性。

`u`

一个或多个在`[0,1)`范围内的数值。

`scale`

分布的尺度参数，未指定时默认为1。
这是第50百分位数与第75百分位数之间的差值。

`origscale`

不考虑`minvalue`和`maxvalue`范围限制时的原始尺度参数。

`minvalue`,`maxvalue`

当给定这些参数时，将不采样完整的柯西分布，
而是采样范围限制在`[minvalue,maxvalue]`内的分布。

返回值

相对于`u`单调递增的值。

从均值为零、指定`scale`的柯西分布中采样，
可选择带有`minvalue`和`maxvalue`限制。
给定`[0,1)`范围内的均匀随机值`u`，将返回柯西分布的随机数。

注意，在没有限制的情况下，柯西分布没有定义均值或方差，
如果不谨慎处理可能会导致统计问题。

要添加距原点的最大距离限制，同时保持分布的各向同性，可使用：

```vex
!vex
sample_cauchy(1,0,maxdist,u.x) * sample_direction_uniform(set(u.y,u.z))
```

二维柯西分布是光子击中平面的分布，
这些光子来自距离平面`scale`处的点光源。
