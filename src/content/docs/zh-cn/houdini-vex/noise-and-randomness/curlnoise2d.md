---
title: curlnoise2d
order: 5
---

`vector  curlnoise2d(float x, float y)`

`vector  curlnoise2d(vector xyt)`

基于两个Perlin噪声函数导数的叉积，计算一个无散度向量场。

结果向量都位于X-Y平面内。

注意
这与将`curlnoise`投影到平面上不同。

更多信息请参阅VEX语言指南中的[噪声与随机性](../random.html)。
