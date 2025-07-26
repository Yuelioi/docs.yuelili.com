---
title: gxnoised
order: 12
---
`float  gxnoised(vector2 xy, vector2 &deriv)`

`float  gxnoised(float x, float y, float &dx, float &dy)`

`float  gxnoised(vector xyz, vector &deriv)`

`float  gxnoised(vector4 xyzt, vector4 &deriv)`

单纯形噪声(Simplex noise)与柏林噪声(Perlin noise)类似，不同之处在于其采样点位于单纯形网格而非规则网格上。该系列单纯形噪声函数相比[xnoise](/zh-cn/houdini-vex/noise-and-randomness/xnoise "单纯形噪声与柏林噪声非常相似，区别在于采样点位于单纯形网格而非规则网格上。这减少了网格伪影。同时采用更高阶的B样条来提供更好的导数。")使用了不同的晶格结构和更高效的计算方法。

这些函数可返回4D(`vector4`参数)、3D(`vector`参数)或2D(单个`vector2`参数或两个`float`输入)位置处的噪声值，同时计算噪声函数的空间导数。所评估的噪声场与返回`float`的[gxnoise](/zh-cn/houdini-vex/noise-and-randomness/gxnoise "评估单纯形噪声场。")函数使用的是同一个噪声场。

噪声值范围在0-1之间。噪声场的特性取决于输入维度数：高维噪声使用更密集的噪声元素，生成的噪声场结构更明显而平滑度降低。如果在高维度下该函数效果不理想，可考虑改用速度较慢的[xnoise](/zh-cn/houdini-vex/noise-and-randomness/xnoise "单纯形噪声与柏林噪声非常相似，区别在于采样点位于单纯形网格而非规则网格上。这减少了网格伪影。同时采用更高阶的B样条来提供更好的导数。")函数。
