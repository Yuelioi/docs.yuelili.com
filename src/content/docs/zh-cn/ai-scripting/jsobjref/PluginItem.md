---
title: PluginItem
---
# PluginItem

`app.activeDocument.pluginItems[index]`

#### 描述

由 Illustrator 插件创建的艺术项。

脚本可以使用 [PlacedItem.trace](../PlacedItem#placeditemtrace) 或 [RasterItem.trace()](../RasterItem#rasteritemtrace) 创建插件项，并且可以使用 `duplicate` 方法复制现有的插件项，但不能直接创建 `PluginItem` 对象。

---

## 属性

### PluginItem.artworkKnockout

`app.activeDocument.pluginItems[index].artworkKnockout`

#### 描述

此对象是否用于创建挖空效果，如果是，创建哪种挖空效果。

#### 类型

[KnockoutState](../scripting-constants#knockoutstate)

---

### PluginItem.blendingMode

`app.activeDocument.pluginItems[index].blendingMode`

#### 描述

合成对象时使用的混合模式。

#### 类型

[BlendModes](../scripting-constants#blendmodes)

---

### PluginItem.controlBounds

`app.activeDocument.pluginItems[index].controlBounds`

#### 描述

对象的边界，包括描边宽度和控件。

#### 类型

4个数字的数组；只读。

---

### PluginItem.editable

`app.activeDocument.pluginItems[index].editable`

#### 描述

如果为 `true`，则此项可编辑。

#### 类型

布尔值；只读。

---

### PluginItem.geometricBounds

`app.activeDocument.pluginItems[index].geometricBounds`

#### 描述

对象的边界，不包括描边宽度。

#### 类型

4个数字的数组；只读。

---

### PluginItem.height

`app.activeDocument.pluginItems[index].height`

#### 描述

组项的高度。

#### 类型

数字（双精度）

---

### PluginItem.hidden

`app.activeDocument.pluginItems[index].hidden`

#### 描述

如果为 `true`，则此项隐藏。

#### 类型

布尔值

---

### PluginItem.isIsolated

`app.activeDocument.pluginItems[index].isIsolated`

#### 描述

如果为 `true`，则此对象被隔离。

#### 类型

布尔值

---

### PluginItem.isTracing

`app.activeDocument.pluginItems[index].isTracing`

#### 描述

如果为 `true`，则此插件组表示通过追踪栅格艺术项创建的矢量艺术项。

`tracing` 属性包含与用于创建它的选项相关联的追踪对象。

#### 类型

布尔值

---

### PluginItem.layer

`app.activeDocument.pluginItems[index].layer`

#### 描述

此项所属的图层。

#### 类型

[Layer](.././Layer)；只读。

---

### PluginItem.left

`app.activeDocument.pluginItems[index].left`

#### 描述

项左侧的位置（以点为单位，从页面左侧测量）。

#### 类型

数字（双精度）

---

### PluginItem.locked

`app.activeDocument.pluginItems[index].locked`

#### 描述

如果为 `true`，则此项被锁定。

#### 类型

布尔值

---

### PluginItem.name

`app.activeDocument.pluginItems[index].name`

#### 描述

此项的名称。

#### 类型

字符串

---

### PluginItem.note

`app.activeDocument.pluginItems[index].note`

#### 描述

分配给此项的注释。

#### 类型

字符串

---

### PluginItem.opacity

`app.activeDocument.pluginItems[index].opacity`

#### 描述

对象的不透明度。

范围：0.0 到 100.0

#### 类型

数字（双精度）

---

### PluginItem.parent

`app.activeDocument.pluginItems[index].parent`

#### 描述

此对象的父对象。

#### 类型

[Layer](.././Layer) 或 [GroupItem](.././GroupItem)

---

### PluginItem.position

`app.activeDocument.pluginItems[index].position`

#### 描述

`pluginItem` 对象左上角的位置（以点为单位），格式为 [x, y]。不包括描边宽度。

#### 类型

2个数字的数组；只读。

---

### PluginItem.selected

`app.activeDocument.pluginItems[index].selected`

#### 描述

如果为 `true`，则此项被选中。

#### 类型

布尔值

---

### PluginItem.sliced

`app.activeDocument.pluginItems[index].sliced`

#### 描述

如果为 `true`，则此项被切片。

默认值：`false`

#### 类型

布尔值

---

### PluginItem.tags

`app.activeDocument.pluginItems[index].tags`

#### 描述

此项中包含的标签。

#### 类型

[Tags](.././Tags)；只读。

---

### PluginItem.top

`app.activeDocument.pluginItems[index].top`

#### 描述

项顶部的位置（以点为单位，从页面底部测量）。

#### 类型

数字（双精度）

---

### PluginItem.tracing

`app.activeDocument.pluginItems[index].tracing`

#### 描述

当此插件组通过追踪创建时（`isTracing` 为 `true`），与用于创建它的选项相关联的追踪对象。

#### 类型

[TracingObject](.././TracingObject)

---

### PluginItem.typename

`app.activeDocument.pluginItems[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

### PluginItem.uRL

`app.activeDocument.pluginItems[index].uRL`

#### 描述

分配给此项的 Adobe URL 标签的值。

#### 类型

字符串

---

### PluginItem.visibilityVariable

`app.activeDocument.pluginItems[index].visibilityVariable`

#### 描述

绑定到项的可见性变量。

#### 类型

[Variable](.././Variable)

---

### PluginItem.visibleBounds

`app.activeDocument.pluginItems[index].visibleBounds`

#### 描述

项的可见边界，包括描边宽度。

#### 类型

4个数字的数组；只读。

---

### PluginItem.width

`app.activeDocument.pluginItems[index].width`

#### 描述

项的宽度。

#### 类型

数字（双精度）

---

### PluginItem.wrapInside

`app.activeDocument.pluginItems[index].wrapInside`

#### 描述

如果为 `true`，则文本框架对象应在此对象内部换行。

#### 类型

布尔值

---

### PluginItem.wrapOffset

`app.activeDocument.pluginItems[index].wrapOffset`

#### 描述

在围绕此对象换行文本时使用的偏移量。

#### 类型

数字（双精度）

---

### PluginItem.wrapped

`app.activeDocument.pluginItems[index].wrapped`

#### 描述

如果为 `true`，则围绕此对象换行文本框架对象（文本框架必须位于对象上方）。

#### 类型

布尔值

---

### PluginItem.zOrderPosition

`app.activeDocument.pluginItems[index].zOrderPosition`

#### 描述

此项在包含它的组或图层（`parent`）中的堆叠顺序中的位置。

#### 类型

数字；只读。

---

## 方法

### PluginItem.duplicate()

`app.activeDocument.pluginItems[index].duplicate([relativeObject][, insertionLocation])`

#### 描述

创建选定对象的副本。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象，可选 | 要复制到的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 插入元素的位置 |

#### 返回

[PluginItem](#pluginitem)

---

### PluginItem.move()

`app.activeDocument.pluginItems[index].move(relativeObject, insertionLocation)`

#### 描述

移动对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象 | 要移动元素的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 移动元素到的位置 |

#### 返回

[PluginItem](#pluginitem)

---

### PluginItem.remove()

`app.activeDocument.pluginItems[index].remove()`

#### 描述

删除此对象。

#### 返回

无。

---

### PluginItem.resize()

```javascript
app.activeDocument.pluginItems[index].resize(
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
| `scaleAbout` | [Transformation](../scripting-constants#transformation)，可选 | 用作锚点的点，用于围绕其进行变换 |

#### 返回

无。

---

### PluginItem.rotate()

```javascript
app.activeDocument.pluginItems[index].rotate(
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
| `angle` | 数字（双精度） | 旋转元素的旋转角度 |
| `changePositions` | 布尔值，可选 | 是否影响艺术对象的位置和方向 |
| `changeFillPatterns` | 布尔值，可选 | 是否变换填充图案 |
| `changeFillGradients` | 布尔值，可选 | 是否变换填充渐变 |
| `changeStrokePattern` | 布尔值，可选 | 是否变换描边图案 |
| `rotateAbout` | [Transformation](../scripting-constants#transformation)，可选 | 用作锚点的点，用于围绕其进行变换 |

#### 返回

无。

---

### PluginItem.transform()

```javascript
app.activeDocument.pluginItems[index].transform(
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
| `transformAbout` | [Transformation](../scripting-constants#transformation)，可选 | 用作锚点的点，用于围绕其进行变换 |

#### 返回

无。

---

### PluginItem.translate()

```javascript
app.activeDocument.pluginItems[index].translate(
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

#### 返回

无。

---

### PluginItem.zOrder()

`app.activeDocument.pluginItems[index].zOrder(zOrderCmd)`

#### 描述

在组或图层（父对象）的堆叠顺序中排列艺术项的位置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `zOrderCmd` | [ZOrderMethod](../scripting-constants#zordermethod) | 堆叠顺序排列方法 |

#### 返回

无。

---

## 示例

### 复制插件项

```javascript
// 通过复制现有的插件艺术项创建新的插件艺术
if (app.documents.length > 0 && app.activeDocument.pluginItems.length > 0) {
 var doc = app.activeDocument;
 var pluginArt = doc.pluginItems[0];
 pluginArt.duplicate(pluginArt.parent, ElementPlacement.PLACEATBEGINNING);
}
```
