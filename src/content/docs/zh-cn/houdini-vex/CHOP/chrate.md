---
title: chrate
order: 16
---
| 上下文 | [chop](../contexts/chop.html) |
| --- | --- |

`float  chrate()`

使用 `-1` 作为 `opinput` 参数。

`float  chrate(int opinput)`

返回指定输入的采样率。

`opinput`

要读取的输入编号，从0开始计数。例如，第一个输入是0，第二个输入是1，以此类推。

如果指定 `-1`，该函数会使用当前CHOP节点或已连接的输入`0`（如果存在连接）。
