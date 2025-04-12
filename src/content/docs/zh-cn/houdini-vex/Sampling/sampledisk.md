---
title: 圆盘采样
order: 31
---
`void  sampledisk(float &x, float &y, float sx, float sy)`

此函数对均匀采样值进行扭曲变换，使其在圆盘上均匀分布。该变换尝试保留原始样本的分层特性。

`x`, `y`

函数会用单位圆盘内均匀分布的点覆盖这些变量。

`sx`, `sy`

范围在`[0,1]`内的均匀随机值，例如由[nextsample](nextsample.html)生成的数值。