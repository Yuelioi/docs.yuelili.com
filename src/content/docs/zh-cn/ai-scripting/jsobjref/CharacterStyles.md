---
title: 字符样式
---
# 字符样式

`app.activeDocument.characterStyles`

#### 描述

[CharacterStyle](.././CharacterStyle) 对象的集合。

---

## 属性

### CharacterStyles.length

`app.activeDocument.characterStyles.length`

#### 描述

集合中的字符数量。

#### 类型

数字；只读。

---

### CharacterStyles.parent

`app.activeDocument.characterStyles.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### CharacterStyles.typename

`app.activeDocument.characterStyles.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### CharacterStyles.add()

`add(name)`

#### 描述

创建一个命名字符样式。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要创建的元素名称 |

#### 返回值

[CharacterStyle](.././CharacterStyle)

---

### CharacterStyles.getByName()

`getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素名称 |

#### 返回值

[CharacterStyle](.././CharacterStyle)

---

### CharacterStyles.index()

`index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[CharacterStyle](.././CharacterStyle)

---

### CharacterStyles.removeAll()

`removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无。

---

## 示例

### 使用字符样式

```javascript
// 在新文档中创建3个文本框，然后创建一个字符样式并将其应用于每个文本框。

var docRef = documents.add();
var textRef1 = docRef.textFrames.add();
textRef1.contents = "脚本编写很有趣！";
textRef1.top = 700;
textRef1.left = 50;

var textRef2 = docRef.textFrames.add();
textRef2.contents = "脚本编写很容易！";
textRef2.top = 625;
textRef2.left = 100;

var textRef3 = docRef.textFrames.add();
textRef3.contents = "每个人都应该编写脚本！";
textRef3.top = 550;
textRef3.left = 150;
redraw();

// 创建一个新的字符样式
var charStyle = docRef.characterStyles.add("BigRed");

// 设置字符属性
var charAttr = charStyle.characterAttributes;
charAttr.size = 40;
charAttr.tracking = -50;
charAttr.capitalization = FontCapsOption.ALLCAPS;

var redColor = new RGBColor();
redColor.red = 255;
redColor.green = 0;
redColor.blue = 0;
charAttr.fillColor = redColor;

// 应用于文档中的每个文本框
charStyle.applyTo(textRef1.textRange);
charStyle.applyTo(textRef2.textRange);
charStyle.applyTo(textRef3.textRange);
```
