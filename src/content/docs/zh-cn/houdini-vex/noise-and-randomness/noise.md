---
title: noise
order: 23
---

`float  noise(float pos)`

`vector  noise(float pos)`

从一维噪声中采样一个或三个数值（给定位置）。

`float  noise(float posx, float posy)`

`vector  noise(float posx, float posy)`

从二维噪声中采样一个或三个数值（给定位置）。

`float  noise(vector pos)`

`vector  noise(vector pos)`

从三维噪声中采样一个或三个数值（给定位置）。

`float  noise(vector4 pos)`

`vector  noise(vector4 pos)`

从四维噪声中采样一个或三个数值（给定位置）。

Perlin风格噪声有两种形式：一种是在N维空间中随机变化的非周期性噪声，另一种是在给定空间范围内重复的周期性噪声。

注意
本函数生成的是非周期性噪声。如需生成周期性Perlin噪声，请使用[pnoise](/zh-cn/houdini-vex/noise-and-randomness/pnoise "Perlin风格噪声有两种形式：一种是在N维空间中随机变化的非周期性噪声，另一种是在给定空间范围内重复的周期性噪声。")函数。

不同形式的函数可返回4D（vector4参数）、3D（vector参数）、2D（两个float参数）或1D（float参数）位置处的噪声值。您可以获取一个随机浮点值或包含三个随机值的向量。

噪声值范围在0-1之间，中位数为0.5。噪声值的分布取决于维度，维度越高越接近高斯分布。
