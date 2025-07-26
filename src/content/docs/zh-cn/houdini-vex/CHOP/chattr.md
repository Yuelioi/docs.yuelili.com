---
title: chattr
order: 2
---

| 上下文 | [chop](../contexts/chop.html) |
| --- | --- |

`<type> chattr(string attrname, int &success)`

`<type> chattr(int opinput, string attrname, int &success)`

获取剪辑级别属性的值。
不带`opinput`参数的版本默认使用第一个输入(0)。

`<type> chattr(string attrname, int channel, int &success)`

`<type> chattr(int opinput, string attrname, int channel, int &success)`

获取通道级别属性的值。
不带`opinput`参数的版本默认使用第一个输入(0)。

`<type> chattr(string attrname, int channel, int sample, int &success)`

`<type> chattr(int opinput, string attrname, int channel, int sample, int &success)`

获取属性的值。
函数会根据其他参数猜测属性类别。
不带`opinput`参数的版本默认使用第一个输入(0)。

`<type> chattr(string attrclass, string attrname, int channel, int sample, int &success)`

`<type> chattr(int opinput, string attribclass, string attrname, int channel, int sample, int &success)`

获取特定类别属性的值。
不带`opinput`参数的版本默认使用第一个输入(0)。

CHOP属性存储有关剪辑、通道、样本或通道/样本对的元数据。

此函数用于读取CHOP属性的值。使用[chsetattr](/zh-cn/houdini-vex/chop/chsetattr "设置CHOP属性的值。")来设置CHOP属性。

`opinput`

要读取的输入编号，从0开始。例如，第一个输入是0，第二个输入是1，依此类推。

`attribclass`

属性的"级别":

`"clip"`

整个剪辑的属性。

`"channel"`

整个通道的属性。

`"sample"`

样本(跨所有通道)的属性。

`"channelsample"`

特定通道/样本对的属性。

`""`

传递空字符串让函数根据其他参数推断类别。

没有此参数的签名与传递空字符串的行为相同。

`attrname`

要读取的属性名称。

`channel`

读取`channel`或`channelsample`属性时，这是通道的索引。
如果读取`clip`或`sample`属性，请在此处使用`-1`。

`sample`

读取`sample`或`channelsample`属性时，这是样本编号。
如果读取`clip`或`channel`属性，请在此处使用`-1`。

`success`

如果给定属性存在且可读，函数将此变量设置为`1`。否则设置为`0`。

返回值

属性的值。

## 示例

读取通道上的"export"属性

```vex
int success = 0
int input = 0;
string attrname = "export";
string attrclass = "channel";
int channel = 0; // 或使用C全局变量表示当前通道索引
int sample = -1; // 或使用I全局变量表示当前样本索引
string s = chattr(input, attrname, attrclass, channel, sample, success )
if (success) {
 // 对s进行处理
 printf("s=%s\n", s);
} else {
 // 无法读取属性，通常是因为该名称的属性不存在
}

```
