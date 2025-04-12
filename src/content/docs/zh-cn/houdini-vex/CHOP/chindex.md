---
title: chindex
order: 7
---
| 上下文 | [chop](../contexts/chop.html) |
| --- | --- |

`int  chindex(int opinput, string name)`

`int  chindex(string name)`

`int [] chindex(string names[])`

根据通道名称返回输入通道的索引，如果失败则返回-1。

`opinput`

CHOP输入索引，如果省略则为-1。

`name`

要查找的通道名称。

`names`

要查找的通道名称数组。
