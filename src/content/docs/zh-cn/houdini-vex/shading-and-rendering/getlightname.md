---
title: getlightname
order: 18
---
| 上下文 | [着色](../contexts/shading.html) |
| --- | --- |

`string  getlightname()`

当在[illuminance](/zh-cn/houdini-vex/shading-and-rendering/illuminance "遍历场景中所有光源，为每个光源调用光照着色器来设置Cl和L全局变量")循环内调用时，或当使用[setcurrentlight](/zh-cn/houdini-vex/shading-and-rendering/setcurrentlight "设置当前光源")设置了当前光源时，返回当前光源的名称。

`string  getlightname(int lightid)`

返回给定整数光源ID所指向的光源名称。某些底层VEX函数出于效率考虑会使用整数光源ID而非字符串来标识光源。
