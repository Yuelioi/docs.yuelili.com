---
title: usd_blockrelationship
order: 26
---
| Since | 18.0 |
| --- | --- |

`int  usd_blockrelationship(int stagehandle, string primpath, string name)`

该函数用于阻断图元的关系，即清除该关系中的所有目标。

`stagehandle`

要写入的舞台句柄。目前唯一有效的值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台。）

`primpath`

图元的路径。

`name`

关系名称。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 清除立方体的关系
usd_blockrelationship(0, "/geo/cube", "relationship_name");

```
