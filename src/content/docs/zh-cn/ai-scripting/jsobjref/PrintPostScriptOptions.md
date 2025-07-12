---
title: PrintPostScriptOptions
---
# PrintPostScriptOptions

`new PrintPostScriptOptions()`

#### 描述

用于打印到 PostScript 打印机的选项。

---

## 属性

### PrintPostScriptOptions.binaryPrinting

`printPostScriptOptions.binaryPrinting`

#### 描述

如果为 `true`，打印应以二进制模式进行。

默认值：`false`

#### 类型

布尔值

---

### PrintPostScriptOptions.compatibleShading

`printPostScriptOptions.compatibleShading`

#### 描述

如果为 `true`，使用与 PostScript Level 1 兼容的渐变和渐变网格打印。

默认值：`false`

#### 类型

布尔值

---

### PrintPostScriptOptions.forceContinuousTone

`printPostScriptOptions.forceContinuousTone`

#### 描述

如果为 `true`，强制使用连续色调。

默认值：`false`

#### 类型

布尔值

---

### PrintPostScriptOptions.imageCompression

`printPostScriptOptions.imageCompression`

#### 描述

图像压缩类型。

默认值：`PostScriptImageCompressionType.IMAGECOMPRESSIONNONE`

#### 类型

[PostScriptImageCompressionType](../scripting-constants#postscriptimagecompressiontype)

---

### PrintPostScriptOptions.negativePrinting

`printPostScriptOptions.negativePrinting`

#### 描述

如果为 `true`，以负片模式打印。

默认值：`false`

#### 类型

布尔值

---

### PrintPostScriptOptions.postScriptLevel

`printPostScriptOptions.postScriptLevel`

#### 描述

PostScript 语言级别。

默认值：`PrinterPostScriptLevelEnum.LEVEL2`

#### 类型

[PrinterPostScriptLevelEnum](../scripting-constants#printerpostscriptlevelenum)

---

### PrintPostScriptOptions.shadingResolution

`printPostScriptOptions.shadingResolution`

#### 描述

渐变分辨率。

范围：1.0 到 9600.0

默认值：300.0

#### 类型

数字（双精度）

---

### PrintPostScriptOptions.typename

`printPostScriptOptions.typename`

#### 描述

只读。对象的类名。

#### 类型

字符串

---

## 示例

### 设置 PostScript 打印选项

```javascript
// 使用不同的 PostScript 级别打印当前文档
// 创建新的 PostScript 选项对象，分配给打印选项
var psOpts = new PrintPostScriptOptions();

var printOpts = new PrintOptions();
printOpts.postScriptOptions = psOpts;

// 分配 PS 级别并打印
psOpts.postScriptLevel = PrinterPostScriptLevelEnum.PSLEVEL2;
activeDocument.print(printOpts);

psOpts.postScriptLevel = PrinterPostScriptLevelEnum.PSLEVEL3;
activeDocument.print(printOpts);
```
