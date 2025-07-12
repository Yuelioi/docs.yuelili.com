---
title: OpenOptions
---
# OpenOptions

`openOptions`

#### 描述

用于打开文档的选项，与 [Application.open()](../Application#applicationopen) 方法一起使用。

---

## 属性

### OpenOptions.convertCropAreaToArboard

`openOptions.convertCropAreaToArboard`

#### 描述

可选。在 Illustrator CS4 或更高版本中打开旧版文档时，将裁剪区域转换为画板。当为 `false` 时，裁剪区域将被丢弃。

默认值：`true`。

#### 类型

布尔值。

---

### OpenOptions.convertTilesToArboard

`openOptions.convertTilesToArboard`

#### 描述

可选。在 Illustrator CS4 或更高版本中打开旧版文档时，将打印拼贴转换为画板。

默认值：`false`。

#### 类型

布尔值。

---

### OpenOptions.createArtboardWithArtworkBoundingBox

`openOptions.createArtboardWithArtworkBoundingBox`

#### 描述

可选。在 Illustrator CS4 或更高版本中打开旧版文档时，使用图稿的边界框尺寸创建画板。

默认值：`false`。

#### 类型

布尔值。

---

### OpenOptions.openAs

`openOptions.openAs`

#### 描述

可选。将文件作为此类型的 Illustrator 库打开。

默认值：`LibraryType.IllustratorArtwork`。

#### 类型

[LibraryType](../scripting-constants#librarytype)

---

### OpenOptions.preserveLegacyArtboard

`openOptions.preserveLegacyArtboard`

#### 描述

可选。在 Illustrator CS4 或更高版本中打开旧版文档时，保留旧版画板。

默认值：`true`。

#### 类型

布尔值。

---

### OpenOptions.updateLegacyGradientMesh

`openOptions.updateLegacyGradientMesh`

#### 描述

如果为 `true`，则为旧版文档（Illustrator CS4 之前）保留渐变网格对象中的专色。

默认值：`true`。

#### 类型

布尔值。

---

### OpenOptions.updateLegacyText

`openOptions.updateLegacyText`

#### 描述

可选。如果为 `true`，则更新所有旧版文本项（来自 Illustrator 的早期版本）。

默认值：`false`。

#### 类型

布尔值。

---

## 示例

### 打开时自动更新旧版文本

```javascript
// 使用 OpenOptions 打开包含旧版文本的文件（AI 10 或更早版本），
// 并自动更新旧版文本。

var fileRef = filePath;
if (fileRef != null) {
 var openOptions = new OpenOptions();
 openOptions.updateLegacyText = true;

 var docRef = open(fileRef, DocumentColorSpace.RGB, openOptions);
}
```
