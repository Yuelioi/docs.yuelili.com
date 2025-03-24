---
title: RasterEffectOptions
---
# RasterEffectOptions

`RasterEffectOptions`

#### 描述

指定文档的栅格效果设置。所有属性均为可选。

---

## 属性

### RasterEffectOptions.antiAliasing

`rasterEffectOptions.antiAliasing`

#### 描述

如果为 `true`，图像应进行抗锯齿处理。

默认值：`false`

#### 类型

布尔值

---

### RasterEffectOptions.clippingMask

`rasterEffectOptions.clippingMask`

#### 描述

如果为 `true`，将为图像创建剪切蒙版。

默认值：`false`

#### 类型

布尔值

---

### RasterEffectOptions.colorModel

`rasterEffectOptions.colorModel`

#### 描述

栅格化的颜色模型。

默认值：`RasterizationColorModel.DEFAULTCOLORMODEL`

#### 类型

[RasterizationColorModel](../scripting-constants#rasterizationcolormodel)

---

### RasterEffectOptions.convertSpotColors

`rasterEffectOptions.convertSpotColors`

#### 描述

如果为 `true`，所有专色将转换为图像的过程颜色。

默认值：`false`

#### 类型

布尔值

---

### RasterEffectOptions.padding

`rasterEffectOptions.padding`

#### 描述

栅格化期间在对象周围添加的空白区域（以点为单位）。

默认值：.0

#### 类型

数字（双精度）

---

### RasterEffectOptions.resolution

`rasterEffectOptions.resolution`

#### 描述

栅格化分辨率，单位为每英寸点数（dpi）。

范围：72.0 到 2400.0。

默认值：300.0

#### 类型

数字（双精度）

---

### RasterEffectOptions.transparency

`rasterEffectOptions.transparency`

#### 描述

如果为 `true`，图像应使用透明度。

默认值：`false`

#### 类型

布尔值
