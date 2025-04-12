---
title: sample_circle_uniform
order: 12
---
`vector2  sample_circle_uniform(vector2 u)`

`u`

介于0和1之间的一对数字。

返回一个基于`u`的长度小于1的vector2向量。
给定在`[0,1)`区间内均匀随机的`u`值对，返回的向量将在单位圆内均匀随机分布，并且相对于`u`是连续的。
具体来说，它返回`scale*(cos(angle),sin(angle))`，其中`angle`是`2*pi*u.x`，
而`scale`是`sqrt(u.y)`。
