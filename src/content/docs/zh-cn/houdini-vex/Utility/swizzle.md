---
title: swizzle
order: 20
---
`vector2  swizzle(vector2 v, int i0, int i1)`

`vector  swizzle(vector v, int i0, int i1, int i2)`

`vector4  swizzle(vector4 v, int i0, int i1, int i2, int i3)`

整数参数指定了原始向量的哪个分量应该被放置到返回向量的对应位置。例如，如果`i0`是`3`，那么原始向量的第三个分量会被复制到返回向量的第零个分量位置。

小于`0`或大于向量分量数量的整数参数会被自动截断到有效范围内。

## 示例

```vex
swizzle({10, 20, 30, 40}, 3, 2, 1, 0) == {40, 30, 20, 10}
swizzle({10, 20, 30, 40}, 0, 0, 0, 0) == {10, 10, 10, 10}
```
