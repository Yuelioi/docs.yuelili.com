---
title: DocumentPreset
---
# DocumentPreset

`documentPreset`

#### 描述

创建新文档时使用的预设文档模板。请参阅 [Documents.addDocument()](../Documents#documentsadddocument)。

---

## 属性

### DocumentPreset.artboardLayout

`documentPreset.artboardLayout`

#### 描述

新文档中画板的布局。

默认值：`GridByRow`。

#### 类型

[DocumentArtboardLayout](../scripting-constants#documentartboardlayout)

---

### DocumentPreset.artboardRowsOrCols

`documentPreset.artboardRowsOrCols`

#### 描述

画板行数（用于行布局）或列数（用于列布局）。

范围：1 到 (`numArtboards` - 1) 或 1（用于单行或单列布局）。

默认值：1

#### 类型

Number (long)。

---

### DocumentPreset.artboardSpacing

`documentPreset.artboardSpacing`

#### 描述

新文档中画板之间的间距。

默认值：20.0

#### 类型

Number (double)。

---

### DocumentPreset.colorMode

`documentPreset.colorMode`

#### 描述

新文档的色彩空间。

#### 类型

[DocumentColorSpace](../scripting-constants#documentcolorspace)

---

### DocumentPreset.documentBleedLink

`documentPreset.documentBleedLink`

#### 描述

出血值的文档链接。

#### 类型

Boolean。

---

### DocumentPreset.documentBleedOffsetRect

`documentPreset.documentBleedOffsetRect`

#### 描述

文档出血偏移矩形。

#### 类型

Rectangle。

---

### DocumentPreset.height

`documentPreset.height`

#### 描述

文档的高度（以点为单位）。

默认值：792.0

#### 类型

Number (double)。

---

### DocumentPreset.numArtboards

`documentPreset.numArtboards`

#### 描述

新文档的画板数量。

范围：1 到 100。

默认值：1。

#### 类型

Number (long)。

---

### DocumentPreset.previewMode

`documentPreset.previewMode`

#### 描述

新文档的预览模式。

#### 类型

[DocumentPreviewMode](../scripting-constants#documentpreviewmode)

---

### DocumentPreset.rasterResolution

`documentPreset.rasterResolution`

#### 描述

新文档的栅格分辨率。

#### 类型

[DocumentRasterResolution](../scripting-constants#documentrasterresolution)

---

### DocumentPreset.title

`documentPreset.title`

#### 描述

文档标题。

#### 类型

String。

---

### DocumentPreset.transparencyGrid

`documentPreset.transparencyGrid`

#### 描述

新文档的透明网格颜色。

#### 类型

[DocumentTransparencyGrid](../scripting-constants#documenttransparencygrid)

---

### DocumentPreset.typename

`documentPreset.typename`

#### 描述

引用对象的类名。

#### 类型

String；只读。

---

### DocumentPreset.units

`documentPreset.units`

#### 描述

新文档的标尺单位。

#### 类型

[RulerUnits](../scripting-constants#rulerunits)

---

### DocumentPreset.width

`documentPreset.width`

#### 描述

文档的宽度（以点为单位）。

默认值：612.0

#### 类型

Number (double)。

---
