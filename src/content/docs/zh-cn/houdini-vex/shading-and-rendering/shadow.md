---
title: shadow
order: 70
---
| 上下文 | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [surface](../contexts/surface.html) |
| --- | --- |
此函数只能在[illuminance](/zh-cn/houdini-vex/shading-and-rendering/illuminance "遍历场景中的所有光源，为每个光源调用光照着色器以设置Cl和L全局变量。")语句内部调用。

`void  shadow(vector &Cl)`

`vector  shadow(vector Cl)`

使用`P`和`L`全局变量。

`void  shadow(vector &Cl, vector P, vector L)`

`vector  shadow(vector Cl, vector P, vector L)`
