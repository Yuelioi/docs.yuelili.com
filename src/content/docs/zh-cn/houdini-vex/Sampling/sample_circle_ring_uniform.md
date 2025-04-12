---
title: sample_circle_ring_uniform
order: 10
---
| 始于版本 | 17.0 |
| --- | --- |

`vector2  sample_circle_ring_uniform(vector2 u, float alpha)`

`u`

介于0到1之间的数字对。

`alpha`

内半径边界值。介于0到1之间的数字。

返回一个基于`u`的长度<1的vector2向量。
给定在`[0,1)`区间内均匀随机的`u`数值对，
以及`[0,1]`区间内的`alpha`值，返回的向量将在内半径为`alpha`的单位圆环内保持均匀随机分布，并且相对于`u`是连续的。
具体而言，返回值为`scale*(cos(angle),sin(angle))`，其中`angle`为`2*pi*u.x`，
而`scale`为`sqrt((1-alpha^2)*u.y+alpha^2)`。
