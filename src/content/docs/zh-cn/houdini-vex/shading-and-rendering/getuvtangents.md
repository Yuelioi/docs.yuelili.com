---
title: getuvtangents
order: 34
---

| 上下文 | [置换](../contexts/displace.html)  [雾效](../contexts/fog.html)  [光照](../contexts/light.html)  [阴影](../contexts/shadow.html)  [表面](../contexts/surface.html) |
| --- | --- |

`void  getuvtangents(string objName, vector P, vector dir, vector &Tu, vector &Tv)`

此变体还会将Tn设置为评估点的表面法线：

`void  getuvtangents(string objName, vector P, vector dir, vector &Tu, vector &Tv, vector &Tn)`

注意
对象必须具有名为"uv"的向量属性。

提示
将""作为`objName`参数传递将使函数使用当前着色对象。

`objName`

要计算UV切线的对象名称。

`P`

评估UV切线的点位置。

`dir`

用于搜索对象表面的方向。

通过从`P`点沿此方向及其相反方向投射射线来搜索对象表面。

当可用时，使用评估点处的法线是有意义的。

`Tu`

U方向的UV切线。

`Tv`

V方向的UV切线。

`Tn`

评估切线处的表面法线。

```vex
// 在'P'点获取UV切线，沿'N'方向搜索表面
vector Tu, Tv;
getuvtangents("/obj/geo1", P, N, Tu, Tv);

```

```vex
// 使用任意射线查找表面位置。
// 这种情况下表面法线事先未知，可以通过'Tn'获取。
vector Tu, Tv, Tn;
getuvtangents("/obj/geo1", ray_orig, ray_dir, Tu, Tv, Tn);

```
