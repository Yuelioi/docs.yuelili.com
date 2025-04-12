---
title: getlights
order: 19
---
| 上下文环境 | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [light](../contexts/light.html)  [shadow](../contexts/shadow.html)  [surface](../contexts/surface.html) |
| --- | --- |

`int [] getlights(...)`

`int [] getlights(vector P, ...)`

`int [] getlights(material mat, vector P, ...)`

使用此签名时，光源遮罩仅由材质决定（忽略`lightmask`和`categories`关键字参数）。

此版本还接受PBR关键字参数，根据光源的Light Contribution参数来限制光源。

"label",
`string`

特定标签。此关键字参数可多次指定。

"direct",
`int`

0 = 限制为间接光源贡献，1 = 限制为直接光源贡献。

## 示例

```vex
getlights("lightmask", "light*,^light2");
getlights("categories", "shadow|occlusion");
getlights(material(), P, "direct", 0);

```
