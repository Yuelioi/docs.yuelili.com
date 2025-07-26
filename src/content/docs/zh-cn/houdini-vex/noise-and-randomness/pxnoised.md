---
title: pxnoised
order: 28
---
| 始于版本 | 17.0 |
| --- | --- |

`void  pxnoised(float x, int px, float &v, float &dvdx)`

`void  pxnoised(float x, int px, vector &v, vector &dvdx)`

`void  pxnoised(float x, float y, int px, int py, float &v, float &dvdx, float &dvdy)`

`void  pxnoised(float x, float y, int px, int py, vector &v, vector &dvdx, vector &dvdy)`

`void  pxnoised(vector xyz, int px, int py, int pz, float &v, float &dvdx, float &dvdy, float &dvdz)`

`void  pxnoised(vector xyz, int px, int py, int pz, vector &v, vector &dvdx, vector &dvdy, vector &dvdz)`

`void  pxnoised(vector4 xyzw, int px, int py, int pz, int pw, float &v, float &dvdx, float &dvdy, float &dvdz, float &dvdw)`

`void  pxnoised(vector4 xyzw, int px, int py, int pz, int pw, vector &v, vector &dvdx, vector &dvdy, vector &dvdz, vector &dvdw)`

该函数用于计算单纯形噪声值以及噪声沿每个轴向的导数。由于存在解析导数，这一计算可以非常高效地完成。

其他版本的xnoise函数请参阅[xnoise](/zh-cn/houdini-vex/noise-and-randomness/xnoise "单纯形噪声与Perlin噪声非常相似，不同之处在于采样点位于单纯形网格而非规则网格上。这减少了网格伪影。同时使用了更高阶的B样条来提供更好的导数。")和[pxnoise](pxnoise.html "单纯形噪声与Perlin噪声非常相似，不同之处在于采样点位于单纯形网格而非规则网格上。这减少了网格伪影。同时使用了更高阶的B样条来提供更好的导数。这是周期性单纯形噪声")。

更多信息请参阅VEX语言指南中的[噪声与随机性](../random.html)章节。
