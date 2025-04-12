---
title: sample_circle_slice
order: 11
---

`vector2 sample_circle_slice(vector2 center, float maxangle, vector2 u)`

`center`

切片中心的方向向量。该向量不需要进行归一化处理。

`maxangle`

最大角度（以弧度为单位），表示采样点与`center`方向的最大偏离角度。只要所有`u`值在0到1之间，采样点都不会超过这个角度范围。

`u`

介于0到1之间的一对数值。

返回一个长度小于1的vector2向量，基于输入参数`u`生成。
当给定均匀分布在`[0,1)`区间内的随机`u`值对时，返回的向量将在单位圆内均匀随机分布，且在`center`方向指示的`maxangle`角度切片范围内，这些向量相对于`u`是连续的。
