---
title: TracingOptions
---
# TracingOptions

`image.tracing.tracingOptions`

#### 描述

一组用于通过描边将栅格艺术转换为矢量艺术的选项。

---

## 属性

### TracingOptions.cornerAngle

`image.tracing.tracingOptions.cornerAngle`

#### 描述

原始图像中转弯的锐度（以度为单位），在描边结果路径中被视为拐角。

范围：0 到 180

#### 类型

数字（双精度）

---

### TracingOptions.fills

`image.tracing.tracingOptions.fills`

#### 描述

如果为 `true`，则使用填充进行描边。`fills` 或 `strokes` 中至少有一个必须为 `true`。

#### 类型

布尔值

---

### TracingOptions.ignoreWhite

`image.tracing.tracingOptions.ignoreWhite`

#### 描述

如果为 `true`，则忽略白色填充颜色。

#### 类型

布尔值

---

### TracingOptions.livePaintOutput

`image.tracing.tracingOptions.livePaintOutput`

#### 描述

如果为 `true`，则结果为实时绘画艺术。如果为 `false`，则为经典艺术。

:::note
脚本应仅在准备后续扩展操作时设置此值。当此属性为 `true` 时，将描边保留在画板上可能会导致应用程序行为异常。
:::

#### 类型

布尔值

---

### TracingOptions.maxColors

`image.tracing.tracingOptions.maxColors`

#### 描述

自动调色板生成允许的最大颜色数。

仅在 `tracingMode` 为 `TracingModeType.TRACINGMODECOLOR` 或 `TracingModeType.TRACINGMODEGRAY` 时使用。

范围：2 到 256

#### 类型

数字（长整型）

---

### TracingOptions.maxStrokeWeight

`image.tracing.tracingOptions.maxStrokeWeight`

#### 描述

当 `strokes` 为 `true` 时的最大描边粗细。

范围：0.01 到 100.0

#### 类型

数字（双精度）

---

### TracingOptions.minArea

`image.tracing.tracingOptions.minArea`

#### 描述

描边的最小特征，以平方像素为单位。

例如，如果为 4，则描边 2 像素宽 × 2 像素高的特征。

#### 类型

数字（长整型）

---

### TracingOptions.minStrokeLength

`image.tracing.tracingOptions.minStrokeLength`

#### 描述

当 `strokes` 为 `true` 时，原始图像中可以被描边的特征的最小长度（以像素为单位）。

较小的特征将被忽略。

范围：0.0 到 200.0。

默认值：20.0

#### 类型

数字（双精度）

---

### TracingOptions.outputToSwatches

`image.tracing.tracingOptions.outputToSwatches`

#### 描述

如果为 `true`，则为描边结果创建的每种新颜色生成命名颜色（色板）。

仅在 `tracingMode` 为 `TracingModeType.TRACINGMODECOLOR` 或 `TracingModeType.TRACINGMODEGRAY` 时使用。

#### 类型

布尔值

---

### TracingOptions.palette

`image.tracing.tracingOptions.palette`

#### 描述

用于描边的调色板名称。如果为空字符串，则使用自动调色板。

仅在 `tracingMode` 为 `TracingModeType.TRACINGMODECOLOR` 或 `TracingModeType.TRACINGMODEGRAY` 时使用。

#### 类型

字符串

---

### TracingOptions.parent

`image.tracing.tracingOptions.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### TracingOptions.pathFitting

`image.tracing.tracingOptions.pathFitting`

#### 描述

描边形状与原始像素形状之间的距离。较低的值创建更紧密的路径拟合。

较高的值创建更宽松的路径拟合。

范围：0.0 到 10.0

#### 类型

数字（双精度）

---

### TracingOptions.preprocessBlur

`image.tracing.tracingOptions.preprocessBlur`

#### 描述

预处理期间使用的模糊量，以像素为单位。模糊有助于减少描边结果中的小伪影并平滑锯齿边缘。

范围：0.0 到 2.0

#### 类型

数字（双精度）

---

### TracingOptions.preset

`image.tracing.tracingOptions.preset`

#### 描述

包含这些选项的预设文件的名称。

#### 类型

字符串；只读。

---

### TracingOptions.resample

`image.tracing.tracingOptions.resample`

#### 描述

如果为 `true`，则在描边时重新采样。（此设置不会保存在预设文件中。）

当栅格源艺术被放置或链接时，始终为 `true`。

#### 类型

布尔值

---

### TracingOptions.resampleResolution

`image.tracing.tracingOptions.resampleResolution`

#### 描述

重新采样时使用的分辨率，以每英寸像素数 (ppi) 为单位。

较低的分辨率会提高描边操作的速度。（此设置不会保存在预设文件中。）

#### 类型

数字（双精度）

---

### TracingOptions.strokes

`image.tracing.tracingOptions.strokes`

#### 描述

如果为 `true`，则使用描边进行描边。`fills` 或 `strokes` 中至少有一个必须为 `true`。

仅在 `tracingMode` 为 `TracingModeType.TRACINGMODEBLACKANDWHITE` 时使用。

#### 类型

布尔值

---

### TracingOptions.threshold

`image.tracing.tracingOptions.threshold`

#### 描述

黑白描边的阈值。所有灰度值大于此值的像素都将转换为黑色。

仅在 `tracingMode` 为 `TracingModeType.TRACINGMODEBLACKANDWHITE` 时使用。

范围：0 到 255

#### 类型

数字（长整型）

---

### TracingOptions.tracingMode

`image.tracing.tracingOptions.tracingMode`

#### 描述

描边的颜色模式。

#### 类型

[TracingModeType](../scripting-constants#tracingmodetype)

---

### TracingOptions.typename

`image.tracing.tracingOptions.typename`

#### 描述

只读。对象的类名。

#### 类型

字符串

---

### TracingOptions.viewRaster

`image.tracing.tracingOptions.viewRaster`

#### 描述

栅格图像预览的视图。（此设置不会保存在预设文件中。）

#### 类型

[ViewRasterType](../scripting-constants#viewrastertype)

---

### TracingOptions.viewVector

`image.tracing.tracingOptions.viewVector`

#### 描述

矢量结果预览的视图。（此设置不会保存在预设文件中。）

#### 类型

[ViewVectorType](../scripting-constants#viewvectortype)

---

## 方法

### TracingOptions.loadFromPreset()

`image.tracing.tracingOptions.loadFromPreset(parameter)`

#### 描述

从指定的预设加载一组选项，如 `Application.tracingPresetList` 数组中所列。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `presetName` | 字符串 | 要加载的预设名称 |

#### 返回值

布尔值

---

### TracingOptions.storeToPreset()

`image.tracing.tracingOptions.storeToPreset(parameter)`

#### 描述

将此组选项保存到指定的预设中。

使用 `Application.tracingPresetList` 数组中的名称，或使用新名称创建新预设。

对于现有预设，覆盖未锁定的预设并返回 `true`。

如果预设已锁定，则返回 `false`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `presetName` | 字符串 | 要保存的预设名称 |

#### 返回值

布尔值

---
