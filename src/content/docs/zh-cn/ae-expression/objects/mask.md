---
title: 蒙版
---
# Mask

`thisLayer.mask("Mask 1")`

此类别包含与蒙版对象相关的信息。要操作实际的蒙版 *路径* ，请参阅 [蒙版路径]()。

:::note
你可以将蒙版路径属性链接到其他路径属性（形状图层中的路径和画笔描边），但这些属性无法通过表达式直接进行数值操作。 ::::::info 在本页中，我们将使用 `thisLayer.mask("Mask 1")` 作为调用这些项的示例，但请注意，任何返回 [蒙版](#) 的方法都可以使用。
:::

---

## 属性

### Mask.invert

`thisLayer.mask("Mask 1").invert`

#### 描述

如果蒙版已反转，则返回 `true`；否则返回 `false`。

#### 类型

布尔值

---

### Mask.maskExpansion

`thisLayer.mask("Mask 1").maskExpansion`

#### 描述

返回蒙版的扩展值，单位为像素。

#### 类型

数字

---

### Mask.maskFeather

`thisLayer.mask("Mask 1").maskFeather`

#### 描述

返回蒙版的羽化值，单位为像素。

#### 类型

数字

---

### Mask.maskOpacity

`thisLayer.mask("Mask 1").maskOpacity`

#### 描述

以百分比形式返回蒙版的不透明度值。

#### 类型

数字

---

### Mask.maskPath

`thisLayer.mask("Mask 1").maskPath`

#### 描述

返回实际的蒙版 [路径](../path-property)。

#### 类型

[路径对象](../path-property)
