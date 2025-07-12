---
title: Photoshop文件选项
---
# Photoshop文件选项

`preferences.photoshopFileOptions`

#### 描述

用于打开 Photoshop 文件的选项，与 [Application.open()](../Application#applicationopen) 方法一起使用。所有属性均为可选。

---

## 属性

### PhotoshopFileOptions.parent

`preferences.photoshopFileOptions.parent`

#### 描述

此对象的父对象。

#### 类型

对象；只读。

---

### PhotoshopFileOptions.pixelAspectRatioCorrection

`preferences.photoshopFileOptions.pixelAspectRatioCorrection`

#### 描述

如果为 `true`，则应调整具有非正方形像素宽高比的导入图像。

#### 类型

布尔值

---

### PhotoshopFileOptions.preserveImageMaps

`preferences.photoshopFileOptions.preserveImageMaps`

#### 描述

如果为 `true`，则在文档转换时应保留图像映射。

默认值：`true`

#### 类型

布尔值

---

### PhotoshopFileOptions.preserveLayers

`preferences.photoshopFileOptions.preserveLayers`

#### 描述

如果为 `true`，则在文档转换时应保留图层。

默认值：`true`

#### 类型

布尔值

---

### PhotoshopFileOptions.preserveSlices

`preferences.photoshopFileOptions.preserveSlices`

#### 描述

如果为 `true`，则在文档转换时应保留切片。

默认值：`true`

#### 类型

布尔值

---

### PhotoshopFileOptions.typename

`preferences.photoshopFileOptions.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 打开 Photoshop 文件

```javascript
// 打开一个包含图层的 Photoshop 文件，
// 并设置首选项以保留图层
var psdOptions = preferences.photoshopFileOptions;
psdOptions.preserveLayers = true;
psdOptions.pixelAspectRatioCorrection = false;

// 使用这些首选项打开文件
var fileRef = File(psdFilePath);
if (fileRef != null) {
 var docRef = open(fileRef, DocumentColorSpace.RGB);
}
```
