---
title: invlerp
order: 9
---
| 始于版本 | 18.5 |
| --- | --- |

`float  invlerp(float a, float min, float max)`

`<vector> invlerp(<vector>a, <vector>min, <vector>max)`

返回混合 `min` 和 `max` 以生成输入值 `a` 所需的混合比例。这是 `lerp` 函数的逆运算。

向量版本按分量独立运算，因此结果向量将是每个维度独立的混合比例。

如果 `a` 超出 `min` 到 `max` 的范围，将产生大于 `1` 或小于 `0` 的值。

如果 `min` 和 `max` 相等，混合比例值为 `0.5`。
