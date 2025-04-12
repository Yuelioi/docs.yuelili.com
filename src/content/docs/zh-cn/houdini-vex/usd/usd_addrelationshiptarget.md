---
title: usd_addrelationshiptarget
order: 8
---
| 版本 | 18.0 |
| --- | --- |

`int  usd_addrelationshiptarget(int stagehandle, string primpath, string name, string target)`

此函数用于向图元关系添加目标路径。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

图元的路径。

`name`

关系名称。

`target`

要添加的目标路径。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 将球体添加到立方体的关系中
usd_addrelationshiptarget(0, "/geo/cube", "relationship_name", "/geo/sphere");

```
