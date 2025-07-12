---
title: RasterItem
---
# RasterItem

`app.activeDocument.rasterItems[index]`

#### 描述

文档中的位图艺术项。脚本可以从外部文件创建光栅项，或通过使用 `duplicate` 方法复制现有的光栅项。

---

## 属性

### RasterItem.artworkKnockout

`app.activeDocument.rasterItems[index].artworkKnockout`

#### 描述

此对象是否用于创建挖空效果，如果是，挖空类型是什么。

#### 类型

[KnockoutState](../scripting-constants#knockoutstate)

---

### RasterItem.bitsPerChannel

`app.activeDocument.rasterItems[index].bitsPerChannel`

#### 描述

每个通道的位数。

#### 类型

Number (long); 只读。

---

### RasterItem.blendingMode

`app.activeDocument.rasterItems[index].blendingMode`

#### 描述

合成对象时使用的混合模式。

#### 类型

[BlendModes](../scripting-constants#blendmodes)

---

### RasterItem.boundingBox

`app.activeDocument.rasterItems[index].boundingBox`

#### 描述

无论变换如何，放置的艺术项的尺寸。

#### 类型

4个数字的数组

---

### RasterItem.channels

`app.activeDocument.rasterItems[index].channels`

#### 描述

通道的数量。

#### 类型

Number (long); 只读。

---

### RasterItem.colorants

`app.activeDocument.rasterItems[index].colorants`

#### 描述

光栅艺术中使用的着色剂。

#### 类型

字符串数组; 只读。

---

### RasterItem.colorizedGrayscale

`app.activeDocument.rasterItems[index].colorizedGrayscale`

#### 描述

如果为 `true`，光栅艺术是彩色化的灰度图像。

#### 类型

Boolean; 只读。

---

### RasterItem.contentVariable

`app.activeDocument.rasterItems[index].contentVariable`

#### 描述

绑定到该项的内容变量。

#### 类型

[Variable](.././Variable)

---

### RasterItem.controlBounds

`app.activeDocument.rasterItems[index].controlBounds`

#### 描述

对象的边界，包括描边宽度和控件。

#### 类型

4个数字的数组; 只读。

---

### RasterItem.editable

`app.activeDocument.rasterItems[index].editable`

#### 描述

如果为 `true`，此项可编辑。

#### 类型

Boolean; 只读。

---

### RasterItem.embedded

`app.activeDocument.rasterItems[index].embedded`

#### 描述

如果为 `true`，光栅艺术项嵌入在插图中。

#### 类型

Boolean

---

### RasterItem.file

`app.activeDocument.rasterItems[index].file`

#### 描述

包含艺术品的文件。

#### 类型

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象; 只读。

---

### RasterItem.geometricBounds

`app.activeDocument.rasterItems[index].geometricBounds`

#### 描述

对象的边界，不包括描边宽度。

#### 类型

4个数字的数组; 只读。

---

### RasterItem.height

`app.activeDocument.rasterItems[index].height`

#### 描述

组项的高度。

#### 类型

Number (double)

---

### RasterItem.hidden

`app.activeDocument.rasterItems[index].hidden`

#### 描述

如果为 `true`，此项隐藏。

#### 类型

Boolean

---

### RasterItem.imageColorSpace

`app.activeDocument.rasterItems[index].imageColorSpace`

#### 描述

光栅图像的颜色空间。

#### 类型

[ImageColorSpace](../scripting-constants#imagecolorspace); 只读。

---

### RasterItem.isIsolated

`app.activeDocument.rasterItems[index].isIsolated`

#### 描述

如果为 `true`，此对象被隔离。

#### 类型

Boolean

---

### RasterItem.layer

`app.activeDocument.rasterItems[index].layer`

#### 描述

此项所属的图层。

#### 类型

[Layer](.././Layer); 只读。

---

### RasterItem.left

`app.activeDocument.rasterItems[index].left`

#### 描述

项左侧的位置（以点为单位，从页面左侧测量）。

#### 类型

Number (double)

---

### RasterItem.locked

`app.activeDocument.rasterItems[index].locked`

#### 描述

如果为 `true`，此项被锁定。

#### 类型

Boolean

---

### RasterItem.matrix

`app.activeDocument.rasterItems[index].matrix`

#### 描述

放置艺术品的变换矩阵。

#### 类型

[Matrix](.././Matrix)

---

### RasterItem.name

`app.activeDocument.rasterItems[index].name`

#### 描述

此项的名称。

#### 类型

String

---

### RasterItem.note

`app.activeDocument.rasterItems[index].note`

#### 描述

分配给此项的注释。

#### 类型

String

---

### RasterItem.opacity

`app.activeDocument.rasterItems[index].opacity`

#### 描述

对象的不透明度。

范围：0.0 到 100.0

#### 类型

Number (double)

---

### RasterItem.overprint

`app.activeDocument.rasterItems[index].overprint`

#### 描述

如果为 `true`，光栅艺术叠印。

#### 类型

Boolean

---

### RasterItem.parent

`app.activeDocument.rasterItems[index].parent`

#### 描述

此对象的父对象。

#### 类型

[Layer](.././Layer) 或 [GroupItem](.././GroupItem)

---

### RasterItem.position

`app.activeDocument.rasterItems[index].position`

#### 描述

`rasterItem` 对象左上角的位置（以点为单位），格式为 [x, y]。不包括描边宽度。

#### 类型

2个数字的数组; 只读。

---

### RasterItem.selected

`app.activeDocument.rasterItems[index].selected`

#### 描述

如果为 `true`，此项被选中。

#### 类型

Boolean

---

### RasterItem.sliced

`app.activeDocument.rasterItems[index].sliced`

#### 描述

如果为 `true`，此项被切片。

默认值：`false`

#### 类型

Boolean

---

### RasterItem.status

`app.activeDocument.rasterItems[index].status`

#### 描述

链接图像的状态。

#### 类型

[RasterLinkState](../scripting-constants#rasterlinkstate)

---

### RasterItem.tags

`app.activeDocument.rasterItems[index].tags`

#### 描述

此项中包含的标签。

#### 类型

[Tags](.././Tags); 只读。

---

### RasterItem.top

`app.activeDocument.rasterItems[index].top`

#### 描述

项顶部的位置（以点为单位，从页面底部测量）。

#### 类型

Number (double)

---

### RasterItem.transparent

`app.activeDocument.rasterItems[index].transparent`

#### 描述

如果为 `true`，光栅艺术是透明的。

#### 类型

Boolean; 只读。

---

### RasterItem.typename

`app.activeDocument.rasterItems[index].typename`

#### 描述

引用对象的类名。

#### 类型

String; 只读。

---

### RasterItem.uRL

`app.activeDocument.rasterItems[index].uRL`

#### 描述

分配给此项的 Adobe URL 标签的值。

#### 类型

String

---

### RasterItem.visibilityVariable

`app.activeDocument.rasterItems[index].visibilityVariable`

#### 描述

绑定到项的可见性变量。

#### 类型

[Variable](.././Variable)

---

### RasterItem.visibleBounds

`app.activeDocument.rasterItems[index].visibleBounds`

#### 描述

项的可见边界，包括描边宽度。

#### 类型

4个数字的数组; 只读。

---

### RasterItem.width

`app.activeDocument.rasterItems[index].width`

#### 描述

项的宽度。

#### 类型

Number (double)

---

### RasterItem.wrapInside

`app.activeDocument.rasterItems[index].wrapInside`

#### 描述

如果为 `true`，文本框架对象应在此对象内换行。

#### 类型

Boolean

---

### RasterItem.wrapOffset

`app.activeDocument.rasterItems[index].wrapOffset`

#### 描述

围绕此对象换行文本时使用的偏移量。

#### 类型

Number (double)

---

### RasterItem.wrapped

`app.activeDocument.rasterItems[index].wrapped`

#### 描述

如果为 `true`，围绕此对象换行文本框架对象（文本框架必须位于对象上方）。

#### 类型

Boolean

---

### RasterItem.zOrderPosition

`app.activeDocument.rasterItems[index].zOrderPosition`

#### 描述

此项在包含该项的组或图层（`parent`）的堆叠顺序中的位置。

#### 类型

Number; 只读。

---

## 方法

### RasterItem.colorize()

`app.activeDocument.rasterItems[index].colorize(rasterizeColor)`

#### 描述

使用 CMYK 或 RGB 颜色对光栅项进行着色。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `rasterizeColor` | [Color](.././Color) | 用于着色的 CMYK 或 RGB 颜色 |

#### 返回值

无。

---

### RasterItem.duplicate()

`app.activeDocument.rasterItems[index].duplicate([relativeObject][, insertionLocation])`

#### 描述

创建选定对象的副本。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | Object, 可选 | 要复制到的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement), 可选 | 插入元素的位置 |

#### 返回值

[RasterItem](#rasteritem)

---

### RasterItem.move()

`app.activeDocument.rasterItems[index].move(relativeObject, insertionLocation)`

#### 描述

移动对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | Object | 要移动元素的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement), 可选 | 移动元素到的位置 |

#### 返回值

[RasterItem](#rasteritem)

---

### RasterItem.remove()

`app.activeDocument.rasterItems[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。

---

### RasterItem.resize()

```javascript
app.activeDocument.rasterItems[index].resize(
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
| `scaleX` | Number (double) | 水平缩放因子 |
| `scaleY` | Number (double) | 垂直缩放因子 |
| `changePositions` | Boolean, 可选 | 是否影响艺术对象的位置和方向 |
| `changeFillPatterns` | Boolean, 可选 | 是否变换填充图案 |
| `changeFillGradients` | Boolean, 可选 | 是否变换填充渐变 |
| `changeStrokePattern` | Boolean, 可选 | 是否变换描边图案 |
| `changeLineWidths` | Number (double), 可选 | 缩放线宽的量 |
| `scaleAbout` | [Transformation](../scripting-constants#transformation), 可选 | 用作锚点的点，用于变换 |

#### 返回值

无。

---

### RasterItem.rotate()

```javascript
app.activeDocument.rasterItems[index].rotate(
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
| `angle` | Number (double) | 旋转元素的角度量 |
| `changePositions` | Boolean, 可选 | 是否影响艺术对象的位置和方向 |
| `changeFillPatterns` | Boolean, 可选 | 是否变换填充图案 |
| `changeFillGradients` | Boolean, 可选 | 是否变换填充渐变 |
| `changeStrokePattern` | Boolean, 可选 | 是否变换描边图案 |
| `rotateAbout` | [Transformation](../scripting-constants#transformation), 可选 | 用作锚点的点，用于变换 |

#### 返回值

无。

---

### RasterItem.trace()

`app.activeDocument.rasterItems[index].trace()`

#### 描述

使用默认选项将此对象的光栅艺术转换为矢量艺术。

将光栅艺术重新排序为插件组的源艺术，并将其转换为一组填充和/或描边路径，这些路径类似于原始图像。

创建并返回一个引用 [TracingObject](.././TracingObject) 对象的 [PluginItem](.././PluginItem) 对象。

#### 返回值

[PluginItem](.././PluginItem)

---

### RasterItem.transform()

```javascript
app.activeDocument.rasterItems[index].transform(
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
| `changePositions` | Boolean, 可选 | 是否改变位置 |
| `changeFillPatterns` | Boolean, 可选 | 是否改变填充图案 |
| `changeFillGradients` | Boolean, 可选 | 是否改变填充渐变 |
| `changeStrokePattern` | Boolean, 可选 | 是否改变描边图案 |
| `changeLineWidths` | Number (double), 可选 | 缩放线宽的量 |
| `transformAbout` | [Transformation](../scripting-constants#transformation), 可选 | 用作锚点的点，用于变换 |

#### 返回值

无。

---

### RasterItem.translate()

```javascript
app.activeDocument.rasterItems[index].translate(
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
| `deltaX` | Number (double), 可选 | 水平偏移量 |
| `deltaY` | Number (double), 可选 | 垂直偏移量 |
| `transformObjects` | Boolean, 可选 | 是否变换对象 |
| `transformFillPatterns` | Boolean, 可选 | 是否变换填充图案 |
| `transformFillGradients` | Boolean, 可选 | 是否变换填充渐变 |
| `transformStrokePatterns` | Boolean, 可选 | 是否变换描边图案 |

#### 返回值

无。

---

### RasterItem.zOrder()

`app.activeDocument.rasterItems[index].zOrder(zOrderCmd)`

#### 描述

在组或图层（父对象）的堆叠顺序中排列艺术项的位置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `zOrderCmd` | [ZOrderMethod](../scripting-constants#zordermethod) | 堆叠顺序排列方法 |

#### 返回值

无。
