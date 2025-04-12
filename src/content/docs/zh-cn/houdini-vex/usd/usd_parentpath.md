---
title: usd_parentpath
order: 97
---
| 始于版本 | 17.5 |
| --- | --- |

`string  usd_parentpath(<stage>stage, string primpath)`

此函数返回指定图元（primitive）的父级路径。

注意：虽然为了保持一致性，此函数接受stage作为参数，但它实际上不会访问stage，而是直接从路径中提取父级信息。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点的已处理stage（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

返回值

图元父级的路径。

## 示例

```vex
// 获取图元的父级路径，例如"/geo"
string path = usd_parentpath(0, "/geo/cube");

```
