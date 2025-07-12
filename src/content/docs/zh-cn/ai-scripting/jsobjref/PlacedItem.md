---
title: PlacedItem
---
# PlacedItem

`app.activeDocument.placedItems[index]`

#### 描述

作为链接文件放置在文档中的艺术作品项。

例如，使用 Illustrator 中的 `文件 > 置入` 命令或使用 `placedItems` 集合对象的 `add()` 方法创建的艺术对象就是一个置入项。

有关更多信息，请参阅 [PlacedItems](.././PlacedItems)。

---

## 属性

### PlacedItem.artworkKnockout

`app.activeDocument.placedItems[index].artworkKnockout`

#### 描述

此对象是否用于创建挖空效果，如果是，创建哪种类型的挖空效果。

#### 类型

[KnockoutState](../scripting-constants#knockoutstate)

---

### PlacedItem.blendingMode

`app.activeDocument.placedItems[index].blendingMode`

#### 描述

合成对象时使用的混合模式。

#### 类型

[BlendModes](../scripting-constants#blendmodes)

---

### PlacedItem.boundingBox

`app.activeDocument.placedItems[index].boundingBox`

#### 描述

无论变换如何，置入艺术项的尺寸。

#### 类型

4个数字的数组

---

### PlacedItem.contentVariable

`app.activeDocument.placedItems[index].contentVariable`

#### 描述

绑定到该项的内容变量。

#### 类型

[Variable](.././Variable)

---

### PlacedItem.controlBounds

`app.activeDocument.placedItems[index].controlBounds`

#### 描述

包括描边宽度和控件的对象的边界。

#### 类型

4个数字的数组；只读。

---

### PlacedItem.editable

`app.activeDocument.placedItems[index].editable`

#### 描述

如果为 `true`，则此项可编辑。

#### 类型

布尔值；只读。

---

### PlacedItem.file

`app.activeDocument.placedItems[index].file`

#### 描述

包含艺术品的文件。

#### 类型

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象；只读。

---

### PlacedItem.geometricBounds

`app.activeDocument.placedItems[index].geometricBounds`

#### 描述

不包括描边宽度的对象的边界。

#### 类型

4个数字的数组；只读。

---

### PlacedItem.height

`app.activeDocument.placedItems[index].height`

#### 描述

组项的高度。

#### 类型

数字（双精度）

---

### PlacedItem.hidden

`app.activeDocument.placedItems[index].hidden`

#### 描述

如果为 `true`，则此项隐藏。

#### 类型

布尔值

---

### PlacedItem.isIsolated

`app.activeDocument.placedItems[index].isIsolated`

#### 描述

如果为 `true`，则此对象被隔离。

#### 类型

布尔值

---

### PlacedItem.layer

`app.activeDocument.placedItems[index].layer`

#### 描述

此项所属的图层。

#### 类型

[Layer](.././Layer)；只读。

---

### PlacedItem.left

`app.activeDocument.placedItems[index].left`

#### 描述

项左侧的位置（以点为单位，从页面左侧测量）。

#### 类型

数字（双精度）

---

### PlacedItem.locked

`app.activeDocument.placedItems[index].locked`

#### 描述

如果为 `true`，则此项被锁定。

#### 类型

布尔值

---

### PlacedItem.matrix

`app.activeDocument.placedItems[index].matrix`

#### 描述

置入艺术品的变换矩阵。

#### 类型

[Matrix](.././Matrix)

---

### PlacedItem.name

`app.activeDocument.placedItems[index].name`

#### 描述

此项的名称。

#### 类型

字符串

---

### PlacedItem.note

`app.activeDocument.placedItems[index].note`

#### 描述

分配给此项的注释。

#### 类型

字符串

---

### PlacedItem.opacity

`app.activeDocument.placedItems[index].opacity`

#### 描述

对象的不透明度。

范围：0.0 到 100.0

#### 类型

数字（双精度）

---

### PlacedItem.parent

`app.activeDocument.placedItems[index].parent`

#### 描述

此对象的父对象。

#### 类型

[Layer](.././Layer) 或 [GroupItem](.././GroupItem)

---

### PlacedItem.position

`app.activeDocument.placedItems[index].position`

#### 描述

`pluginItem` 对象左上角的位置（以点为单位），格式为 [x, y]。不包括描边宽度。

#### 类型

2个数字的数组；只读。

---

### PlacedItem.selected

`app.activeDocument.placedItems[index].selected`

#### 描述

如果为 `true`，则此项被选中。

#### 类型

布尔值

---

### PlacedItem.sliced

`app.activeDocument.placedItems[index].sliced`

#### 描述

如果为 `true`，则此项被切片。

默认值：`false`

#### 类型

布尔值

---

### PlacedItem.tags

`app.activeDocument.placedItems[index].tags`

#### 描述

此项中包含的标签。

#### 类型

[Tags](.././Tags)；只读。

---

### PlacedItem.top

`app.activeDocument.placedItems[index].top`

#### 描述

项顶部的位置（以点为单位，从页面底部测量）。

#### 类型

数字（双精度）

---

### PlacedItem.typename

`app.activeDocument.placedItems[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

### PlacedItem.uRL

`app.activeDocument.placedItems[index].uRL`

#### 描述

分配给此项的 Adobe URL 标签的值。

#### 类型

字符串

---

### PlacedItem.visibilityVariable

`app.activeDocument.placedItems[index].visibilityVariable`

#### 描述

绑定到该项的可见性变量。

#### 类型

[Variable](.././Variable)

---

### PlacedItem.visibleBounds

`app.activeDocument.placedItems[index].visibleBounds`

#### 描述

包括描边宽度的项的可见边界。

#### 类型

4个数字的数组；只读。

---

### PlacedItem.width

`app.activeDocument.placedItems[index].width`

#### 描述

项的宽度。

#### 类型

数字（双精度）

---

### PlacedItem.wrapInside

`app.activeDocument.placedItems[index].wrapInside`

#### 描述

如果为 `true`，则文本框架对象应在此对象内部换行。

#### 类型

布尔值

---

### PlacedItem.wrapOffset

`app.activeDocument.placedItems[index].wrapOffset`

#### 描述

围绕此对象换行文本时使用的偏移量。

#### 类型

数字（双精度）

---

### PlacedItem.wrapped

`app.activeDocument.placedItems[index].wrapped`

#### 描述

如果为 `true`，则围绕此对象换行文本框架对象（文本框架必须位于对象上方）。

#### 类型

布尔值

---

### PlacedItem.zOrderPosition

`app.activeDocument.placedItems[index].zOrderPosition`

#### 描述

此项在包含该项的组或图层（`parent`）的堆叠顺序中的位置。

#### 类型

数字；只读。

---

## 方法

### PlacedItem.duplicate()

`app.activeDocument.placedItems[index].duplicate([relativeObject][, insertionLocation])`

#### 描述

创建选定对象的副本。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象，可选 | 要复制到的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 插入元素的位置 |

#### 返回值

[PlacedItem](#placeditem)

---

### PlacedItem.embed()

`app.activeDocument.placedItems[index].embed()`

#### 描述

将此艺术品嵌入文档中。根据需要将艺术品转换为艺术品项对象并删除此对象。

#### 返回值

无。

---

### PlacedItem.move()

`app.activeDocument.placedItems[index].move(relativeObject, insertionLocation)`

#### 描述

移动对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象 | 要移动元素的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 移动元素到的位置 |

#### 返回值

[PlacedItem](#placeditem)

---

### PlacedItem.relink()

`app.activeDocument.placedItems[index].relink(linkFile)`

#### 描述

重新链接艺术对象与其定义内容的文件。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `linkFile` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要重新链接的文件 |

#### 返回值

无。

---

### PlacedItem.remove()

`app.activeDocument.placedItems[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。

---

### PlacedItem.resize()

```javascript
app.activeDocument.placedItems[index].resize(
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
| `scaleAbout` | [Transformation](../scripting-constants#transformation)，可选 | 用作锚点的点，围绕该点进行变换 |

#### 返回值

无。

---

### PlacedItem.rotate()

```javascript
app.activeDocument.placedItems[index].rotate(
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
| `rotateAbout` | [Transformation](../scripting-constants#transformation)，可选 | 用作锚点的点，围绕该点进行变换 |

#### 返回值

无。

---

### PlacedItem.trace

`app.activeDocument.placedItems[index].trace()`

#### 描述

使用默认选项将此对象的栅格艺术转换为矢量艺术。

将栅格艺术重新排序为插件组的源艺术，并将其转换为一组填充和/或描边的路径，类似于原始图像。

创建并返回一个引用 [TracingObject](.././TracingObject) 对象的 [PluginItem](.././PluginItem) 对象。

#### 返回值

[PluginItem](.././PluginItem)

---

### PlacedItem.transform()

```javascript
app.activeDocument.placedItems[index].transform(
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
| `changePositions` | 布尔值，可选 | 是否更改位置 |
| `changeFillPatterns` | 布尔值，可选 | 是否更改填充图案 |
| `changeFillGradients` | 布尔值，可选 | 是否更改填充渐变 |
| `changeStrokePattern` | 布尔值，可选 | 是否更改描边图案 |
| `changeLineWidths` | 数字（双精度），可选 | 缩放线宽的量 |
| `transformAbout` | [Transformation](../scripting-constants#transformation)，可选 | 用作锚点的点，围绕该点进行变换 |

#### 返回值

无。

---

### PlacedItem.translate()

```javascript
app.activeDocument.placedItems[index].translate(
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

### PlacedItem.zOrder()

`app.activeDocument.placedItems[index].zOrder(zOrderCmd)`

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

### 更改置入项的选中状态

```javascript
// 切换所有置入项的选中状态。
if (app.documents.length > 0) {
 for (i = 0; i < app.activeDocument.placedItems.length; i++) {
 var placedArt = app.activeDocument.placedItems[i];
 placedArt.selected = !(placedArt.selected);
 }
}
```
