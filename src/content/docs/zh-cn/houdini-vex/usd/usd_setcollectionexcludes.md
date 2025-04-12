---
title: usd_setcollectionexcludes
order: 125
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_setcollectionexcludes(int stagehandle, string collectionpath, string excludes[])`

此函数用于设置集合的排除列表。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`collectionpath`

集合的路径。

`excludes`

要设置为集合排除列表的对象路径数组。

返回值

成功时返回`stagehandle`值，失败时返回`-1`。

## 示例

```vex
// 为立方体集合设置排除列表
string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");
usd_setcollectionexcludes(0, collection_path, array("/geo/sphere4", "/geo/sphere5"));

```
