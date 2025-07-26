---
title: trunc
order: 88
---
`float  trunc(float x)`

如果参数为负数，则返回 [ceil(x)](/zh-cn/houdini-vex/math/ceil "返回大于或等于参数的最小整数")，否则返回
[floor(x)](/zh-cn/houdini-vex/math/floor "返回小于或等于参数的最大整数")。

`vector2  trunc(vector2 x)`

`vector  trunc(vector x)`

`vector4  trunc(vector4 x)`

返回一个新向量，其每个分量都是原向量对应分量的`trunc()`结果。
