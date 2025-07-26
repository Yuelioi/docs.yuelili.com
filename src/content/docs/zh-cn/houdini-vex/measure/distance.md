---
title: distance
order: 1
---
`float  distance(vector2 a, vector2 b)`

`float  distance(vector a, vector b)`

`float  distance(vector4 a, vector4 b)`

如果需要计算平方距离，请使用[distance2](/zh-cn/houdini-vex/measure/distance2 "返回两点之间的平方距离")函数，而不是先使用本函数再配合[pow](/zh-cn/houdini-vex/math/pow "将第一个参数的值提升至第二个参数指定的幂次方")函数计算。
