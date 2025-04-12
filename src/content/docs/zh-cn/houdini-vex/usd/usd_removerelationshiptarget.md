---
title: usd_removerelationshiptarget
order: 121
---

| 版本 | 18.0 |
| --- | --- |

`int  usd_removerelationshiptarget(int stagehandle, string primpath, string name, string target)`

此函数用于从图元的关联关系中移除一个目标。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台。）

`primpath`

图元的路径。

`name`

关联关系名称。

`target`

要移除的目标路径。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 从立方体的关联关系中移除球体
usd_removerelationshiptarget(0, "/geo/cube", "relationship_name", "/geo/sphere");

```
