---
title: mask_bsdf
order: 15
---
`bsdf  mask_bsdf(bsdf b, int mask)`

`b`

需要遮罩的BSDF。

`mask`

一个位掩码，指示需要评估哪些类型的着色组件反弹。

关于组件标签位掩码的信息，请参阅[bouncemask](/zh-cn/houdini-vex/shading-and-rendering/bouncemask)。

## 示例

```vex
// outF 将包含 inF 的所有组件，除了折射
bsdf outF = mask_bsdf(inF, PBR_ALL_MASK & ~PBR_REFRACT_MASK);

```
