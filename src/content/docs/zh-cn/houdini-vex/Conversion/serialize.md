---
title: serialize
order: 12
---
`float [] serialize(<vector>vectors[])`

`float [] serialize(<matrix>matrices[])`

这些函数会将元组值数组序列化。
也就是说，将元组的值逐个提取到一个
平坦的浮点数数组中。

## 示例

```vex
vector v[] = { {1,2,3}, {7,8,9} }; // 长度为2的vector[]
float f[];

f = serialize(v);
// 现在f[]的长度为6，等于{ 1,2,3,7,8,9 }

```
