---
title: sample_light
order: 21
---
| 上下文 | [置换](../contexts/displace.html)  [雾效](../contexts/fog.html)  [表面](../contexts/surface.html) |
| --- | --- |

`int  sample_light(int lightid, vector pos, vector sam, float time, vector &pos, vector &clr, float &scale, ...)`

`lightid`

标识光源的整数值。您可以使用[getlights](/zh-cn/houdini-vex/shading-and-rendering/getlights "返回当前着色表面所受光照的灯光标识符数组")获取影响当前着色表面的光源ID列表。

`pos`

采样光源的起始表面点。面光源会根据该位置的立体角分布采样——即距离该位置较近的光源几何体会获得更多采样。

`sam`

随机值向量，例如由[nextsample](/zh-cn/houdini-vex/sampling/nextsample)生成的数值。目前仅使用`sam`的前2个分量。不同的`sam`值会转换为光源几何体上不同的随机位置。

`time`

着色时间。

该函数会修改以下参数的值：

`pos`

光源上的采样位置。

`clr`

由灯光着色器设置的灯光颜色。

`scale`

灯光的平均半球强度（针对面光源）。

返回值

表示该光源影响哪些类型组件反弹的[组件位掩码](/zh-cn/houdini-vex/shading-and-rendering/bouncemask)。

提示
如果您使用[sample_light](/zh-cn/houdini-vex/sampling/sample_light "采样光源上的3D位置并在该点运行灯光着色器")生成灯光颜色（例如要重现[illuminance](/zh-cn/houdini-vex/shading-and-rendering/illuminance "遍历场景中所有光源，为每个光源调用灯光着色器来设置Cl和L全局变量")循环产生的`Cl`值），您需要将`clr`归一化到`scale`：

```vex
clr *= scale / luminance(clr);

```
