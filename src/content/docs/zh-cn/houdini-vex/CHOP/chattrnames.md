---
title: chattrnames
order: 3
---

| 上下文 | [chop](../contexts/chop.html) |
| --- | --- |

`string [] chattrnames(int opinput, string attribclass)`

`string [] chattrnames(string attrclass)`

返回从CHOP输入中获取的指定属性类别的所有CHOP属性名称。

CHOP属性存储有关片段、通道、采样或通道/采样对的元数据。

`opinput`

要读取的输入编号，从0开始。例如，第一个输入是0，第二个输入是1，依此类推。

`attribclass`

属性的"级别"：

`"clip"`

整个片段上的属性。

`"channel"`

整个通道上的属性。

`"sample"`

采样上的属性（跨所有通道）。

`"channelsample"`

特定通道/采样对上的属性。

`""`

传递空字符串让函数根据其他参数自动判断类别。

返回值

以字符串数组形式返回属性名称。
