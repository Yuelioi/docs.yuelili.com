---
title: 文本字体
---
# 文本字体

`app.textFonts`

#### 描述

[TextFont](.././TextFont) 对象的集合。

---

## 属性

### TextFonts.length

`app.textFonts.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### TextFonts.parent

`app.textFonts.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### TextFonts.typename

`app.textFonts.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### TextFonts.getByName()

`app.textFonts.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[TextFont](.././TextFont)

---

### TextFonts.index()

`app.textFonts.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[TextFont](.././TextFont)

---

## 示例

### 查找字体

```javascript
// 创建一个新的A3大小的文档，并显示可用字体列表，直到文档填满为止。

var edgeSpacing = 10;
var columnSpacing = 230;
var docPreset = new DocumentPreset;
docPreset.width = 1191.0;
docPreset.height = 842.0

var docRef = documents.addDocument(DocumentColorSpace.CMYK, docPreset);
var sFontNames = "";
var x = edgeSpacing;
var y = (docRef.height - edgeSpacing);

var iCount = textFonts.length;

for (var i=0; i<iCount; i++) {
 sFontName = textFonts[i].name;
 sFontName += " ";
 sFontNames = sFontName + textFonts[i].style;

 var textRef = docRef.textFrames.add();
 textRef.textRange.characterAttributes.size = 10;
 textRef.contents = sFontNames;
 textRef.top = y;
 textRef.left = x;

 // 检查文本框是否会超出文档边缘
 if ((x + textRef.width)> docRef.width) {
 textRef.remove();
 iCount = i;
 break;
 } else {
 // 显示文本框
 textRef.textRange.characterAttributes.textFont = textFonts.getByName(textFonts[i].name);
 redraw();

 if ((y-=(textRef.height)) <= 20) {
 y = (docRef.height - edgeSpacing);
 x += columnSpacing;
 }
 }
}
```
