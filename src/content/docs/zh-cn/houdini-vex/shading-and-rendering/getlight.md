---
title: getlight
order: 16
---
| 上下文 | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [light](../contexts/light.html)  [shadow](../contexts/shadow.html)  [surface](../contexts/surface.html) |
| --- | --- |

`light  getlight(int lid)`

给定一个整数光源标识符(lid)，您可以获取表示该光源的光源对象引用（有关[mantra特定类型](/zh-cn/houdini-vex/lang.html#mantratypes)的详细信息）

```vex
int[] lights = getlights();
int nlights = len(lights);
for (int i = 0; i < nlights; i++)
{
light lp = getlight(i);
lp->illuminate(...);
}
```
