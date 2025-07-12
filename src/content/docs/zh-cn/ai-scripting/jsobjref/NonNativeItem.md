---
title: NonNativeItem
---
# NonNativeItem

`nonNativeItems[index]`

#### 描述

一个非原生的艺术作品项。

---

## 属性

### NonNativeItem.artworkKnockout

`nonNativeItems[index].artworkKnockout`

#### 描述

此对象是否用于创建挖空效果，如果是，是什么类型的挖空。

#### 类型

[KnockoutState](../scripting-constants#knockoutstate)

---

### NonNativeItem.blendingMode

`nonNativeItems[index].blendingMode`

#### 描述

合成对象时使用的混合模式。

#### 类型

[BlendModes](../scripting-constants#blendmodes)

---

### NonNativeItem.controlBounds

`nonNativeItems[index].controlBounds`

#### 描述

对象的边界，包括描边宽度和控件。

#### 类型

4个数字的数组；只读。

---

### NonNativeItem.editable

`nonNativeItems[index].editable`

#### 描述

如果为 `true`，则此项可编辑。

#### 类型

布尔值；只读。

---

### NonNativeItem.geometricBounds

`nonNativeItems[index].geometricBounds`

#### 描述

对象的边界，不包括描边宽度。

#### 类型

4个数字的数组；只读。

---

### NonNativeItem.height

`nonNativeItems[index].height`

#### 描述

组项的高度。

#### 类型

数字（双精度）。

---

### NonNativeItem.hidden

`nonNativeItems[index].hidden`

#### 描述

如果为 `true`，则此项隐藏。

#### 类型

布尔值。

---

### NonNativeItem.isIsolated

`nonNativeItems[index].isIsolated`

#### 描述

如果为 `true`，则此对象是隔离的。

#### 类型

布尔值。

---

### NonNativeItem.layer

`nonNativeItems[index].layer`

#### 描述

此项所属的图层。

#### 类型

[Layer](.././Layer)；只读。

---

### NonNativeItem.left

`nonNativeItems[index].left`

#### 描述

项左侧的位置（以点为单位，从页面左侧测量）。

#### 类型

数字（双精度）。

---

### NonNativeItem.locked

`nonNativeItems[index].locked`

#### 描述

如果为 `true`，则此项被锁定。

#### 类型

布尔值。

---

### NonNativeItem.name

`nonNativeItems[index].name`

#### 描述

此项的名称。

#### 类型

字符串。

---

### NonNativeItem.note

`nonNativeItems[index].note`

#### 描述

分配给此项的注释。

#### 类型

字符串。

---

### NonNativeItem.opacity

`nonNativeItems[index].opacity`

#### 描述

对象的不透明度。

范围：0.0 到 100.0。

#### 类型

数字（双精度）。

---

### NonNativeItem.parent

`nonNativeItems[index].parent`

#### 描述

此对象的父对象。

#### 类型

[Document](.././Document)、[Layer](.././Layer) 或 [GroupItem](.././GroupItem)；只读。

---

### NonNativeItem.position

`nonNativeItems[index].position`

#### 描述

`NonNativeItems[index]` 对象左上角的位置（以点为单位），格式为 [x, y]。不包括描边宽度。

#### 类型

2个数字的数组。

---

### NonNativeItem.selected

`nonNativeItems[index].selected`

#### 描述

如果为 `true`，则此项被选中。

#### 类型

布尔值。

---

### NonNativeItem.sliced

`nonNativeItems[index].sliced`

#### 描述

如果为 `true`，则此项被切片。

默认值：`false`。

#### 类型

布尔值。

---

### NonNativeItem.tags

`nonNativeItems[index].tags`

#### 描述

此项中包含的标签。

#### 类型

[Tags](.././Tags)；只读。

---

### NonNativeItem.top

`nonNativeItems[index].top`

#### 描述

项顶部的位置（以点为单位，从页面底部测量）。

#### 类型

数字（双精度）。

---

### NonNativeItem.typename

`nonNativeItems[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

### NonNativeItem.uRL

`nonNativeItems[index].uRL`

#### 描述

分配给此项的 Adobe URL 标签的值。

#### 类型

字符串。

---

### NonNativeItem.visibilityVariable

`nonNativeItems[index].visibilityVariable`

#### 描述

绑定到项的可见性变量。

#### 类型

[Variable](.././Variable)

---

### NonNativeItem.visibleBounds

`nonNativeItems[index].visibleBounds`

#### 描述

项的可见边界，包括描边宽度。

#### 类型

4个数字的数组；只读。

---

### NonNativeItem.width

`nonNativeItems[index].width`

#### 描述

项的宽度。

#### 类型

数字（双精度）。

---

### NonNativeItem.wrapInside

`nonNativeItems[index].wrapInside`

#### 描述

如果为 `true`，则非原生项对象应包裹在此对象内。

#### 类型

布尔值。

---

### NonNativeItem.wrapOffset

`nonNativeItems[index].wrapOffset`

#### 描述

环绕此对象的文本时要使用的偏移量。

#### 类型

数字（双精度）。

---

### NonNativeItem.wrapped

`nonNativeItems[index].wrapped`

#### 描述

如果为 `true`，则环绕此对象包裹非原生项对象（非原生项对象必须位于对象上方）。

#### 类型

布尔值。

---

### NonNativeItem.zOrderPosition

`nonNativeItems[index].zOrderPosition`

#### 描述

此项在包含它的组或图层（`parent`）中的堆叠顺序中的位置。

#### 类型

数字；只读。

---

## 方法

### NonNativeItem.duplicate()

`nonNativeItems[index].duplicate([relativeObject]
[,insertionLocation])`

#### 描述

创建所选对象的副本。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象，可选 | 要复制到的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 插入元素的位置 |

#### 返回值

[NonNativeItem](#nonnativeitem)

---

### NonNativeItem.move()

`nonNativeItems[index].move(relativeObject, insertionLocation)`

#### 描述

移动对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象 | 要移动元素的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 移动元素到的位置 |

#### 返回值

[NonNativeItem](#nonnativeitem)

---

### NonNativeItem.remove()

`nonNativeItems[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。

---

### NonNativeItem.removeAll()

`nonNativeItems[index].removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无。

---

### NonNativeItem.resize()

```javascript
nonNativeItem.resize(
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

### NonNativeItem.rotate()

```javascript
nonNativeItem.rotate(
 angle
 [,changePositions]
 [,changeFillPatterns]
 [,changeFillGradients]
 [,changeStrokePattern]
 [,rotateAbout]
)
```

#### 描述

相对于当前旋转角度旋转艺术项。如果 `angle` 值为正，则对象逆时针旋转；如果值为负，则顺时针旋转。

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

### NonNativeItem.transform()

```javascript
nonNativeItem.transform(
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

### NonNativeItem.translate()

```javascript
nonNativeItem.translate(
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

### NonNativeItem.zOrder()

`nonNativeItems[index].zOrder(zOrderCmd)`

#### 描述

在组或图层（父对象）的堆叠顺序中排列艺术项的位置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `zOrderCmd` | [ZOrderMethod](../scripting-constants#zordermethod) | 堆叠顺序排列方法 |

#### 返回值

无。

---
