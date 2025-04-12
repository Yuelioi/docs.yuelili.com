---
title: random_sobol
order: 36
---
`float  random_sobol(float seed, int offset)`

`float  random_sobol(int seed, int offset)`

`float  random_sobol(vector4 seed, int offset)`

`float  random_sobol(vector seed, int offset)`

`vector4  random_sobol(float seed, int offset)`

`vector4  random_sobol(int seed, int offset)`

`vector4  random_sobol(vector4 seed, int offset)`

`vector4  random_sobol(vector seed, int offset)`

`vector  random_sobol(float seed, int offset)`

`vector  random_sobol(int seed, int offset)`

`vector  random_sobol(vector4 seed, int offset)`

`vector  random_sobol(vector seed, int offset)`

在生成随机数序列时，您可能会注意到数字往往会聚集在一起。但有时您需要一组分布更均匀的样本。Sobol序列就是一种相对均匀分布的随机数序列。

seed参数允许您选择不同的Sobol序列。如果使用浮点数作为种子，请注意微小的差异会选出完全不同的序列。

offset参数表示要从序列中提取的第几个数值。为了保持分布特性，这个参数应该是一个整数序列，比如`ptnum`。

每个生成的数值都在`[0..1)`范围内。
