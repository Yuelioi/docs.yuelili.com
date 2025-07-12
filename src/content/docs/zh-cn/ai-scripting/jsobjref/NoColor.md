---
title: NoColor
---
# NoColor

`new NoColor()`

#### 描述

表示“无” [Color](.././Color) 对象。

将 `NoColor` 对象分配给艺术项目的填充或描边颜色，等同于将 `filled` 或 `stroked` 属性设置为 `false`。

---

## 属性

### NoColor.typename

`noColor.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 使用 NoColor 移除填充颜色

```javascript
// 创建两个重叠的对象，分别具有不同的填充颜色。
// 将顶部对象的填充颜色设置为 "NoColor"，
// 使底部对象可见。

// 创建两个重叠的对象，一个蓝色，一个红色；
var docRef = documents.add();
var itemRef1 = docRef.pathItems.rectangle(500, 200, 200, 100);
var itemRef2 = docRef.pathItems.rectangle(550, 150, 200, 200);
var rgbColor = new RGBColor();
rgbColor.red = 255;
itemRef2.fillColor = rgbColor;

rgbColor.blue = 255;
rgbColor.red = 0;
itemRef1.fillColor = rgbColor;
redraw();

// 创建一个 NoColor 并将其分配给顶部对象
var noColor = new NoColor();
itemRef2.fillColor = noColor;
redraw();
```
