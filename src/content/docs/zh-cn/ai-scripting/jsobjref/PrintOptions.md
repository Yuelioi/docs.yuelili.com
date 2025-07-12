---
title: PrintOptions
---
# PrintOptions

`new PrintOptions()`

#### 描述

包含所有打印选项的信息，包括扁平化、颜色管理、坐标、字体和纸张。

---

## 属性

### PrintOptions.colorManagementOptions

`printOptions.colorManagementOptions`

#### 描述

打印颜色管理选项。

#### 类型

[PrintColorManagementOptions](.././PrintColorManagementOptions)

---

### PrintOptions.colorSeparationOptions

`printOptions.colorSeparationOptions`

#### 描述

打印颜色分离选项。

#### 类型

[PrintColorSeparationOptions](.././PrintColorSeparationOptions)

---

### PrintOptions.coordinateOptions

`printOptions.coordinateOptions`

#### 描述

打印坐标选项。

#### 类型

[PrintCoordinateOptions](.././PrintCoordinateOptions)

---

### PrintOptions.flattenerOptions

`printOptions.flattenerOptions`

#### 描述

打印扁平化选项。

#### 类型

[PrintFlattenerOptions](.././PrintFlattenerOptions)

---

### PrintOptions.flattenerPreset

`printOptions.flattenerPreset`

#### 描述

透明度扁平化预设名称。

#### 类型

String

---

### PrintOptions.fontOptions

`printOptions.fontOptions`

#### 描述

打印字体选项。

#### 类型

[PrintFontOptions](.././PrintFontOptions)

---

### PrintOptions.jobOptions

`printOptions.jobOptions`

#### 描述

打印作业选项。

#### 类型

[PrintJobOptions](.././PrintJobOptions)

---

### PrintOptions.pageMarksOptions

`printOptions.pageMarksOptions`

#### 描述

打印页面标记选项。

#### 类型

[PrintPageMarksOptions](.././PrintPageMarksOptions)

---

### PrintOptions.paperOptions

`printOptions.paperOptions`

#### 描述

纸张选项。

#### 类型

[PrintPaperOptions](.././PrintPaperOptions)

---

### PrintOptions.postScriptOptions

`printOptions.postScriptOptions`

#### 描述

打印 PostScript 选项。

#### 类型

[PrintPostScriptOptions](.././PrintPostScriptOptions)

---

### PrintOptions.PPDName

`printOptions.PPDName`

#### 描述

PPD 名称。

#### 类型

String

---

### PrintOptions.printerName

`printOptions.printerName`

#### 描述

打印机名称。

#### 类型

String

---

### PrintOptions.printPreset

`printOptions.printPreset`

#### 描述

打印样式。

#### 类型

String

---

## 示例

### 设置打印选项

```javascript
// 创建一个新文档，添加符号，指定各种打印选项，
// 将每个打印选项分配给 PrintOptions 对象，
// 然后使用这些选项进行打印
// 创建一个新文档并添加一些符号项
var docRef = documents.add();
var y = docRef.height - 30;

for (var i = 0; i < (docRef.symbols.length); i++) {
 symbolRef = docRef.symbols[i];

 symbolItemRef1 = docRef.symbolItems.add(symbolRef);
 symbolItemRef1.top = y;

 symbolItemRef1.left = 100;

 y -= (symbolItemRef1.height + 10);
}

redraw();

// 创建多个选项并分配给 PrintOptions
var options = new PrintOptions();

var colorOptions = new PrintColorManagementOptions();
colorOptions.name = "ColorMatch RGB";
colorOptions.intent = PrintColorIntent.SATURATIONINTENT;
options.colorManagementOptions = colorOptions;

var printJobOptions = new PrintJobOptions();
printJobOptions.designation = PrintArtworkDesignation.ALLLAYERS;
printJobOptions.reverse = true;

options.jobOptions = printJobOptions;

var coordinateOptions = new PrintCoordinateOptions();
coordinateOptions.fitToPage = true;
options.coordinateOptions = coordinateOptions;

var flatOpts = new PrintFlattenerOptions();
flatOpts.ClipComplexRegions = true;
flatOpts.GradientResoultion = 60;

flatOpts.RasterizatonResotion = 60;
options.flattenerOptions = flatOpts;

// 使用选项进行打印
docRef.print(options);
```
