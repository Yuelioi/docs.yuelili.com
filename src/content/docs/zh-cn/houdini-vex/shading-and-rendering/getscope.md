---
title: getscope
order: 32
---
| 上下文环境 | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [light](../contexts/light.html)  [shadow](../contexts/shadow.html)  [surface](../contexts/surface.html) |
| --- | --- |

`void  getscope(material mat, string raystyle, string &scope, string &categories)`

给定一个材质句柄，确定特定光线类型（"diffuse"漫反射、"reflect"反射或"refract"折射）下可见的对象。对象选择由返回的scope/categories参数决定。
