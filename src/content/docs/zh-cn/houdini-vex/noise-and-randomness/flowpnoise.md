---
title: flowpnoise
order: 10
---
`float  flowpnoise(vector xyz, vector p, float flow)`

`vector  flowpnoise(vector xyz, vector p, float flow)`

`float  flowpnoise(vector4 xyzt, vector4 p, float flow)`

`vector  flowpnoise(vector4 xyzt, vector4 p, float flow)`

`float  flowpnoise(float x, float y, int px, int py, float flow)`

`vector  flowpnoise(float x, float y, int px, int py, float flow)`

`float  flowpnoise(vector xyz, int px, int py, int pz, float flow)`

`vector  flowpnoise(vector xyz, int px, int py, int pz, float flow)`

`float  flowpnoise(vector4 xyzt, int px, int py, int pz, int pt, float flow)`

`vector  flowpnoise(vector4 xyzt, int px, int py, int pz, int pt, float flow)`

该运算符可从3D和4D数据生成1D和3D的Perlin流动噪声。
Perlin流动噪声有两种形式：一种是在N维空间中随机变化的非周期性噪声，另一种是在空间特定范围内重复的周期性形式。周期性形式可用于生成在N维空间中平铺的图案，例如可无缝重复的基于噪声的纹理贴图。

该噪声的取值范围为(0,1)，中位数为0.5。噪声的分布取决于维度，维度越高，噪声值的分布越接近高斯分布。

流动噪声与Perlin噪声非常相似（参见[周期性噪声](../../nodes/vop/periodicnoise.html "从1D、3D和4D数据生成1D和3D的Perlin噪声")），但多了一个流动参数。可以将流动参数视为一个额外的维度，但这个维度的周期始终为1。在流动维度中移动会旋转噪声向量，而不是调整噪声空间中的切片，这使得动画效果更具流动感。

更多信息请参阅VEX语言指南中的[噪声与随机性](../random.html)。
