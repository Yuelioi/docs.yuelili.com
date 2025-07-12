---
title: ExportOptionsPNG24
---
# ExportOptionsPNG24

`exportOptionsPNG24`

#### 描述

将文档导出为24位PNG文件的选项，与 [Document.exportFile()](../Document#documentexportfile) 方法一起使用。所有属性都是可选的。

导出文档时，会自动附加适当的文件扩展名。您不应在文件规范中包含任何文件扩展名。

---

## 属性

### ExportOptionsPNG24.antiAliasing

`exportOptionsPNG24.antiAliasing`

#### 描述

如果为 `true`，导出的图像将进行抗锯齿处理。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsPNG24.artBoardClipping

`exportOptionsPNG24.artBoardClipping`

#### 描述

如果为 `true`，导出的图像将被裁剪到画板。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsPNG24.horizontalScale

`exportOptionsPNG24.horizontalScale`

#### 描述

应用于导出图像的水平缩放因子，其中 100.0 表示 100%。

默认值：100.0。

#### 类型

数字（双精度）。

---

### ExportOptionsPNG24.matte

`exportOptionsPNG24.matte`

#### 描述

如果为 `true`，画板将使用颜色进行遮罩。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsPNG24.matteColor

`exportOptionsPNG24.matteColor`

#### 描述

用于遮罩画板的颜色。

默认值：`white`（白色）。

#### 类型

[RGBColor](.././RGBColor)

---

### ExportOptionsPNG24.saveAsHTML

`exportOptionsPNG24.saveAsHTML`

#### 描述

如果为 `true`，导出的图像将附带保存一个HTML文件。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsPNG24.transparency

`exportOptionsPNG24.transparency`

#### 描述

如果为 `true`，导出的图像将使用透明度。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsPNG24.typename

`exportOptionsPNG24.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

### ExportOptionsPNG24.verticalScale

`exportOptionsPNG24.verticalScale`

#### 描述

应用于导出图像的垂直缩放因子，其中 100.0 表示 100%。

默认值：100.0。

#### 类型

数字（双精度）。

---

## 示例

### 导出为 PNG24 格式

```javascript
// 将当前文档导出为 PNG24 文件到指定路径，并应用指定的选项，
// dest 包含完整路径和文件名，
// saveAsHTML 选项会创建一个包含 PNG 文件的 HTML 版本，并保存在 images 文件夹中

function exportFileToPNG24(dest) {
 if (app.documents.length > 0) {
 var exportOptions = new ExportOptionsPNG24();
 exportOptions.antiAliasing = false;
 exportOptions.transparency = false;
 exportOptions.saveAsHTML = true;

 var type = ExportType.PNG24;
 var fileSpec = new File(dest);

 app.activeDocument.exportFile(fileSpec, type, exportOptions);
 }
}
```
