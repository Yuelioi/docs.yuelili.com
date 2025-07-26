---
title: frontface
order: 8
---
`vector  frontface(vector N, vector I)`

这种形式（不接收参考向量）仅在着色上下文中可用，其中使用Ng变量。

`vector  frontface(vector N, vector I, vector Nref)`

如果[点积](/zh-cn/houdini-vex/math/dot "返回参数之间的点积")(I, Nref)小于零，则N将被取反。
