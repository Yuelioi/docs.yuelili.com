---
title: noised
order: 24
---

`void  noised(float x, float &v, float &dvdx)`

`void  noised(float x, vector &v, vector &dvdx)`

`void  noised(float x, float y, float &v, float &dvdx, float &dvdy)`

`void  noised(float x, float y, vector &v, vector &dvdx, vector &dvdy)`

`void  noised(vector xyz, float &v, float &dvdx, float &dvdy, float &dvdz)`

`void  noised(vector xyz, vector &v, vector &dvdx, vector &dvdy, vector &dvdz)`

`void  noised(vector4 xyzw, float &v, float &dvdx, float &dvdy, float &dvdz, float &dvdw)`

`void  noised(vector4 xyzw, vector &v, vector &dvdx, vector &dvdy, vector &dvdz, vector &dvdw)`

该函数同时计算柏林噪声值以及噪声沿各轴的导数。由于存在解析导数，这一计算过程可以非常高效地完成。

更多信息请参阅VEX语言指南中的[噪声与随机性](../random.html)章节。
