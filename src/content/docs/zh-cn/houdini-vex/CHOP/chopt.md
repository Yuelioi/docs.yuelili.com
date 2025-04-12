---
title: chopt
order: 15
---
| 始于版本 | 17.0 |
| --- | --- |

`float  chopt(string filename, int|stringchannel, float|intsample, float time)`

`vector2  chopt(string filename, int|stringchannel, float|intsample, float time)`

`vector  chopt(string filename, int|stringchannel, float|intsample, float time)`

`vector4  chopt(string filename, int|stringchannel, float|intsample, float time)`

`matrix  chopt(string filename, int|stringchannel, float|intsample, float time)`

从指定索引的通道中读取一个采样值。

`filename`

使用op:语法查询的CHOP节点路径。
目前不支持直接从CHOP文件读取。

`channel`

要查询的通道索引或通道名称。

`sample`

如果该值为小数，则会从最近的两个点进行线性插值计算。

`time`

需要评估CHOP节点的时间（以秒为单位）。

返回值

CHOP节点中指定采样位置的通道值。
