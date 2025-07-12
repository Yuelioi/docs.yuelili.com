---
title: ExportOptionsFlash
---
# ExportOptionsFlash

`exportOptionsFlash`

#### 描述

将文档导出为 Macromedia® Flash® (SWF) 文件的选项，与 [Document.exportFile()](../Document#documentexportfile) 方法一起使用。所有属性都是可选的。

导出文档时，会自动附加适当的文件扩展名。您不应在文件规范中包含任何文件扩展名。

---

## 属性

### ExportOptionsFlash.artClipping

`exportOptionsFlash.artClipping`

#### 描述

输出时如何裁剪艺术对象。

默认值：`ArtClippingOption.OUTPUTARTBOUNDS`。

#### 类型

[ArtClippingOption](../scripting-constants#artclippingoption)

---

### ExportOptionsFlash.artboardRange

`exportOptionsFlash.artboardRange`

#### 描述

如果 `saveMultipleArtboards` 为 `true`，则此属性用于多画板提取，指定画板范围。空字符串表示提取所有画板。

默认值：空字符串。

#### 类型

字符串。

---

### ExportOptionsFlash.backgroundColor

`exportOptionsFlash.backgroundColor`

#### 描述

导出的 Flash 帧的背景颜色。

#### 类型

[RGBColor](.././RGBColor)

---

### ExportOptionsFlash.backgroundLayers

`exportOptionsFlash.backgroundLayers`

#### 描述

作为导出的 Flash 帧的静态背景包含的图层列表。

#### 类型

[Layers](.././Layers) 数组

---

### ExportOptionsFlash.blendAnimation

`exportOptionsFlash.blendAnimation`

#### 描述

混合对象的动画类型。

默认值：`BlendAnimationType.NOBLENDANIMATION`。

#### 类型

[BlendAnimationType](../scripting-constants#blendanimationtype)

---

### ExportOptionsFlash.compressed

`exportOptionsFlash.compressed`

#### 描述

如果为 `true`，导出的文件应被压缩。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsFlash.convertTextToOutlines

`exportOptionsFlash.convertTextToOutlines`

#### 描述

如果为 `true`，所有文本将转换为矢量路径；在所有 Flash 播放器中保留字体的视觉外观。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsFlash.curveQuality

`exportOptionsFlash.curveQuality`

#### 描述

应呈现的曲线信息量。

默认值：7。

#### 类型

数字（长整型）。

---

### ExportOptionsFlash.exportAllSymbols

`exportOptionsFlash.exportAllSymbols`

#### 描述

如果为 `true`，导出调色板中定义的所有符号。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsFlash.exportStyle

`exportOptionsFlash.exportStyle`

#### 描述

在 Flash 中创建导出数据的样式。

默认值：`FlashExportStyle.ASFLASHFILE`。

#### 类型

[FlashExportStyle](../scripting-constants#flashexportstyle)

---

### ExportOptionsFlash.exportVersion

`exportOptionsFlash.exportVersion`

#### 描述

导出的 SWF 文件的版本。

默认值：`FlashExportVersion.FlashVersion9`。

#### 类型

[FlashExportVersion](../scripting-constants#flashexportversion)

---

### ExportOptionsFlash.frameRate

`exportOptionsFlash.frameRate`

#### 描述

每秒显示的帧数。

范围：0.01-120.0。

默认值：12.0。

#### 类型

数字（双精度）。

---

### ExportOptionsFlash.ignoreTextKerning

`exportOptionsFlash.ignoreTextKerning`

#### 描述

如果为 `true`，忽略文本对象中的字距信息。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsFlash.imageFormat

`exportOptionsFlash.imageFormat`

#### 描述

导出的 Flash 文件中的图像应如何压缩。

默认值：`FlashImageFormat.LOSSLESS`。

#### 类型

[FlashImageFormat](../scripting-constants#flashimageformat)

---

### ExportOptionsFlash.includeMetadata

`exportOptionsFlash.includeMetadata`

#### 描述

如果为 `true`，在 SWF 文件中包含最少的 XMP 元数据。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsFlash.jpegMethod

`exportOptionsFlash.jpegMethod`

#### 描述

指定要使用的 JPEG 方法。

默认值：`FlashJPEGMethod.Standard`。

#### 类型

[FlashJPEGMethod](../scripting-constants#flashjpegmethod)

---

### ExportOptionsFlash.jpegQuality

`exportOptionsFlash.jpegQuality`

#### 描述

使用的压缩级别。范围 1 到 10。

默认值：3。

#### 类型

数字（长整型）。

---

### ExportOptionsFlash.layerOrder

`exportOptionsFlash.layerOrder`

#### 描述

图层导出到 Flash 帧的顺序。

默认值：`LayerOrderType.BOTTOMUP`。

#### 类型

[LayerOrderType](../scripting-constants#layerordertype)

---

### ExportOptionsFlash.looping

`exportOptionsFlash.looping`

#### 描述

如果为 `true`，Flash 文件在运行时设置为循环播放。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsFlash.playbackAccess

`exportOptionsFlash.playbackAccess`

#### 描述

导出的 SWF 文件的访问级别。

默认值：`FlashPlaybackSecurity.PlaybackLocal`。

#### 类型

[FlashPlaybackSecurity](../scripting-constants#flashplaybacksecurity)

---

### ExportOptionsFlash.preserveAppearance

`exportOptionsFlash.preserveAppearance`

#### 描述

如果为 `true`，保留外观。如果为 `false`，保留可编辑性。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsFlash.readOnly

`exportOptionsFlash.readOnly`

#### 描述

如果为 `true`，导出为只读文件。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsFlash.replacing

`exportOptionsFlash.replacing`

#### 描述

如果已存在同名文件，是否应替换它。

默认值：`SaveOptions.PROMPTTOSAVECHANGES`。

#### 类型

[SaveOptions](../scripting-constants#saveoptions)

---

### ExportOptionsFlash.resolution

`exportOptionsFlash.resolution`

#### 描述

分辨率，单位为每英寸像素数。

范围：72-2400。

默认值：72。

#### 类型

数字（双精度）。

---

### ExportOptionsFlash.saveMultipleArtboards

`exportOptionsFlash.saveMultipleArtboards`

#### 描述

如果为 `true`，保存所有画板或指定范围的画板。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsFlash.typename

`exportOptionsFlash.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 导出为 Flash 格式

```javascript
// 将当前文档导出为指定选项的 Flash 文件，
// destFile 包含完整路径和文件名

function exportToFlashFile(destFile) {
 if (app.documents.length > 0) {
 var exportOptions = new ExportOptionsFlash();
 exportOptions.resolution = 150;

 var type = ExportType.FLASH;
 var fileSpec = new File(destFile);

 app.activeDocument.exportFile(fileSpec, type, exportOptions);
 }
}
```
