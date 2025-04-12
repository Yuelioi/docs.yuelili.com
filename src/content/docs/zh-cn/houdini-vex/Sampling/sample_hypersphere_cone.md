---
title: sample_hypersphere_cone
order: 19
---
`vector4  sample_hypersphere_cone(vector4 center, float maxangle, vector4 u)`

`center`

圆锥体中心轴的方向向量。该向量不需要归一化。

`maxangle`

最大角度（以弧度为单位），表示采样点与`center`的最大偏离角度。只要所有`u`值都在0到1之间，采样点就不会超过这个角度范围。

`u`

四个介于0到1之间的数值。

返回一个长度小于1的vector4向量，基于输入参数`u`生成。
当给定由四个`[0,1)`区间内数值组成的均匀随机`u`向量时，返回的向量将在单位超球体内、且在以`center`指示方向为中心的`maxangle`角度范围内的超体积中，呈现均匀随机且相对于`u`连续分布的特性。
