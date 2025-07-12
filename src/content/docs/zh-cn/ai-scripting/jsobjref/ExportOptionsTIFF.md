---
title: ExportOptionsTIFF
---
# ExportOptionsTIFF

`exportOptionsTIFF`

#### 描述

用于将文档导出为 TIFF 文件的选项，与 [Document.exportFile()](../Document#documentexportfile) 方法一起使用。所有属性都是可选的。

导出文档时，会自动附加适当的文件扩展名。您不应在文件规范中包含任何文件扩展名。

---

## 属性

### ExportOptionsTIFF.antiAliasing

`exportOptionsTIFF.antiAliasing`

#### 描述

如果为 `true`，导出的图像应进行抗锯齿处理。

默认值：`true`。

#### 类型

布尔值。

---

### ExportOptionsTIFF.artboardRange

`exportOptionsTIFF.artboardRange`

#### 描述

如果 `saveMultipleArtboards` 为 `true`，则此属性用于多资源提取，指定画板范围。空字符串表示提取所有画板。

默认值：空字符串。

#### 类型

字符串。

---

### ExportOptionsTIFF.byteOrder

`exportOptionsTIFF.byteOrder`

#### 描述

新文件中使用的字节顺序。

#### 类型

[TIFFByteOrder](../scripting-constants#tiffbyteorder)

---

### ExportOptionsTIFF.imageColorSpace

`exportOptionsTIFF.imageColorSpace`

#### 描述

导出文件的颜色空间。

默认值：`ImageColorSpace.RGB`。

#### 类型

[ImageColorSpace](../scripting-constants#imagecolorspace)

---

### ExportOptionsTIFF.lZWCompression

`exportOptionsTIFF.lZWCompression`

:::note
此属性错误地写为 "IZWCompression"（大写 "I"），而不是 "lzwCompression"（小写 "L"）。请注意，后者是正确的，本文档已更新以反映这一点。
:::

#### 描述

如果为 `true`，则在新文件中使用 IZW 压缩。

#### 类型

布尔值。

---

### ExportOptionsTIFF.resolution

`exportOptionsTIFF.resolution`

#### 描述

导出文件的分辨率，单位为每英寸点数 (dpi)。

范围：72.0 到 2400.0。

默认值：150.0。

#### 类型

数字（双精度）。

---

### ExportOptionsTIFF.saveMultipleArtboards

`exportOptionsTIFF.saveMultipleArtboards`

#### 描述

如果为 `true`，则保存所有画板或指定范围的画板。

默认值：`false`。

#### 类型

数字（双精度）。

---

## 示例

### 导出为 TIFF 格式

```javascript
// 将当前文档导出为 TIFF 文件到 dest，并指定选项，
// dest 包含完整路径，包括文件名

function exportFileToPSD(dest) {
 if (app.documents.length > 0) {
 var exportOptions = new ExportOptionsTIFF();
 exportOptions.resolution = 150;
 exportOptions.byteOrder = TIFFByteOrder.IBMPC;
 exportOptions.lZWCompression = false;

 var type = ExportType.TIFF;
 var fileSpec = new File(dest);

 app.activeDocument.exportFile(fileSpec, type, exportOptions);
 }
}
```
