---
title: xnoised
order: 41
---
`void  xnoised(float x, float &v, float &dvdx)`

`void  xnoised(float x, vector &v, vector &dvdx)`

`void  xnoised(float x, float y, float &v, float &dvdx, float &dvdy)`

`void  xnoised(float x, float y, vector &v, vector &dvdx, vector &dvdy)`

`void  xnoised(vector xyz, float &v, float &dvdx, float &dvdy, float &dvdz)`

`void  xnoised(vector xyz, vector &v, vector &dvdx, vector &dvdy, vector &dvdz)`

`void  xnoised(vector4 xyzw, float &v, float &dvdx, float &dvdy, float &dvdz, float &dvdw)`

`void  xnoised(vector4 xyzw, vector &v, vector &dvdx, vector &dvdy, vector &dvdz, vector &dvdw)`

该函数同时计算单纯形噪声值以及噪声沿各轴的导数。由于存在解析导数，这一计算可以非常高效地完成。

更多信息请参阅VEX语言指南中的[噪声与随机性](../random.html)部分。
