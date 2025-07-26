---
title: onoise
order: 26
---
`float  onoise(vector pos)`

`vector  onoise(vector pos)`

`float  onoise(vector pos, int turbulence, float rough, float atten)`

`vector  onoise(vector pos, int turbulence, float rough, float atten)`

`float  onoise(vector pos, int periodX, int periodY, int periodZ)`

`vector  onoise(vector pos, int periodX, int periodY, int periodZ)`

`float  onoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

`vector  onoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

这些函数与 [wnoise](/zh-cn/houdini-vex/noise-and-randomness/wnoise "生成沃利（细胞）噪声。") 和
[vnoise](/zh-cn/houdini-vex/noise-and-randomness/vnoise "生成沃罗诺伊（细胞）噪声。") 类似。不过，它们的计算效率稍低，且不具备相同的特性。噪声的范围大致在 (-1, 1) 之间。仅支持 3D 噪声。然而，这种噪声具备计算湍流的能力，并可在噪声上应用粗糙度和衰减。
