---
title: depthmap
order: 2
---
`float  depthmap(string filename, vector uvw)`

`float  depthmap(string filename, float u, float v)`

depthmap函数作用于从Mantra渲染得到的Z深度图像。它们返回从相机到指定像素的浮点距离值。在采样深度值时不会进行区域采样。此外，如果u/v值不在0到1的范围内，将返回1E6的值（表示"远"值）。
