---
title: usd_setrelationshiptargets
order: 138
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_setrelationshiptargets(int stagehandle, string primpath, string name, string targets[])`

此函数用于设置图元关系中的目标路径。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

图元的路径。

`name`

关系名称。

`targets`

要设置为关系目标的目标路径数组。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 设置立方体的关系
usd_setrelationshiptargets(0, "/geo/cube", "new_relation", array("/geo/sphere6", "/geo/sphere7"));

```
