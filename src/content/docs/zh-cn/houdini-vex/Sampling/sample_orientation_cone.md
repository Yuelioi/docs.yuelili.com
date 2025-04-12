---
title: sample_orientation_cone
order: 25
---
`vector4  sample_orientation_cone(vector4 center, float maxangle, vector u)`

`center`

锥体中心的朝向。此向量不需要归一化。

`maxangle`

最大角度（以弧度为单位），表示采样结果与`center`的最大偏离角度，只要所有`u`值都在0到1之间。

注意
这个角度是输出四元数与`center`之间的最大四元数旋转角，是被采样的4D单位超球面欧几里得锥角的两倍。当`maxangle`为π时，会采样所有朝向，但只覆盖所有4D单位向量的一半；当`maxangle`为2π时，则会采样所有4D单位向量。

`u`

三个介于0到1之间的数值。

返回一个基于`u`的单位vector4（即长度为1的vector4）。
给定由三个`[0,1)`区间值组成的均匀随机向量`u`，返回的四元数朝向将在`center`的`maxangle`范围内呈现均匀随机分布，并且相对于`u`是连续的。
