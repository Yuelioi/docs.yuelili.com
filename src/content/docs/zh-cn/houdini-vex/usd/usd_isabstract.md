---
title: usd_isabstract
order: 61
---
| 始于版本 | 19.0 |
| --- | --- |

`int  usd_isabstract(<stage>stage, string primpath)`

此函数用于检查指定图元是否为抽象类型或已定义类型。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，该参数可以是表示输入编号的整数（从0开始），用于读取对应输入端的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

该参数也可用于引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已处理的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

返回值

若图元为抽象类型则返回1，否则返回0。

## 示例

```vex
// 检查球体图元是否为抽象类型
int is_abstract = usd_isabstract(0, "/geometry/sphere");

```
