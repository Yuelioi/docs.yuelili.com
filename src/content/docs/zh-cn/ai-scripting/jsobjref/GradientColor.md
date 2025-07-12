---
title: 渐变颜色
---
# 渐变颜色

`gradientColor`

#### 描述

渐变对象中的渐变颜色规范。脚本可以通过引用文档中的现有渐变来创建新的渐变颜色。如果未引用现有的渐变对象，则会提供默认渐变。

---

## 属性

### GradientColor.angle

`gradientColor.angle`

#### 描述

渐变向量的角度（以度为单位）。

默认值：0.0。

:::warning
设置角度无效。显然这是一个[自2008年以来的错误](https://community.adobe.com/t5/illustrator-discussions/unable-to-change-angle-of-gradient/m-p/11759125)，在（至少）29.3.1版本中仍然存在。
:::

#### 类型

数字（双精度）。

---

### GradientColor.gradient

`gradientColor.gradient`

#### 描述

引用定义渐变的对象。

#### 类型

[Gradient](.././Gradient)

---

### GradientColor.hiliteAngle

`gradientColor.hiliteAngle`

#### 描述

渐变高光向量的角度（以度为单位）。

#### 类型

数字（双精度）。

---

### GradientColor.hiliteLength

`gradientColor.hiliteLength`

#### 描述

渐变高光向量的长度。

#### 类型

数字（双精度）。

---

### GradientColor.length

`gradientColor.length`

#### 描述

渐变向量的长度。

#### 类型

数字（双精度）。

---

### GradientColor.matrix

`gradientColor.matrix`

#### 描述

用于操作渐变路径的附加变换矩阵。

#### 类型

矩阵。

---

### GradientColor.origin

`gradientColor.origin`

#### 描述

渐变向量的原点，即此颜色中渐变的中心点。

#### 类型

包含2个数字的数组。

---

### GradientColor.typename

`gradientColor.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 更改渐变停止点颜色

```javascript
// 创建一个新的RGB文档，然后更改索引渐变中第一个渐变停止点的颜色
app.documents.add(DocumentColorSpace.RGB);

// 获取要更改的渐变的引用
var gradientRef = app.activeDocument.gradients[1];

// 创建新颜色
var startColor = new RGBColor();
startColor.red = 255;
startColor.green = 238;
startColor.blue = 98;

// 将新颜色应用于第一个渐变停止点
gradientRef.gradientStops[0].color = startColor;
```
