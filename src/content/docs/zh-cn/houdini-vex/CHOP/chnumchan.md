---
title: chnumchan
order: 11
---
| 上下文 | [chop](../contexts/chop.html) |
| --- | --- |

`int  chnumchan()`

对 `opinput` 使用 `-1`

`int  chnumchan(int opinput)`

返回指定输入中的通道数量。

`opinput`

要读取的输入编号，从0开始。例如，第一个输入是0，第二个输入是1，依此类推。

如果指定 `-1`，该函数会使用当前的CHOP节点，如果已连接则使用输入 `0`。
