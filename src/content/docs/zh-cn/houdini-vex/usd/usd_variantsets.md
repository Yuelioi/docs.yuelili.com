---
title: usd_variantsets
order: 153
---
| 始于版本 | 17.5 |
| --- | --- |

`string [] usd_variantsets(<stage>stage, string primpath)`

此函数返回指定图元的变体集。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的场景。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

此参数也可用于引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点处理完成的场景（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

返回值

指定图元上可用的变体集名称列表。

## 示例

```vex
// 获取"/geo/shape_shifter"图元上可用的变体集
string variant_sets[] = usd_variantsets(0, "/geo/shape_shifter");

```
