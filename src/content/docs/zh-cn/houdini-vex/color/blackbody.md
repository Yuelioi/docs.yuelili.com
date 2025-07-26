---
title: blackbody
order: 1
---
`vector  blackbody(float temperature, float luminance)`

给定一个以开尔文为单位的温度和亮度值，计算白炽黑体辐射的颜色，返回CIE XYZ三刺激值。

该计算使用快速近似方法，适用于温度值在1666K至25000K之间的范围。超出此范围的值将被钳制到最近的有效范围内值。

返回值可通过[xyztorgb](/zh-cn/houdini-vex/conversion/xyztorgb "将CIE XYZ三刺激值转换为线性sRGB三元组")函数转换为线性sRGB值。
