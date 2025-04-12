---
title: usd_kind
order: 84
---
| 始于版本 | 17.5 |
| --- | --- |

`string  usd_kind(<stage>stage, string primpath)`

该函数返回指定图元的种类（kind），例如组件（component）、装配体（assembly）等。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应的USD场景。该整数等价于使用字符串形式引用特定输入，例如"opinput:0"。

此参数也可用于引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已烹饪的场景（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

返回值

指定图元的种类（kind）。

## 示例

```vex
// 获取球体图元的种类
string kind = usd_kind(0, "/geo/sphere");

```
