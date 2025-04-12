---
title: isuvrendering
order: 47
---
| 上下文环境 | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [light](../contexts/light.html)  [shadow](../contexts/shadow.html)  [surface](../contexts/surface.html) |
| --- | --- |

`int  isuvrendering()`

当着色器在评估UV渲染（纹理展开）期间被调用时返回1，正常渲染时返回0。

此函数可用于在烘焙光照时以不同方式评估着色器。
