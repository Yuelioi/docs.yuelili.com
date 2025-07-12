---
title: PrintPaperOptions
---
# PrintPaperOptions

`new PrintPaperOptions()`

#### 描述

有关打印作业中使用的纸张的信息。

---

## 属性

### PrintPaperOptions.height

`printPaperOptions.height`

#### 描述

使用自定义纸张时的自定义高度（以点为单位）。

默认值：0.0

#### 类型

数字（双精度）

---

### PrintPaperOptions.name

`printPaperOptions.name`

#### 描述

纸张的名称。

#### 类型

字符串

---

### PrintPaperOptions.offset

`printPaperOptions.offset`

#### 描述

使用自定义纸张时的自定义偏移量（以点为单位）。

默认值：0.0

#### 类型

数字（双精度）

---

### PrintPaperOptions.transverse

`printPaperOptions.transverse`

#### 描述

如果为 `true`，则在自定义纸张上横向打印（旋转90度）。

默认值：`false`

#### 类型

布尔值

---

### PrintPaperOptions.typename

`printPaperOptions.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

### PrintPaperOptions.width

`printPaperOptions.width`

#### 描述

使用自定义纸张时的自定义宽度（以点为单位）。

默认值：0.0

#### 类型

数字（双精度）

---

## 示例

### 设置打印纸张选项

```javascript
// 创建一个新文档，添加一个路径项，应用图形样式
// 然后使用指定的纸张选项进行打印
var docRef = documents.add();
var pathRef = docRef.pathItems.rectangle(600, 200, 200, 200);
docRef.graphicStyles[1].applyTo(pathRef);

var paperOpts = new PrintPaperOptions;
var printOpts = new PrintOptions;
printOpts.paperOptions = paperOpts;

var printerCount = printerList.length;
if (printerCount > 0) {

 // 使用第一个打印机的第一种纸张进行打印
 for (var i = 0; i < printerList.length; i++) {

 if (printerList[i].printerInfo.paperSizes.length > 0) {
 var printerRef = printerList[i];
 }

 var paperRef = printerRef.printerInfo.paperSizes[0];
 if (printerRef.printerInfo.paperSizes.length > 0){
 paperOpts.name = paperRef.name;
 printOpts.printerName = printerRef.name;
 docRef.print(printOpts);
 }
 }
}
```
