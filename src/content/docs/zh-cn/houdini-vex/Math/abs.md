---
title: abs
order: 4
---
`int  abs(int n)`

`float  abs(float n)`

`<vector> abs(<vector>v)`

返回数字的绝对（正）值。对于向量，会逐分量计算绝对值。

## 示例

标量示例

```vex
if (abs(n) > 1) {
 // n大于1或小于-1
}

```

向量示例

```vex
vector v = {1.0, -0.5, 1.1}
if (abs(v) > 1.0) {
 // 向量的绝对值大于单位尺度
}

```
