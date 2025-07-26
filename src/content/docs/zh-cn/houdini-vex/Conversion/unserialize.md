---
title: unserialize
order: 13
---
`<vector>[] unserialize(float values[])`

`<matrix>[] unserialize(float values[])`

这是[serialize](/zh-cn/houdini-vex/conversion/serialize "将向量或矩阵类型数组展平为浮点数数组")操作的逆运算。该操作接收一个浮点数值数组，并通过将每个浮点数分配到输出数组中向量或矩阵的下一个分量来创建新的向量或浮点数数组。例如：

## 示例

```vex
vector v[]
float f[] = { 1, 2, 3, 7, 8, 9 };

v = vector(unserialize(f));
// 现在v的长度为2，包含{ {1,2,3}, {7,8,9} }

```
