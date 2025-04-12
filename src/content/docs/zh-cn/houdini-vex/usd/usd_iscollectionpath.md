---
title: usd_iscollectionpath
order: 69
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_iscollectionpath(<stage>stage, string collectionpath)`

此函数用于检查给定路径是否符合有效的集合路径格式。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应的stage。该整数等价于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或者通过`op:`路径前缀引用其他LOP节点的已计算stage（例如"op:/stage/lop_node"）。

`collectionpath`

集合的路径。

返回值

如果路径符合有效的集合路径格式则返回`1`，否则返回`0`。

## 示例

```vex
// 检查字符串是否为可接受的集合路径
int is_valid_collection_path = usd_iscollectionpath(0, "/geo/cube.collection:some_collection");

```
