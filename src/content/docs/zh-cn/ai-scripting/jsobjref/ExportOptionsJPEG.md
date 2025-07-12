---
title: ExportOptionsJPEG
---
# ExportOptionsJPEG

`exportOptionsJPEG`

#### 描述

将文档导出为 JPEG 文件的选项，与 [Document.exportFile()](../Document#documentexportfile) 方法一起使用。所有属性都是可选的。

导出文档时，会自动附加适当的文件扩展名。您不应在文件规范中包含任何文件扩展名。

---

## 属性

### ExportOptionsJPEG.antiAliasing

`exportOptionsJPEG.antiAliasing`

#### 描述

如果为 `true`，导出的图像应进行抗锯齿处理。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsJPEG.artBoardClipping

`exportOptionsJPEG.artBoardClipping`

#### 描述

如果为 `true`，导出的图像应裁剪到画板。

#### 类型

布尔值。

---

### ExportOptionsJPEG.blurAmount

`exportOptionsJPEG.blurAmount`

#### 描述

应用于导出图像的模糊量。

范围：0.0 到 2.0。

默认值：0.0。

#### 类型

数字（双精度）。

---

### ExportOptionsJPEG.horizontalScale

`exportOptionsJPEG.horizontalScale`

#### 描述

应用于导出图像的水平缩放因子，其中 100.0 表示 100%。

默认值：100.0。

#### 类型

数字（双精度）。

---

### ExportOptionsJPEG.matte

`exportOptionsJPEG.matte`

#### 描述

如果为 `true`，画板应使用颜色进行遮罩处理。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsJPEG.matteColor

`exportOptionsJPEG.matteColor`

#### 描述

用于遮罩画板的颜色。

默认值：`white`。

#### 类型

[RGBColor](.././RGBColor)

---

### ExportOptionsJPEG.optimization

`exportOptionsJPEG.optimization`

#### 描述

如果为 `true`，导出的图像应针对网页浏览进行优化。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsJPEG.qualitySetting

`exportOptionsJPEG.qualitySetting`

#### 描述

导出图像的质量。

范围：0 到 100。

默认值：30。

#### 类型

数字（长整型）。

---

### ExportOptionsJPEG.saveAsHTML

`exportOptionsJPEG.saveAsHTML`

#### 描述

如果为 `true`，导出的图像应保存为附带 HTML 文件。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsJPEG.typename

`exportOptionsJPEG.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

### ExportOptionsJPEG.verticalScale

`exportOptionsJPEG.verticalScale`

#### 描述

应用于导出图像的垂直缩放因子。

范围：0.0 到 776.19。

默认值：100.0。

#### 类型

数字（双精度）

---

## 示例

### 导出为 JPEG 格式

```javascript
// 将当前文档导出为 JPEG 文件到 dest，使用指定的选项，
// dest 包含完整路径，包括文件名

function exportFileToJPEG(dest) {
 if (app.documents.length > 0) {
 var exportOptions = new ExportOptionsJPEG();
 exportOptions.antiAliasing = false;
 exportOptions.qualitySetting = 70;

 var type = ExportType.JPEG;
 var fileSpec = new File(dest);

 app.activeDocument.exportFile(fileSpec, type, exportOptions);
 }
}
```
