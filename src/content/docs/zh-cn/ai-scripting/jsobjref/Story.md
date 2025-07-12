---
title: 故事
---
# 故事

`story`

#### 描述

由文本范围指定的连续文本块。一个故事可以包含一个或多个文本框架；如果有多个，这些文本框架会链接在一起形成一个单一的故事。

---

## 属性

### Story.characters

`story.characters`

#### 描述

故事中的所有字符。

#### 类型

[Characters](.././Characters); 只读。

---

### Story.insertionPoints

`story.insertionPoints`

#### 描述

故事中的所有插入点。

#### 类型

[InsertionPoints](.././InsertionPoints); 只读。

---

### Story.length

`story.length`

#### 描述

故事中的字符数。

#### 类型

数字（长整型）; 只读。

---

### Story.lines

`story.lines`

#### 描述

故事中的所有行。

#### 类型

[Lines](.././Lines); 只读。

---

### Story.paragraphs

`story.paragraphs`

#### 描述

故事中的所有段落。

#### 类型

[Paragraphs](.././Paragraphs); 只读。

---

### Story.parent

`story.parent`

#### 描述

对象的容器。

#### 类型

对象; 只读。

---

### Story.textFrames

`story.textFrames`

#### 描述

故事中的文本框架项。

#### 类型

[TextFrameItems](.././TextFrameItems); 只读。

---

### Story.textRange

`story.textRange`

#### 描述

故事的文本范围。

#### 类型

[TextRange](.././TextRange); 只读。

---

### Story.textRanges

`story.textRanges`

#### 描述

故事中的所有文本范围。

#### 类型

[TextRanges](.././TextRanges); 只读。

---

### Story.textSelection

`story.textSelection`

#### 描述

故事中选中的文本范围。

#### 类型

[TextRange](.././TextRange) 数组; 只读。

---

### Story.typename

`story.typename`

#### 描述

对象的类名。

#### 类型

字符串; 只读。

---

### Story.words

`story.words`

#### 描述

故事中的所有单词。

#### 类型

[Words](.././Words); 只读。

---

## 示例

### 将文本框架链接到故事中

```javascript
// 创建一个故事，该故事流经2个文本框架，另一个故事显示在第3个文本框架中
// 创建一个新文档并添加2个区域文本框架
var docRef = documents.add();
var itemRef1 = docRef.pathItems.rectangle(600, 200, 50, 30);
var textRef1 = docRef.textFrames.areaText(itemRef1);
textRef1.selected = true;

// 创建第2个文本框架并将其链接到第一个
var itemRef2 = docRef.pathItems.rectangle(550, 300, 50, 200);
var textRef2 = docRef.textFrames.areaText(itemRef2, TextOrientation.HORIZONTAL, textRef1);
textRef2.selected = true;

// 向第1个文本框架添加足够的文本以使其流到第2个文本框架
textRef1.contents = "这是两个文本框架链接在一起形成一个故事";
redraw();

// 创建第3个文本框架并计算故事数量
var textRef3 = docRef.textFrames.add();
textRef3.contents = "每个未链接的文本框架都会添加一个新故事。"
textRef3.top = 650;
textRef3.left = 200;

redraw();
```
