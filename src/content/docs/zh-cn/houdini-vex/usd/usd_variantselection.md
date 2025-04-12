---
title: usd_variantselection
order: 152
---
| 始于版本 | 17.5 |
| --- | --- |

`string  usd_variantselection(<stage>stage, string primpath, string variantset)`

此函数返回指定图元上给定变体集中当前选中的变体。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入中的舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已烹饪舞台（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`variantset`

变体集名称。

返回值

返回指定图元上给定变体集中当前选中的变体。

## 示例

```vex
// 获取"/geo/shape_shifter"图元上"shapes"变体集中当前选中的变体
string selected_variant = usd_variantselection(0, "/geo/shape_shifter", "shapes");

```
