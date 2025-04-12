---
title: sensor_panorama_getcone
order: 3
---
`void  sensor_panorama_getcone(int handle, vector lookodir, float angle, vector colormin, vector colormax, float depthmin, float depthmax, float &strength, vector &dir, vector &color, float &depth)`

此函数将使用GL渲染器渲染周围环境，并提供一个用于查询结果的句柄。

它会计算锥形区域内所有渲染像素的平均值。参数`colormin`和`colormax`可用于筛选仅在此范围内的像素，这对于颜色编码不同关注区域非常有用。结果中的dir和strength表示所有匹配像素的加权中心，以及通过颜色和深度过滤的相对数量。color和depth则是所有匹配像素的平均值。
