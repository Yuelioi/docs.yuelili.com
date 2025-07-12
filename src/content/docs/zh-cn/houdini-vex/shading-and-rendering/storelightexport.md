---
title: storelightexport
order: 75
---
| 上下文 | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [surface](../contexts/surface.html) |
| --- | --- |

`void  storelightexport(string lightname, string exportname, <type>value)`

`void  storelightexport(string lightname, string exportname, <type>value[])`

将每盏灯光的导出值存储到着色器导出变量中。通常应该为每盏灯光调用此方法，以确保为给定变量创建所有灯光导出，例如将调用放在illuminance()循环或灯光数组循环中。

此方法取代了Houdini 12.5及更早版本中使用的`storelightexports()`方法。

## 示例

```vex
surface test(export vector perlight = {0,0,0})
{
 int lights[] = getlights();
 for (int i = 0; i < len(lights); i++)
 {
 vector val = set(lights[i], 0, 0);
 storelightexport(getlightname(lights[i]), "perlight", val);
 }
}
```
