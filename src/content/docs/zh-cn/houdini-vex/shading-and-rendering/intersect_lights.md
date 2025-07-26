---
title: intersect_lights
order: 40
---
| 上下文 | [置换](../contexts/displace.html)  [雾效](../contexts/fog.html)  [表面](../contexts/surface.html) |
| --- | --- |

注意
此函数仅适用于区域光。

`int  intersect_lights(int lightids[], vector pos, vector dir, float time, int &idx, float &dist, vector &clr, float &scale, ...)`

`lightids`

灯光ID数组，由[getlights](/zh-cn/houdini-vex/shading-and-rendering/getlights "返回当前着色表面的灯光标识符数组")返回。

`pos`

光线起点（如全局变量`P`）。

`dir`

从起点出发的方向向量。该向量的长度不会影响光线传播距离。

`time`

发射光线的时间点。

该函数会修改以下参数的值：

`idx`

被光线击中的灯光索引，若未找到交点则为-1。

`dist`

到最近相交灯光的距离。

`clr`

由灯光着色器设置的灯光颜色。

`scale`

灯光平均半球强度（针对区域光）。

返回值

表示灯光影响哪些类型组件反弹的[组件位掩码](/zh-cn/houdini-vex/shading-and-rendering/bouncemask)，若光线未击中灯光则返回`0`。
