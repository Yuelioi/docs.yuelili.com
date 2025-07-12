---
title: ExportOptionsGIF
---
# ExportOptionsGIF

`exportOptionsGIF`

#### 描述

将文档导出为 GIF 文件的选项，与 [Document.exportFile()](../Document#documentexportfile) 方法一起使用。所有属性都是可选的。

导出文档时，会自动附加适当的文件扩展名。您不应在文件规范中包含任何文件扩展名。

---

## 属性

### ExportOptionsGIF.antiAliasing

`exportOptionsGIF.antiAliasing`

#### 描述

如果为 `true`，导出的图像应进行抗锯齿处理。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsGIF.artBoardClipping

`exportOptionsGIF.artBoardClipping`

#### 描述

如果为 `true`，导出的图像应裁剪到画板。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsGIF.colorCount

`exportOptionsGIF.colorCount`

#### 描述

导出图像颜色表中的颜色数量。

范围：2 到 256。

默认值：128。

#### 类型

数字（长整型）。

---

### ExportOptionsGIF.colorDither

`exportOptionsGIF.colorDither`

#### 描述

导出图像中颜色抖动的处理方法。

默认值：`ColorDitherMethod.DIFFUSION`。

#### 类型

[ColorDitherMethod](../scripting-constants#colordithermethod)

---

### ExportOptionsGIF.colorReduction

`exportOptionsGIF.colorReduction`

#### 描述

导出图像中减少颜色数量的处理方法。默认值：`ColorReductionMethod.SELECTIVE`。

#### 类型

[ColorReductionMethod](../scripting-constants#colorreductionmethod)

---

### ExportOptionsGIF.ditherPercent

`exportOptionsGIF.ditherPercent`

#### 描述

导出图像的颜色抖动程度，其中 100.0 表示 100%。

#### 类型

数字（长整型）。

---

### ExportOptionsGIF.horizontalScale

`exportOptionsGIF.horizontalScale`

#### 描述

应用于导出图像的水平缩放因子，其中 100.0 表示 100%。

默认值：100.0。

#### 类型

数字（双精度）。

---

### ExportOptionsGIF.infoLossPercent

`exportOptionsGIF.infoLossPercent`

#### 描述

压缩过程中允许的信息丢失程度，其中 100.0 表示 100%。

#### 类型

数字（长整型）。

---

### ExportOptionsGIF.interlaced

`exportOptionsGIF.interlaced`

#### 描述

如果为 `true`，导出的图像应进行隔行扫描。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsGIF.matte

`exportOptionsGIF.matte`

#### 描述

如果为 `true`，画板应使用颜色进行遮罩。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsGIF.matteColor

`exportOptionsGIF.matteColor`

#### 描述

用于遮罩画板的颜色。

默认值：`WHITE`。

#### 类型

[RGBColor](.././RGBColor)

---

### ExportOptionsGIF.saveAsHTML

`exportOptionsGIF.saveAsHTML`

#### 描述

如果为 `true`，导出的图像应附带保存一个 HTML 文件。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsGIF.transparency

`exportOptionsGIF.transparency`

#### 描述

如果为 `true`，导出的图像应使用透明度。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsGIF.typename

`exportOptionsGIF.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

### ExportOptionsGIF.verticalScale

`exportOptionsGIF.verticalScale`

#### 描述

应用于导出图像的垂直缩放因子，其中 100.0 表示 100%。

默认值：100.0。

#### 类型

数字（双精度）。

---

### ExportOptionsGIF.webSnap

`exportOptionsGIF.webSnap`

#### 描述

颜色表应如何更改以匹配 Web 调色板，其中 100 表示最大程度。

默认值：0。

#### 类型

数字（长整型）。

---

## 示例

### 导出为 GIF 格式

```javascript
// 将当前文档导出为 GIF 文件到 dest，并指定选项，
// dest 包含完整路径和文件名

function exportToGIFFile(dest) {
 if (app.documents.length > 0) {
 var exportOptions = new ExportOptionsGIF();
 exportOptions.antiAliasing = false;
 exportOptions.colorCount = 64;
 exportOptions.colorDither = ColorDitherMethod.DIFFUSION;

 var type = ExportType.GIF;
 var fileSpec = new File(dest);

 app.activeDocument.exportFile(fileSpec, type, exportOptions);
 }
}
```
