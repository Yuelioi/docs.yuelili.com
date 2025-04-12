---
title: getptextureid
order: 28
---
| 上下文 | [着色](../contexts/shading.html) |
| --- | --- |

`int  getptextureid()`

返回当前着色面的ptexture id。通常这与`getprimid()`相同，但在细分曲面情况下例外。对于细分曲面，mantra会将非四边形面分割为多个面片。每个被分割的面都会被分配一个唯一的ptexture id。
