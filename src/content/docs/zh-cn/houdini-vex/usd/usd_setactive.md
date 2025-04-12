---
title: usd_setactive
order: 122
---
| Since | 17.5 |
| --- | --- |

`int  usd_setactive(int stagehandle, string primpath, int flag)`

此函数用于设置图元的激活状态。

`stagehandle`

要写入的舞台句柄。目前唯一有效的值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台。）

`primpath`

图元的路径。

`flag`

非零值表示激活图元，0表示取消激活。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 将球体图元设置为激活状态
usd_setactive(0, "/geo/sphere", true);

```
