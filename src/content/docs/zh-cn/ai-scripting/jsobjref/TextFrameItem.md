---
title: TextFrameItem
---
# TextFrameItem

`app.activeDocument.textFrames[index]`

#### 描述

用于显示文本的基本艺术项。从用户界面来看，这是使用文本工具创建的文本。Illustrator 中有三种类型的文本艺术：点文本、路径文本和区域文本。类型由文本框架的 [kind](#textframeitemkind) 属性指示。

当你创建一个文本框架时，你也会创建一个 [Story](.././Story) 对象。然而，链接文本框架会将框架合并为一个单一的故事对象。要链接框架，请使用 [nextFrame](#textframeitemnextframe) 或 [previousFrame](#textframeitempreviousframe) 属性。

---

## 属性

### TextFrameItem.anchor

`app.activeDocument.textFrames[index].anchor`

#### 描述

锚点的位置，点文本基线的起点。

#### 类型

2个数字的数组

---

### TextFrameItem.antialias

`app.activeDocument.textFrames[index].antialias`

#### 描述

文本中使用的抗锯齿类型。

#### 类型

[TextAntialias](../scripting-constants#textantialias)

---

### TextFrameItem.characters

`app.activeDocument.textFrames[index].characters`

#### 描述

此文本框架中的所有字符。

#### 类型

[Characters](.././Characters); 只读。

---

### TextFrameItem.columnCount

`app.activeDocument.textFrames[index].columnCount`

#### 描述

文本框架中的列数（仅限区域文本）。

#### 类型

数字（长整型）

---

### TextFrameItem.columnGutter

`app.activeDocument.textFrames[index].columnGutter`

#### 描述

文本框架中的列间距（仅限区域文本）。

#### 类型

数字（双精度）

---

### TextFrameItem.contents

`app.activeDocument.textFrames[index].contents`

#### 描述

文本字符串。

#### 类型

字符串

---

### TextFrameItem.contentVariable

`app.activeDocument.textFrames[index].contentVariable`

#### 描述

绑定到此文本框架项的内容变量。

#### 类型

[Variable](.././Variable)

---

### TextFrameItem.endTValue

`app.activeDocument.textFrames[index].endTValue`

#### 描述

沿路径的文本结束位置，作为相对于路径段的值（仅限路径文本）。

#### 类型

数字（双精度）

---

### TextFrameItem.flowLinksHorizontally

`app.activeDocument.textFrames[index].flowLinksHorizontally`

#### 描述

如果为 `true`，则在链接框架之间水平流动文本（仅限区域文本）。

#### 类型

布尔值

---

### TextFrameItem.insertionPoints

`app.activeDocument.textFrames[index].insertionPoints`

#### 描述

此文本范围中的所有插入点。

#### 类型

[InsertionPoints](.././InsertionPoints); 只读。

---

### TextFrameItem.kind

`app.activeDocument.textFrames[index].kind`

#### 描述

文本框架项的类型（区域、路径或点）。

#### 类型

[TextType](../scripting-constants#texttype); 只读。

---

### TextFrameItem.lines

`app.activeDocument.textFrames[index].lines`

#### 描述

此文本框架中的所有行。

#### 类型

[Lines](.././Lines); 只读。

---

### TextFrameItem.matrix

`app.activeDocument.textFrames[index].matrix`

#### 描述

此文本框架的变换矩阵。

#### 类型

[Matrix](.././Matrix); 只读。

---

### TextFrameItem.nextFrame

`app.activeDocument.textFrames[index].nextFrame`

#### 描述

此文本框架之后的链接文本框架。

#### 类型

[TextFrameItem](.././TextFrameItem)

---

### TextFrameItem.opticalAlignment

`app.activeDocument.textFrames[index].opticalAlignment`

#### 描述

如果为 `true`，则启用光学对齐功能。

#### 类型

布尔值

---

### TextFrameItem.orientation

`app.activeDocument.textFrames[index].orientation`

#### 描述

文本的方向。

#### 类型

[TextOrientation](../scripting-constants#textorientation)

---

### TextFrameItem.paragraphs

`app.activeDocument.textFrames[index].paragraphs`

#### 描述

此文本框架中的所有段落。

#### 类型

[Paragraphs](.././Paragraphs); 只读。

---

### TextFrameItem.parent

`app.activeDocument.textFrames[index].parent`

#### 描述

此对象的父对象。

#### 类型

[Layer](.././Layer) 或 [GroupItem](.././GroupItem); 只读。

---

### TextFrameItem.previousFrame

`app.activeDocument.textFrames[index].previousFrame`

#### 描述

此文本框架之前的链接文本框架。

#### 类型

[TextFrameItem](#textframeitem)

---

### TextFrameItem.rowCount

`app.activeDocument.textFrames[index].rowCount`

#### 描述

文本框架中的行数（仅限区域文本）。

#### 类型

数字（长整型）

---

### TextFrameItem.rowGutter

`app.activeDocument.textFrames[index].rowGutter`

#### 描述

文本框架中的行间距（仅限区域文本）。

#### 类型

数字（双精度）

---

### TextFrameItem.spacing

`app.activeDocument.textFrames[index].spacing`

#### 描述

间距量。

#### 类型

数字（双精度）

---

### TextFrameItem.startTValue

`app.activeDocument.textFrames[index].startTValue`

#### 描述

沿路径的文本起始位置，作为相对于路径段的值（仅限路径文本）。

#### 类型

数字（双精度）

---

### TextFrameItem.story

`app.activeDocument.textFrames[index].story`

#### 描述

文本框架所属的故事。

#### 类型

[Story](.././Story); 只读。

---

### TextFrameItem.textPath

`app.activeDocument.textFrames[index].textPath`

#### 描述

与文本框架关联的路径项。注意：仅在 [kind](#textframeitemkind) 为区域或路径时有效。

#### 类型

[TextPath](.././TextPath)

---

### TextFrameItem.textRange

`app.activeDocument.textFrames[index].textRange`

#### 描述

文本框架的文本范围。

#### 类型

[TextRange](.././TextRange); 只读。

---

### TextFrameItem.textRanges

`app.activeDocument.textFrames[index].textRanges`

#### 描述

此文本框架中的所有文本。

#### 类型

[TextRanges](.././TextRanges); 只读。

---

### TextFrameItem.textSelection

`app.activeDocument.textFrames[index].textSelection`

#### 描述

文本框架中选中的文本范围。

#### 类型

[TextRange](.././TextRange) 数组; 只读。

---

### TextFrameItem.typename

`app.activeDocument.textFrames[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串; 只读。

---

### TextFrameItem.words

`app.activeDocument.textFrames[index].words`

#### 描述

此文本框架中的所有单词。

#### 类型

[Words](.././Words); 只读。

---

## 方法

### TextFrameItem.convertAreaObjectToPointObject()

`app.activeDocument.textFrames[index].convertAreaObjectToPointObject()`

#### 描述

将区域类型的文本框架转换为点类型的文本框架。

#### 返回值

[TextFrameItem](#textframeitem)

---

### TextFrameItem.convertPointObjectToAreaObject()

`app.activeDocument.textFrames[index].convertPointObjectToAreaObject()`

#### 描述

将点类型的文本框架转换为区域类型的文本框架。

#### 返回值

[TextFrameItem](#textframeitem)

---

### TextFrameItem.createOutline()

`app.activeDocument.textFrames[index].createOutline()`

#### 描述

将文本框架中的文本转换为轮廓。

#### 返回值

[GroupItem](.././GroupItem)

---

### TextFrameItem.duplicate()

`app.activeDocument.textFrames[index].duplicate([relativeObject] [,insertionLocation])`

#### 描述

创建选定对象的副本。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject`| 对象, 可选 | 要复制到的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement), 可选 | 插入元素的位置 |

#### 返回值

[TextRange](.././TextRange)

---

### TextFrameItem.move()

`app.activeDocument.textFrames[index].move(relativeObject, insertionLocation)`

#### 描述

移动对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject`| 对象 | 要移动元素的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement), 可选 | 移动元素到的位置 |

#### 返回值

[TextRange](.././TextRange)

---

### TextFrameItem.remove()

`app.activeDocument.textFrames[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。

---

### TextFrameItem.resize()

```javascript
app.activeDocument.textFrames[index].resize(
 scaleX,
 scaleY
 [,changePositions]
 [,changeFillPatterns]
 [,changeFillGradients]
 [,changeStrokePattern]
 [,changeLineWidths]
 [,scaleAbout]
)
```

#### 描述

缩放艺术项，其中 `scaleX` 是水平缩放因子，`scaleY` 是垂直缩放因子。100.0 = 100%。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `scaleX` | 数字（双精度） | 水平缩放因子 |
| `scaleY` | 数字（双精度） | 垂直缩放因子 |
| `changePositions` | 布尔值, 可选 | 是否影响艺术对象的位置和方向 |
| `changeFillPatterns` | 布尔值, 可选 | 是否变换填充图案 |
| `changeFillGradients` | 布尔值, 可选 | 是否变换填充渐变 |
| `changeStrokePattern` | 布尔值, 可选 | 是否变换描边图案 |
| `changeLineWidths` | 数字（双精度）, 可选 | 缩放线宽的量 |
| `scaleAbout` | [Transformation](../scripting-constants#transformation), 可选 | 用作锚点的点，用于变换 |

#### 返回值

无。

---

### TextFrameItem.rotate()

```javascript
app.activeDocument.textFrames[index].rotate(
 angle
 [,changePositions]
 [,changeFillPatterns]
 [,changeFillGradients]
 [,changeStrokePattern]
 [,rotateAbout]
)
```

#### 描述

相对于当前旋转旋转艺术项。如果 `angle` 值为正，则对象逆时针旋转；如果值为负，则顺时针旋转。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `angle` | 数字（双精度） | 旋转元素的角度量 |
| `changePositions` | 布尔值, 可选 | 是否影响艺术对象的位置和方向 |
| `changeFillPatterns` | 布尔值, 可选 | 是否变换填充图案 |
| `changeFillGradients` | 布尔值, 可选 | 是否变换填充渐变 |
| `changeStrokePattern` | 布尔值, 可选 | 是否变换描边图案 |
| `rotateAbout` | [Transformation](../scripting-constants#transformation), 可选 | 用作锚点的点，用于变换 |

#### 返回值

无。

---

### TextFrameItem.transform()

```javascript
app.activeDocument.textFrames[index].transform(
 transformationMatrix
 [, changePositions]
 [, changeFillPatterns]
 [, changeFillGradients]
 [, changeStrokePattern]
 [, changeLineWidths]
 [, transformAbout]
)
```

#### 描述

通过应用变换矩阵来变换艺术项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `transformationMatrix` | [Matrix](.././Matrix) | 要应用的变换矩阵 |
| `changePositions` | 布尔值, 可选 | 是否改变位置 |
| `changeFillPatterns` | 布尔值, 可选 | 是否改变填充图案 |
| `changeFillGradients` | 布尔值, 可选 | 是否改变填充渐变 |
| `changeStrokePattern` | 布尔值, 可选 | 是否改变描边图案 |
| `changeLineWidths` | 数字（双精度）, 可选 | 缩放线宽的量 |
| `transformAbout` | [Transformation](../scripting-constants#transformation), 可选 | 用作锚点的点，用于变换 |

#### 返回值

无。

---

### TextFrameItem.translate()

```javascript
app.activeDocument.textFrames[index].translate(
 [deltaX]
 [, deltaY]
 [, transformObjects]
 [, transformFillPatterns]
 [, transformFillGradients]
 [, transformStrokePatterns]
)
```

#### 描述

相对于当前位置重新定位艺术项，其中 `deltaX` 是水平偏移，`deltaY` 是垂直偏移。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `deltaX` | 数字（双精度）, 可选 | 水平偏移 |
| `deltaY` | 数字（双精度）, 可选 | 垂直偏移 |
| `transformObjects` | 布尔值, 可选 | 是否变换对象 |
| `transformFillPatterns` | 布尔值, 可选 | 是否变换填充图案 |
| `transformFillGradients` | 布尔值, 可选 | 是否变换填充渐变 |
| `transformStrokePatterns` | 布尔值, 可选 | 是否变换描边图案 |

#### 返回值

无。

---

### TextFrameItem.zOrder()

`app.activeDocument.textFrames[index].zOrder(zOrderCmd)`

#### 描述

在组或图层（父对象）的堆叠顺序中排列艺术项的位置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `zOrderCmd` | [ZOrderMethod](../scripting-constants#zordermethod) | 堆叠顺序排列方法 |

#### 返回值

无。

---

## 示例

### 旋转文本艺术项

```javascript
// 复制并旋转选定的文本艺术项 5 次
if ( app.documents.length > 0 ) {
 selectedItems = app.activeDocument.selection;

 // 确保有内容被选中
 if ( selectedItems.length > 0 ) {

 // 选择必须是文本艺术项
 if ( selectedItems[0].typename == "TextFrame" ) {

 // 获取文本艺术的父对象，以便可以在同一组或图层中插入新的文本艺术项
 dupSrc = selectedItems[0];
 textContainer = dupSrc.parent;

 // 创建 5 个新的文本艺术版本，每个旋转一定角度
 for ( i = 1; i <= 5; i++ ) {
 dupText = dupSrc.duplicate( textContainer, ElementPlacement.PLACEATEND );
 dupText.rotate(180 * i/6);
 }
 }
 }
}
```
