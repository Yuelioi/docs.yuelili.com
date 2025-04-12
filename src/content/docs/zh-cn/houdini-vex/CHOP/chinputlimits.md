---
title: chinputlimits
order: 9
---
| 上下文 | [chop](../contexts/chop.html) |
| --- | --- |

`int  chinputlimits(int opinput, int channel, float &channel_min, float &channel_max)`

`opinput`

CHOP输入索引，如果省略则为-1。

`channel`

当读取`channel`或`channelsample`属性时，这是通道的索引。
如果读取的是`clip`或`sample`属性，此处使用`-1`。

`channel_min`

计算得到的通道最小值；

`channel_max`

计算得到的通道最大值；

返回值

成功返回1，失败返回0。
