---
title: getphotonlight
order: 26
---
| 上下文 | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [light](../contexts/light.html)  [shadow](../contexts/shadow.html)  [surface](../contexts/surface.html) |
| --- | --- |

`int  getphotonlight()`

如果着色器不是从光源生成光子，则返回`-1`。

返回值是一个标识光源的整数。您可以使用[getlightname](/zh-cn/houdini-vex/shading-and-rendering/getlightname "当在illuminance循环内调用时返回当前光源名称，或将整数光源ID转换为光源名称。")将此整数ID转换为光源名称。
