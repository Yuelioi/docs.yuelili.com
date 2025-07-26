---
title: gxnoise
order: 11
---
`float|vector|vector2 gxnoise(vector2 xy)`

`float|vector|vector2 gxnoise(float x, float y)`

`float|vector|vector2 gxnoise(vector xyz)`

`float|vector|vector2 gxnoise(vector4 xyzt)`

单纯形噪声(Simplex noise)与柏林噪声(Perlin noise)类似，不同之处在于采样点位于单纯形网格而非规则网格上。这一系列单纯形噪声函数相比[xnoise](/zh-cn/houdini-vex/noise-and-randomness/xnoise "单纯形噪声非常接近柏林噪声，不同之处在于采样点位于单纯形网格而非规则网格上。这可以减少网格伪影。同时它使用更高阶的B样条来提供更好的导数。")采用了不同的晶格结构和更高效的计算方法。

这些函数可以返回4D（`vector4`参数）、3D（`vector`参数）或2D（单个`vector2`参数或两个`float`输入）位置处的噪声值。您也可以获取随机浮点值或包含2-3个分量的向量。

噪声值范围在0-1之间。噪声场的特性取决于输入维度数量。更高维度的噪声会使用更密集的噪声元素，产生的噪声场会显得更有结构性但平滑度较低。如果在高维度下该函数效果不理想，可以考虑使用速度较慢的[xnoise](/zh-cn/houdini-vex/noise-and-randomness/xnoise "单纯形噪声非常接近柏林噪声，不同之处在于采样点位于单纯形网格而非规则网格上。这可以减少网格伪影。同时它使用更高阶的B样条来提供更好的导数。")函数。
