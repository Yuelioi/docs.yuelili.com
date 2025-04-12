---
title: chadd
order: 1
---
| 上下文 | [chop](../contexts/chop.html) |
| --- | --- |

`int  chadd(string channel_names)`

`int  chadd(string channel_names[])`

此函数用于向CHOP节点添加新通道。仅在迭代Clip、Channel或Samples时有效，在迭代ChannelSample时无效。使用此函数添加通道时无法控制默认通道值，需要额外添加一个`Channel Wrangle`并在其中计算通道数据。

成功返回1，否则返回0。

`channel_names`

要添加的属性名称。可以是通道名称的数组或以空格分隔的列表。
