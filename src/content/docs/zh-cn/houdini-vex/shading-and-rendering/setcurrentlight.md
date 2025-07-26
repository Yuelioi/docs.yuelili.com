---
title: setcurrentlight
order: 68
---
| 适用上下文 | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [surface](../contexts/surface.html) |
| --- | --- |

`int  setcurrentlight(int lightid)`

设置当前光源，当光源存在且设置成功时返回true。lightid参数应来自[getlights](/zh-cn/houdini-vex/shading-and-rendering/getlights "返回当前着色表面光源标识符数组")函数返回的值集合。以下着色函数将使用当前光源设置：

- [renderstate](/zh-cn/houdini-vex/shading-and-rendering/renderstate "向渲染器查询指定属性")
- [getlightname](/zh-cn/houdini-vex/shading-and-rendering/getlightname "在illuminance循环内调用时返回当前光源名称，或将整数光源ID转换为光源名称")
