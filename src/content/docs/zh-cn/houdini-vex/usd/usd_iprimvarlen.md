---
title: usd_iprimvarlen
order: 56
---
| 始于版本 | 19.0 |
| --- | --- |

`int  usd_iprimvarlen(<stage>stage, string primpath, string name)`

`int  usd_iprimvarlen(<stage>stage, string primpath, string name, float timecode)`

此函数返回在指定图元上直接找到或从其祖先继承的primvar的长度。

对于数组型primvar，返回的是数组长度；对于非数组型primvar，长度始终为1。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应的stage。该整数等价于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`前缀引用其他LOP节点处理后的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

Primvar名称（不包含命名空间）。

`timecode`

评估属性时使用的USD时间码。USD时间码大致对应Houdini中的帧数。若未指定，则使用当前帧对应的时间码。

返回值

返回数组型primvar的长度，若非数组则返回`1`，若primvar不存在则返回`0`。可使用[usd_isarrayprimvar](/zh-cn/houdini-vex/usd/usd_isarrayprimvar "检查USD图元上是否存在数组型primvar。")来验证primvar是否为数组类型。

## 示例

```vex
// 获取立方体或其祖先上primvar的数组长度
int array_length = usd_iprimvarlen(0, "/geo/cube", "array_primvar_name");

```
