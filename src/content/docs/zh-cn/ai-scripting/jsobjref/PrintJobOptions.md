---
title: PrintJobOptions
---
# PrintJobOptions

`new PrintJobOptions()`

#### 描述

包含有关如何打印作业的信息。

---

## 属性

### PrintJobOptions.artboardRange

`printJobOptions.artboardRange`

#### 描述

如果 `printAllArtboards` 为 `false`，则指定要打印的画板范围。

默认值: 1-

#### 类型

字符串

---

### PrintJobOptions.bitmapResolution

`printJobOptions.bitmapResolution`

#### 描述

位图分辨率。最小值: 0.0。

默认值: 0.0

#### 类型

数字 (双精度)

---

### PrintJobOptions.collate

`printJobOptions.collate`

#### 描述

如果为 `true`，则按顺序整理打印页面。

默认值: `false`

#### 类型

布尔值

---

### PrintJobOptions.copies

`printJobOptions.copies`

#### 描述

要打印的份数。最小值: 1。

默认值: 1

#### 类型

数字 (长整型)

---

### PrintJobOptions.designation

`printJobOptions.designation`

#### 描述

要打印的图层/对象。

默认值: `PrintArtworkDesignation.VISIBLEPRINTABLELAYERS`

#### 类型

[PrintArtworkDesignation](../scripting-constants#printartworkdesignation)

---

### PrintJobOptions.file

`printJobOptions.file`

#### 描述

要打印到的文件。

#### 类型

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象

---

### PrintJobOptions.name

`printJobOptions.name`

#### 描述

打印作业的名称。

#### 类型

字符串

---

### PrintJobOptions.printAllArtboards

`printJobOptions.printAllArtboards`

#### 描述

指示是否打印所有画板。

默认值: true

#### 类型

布尔值

---

### PrintJobOptions.printArea

`printJobOptions.printArea`

#### 描述

打印边界。

默认值: `PrintingBounds.ARTBOARDBOUNDS`

#### 类型

[PrintingBounds](../scripting-constants#printingbounds)

---

### PrintJobOptions.printAsBitmap

`printJobOptions.printAsBitmap`

#### 描述

如果为 `true`，则以位图形式打印。

默认值: `false`

#### 类型

布尔值

---

### PrintJobOptions.reversePages

`printJobOptions.reversePages`

#### 描述

如果为 `true`，则以相反顺序打印页面。

默认值: `false`

#### 类型

布尔值

---

### PrintJobOptions.typename

`printJobOptions.typename`

#### 描述

只读。对象的类名。

#### 类型

字符串

---

## 示例

### 使用作业选项进行打印

```javascript
// 创建一个包含可见、可打印、不可见和不可打印项目的图层的新文档，
// 然后使用不同的作业选项进行打印以查看效果

var docRef = documents.add();
var textRef_0 = docRef.layers[0].textFrames.add();
textRef_0.contents = "可见且可打印";
textRef_0.top = 600;
textRef_0.left = 200;

var layerRef_1 = docRef.layers.add();
var textRef_1 = layerRef_1.textFrames.add();
textRef_1.contents = "可见但不可打印";
textRef_1.top = 500;
textRef_1.left = 250;
layerRef_1.printable = false;

var layerRef_2 = docRef.layers.add();
var textRef_2 = layerRef_2.textFrames.add();
textRef_2.contents = "不可见";
textRef_2.top = 400;
textRef_2.left = 300;
layerRef_2.visible = false;
redraw();

// 使用不同的作业选项进行打印
var printJobOptions = new PrintJobOptions();
var options = new PrintOptions();
options.jobOptions = printJobOptions;

printJobOptions.designation = PrintArtworkDesignation.ALLLAYERS;
printJobOptions.reverse = true;
docRef.print(options);

printJobOptions.collate = false;
printJobOptions.designation = PrintArtworkDesignation.VISIBLELAYERS;
printJobOptions.reverse = false;
docRef.print(options);

printJobOptions.designation = PrintArtworkDesignation.VISIBLEPRINTABLELAYERS;
var docPath = new File("~/printJobTest1.ps");
printJobOptions.file = docPath;
docRef.print(options);
```
