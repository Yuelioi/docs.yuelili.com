---
title: usd_setvisible
order: 143
---
| 始于版本 | 17.5 |
| --- | --- |

`int  usd_setvisible(int stagehandle, string primpath, int flag)`

此函数根据给定的flag参数设置图元是否可见。

注意：该函数与`usd_setvisibility()`类似，但后者除了可以设置图元可见性外，还能配置其继承父级可见性。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于写入其他舞台）

`primpath`

图元的路径。

`flag`

非零值使图元可见，0值使图元不可见。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 将球体图元设置为可见
usd_setvisible(0, "/geo/sphere", true);

```
