---
title: ExportOptionsSVG
---
# ExportOptionsSVG

`exportOptionsSVG`

#### 描述

将文档导出为 SVG 文件的选项，与 [Document.exportFile()](../Document#documentexportfile) 方法一起使用。所有属性都是可选的。

导出文档时，会自动附加适当的文件扩展名。您不应在文件规范中包含任何文件扩展名。

---

## 属性

### ExportOptionsSVG.artboardRange

`exportOptionsSVG.artboardRange`

#### 描述

如果 `saveMultipleArtboards` 为 `true`，则要保存的画板范围。以逗号分隔的画板名称列表，或空字符串以保存所有画板。

默认值：空字符串。

#### 类型

字符串。

---

### ExportOptionsSVG.compressed

`exportOptionsSVG.compressed`

#### 描述

如果为 `true`，则导出的文件应被压缩。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsSVG.coordinatePrecision

`exportOptionsSVG.coordinatePrecision`

#### 描述

元素坐标值的小数精度。

范围：1 到 7。

默认值：3。

#### 类型

数字（长整型）

---

### ExportOptionsSVG.cssProperties

`exportOptionsSVG.cssProperties`

#### 描述

文档的 CSS 属性应如何包含在导出的文件中。

默认值：`SVGCSSPropertyLocation.STYLEATTRIBUTES`。

#### 类型

[SVGCSSPropertyLocation](../scripting-constants#svgcsspropertylocation)

---

### ExportOptionsSVG.documentEncoding

`exportOptionsSVG.documentEncoding`

#### 描述

文档中的文本应如何编码。

默认值：`SVGDocumentEncoding.ASCII`。

#### 类型

[SVGDocumentEncoding](../scripting-constants#svgdocumentencoding)

---

### ExportOptionsSVG.DTD

`exportOptionsSVG.DTD`

#### 描述

文件应符合的 SVG 版本。

默认值：`SVGDTDVersion.SVG1_1`。

#### 类型

[SVGDTDVersion](../scripting-constants#svgdtdversion)

---

### ExportOptionsSVG.embedRasterImages

`exportOptionsSVG.embedRasterImages`

#### 描述

如果为 `true`，则文档中包含的栅格图像应嵌入到导出的文件中。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsSVG.fontSubsetting

`exportOptionsSVG.fontSubsetting`

#### 描述

应包含在导出文件中的字体字形。

默认值：`SVGFontSubsetting.ALLGLYPHS`。

#### 类型

[SVGFontSubsetting](../scripting-constants#svgfontsubsetting)

---

### ExportOptionsSVG.fontType

`exportOptionsSVG.fontType`

#### 描述

导出文件中包含的字体类型。

默认值：`SVGFontType.CEFFONT`。

#### 类型

[SVGFontType](../scripting-constants#svgfonttype)

---

### ExportOptionsSVG.includeFileInfo

`exportOptionsSVG.includeFileInfo`

#### 描述

如果为 `true`，则文件信息应保存在导出的文件中。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsSVG.includeUnusedStyles

`exportOptionsSVG.includeUnusedStyles`

#### 描述

如果为 `true`，则在导出的文件中保存未使用的样式。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsSVG.includeVariablesAndDatasets

`exportOptionsSVG.includeVariablesAndDatasets`

#### 描述

如果为 `true`，则变量和数据集应保存在导出的文件中。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsSVG.optimizeForSVGViewer

`exportOptionsSVG.optimizeForSVGViewer`

#### 描述

如果为 `true`，则导出的文件应针对 SVG 查看器进行优化。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsSVG.preserveEditability

`exportOptionsSVG.preserveEditability`

#### 描述

如果为 `true`，则在导出文档时应保留 Illustrator 的编辑功能。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsSVG.saveMultipleArtboards

`exportOptionsSVG.saveMultipleArtboards`

#### 描述

如果为 `true`，则在导出的文件中保存由 `artboardRange` 指定的画板。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsSVG.slices

`exportOptionsSVG.slices`

#### 描述

如果为 `true`，则切片数据应随文件一起导出。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsSVG.sVGAutoKerning

`exportOptionsSVG.sVGAutoKerning`

#### 描述

如果为 `true`，则文件中允许 SVG 自动字距调整。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsSVG.sVGTextOnPath

`exportOptionsSVG.sVGTextOnPath`

#### 描述

如果为 `true`，则文件中允许 SVG 路径上的文本构造。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsSVG.typename

`exportOptionsSVG.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 导出为 SVG 格式

```javascript
// 将当前文档导出为指定选项的 SVG 文件，dest 包含完整路径和文件名

function exportFileToSVG(dest) {
 if (app.documents.length > 0) {
 var exportOptions = new ExportOptionsSVG();
 exportOptions.embedRasterImages = true;
 exportOptions.embedAllFonts = false;
 exportOptions.fontSubsetting = SVGFontSubsetting.GLYPHSUSED;

 var type = ExportType.SVG;
 var fileSpec = new File(dest);

 app.activeDocument.exportFile(fileSpec, type, exportOptions);
 }
}
```
