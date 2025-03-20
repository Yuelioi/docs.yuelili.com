---
title: 属性
---
# Layer Properties

`thisLayer`

当你向图层添加蒙版、效果、绘画或文本时，After Effects 会在时间轴面板中添加新的属性。这些属性太多，无法在此一一列出，因此请使用拾取器来学习在表达式中引用它们的语法。

:::info
在本页中，我们将使用 `thisLayer` 作为调用这些项的示例，但请注意，任何返回 [Layer](.././layer) 的方法都可以使用。
:::

---

## 属性

### Layer.anchorPoint

`thisLayer.anchorPoint`

#### 描述

返回图层在其坐标系（图层空间）中的锚点值。

#### 类型

数字数组（2 维或 3 维）

---

### Layer.audioLevels

`thisLayer.audioLevels`

#### 描述

返回图层的音频电平属性值，单位为分贝。该值是一个 2D 值；第一个值表示左音频通道，第二个值表示右音频通道。该值不是源素材音频轨道的振幅，而是音频电平属性的值，可能会受到关键帧的影响。

#### 类型

数字数组（2 维）

---

### Layer.marker

`thisLayer.marker`

#### 描述

返回给定图层的 [Marker](../objects/marker-property) 属性。

#### 类型

[Marker 属性](../objects/marker-property)

---

### Layer.name

`thisLayer.name`

#### 描述

返回图层的名称。

#### 类型

字符串

---

### Layer.opacity

`thisLayer.opacity`

#### 描述

返回图层的不透明度值，以百分比表示。

#### 类型

数字

---

### Layer.position

`thisLayer.position`

#### 描述

返回图层的位置值，如果图层没有父图层，则返回世界空间中的位置值。如果图层有父图层，则返回图层在父图层坐标系中的位置值（在父图层的图层空间中）。

#### 类型

数字数组（2 维或 3 维）

---

### Layer.rotation

`thisLayer.rotation`

#### 描述

返回图层的旋转值，单位为度。对于 3D 图层，返回 z 轴的旋转值，单位为度。

#### 类型

数字

---

### Layer.scale

`thisLayer.scale`

#### 描述

返回图层的缩放值，以百分比表示。

#### 类型

数字数组（2 维或 3 维）

---

### Layer.timeRemap

`thisLayer.timeRemap`

#### 描述

如果启用了时间重映射，则返回时间重映射属性的值，单位为秒。

#### 类型

数字
