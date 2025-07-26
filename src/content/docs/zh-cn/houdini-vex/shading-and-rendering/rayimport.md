---
title: rayimport
order: 60
---
| 上下文 | [fog](../contexts/fog.html)  [light](../contexts/light.html)  [shadow](../contexts/shadow.html)  [surface](../contexts/surface.html) |
| --- | --- |

`int  rayimport(string name, <type>&value)`

`int  rayimport(string name, <type>&value[])`

提取当表面被[gather](/zh-cn/houdini-vex/shading-and-rendering/gather "向场景发射光线并返回被光线击中的表面着色器信息")发射的光线击中时传递的任何信息。

`name`

变量名，即在[gather](/zh-cn/houdini-vex/shading-and-rendering/gather "向场景发射光线并返回被光线击中的表面着色器信息")中使用`"send:name", value`参数对传递的名称（不带`send:`前缀）。

`value`

如果函数能导入指定名称的变量，则用该值覆盖此变量。

返回值

如果成功导入指定名称的值则返回`1`，否则返回`0`。

内置可查询名称

## v3 内置可查询名称

您可以将以下值传递给`name`以查询内置光线信息（不是从`gather()`发送的）。

`ray:P` (`vector`)

光线的原点。

`ray:D` (`vector`)

光线的方向向量。

`ray:time` (`float`)

与光线关联的快门时间。

`ray:hitstack` (`int[]`)

由相交器提供的命中堆栈。

`ray:element` (`int`)

由相交器提供的元素。

`ray:hituv` (`vector`)

由相交器提供的参数坐标。

`ray:Ng` (`vector`)

来自相交器的几何法线。

注意
Mantra 3相交器提供的数据是原始数据，可能没有意义，或者在不同平台或版本间可能有所不同。
