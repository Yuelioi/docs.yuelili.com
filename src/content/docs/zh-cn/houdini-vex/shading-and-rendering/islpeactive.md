---
title: islpeactive
order: 43
---
| 上下文 | [surface](../contexts/surface.html) |
| --- | --- |

`int  islpeactive()`

如果存在任何图像平面（image plane）的vex变量以`"lpe:"`开头（表示启用了光路表达式/LPE），则返回1。如果不存在此类图像平面，则返回0。

此函数用于在当前渲染没有使用LPE的AOV（Arbitrary Output Variables）时，优化掉所有与LPE相关的函数调用。
