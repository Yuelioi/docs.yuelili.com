---
title: wireblinn
order: 80
---
`bsdf  wireblinn(vector tangent, float exponent, ...)`

![](../_static/rendering/wireblinn.png)
围绕切线向量定义的Blinn函数。您可以使用此函数为类似细线的基本元素（如头发）生成平均镜面反射光照。

- `tangent` – 沿头发的切线向量。
- `exponent` – Blinn指数。
