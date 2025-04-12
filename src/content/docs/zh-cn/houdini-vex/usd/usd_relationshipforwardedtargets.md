---
title: usd_relationshipforwardedtargets
order: 117
---
| 始于版本 | 18.0 |
| --- | --- |

`string [] usd_relationshipforwardedtargets(<stage>stage, string primpath, string name)`

此函数返回给定关系的转发目标列表。这是一个便捷函数，用于展开所有嵌套关系（因为关系中的目标可以是另一个关系）。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点的已处理舞台（例如"op:/stage/lop_node"）。

`primpath`

图元的路径。

`name`

关系名称。

返回值

关系中的转发目标列表。

## 示例

```vex
// 获取立方体"some_relationship"关系中的转发目标列表
string targets[] = usd_relationshipforwardedtargets(0, "/geo/cube", "some_relationship");

```
