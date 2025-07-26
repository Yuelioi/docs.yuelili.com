---
title: chname
order: 5
---
| 上下文 | [cop2](../contexts/cop2.html)  [chop](../contexts/chop.html) |
| --- | --- |

COPs（合成操作器）

## cops

`string  chname(int plane_index, int chindex)`

返回指定平面上的通道名称（例如 `"r"` 或 `"x"`）。

CHOPs（通道操作器）

## chops

`string  chname(int channel_index)`

`string  chname(int opinput, int channel_index)`

返回通道名称，例如 `"tx"`。
要获取所有通道名称列表，请使用 [chnames](/zh-cn/houdini-vex/chop/chnames "返回指定CHOP输入的所有通道名称")。

`opinput`

要读取的输入编号，从0开始。例如，第一个输入是0，第二个输入是1，依此类推。

如果指定 `-1`，该函数将使用当前CHOP节点或已连接的输入 `0`。
