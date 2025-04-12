---
title: usd_attribnames
order: 19
---
| 始于版本 | 17.5 |
| --- | --- |

`string [] usd_attribnames(<stage>stage, string primpath)`

此函数返回给定图元上可用的属性名称列表。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取对应输入中的舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已处理的舞台（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

返回值

包含图元属性名称的字符串数组。

## 示例

```vex
// 从图元获取属性名称
string attrib_names[] = usd_attribnames(0, "/geo/sphere");

```
