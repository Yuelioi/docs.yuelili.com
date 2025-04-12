---
title: ramp_lookup
order: 13
---
| 始于版本 | 18.5 |
| --- | --- |

`float  ramp_lookup(float pos, string ramp)`

`vector  ramp_lookup(float pos, string ramp)`

`float  ramp_lookup(float pos, string basis[], float key[], float val[])`

`vector  ramp_lookup(float pos, string basis[], float key[], vector val[])`

在给定位置处评估提供的渐变（ramp）。渐变可以是一个编码字符串，也可以是由基础类型（basis）、键值（key）和数值（val）三个数组组成的组合。
