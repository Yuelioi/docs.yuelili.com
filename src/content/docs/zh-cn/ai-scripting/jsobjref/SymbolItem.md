---
title: SymbolItem
---
# SymbolItem

`app.activeDocument.symbolItems[index]`

#### 描述

通过将其添加到符号面板中使其可重复使用的艺术项。

`SymbolItem` 与创建它的 [Symbol](.././Symbol) 相关联，如果修改了关联的 `Symbol` 对象，`SymbolItem` 也会随之改变。

---

## 属性

### SymbolItem.artworkKnockout

`app.activeDocument.symbolItems[index].artworkKnockout`

#### 描述

此对象是否用于创建挖空效果，如果是，是哪种挖空效果。

#### 类型

[KnockoutState](../scripting-constants#knockoutstate)

---

### SymbolItem.blendingMode

`app.activeDocument.symbolItems[index].blendingMode`

#### 描述

合成对象时使用的混合模式。

#### 类型

[BlendModes](../scripting-constants#blendmodes)

---

### SymbolItem.controlBounds

`app.activeDocument.symbolItems[index].controlBounds`

#### 描述

包括描边宽度和控件的对象的边界。

#### 类型

4个数字的数组；只读。

---

### SymbolItem.editable

`app.activeDocument.symbolItems[index].editable`

#### 描述

如果为 `true`，则此项可编辑。

#### 类型

布尔值；只读。

---

### SymbolItem.geometricBounds

`app.activeDocument.symbolItems[index].geometricBounds`

#### 描述

不包括描边宽度的对象的边界。

#### 类型

4个数字的数组；只读。

---

### SymbolItem.height

`app.activeDocument.symbolItems[index].height`

#### 描述

组项的高度。

#### 类型

数字（双精度）

---

### SymbolItem.hidden

`app.activeDocument.symbolItems[index].hidden`

#### 描述

如果为 `true`，则此项隐藏。

#### 类型

布尔值

---

### SymbolItem.isIsolated

`app.activeDocument.symbolItems[index].isIsolated`

#### 描述

如果为 `true`，则此对象是隔离的。

#### 类型

布尔值

---

### SymbolItem.layer

`app.activeDocument.symbolItems[index].layer`

#### 描述

此项所属的图层。

#### 类型

[Layer](.././Layer)；只读。

---

### SymbolItem.left

`app.activeDocument.symbolItems[index].left`

#### 描述

项左侧的位置（以点为单位，从页面左侧测量）。

#### 类型

数字（双精度）

---

### SymbolItem.locked

`app.activeDocument.symbolItems[index].locked`

#### 描述

如果为 `true`，则此项被锁定。

#### 类型

布尔值

---

### SymbolItem.name

`app.activeDocument.symbolItems[index].name`

#### 描述

此项的名称。

#### 类型

字符串

---

### SymbolItem.note

`app.activeDocument.symbolItems[index].note`

#### 描述

分配给此项的注释。

#### 类型

字符串

---

### SymbolItem.opacity

`app.activeDocument.symbolItems[index].opacity`

#### 描述

对象的不透明度。

范围：0.0 到 100.0

#### 类型

数字（双精度）

---

### SymbolItem.parent

`app.activeDocument.symbolItems[index].parent`

#### 描述

此对象的父对象。

#### 类型

[Layer](.././Layer) 或 [GroupItem](.././GroupItem)；只读。

---

### SymbolItem.position

`app.activeDocument.symbolItems[index].position`

#### 描述

`symbolItem` 对象左上角的位置（以点为单位），格式为 [x, y]。不包括描边宽度。

#### 类型

2个数字的数组

---

### SymbolItem.selected

`app.activeDocument.symbolItems[index].selected`

#### 描述

如果为 `true`，则此项被选中。

#### 类型

布尔值

---

### SymbolItem.sliced

`app.activeDocument.symbolItems[index].sliced`

#### 描述

如果为 `true`，则此项被切片。

默认值：`false`

#### 类型

布尔值

---

### SymbolItem.symbol

`app.activeDocument.symbolItems[index].symbol`

#### 描述

用于创建此 `symbolItem` 的符号。

#### 类型

[Symbol](.././Symbol)

---

### SymbolItem.tags

`app.activeDocument.symbolItems[index].tags`

#### 描述

此项中包含的标签。

#### 类型

[Tags](.././Tags)；只读。

---

### SymbolItem.top

`app.activeDocument.symbolItems[index].top`

#### 描述

项顶部的位置（以点为单位，从页面底部测量）。

#### 类型

数字（双精度）

---

### SymbolItem.typename

`app.activeDocument.symbolItems[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

### SymbolItem.uRL

`app.activeDocument.symbolItems[index].uRL`

#### 描述

分配给此项的 Adobe URL 标签的值。

#### 类型

字符串

---

### SymbolItem.visibilityVariable

`app.activeDocument.symbolItems[index].visibilityVariable`

#### 描述

绑定到项的可见性变量。

#### 类型

变量

---

### SymbolItem.visibleBounds

`app.activeDocument.symbolItems[index].visibleBounds`

#### 描述

包括描边宽度的项的可见边界。

#### 类型

4个数字的数组；只读。

---

### SymbolItem.width

`app.activeDocument.symbolItems[index].width`

#### 描述

项的宽度。

#### 类型

数字（双精度）

---

### SymbolItem.wrapInside

`app.activeDocument.symbolItems[index].wrapInside`

#### 描述

如果为 `true`，则文本框架对象应在此对象内换行。

#### 类型

布尔值

---

### SymbolItem.wrapOffset

`app.activeDocument.symbolItems[index].wrapOffset`

#### 描述

在围绕此对象换行文本时使用的偏移量。

#### 类型

数字（双精度）

---

### SymbolItem.wrapped

`app.activeDocument.symbolItems[index].wrapped`

#### 描述

如果为 `true`，则围绕此对象换行文本框架对象（文本框架必须位于对象上方）。

#### 类型

布尔值

---

### SymbolItem.zOrderPosition

`app.activeDocument.symbolItems[index].zOrderPosition`

#### 描述

此项在包含它的组或图层（`parent`）中的堆叠顺序中的位置。

#### 类型

数字；只读。

---

## 方法

### SymbolItem.duplicate()

`app.activeDocument.symbolItems[index].duplicate([relativeObject][, insertionLocation])`

#### 描述

创建所选对象的副本。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象，可选 | 要复制到的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 插入元素的位置 |

#### 返回值

[SymbolItem](#symbolitem)

---

### SymbolItem.move()

`app.activeDocument.symbolItems[index].move(relativeObject, insertionLocation)`

#### 描述

移动对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象 | 要移动元素的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 移动元素到的位置 |

#### 返回值

[SymbolItem](#symbolitem)

---

### SymbolItem.remove()

`app.activeDocument.symbolItems[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。

---

### SymbolItem.resize()

```javascript
app.activeDocument.symbolItems[index].resize(
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

### SymbolItem.rotate()

```javascript
app.activeDocument.symbolItems[index].rotate(
 angle
 [,changePositions]
 [,changeFillPatterns]
 [,changeFillGradients]
 [,changeStrokePattern]
 [,rotateAbout]
)
```

#### 描述

相对于当前旋转角度旋转艺术项。

如果 `angle` 值为正，则对象逆时针旋转；如果值为负，则顺时针旋转。

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

### SymbolItem.transform()

```javascript
app.activeDocument.symbolItems[index].transform(
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
| `changePositions` | 布尔值，可选 | 是否改变位置 |
| `changeFillPatterns` | 布尔值，可选 | 是否改变填充图案 |
| `changeFillGradients` | 布尔值，可选 | 是否改变填充渐变 |
| `changeStrokePattern` | 布尔值，可选 | 是否改变描边图案 |
| `changeLineWidths` | 数字（双精度），可选 | 缩放线宽的量 |
| `transformAbout` | [Transformation](../scripting-constants#transformation)，可选 | 用作锚点的点，用于变换 |

#### 返回值

无。

---

### SymbolItem.translate()

```javascript
app.activeDocument.symbolItems[index].translate(
 [deltaX]
 [, deltaY]
 [, transformObjects]
 [, transformFillPatterns]
 [, transformFillGradients]
 [, transformStrokePatterns]
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

### SymbolItem.zOrder()

`app.activeDocument.symbolItems[index].zOrder(zOrderCmd)`

#### 描述

排列艺术项在组或图层（父对象）中的堆叠顺序中的位置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `zOrderCmd` | [ZOrderMethod](../scripting-constants#zordermethod) | 堆叠顺序排列方法 |

#### 返回值

无。

---
