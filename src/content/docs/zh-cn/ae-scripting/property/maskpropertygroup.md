---
title: maskpropertygroup
---
# MaskPropertyGroup object

`app.project.item(index).layer(index).mask`

#### 描述

The MaskPropertyGroup object encapsulates mask attributes in a layer.

:::info
MaskPropertyGroup is a subclass of [PropertyGroup object](../propertygroup). All methods and attributes of [PropertyBase object](../propertybase) and PropertyGroup, in addition to those listed below, are available when working with MaskPropertyGroup.
:::

---

## 属性

### MaskPropertyGroup.color

`app.project.item(index).layer(index).mask(index).color`

#### 描述

The color used to draw the mask outline as it appears in the user interface (Composition panel, Layer panel, and Timeline panel).

#### 类型

Array of three floating-point values, `[R, G, B]`, 范围为 `[0.0..1.0]`; read/write.

---

### MaskPropertyGroup.inverted

`app.project.item(index).layer(index).mask(index).inverted`

#### 描述

When `true`, the mask is inverted; otherwise `false`.

#### 类型

Boolean; read/write.

---

### MaskPropertyGroup.locked

`app.project.item(index).layer(index).mask(index).locked`

#### 描述

When `true`, the mask is locked and cannot be edited in the user interface; otherwise `false`.

#### 类型

Boolean; read/write.

---

### MaskPropertyGroup.maskFeatherFalloff

`app.project.item(index).layer(index).mask(index).maskFeatherFalloff`

#### 描述

The feather falloff mode for the mask. Equivalent to the Layer > Mask > Feather Falloff setting.

#### 类型

A `MaskFeatherFalloff` enumerated value; read/write. One of:

- `MaskFeatherFalloff.FFO_LINEAR`
- `MaskFeatherFalloff.FFO_SMOOTH`

---

### MaskPropertyGroup.maskMode

`app.project.item(index).layer(index).mask(index).maskMode`

#### 描述

The masking mode for this mask.

#### 类型

A `MaskMode` enumerated value; read/write. One of:

- `MaskMode.NONE`
- `MaskMode.ADD`
- `MaskMode.SUBTRACT`
- `MaskMode.INTERSECT`
- `MaskMode.LIGHTEN`
- `MaskMode.DARKEN`
- `MaskMode.DIFFERENCE`

---

### MaskPropertyGroup.maskMotionBlur

`app.project.item(index).layer(index).mask(index).maskMotionBlur`

#### 描述

How motion blur is applied to this mask.

#### 类型

A `MakMotionBlur` enumerated value; read/write. One of:

- `MaskMotionBlur.SAME_AS_LAYER`
- `MaskMotionBlur.ON`
- `MaskMotionBlur.OFF`

---

### MaskPropertyGroup.rotoBezier

`app.project.item(index).layer(index).mask(index).rotoBezier`

#### 描述

When `true`, the mask is a RotoBezier shape; otherwise `false`.

#### 类型

Boolean; read/write.
