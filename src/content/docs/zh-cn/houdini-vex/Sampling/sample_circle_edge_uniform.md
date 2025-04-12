---
title: sample_circle_edge_uniform
order: 9
---
`vector2  sample_circle_edge_uniform(float u)`

`u`

介于0和1之间的数值。

返回一个单位向量2（即长度为1的vector2），基于参数`u`。
当输入在`[0,1)`区间内均匀随机的`u`值时，返回的单位向量将在单位圆边缘上相对于`u`呈现均匀随机且连续分布。
具体实现是返回`(cos(angle),sin(angle))`，其中`angle`等于`2*pi*u`。
