---
title: sample_direction_cone
order: 13
---
`vector  sample_direction_cone(vector center, float maxangle, vector2 u)`

`center`

圆锥中心的方向向量。该向量不需要进行归一化处理。

`maxangle`

最大角度（以弧度为单位），表示采样方向与`center`之间的最大偏离角度。只要`u`的所有取值在0到1之间，采样方向就不会超过这个角度范围。

`u`

介于0和1之间的一对数字。

返回一个基于`u`的单位向量（即长度为1的向量）。
当给定均匀随机的`u`值对（取值区间为`[0,1)`）时，返回的单位向量将在单位球面上、以`center`指示方向为中心、`maxangle`为半径的区域内呈现均匀随机且相对于`u`连续的分布特性。
