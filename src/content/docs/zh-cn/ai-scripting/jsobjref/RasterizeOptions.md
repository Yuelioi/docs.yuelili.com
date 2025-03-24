---
title: RasterizeOptions
---
# RasterizeOptions

`rasterizeOptions`

#### 描述

指定在栅格化艺术作品时可能提供的选项。

所有属性都是可选的。

---

## 属性

### RasterizeOptions.antiAliasingMethod

`rasterizeOptions.antiAliasingMethod`

#### 描述

抗锯齿方法的类型。

默认值：`AntiAliasingMethod.ARTOPTIMIZED`

#### 类型

[AntiAliasingMethod](../scripting-constants#antialiasingmethod)

---

### RasterizeOptions.backgroundBlack

`rasterizeOptions.backgroundBlack`

#### 描述

如果为 `true`，栅格化将在黑色背景上进行（而不是白色）。

默认值：`false`

#### 类型

布尔值

---

### RasterizeOptions.clippingMask

`rasterizeOptions.clippingMask`

#### 描述

如果为 `true`，应为图像创建剪切蒙版。

默认值：`false`

#### 类型

布尔值

---

### RasterizeOptions.colorModel

`rasterizeOptions.colorModel`

#### 描述

栅格化的颜色模型。

默认值：`RasterizationColorModel.DEFAULTCOLORMODEL`

#### 类型

[RasterizationColorModel](../scripting-constants#rasterizationcolormodel)

---

### RasterizeOptions.convertSpotColors

`rasterizeOptions.convertSpotColors`

#### 描述

如果为 `true`，专色应转换为图像的处理颜色。

默认值：`false`

#### 类型

布尔值

---

### RasterizeOptions.convertTextToOutlines

`rasterizeOptions.convertTextToOutlines`

#### 描述

如果为 `true`，所有文本在栅格化之前都会转换为轮廓。

默认值：`false`

#### 类型

布尔值

---

### RasterizeOptions.includeLayers

`rasterizeOptions.includeLayers`

#### 描述

如果为 `true`，生成的图像将包含图层属性（如不透明度和混合模式）。

默认值：`false`

#### 类型

布尔值

---

### RasterizeOptions.padding

`rasterizeOptions.padding`

#### 描述

栅格化期间在对象周围添加的空白区域（以点为单位）。

默认值：.0

#### 类型

数字（双精度）

---

### RasterizeOptions.resolution

`rasterizeOptions.resolution`

#### 描述

栅格化分辨率，单位为每英寸点数（dpi）。

范围：72.0 到 2400.0。

默认值：300.0

#### 类型

数字（双精度）

---

### RasterizeOptions.transparency

`rasterizeOptions.transparency`

#### 描述

如果为 `true`，图像应使用透明度。

默认值：`false`

#### 类型

布尔值
