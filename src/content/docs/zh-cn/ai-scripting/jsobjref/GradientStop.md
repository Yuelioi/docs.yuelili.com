---
title: GradientStop
---
# GradientStop

`app.activeDocument.gradients[index].gradientStops[index]`

#### 描述

渐变停止点定义，表示文档中定义的特定渐变上的一个点。每个渐变停止点指定包含渐变中的颜色变化。

有关示例，请参阅[更改渐变停止点颜色](../GradientColor#changing-a-gradient-stop-color)。

---

## 属性

### GradientStop.color

`app.activeDocument.gradients[index].gradientStops[index].color`

#### 描述

与此渐变停止点关联的颜色。

#### 类型

[颜色](.././Color)

---

### GradientStop.midPoint

`app.activeDocument.gradients[index].gradientStops[index].midPoint`

#### 描述

中点键值，以百分比形式指定，范围为13.0到87.0。

#### 类型

数字（双精度）。

---

### GradientStop.opacity

`app.activeDocument.gradients[index].gradientStops[index].opacity`

#### 描述

渐变停止点的不透明度值。

范围：0.0到100.0

#### 类型

数字（双精度）。

---

### GradientStop.parent

`app.activeDocument.gradients[index].gradientStops[index].parent`

#### 描述

包含此渐变停止点的渐变。

#### 类型

[渐变](.././Gradient); 只读。

---

### GradientStop.rampPoint

`app.activeDocument.gradients[index].gradientStops[index].rampPoint`

#### 描述

颜色在混合中的位置，范围为0.0到100.0，其中100.0表示100%。

#### 类型

数字（双精度）。

---

### GradientStop.typename

`app.activeDocument.gradients[index].gradientStops[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串; 只读。

---

## 方法

### GradientStop.remove()

`app.activeDocument.gradients[index].gradientStops[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。
