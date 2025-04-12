---
title: random_poisson
order: 34
---
| 始于版本 | 17.0 |
| --- | --- |

`int  random_poisson(int seed, float mean)`

`int  random_poisson(int seed, float mean, int minvalue, int maxvalue)`

根据泊松分布的均值生成随机数。通过指定种子值，可以在相同均值下生成不同的随机数。

当指定`minvalue`和`maxvalue`参数时，生成的随机数将被限制在指定范围内。

警告
指定的范围不应偏离均值超过3个标准差，对于泊松分布而言，标准差等于`sqrt(mean)`。
