---
title: matchvex_specular
order: 53
---

`bsdf  matchvex_specular(float exponent, ...)`

`bsdf  matchvex_specular(vector nml, float exponent, ...)`

![](../_static/rendering/matchvex_specular.png)
[specular](/zh-cn/houdini-vex/bsdfs/specular "返回一个镜面BSDF或计算镜面着色。") 生成的BSDF与传统VEX `specular()` 的输出不同。使用此函数可以生成更接近传统VEX `specular()` 的近似效果。
