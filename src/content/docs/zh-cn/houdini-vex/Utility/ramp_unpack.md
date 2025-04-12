---
title: ramp_unpack
order: 15
---
| 始于版本 | 18.5 |
| --- | --- |

`void  ramp_unpack(string ramp, string &basis[], float &pos[], float &value[])`

`void  ramp_unpack(string ramp, string &basis[], float &pos[], vector &value[])`

`void  ramp_unpack(string ramp, string &basis[], float &pos[], vector4 &value[])`

在Houdini操作中，渐变参数通常会被打包成JSON格式的字符串。
该函数将其解包为三个数组：插值类型(basis)、位置(pos)和数值(value)，
这些数组可用于样条曲线或ramp_lookup函数。
