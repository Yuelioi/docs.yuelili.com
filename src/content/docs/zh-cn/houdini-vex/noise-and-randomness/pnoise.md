---
title: pnoise
order: 27
---
`float|vector pnoise(float x, int px)`

`float|vector pnoise(vector x, vector p)`

`float|vector pnoise(vector4 xyzt, vector4 p)`

`float|vector pnoise(float x, float y, int px, int py)`

`float|vector pnoise(vector xyz, int px, int py, int pz)`

`float|vector pnoise(vector4 xyzt, int px, int py, int pz, int pt)`

Perlin噪声有两种形式：一种是在N维空间中随机变化的非周期性噪声，另一种是在给定空间范围内重复的周期性噪声。

此函数生成周期性噪声。如需生成非周期性Perlin噪声，请使用[noise](/zh-cn/houdini-vex/noise-and-randomness/noise "Perlin噪声有两种形式：一种是在N维空间中随机变化的非周期性噪声，另一种是在给定空间范围内重复的周期性噪声。")函数。

这些函数可返回4D（vector4参数）、3D（vector参数）、2D（两个float参数）或1D（float参数）位置处的噪声值。您可以获取一个随机浮点值或包含三个随机值的向量。

"p"整型或向量参数指定周期性范围。例如，当您创建2D图像并希望其平铺时：

```vex
clr = pnoise(X * 4, Y * 5, _4, 5_)

```

在此示例中，X的范围是0-4，Y的范围是0-5，噪声在该区间内呈周期性变化。

如果周期参数为0，VEX会将其视为*无*周期性。您可以通过此特性使噪声在某一维度上具有周期性，而在另一维度上不具有周期性。

噪声的分布取决于维度，维度越高，噪声值的分布越接近高斯分布。
