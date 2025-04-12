---
title: nrandom
order: 25
---
`float  nrandom(...)`

`vector2  nrandom(...)`

`vector  nrandom(...)`

`vector4  nrandom(...)`

返回一个0到1之间的随机数，或一个随机单位向量。

`void  nrandom(float &x, float &y, ...)`

用0到1之间的随机数覆盖给定的变量。

这些随机数生成器如果以完全相同的顺序调用，将会生成相同的随机数序列。但由于不涉及种子值，因此无法多次重现相同的随机数或序列。

`…`

您可以选择性地指定一个字符串参数来选择随机数生成方法。该字符串可以是以下之一：

- `default`：高效的随机数生成。此方法与Houdini先前版本保持向后兼容。
- `mersenne` 或 `twister`：使用具有优良特性的梅森旋转算法。该代码基于Makoto Matsumoto和Takuji Nishimura 1997-2002年的工作，保留所有权利。
- `qstrat`：使用准分层随机数生成器。这种方法倾向于均匀分布随机数，减少聚集和间距问题。
