---
title: ExportOptionsPhotoshop
---
# ExportOptionsPhotoshop

`exportOptionsPhotoshop`

#### 描述

将文档导出为 Photoshop 文件的选项，与 [Document.exportFile()](../Document#documentexportfile) 方法一起使用。所有属性都是可选的。

导出文档时，会自动附加适当的文件扩展名。您不应在文件规范中包含任何文件扩展名。

---

## 属性

### ExportOptionsPhotoshop.antiAliasing

`exportOptionsPhotoshop.antiAliasing`

#### 描述

如果为 `true`，导出的图像应进行抗锯齿处理。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsPhotoshop.artboardRange

`exportOptionsPhotoshop.artboardRange`

#### 描述

如果 `saveMultipleArtboards` 为 true，则此属性用于多资源提取，指定画板范围。空字符串表示提取所有画板。

默认值：空字符串。

#### 类型

字符串。

---

### ExportOptionsPhotoshop.editableText

`exportOptionsPhotoshop.editableText`

#### 描述

如果为 `true`，文本对象应导出为可编辑的文本图层。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsPhotoshop.embedICCProfile

`exportOptionsPhotoshop.embedICCProfile`

#### 描述

如果为 `true`，应在导出的文件中嵌入 ICC 配置文件。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsPhotoshop.imageColorSpace

`exportOptionsPhotoshop.imageColorSpace`

#### 描述

导出文件的颜色空间。

默认值：`ImageColorSpace.RGB`。

#### 类型

[ImageColorSpace](../scripting-constants#imagecolorspace)

---

### ExportOptionsPhotoshop.maximumEditability

`exportOptionsPhotoshop.maximumEditability`

#### 描述

在导出时尽可能保留原始文档的结构。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsPhotoshop.resolution

`exportOptionsPhotoshop.resolution`

#### 描述

导出文件的分辨率，单位为每英寸点数 (dpi)。

范围：72.0 到 2400.0。

默认值：150.0。

#### 类型

数字（双精度）。

---

### ExportOptionsPhotoshop.saveMultipleArtboards

`exportOptionsPhotoshop.saveMultipleArtboards`

#### 描述

如果为 `true`，则保存所有画板或指定范围的画板。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsPhotoshop.typename

`exportOptionsPhotoshop.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

### ExportOptionsPhotoshop.warnings

`exportOptionsPhotoshop.warnings`

#### 描述

如果为 `true`，在导出设置冲突时应显示警告对话框。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsPhotoshop.writeLayers

`exportOptionsPhotoshop.writeLayers`

#### 描述

如果为 `true`，文档图层应在导出的文档中呈现。

默认值：`true`。

#### 类型

布尔值。

---

## 示例

### 导出为 Photoshop 格式

```javascript
// 将当前文档导出为 PSD 文件到 dest，并指定选项，
// dest 包含完整路径和文件名

function exportFileToPSD(dest) {
 if (app.documents.length > 0) {
 var exportOptions = new ExportOptionsPhotoshop();
 exportOptions.resolution = 150;

 var type = ExportType.PHOTOSHOP;
 var fileSpec = new File(dest);

 app.activeDocument.exportFile(fileSpec, type, exportOptions);
 }
}
```
