---
title: chnames
order: 10
---
| 上下文环境 | [chop](../contexts/chop.html) |
| --- | --- |

`string [] chnames()`

默认使用 `-1` 作为 `opinput` 参数。

`string [] chnames(int opinput)`

返回指定输入中的通道名称数组。

`opinput`

要读取的输入编号，从0开始计数。例如，第一个输入是0，第二个输入是1，依此类推。

如果指定为 `-1`，该函数会使用当前CHOP节点或已连接的输入 `0`（如果有连接的话）。
