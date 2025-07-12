---
title: ExportOptionsPNG8
---
# ExportOptionsPNG8

`exportOptionsPNG8`

#### 描述

将文档导出为8位PNG文件的选项，与 [Document.exportFile()](../Document#documentexportfile) 方法一起使用。所有属性都是可选的。

导出文档时，会自动附加适当的文件扩展名。您不应在文件规范中包含任何文件扩展名。

---

## 属性

### ExportOptionsPNG8.antiAliasing

`exportOptionsPNG8.antiAliasing`

#### 描述

如果为 `true`，导出的图像应进行抗锯齿处理。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsPNG8.artBoardClipping

`exportOptionsPNG8.artBoardClipping`

#### 描述

如果为 `true`，导出的图像应裁剪到画板。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsPNG8.colorCount

`exportOptionsPNG8.colorCount`

#### 描述

导出图像颜色表中的颜色数量。

范围：2 到 256。

默认值：128。

#### 类型

数字（长整型）。

---

### ExportOptionsPNG8.colorDither

`exportOptionsPNG8.colorDither`

#### 描述

导出图像中颜色抖动的处理方法。

默认值：`ColorDitherMethod.Diffusion`。

#### 类型

[ColorDitherMethod](../scripting-constants#colordithermethod)

---

### ExportOptionsPNG8.colorReduction

`exportOptionsPNG8.colorReduction`

#### 描述

导出图像中减少颜色数量的处理方法。

默认值：`ColorReductionMethod.SELECTIVE`。

#### 类型

[ColorReductionMethod](../scripting-constants#colorreductionmethod)

---

### ExportOptionsPNG8.ditherPercent

`exportOptionsPNG8.ditherPercent`

#### 描述

导出图像中颜色抖动的百分比，其中 100.0 表示 100%。

范围：0 到 100。

默认值：88。

#### 类型

数字（长整型）。

---

### ExportOptionsPNG8.horizontalScale

`exportOptionsPNG8.horizontalScale`

#### 描述

应用于导出图像的水平缩放因子，其中 100.0 表示 100%。

默认值：100.0。

#### 类型

数字（双精度）。

---

### ExportOptionsPNG8.interlaced

`exportOptionsPNG8.interlaced`

#### 描述

如果为 `true`，导出的图像应进行隔行扫描。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsPNG8.matte

`exportOptionsPNG8.matte`

#### 描述

如果为 `true`，画板应使用颜色进行遮罩。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsPNG8.matteColor

`exportOptionsPNG8.matteColor`

#### 描述

用于遮罩画板的颜色。

默认值：`white`。

#### 类型

[RGBColor](.././RGBColor)

---

### ExportOptionsPNG8.saveAsHTML

`exportOptionsPNG8.saveAsHTML`

#### 描述

如果为 `true`，导出的图像将附带保存一个HTML文件。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsPNG8.transparency

`exportOptionsPNG8.transparency`

#### 描述

如果为 `true`，导出的图像将使用透明度。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsPNG8.typename

`exportOptionsPNG8.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

### ExportOptionsPNG8.verticalScale

`exportOptionsPNG8.verticalScale`

#### 描述

应用于导出图像的垂直缩放因子，其中 100.0 表示 100%。

默认值：100.0。

#### 类型

数字（双精度）。

---

### ExportOptionsPNG8.webSnap

`exportOptionsPNG8.webSnap`

#### 描述

指定颜色表应如何更改以匹配网页调色板，其中 100 为最大值。

默认值：0。

#### 类型

数字（长整型）。

---

## 示例

### 导出为PNG8格式

```javascript
// 将当前文档导出为PNG8文件到指定路径，dest包含完整路径和文件名

function exportFileToPNG8(dest) {
 if (app.documents.length > 0) {
 var exportOptions = new ExportOptionsPNG8();
 exportOptions.colorCount = 8;
 exportOptions.transparency = false;

 var type = ExportType.PNG8;
 var fileSpec = new File(dest);

 app.activeDocument.exportFile(fileSpec, type, exportOptions);
 }
}
```
