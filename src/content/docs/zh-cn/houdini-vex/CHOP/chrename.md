---
title: chrename
order: 20
---

| 上下文 | [chop](../contexts/chop.html) |
| --- | --- |

`int  chrename(int channel_index, string new_name)`

`int  chrename(string channel_name, string new_name)`

此函数用于重命名CHOP通道。仅当遍历Clip、Channel或Samples时有效，遍历ChannelSample时无效。

如果通道重命名成功返回1，否则返回0。

`channel_index`

要重命名的通道索引。

`channel_name`

要重命名的通道名称。

`new_name`

新的通道名称。
