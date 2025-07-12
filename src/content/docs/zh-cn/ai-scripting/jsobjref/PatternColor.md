---
title: PatternColor
---
# PatternColor

`patternColor`

#### 描述

一种图案颜色规范。您可以通过修改文档中的现有图案来创建新的图案颜色。对图案的任何修改都会影响调色板中的该图案。

`PatternColor` 对象可用于任何接受颜色对象的属性，例如 `fillColor` 或 `strokeColor`。

---

## 属性

### PatternColor.matrix

`patternColor.matrix`

#### 描述

由于操作路径而产生的额外变换。

#### 类型

[Matrix](.././Matrix)

---

### PatternColor.pattern

`patternColor.pattern`

#### 描述

对定义此颜色定义中使用的图案的图案对象的引用。

#### 类型

[Pattern](.././Pattern)

---

### PatternColor.reflect

`patternColor.reflect`

#### 描述

如果为 `true`，则在填充之前应反射原型。

默认值：`false`

#### 类型

布尔值

---

### PatternColor.reflectAngle

`patternColor.reflectAngle`

#### 描述

反射的轴，以点为单位。

默认值：0.0

#### 类型

数字（双精度）

---

### PatternColor.rotation

`patternColor.rotation`

#### 描述

在填充之前旋转原型图案的角度（以弧度为单位）。

默认值：0.0

#### 类型

数字（双精度）

---

### PatternColor.scaleFactor

`patternColor.scaleFactor`

#### 描述

在填充之前缩放原型图案的比例，表示为一个包含水平和垂直缩放百分比的点。

#### 类型

包含 2 个数字的数组

---

### PatternColor.shearAngle

`patternColor.shearAngle`

#### 描述

倾斜的剪切角度（以弧度为单位）。

默认值：0.0

#### 类型

数字（双精度）

---

### PatternColor.shearAxis

`patternColor.shearAxis`

#### 描述

剪切所参考的轴，以点为单位。

默认值：0.0

#### 类型

数字（双精度）

---

### PatternColor.shiftAngle

`patternColor.shiftAngle`

#### 描述

在填充之前平移未缩放原型图案的角度（以弧度为单位）。

默认值：0.0

#### 类型

数字（双精度）

---

### PatternColor.shiftDistance

`patternColor.shiftDistance`

#### 描述

在填充之前平移未缩放原型图案的距离（以点为单位）。

默认值：0.0

#### 类型

数字（双精度）

---

### PatternColor.typename

`patternColor.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 修改和应用图案颜色

```javascript
// 旋转当前文档中每个图案的颜色，
// 然后将最后一个图案应用于第一个路径项
if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
 var doc = app.activeDocument;
 var swatchIndex = 0;

 for (i = 0; i < doc.swatches.length; i++) {
 // 获取色板的通用颜色对象
 var currentSwatch = doc.swatches[i];
 var swatchColor = currentSwatch.color;

 // 仅对图案进行操作
 if (currentSwatch.color.typename == "PatternColor") {
 // 更改图案属性
 currentSwatch.color.rotation = 10;
 swatchIndex = i;
 }
 }

 // 将最后一个图案颜色色板应用于最前面的路径
 var firstPath = app.activeDocument.pathItems[0];
 firstPath.filled = true;
 firstPath.fillColor = doc.swatches[swatchIndex].color;
}
```
