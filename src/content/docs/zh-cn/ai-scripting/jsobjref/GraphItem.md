---
title: GraphItem
---
# GraphItem

`app.activeDocument.graphItems[index]`

#### 描述

任何图形对象。参见示例 [旋转图形项](../GraphItems#rotating-graph-items)。

---

## 属性

### GraphItem.artworkKnockout

`app.activeDocument.graphItems[index].artworkKnockout`

#### 描述

此对象是否用于创建挖空效果，如果是，挖空类型是什么。不能将此值设置为 `KnockoutState.Unknown`。

#### 类型

[KnockoutState](../scripting-constants#knockoutstate)

---

### GraphItem.blendingMode

`app.activeDocument.graphItems[index].blendingMode`

#### 描述

合成对象时使用的模式。

#### 类型

[BlendModes](../scripting-constants#blendmodes)

---

### GraphItem.contentVariable

`app.activeDocument.graphItems[index].contentVariable`

#### 描述

绑定到图形项的内容变量。

在绑定之前不需要设置 `contentVariable` 的类型。Illustrator 会自动将其类型设置为 `GRAPH`。

#### 类型

[Variable](.././Variable)

---

### GraphItem.controlBounds

`app.activeDocument.graphItems[index].controlBounds`

#### 描述

绑定到图形项的内容变量。

对象的边界，包括描边宽度和控件。

#### 类型

4个数字的数组；只读。

---

### GraphItem.editable

`app.activeDocument.graphItems[index].editable`

#### 描述

如果为 `true`，则此图形项可编辑。

#### 类型

布尔值；只读。

---

### GraphItem.geometricBounds

`app.activeDocument.graphItems[index].geometricBounds`

#### 描述

对象的边界，不包括描边宽度。

#### 类型

4个数字的数组；只读。

---

### GraphItem.height

`app.activeDocument.graphItems[index].height`

#### 描述

图形项的高度。

#### 类型

数字（双精度）；只读。

---

### GraphItem.hidden

`app.activeDocument.graphItems[index].hidden`

#### 描述

如果为 `true`，则此图形项被隐藏。

#### 类型

布尔值。

---

### GraphItem.isIsolated

`app.activeDocument.graphItems[index].isIsolated`

#### 描述

如果为 `true`，则此对象被隔离。

#### 类型

布尔值。

---

### GraphItem.layer

`app.activeDocument.graphItems[index].layer`

#### 描述

此图形项所属的图层。

#### 类型

[Layer](.././Layer)；只读。

---

### GraphItem.left

`app.activeDocument.graphItems[index].left`

#### 描述

图形项左侧与页面左侧的偏移量（以点为单位）。

#### 类型

数字。

---

### GraphItem.locked

`app.activeDocument.graphItems[index].locked`

#### 描述

如果为 `true`，则此图形项被锁定。

#### 类型

布尔值。

---

### GraphItem.name

`app.activeDocument.graphItems[index].name`

#### 描述

此图形项的名称。

#### 类型

字符串。

---

### GraphItem.note

`app.activeDocument.graphItems[index].note`

#### 描述

分配给此项的注释。

#### 类型

字符串。

---

### GraphItem.opacity

`app.activeDocument.graphItems[index].opacity`

#### 描述

对象的不透明度；值介于 0.0 到 100.0 之间。

#### 类型

数字（双精度）。

---

### GraphItem.parent

`app.activeDocument.graphItems[index].parent`

#### 描述

此对象的父对象。

#### 类型

[Layer](.././Layer) 或 [GroupItem](.././GroupItem)

---

### GraphItem.position

`app.activeDocument.graphItems[index].position`

#### 描述

`graphItem` 对象左上角的位置（以点为单位），格式为 [x, y]。不包括描边宽度。

#### 类型

2个数字的数组。

---

### GraphItem.selected

`app.activeDocument.graphItems[index].selected`

#### 描述

如果为 `true`，则此对象被选中。

#### 类型

布尔值。

---

### GraphItem.sliced

`app.activeDocument.graphItems[index].sliced`

#### 描述

如果为 `true`，则图形项被切片。

默认值：`false`。

#### 类型

布尔值。

---

### GraphItem.tags

`app.activeDocument.graphItems[index].tags`

#### 描述

此图形项中包含的标签。

#### 类型

[Tags](.././Tags)；只读。

---

### GraphItem.top

`app.activeDocument.graphItems[index].top`

#### 描述

图形项顶部与页面底部的偏移量（以点为单位）。

#### 类型

数字（双精度）。

---

### GraphItem.typename

`app.activeDocument.graphItems[index].typename`

#### 描述

图形项的类型。

#### 类型

字符串；只读。

---

### GraphItem.uRL

`app.activeDocument.graphItems[index].uRL`

#### 描述

分配给此图形项的 Adobe URL 标签的值。

#### 类型

字符串。

---

### GraphItem.visibilityVariable

`app.activeDocument.graphItems[index].visibilityVariable`

#### 描述

绑定到图形项的可见性变量。

在绑定之前不需要设置 `visibilityVariable` 的类型。Illustrator 会自动将其类型设置为 `VISIBILITY`。

#### 类型

[Variable](.././Variable)

---

### GraphItem.visibleBounds

`app.activeDocument.graphItems[index].visibleBounds`

#### 描述

图形项的可见边界，包括描边宽度。

#### 类型

4个数字的数组；只读。

---

### GraphItem.width

`app.activeDocument.graphItems[index].width`

#### 描述

图形项的宽度。

范围：0.0 到 16348.0。

#### 类型

数字（双精度）。

---

### GraphItem.wrapInside

`app.activeDocument.graphItems[index].wrapInside`

#### 描述

如果为 `true`，则文本框架对象应在此对象内部换行。

#### 类型

布尔值。

---

### GraphItem.wrapOffset

`app.activeDocument.graphItems[index].wrapOffset`

#### 描述

围绕此对象换行文本时使用的偏移量。

#### 类型

数字（双精度）。

---

### GraphItem.wrapped

`app.activeDocument.graphItems[index].wrapped`

#### 描述

如果为 `true`，则围绕此对象换行文本框架对象。（文本框架必须位于对象上方。）

#### 类型

布尔值。

---

### GraphItem.zOrderPosition

`app.activeDocument.graphItems[index].zOrderPosition`

#### 描述

此艺术项在包含它的组或图层（父对象）中的堆叠顺序中的位置。

#### 类型

数字（长整型）。

---

## 方法

### GraphItem.duplicate()

`app.activeDocument.graphItems[index].duplicate([relativeObject] [,insertionLocation])`

#### 描述

创建选定对象的副本。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象，可选 | 要复制到的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 插入元素的位置 |

#### 返回值

[GraphItem](#graphitem)

---

### GraphItem.move()

`app.activeDocument.graphItems[index].move(relativeObject, insertionLocation)`

#### 描述

移动对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象 | 要移动元素的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 移动元素到的位置 |

#### 返回值

[GraphItem](#graphitem)

---

### GraphItem.remove()

`app.activeDocument.graphItems[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。

---

### GraphItem.resize()

```javascript
app.activeDocument.graphItems[index].resize(
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
| `changePositions` | 布尔值，可选 | 是否影响艺术对象的位置和方向 |
| `changeFillPatterns` | 布尔值，可选 | 是否变换填充图案 |
| `changeFillGradients` | 布尔值，可选 | 是否变换填充渐变 |
| `changeStrokePattern` | 布尔值，可选 | 是否变换描边图案 |
| `changeLineWidths` | 数字（双精度），可选 | 缩放线宽的量 |
| `scaleAbout` | [Transformation](../scripting-constants#transformation)，可选 | 用作锚点的点，用于变换 |

#### 返回值

无。

---

### GraphItem.rotate()

```javascript
app.activeDocument.graphItems[index].rotate(
 angle
 [,changePositions]
 [,changeFillPatterns]
 [,changeFillGradients]
 [,changeStrokePattern]
 [,rotateAbout]
)
```

#### 描述

相对于当前旋转角度旋转艺术项。如果 `angle` 值为正，则对象逆时针旋转；如果为负，则顺时针旋转。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `angle` | 数字（双精度） | 旋转元素的角度量 |
| `changePositions` | 布尔值，可选 | 是否影响艺术对象的位置和方向 |
| `changeFillPatterns` | 布尔值，可选 | 是否变换填充图案 |
| `changeFillGradients` | 布尔值，可选 | 是否变换填充渐变 |
| `changeStrokePattern` | 布尔值，可选 | 是否变换描边图案 |
| `rotateAbout` | [Transformation](../scripting-constants#transformation)，可选 | 用作锚点的点，用于变换 |

#### 返回值

无。

---

### GraphItem.transform()

```javascript
app.activeDocument.graphItems[index].transform(
 transformationMatrix
 [,changePositions]
 [,changeFillPatterns]
 [,changeFillGradients]
 [,changeStrokePattern]
 [,changeLineWidths]
 [,transformAbout]
)
```

#### 描述

通过应用变换矩阵来变换艺术项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `transformationMatrix` | [Matrix](.././Matrix) | 要应用的变换矩阵 |
| `changePositions` | 布尔值，可选 | 是否改变位置 |
| `changeFillPatterns` | 布尔值，可选 | 是否改变填充图案 |
| `changeFillGradients` | 布尔值，可选 | 是否改变填充渐变 |
| `changeStrokePattern` | 布尔值，可选 | 是否改变描边图案 |
| `changeLineWidths` | 数字（双精度），可选 | 缩放线宽的量 |
| `transformAbout` | [Transformation](../scripting-constants#transformation)，可选 | 用作锚点的点，用于变换 |

#### 返回值

无。

---

### GraphItem.translate()

```javascript
app.activeDocument.graphItems[index].translate(
 [deltaX]
 [,deltaY]
 [,transformObjects]
 [,transformFillPatterns]
 [,transformFillGradients]
 [,transformStrokePatterns]
)
```

#### 描述

相对于当前位置重新定位艺术项，其中 `deltaX` 是水平偏移量，`deltaY` 是垂直偏移量。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `deltaX` | 数字（双精度），可选 | 水平偏移量 |
| `deltaY` | 数字（双精度），可选 | 垂直偏移量 |
| `transformObjects` | 布尔值，可选 | 是否变换对象 |
| `transformFillPatterns` | 布尔值，可选 | 是否变换填充图案 |
| `transformFillGradients` | 布尔值，可选 | 是否变换填充渐变 |
| `transformStrokePatterns` | 布尔值，可选 | 是否变换描边图案 |

#### 返回值

无。

---

### GraphItem.zOrder()

`app.activeDocument.graphItems[index].zOrder(zOrderCmd)`

#### 描述

在包含此对象的组或图层（父对象）中排列艺术项的位置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `zOrderCmd` | [ZOrderMethod](../scripting-constants#zordermethod) | 堆叠顺序排列方法 |

#### 返回值

无。

---
