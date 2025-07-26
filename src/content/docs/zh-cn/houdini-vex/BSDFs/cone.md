---
title: cone
order: 6
---

`bsdf  cone(vector normal, vector dir, float angle, ...)`

返回一个表示沿给定方向向量进行圆锥反射的`bsdf`。该BSDF在给定角度内保持恒定，产生类似于[gather](/zh-cn/houdini-vex/shading-and-rendering/gather "向场景中发射光线并返回被光线击中的表面着色器信息")或[irradiance](/zh-cn/houdini-vex/shading-and-rendering/irradiance "计算点P处法线为N的辐照度（全局光照）")循环的效果。

`bsdf  cone(vector dir, float angle, ...)`

在着色上下文中，会自动填充当前表面法线。

![](../_static/rendering/cone.png)

`normal`

表面法线方向。

`dir`

高光反射方向。

`angle`

圆锥角度（以弧度为单位）。
