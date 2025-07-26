---
title: shadow_light
order: 71
---
| 适用上下文 | [置换](../contexts/displace.html)  [雾效](../contexts/fog.html)  [表面](../contexts/surface.html) |
| --- | --- |

`vector  shadow_light(int lightid, vector pos, vector dir, float time, ...)`

该操作与shadow()函数类似，但允许在illuminance循环之外执行阴影着色器。直接提供光源位置和方向向量，执行阴影着色器并返回阴影乘数。要获得最终阴影颜色，需将着色颜色乘以shadow_light返回的值。

可通过关键字可变参数向阴影着色器传递数据，在阴影着色器中使用simport()导入。

`lightid`

光源标识符，由[getlights](/zh-cn/houdini-vex/shading-and-rendering/getlights "返回当前着色表面的光源标识符数组")返回。

`pos`

光线起点（如全局变量`P`）。

`dir`

从起点出发的方向向量。该向量的长度应为从*pos*到光源的距离。

`time`

光线投射的时间点。
