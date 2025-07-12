---
title: usd_settransformorder
order: 139
---
| 版本 | 18.0 |
| --- | --- |

`int  usd_settransformorder(int stagehandle, string primpath, string transformorder[])`

此函数用于设置图元的变换顺序。变换顺序是一系列变换操作的序列，其完整名称以字符串数组形式存储在`xformOpOrder`属性中。因此，该函数实际设置的就是这个属性。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

目标图元的路径。

`transformorder`

要为图元设置的变换顺序。这是一个包含变换操作完整名称的列表。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
string ops[] = {"xformOp:translate:xform_cube_t", "xformOp:rotateZ:xform_cube_r", "xformOp:rotateXYZ:xform_cube_r", "xformOp:scale:xform_cube_s"};
usd_settransformorder(0, "/geo/cube", ops);

```
