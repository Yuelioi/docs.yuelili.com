---
title: 参数与浮点值
---
# 参数与浮点值

我们有些事情要向您坦白；多年来，尽管我们为您提供了8位颜色值，但我们一直在背后使用浮点表示法。

没错，即使有超亮颜色，我们也只会告诉您“255, 255, 255”。是的，没错。

好吧，我们不能再继续撒谎了！给定一个颜色参数（由After Effects通过您的效果参数数组传递给您），此函数返回浮点表示法，包括任何高动态范围组件。

---

## PF_ColorParamSuite1

| 函数 | 用途 |
|---|---|
| `PF_GetFloatingPoint` | <pre lang="cpp">PF_Err PF_GetFloatingPointColorFromColorDef(<br/>  PF_ProgPtr         effect_ref,<br/>  const PF_ParamDef  \*color_defP,<br/>  PF_PixelFloat      \*fp_colorP);</pre> |
| `ColorFromColorDef` | |

---

## PF_PointParamSuite1

我们还提供了一种获取点参数浮点值的方法。

| 函数 | 用途 |
|---|---|
| `PF_GetFloatingPoint` | <pre lang="cpp">PF_Err PF_GetFloatingPointValueFromPointDef(<br/>  PF_ProgPtr         effect_ref,<br/>  const PF_ParamDef  \*point_defP,<br/>  A_FloatPoint       \*fp_pointP);</pre> |
| `ValueFromPointDef` | |

---

## PF_AngleParamSuite1

在CS6.0.2中新增，我们现在提供了一种获取角度参数浮点值的方法。

| 函数 | 用途 |
|---|---|
| `PF_GetFloatingPoint` | <pre lang="cpp">PF_Err PF_GetFloatingPointValueFromAngleDef(<br/>  PF_ProgPtr         effect_ref,<br/>  const PF_ParamDef  \*angle_defP,<br/>  A_FloatLong        \*fp_valueP);</pre> |
| `ValueFromAngleDef` | |

---
