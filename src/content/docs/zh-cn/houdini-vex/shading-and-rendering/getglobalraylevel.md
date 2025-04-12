---
title: getglobalraylevel
order: 14
---
| 上下文环境 | [置换](../contexts/displace.html)  [雾效](../contexts/fog.html)  [光照](../contexts/light.html)  [阴影](../contexts/shadow.html)  [表面](../contexts/surface.html) |
| --- | --- |

`int  getglobalraylevel()`

返回用于计算全局光照的光线树深度。如果该函数返回非零值，则说明当前调用着色器的目的是为了评估全局光照效果。
