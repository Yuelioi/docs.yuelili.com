---
title: FXGSaveOptions
---
# FXGSaveOptions

`fxgSaveOptions`

#### 描述

指定将文档保存为 FXG 文件时可能提供的选项。所有属性都是可选的。

---

## 属性

### FXGSaveOptions.artboardRange

`fxgSaveOptions.artboardRange`

#### 描述

如果 [`saveMultipleArtboards`](#fxgsaveoptionssavemultipleartboards) 为 true，则此选项用于多资源提取，指定画板范围。空字符串表示提取所有画板。

默认值：空字符串。

#### 类型

字符串。

---

### FXGSaveOptions.blendsPolicy

`fxgSaveOptions.blendsPolicy`

#### 描述

FXG 用于扩展混合的策略。

默认值：`BlendsExpandPolicy.AUTOMATICALLYCONVERTBLENDS`。

#### 类型

[BlendsExpandPolicy](../scripting-constants#blendsexpandpolicy)

---

### FXGSaveOptions.downsampleLinkedImages

`fxgSaveOptions.downsampleLinkedImages`

#### 描述

如果为 `true`，链接的图像将被下采样（72 dpi）。

默认值：`false`。

#### 类型

布尔值。

---

### FXGSaveOptions.filtersPolicy

`fxgSaveOptions.filtersPolicy`

#### 描述

FXG 用于保留滤镜的策略。

默认值：`FiltersPreservePolicy.KEEPFILTERSEDITABLE`。

#### 类型

[FiltersPreservePolicy](../scripting-constants#filterspreservepolicy)

---

### FXGSaveOptions.gradientsPolicy

`fxgSaveOptions.gradientsPolicy`

#### 描述

FXG 用于保留渐变的策略。

默认值：`GradientsPreservePolicy.AUTOMATICALLYCONVERTGRADIENTS`。

#### 类型

[GradientsPreservePolicy](../scripting-constants#gradientspreservepolicy)

---

### FXGSaveOptions.includeUnusedSymbols

`fxgSaveOptions.includeUnusedSymbols`

#### 描述

如果为 `true`，未使用的符号将被包含。

默认值：`false`。

#### 类型

布尔值。

---

### FXGSaveOptions.preserveEditingCapabilities

`fxgSaveOptions.preserveEditingCapabilities`

#### 描述

如果为 `true`，FXG 的编辑功能将被保留。

默认值：`true`。

#### 类型

布尔值。

---

### FXGSaveOptions.saveMultipleArtboards

`fxgSaveOptions.saveMultipleArtboards`

#### 描述

如果为 `true`，所有画板或指定范围的画板将被保存。

默认值：`false`。

#### 类型

布尔值。

---

### FXGSaveOptions.textPolicy

`fxgSaveOptions.textPolicy`

#### 描述

FXG 用于保留文本的策略。

默认值：`TextPreservePolicy.AUTOMATICALLYCONVERTTEXT`。

#### 类型

[TextPreservePolicy](../scripting-constants#textpreservepolicy)

---

### FXGSaveOptions.version

`fxgSaveOptions.version`

#### 描述

要创建的 FXG 文件格式的版本。默认值为 `FXGVersion.VERSION2PT0`。

#### 类型

[FXGVersion](../scripting-constants#fxgversion)
