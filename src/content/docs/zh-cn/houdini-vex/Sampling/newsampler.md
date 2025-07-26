---
title: newsampler
order: 4
---
| 上下文 | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [light](../contexts/light.html)  [shadow](../contexts/shadow.html)  [surface](../contexts/surface.html) |
| --- | --- |

`int  newsampler(...)`

`int  newsampler(int seed, ...)`

返回一个初始化后的采样器序列，用作[nextsample](/zh-cn/houdini-vex/sampling/nextsample)函数的第一个参数。

`seed`

您可以指定序列的种子值。
使用相同的种子将生成相同的序列。
在对点云进行随机采样时，这有助于获得一致的结果。
