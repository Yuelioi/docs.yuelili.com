---
title: chsetattr
order: 22
---

| 上下文 | [chop](../contexts/chop.html) |
| --- | --- |

`int  chsetattr(string attrclass, string attrname, int channel, int sample, <type>value)`

在当前CHOP中将属性设置为给定值。

`int  chsetattr(string attrname, int channel, int sample, <type>value)`

此版本假设属性类参数为`""`（根据其他参数推测类别）。

CHOP属性存储有关片段、通道、采样或通道/采样对的元数据。

此函数用于设置CHOP属性的值。使用[chattr](/zh-cn/houdini-vex/chop/chattr "读取CHOP属性。")来读取CHOP属性。

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

传递空字符串让函数根据其他参数推断类别。

没有此参数的签名与传递空字符串的行为相同。

`attrname`

要写入的属性名称。

`channel`

当读取`channel`或`channelsample`属性时，这是通道的索引。
如果读取`clip`或`sample`属性，此处使用`-1`。

`sample`

当读取`sample`或`channelsample`属性时，这是采样编号。
如果读取`clip`或`channel`属性，此处使用`-1`。

`value`

新的属性值。参数类型决定属性类型。

返回值

如果写入成功返回`1`，否则返回`0`。
