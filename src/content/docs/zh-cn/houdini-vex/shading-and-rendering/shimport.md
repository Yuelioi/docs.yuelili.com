---
title: shimport
order: 72
---

| 上下文环境 | [fog](../contexts/fog.html)  [surface](../contexts/surface.html) |
| --- | --- |

此函数仅在[illuminance](/zh-cn/houdini-vex/shading-and-rendering/illuminance "循环遍历场景中的所有光源，为每个光源调用光照着色器以设置Cl和L全局变量。")循环内部有效。

`int  shimport(string variable_name, <type>&value)`

`variable_name`

要从阴影着色器导入的变量名。

`value`

如果变量读取成功，其值将被复制到此变量中。

返回值

如果变量已定义且可导出则返回`1`，否则返回`0`。
