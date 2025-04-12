---
title: haslight
order: 36
---
| 适用上下文 | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [light](../contexts/light.html)  [shadow](../contexts/shadow.html)  [surface](../contexts/surface.html) |
| --- | --- |

`int  haslight(material mat, vector P, int light, ...)`

如果指定光源被用于照亮给定材质在指定点的位置，则返回1。

此函数接受PBR关键字参数来指定采样类型。这些选项可能会排除不符合所需采样路径的光源。

PBR采样关键字包括：

`label`

指定特定标签的字符串。此关键字参数可以多次指定。

`direct`

接受0或1整数值，将根据间接或直接贡献类别限制光源。

## 示例

```vex
haslight(material(), P, light_num, "direct", 0);

```
