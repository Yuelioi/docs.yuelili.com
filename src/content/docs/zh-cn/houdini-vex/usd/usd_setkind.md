---
title: usd_setkind
order: 129
---
| 始于版本 | 17.5 |
| --- | --- |

`int  usd_setkind(int stagehandle, string primpath, string kind)`

此函数用于设置图元(primitive)的类型(kind)。

`stagehandle`

要写入的stage的句柄。目前唯一有效的值是`0`，表示节点中的当前stage。(此参数未来可能用于支持写入其他stage)

`primpath`

图元的路径。

`kind`

要为图元设置的类型。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 将球体图元设置为assembly类型
usd_setkind(0, "/geo/sphere", "assembly");

```
