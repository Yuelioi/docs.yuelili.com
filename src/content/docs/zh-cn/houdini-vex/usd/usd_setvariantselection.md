---
title: usd_setvariantselection
order: 141
---
| 始于版本 | 17.5 |
| --- | --- |

`int  usd_setvariantselection(<stage>stage, string primpath, string variantset, string variant)`

此函数用于在指定的变体集中设置选中的变体。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台。）

`primpath`

图元路径。

`variantset`

变体集名称。

`variant`

要选中的变体名称。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 在"shape_shifter"图元的"shapes"变体集中设置"cone"变体
usd_setvariantselection(0, "/geo/shape_shifter", "shapes", "cone");

```
