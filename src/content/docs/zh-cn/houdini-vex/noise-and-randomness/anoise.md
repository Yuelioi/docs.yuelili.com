---
title: anoise
order: 1
---

`float  anoise(vector pos)`

`vector  anoise(vector pos)`

`float  anoise(vector pos, int turbulence, float rough, float atten)`

`vector  anoise(vector pos, int turbulence, float rough, float atten)`

`float  anoise(vector pos, int periodX, int periodY, int periodZ)`

`vector  anoise(vector pos, int periodX, int periodY, int periodZ)`

`float  anoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

`vector  anoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

这些函数用于生成"鳄鱼"噪声（alligator noise），这是一种类似于沃利噪声（Worley noise）的细胞噪声（[wnoise](/zh-cn/houdini-vex/noise-and-randomness/wnoise "生成沃利（细胞）噪声")）。目前无法使用沃利函数来模拟鳄鱼噪声，但可以获得非常相似的"外观"效果。

噪声值的范围大致在(0, 1)之间。此函数仅支持3D噪声。
