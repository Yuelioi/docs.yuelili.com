---
title: usd_collectionexcludes
order: 33
---

| 始于版本 | 18.0 |
| --- | --- |

`string [] usd_collectionexcludes(<stage>stage, string collectionpath)`

此函数返回集合的排除列表。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已处理的stage（例如"op:/stage/lop_node"）。

`collectionpath`

集合的路径。

返回值

集合的排除列表。

## 示例

```vex
// 获取集合的排除列表
string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");
string exclude_list[] = usd_collectionexcludes(0, collection_path);

```
