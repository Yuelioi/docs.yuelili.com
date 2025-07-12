---
title: RGBColor
---
# RGBColor

`new RGBColor()`

#### 描述

RGB [颜色](.././Color) 规范，用于将 RGB 颜色应用于图层或艺术项目。

如果文档的颜色空间是 RGB，并且您使用 CMYK 指定该文档中页面项目的颜色值，Illustrator 会将 CMYK 颜色规范转换为 RGB 颜色规范。如果文档的颜色空间是 CMYK，并且您使用 RGB 指定颜色，也会发生同样的情况。由于这种转换可能会丢失信息，因此您应使用与文档实际颜色空间匹配的类来指定颜色。

---

## 属性

### RGBColor.blue

`rgbColor.blue`

#### 描述

蓝色的颜色值。

范围：0.0 到 255.0。

#### 类型

数字（双精度）。

---

### RGBColor.green

`rgbColor.green`

#### 描述

绿色的颜色值。

范围：0.0 到 255.0。

#### 类型

数字（双精度）。

---

### RGBColor.red

`rgbColor.red`

#### 描述

红色的颜色值。

范围：0.0 到 255.0。

#### 类型

数字（双精度）。

---

### RGBColor.typename

`rgbColor.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 设置 RGB 颜色

```javascript
// 将当前文档的默认填充颜色设置为黄色。

if (app.documents.length > 0) {
 // 定义新颜色
 var newRGBColor = new RGBColor();
 newRGBColor.red = 255;
 newRGBColor.green = 255;
 newRGBColor.blue = 0;

 app.activeDocument.defaultFillColor = newRGBColor;
}
```
