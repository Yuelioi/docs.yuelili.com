---
title: sssapprox
order: 23
---
`bsdf  sssapprox(vector albedo, float meanFreePath, float roughness, float scale, ...)`

`albedo`

表面平均反射率。

`meanFreePath`

散射事件之间的平均距离。

`roughness`

从'0.0'到'1.0'的值，混合到理想的漫透射反射剖面。

`scale`

材质的物理尺寸。较小的scale值会使材质更具透射性。

有关BSDF的信息，请参阅[编写PBR着色器](../pbr.html)。

基于近似反射剖面模拟SSS(次表面散射)光照效果。
