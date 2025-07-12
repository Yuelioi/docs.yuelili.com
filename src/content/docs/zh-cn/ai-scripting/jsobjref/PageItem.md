---
title: PageItem
---
# PageItem

`app.activeDocument.pageItems[index]`

#### 描述

任何艺术项目。文档中的每个艺术项目和组都是一个页面项目。您可以将页面项目称为文档、图层或组项目的元素。

`PageItem` 类使您可以完全访问 Illustrator 文档中包含的每个艺术项目。`PageItem` 类是文档中所有艺术对象的超类。[CompoundPathItem](.././CompoundPathItem)、[GroupItem](.././GroupItem)、[MeshItem](.././MeshItem)、[PathItem](.././PathItem)、[PlacedItem](.././PlacedItem)、[PluginItem](.././PluginItem)、[RasterItem](.././RasterItem) 和 [TextFrameItem](.././TextFrameItem) 类都从 `PageItem` 类继承了一组属性。

您不能直接创建 `PageItem`，必须创建特定的 `PageItem` 子类之一，例如 [PathItem](.././PathItem)。

---

## 属性

### PageItem.artworkKnockout

`app.activeDocument.pageItems[index].artworkKnockout`

#### 描述

此对象是否用于创建挖空效果。

#### 类型

[KnockoutState](../scripting-constants#knockoutstate)

---

### PageItem.blendingMode

`app.activeDocument.pageItems[index].blendingMode`

#### 描述

合成此对象时使用的模式。当对象的不透明度设置为小于 100.0（100%）时，该对象被视为已合成。

#### 类型

[BlendModes](../scripting-constants#blendmodes)

---

### PageItem.controlBounds

`app.activeDocument.pageItems[index].controlBounds`

#### 描述

对象的边界，包括描边宽度和控件。

#### 类型

Rect; 只读。

---

### PageItem.editable

`app.activeDocument.pageItems[index].editable`

#### 描述

如果为 `true`，则此页面项目可编辑。

#### 类型

Boolean; 只读。

---

### PageItem.geometricBounds

`app.activeDocument.pageItems[index].geometricBounds`

#### 描述

对象的边界，不包括描边宽度。

#### 类型

4 个数字的数组; 只读。

---

### PageItem.height

`app.activeDocument.pageItems[index].height`

#### 描述

页面项目的高度，根据几何边界计算。

范围：0.0 到 16348.0。

#### 类型

Number (double).

---

### PageItem.hidden

`app.activeDocument.pageItems[index].hidden`

#### 描述

如果为 `true`，则此页面项目已隐藏。

#### 类型

Boolean.

---

### PageItem.isIsolated

`app.activeDocument.pageItems[index].isIsolated`

#### 描述

如果为 `true`，则此对象已隔离。

#### 类型

Boolean.

---

### PageItem.layer

`app.activeDocument.pageItems[index].layer`

#### 描述

此页面项目所属的图层。

#### 类型

[Layer](.././Layer); 只读。

---

### PageItem.left

`app.activeDocument.pageItems[index].left`

#### 描述

艺术项目的左侧位置。

#### 类型

Number (double).

---

### PageItem.locked

`app.activeDocument.pageItems[index].locked`

#### 描述

如果为 `true`，则此页面项目已锁定。

#### 类型

Boolean.

---

### PageItem.name

`app.activeDocument.pageItems[index].name`

#### 描述

此页面项目的名称。

#### 类型

String.

---

### PageItem.note

`app.activeDocument.pageItems[index].note`

#### 描述

分配给此项目的注释。

#### 类型

String.

---

### PageItem.opacity

`app.activeDocument.pageItems[index].opacity`

#### 描述

此对象的不透明度，其中 100.0 表示完全不透明，0.0 表示完全透明。

#### 类型

Number (double).

---

### PageItem.parent

`app.activeDocument.pageItems[index].parent`

#### 描述

此对象的父对象。

#### 类型

Object; 只读。

---

### PageItem.pixelAligned

`app.activeDocument.pageItems[index].pixelAligned`

#### 描述

如果为 `true`，则此项目已对齐到像素网格。

#### 类型

Boolean.

---

### PageItem.position

`app.activeDocument.pageItems[index].position`

#### 描述

项目左上角的位置（以点为单位），格式为 {x, y}。不包括描边宽度。

#### 类型

2 个数字的数组。

---

### PageItem.selected

`app.activeDocument.pageItems[index].selected`

#### 描述

如果为 `true`，则此对象已选中。

#### 类型

Boolean.

---

### PageItem.sliced

`app.activeDocument.pageItems[index].sliced`

#### 描述

如果为 `true`，则保留切片。

#### 类型

Boolean.

---

### PageItem.tags

`app.activeDocument.pageItems[index].tags`

#### 描述

与此页面项目关联的标签集合。

#### 类型

[Tags](.././Tags)

---

### PageItem.top

`app.activeDocument.pageItems[index].top`

#### 描述

艺术项目的顶部位置。

#### 类型

Number (double).

---

### PageItem.typename

`app.activeDocument.pageItems[index].typename`

#### 描述

对象的类名。

#### 类型

String; 只读。

---

### PageItem.uRL

`app.activeDocument.pageItems[index].uRL`

#### 描述

分配给此页面项目的 Adobe URL 标签的值。

#### 类型

String.

---

### PageItem.uuid

`app.activeDocument.pageItems[index].uuid`

:::note
此功能在 Illustrator 24.0 (CC2020) 中添加。
:::

#### 描述

此页面项目的唯一标识符。

#### 类型

String; 只读。

---

### PageItem.visibilityVariable

`app.activeDocument.pageItems[index].visibilityVariable`

#### 描述

此页面项目路径绑定的可见性变量。

#### 类型

[Variable](.././Variable)

---

### PageItem.visibleBounds

`app.activeDocument.pageItems[index].visibleBounds`

#### 描述

对象的可见边界，包括插图中任何对象的描边宽度。

#### 类型

4 个数字的数组; 只读。

---

### PageItem.width

`app.activeDocument.pageItems[index].width`

#### 描述

页面项目的宽度，根据几何边界计算。

范围：0.0 到 16348.0。

#### 类型

Number (double).

---

### PageItem.wrapInside

`app.activeDocument.pageItems[index].wrapInside`

#### 描述

如果为 `true`，则文本框架对象应在此对象内换行。

#### 类型

Boolean.

---

### PageItem.wrapOffset

`app.activeDocument.pageItems[index].wrapOffset`

#### 描述

围绕此对象换行文本时使用的偏移量。

#### 类型

Number (double).

---

### PageItem.wrapped

`app.activeDocument.pageItems[index].wrapped`

#### 描述

如果为 `true`，则围绕此对象换行文本框架对象（文本框架必须位于对象上方）。

#### 类型

Boolean.

---

### PageItem.zOrderPosition

`app.activeDocument.pageItems[index].zOrderPosition`

#### 描述

艺术项目在其组或图层中的绘制顺序。

#### 类型

Number (long); 只读。

---

## 方法

### PageItem.bringInPerspective()

`app.activeDocument.pageItems[index].bringInPerspective(posX, posY, perspectiveGridPlane)`

#### 描述

将艺术对象放置在透视网格中的指定位置和网格平面上。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `posX` | Number | 放置艺术的 X 位置 |
| `posY` | Number | 放置艺术的 Y 位置 |
| `perspectiveGridPlane` | [PerspectiveGridPlaneType](../scripting-constants#perspectivegridplanetype) | 使用的透视网格平面类型 |

#### 返回值

返回。

---

### PageItem.resize()

```javascript
app.activeDocument.pageItems[index].resize(
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

缩放艺术项目，其中 `scaleX` 是水平缩放因子，`scaleY` 是垂直缩放因子。100.0 = 100%。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `scaleX` | Number (double) | 水平缩放因子 |
| `scaleY` | Number (double) | 垂直缩放因子 |
| `changePositions` | Boolean, 可选 | 是否影响艺术对象的位置和方向 |
| `changeFillPatterns` | Boolean, 可选 | 是否变换填充图案 |
| `changeFillGradients` | Boolean, 可选 | 是否变换填充渐变 |
| `changeStrokePattern` | Boolean, 可选 | 是否变换描边图案 |
| `changeLineWidths` | Number (double), 可选 | 缩放线宽的量 |
| `scaleAbout` | [Transformation](../scripting-constants#transformation), 可选 | 用作锚点的点，以进行变换 |

#### 返回值

无。

---

### PageItem.rotate()

```javascript
app.activeDocument.pageItems[index].rotate(
 angle
 [,changePositions]
 [,changeFillPatterns]
 [,changeFillGradients]
 [,changeStrokePattern]
 [,rotateAbout]
)
```

#### 描述

相对于当前旋转角度旋转艺术项目。如果 `angle` 值为正，则对象逆时针旋转；如果值为负，则顺时针旋转。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `angle` | Number (double) | 旋转元素的角度量 |
| `changePositions` | Boolean, 可选 | 是否影响艺术对象的位置和方向 |
| `changeFillPatterns` | Boolean, 可选 | 是否变换填充图案 |
| `changeFillGradients` | Boolean, 可选 | 是否变换填充渐变 |
| `changeStrokePattern` | Boolean, 可选 | 是否变换描边图案 |
| `rotateAbout` | [Transformation](../scripting-constants#transformation), 可选 | 用作锚点的点，以进行变换 |

#### 返回值

无。

---

### PageItem.transform()

```javascript
app.activeDocument.pageItems[index].transform(
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

通过应用变换矩阵来变换艺术项目。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `transformationMatrix` | [Matrix](.././Matrix) | 要应用的变换矩阵 |
| `changePositions` | Boolean, 可选 | 是否更改位置 |
| `changeFillPatterns` | Boolean, 可选 | 是否更改填充图案 |
| `changeFillGradients` | Boolean, 可选 | 是否更改填充渐变 |
| `changeStrokePattern` | Boolean, 可选 | 是否更改描边图案 |
| `changeLineWidths` | Number (double), 可选 | 缩放线宽的量 |
| `transformAbout` | [Transformation](../scripting-constants#transformation), 可选 | 用作锚点的点，以进行变换 |

#### 返回值

无。

---

### PageItem.translate()

```javascript
app.activeDocument.pageItems[index].translate(
 deltaX
 [,deltaY]
 [,transformObjects]
 [,transformFillPatterns]
 [,transformFillGradients]
 [,transformStrokePatterns]
)
```

#### 描述

相对于当前位置重新定位艺术项目，其中 `deltaX` 是水平偏移量，`deltaY` 是垂直偏移量。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `deltaX` | Number (double), 可选 | 水平偏移量 |
| `deltaY` | Number (double), 可选 | 垂直偏移量 |
| `transformObjects` | Boolean, 可选 | 是否变换对象 |
| `transformFillPatterns` | Boolean, 可选 | 是否变换填充图案 |
| `transformFillGradients` | Boolean, 可选 | 是否变换填充渐变 |
| `transformStrokePatterns` | Boolean, 可选 | 是否变换描边图案 |

#### 返回值

无。

---

### PageItem.zOrder()

`app.activeDocument.pageItems[index].zOrder(zOrderCmd)`

#### 描述

在组或图层（父对象）的堆叠顺序中排列艺术项目的位置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `zOrderCmd` | [ZOrderMethod](../scripting-constants#zordermethod) | 堆叠顺序排列方法 |

#### 返回值

无。

---
