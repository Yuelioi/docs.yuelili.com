---
title: albedo
order: 1
---

`vector  albedo(bsdf b, ...)`

`vector  albedo(bsdf b, int mask, ...)`

`vector  albedo(bsdf b, vector viewer, ...)`

`vector  albedo(bsdf b, vector viewer, int mask, ...)`

`viewer`

指向观察者的向量。

`mask`

由代表不同着色分量的值组成的位掩码。

有关分量标签位掩码的信息，请参阅[bouncemask](/zh-cn/houdini-vex/shading-and-rendering/bouncemask)。
