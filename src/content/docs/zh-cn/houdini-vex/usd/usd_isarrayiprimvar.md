---
title: usd_isarrayiprimvar
order: 64
---
| Since | 19.0 |
| --- | --- |

`int  usd_isarrayiprimvar(<stage>stage, string primpath, string name)`

此函数用于检查primvar是否为数组类型，无论该primvar是直接定义在指定图元上还是从其祖先图元继承而来。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应输入的stage。该整数等同于引用特定输入的字符串形式，例如"opinput:0"。

此参数也可用于引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点处理完成的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

Primvar名称（不包含命名空间）。

返回值

当primvar存在且为数组类型时返回`1`，否则返回`0`。

## 示例

```vex
// 检查primvar "some_primvar"是否为数组类型
int is_array = usd_isarrayiprimvar(0, "/geometry/sphere", "some_primvar");

```
