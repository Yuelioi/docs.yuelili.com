---
title: PDFFileOptions
---
# PDFFileOptions

`app.preferences.PDFFileOptions`

#### 描述

用于打开 PDF 文件的选项，与 [Application.open()](../Application#applicationopen) 方法一起使用。

所有属性都是可选的。

---

## 属性

### PDFFileOptions.pageToOpen

`app.preferences.PDFFileOptions.pageToOpen`

#### 描述

打开多页文档时应使用哪一页。

默认值：1

#### 类型

Number (long)

---

### PDFFileOptions.parent

`app.preferences.PDFFileOptions.parent`

#### 描述

对象的容器。

#### 类型

Object; 只读。

---

### PDFFileOptions.pDFCropToBox

`app.preferences.PDFFileOptions.pDFCropToBox`

#### 描述

放置多页文档时应使用哪个框。

默认值：`PDFBoxType.PDFMediaBox`

#### 类型

[PDFBoxType](../scripting-constants#pdfboxtype)

---

### PDFFileOptions.typename

`app.preferences.PDFFileOptions.typename`

#### 描述

对象的类名。

#### 类型

String; 只读。

---

## 示例

### 使用选项打开 PDF

```javascript
// 使用指定选项打开 PDF 文件
var pdfOptions = app.preferences.PDFFileOptions;
pdfOptions.pDFCropToBox = PDFBoxType.PDFBOUNDINGBOX;
pdfOptions.pageToOpen = 2;

// 使用这些首选项打开文件
var fileRef = filePath;

if (fileRef != null) {
 var docRef = open(fileRef, DocumentColorSpace.RGB);
}
```
