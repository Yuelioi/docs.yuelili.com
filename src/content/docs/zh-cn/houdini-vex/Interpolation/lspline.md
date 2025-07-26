---
title: lspline
order: 12
---
`float  lspline(float sample_pos, float value1, ...)`

对由一系列（线性间隔的）值定义的多段线进行采样。
这适用于指定一维数据渐变。

`vector  lspline(float sample_pos, vector value1, ...)`

`vector4  lspline(float sample_pos, vector4 value1, ...)`

对由一系列（线性间隔的）向量值定义的多段线进行采样。
这适用于指定颜色渐变。

如需可变间隔的关键点，请改用 [lkspline](/zh-cn/houdini-vex/interpolation/lkspline "在关键点之间对多段线进行采样。")。

`sample_pos`

沿曲线采样的位置值。

`valuen`

为定义曲线形状，需传入若干指定关键点的值，曲线将通过这些关键点。函数会自动均匀分布关键点。

提示
[spline](/zh-cn/houdini-vex/math/spline "沿多段线或样条曲线采样值。") 函数是本函数更灵活的超集。
