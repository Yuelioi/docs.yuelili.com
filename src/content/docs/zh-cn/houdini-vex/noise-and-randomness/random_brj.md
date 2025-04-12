---
title: random_brj
order: 31
---
| 始于版本 | 18.5 |
| --- | --- |

`float  random_brj(float seed, int offset)`

`float  random_brj(int seed, int offset)`

`float  random_brj(vector4 seed, int offset)`

`float  random_brj(vector seed, int offset)`

`vector2  random_brj(float seed, int offset)`

`vector2  random_brj(int seed, int offset)`

`vector2  random_brj(vector4 seed, int offset)`

`vector2  random_brj(vector seed, int offset)`

`vector  random_brj(float seed, int offset)`

`vector  random_brj(int seed, int offset)`

`vector  random_brj(vector4 seed, int offset)`

`vector  random_brj(vector seed, int offset)`

在生成随机数序列时，您可能会注意到它们往往会出现聚集现象。然而，有时您需要一组分布更均匀的样本。二进制随机抖动（BRJ）样本是一系列相对均匀分布的随机数，类似于`random_sobol()`。

种子参数允许您生成不同的序列。如果使用浮点数作为种子，请注意微小的差异会导致生成完全不同的序列。

偏移量参数表示要从序列中提取的条目位置。为了保持分布特性，这应该是一个整数序列，例如`ptnum`。

每个数字的取值范围是`[0..1)`。
