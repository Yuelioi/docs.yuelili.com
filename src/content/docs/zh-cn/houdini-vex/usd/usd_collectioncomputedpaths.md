---
title: usd_collectioncomputedpaths
order: 31
---

| 始于版本 | 18.0 |
| --- | --- |

`string [] usd_collectioncomputedpaths(<stage>stage, string collectionpath)`

此函数返回属于指定集合的所有对象列表。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的场景。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

此参数也可用于引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理场景（如"op:/stage/lop_node"）。

`collectionpath`

集合的路径。

返回值

属于指定集合的所有对象列表。

## 示例

```vex
// 获取立方体集合中的所有对象
string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");
string members[] = usd_collectioncomputedpaths(0, collection_path);

```
