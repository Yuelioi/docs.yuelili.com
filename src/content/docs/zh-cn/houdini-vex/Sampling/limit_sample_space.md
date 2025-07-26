---
title: limit_sample_space
order: 3
---

`float  limit_sample_space(float minu, float maxu, float u)`

`float  limit_sample_space(float maxu, float u)`

`minu`

期望的`u`最小值。`minu`会被限制在0到1之间。
若未指定，`minu`默认为0。

`maxu`

期望的`u`最大值。`maxu`会被限制在0到1之间。

`u`

介于0到1之间的数值。

当`u`超出`[minu,maxu]`范围时，`u`会被以某种方式重新映射到该空间内，
使得在`[0,1)`区间均匀随机的`u`能产生`[minu,maxu]`区间内的均匀随机样本并返回。
这种方法避免了直接截断范围边界导致的额外样本聚集问题，同时也避免了范围适配对区间内样本的修改——
即如果`u`原本就在范围内，返回值将严格等于`u`。

不过，这种方法比范围适配或截断要慢得多，因此仅在同时需要均匀性和一致性的场景下使用。
例如，它可用于避免概率分布中的离群值，同时不影响非离群值样本。但这种方法也会导致结果不再随`u`单调递增。
实际上，仅使用范围适配通常也能有效避免离群值，代价是对非离群值样本产生轻微影响。

若要根据概率分布的`minvalue`和`maxvalue`确定`minu`和`maxu`，
可通过`minu = CDF(minvalue)`和`maxu = CDF(maxvalue)`计算，
其中`CDF`是该概率分布的累积分布函数（非逆函数）。
接收`minvalue`或`maxvalue`参数的[sample_exponential](/zh-cn/houdini-vex/sampling/sample_exponential "对指数分布进行采样")、
[sample_cauchy](/zh-cn/houdini-vex/sampling/sample_cauchy "对柯西（洛伦兹）分布进行采样")、[sample_normal](/zh-cn/houdini-vex/sampling/sample_normal "对正态（高斯）分布进行采样")、[sample_lognormal](/zh-cn/houdini-vex/sampling/sample_lognormal "基于底层正态分布参数对对数正态分布进行采样")和
[sample_lognormal_by_median](/zh-cn/houdini-vex/sampling/sample_lognormal_by_median "基于中位数和标准差对对数正态分布进行采样")函数版本都采用范围适配而非此限制方法，
因为前者能保持单调性。但若需要更好的区间样本一致性，可在采样前对本函数应用于`u`值。
