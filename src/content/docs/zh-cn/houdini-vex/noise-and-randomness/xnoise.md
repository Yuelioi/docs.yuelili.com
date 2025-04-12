---
title: xnoise
order: 40
---
`float  xnoise(float x)`

`vector  xnoise(float x)`

`float  xnoise(float x, float y)`

`vector  xnoise(float x, float y)`

`float  xnoise(vector xyz)`

`vector  xnoise(vector xyz)`

`float  xnoise(vector4 xyzt)`

`vector  xnoise(vector4 xyzt)`

单纯形噪声与柏林噪声非常相似，不同之处在于采样点位于单纯形网格而非规则网格上。这样可以减少网格伪影。同时它使用了更高阶的`bspline`来提供更好的导数。

这些函数可以返回4D（vector4参数）、3D（vector参数）、2D（两个float参数）或1D（float参数）位置处的噪声值。您可以获取一个随机浮点值或包含三个随机值的向量。

噪声值范围在0-1之间，中位数为0.5。噪声的分布取决于维度，维度越高，噪声值的分布越接近高斯分布。
