---
title: GrayColor
---
# GrayColor

`new GrayColor()`

#### 描述

灰度颜色规范，用于需要 [Color](.././Color) 对象的场景。

---

## 属性

### GrayColor.gray

`grayColor.gray`

#### 描述

灰色的色调。

范围：0.0 到 100.0，其中 0.0 是黑色，100.0 是白色。

#### 类型

数字（双精度）。

---

### GrayColor.typename

`grayColor.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 将颜色更改为灰色

```javascript
// 将活动文档中第一个单词的颜色设置为灰色

if (app.documents.length > 0 && app.activeDocument.textFrames.length > 0) {
 var text = app.activeDocument.textFrames[0].textRange;
 var firstWord = text.words[0];

 // 创建新颜色
 var textColor = new GrayColor();
 textColor.gray = 45;

 firstWord.filled = true;
 firstWord.fillColor = textColor;
}
```
