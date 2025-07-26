---
title: limport
order: 51
---
| 适用上下文 | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [shadow](../contexts/shadow.html)  [surface](../contexts/surface.html) |
| --- | --- |

注意
此函数仅在 [illuminance](/zh-cn/houdini-vex/shading-and-rendering/illuminance "遍历场景中所有光源，为每个光源调用光照着色器以设置Cl和L全局变量。") 循环内部有效。

`int  limport(string name, <type>&value)`

`name`

要读取的着色器变量名称。

`&value`

如果指定变量已定义且导出，该函数将用变量的值覆盖此变量。

返回值

如果着色器变量已定义且导出则返回 `1`，否则返回 `0`。
