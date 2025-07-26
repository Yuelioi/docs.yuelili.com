---
title: usd_addattrib
order: 1
---
| 版本 | 18.0 |
| --- | --- |

`int  usd_addattrib(int stagehandle, string primpath, string name, string typename)`

此函数用于向图元添加指定类型的属性（如果该属性不属于模式的一部分）。该函数对于精确控制自定义属性的类型非常有用。对于由图元模式定义的属性，此调用不会产生效果，因为模式已确定其类型。若要创建属性但将其标记为非自定义属性，请使用 [usd_addschemaattrib](/zh-cn/houdini-vex/usd/usd_addschemaattrib "在原始图上创建指定类型的属性，并将自定义元数据标志设置为False。")。

`stagehandle`

要写入的舞台句柄。目前唯一有效的值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台。）

`primpath`

图元的路径。

`name`

属性名称。

`typename`

类型名称或其别名。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 添加一个半精度浮点属性并设置其值
usd_addattrib(0, "/geo/sphere", "half_attrib", "half3");
usd_setattrib(0, "/geo/sphere", "half_attrib", {1.25, 1.50, 1.75});

```
