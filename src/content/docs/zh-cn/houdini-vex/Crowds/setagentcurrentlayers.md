---
title: setagentcurrentlayers
order: 59
---
| 版本 | 19.0 |
| --- | --- |

`int  setagentcurrentlayers(int geohandle, int prim, string layernames[])`

`int  setagentcurrentlayers(int geohandle, int prim, int layer_ids[])`

`geohandle`

要写入的目标几何体句柄。可使用`geoself()`获取当前几何体的句柄。

`prim`

图元编号。

`layernames`

代理层名称列表。

`layer_ids`

代理层索引列表，由[agentfindlayer](/zh-cn/houdini-vex/crowds/agentfindlayer "查找代理定义中某层的索引")函数返回。
