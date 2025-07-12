---
title: EPSSaveOptions
---
# EPSSaveOptions

`epsSaveOptions`

#### 描述

用于将文档保存为 Illustrator EPS 文件的选项，与 [Document.saveAs()](../Document#documentsaveas) 方法一起使用。

所有属性都是可选的。

---

## 属性

### EPSSaveOptions.artboardRange

`epsSaveOptions.artboardRange`

#### 描述

如果 `saveMultipleArtboards` 为 `true`，则此属性用于多画板提取，指定画板范围。空字符串表示提取所有画板。

默认值：空字符串

#### 类型

字符串。

---

### EPSSaveOptions.cmykPostScript

`epsSaveOptions.cmykPostScript`

#### 描述

如果为 `true`，则使用 CMYK PostScript。

#### 类型

布尔值。

---

### EPSSaveOptions.compatibility

`epsSaveOptions.compatibility`

#### 描述

指定要保存的 EPS 文件格式的版本。

默认值：`Compatibility.ILLUSTRATOR1719`。

#### 类型

[Compatibility](../scripting-constants#compatibility)

---

### EPSSaveOptions.compatibleGradientPrinting

`epsSaveOptions.compatibleGradientPrinting`

#### 描述

如果为 `true`，则创建渐变或渐变网格的栅格项，以便 PostScript Level 2 打印机可以打印该对象。

默认值：`false`。

#### 类型

布尔值。

---

### EPSSaveOptions.embedAllFonts

`epsSaveOptions.embedAllFonts`

#### 描述

如果为 `true`，则文档中使用的所有字体都应嵌入到保存的文件中（版本 7 或更高版本）。

默认值：`false`。

#### 类型

布尔值。

---

### EPSSaveOptions.embedLinkedFiles

`epsSaveOptions.embedLinkedFiles`

#### 描述

如果为 `true`，则链接的图像文件将包含在保存的文档中。

#### 类型

布尔值。

---

### EPSSaveOptions.flattenOuput

`epsSaveOptions.flattenOuput`

#### 描述

对于早于 Illustrator 9 的文件格式，应如何对透明度进行拼合。

#### 类型

[OutputFlattening](../scripting-constants#outputflattening)

---

### EPSSaveOptions.includeDocumentThumbnails

`epsSaveOptions.includeDocumentThumbnails`

#### 描述

如果为 `true`，则应包含 EPS 作品的缩略图图像。

#### 类型

布尔值。

---

### EPSSaveOptions.overprint

`epsSaveOptions.overprint`

#### 描述

是否保留、丢弃或模拟叠印。

默认值：`PDFOverprint.PRESERVEPDFOVERPRINT`。

#### 类型

[PDFOverprint](../scripting-constants#pdfoverprint)

---

### EPSSaveOptions.postScript

`epsSaveOptions.postScript`

#### 描述

要使用的 PostScript 语言级别（Level 1 适用于文件格式版本 8 或更早版本）。

默认值：`EPSPostScriptLevelEnum.LEVEL2`。

#### 类型

[EPSPostScriptLevelEnum](../scripting-constants#epspostscriptlevelenum)

---

### EPSSaveOptions.preview

`epsSaveOptions.preview`

#### 描述

EPS 预览图像的格式。

#### 类型

[EPSPreview](../scripting-constants#epspreview)

---

### EPSSaveOptions.saveMultipleArtboards

`epsSaveOptions.saveMultipleArtboards`

#### 描述

如果为 `true`，则保存所有画板或指定范围的画板。

默认值：`false`。

#### 类型

布尔值。

---

### EPSSaveOptions.typename

`epsSaveOptions.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 导出为 EPS 格式

```javascript
// 将当前文档导出为 EPS 文件到 destFile，并指定选项，
// destFile 包含完整路径和文件名

function exportFileAsEPS(destFile) {
 var newFile = new File(destFile);
 var saveDoc;
 if (app.documents.length == 0) {
 saveDoc = app.documents.add();
 } else {
 saveDoc = app.activeDocument;
 }

 var saveOpts = new ePSSaveOptions();
 saveOpts.cmykPostScript = true;
 saveOpts.embedAllFonts = true;

 saveDoc.saveAs(newFile, saveOpts);
}
```
