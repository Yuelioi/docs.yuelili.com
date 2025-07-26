---
title: usd_addschemaattrib
order: 11
---
| 版本 | 20.0 |
| --- | --- |

`int  usd_addschemaattrib(int stagehandle, string primpath, string name, string typename)`

此函数向图元添加指定类型的属性。某些属性虽属于模式(schema)组成部分但不会自动添加到图元（例如`GeomModelAPI`模式中的`extentsHint`属性）。在此类特殊情况下，本函数会将属性添加至图元并标记为非自定义属性。注意：函数不会验证属性数据类型，请务必设置模式期望的类型。如需创建自定义属性，请使用[usd_addattrib](/zh-cn/houdini-vex/usd/usd_addattrib "在原始图元上创建指定类型的属性")。

`stagehandle`

目标舞台的句柄。当前唯一有效值为`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

图元路径。

`name`

属性名称。

`typename`

类型名称或其别名。

返回值

成功时返回`stagehandle`值，失败时返回`-1`。

## 示例

```vex
// 添加半精度浮点属性并设置其值
usd_applyapi(0, "/geo", "GeomModelAPI");
usd_addschemaattrib(0, "/geo", "extentsHint", "float[]");

```
