---
title: chop
order: 12
---
| 始于版本 | 17.0 |
| --- | --- |

`float  chop(string filename, int|stringchannel, float|intsample)`

`vector2  chop(string filename, int|stringchannel, float|intsample)`

`vector  chop(string filename, int|stringchannel, float|intsample)`

`vector4  chop(string filename, int|stringchannel, float|intsample)`

`matrix  chop(string filename, int|stringchannel, float|intsample)`

从指定索引的通道中读取一个采样值。

`filename`

要查询的CHOP节点路径，使用op:语法。
目前不支持直接从CHOP文件中读取。

`channel`

要查询的通道索引或通道名称。

`sample`

如果该值为小数，则会从最近的两个点进行线性插值计算。

返回值

CHOP节点中指定采样点的通道值。
