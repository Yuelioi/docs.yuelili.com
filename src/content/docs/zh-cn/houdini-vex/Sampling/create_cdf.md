---
title: create_cdf
order: 1
---
| 本页内容 | * [概述](#overview) * [用法](#usage) * [示例](#examples) |
| --- | --- |

概述

## overview

在从分布中采样时，CDF（累积分布函数）非常有用。例如，您可以创建光源功率的CDF。这将允许基于功率概率对光源进行采样。这是一个离散CDF的示例，其中采样从一组固定的概率中进行选择。（请参阅下面的示例。）

使用[sample_cdf](/zh-cn/houdini-vex/sampling/sample_cdf "从累积分布函数（CDF）中采样值。")函数从返回的CDF数组中采样值。

用法

## usage

`float [] create_cdf(float pdf[])`

将输入的PDF作为浮点数数组返回其CDF。

`pdf`

用于创建CDF的PDF值数组。

示例

## examples

```vex
// 遍历所有光源，采样它们的功率
int[] li = getlights();
float values[];
resize(values, len(li));
int nsamples = 256;
int sid = israytrace ? SID : newsampler();
vector s, pos, clr;
float scale;
for (int i = 0; i < len(li); i++)
{
 for (int j = 0; j < nsamples; j++)
 {
 nextsample(sid, s.x, s.y, "mode", "nextpixel");
 sample_light(li[i], P, s, Time, pos, clr, scale);
 values[i] += luminance(clr);
 }
 values[i] /= nsamples;
}

// 创建功率分布的CDF
float cdf[] = create_cdf(values);

// 基于功率分布随机选择一个光源
nextsample(sid, s.x, s.y, "mode", "nextpixel");
int index = 0;
sample_cdf(cdf, s.x, index);

// 对选中的光源进行操作
// li[index] ...

```
