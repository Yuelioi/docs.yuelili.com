---
title: spline_cdf
order: 80
---
| 本页内容 | * [概述](#概述) * [用法](#用法) |
| --- | --- |
| 起始版本 | 18.5 |

概述

## 概述

[create_cdf](/zh-cn/houdini-vex/sampling/create_cdf "从概率密度函数(PDF)值数组创建累积分布函数(CDF)。")函数通过样本值创建CDF，而本函数则通过对由`values`和对应`positions`列表定义的曲线（类似于Ramp参数）进行随机采样来创建CDF。

关于使用CDF的示例代码，请参阅[create_cdf](/zh-cn/houdini-vex/sampling/create_cdf "从概率密度函数(PDF)值数组创建累积分布函数(CDF)。")函数的文档。

用法

## 用法

`float [] spline_cdf(string bases[], float values[], float positions[], ...)`

接收一个基函数数组、一个关键值数组、对应的关键位置数组，以及一个可选的整数参数res（分辨率），用于指定构建CDF时的采样数量。函数会根据分辨率对样条曲线进行采样，然后从这些采样中创建并返回一个CDF。注意目前仅支持单维度样条。

`bases`

描述如何解释对应`values`的字符串数组：每个字符串可以是`"constant"`、`"linear"`、`"cubic"`（或`"catmullrom"`、`"cspline"`）、`"linearsolve"`（或`"solvelinear"`）、`"monotonecubic"`。关于这些选项如何控制值解释的信息，请参阅[spline](/zh-cn/houdini-vex/math/spline "沿折线或样条曲线采样值。")函数文档。

"res",

`=128`

在构建CDF时，某些样条可能需要更多采样才能准确表示。`res`（分辨率）参数控制函数在构建CDF时的采样数量（从而影响CDF的大小）。默认值为128。

返回值

表示CDF的浮点数数组（类似于[create_cdf](/zh-cn/houdini-vex/sampling/create_cdf "从概率密度函数(PDF)值数组创建累积分布函数(CDF)。")函数返回的数组）。
