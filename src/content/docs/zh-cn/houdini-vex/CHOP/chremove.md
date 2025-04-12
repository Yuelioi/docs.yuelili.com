---
title: chremove
order: 18
---

| 上下文 | [chop](../contexts/chop.html) |
| --- | --- |

`int  chremove(int channel_index)`

`int  chremove(int channel_indices[])`

`int  chremove(string channel_name)`

`int  chremove(string channel_names[])`

该函数用于从CHOP节点中移除通道。仅在迭代Clip、Channel或Samples时有效，在迭代ChannelSample时无效。

如果所有通道都被成功移除则返回1，否则返回0。

`channel_index`

要移除的通道索引。

`channel_indices`

要移除的通道索引数组。

`channel_name`

要移除的通道名称。

`channel_names`

要移除的通道名称数组。
