---
title: usd_collectionincludes
order: 35
---

| 版本 | 18.0 |
| --- | --- |

`string [] usd_collectionincludes(<stage>stage, string collectionpath)`

此函数返回集合的包含列表。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的stage。该整数等同于以字符串形式引用特定输入，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的cooked stage（例如"op:/stage/lop_node"）。

`collectionpath`

集合的路径。

返回值

集合的包含列表。

## 示例

```vex
// 获取集合的包含列表
string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");
string include_list[] = usd_collectionincludes(0, collection_path);

```
