---
title: TextFrameItems
---
# TextFrameItems

`app.activeDocument.textFrames`

#### 描述

文档中 [TextFrameItem](.././TextFrameItem) 对象的集合。

---

## 属性

### TextFrameItems.length

`app.activeDocument.textFrames.length`

#### 描述

集合中元素的数量。

#### 类型

数字；只读。

---

### TextFrameItems.parent

`app.activeDocument.textFrames.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### TextFrameItems.typename

`app.activeDocument.textFrames.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### TextFrameItems.add()

`app.activeDocument.textFrames.add()`

#### 描述

创建一个点文本框架项。

#### 返回值

[TextFrameItem](.././TextFrameItem)

---

### TextFrameItems.areaText()

`app.activeDocument.textFrames.areaText(textPath[, orientation][, baseFrame][, postFix])`

#### 描述

创建一个区域文本框架项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `textPath` | [PathItem](.././PathItem) | 使用的路径项 |
| `orientation` | [TextOrientation](../scripting-constants#textorientation), 可选 | 文本的方向 |
| `baseFrame` | [TextFrameItem](.././TextFrameItem), 可选 | 使用的文本框架 |
| `postFix` | 布尔值, 可选 | 是否在文本框架前后添加内容 |

#### 返回值

[TextFrameItem](.././TextFrameItem)

---

### TextFrameItems.getByName()

`app.activeDocument.textFrames.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素名称 |

#### 返回值

[TextFrameItem](.././TextFrameItem)

---

### TextFrameItems.index()

`app.activeDocument.textFrames.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[TextFrameItem](.././TextFrameItem)

---

### TextFrameItems.pathText()

`app.activeDocument.textFrames.pathText(textPath[,startTValue][,endTValue][, orientation][, baseFrame][, postFix])`

#### 描述

创建一个路径上的文本框架项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `textPath` | [PathItem](.././PathItem) | 使用的路径项 |
| `startTValue` | 数字 (双精度) | 文本沿路径的起始位置 |
| `endTValue` | 数字 (双精度) | 文本沿路径的结束位置 |
| `orientation` | [TextOrientation](../scripting-constants#textorientation), 可选 | 文本的方向 |
| `baseFrame` | [TextFrameItem](.././TextFrameItem), 可选 | 使用的文本框架 |
| `postFix` | 布尔值, 可选 | 是否在文本框架前后添加内容 |

#### 返回值

[TextFrameItem](.././TextFrameItem)

---

### TextFrameItems.pointText()

`app.activeDocument.textFrames.pointText(anchor[, orientation])`

#### 描述

创建一个点文本框架项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `anchor` | 2个数字的数组 | 点文本锚点 |
| `orientation` | [TextOrientation](../scripting-constants#textorientation), 可选 | 文本的方向 |

#### 返回值

[TextFrameItem](.././TextFrameItem)

---

### TextFrameItems.removeAll()

`app.activeDocument.textFrames.removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无。

---

## 示例

### 创建和修改文本框架

```javascript
// 创建一个包含路径、区域和点文本框架的文档，
// 修改每个框架的内容，然后删除第二个框架

// 创建一个新文档
var docRef = documents.add();

// 创建3个新的文本框架（区域、路径、点）
// 区域文本
var rectRef = docRef.pathItems.rectangle(700, 50, 100, 100); var areaTextRef = docRef.textFrames.areaText(rectRef); areaTextRef.contents = "TextFrame #1";
areaTextRef.selected = true;

// 路径文本
var lineRef = docRef.pathItems.add();
lineRef.setEntirePath( Array(Array(200, 700), Array(300, 550) ) ); var pathTextRef = docRef.textFrames.pathText(lineRef); pathTextRef.contents = "TextFrame #2";
pathTextRef.selected = true;

// 点文本
var pointTextRef = docRef.textFrames.add(); pointTextRef.contents = "TextFrame #3"; pointTextRef.top = 700;
pointTextRef.left = 400; pointTextRef.selected = true; redraw();

// 计算文本框架的数量
var iCount = docRef.textFrames.length;
var sText = "There are " + iCount + " TextFrames.\r" sText += "Changing contents of each TextFrame.";

// 修改每个文本框架的内容
docRef.textFrames[0].contents = "Area TextFrame."; docRef.textFrames[1].contents = "Path TextFrame."; docRef.textFrames[2].contents = "Point TextFrame."; redraw();
docRef.textFrames[1].remove(); redraw();

// 再次计算
var iCount = docRef.textFrames.length;
```
