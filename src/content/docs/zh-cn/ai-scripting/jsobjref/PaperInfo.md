---
title: PaperInfo
---
# PaperInfo

`printerList[printerIndex].printerInfo.paperSizes[paperSizeIndex].paperInfo`

#### 描述

用于打印文档的纸张信息。

---

## 属性

### PaperInfo.customPaper

`printerList[printerIndex].printerInfo.paperSizes[paperSizeIndex].paperInfo.customPaper`

#### 描述

如果为 `true`，则表示是自定义纸张。

#### 类型

布尔值。

---

### PaperInfo.height

`printerList[printerIndex].printerInfo.paperSizes[paperSizeIndex].paperInfo.height`

#### 描述

纸张的高度（以点为单位）。

#### 类型

数字（双精度）。

---

### PaperInfo.imageableArea

`printerList[printerIndex].printerInfo.paperSizes[paperSizeIndex].paperInfo.imageableArea`

#### 描述

可打印区域。

#### 类型

包含4个数字的数组。

---

### PaperInfo.typename

`printerList[printerIndex].printerInfo.paperSizes[paperSizeIndex].paperInfo.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

### PaperInfo.width

`printerList[printerIndex].printerInfo.paperSizes[paperSizeIndex].paperInfo.width`

#### 描述

纸张的宽度（以点为单位）。

#### 类型

数字（双精度）。

---

## 示例

### 查找纸张信息

```javascript
// 在文本框中显示第二个打印机的可用纸张和纸张尺寸

var docRef = documents.add();
var itemRef = docRef.pathItems.rectangle(600, 300, 200, 100);
var textRef = docRef.textFrames.add();
textRef.top = 600;
textRef.left = 50;

// 获取第二个打印机的纸张对象
var printerRef = printerList[1];
textRef.contents = printerRef.name;
textRef.contents += " 纸张列表:\r";
var paragraphCount = 2;

// 获取每张纸的详细信息
var iCount = printerRef.printerInfo.paperSizes.length;
for (var i = 0; i < iCount; i++) {
 var paperRef = printerRef.printerInfo.paperSizes[i];
 var paperInfoRef = paperRef.paperInfo;
 textRef.contents += paperRef.name;
 textRef.contents += "\t";
 textRef.contents += paperInfoRef.height;
 textRef.contents += " x ";
 textRef.contents += paperInfoRef.width;
 textRef.contents += "\r";
 paragraphCount++;
}
redraw();
```
