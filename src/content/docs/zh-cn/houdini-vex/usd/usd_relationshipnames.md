---
title: usd_relationshipnames
order: 118
---
| 始于版本 | 18.0 |
| --- | --- |

`string [] usd_relationshipnames(<stage>stage, string primpath)`

此函数返回指定图元上可用的关系名称。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理stage（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

返回值

包含图元关系名称的字符串数组。

## 示例

```vex
// 从图元获取关系名称
string relationship_names[] = usd_relationshipnames(0, "/geo/cube");

```
