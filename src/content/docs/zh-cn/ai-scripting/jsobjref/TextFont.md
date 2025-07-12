---
title: 文本字体
---
# 文本字体

`app.textFonts[index]`

#### 描述

文档中字体的信息，可在 [CharacterAttributes](.././CharacterAttributes) 对象中找到。

---

## 属性

### TextFont.family

`app.textFonts[index].family`

#### 描述

字体的家族名称。

#### 类型

字符串；只读。

---

### TextFont.name

`app.textFonts[index].name`

#### 描述

字体的完整名称。

#### 类型

字符串；只读。

---

### TextFont.parent

`app.textFonts[index].parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### TextFont.style

`app.textFonts[index].style`

#### 描述

字体的样式名称。

#### 类型

字符串；只读。

---

### TextFont.typename

`app.textFonts[index].typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 设置文本的字体

```javascript
// 将文档中所有文本的字体设置为第一个字体
if ( app.documents.length > 0 ) {

// 遍历所有文本艺术并应用字体 0
 for ( i = 0; i< app.activeDocument.textFrames.length; i++) {
 textArtRange = app.activeDocument.textFrames[i].textRange;
 textArtRange.characterAttributes.textFont = app.textFonts[0];
 }
}
```
