---
title: chstart
order: 26
---

| 上下文 | [chop](../contexts/chop.html) |
| --- | --- |

`int  chstart()`

使用 `-1` 作为 `opinput` 参数。

`int  chstart(int opinput)`

返回指定CHOP输入中通道数据的第一个样本的索引。

`opinput`

要读取的输入编号，从0开始计数。例如，第一个输入是0，第二个输入是1，依此类推。

如果指定 `-1`，该函数将使用当前CHOP节点；如果已连接，则使用输入 `0`。

要获取起始帧，请使用 [chstartf](/zh-cn/houdini-vex/chop/chstartf "返回指定输入的第一个样本对应的帧")。要获取以秒为单位的起始时间，请使用 [chstartt](/zh-cn/houdini-vex/chop/chstartt "返回指定输入的第一个样本对应的时间")。
