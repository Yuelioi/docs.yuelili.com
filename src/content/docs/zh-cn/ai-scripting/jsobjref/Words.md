---
title: 单词
---
# 单词

`app.activeDocument.textFrames[index].words`

#### 描述

文本项中的单词集合，其中每个单词是一个 [TextRange](.././TextRange) 对象。

元素没有名称；必须通过索引访问它们。

---

## 属性

### Words.length

`app.activeDocument.textFrames[index].words.length`

#### 描述

集合中对象的数量

#### 类型

数字；只读。

---

### Words.parent

`app.activeDocument.textFrames[index].words.parent`

#### 描述

此对象的父对象。

#### 类型

对象；只读。

---

### Words.typename

`app.activeDocument.textFrames[index].words.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Words.add()

`app.activeDocument.textFrames[index].words.add(contents[, relativeObject][, inseertLocation])`

#### 描述

在指定位置向当前文档添加一个单词。

如果未指定位置，则将其添加到包含文本框架中当前单词选择或插入点之后。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `contents` | 字符串 | 要添加的单词 |
| `relativeObject`| [TextFrameItem](.././TextFrameItem)，可选 | 要添加项的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 插入文本的位置 |

#### 返回值

[TextRange](.././TextRange)

---

### Words.addBefore()

`app.activeDocument.textFrames[index].words.addBefore(contents)`

#### 描述

在当前单词选择或插入点之前添加一个单词。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `contents` | 字符串 | 要添加的单词 |

#### 返回值

[TextRange](.././TextRange)

---

### Words.index()

`app.activeDocument.textFrames[index].words.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[TextRange](.././TextRange)

---

### Words.removeAll()

`app.activeDocument.textFrames[index].words.removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无。

---

## 示例

### 统计单词数量

```javascript
// 统计当前文档中的所有单词并将总数存储在 numWords 中
if ( app.documents.length > 0 ) {
 var numWords = 0;

 for ( i = 0; i < app.activeDocument.textFrames.length; i++) {
 numWords += app.activeDocument.textFrames[i].words.length;
 }
}
```

### 对单词应用属性

```javascript
// 创建一个新的洋红色并将其应用于符合特定条件的所有单词
if (app.documents.length > 0 && app.activeDocument.textFrames.length > 0) {
 // 创建要应用于单词的颜色
 var wordColor = new RGBColor();
 wordColor.red = 255;
 wordColor.green = 0;
 wordColor.blue = 255;

 // 设置要查找的单词的值 searchWord1 = "the";
 var searchWord2 = "The";
 var searchWord3 = "THE";

 // 遍历文档中的所有单词
 // 并为匹配 searchWord 的单词着色

 for (var i = 0; i < app.activeDocument.textFrames.length; i++) {
 var textArt = activeDocument.textFrames[i];

 for (var j = 0; j < textArt.words.length; j++) {
 var word = textArt.words[j];

      if (word.contents == searchWord1 || word.contents == searchWord2 || word.contents == searchWord3) {
 word.filled = true;
 word.fillColor = wordColor;
 }
 }
 }
}
```
