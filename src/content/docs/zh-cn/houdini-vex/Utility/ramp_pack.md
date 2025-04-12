---
title: ramp_pack
order: 14
---
| 版本 | 19.0 |
| --- | --- |

`string  ramp_pack(string basis[], float pos[], float value[])`

`string  ramp_pack(string basis[], float pos[], vector value[])`

`string  ramp_pack(string basis[], float pos[], vector4 value[])`

Houdini操作通常将渐变(ramp)打包为JSON格式的字符串。
该函数将三个数组（基础类型、位置和值）打包成对应的字符串。
