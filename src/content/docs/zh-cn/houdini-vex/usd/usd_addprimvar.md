---
title: usd_addprimvar
order: 7
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_addprimvar(int stagehandle, string primpath, string name, string typename)`

`int  usd_addprimvar(int stagehandle, string primpath, string name, string typename, string interpolation)`

该函数会向图元添加指定类型的primvar（前提是该primvar不属于模式的一部分）。对于需要精确控制自定义primvar类型的情况非常有用。对于由图元模式定义的primvar，此调用无效，因为其类型已由模式确定。

`stagehandle`

要写入的舞台句柄。目前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

图元的路径。

`name`

Primvar名称（不带命名空间）。

`typename`

类型名称或其别名。

`interpolation`

为此primvar使用的插值方式名称（如"constant"、"vertex"、"faceVarying"等）。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 添加一个半精度浮点primvar并设置其值
usd_addprimvar(0, "/geo/sphere", "half_primvar", "half3");
usd_setprimvar(0, "/geo/sphere", "half_primvar", {1.25, 1.50, 1.75});

// 添加一个采用'vertex'插值的颜色图元
usd_addprimvar(0, pp, "color_primvar", "color3d[]", "vertex");
usd_setprimvar(0, pp, "color_primvar", vector[](array({1,0,0}, {0,1,0}, {0,0,1})));

```
