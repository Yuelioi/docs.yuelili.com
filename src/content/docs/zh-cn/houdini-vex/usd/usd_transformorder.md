---
title: usd_transformorder
order: 146
---
| 版本 | 17.5 |
| --- | --- |

`string [] usd_transformorder(<stage>stage, string primpath)`

此函数返回图元的局部变换顺序。变换顺序是一系列变换操作的序列，其完整名称以字符串数组形式存储在`xformOpOrder`属性中。因此，本函数返回该属性的值。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点处理后的stage（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

返回值

图元的变换顺序。

## 示例

```vex
// 获取立方体的变换顺序
string cube_xform_ops[] = usd_transformorder(0, "/geo/cube");

```
