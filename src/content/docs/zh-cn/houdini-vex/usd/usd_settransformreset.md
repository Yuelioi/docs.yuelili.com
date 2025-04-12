---
title: usd_settransformreset
order: 140
---
| 版本 | 18.0 |
| --- | --- |

`int  usd_settransformreset(int stagehandle, string primpath, int flag)`

此函数用于设置图元的变换重置标志，即决定图元是使用世界坐标系作为初始空间（重置状态），还是继承父级的空间变换（默认行为）。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

目标图元的路径。

`flag`

当设为`1`时，图元将重置变换，即使用世界坐标系作为初始空间；设为`0`时将继承父级的空间变换。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 忽略父级变换
usd_settransformreset(0, "/geo/cone", 1);

```
