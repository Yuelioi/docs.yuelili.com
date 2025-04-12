---
title: sample_circle_arc
order: 8
---
`vector2  sample_circle_arc(vector2 center, float maxangle, float u)`

`center`

圆弧中心方向向量。该向量不需要归一化。

`maxangle`

最大角度（弧度制），表示当`u`在0到1之间时，圆弧上任意采样点与`center`方向的最大偏离角度。

`u`

取值范围为0到1的参数值。

返回一个单位向量（长度为1的vector2），其方向基于参数`u`生成。
当输入均匀分布在`[0,1)`区间内的随机`u`值时，返回的单位向量将在单位圆边缘上均匀随机分布，且相对于`u`连续变化，这些向量都位于`center`方向两侧不超过`maxangle`的圆弧范围内。
