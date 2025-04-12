---
title: usd_typename
order: 149
---
| 版本 | 17.5 |
| --- | --- |

`string  usd_typename(<stage>stage, string primpath)`

该函数返回指定图元（primitive）的类型名称。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理stage（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

返回值

图元类型的名称。

## 示例

```vex
// 获取图元的类型名称，例如"Cube"
string type_name = usd_typename(0, "/geo/cube");

```
