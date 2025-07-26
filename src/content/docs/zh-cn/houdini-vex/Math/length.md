---
title: length
order: 37
---
要获取字符串的长度或数组中的元素数量，请使用[len](/zh-cn/houdini-vex/arrays/len "返回数组的长度")函数。

`float  length(float f)`

直接返回给定的数字。

`float  length(vector2 v)`

`float  length(vector v)`

`float  length(vector4 v)`

返回向量或vector4到原点的距离。

如果需要平方长度，使用[length2](/zh-cn/houdini-vex/math/length2 "返回向量或vector4的平方距离")比将此函数结果平方运算更快。

## 示例

```vex
length({1.0, 0, 0}) == 1.0;
length({1.0, 1.0, 0}) == 1.41421;

```
