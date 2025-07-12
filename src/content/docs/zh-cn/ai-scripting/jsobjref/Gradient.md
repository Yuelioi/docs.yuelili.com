---
title: 渐变
---
# 渐变

`gradient`

#### 描述

文档中包含的渐变定义。脚本可以创建新的渐变。

---

## 属性

### Gradient.gradientStops

`gradient.gradientStops`

#### 描述

此渐变中包含的渐变停止点。

#### 类型

[GradientStops](.././GradientStops); 只读。

---

### Gradient.name

`gradient.name`

#### 描述

渐变的名称。

#### 类型

字符串。

---

### Gradient.parent

`gradient.parent`

#### 描述

包含此渐变的文档。

#### 类型

[Document](.././Document); 只读。

---

### Gradient.type

`gradient.type`

#### 描述

渐变的类型，径向或线性。

#### 类型

[GradientType](../scripting-constants#gradienttype)

---

### Gradient.typename

`gradient.typename`

#### 描述

引用对象的类名。

#### 类型

字符串; 只读。

---

## 方法

### Gradient.remove()

`app.activeDocument.gradients[index].remove()`

#### 描述

从文档中移除引用的对象。

#### 返回值

无。

---

## 示例

### 创建并应用渐变

```javascript
// 在当前文档中创建一个新渐变，然后将渐变应用到最前面的路径项

if (app.documents.length > 0) {
 // 为渐变的两个端点创建颜色
 var startColor = new RGBColor();
 startColor.red = 0;
 startColor.green = 100;
 startColor.blue = 255;

 var endColor = new RGBColor();
 endColor.red = 220;
 endColor.green = 0;
 endColor.blue = 100;

 // 创建一个新渐变
 // 新渐变始终有2个停止点
 var newGradient = app.activeDocument.gradients.add();
 newGradient.name = "NewGradient";
 newGradient.type = GradientType.LINEAR;

 // 修改第一个渐变停止点
 newGradient.gradientStops[0].rampPoint = 30;
 newGradient.gradientStops[0].midPoint = 60;
 newGradient.gradientStops[0].color = startColor;

 // 修改最后一个渐变停止点
 newGradient.gradientStops[1].rampPoint = 80;
 newGradient.gradientStops[1].color = endColor;

 // 构造一个引用新创建的渐变的 Illustrator.GradientColor 对象
 var colorOfGradient = new GradientColor();
 colorOfGradient.gradient = newGradient;

 // 获取第一个路径项，将新渐变应用为其填充
 var topPath = app.activeDocument.pathItems[0];
 topPath.filled = true;
 topPath.fillColor = colorOfGradient;
}
```
