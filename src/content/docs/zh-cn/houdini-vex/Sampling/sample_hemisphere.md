---
title: sample_hemisphere
order: 18
---

`vector sample_hemisphere(vector2 u)`

`vector sample_hemisphere(vector center, vector2 u)`

`vector sample_hemisphere(float bias, vector2 u)`

`vector sample_hemisphere(vector center, float bias, vector2 u)`

`center`

半球中心的朝向向量。该向量不需要归一化处理。
若未指定，默认中心方向为x轴方向(1,0,0)。

`bias`

控制朝向中心方向的偏置系数，取值范围为-1到无穷大：
- 0表示无偏置
- -1表示所有点强制朝向边缘
- 无穷大表示所有点强制朝向中心
当提供该参数时，`u.y`会被替换为`1-pow(1-u.y, 1.0/(bias+1.0))`。若要在更通用的`sample_direction_cone`、`sample_sphere_cone`及相关函数中实现类似偏置效果，可在调用这些函数前对`u.x`进行相同变换。

`u`

取值范围在0到1之间的数值对。

返回基于`u`生成的单位向量（长度为1的向量）。
当输入均匀随机的`u`数值对（值域[0,1)）时：
- 若`bias`为0，返回的单位向量将在以`center`为中心的半球面上呈现均匀随机分布，且相对于`u`保持连续性
- 若`bias`大于0，单位向量将平滑地向`center`方向偏置
- 若`bias`在-1到0之间，单位向量将背离`center`方向，向边缘偏置
