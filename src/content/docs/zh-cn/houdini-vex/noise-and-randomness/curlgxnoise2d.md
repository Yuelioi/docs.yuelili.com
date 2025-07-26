---
title: curlgxnoise2d
order: 3
---
`vector  curlgxnoise2d(vector2 xy)`

`vector  curlgxnoise2d(float x, float y)`

`vector  curlgxnoise2d(vector xyz)`

`vector  curlgxnoise2d(vector4 xyzt)`

通过计算一维单纯形噪声的旋度来评估无散度向量场（参见[gxnoise](/zh-cn/houdini-vex/noise-and-randomness/gxnoise "评估单纯形噪声场")）。输出向量的前两个分量包含无散度噪声，最后一个分量为0。
