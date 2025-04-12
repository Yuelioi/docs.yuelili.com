---
title: usd_istransformreset
order: 81
---
| 始于版本 | 17.5 |
| --- | --- |

`int  usd_istransformreset(<stage>stage, string primpath)`

此函数检查图元变换是否被重置，即是否使用世界坐标系作为初始空间，或者是否继承自父级的空间变换（默认行为）。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的场景。该整数等价于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理场景（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

返回值

若图元变换被重置（即使用世界空间）则返回`1`；若继承自父级空间（默认行为）则返回`0`。

## 示例

```vex
// 检查立方体的变换是否被重置
int is_xform_reset = usd_istransformreset(1, "/geo/cube");

```
