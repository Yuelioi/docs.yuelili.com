---
title: usd_cleartransformorder
order: 30
---
| 版本 | 17.5 |
| --- | --- |

`int  usd_cleartransformorder(int stagehandle, string primpath)`

此函数用于清除图元的变换顺序。变换顺序是一系列变换操作的序列，其完整名称以字符串数组形式存储在`xformOpOrder`属性中。因此，本函数会清除该属性。

`stagehandle`

要写入的舞台句柄。当前唯一有效值为`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台。）

`primpath`

目标图元的路径。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
usd_cleartransformorder(0, "/geo/cone");

```
