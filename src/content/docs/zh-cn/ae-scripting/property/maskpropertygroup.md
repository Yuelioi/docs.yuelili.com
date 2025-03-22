---
title: 蒙版属性组
---
# MaskPropertyGroup 对象

`app.project.item(index).layer(index).mask`

#### 描述

MaskPropertyGroup 对象封装了图层中的遮罩属性。

:::info
MaskPropertyGroup 是 [PropertyGroup 对象](../propertygroup) 的子类。除了下面列出的方法和属性外，[PropertyBase 对象](../propertybase) 和 PropertyGroup 的所有方法和属性在处理 MaskPropertyGroup 时也可用。
:::

---

## 属性

### MaskPropertyGroup.color

`app.project.item(index).layer(index).mask(index).color`

#### 描述

用于绘制遮罩轮廓的颜色，显示在用户界面中（合成面板、图层面板和时间轴面板）。

#### 类型

包含三个浮点值的数组，`[R, G, B]`，范围为 `[0.0..1.0]`；可读写。

---

### MaskPropertyGroup.inverted

`app.project.item(index).layer(index).mask(index).inverted`

#### 描述

当为 `true` 时，遮罩被反转；否则为 `false`。

#### 类型

布尔值；可读写。

---

### MaskPropertyGroup.locked

`app.project.item(index).layer(index).mask(index).locked`

#### 描述

当为 `true` 时，遮罩被锁定且无法在用户界面中编辑；否则为 `false`。

#### 类型

布尔值；可读写。

---

### MaskPropertyGroup.maskFeatherFalloff

`app.project.item(index).layer(index).mask(index).maskFeatherFalloff`

#### 描述

遮罩的羽化衰减模式。等同于图层 > 遮罩 > 羽化衰减设置。

#### 类型

`MaskFeatherFalloff` 枚举值；可读写。取值为：

- `MaskFeatherFalloff.FFO_LINEAR`
- `MaskFeatherFalloff.FFO_SMOOTH`

---

### MaskPropertyGroup.maskMode

`app.project.item(index).layer(index).mask(index).maskMode`

#### 描述

此遮罩的遮罩模式。

#### 类型

`MaskMode` 枚举值；可读写。取值为：

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

运动模糊如何应用于此遮罩。

#### 类型

`MakMotionBlur` 枚举值；可读写。取值为：

- `MaskMotionBlur.SAME_AS_LAYER`
- `MaskMotionBlur.ON`
- `MaskMotionBlur.OFF`

---

### MaskPropertyGroup.rotoBezier

`app.project.item(index).layer(index).mask(index).rotoBezier`

#### 描述

当为 `true` 时，遮罩为 RotoBezier 形状；否则为 `false`。

#### 类型

布尔值；可读写。
