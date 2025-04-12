---
title: usd_primvarnames
order: 112
---
| 始于版本 | 18.0 |
| --- | --- |

`string [] usd_primvarnames(<stage>stage, string primpath)`

此函数返回给定图元上可用的primvar变量名称列表。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取对应输入端的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

此参数也可用于引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已处理的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

返回值

包含图元primvars名称的字符串数组。

## 示例

```vex
// 从图元获取primvar名称列表
string primvar_names[] = usd_primvarnames(0, "/geo/src_sphere");

```
