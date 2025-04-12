---
title: mx_worley
order: 22
---
`float|vector|vector2 mx_worley(vector2 pos, float jitter, int metric)`

`float|vector|vector2 mx_worley(vector pos, float jitter, int metric)`

`float|vector|vector2 mx_worley(vector2 pos, float jitter, int periodx, int periody, int periodz)`

`float|vector|vector2 mx_worley(vector pos, float jitter, int periodx, int periody, int periodz, int periodw)`

返回与标准MaterialX库中值匹配的Worley噪声值。

Jitter（抖动值）通常应限制在0到1之间。

metric（度量标准）是一个整数，表示Worley噪声的距离测量方式：

- 0 - 欧几里得距离
- 1 - 平方距离
- 2 - 曼哈顿距离
- 3 - 切比雪夫距离
