---
title: 段落样式
---
# 段落样式

`app.activeDocument.paragraphStyles`

#### 描述

[ParagraphStyle](.././ParagraphStyle) 对象的集合。

---

## 属性

### ParagraphStyles.length

`app.activeDocument.paragraphStyles.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### ParagraphStyles.parent

`app.activeDocument.paragraphStyles.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### ParagraphStyles.typename

`app.activeDocument.paragraphStyles.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### ParagraphStyles.add()

`app.activeDocument.paragraphStyles.add(name)`

#### 描述

创建一个命名的段落样式。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[ParagraphStyle](.././ParagraphStyle)

---

### ParagraphStyles.getByName()

`app.activeDocument.paragraphStyles.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[ParagraphStyle](.././ParagraphStyle)

---

### ParagraphStyles.index()

`app.activeDocument.paragraphStyles.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[ParagraphStyle](.././ParagraphStyle)

---

### ParagraphStyles.removeAll()

`app.activeDocument.paragraphStyles.removeAll()`

#### 描述

删除集合中的所有元素。

#### 返回值

无。

---

## 示例

### 创建并应用段落样式

```javascript
// 创建一个新文档，包含1个文本框和3个段落
// 为每个段落设置不同的对齐方式，然后创建一个段落样式并将其应用于所有段落

var docRef = documents.add();
var pathRef = docRef.pathItems.rectangle(600, 200, 200, 400);
var textRef = docRef.textFrames.areaText(pathRef);
textRef.paragraphs.add("左对齐段落。");
textRef.paragraphs.add("居中对齐段落。");
textRef.paragraphs.add("右对齐段落。");
textRef.textRange.characterAttributes.size = 28;

// 使用段落属性对象更改每个段落的对齐方式
var paraAttr_0 = textRef.paragraphs[0].paragraphAttributes;
paraAttr_0.justification = Justification.RIGHT;

var paraAttr_1 = textRef.paragraphs[1].paragraphAttributes;
paraAttr_1.justification = Justification.CENTER;

var paraAttr_2 = textRef.paragraphs[2].paragraphAttributes;
paraAttr_2.justification = Justification.LEFT;

// 创建一个新的段落样式
var paraStyle = docRef.paragraphStyles.add("LeftIndent");

// 添加一些段落属性
var paraAttr = paraStyle.paragraphAttributes;
paraAttr.justification = Justification.LEFT;
paraAttr.firstLineIndent = 10;

// 将样式应用于文档中的每个段落
var iCount = textRef.paragraphs.length;
for (var i = 0; i < iCount; i++) {
 paraStyle.applyTo(textRef.paragraphs[i], true);
}
redraw();
```
