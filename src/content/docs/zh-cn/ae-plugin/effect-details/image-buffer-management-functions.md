---
title: 图像缓冲区管理函数
---
# 图像缓冲区管理函数

使用这些函数来创建和销毁 [PF_EffectWorld / PF_LayerDef](../../effect-basics/PF_EffectWorld)，并获取它们的位深度。

---

## PF_WorldSuite2

| 函数 | 描述 |
|---|---|
| `PF_NewWorld` | 创建一个新的 `PF_EffectWorld`。 |
| | <pre lang="cpp">PF_Err PF_NewWorld(<br/>  PF_ProgPtr      effect_ref,<br/>  A_long    widthL,<br/>  A_long    heightL,<br/>  PF_Boolean      clear_pixB,<br/>  PF_PixelFormat  pixel_format,<br/>  PF_EffectWorld  \*worldP);</pre> |
| `PF_DisposeWorld` | 销毁一个 `PF_EffectWorld`。 |
| | <pre lang="cpp">PF_Err PF_DisposeWorld(<br/>  PF_ProgPtr      effect_ref,<br/>  PF_EffectWorld  \*worldP);</pre> |
| `PF_GetPixelFormat` | 获取给定 `PF_EffectWorld` 的像素格式。 |
| | <pre lang="cpp">PF_Err PF_GetPixelFormat(<br/>  const PF_EffectWorld  \*worldP,<br/>  PF_PixelFormat        \*pixel_formatP);</pre> |
| | `pixel_formatP` 可以是： |
| | - `PF_PixelFormat_ARGB32` - 标准的 8 位 RGB |
| | - `PF_PixelFormat_ARGB64` - 16 位 RGB |
| | - `PF_PixelFormat_ARGB128` - 32 位浮点 RGB |
