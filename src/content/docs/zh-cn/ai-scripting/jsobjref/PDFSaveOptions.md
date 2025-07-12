---
title: PDFSaveOptions
---
# PDFSaveOptions

`new PDFSaveOptions()`

#### 描述

用于将文档保存为 Adobe PDF 文件的选项，与 [Document.saveAs()](../Document#documentsave) 方法一起使用。

所有属性都是可选的。

---

## 属性

### PDFSaveOptions.acrobatLayers

`pDFSaveOptions.acrobatLayers`

#### 描述

可选。从顶层图层创建 Acrobat® 图层。仅适用于 Acrobat 6。

默认值：`false`

#### 类型

布尔值

---

### PDFSaveOptions.artboardRange

`pDFSaveOptions.artboardRange`

#### 描述

可选。用于多资源提取，指定画板范围。空字符串表示提取所有画板。

默认值：空字符串

#### 类型

字符串

---

### PDFSaveOptions.bleedLink

`pDFSaveOptions.bleedLink`

#### 描述

可选。链接 4 个出血值。

默认值：`true`

#### 类型

布尔值

---

### PDFSaveOptions.bleedOffsetRect

`pDFSaveOptions.bleedOffsetRect`

#### 描述

出血偏移矩形。

#### 类型

4 个数字的数组

---

### PDFSaveOptions.colorBars

`pDFSaveOptions.colorBars`

#### 描述

可选。绘制颜色条。

默认值：`false`

#### 类型

布尔值

---

### PDFSaveOptions.colorCompression

`pDFSaveOptions.colorCompression`

#### 描述

可选。使用的彩色位图压缩类型。

默认值：`CompressionQuality.None`

#### 类型

[CompressionQuality](../scripting-constants#compressionquality)

---

### PDFSaveOptions.colorConversionID

`pDFSaveOptions.colorConversionID`

#### 描述

可选。PDF 颜色转换策略。

默认值：`ColorConversion.None`

#### 类型

[ColorConversion](../scripting-constants#colorconversion)

---

### PDFSaveOptions.colorDestinationID

`pDFSaveOptions.colorDestinationID`

#### 描述

可选。颜色转换的目标。

默认值：`ColorDestination.None`

#### 类型

[ColorDestination](../scripting-constants#colordestination)

---

### PDFSaveOptions.colorDownsampling

`pDFSaveOptions.colorDownsampling`

#### 描述

可选。颜色下采样分辨率（以每英寸点数 (dpi) 为单位）。如果为 0，则不执行下采样。

默认值：150.0

#### 类型

数字（双精度）

---

### PDFSaveOptions.colorDownsamplingImageThreshold

`pDFSaveOptions.colorDownsamplingImageThreshold`

#### 描述

可选。如果图像的分辨率高于此值，则进行下采样。

默认值：225.0

#### 类型

数字（双精度）

---

### PDFSaveOptions.colorDownsamplingMethod

`pDFSaveOptions.colorDownsamplingMethod`

#### 描述

可选。彩色位图图像应如何重新采样。

默认值：`DownsampleMethod.NODOWNSAMPLE`

#### 类型

[DownsampleMethod](../scripting-constants#downsamplemethod)

---

### PDFSaveOptions.colorProfileID

`pDFSaveOptions.colorProfileID`

#### 描述

可选。要包含的颜色配置文件。

默认值：`ColorProfile.None`

#### 类型

[ColorProfile](../scripting-constants#colorprofile)

---

### PDFSaveOptions.colorTileSize

`pDFSaveOptions.colorTileSize`

#### 描述

可选。使用 JPEG2000 压缩时的图块大小。

默认值：256

#### 类型

数字（长整型）

---

### PDFSaveOptions.compatibility

`pDFSaveOptions.compatibility`

#### 描述

可选。要创建的 Acrobat 文件格式的版本。

默认值：`PDFCompatibility.Acrobat5`

#### 类型

[PDFCompatibility](../scripting-constants#pdfcompatibility)

---

### PDFSaveOptions.compressArt

`pDFSaveOptions.compressArt`

#### 描述

可选。如果为 `true`，则压缩线条艺术和文本。

默认值：`true`

#### 类型

布尔值

---

### PDFSaveOptions.documentPassword

`pDFSaveOptions.documentPassword`

#### 描述

可选。打开文档的密码字符串。

默认值：无字符串

#### 类型

字符串

---

### PDFSaveOptions.enableAccess

`pDFSaveOptions.enableAccess`

#### 描述

可选。如果为 `true`，则启用 128 位访问。

默认值：`true`

#### 类型

布尔值

---

### PDFSaveOptions.enableCopy

`pDFSaveOptions.enableCopy`

#### 描述

可选。如果为 `true`，则启用 128 位文本复制。

默认值：`true`

#### 类型

布尔值

---

### PDFSaveOptions.enableCopyAccess

`pDFSaveOptions.enableCopyAccess`

#### 描述

可选。如果为 `true`，则启用 40 位复制和访问。

默认值：`true`

#### 类型

布尔值

---

### PDFSaveOptions.enablePlainText

`pDFSaveOptions.enablePlainText`

#### 描述

可选。如果为 `true`，则启用 128 位纯文本元数据。仅适用于 Acrobat 6。

默认值：`false`

#### 类型

布尔值

---

### PDFSaveOptions.flattenerOptions

`pDFSaveOptions.flattenerOptions`

#### 描述

可选。打印拼合器选项。

#### 类型

[PrintFlattenerOptions](.././PrintFlattenerOptions)

---

### PDFSaveOptions.flattenerPreset

`pDFSaveOptions.flattenerPreset`

#### 描述

可选。透明度拼合器预设名称。

#### 类型

字符串。

---

### PDFSaveOptions.fontSubsetThreshold

`pDFSaveOptions.fontSubsetThreshold`

#### 描述

可选。当文档中使用的字符少于该百分比时，包含字体子集。适用于 Illustrator 9 文件格式。

范围：0.0 到 100.0。

默认值：100.0

#### 类型

数字（双精度）

---

### PDFSaveOptions.generateThumbnails

`pDFSaveOptions.generateThumbnails`

#### 描述

可选。如果为 `true`，则生成缩略图图像并保存到文件中。

默认值：`true`

#### 类型

布尔值

---

### PDFSaveOptions.grayscaleCompression

`pDFSaveOptions.grayscaleCompression`

#### 描述

可选。灰度位图压缩质量。

默认值：`CompressionQuality.None`

#### 类型

[CompressionQuality](../scripting-constants#compressionquality)

---

### PDFSaveOptions.grayscaleDownsampling

`pDFSaveOptions.grayscaleDownsampling`

#### 描述

可选。下采样分辨率（以每英寸点数 (dpi) 为单位）。如果为 0，则不执行下采样。

默认值：150.0

#### 类型

数字（双精度）

---

### PDFSaveOptions.grayscaleDownsamplingImageThreshold

`pDFSaveOptions.grayscaleDownsamplingImageThreshold`

#### 描述

可选。如果图像的分辨率高于此值，则进行下采样。

默认值：225.0

#### 类型

数字（双精度）

---

### PDFSaveOptions.grayscaleDownsamplingMethod

`pDFSaveOptions.grayscaleDownsamplingMethod`

#### 描述

可选。灰度位图图像应如何重新采样。

默认值：`DownSampleMethod.NODOWNSAMPLE`

#### 类型

[DownsampleMethod](../scripting-constants#downsamplemethod)

---

### PDFSaveOptions.grayscaleTileSize

`pDFSaveOptions.grayscaleTileSize`

#### 描述

可选。使用 JPEG2000 压缩时的图块大小。

默认值：256

#### 类型

数字（长整型）

---

### PDFSaveOptions.monochromeCompression

`pDFSaveOptions.monochromeCompression`

#### 描述

可选。使用的单色位图压缩类型。

默认值：`MonochromeCompression.None`

#### 类型

[MonochromeCompression](../scripting-constants#monochromecompression)

---

### PDFSaveOptions.monochromeDownsampling

`pDFSaveOptions.monochromeDownsampling`

#### 描述

可选。下采样分辨率（以每英寸点数 (dpi) 为单位）。如果为 0，则不执行下采样。

默认值：300

#### 类型

数字（双精度）

---

### PDFSaveOptions.monochromeDownsamplingImageThreshold

`pDFSaveOptions.monochromeDownsamplingImageThreshold`

#### 描述

可选。如果图像的分辨率高于此值，则进行下采样。

默认值：450.0

#### 类型

数字（双精度）

---

### PDFSaveOptions.monochromeDownsamplingMethod

`pDFSaveOptions.monochromeDownsamplingMethod`

#### 描述

可选。单色位图图像应如何重新采样。

默认值：`DownSampleMethod.NODOWNSAMPLE`

#### 类型

[DownsampleMethod](../scripting-constants#downsamplemethod)

---

### PDFSaveOptions.offset

`pDFSaveOptions.offset`

#### 描述

可选。使用自定义纸张时的自定义偏移量（以点为单位）。

默认值：0.0

#### 类型

数字（双精度）

---

### PDFSaveOptions.optimization

`pDFSaveOptions.optimization`

#### 描述

可选。如果为 `true`，则优化 PDF 文档以快速网络查看。

默认值：`false`

#### 类型

布尔值

---

### PDFSaveOptions.outputCondition

`pDFSaveOptions.outputCondition`

#### 描述

可选。添加到 PDF 文件的可选注释，描述预期的打印条件。

默认值：不包含

#### 类型

字符串

---

### PDFSaveOptions.outputConditionID

`pDFSaveOptions.outputConditionID`

#### 描述

可选。已注册的打印条件的名称。

默认值：不包含

#### 类型

字符串

---

### PDFSaveOptions.pageInformation

`pDFSaveOptions.pageInformation`

#### 描述

可选。如果为 `true`，则包含原始页面信息。

默认值：`false`

#### 类型

布尔值

---

### PDFSaveOptions.pageMarksType

`pDFSaveOptions.pageMarksType`

#### 描述

可选。页面标记样式。

默认值：PageMarksType.Roman

#### 类型

[PageMarksTypes](../scripting-constants#pagemarkstypes)

---

### PDFSaveOptions.pDFAllowPrinting

`pDFSaveOptions.pDFAllowPrinting`

#### 描述

可选。PDF 安全打印权限。

默认值：`PDFPrintAllowedEnum.PRINT128HIGHRESOLUTION`

#### 类型

[PDFPrintAllowedEnum](../scripting-constants#pdfprintallowedenum)

---

### PDFSaveOptions.pDFChangesAllowed

`pDFSaveOptions.pDFChangesAllowed`

#### 描述

可选。允许的安全更改。

默认值：`PDFChangeAllowedEnum.CHANGE128ANYCHANGES`

#### 类型

[PDFChangesAllowedEnum](../scripting-constants#pdfchangesallowedenum)

---

### PDFSaveOptions.pDFPreset

`pDFSaveOptions.pDFPreset`

#### 描述

可选。要使用的 PDF 预设名称。

#### 类型

字符串

---

### PDFSaveOptions.pDFXStandard

`pDFSaveOptions.pDFXStandard`

#### 描述

可选。此文档符合的 PDF 标准。

默认值：`PDFXStandard.PDFXNONE`

#### 类型

[PDFXStandard](../scripting-constants#pdfxstandard)

---

### PDFSaveOptions.pDFXStandardDescription

`pDFSaveOptions.pDFXStandardDescription`

#### 描述

可选。所选预设的 PDF 标准描述。

#### 类型

字符串

---

### PDFSaveOptions.permissionPassword

`pDFSaveOptions.permissionPassword`

#### 描述

可选。用于限制编辑安全设置的密码字符串。

默认值：无字符串

#### 类型

字符串

---

### PDFSaveOptions.preserveEditability

`pDFSaveOptions.preserveEditability`

#### 描述

可选。如果为 `true`，则在保存文档时保留 Illustrator 的编辑功能。

默认值：`true`

#### 类型

布尔值

---

### PDFSaveOptions.printerResolution

`pDFSaveOptions.printerResolution`

#### 描述

可选。拼合器打印机分辨率。

默认值：800.0

#### 类型

数字（双精度）

---

### PDFSaveOptions.registrationMarks

`pDFSaveOptions.registrationMarks`

#### 描述

可选。如果为 `true`，则绘制套准标记。

默认值：`false`

#### 类型

布尔值

---

### PDFSaveOptions.requireDocumentPassword

`pDFSaveOptions.requireDocumentPassword`

#### 描述

可选。需要密码才能打开文档。

默认值：`false`

#### 类型

布尔值

---

### PDFSaveOptions.requirePermissionPassword

`pDFSaveOptions.requirePermissionPassword`

#### 描述

可选。使用密码限制编辑安全设置。

默认值：`false`

#### 类型

布尔值

---

### PDFSaveOptions.trapped

`pDFSaveOptions.trapped`

#### 描述

可选。如果为 `true`，则已为文档准备了手动陷印。

默认值：`false`

#### 类型

布尔值

---

### PDFSaveOptions.trimMarks

`pDFSaveOptions.trimMarks`

#### 描述

可选。绘制裁切标记。

默认值：`false`

#### 类型

布尔值

---

### PDFSaveOptions.trimMarkWeight

`pDFSaveOptions.trimMarkWeight`

#### 描述

可选。裁切标记的粗细。

默认值：`PDFTrimMarkWeight.TRIMMARKWEIGHT0125`

#### 类型

[PDFTrimMarkWeight](../scripting-constants#pdftrimmarkweight)

---

### PDFSaveOptions.typename

`pDFSaveOptions.typename`

#### 描述

可选。只读。引用对象的类名。

#### 类型

字符串

---

### PDFSaveOptions.viewAfterSaving

`pDFSaveOptions.viewAfterSaving`

#### 描述

可选。保存后查看 PDF。

默认值：`false`

#### 类型

布尔值

---

## 示例

### 保存为 PDF 格式

```javascript
// 将当前文档保存为 PDF 到 dest，并指定选项
// dest 包含保存的完整路径和文件名
function saveFileToPDF(dest) {
 var doc = app.activeDocument;

 if (app.documents.length > 0) {
 var saveName = new File(dest);
 saveOpts = new PDFSaveOptions();

 saveOpts.compatibility = PDFCompatibility.ACROBAT5;
 saveOpts.generateThumbnails = true;
 saveOpts.preserveEditability = true;

 doc.saveAs(saveName, saveOpts);
 }
}
```
