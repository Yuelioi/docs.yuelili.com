---
title: usd_variants
order: 151
---
| 始于版本 | 17.5 |
| --- | --- |

`string [] usd_variants(<stage>stage, string primpath, string variantset)`

此函数返回给定变体集中可用的变体选项。

`<stage>`

当在节点上下文（如wrangle LOP节点）中运行时，该参数可以是表示输入编号的整数（从0开始）以读取对应输入的舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理舞台（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`variantset`

变体集的名称。

返回值

返回指定图元上给定变体集中可用的变体名称列表。

## 示例

```vex
// 获取"shape_shifter"图元上"shapes"变体集中的所有变体选项
string variants[] = usd_variants(0, "/geo/shape_shifter", "shapes");

```
