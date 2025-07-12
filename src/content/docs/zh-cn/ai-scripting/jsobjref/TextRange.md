---
title: TextRange
---
# TextRange

`app.activeDocument.textFrames[index].textRange`

#### 描述

特定文本艺术项中的文本范围。TextRange 使您可以访问文本艺术项中包含的文本。

---

## 属性

### TextRange.characterAttributes

`app.activeDocument.textFrames[index].textRange.characterAttributes`

#### 描述

文本范围的字符属性。

#### 类型

[CharacterAttributes](.././CharacterAttributes); 只读。

---

### TextRange.characterOffset

`app.activeDocument.textFrames[index].textRange.characterOffset`

#### 描述

第一个字符的偏移量。

#### 类型

Number (long)

---

### TextRange.characters

`app.activeDocument.textFrames[index].textRange.characters`

#### 描述

此文本范围中的所有字符。

#### 类型

[Characters](.././Characters); 只读。

---

### TextRange.characterStyles

`app.activeDocument.textFrames[index].textRange.characterStyles`

#### 描述

文本范围中所有引用的字符样式。

#### 类型

[CharacterStyles](.././CharacterStyles); 只读。

---

### TextRange.contents

`app.activeDocument.textFrames[index].textRange.contents`

#### 描述

文本字符串。

#### 类型

String

---

### TextRange.end

`app.activeDocument.textFrames[index].textRange.end`

#### 描述

文本范围的结束索引。

#### 类型

Int32

---

### TextRange.insertionPoints

`app.activeDocument.textFrames[index].textRange.insertionPoints`

#### 描述

此文本范围中的所有插入点。

#### 类型

[InsertionPoints](.././InsertionPoints); 只读。

---

### TextRange.kerning

`app.activeDocument.textFrames[index].textRange.kerning`

#### 描述

控制两个字符之间的间距，以千分之一 em 为单位。整数。

#### 类型

Number (long)

---

### TextRange.length

`app.activeDocument.textFrames[index].textRange.length`

#### 描述

长度（以字符为单位）。最小值：0

#### 类型

Number (long)

---

### TextRange.lines

`app.activeDocument.textFrames[index].textRange.lines`

#### 描述

此文本范围中的所有行。

#### 类型

[Lines](.././Lines); 只读。

---

### TextRange.paragraphAttributes

`app.activeDocument.textFrames[index].textRange.paragraphAttributes`

#### 描述

文本范围的段落属性。

#### 类型

[ParagraphAttributes](.././ParagraphAttributes); 只读。

---

### TextRange.paragraphs

`app.activeDocument.textFrames[index].textRange.paragraphs`

#### 描述

此文本范围中的所有段落。

#### 类型

[Paragraphs](.././Paragraphs); 只读。

---

### TextRange.paragraphStyles

`app.activeDocument.textFrames[index].textRange.paragraphStyles`

#### 描述

文本范围中所有引用的段落样式。

#### 类型

[ParagraphStyles](.././ParagraphStyles); 只读。

---

### TextRange.parent

`app.activeDocument.textFrames[index].textRange.parent`

#### 描述

对象的容器。

#### 类型

[TextRange](#textrange); 只读。

---

### TextRange.start

`app.activeDocument.textFrames[index].textRange.start`

#### 描述

文本范围的起始索引。

#### 类型

Int32

---

### TextRange.story

`app.activeDocument.textFrames[index].textRange.story`

#### 描述

文本范围所属的故事。

#### 类型

[Story](.././Story); 只读。

---

### TextRange.textRanges

`app.activeDocument.textFrames[index].textRange.textRanges`

#### 描述

此文本范围中的所有文本。

#### 类型

[TextRanges](.././TextRanges); 只读。

---

### TextRange.textSelection

`app.activeDocument.textFrames[index].textRange.textSelection`

#### 描述

文本范围中选中的文本范围。

#### 类型

[TextRange](#textrange) 数组; 只读。

---

### TextRange.typename

`app.activeDocument.textFrames[index].textRange.typename`

#### 描述

对象的类名。

#### 类型

String; 只读。

---

### TextRange.words

`app.activeDocument.textFrames[index].textRange.words`

#### 描述

此文本范围中包含的所有单词。

#### 类型

[Words](.././Words); 只读。

---

## 方法

### TextRange.changeCaseTo()

`app.activeDocument.textFrames[index].textRange.changeCaseTo(type)`

#### 描述

更改文本的大小写。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `type` | [CaseChangeType](../scripting-constants#casechangetype) | 要更改的大小写类型 |

#### 返回值

无

---

### TextRange.deSelect()

`app.activeDocument.textFrames[index].textRange.deSelect()`

#### 描述

取消选择文本范围。

#### 返回值

无。

---

### TextRange.duplicate()

`app.activeDocument.textFrames[index].textRange.duplicate([relativeObject][, insertionLocation])`

#### 描述

创建此对象的副本。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | Object, 可选 | 要复制到的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement), 可选 | 插入元素的位置 |

#### 返回值

[TextRange](#textrange)

---

### TextRange.getLocalCharOverridesJSON()

`app.activeDocument.textFrames[index].textRange.getLocalCharOverridesJSON()`

#### 描述

获取字符覆盖的 JSON 表示。

#### 返回值

String

---

### TextRange.getLocalParaOverridesJSON()

`app.activeDocument.textFrames[index].textRange.getLocalParaOverridesJSON()`

#### 描述

获取段落覆盖的 JSON 表示。

#### 返回值

String

---

### TextRange.getParagraphLength()

`app.activeDocument.textFrames[index].textRange.getParagraphLength()`

#### 描述

获取文本范围中第一个段落的长度。

#### 返回值

Int32

---

### TextRange.getTextRunLength()

`app.activeDocument.textFrames[index].textRange.getTextRunLength()`

#### 描述

获取文本范围中第一个文本运行的长度。

#### 返回值

Int32

---

### TextRange.move()

`app.activeDocument.textFrames[index].textRange.move(relativeObject, insertionLocation)`

#### 描述

移动对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | Object | 要移动元素的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement), 可选 | 移动元素到的位置 |

#### 返回值

[TextRange](#textrange)

---

### TextRange.remove()

`app.activeDocument.textFrames[index].textRange.remove()`

#### 描述

删除对象。

#### 返回值

无

---

### TextRange.select()

`app.activeDocument.textFrames[index].textRange.select([addToDocument])`

#### 描述

选择文本范围。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `addToDocument` | Boolean, 可选 | 是否添加或替换当前选择 |

#### 返回值

无

---

## 示例

### 操作文本

```javascript
// 通过更改每个字符的大小属性来更改当前文档中每个单词的第一个字符的大小

if ( app.documents.length > 0 ) {
 for ( i = 0; i < app.activeDocument.textFrames.length; i++ ) {
 var text = app.activeDocument.textFrames[i].textRange;
 for ( j = 0 ; j < text.words.length; j++ ) {
 // 每个单词都是一个 textRange 对象
 var textWord = text.words[j];

 // 字符也是 textRange 对象。
 // 获取每个单词的第一个字符并增加其大小。

 var firstChars = textWord.characters[0];
 firstChars.size = firstChars.size * 1.5;
 }
 }
}
```
