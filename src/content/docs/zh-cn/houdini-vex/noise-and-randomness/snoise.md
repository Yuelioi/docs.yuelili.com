---
title: snoise
order: 37
---
`float  snoise(vector pos)`

`vector  snoise(vector pos)`

`float  snoise(vector pos, int turbulence, float rough, float atten)`

`vector  snoise(vector pos, int turbulence, float rough, float atten)`

`float  snoise(vector pos, int periodX, int periodY, int periodZ)`

`vector  snoise(vector pos, int periodX, int periodY, int periodZ)`

`float  snoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

`vector  snoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

这些函数类似于 [wnoise](/zh-cn/houdini-vex/noise-and-randomness/wnoise "生成沃利（细胞）噪声")。返回的噪声值基于所有最近点的权重计算，每个点的贡献度采用类似元球衰减曲线的计算方式。也就是说，当采样点距离球体越近，其贡献度就越大。

该噪声值的范围大致在(-1.7, 1.7)之间。仅支持3D噪声。不过，这种噪声具有计算湍流的功能，并可以设置噪声的粗糙度和衰减参数。
