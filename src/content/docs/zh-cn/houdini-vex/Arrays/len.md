---
title: len
order: 7
---
`int  len(<vector>v)`

`int  len(<matrix>m)`

`int  len(<type>array[])`

`int  len(string s)`

`int  len(dict d)`

返回给定对象中元素/分量的数量。对于数组，返回数组中的元素数量；对于矩阵或向量，返回其分量数量。

对于字符串，返回其*字节*数（而非字符数）。

对于字典，返回字典中的键数量。

注意不要将此函数与 [length](/zh-cn/houdini-vex/math/length "返回向量的模长") 混淆，后者用于返回向量的模长。

## 示例

```vex
len("hello") == 5;
len({ {1,0,0}, {0,1,0}, {0,0,1} }) == 9;
len({0, 10, 20, 30}) == 4;

```
