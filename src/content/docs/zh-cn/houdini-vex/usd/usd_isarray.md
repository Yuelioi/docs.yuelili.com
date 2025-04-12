---
title: usd_isarray
order: 63
---
| 始于版本 | 17.5 |
| --- | --- |

`int  usd_isarray(<stage>stage, string primpath, string name)`

此函数用于检查给定属性是否为数组类型。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取对应阶段的USD数据。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理阶段（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

属性名称。

返回值

如果属性存在且为数组类型则返回`1`，否则返回`0`。

## 示例

```vex
// 检查属性"some_attribute"是否为数组类型
int is_array = usd_isarray(0, "/geometry/sphere", "some_attribute");

```
