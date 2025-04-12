---
title: blinn
order: 3
---

`bsdf  blinn(float exponent, ...)`

`bsdf  blinn(vector nml, float exponent, ...)`

返回一个布林双向散射分布函数(BSDF)。

关于BSDF的更多信息，请参阅[编写PBR着色器](../pbr.html)。

`vector  blinn(vector nml, vector V, float roughness, ...)`

计算布林着色效果。

`nml`

用于评估的表面法线向量。

`V`

入射向量。

`exponent`

指数值。数值越大，高光区域越集中。

每个函数还可以接受一个可选的光照遮罩参数。

![](../_static/rendering/blinn.png)
