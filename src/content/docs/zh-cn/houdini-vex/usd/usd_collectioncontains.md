---
title: usd_collectioncontains
order: 32
---

| Since | 18.0 |
| --- | --- |

`int  usd_collectioncontains(<stage>stage, string collectionpath, string path)`

如果给定对象属于集合，则此函数返回 `1`，否则返回 `0`。

`<stage>`

在节点上下文中运行时（例如 wrangle LOP），此参数可以是一个整数，表示输入编号（从 0 开始）以从中读取 stage。该整数等效于引用特定输入的字符串形式，例如 "opinput:0"。

你也可以使用此参数引用 USD 文件（例如 "/path/to/file.usd"），或使用 `op:` 作为路径前缀引用另一个 LOP 节点的 cooked stage（例如 "op:/stage/lop_node"）。

`collectionpath`

集合的路径。

`path`

对象的路径。例如，图元（primitive）、属性或关系。

返回值

如果给定对象属于集合，则返回 `1`，否则返回 `0`。

示例

## 示例

```vex
// 检查 sphere3 是否在 cube 的集合中。
string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");
int contains_sphere3 = usd_collectioncontains(0, collection_path, "/geo/sphere3");

```
