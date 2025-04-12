---
title: israytracing
order: 44
---

| 上下文环境 | [着色](../contexts/shading.html) |
| --- | --- |

`int  israytracing()`

当当前着色器正在处理光线命中着色时返回true。对于微多边形渲染，返回值将为false。此函数可用于在使用vm_rayshade属性的渲染中区分着色风格——其中只有部分对象是光线追踪的。
