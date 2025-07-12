---
title: LegacyTextItem
---
# LegacyTextItem

`legacyTextItems[index]`

#### 描述

在 Illustrator CS（版本 10）或更早版本中创建的文本对象，在转换之前不可编辑。要转换旧版文本，请参阅 [LegacyTextItems.convertToNative()](../LegacyTextItems#legacytextitemsconverttonative)。

您可以查看、移动和打印旧版文本，但不能编辑它。选择旧版文本时，其边界框会显示一个“x”。

---

## 属性

### LegacyTextItem.artworkKnockout

`legacyTextItems[index].artworkKnockout`

#### 描述

此对象是否用于创建挖空效果，如果是，是哪种挖空效果。

#### 类型

[KnockoutState](../scripting-constants#knockoutstate)

---

### LegacyTextItem.blendingMode

`legacyTextItems[index].blendingMode`

#### 描述

合成对象时使用的混合模式。

#### 类型

[BlendModes](../scripting-constants#blendmodes)

---

### LegacyTextItem.controlBounds

`legacyTextItems[index].controlBounds`

#### 描述

包括描边宽度和控件的对象的边界。

#### 类型

4 个数字的数组；只读。

---

### LegacyTextItem.converted

`legacyTextItems[index].converted`

#### 描述

如果为 `true`，则旧版文本项已更新为原生文本框架项。

#### 类型

布尔值；只读。

---

### LegacyTextItem.editable

`legacyTextItems[index].editable`

#### 描述

如果为 `true`，则此项可编辑。

#### 类型

布尔值；只读。

---

### LegacyTextItem.geometricBounds

`legacyTextItems[index].geometricBounds`

#### 描述

不包括描边宽度的对象的边界。

#### 类型

4 个数字的数组；只读。

---

### LegacyTextItem.height

`legacyTextItems[index].height`

#### 描述

组项的高度。

#### 类型

数字（双精度）。

---

### LegacyTextItem.hidden

`legacyTextItems[index].hidden`

#### 描述

如果为 `true`，则此项隐藏。

#### 类型

布尔值。

---

### LegacyTextItem.isIsolated

`legacyTextItems[index].isIsolated`

#### 描述

如果为 `true`，则此对象已隔离。

#### 类型

布尔值。

---

### LegacyTextItem.layer

`legacyTextItems[index].layer`

#### 描述

此项所属的图层。

#### 类型

[Layer](.././Layer)；只读。

---

### LegacyTextItem.left

`legacyTextItems[index].left`

#### 描述

项左侧的位置（以点为单位，从页面左侧测量）。

#### 类型

数字（双精度）。

---

### LegacyTextItem.locked

`legacyTextItems[index].locked`

#### 描述

如果为 `true`，则此项已锁定。

#### 类型

布尔值。

---

### LegacyTextItem.name

`legacyTextItems[index].name`

#### 描述

此项的名称。

#### 类型

字符串。

---

### LegacyTextItem.note

`legacyTextItems[index].note`

#### 描述

分配给此项的注释。

#### 类型

字符串。

---

### LegacyTextItem.opacity

`legacyTextItems[index].opacity`

#### 描述

对象的不透明度。

范围：0.0 到 100.0。

#### 类型

数字（双精度）。

---

### LegacyTextItem.parent

`legacyTextItems[index].parent`

#### 描述

此对象的父对象。

#### 类型

[Layer](.././Layer) 或 [GroupItem](.././GroupItem)；只读。

---

### LegacyTextItem.position

`legacyTextItems[index].position`

#### 描述

`legacyTextItems[index]` 对象左上角的位置（以点为单位），格式为 [x, y]。不包括描边宽度。

#### 类型

2 个数字的数组。

---

### LegacyTextItem.selected

`legacyTextItems[index].selected`

#### 描述

如果为 `true`，则此项已选中。

#### 类型

布尔值。

---

### LegacyTextItem.sliced

`legacyTextItems[index].sliced`

#### 描述

如果为 `true`，则此项已切片。

默认值：`false`。

#### 类型

布尔值。

---

### LegacyTextItem.tags

`legacyTextItems[index].tags`

#### 描述

此项中包含的标签。

#### 类型

[Tags](.././Tags)；只读。

---

### LegacyTextItem.top

`legacyTextItems[index].top`

#### 描述

项顶部的位置（以点为单位，从页面底部测量）。

#### 类型

数字（双精度）。

---

### LegacyTextItem.typename

`legacyTextItems[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

### LegacyTextItem.uRL

`legacyTextItems[index].uRL`

#### 描述

分配给此项的 Adobe URL 标签的值。

#### 类型

字符串。

---

### LegacyTextItem.visibilityVariable

`legacyTextItems[index].visibilityVariable`

#### 描述

绑定到项的可见性变量。

#### 类型

[Variable](.././Variable)

---

### LegacyTextItem.visibleBounds

`legacyTextItems[index].visibleBounds`

#### 描述

包括描边宽度的项的可见边界。

#### 类型

4 个数字的数组；只读。

---

### LegacyTextItem.width

`legacyTextItems[index].width`

#### 描述

项的宽度。

#### 类型

数字（双精度）。

---

### LegacyTextItem.wrapInside

`legacyTextItems[index].wrapInside`

#### 描述

如果为 `true`，则文本框架对象应在此对象内换行。

#### 类型

布尔值。

---

### LegacyTextItem.wrapOffset

`legacyTextItems[index].wrapOffset`

#### 描述

在此对象周围换行文本时使用的偏移量。

#### 类型

数字（双精度）。

---

### LegacyTextItem.wrapped

`legacyTextItems[index].wrapped`

#### 描述

如果为 `true`，则在此对象周围换行文本框架对象（文本框架必须位于对象上方）。

#### 类型

布尔值。

---

### LegacyTextItem.zOrderPosition

`legacyTextItems[index].zOrderPosition`

#### 描述

此项在包含该项的组或图层（`parent`）的堆叠顺序中的位置。

#### 类型

数字（长整型）；只读。

---

## 方法

### LegacyTextItem.convertToNative()

`legacyTextItems[index].convertToNative()`

#### 描述

将旧版文本项转换为文本框架并删除原始旧版文本。

#### 返回值

[GroupItem](.././GroupItem)

---

### LegacyTextItem.duplicate()

```javascript
legacyTextItems[index].duplicate(
 [relativeObject]
 [,insertionLocation]
)
```

#### 描述

创建所选对象的副本。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象，可选 | 要复制到的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 插入元素的位置 |

#### 返回值

[LegacyTextItem](#legacytextitem)

---

### LegacyTextItem.move()

`legacyTextItems[index].move(relativeObject, insertionLocation)`

#### 描述

移动对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象 | 要在其中移动元素的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 移动元素到的位置 |

#### 返回值

[LegacyTextItem](#legacytextitem)

---

### LegacyTextItem.remove()

`legacyTextItems[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。

---

### LegacyTextItem.resize()

```javascript
legacyTextItem.resize(
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
| `scaleAbout` | [Transformation](../scripting-constants#transformation)，可选 | 用作锚点的点，以进行变换 |

#### 返回值

无。

---

### LegacyTextItem.rotate()

```javascript
legacyTextItem.rotate(
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
| `rotateAbout` | [Transformation](../scripting-constants#transformation)，可选 | 用作锚点的点，以进行变换 |

#### 返回值

无。

---

### LegacyTextItem.transform()

```javascript
legacyTextItem.transform(
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
| `changePositions` | 布尔值，可选 | 是否更改位置 |
| `changeFillPatterns` | 布尔值，可选 | 是否更改填充图案 |
| `changeFillGradients` | 布尔值，可选 | 是否更改填充渐变 |
| `changeStrokePattern` | 布尔值，可选 | 是否更改描边图案 |
| `changeLineWidths` | 数字（双精度），可选 | 缩放线宽的量 |
| `transformAbout` | [Transformation](../scripting-constants#transformation)，可选 | 用作锚点的点，以进行变换 |

#### 返回值

无。

---

### LegacyTextItem.translate()

```javascript
legacyTextItem.translate(
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

### LegacyTextItem.zOrder()

`legacyTextItems[index].zOrder(zOrderCmd)`

#### 描述

在组或图层（父对象）的堆叠顺序中排列艺术项的位置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `zOrderCmd` | [ZOrderMethod](../scripting-constants#zordermethod) | 堆叠顺序排列方法 |

#### 返回值

无。

---
