---
title: usd_setdrawmode
order: 128
---
| 始于版本 | 17.5 |
| --- | --- |

`int  usd_setdrawmode(int stagehandle, string primpath, string mode)`

此函数用于设置图元的绘制模式。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

目标图元的路径。

`mode`

要为图元设置的绘制模式。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 将球体设置为边界框绘制模式，立方体设置为默认绘制模式
usd_setdrawmode(0, "/geo/sphere", "bounds");
usd_setdrawmode(0, "/geo/cube", "default");

```
