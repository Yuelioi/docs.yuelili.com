---
title: curlxnoise2d
order: 7
---
`vector  curlxnoise2d(float x, float y)`

`vector  curlxnoise2d(vector xyt)`

基于两个单纯形噪声函数导数的叉积计算无散度向量场。

生成的向量都位于X-Y平面内。

注意
这与将`curlnoise`投影到平面上不同！

更多信息请参阅VEX语言指南中的[噪声与随机性](../random.html)。
