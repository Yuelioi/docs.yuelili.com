---
title: ashikhmin
order: 2
---

`bsdf  ashikhmin(float exponentx, float exponenty, vector framex, vector framey, ...)`

`bsdf  ashikhmin(vector nml, float exponentx, float exponenty, vector framex, vector framey, ...)`

![](../_static/rendering/ashikhmin1.png)
![](../_static/rendering/ashikhmin2.png)

一种各向异性的`bsdf`，类似于`phong()`，但可以独立控制沿两个切线向量的高光大小。

`exponentx`

沿`framex`向量的Phong指数。

`exponenty`

沿`framey`向量的Phong指数。

`framex`

高光X方向。

`framey`

高光Y方向。
