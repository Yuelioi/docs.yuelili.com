---
title: OpenOptionsAutoCAD
---
# OpenOptionsAutoCAD

`openOptionsAutoCAD`

#### 描述

用于打开 AutoCAD 绘图的选项，与 [Application.open()](../Application#applicationopen) 方法一起使用。

---

## 属性

### OpenOptionsAutoCAD.centerArtwork

`openOptionsAutoCAD.centerArtwork`

#### 描述

如果为 `true`，则艺术品在画板上居中。

默认值：`true`。

#### 类型

布尔值。

---

### OpenOptionsAutoCAD.globalScaleOption

`openOptionsAutoCAD.globalScaleOption`

#### 描述

导入时如何缩放绘图。

默认值：`AutoCADGlobalScaleOption.FitArtboard`。

#### 类型

[AutoCADGlobalScaleOption](../scripting-constants#autocadglobalscaleoption)

---

### OpenOptionsAutoCAD.globalScalePercent

`openOptionsAutoCAD.globalScalePercent`

#### 描述

当 `globalScaleOption` 为 `AutoCADGlobalScaleOption.ScaleByValue` 时的值，以百分比表示。

范围：0.0 到 100.0。默认值为 100.0。

#### 类型

数字（双精度）。

---

### OpenOptionsAutoCAD.mergeLayers

`openOptionsAutoCAD.mergeLayers`

#### 描述

如果为 `true`，则合并艺术品的图层。

默认值：`false`。

#### 类型

布尔值。

---

### OpenOptionsAutoCAD.parent

`openOptionsAutoCAD.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### OpenOptionsAutoCAD.scaleLineweights

`openOptionsAutoCAD.scaleLineweights`

#### 描述

如果为 `true`，则线宽将与绘图的其他部分按相同比例缩放。

默认值：`false`。

#### 类型

布尔值。

---

### OpenOptionsAutoCAD.selectedLayoutName

`openOptionsAutoCAD.selectedLayoutName`

#### 描述

要导入的绘图中的布局名称。

#### 类型

字符串。

---

### OpenOptionsAutoCAD.typename

`openOptionsAutoCAD.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

### OpenOptionsAutoCAD.unit

`openOptionsAutoCAD.unit`

#### 描述

要映射的单位。

默认值：`AutoCADUnit.Millimeters`。

#### 类型

[AutoCADUnit](../scripting-constants#autocadunit)

---

### OpenOptionsAutoCAD.unitScaleRatio

`openOptionsAutoCAD.unitScaleRatio`

#### 描述

映射单位时的缩放比例。

默认值：1.0。

#### 类型

数字（双精度）。
