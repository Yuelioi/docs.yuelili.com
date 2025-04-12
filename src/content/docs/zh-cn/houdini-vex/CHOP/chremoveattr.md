---
title: chremoveattr
order: 19
---

| 上下文 | [chop](../contexts/chop.html) |
| --- | --- |

`int  chremoveattr(string attrclass, string attrname)`

`int  chremoveattr(string attrclass, string attrnames[])`

`int  chremoveattr(string attrname)`

`int  chremoveattr(string attrnames[])`

CHOP属性用于存储片段(Clip)、通道(Channel)、采样(Sample)或通道/采样对(Channel/Sample Pair)的元数据。

此函数用于移除CHOP属性。

`attribclass`

属性的"级别"：

`"clip"`

整个片段上的属性。

`"channel"`

整个通道上的属性。

`"sample"`

采样上的属性(跨所有通道)。

`"channelsample"`

特定通道/采样对上的属性。

`""`

传入空字符串让函数根据其他参数自动判断类别。

不包含此参数的签名与传入空字符串的行为相同。

`attrname`

要移除的属性名称。

`attrnames`

要移除的属性名称数组。

返回值

操作成功返回`1`，否则返回`0`。
