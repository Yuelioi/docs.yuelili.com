---
title: flownoise
order: 9
---

`float  flownoise(vector xyz, float flow)`

`vector  flownoise(vector xyz, float flow)`

`float  flownoise(vector4 xyzt, float flow)`

`vector  flownoise(vector4 xyzt, float flow)`

`float  flownoise(float x, float y, float flow)`

`vector  flownoise(float x, float y, float flow)`

该运算符可从3D和4D数据生成1D和3D Perlin流动噪声。
Perlin流动噪声有两种形式：一种是在N维空间中随机变化的非周期性噪声，另一种是在空间特定范围内重复的周期性噪声。周期性形式可用于生成在N维空间中平铺的图案，例如可无缝重复的基于噪声的纹理贴图。

该噪声的取值范围为(0,1)，中值为0.5。噪声的分布取决于维度，维度越高，噪声值的分布越接近高斯分布。

流动噪声与Perlin噪声（参见[周期性噪声](../../nodes/vop/periodicnoise.html "从1D、3D和4D数据生成1D和3D Perlin噪声")）非常相似，但多了一个流动参数。可以将流动参数视为额外的维度，但该维度的周期始终为1。在流动维度上移动会旋转噪声向量，而不是调整噪声空间中的切片，从而为动画生成更流畅的外观。
