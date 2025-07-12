---
title: 段落
---
# 段落

`app.activeDocument.textFrames[index].paragraphs`

#### 描述

一个 [TextRange](.././TextRange) 对象的集合，每个 `TextRange` 代表一个段落。

元素没有名称；必须通过索引访问它们。

---

## 属性

### Paragraphs.length

`app.activeDocument.textFrames[index].paragraphs.length`

#### 描述

集合中对象的数量。

#### 类型

数字；只读。

---

### Paragraphs.parent

`app.activeDocument.textFrames[index].paragraphs.parent`

#### 描述

此对象的父对象。

#### 类型

对象；只读。

---

### Paragraphs.typename

`app.activeDocument.textFrames[index].paragraphs.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Paragraphs.add()

`app.activeDocument.textFrames[index].paragraphs.add(contents [,relativeObject] [,insertionLocation])`

#### 描述

在当前文档的指定位置添加具有指定文本内容的新段落。如果未指定位置，则将新段落添加到包含文本框架中当前文本选择或插入点之后。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `contents` | 字符串 | 要添加的文本内容 |
| `relativeObject` | [TextFrameItem](.././TextFrameItem)，可选 | 要添加到的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 放置文本的位置 |

#### 返回值

[TextRange](.././TextRange)

---

### Paragraphs.addBefore()

`app.activeDocument.textFrames[index].paragraphs.addBefore(contents)`

#### 描述

在当前文本选择或插入点之前添加具有指定文本内容的新段落。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `contents` | 字符串 | 要添加的文本内容 |

#### 返回值

[TextRange](.././TextRange)

---

### Paragraphs.index()

`app.activeDocument.textFrames[index].paragraphs.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串，数字 | 字符串或数字键 |

#### 返回值

[TextRange](.././TextRange)

---

### Paragraphs.removeAll()

`app.activeDocument.textFrames[index].paragraphs.removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无。

---

## 示例

### 计算段落数

```javascript
// 计算当前文档中的所有段落并将结果存储在 paragraphCount 中
if (app.documents.length > 0) {
 var doc = app.activeDocument;
 var paragraphCount = 0;
 for (var i = 0; i < doc.textFrames.length; i++) {
 paragraphCount += doc.textFrames[i].paragraphs.length;
 }
}
```
