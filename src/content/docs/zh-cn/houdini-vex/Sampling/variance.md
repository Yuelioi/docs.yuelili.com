---
title: variance
order: 32
---
`float  variance(float variable, float &mean, int &sample_size)`

此函数将根据邻近样本计算平均值和方差。类似于VEX能够计算导数的方式，该函数能够检查`variable`在邻近区域的值，并计算该`variable`的平均值和方差。

函数返回`variance`（σ2）。同时也会返回`mean`值以及`sample_size`，表示考虑了附近多少个样本。
