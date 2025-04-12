---
title: sample_hypersphere_uniform
order: 20
---
`vector4  sample_hypersphere_uniform(vector4 u)`

`u`

四个介于0到1之间的数值。

返回一个基于`u`的长度<1的vector4向量。
给定在`[0,1)`区间内四个值的均匀随机`u`向量，返回的向量将在单位超球体内呈现均匀随机分布，并且相对于`u`保持连续性。
