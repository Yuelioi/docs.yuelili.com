---
title: usd_addcollectioninclude
order: 3
---

| 版本 | 18.0 |
| --- | --- |

`int  usd_addcollectioninclude(int stagehandle, string collectionpath, string path)`

此函数将对象包含到集合中。通常通过向集合的包含列表添加显式路径实现，但如果足够的话，也可能只是从集合的排除列表中移除某个路径。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台。）

`collectionpath`

集合的路径。

`path`

对象的路径。即可以是基元、属性或关系。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 将sphere4包含到cube的集合中
string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");
usd_addcollectioninclude(0, collection_path, "/geo/sphere4");

```
