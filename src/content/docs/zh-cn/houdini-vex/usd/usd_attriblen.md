---
title: usd_attriblen
order: 18
---
| 始于版本 | 17.5 |
| --- | --- |

`int  usd_attriblen(<stage>stage, string primpath, string name)`

`int  usd_attriblen(<stage>stage, string primpath, string name, float timecode)`

此函数返回给定属性的长度。

对于数组属性返回数组长度，非数组属性则返回1。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`前缀引用其他LOP节点的已处理stage（如"op:/stage/lop_node"）。

`primpath`

图元路径。

`name`

属性名称。

`timecode`

评估属性时使用的USD时间码。USD时间码大致对应Houdini中的帧数。若未指定，则使用当前帧对应的时间码。

返回值

数组属性的长度，若非数组属性则返回1。如需检查属性是否为数组，请使用[usd_isarray](/zh-cn/houdini-vex/usd/usd_isarray "检查属性是否为数组")。

## 示例

```vex
// 获取立方体图元上某个属性的数组长度
int length = usd_attriblen(0, "/geo/cube", "attribute_name");

```
