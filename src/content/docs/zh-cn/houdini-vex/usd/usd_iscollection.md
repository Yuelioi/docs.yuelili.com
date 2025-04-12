---
title: usd_iscollection
order: 68
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_iscollection(<stage>stage, string collectionpath)`

此函数用于检查给定路径是否指向一个现有的集合。

`<stage>`

当在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理舞台（例如"op:/stage/lop_node"）。

`collectionpath`

集合的路径。

返回值

如果路径指向现有集合则返回`1`，否则返回`0`。

## 示例

```vex
// 检查cube是否有一个名为"some_collection"的集合
string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");
int is_collection_existing = usd_iscollection(0, collection_path);

```
