---
title: choplocalt
order: 14
---

| 始于版本 | 17.5 |
| --- | --- |

`matrix  choplocalt(string filename, int|stringchannel, float|intsample, float time)`

从指定索引的本地变换通道读取样本。

`filename`

使用op:语法查询的CHOP节点路径。
目前不支持直接从CHOP文件读取。

`channel`

要查询的通道索引或通道名称。

`sample`

如果该值为分数，则从最近的两个点进行线性插值。

`time`

需要评估CHOP节点的时间（以秒为单位）。

返回值

CHOP节点中指定样本的通道值。
