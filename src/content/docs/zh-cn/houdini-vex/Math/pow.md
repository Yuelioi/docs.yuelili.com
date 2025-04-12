---
title: pow
order: 53
---
`float  pow(float n, float exponent)`

`<vector> pow(<vector>v, float exponent)`

将 `n` 的值提升到 `exponent` 的幂次方。对于向量，每个分量会分别进行此运算。

当 `n` 小于零时，指数会被四舍五入到最接近的整数。
