---
title: usd_name
order: 96
---

| 始于版本 | 17.5 |
| --- | --- |

`string  usd_name(<stage>stage, string primpath)`

此函数返回指定图元(primitive)的名称。

注意：虽然此函数为了保持一致性将stage作为参数，但它实际上并不访问stage，而是从路径中提取名称。

`<stage>`

在节点上下文(如wrangle LOP)中运行时，此参数可以是表示输入编号(从0开始)的整数，用于读取stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件(例如"/path/to/file.usd")，或者使用`op:`作为路径前缀引用另一个LOP节点的已处理stage(例如"op:/stage/lop_node")。

`primpath`

图元的路径。

返回值

图元的名称。

## 示例

```vex
// 获取图元名称，例如"cube"
string name = usd_name(0, "/geo/cube");

```
