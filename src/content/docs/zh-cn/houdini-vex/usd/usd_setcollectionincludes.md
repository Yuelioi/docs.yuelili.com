---
title: usd_setcollectionincludes
order: 127
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_setcollectionincludes(int stagehandle, string collectionpath, string includes[])`

此函数用于设置集合的包含列表。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`collectionpath`

集合的路径。

`includes`

要设置为集合包含列表的对象路径数组。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 设置立方体集合的排除列表
string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");
usd_setcollectionincludes(0, collection_path, array("/geo/sphere1", "/geo/sphere2"));

```
