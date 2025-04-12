---
title: usd_addprim
order: 6
---
| Since | 18.0 |
| --- | --- |

`int  usd_addprim(int stagehandle, string primpath, string typename)`

此函数在指定路径创建给定类型的新图元（如果该路径尚不存在对应图元）。

`stagehandle`

要写入的舞台句柄。当前唯一有效值为`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台。）

`primpath`

图元的路径。

`typename`

类型名称或其别名。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 添加一个球体图元
usd_addprim(0, "/geo/sphere", "Sphere");

```
