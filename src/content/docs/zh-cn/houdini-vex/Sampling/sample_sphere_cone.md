---
title: sample_sphere_cone
order: 28
---
`vector  sample_sphere_cone(vector center, float maxangle, vector u)`

`center`

圆锥中心轴的方向向量。该向量不需要归一化。

`maxangle`

最大角度（以弧度为单位），表示采样点与`center`方向的最大偏离角度。只要所有`u`值都在0到1之间，采样点就不会超过这个角度范围。

`u`

三个介于0到1之间的数值。

返回一个长度小于1的向量，基于输入参数`u`。
当给定三个值在`[0,1)`区间内均匀随机的`u`向量时，返回的向量将在单位球体内、且与`center`方向夹角不超过`maxangle`的锥形区域内均匀随机分布，并且相对于`u`是连续的。
