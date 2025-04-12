---
title: getlocalcurvature
order: 21
---
| 上下文 | [着色](../contexts/shading.html) |
| --- | --- |

`vector  getlocalcurvature(float s, float t)`

如果对象未启用细分或未分配置换着色器，则返回0向量。
否则，测量的凸度和凹度将分别在`x`和`y`分量中返回。

`s`

参数化S着色值。这应该从`s`全局变量传递。

`t`

参数化<type>着色值。这应该从`t`全局变量传递。
