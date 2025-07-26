---
title: uvunwrap
order: 79
---

`int  uvunwrap(string object_path, float u, float v, float time, vector &P, vector &I)`

`int  uvunwrap(string object_path, float u, float v, float time, vector &P, vector &I, vector &mikkelsenUtan, vector &mikkelsenVtan)`

此函数**仅在Mantra渲染环境下有效**，用于**纹理烘焙**或**镜头着色器**。由于该函数必须是"无上下文"的以便CVEX镜头着色器使用，但在其他任何上下文中都会失败并返回`0`。

对于其他类型的纹理采样，请使用更优的[uvsample](/zh-cn/houdini-vex/attributes-and-intrinsics/uvsample "使用UV属性在特定UV坐标处插值属性值")或[uvintersect](/zh-cn/houdini-vex/geometry/uvintersect "此函数计算指定光线与UV空间中几何体的交点")函数替代此函数。

`object_path`

要进行解包的目标对象。

`u`, `v`

指定表面位置和法线获取点的UV坐标。

`time`

测量几何体的时间点（以秒为单位）。

`&P`

若成功，函数会用给定点的世界空间位置覆盖此变量。

`&I`

若成功，函数会用给定点的法线覆盖此变量。

`&mikkelsenUtan`, `&mikkelsenVtan`

函数会用Mikkelsen切线向量覆盖这些变量。

返回值

如果UV坐标指定了表面上的有效点则返回`1`，否则返回`0`。
