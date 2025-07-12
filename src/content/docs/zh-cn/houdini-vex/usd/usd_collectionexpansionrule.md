---
title: usd_collectionexpansionrule
order: 34
---

| 版本 | 18.0 |
| --- | --- |

`string  usd_collectionexpansionrule(<stage>stage, string collectionpath)`

此函数返回集合的扩展规则。

USD支持几种标准扩展规则：

- `explicitOnly` - 仅包含在包含列表中且不在排除列表中的路径属于该集合
- `expandPrims` - 包含路径下及其子级的所有图元（但不包括排除路径）属于该集合
- `expanPrimsAndProperties` - 类似`expandPrims`，但还包含匹配图元的属性

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点的已处理舞台（例如"op:/stage/lop_node"）。

`collectionpath`

集合的路径。

返回值

集合的扩展规则。

## 示例

```vex
// 获取集合的扩展规则
string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");
string expansion_rule = usd_collectionexpansionrule(0, collection_path);

```
