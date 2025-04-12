---
title: usd_setcollectionexpansionrule
order: 126
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_setcollectionexpansionrule(int stagehandle, string collectionpath, string rule)`

此函数用于设置集合的扩展规则。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`collectionpath`

集合的路径。

`rule`

要为集合设置的扩展规则。

USD支持几种标准扩展规则：

- `explicitOnly` - 仅包含列表中且不在排除列表中的路径属于该集合
- `expandPrims` - 包含路径及其下级的所有图元（不包括排除项）属于该集合
- `expanPrimsAndProperties` - 类似`expandPrims`，但还包含匹配图元的属性

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 为立方体的集合设置扩展规则
string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");
usd_setcollectionexpansionrule(0, collection_foo, "explicitOnly");

```
