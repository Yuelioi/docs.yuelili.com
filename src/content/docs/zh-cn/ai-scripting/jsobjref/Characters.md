---
title: 字符
---
# 字符

`app.activeDocument.textFrames[index].contents`

#### 描述

字符的集合（长度为1的`TextRange`对象）。

元素没有名称；必须通过索引访问它们。

---

## 属性

### Characters.length

`app.activeDocument.textFrames[index].contents.length`

#### 描述

集合中的字符数量。

#### 类型

数字；只读。

---

### Characters.parent

`app.activeDocument.textFrames[index].contents.parent`

#### 描述

包含此字符的文本艺术项。

#### 类型

对象；只读。

---

### Characters.typename

`app.activeDocument.textFrames[index].contents.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Characters.add()

`app.activeDocument.textFrames[index].contents.add(contents[,relativeObject][,insertionLocation])`

#### 描述

在当前文档的指定位置添加具有指定文本内容的新字符。

如果未指定位置，则将新字符添加到包含文本框架中的当前文本选择或插入点之后。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `contents` | 字符串 | 要添加的文本内容 |
| `relativeObject`| [TextFrameItem](.././TextFrameItem), 可选 | 要添加到的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement), 可选 | 放置文本的位置 |

#### 返回值

[TextRange](.././TextRange)

---

### Characters.addBefore()

`app.activeDocument.textFrames[index].contents.addBefore(contents)`

#### 描述

在指定的文本选择之前添加一个字符。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `contents` | 字符串 | 要添加的文本内容 |

#### 返回值

[TextRange](.././TextRange)

---

### Characters.index()

`app.activeDocument.textFrames[index].contents.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[TextRange](.././TextRange)

---

### Characters.removeAll()

`app.activeDocument.textFrames[index].contents.removeAll()`

#### 描述

删除集合中的所有元素。

#### 返回值

无。

---

## 示例

### 统计字符数量

```javascript
// 统计活动文档中的所有字符数量，
// 包括空白字符，并存储在numChars中

if (app.documents.length > 0) {
 var doc = app.activeDocument;
 var numChars = 0;
 for (var i = 0; i < doc.textFrames.length; i++) {
 var textArtRange = doc.textFrames[i].contents;
 numChars += textArtRange.length;
 }
}
```
