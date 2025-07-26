---
title: lkspline
order: 11
---
`float  lkspline(float sample_pos, float value1, float key_pos1, ...)`

通过一系列值/位置对定义的折线进行采样。
这对于指定一维数据渐变非常有用。

`vector  lkspline(float sample_pos, vector value1, float key_pos1, ...)`

`vector4  lkspline(float sample_pos, vector4 value1, float key_pos1, ...)`

通过一系列向量值/位置对定义的折线进行采样。
这对于指定颜色渐变非常有用。

如果只需要线性间隔的关键点，请改用[lspline](/zh-cn/houdini-vex/interpolation/lspline "对由线性间隔值定义的折线进行采样")。

`sample_pos`

在曲线上采样的位置。

`valuen`, `key_posn`

要定义曲线形状，需要传入多个值/位置对来指定曲线经过的关键点。

必须按升序指定关键点位置，否则结果将不可预测。

返回值

采样位置处的曲线值。

提示
[spline](/zh-cn/houdini-vex/math/spline "沿着折线或样条曲线采样值")函数是此函数更灵活的超集。
