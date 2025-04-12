---
title: usd_isactive
order: 62
---
| 始于版本 | 17.5 |
| --- | --- |

`int  usd_isactive(<stage>stage, string primpath)`

此函数用于检查指定图元(primitive)是否处于激活状态。

`<stage>`

在节点上下文(如wrangle LOP节点)中运行时，此参数可以是表示输入编号的整数(从0开始)，用于读取对应的stage。该整数等价于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件(例如"/path/to/file.usd")，或通过`op:`路径前缀引用其他LOP节点已处理的stage(例如"op:/stage/lop_node")。

`primpath`

目标图元的路径。

返回值

如果图元处于激活状态返回1，否则返回0。

## 示例

```vex
// 检查球体图元是否处于激活状态
int is_active = usd_isactive(0, "/geometry/sphere");

```
