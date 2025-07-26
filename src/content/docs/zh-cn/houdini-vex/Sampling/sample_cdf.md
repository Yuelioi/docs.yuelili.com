---
title: sample_cdf
order: 7
---
| 本页内容 | * [概述](#overview) * [使用方法](#usage) |
| --- | --- |

概述

## overview

此函数用于从通过[create_cdf](/zh-cn/houdini-vex/sampling/create_cdf "从概率密度函数(PDF)值数组创建累积分布函数(CDF)")函数创建的CDF数组中采样值。更多信息请参阅[create_cdf](/zh-cn/houdini-vex/sampling/create_cdf "从概率密度函数(PDF)值数组创建累积分布函数(CDF)")。

示例代码请参考[create_cdf](/zh-cn/houdini-vex/sampling/create_cdf "从概率密度函数(PDF)值数组创建累积分布函数(CDF)")函数文档。

使用方法

## usage

`int  sample_cdf(float cdf[], float uniform_rand)`

返回采样CDF的索引。

`void  sample_cdf(float cdf[], float uniform_rand, int &index, float &x)`

将采样CDF的索引和值写入输出参数。

`void  sample_cdf(float cdf[], float uniform_rand, int &index, float &x, float &pdf)`

将采样CDF的索引、采样值及对应的PDF写入输出参数。

`cdf`

待采样的CDF数组（使用[create_cdf](/zh-cn/houdini-vex/sampling/create_cdf "从概率密度函数(PDF)值数组创建累积分布函数(CDF)")创建）。

`uniform_rand`

均匀随机变量（取值范围必须为0到1）。

`&index`

输出采样CDF元素的索引。

`&x`

输出采样CDF元素的值。

`&pdf`

输出采样CDF元素的PDF值。

返回值

第一种形式返回采样值的索引。其他形式则将索引写入输出参数。
