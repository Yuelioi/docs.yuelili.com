---
title: CMYKColor
---
# CMYKColor

`new cmykColor()`

#### 描述

CMYK 颜色规范，用于需要 [Color](.././Color) 对象的场景。

如果文档的颜色空间是 `RGB`，并且你使用 CMYK 指定该文档中页面项的颜色值，Illustrator 会将 CMYK 颜色规范转换为 RGB 颜色规范。如果文档的颜色空间是 CMYK，而你使用 RGB 指定颜色，也会发生同样的情况。

由于这种转换可能会丢失信息，因此你应该使用与文档实际颜色空间匹配的类来指定颜色。

---

## 属性

### CMYKColor.black

`cmykColor.black`

#### 描述

黑色颜色值。范围 0.0-100.0。

默认值：0.0

#### 类型

数字（双精度）

---

### CMYKColor.cyan

`cmykColor.cyan`

#### 描述

青色颜色值。范围 0.0-100.0。

默认值：0.0

#### 类型

数字（双精度）

---

### CMYKColor.magenta

`cmykColor.magenta`

#### 描述

洋红色颜色值。范围 0.0-100.0。

默认值：0.0

#### 类型

数字（双精度）

---

### CMYKColor.typename

`cmykColor.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

### CMYKColor.yellow

`cmykColor.yellow`

#### 描述

黄色颜色值。范围 0.0-100.0。

默认值：0.0

#### 类型

数字（双精度）

---

## 示例

### 设置 CMYK 颜色

```javascript
// 将当前文档中最前面的路径项的填充颜色设置为浅紫色 CMYK 颜色

if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
 var frontPath = app.activeDocument.pathItems[0];

 // 为 CMYK 对象设置颜色值
 var newCMYKColor = new cmykColor();
 newCMYKColor.black = 0;
 newCMYKColor.cyan = 30.4;
 newCMYKColor.magenta = 32;
 newCMYKColor.yellow = 0;

 // 在路径项中使用颜色对象
 frontPath.filled = true;
 frontPath.fillColor = newCMYKColor;
}
```
