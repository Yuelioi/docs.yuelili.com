---
title: CompoundPathItem
---
# CompoundPathItem

`app.activeDocument.activeLayer.compoundPathItems[index]`

#### 描述

复合路径。这些对象由多个相交的路径组成，导致在组件路径重叠的地方形成透明的内部空间。`pathItems` 属性提供了访问组成复合路径的路径的途径。

当脚本请求文档中包含的路径时，文档中包含的复合路径或组中的路径将作为单独的路径返回。然而，当脚本请求包含复合路径或组的图层中的路径时，复合路径或组中包含的路径不会返回。

复合路径中的所有路径共享属性值。因此，如果您设置复合路径中任何一个路径的属性值，所有其他组件路径的属性都会更新为新值。

---

## 属性

### CompoundPathItem.artworkKnockout

`app.activeDocument.activeLayer.compoundPathItems[index].artworkKnockout`

#### 描述

此对象是否用于创建挖空效果，如果是，是哪种挖空效果。

#### 类型

[KnockoutState](../scripting-constants#knockoutstate)

---

### CompoundPathItem.blendingMode

`app.activeDocument.activeLayer.compoundPathItems[index].blendingMode`

#### 描述

合成对象时使用的模式。

#### 类型

[BlendModes](../scripting-constants#blendmodes)

---

### CompoundPathItem.controlBounds

`app.activeDocument.activeLayer.compoundPathItems[index].controlBounds`

#### 描述

对象的边界，包括描边宽度和控件。

#### 类型

4个数字的数组；只读。

---

### CompoundPathItem.editable

`app.activeDocument.activeLayer.compoundPathItems[index].editable`

#### 描述

如果为 `true`，则此项可编辑。

#### 类型

布尔值；只读。

---

### CompoundPathItem.geometricBounds

`app.activeDocument.activeLayer.compoundPathItems[index].geometricBounds`

#### 描述

对象的边界，不包括描边宽度。

#### 类型

4个数字的数组；只读。

---

### CompoundPathItem.height

`app.activeDocument.activeLayer.compoundPathItems[index].height`

#### 描述

复合路径项的高度，不包括描边宽度。

#### 类型

数字（双精度）。

---

### CompoundPathItem.hidden

`app.activeDocument.activeLayer.compoundPathItems[index].hidden`

#### 描述

如果为 `true`，则此复合路径项被隐藏。

#### 类型

布尔值。

---

### CompoundPathItem.isIsolated

`app.activeDocument.activeLayer.compoundPathItems[index].isIsolated`

#### 描述

如果为 `true`，则此对象被隔离。

#### 类型

布尔值。

---

### CompoundPathItem.layer

`app.activeDocument.activeLayer.compoundPathItems[index].layer`

#### 描述

此复合路径项所属的图层。

#### 类型

[Layer](.././Layer)；只读。

---

### CompoundPathItem.left

`app.activeDocument.activeLayer.compoundPathItems[index].left`

#### 描述

项的左侧位置（以点为单位，从页面左侧测量）。

#### 类型

数字（双精度）。

---

### CompoundPathItem.locked

`app.activeDocument.activeLayer.compoundPathItems[index].locked`

#### 描述

如果为 `true`，则此复合路径项被锁定。

#### 类型

布尔值。

---

### CompoundPathItem.name

`app.activeDocument.activeLayer.compoundPathItems[index].name`

#### 描述

此复合路径项的名称。

#### 类型

字符串。

---

### CompoundPathItem.note

`app.activeDocument.activeLayer.compoundPathItems[index].note`

#### 描述

分配给此项的注释。

#### 类型

字符串。

---

### CompoundPathItem.opacity

`app.activeDocument.activeLayer.compoundPathItems[index].opacity`

#### 描述

对象的不透明度。

范围：0.0 到 100.0

#### 类型

数字（双精度）。

---

### CompoundPathItem.parent

`app.activeDocument.activeLayer.compoundPathItems[index].parent`

#### 描述

此对象的父对象。

#### 类型

[Layer](.././Layer) 或 [GroupItem](.././GroupItem)；只读。

---

### CompoundPathItem.pathItems

`app.activeDocument.activeLayer.compoundPathItems[index].pathItems`

#### 描述

此复合路径中的路径艺术项。

#### 类型

[PathItems](.././PathItems)；只读。

---

### CompoundPathItem.position

`app.activeDocument.activeLayer.compoundPathItems[index].position`

#### 描述

`compoundPathItem` 对象左上角的位置（以点为单位），格式为 [x, y]。不包括描边宽度。

#### 类型

2个数字的数组。

---

### CompoundPathItem.selected

`app.activeDocument.activeLayer.compoundPathItems[index].selected`

#### 描述

如果为 `true`，则此复合路径项被选中。

#### 类型

布尔值。

---

### CompoundPathItem.sliced

`app.activeDocument.activeLayer.compoundPathItems[index].sliced`

#### 描述

如果为 `true`，则此项被切片。

默认值：`false`

#### 类型

布尔值。

---

### CompoundPathItem.tags

`app.activeDocument.activeLayer.compoundPathItems[index].tags`

#### 描述

此对象中包含的标签。

#### 类型

[Tags](.././Tags)；只读。

---

### CompoundPathItem.top

`app.activeDocument.activeLayer.compoundPathItems[index].top`

#### 描述

项的顶部位置（以点为单位，从页面底部测量）。

#### 类型

数字（双精度）。

---

### CompoundPathItem.typename

`app.activeDocument.activeLayer.compoundPathItems[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

### CompoundPathItem.uRL

`app.activeDocument.activeLayer.compoundPathItems[index].uRL`

#### 描述

分配给此复合路径项的 Adobe URL 标签的值。

#### 类型

字符串。

---

### CompoundPathItem.visibilityVariable

`app.activeDocument.activeLayer.compoundPathItems[index].visibilityVariable`

#### 描述

绑定到项的可见性变量。

#### 类型

变体。

---

### CompoundPathItem.visibleBounds

`app.activeDocument.activeLayer.compoundPathItems[index].visibleBounds`

#### 描述

复合路径项的可见边界，包括描边宽度。

#### 类型

4个数字的数组；只读。

---

### CompoundPathItem.width

`app.activeDocument.activeLayer.compoundPathItems[index].width`

#### 描述

复合路径项的宽度，不包括描边宽度。

#### 类型

数字（双精度）。

---

### CompoundPathItem.wrapInside

`app.activeDocument.activeLayer.compoundPathItems[index].wrapInside`

#### 描述

如果为 `true`，则文本框架对象应在此对象内部换行。

#### 类型

布尔值。

---

### CompoundPathItem.wrapOffset

`app.activeDocument.activeLayer.compoundPathItems[index].wrapOffset`

#### 描述

围绕此对象换行文本时使用的偏移量。

#### 类型

数字（双精度）。

---

### CompoundPathItem.wrapped

`app.activeDocument.activeLayer.compoundPathItems[index].wrapped`

#### 描述

如果为 `true`，则围绕此对象换行文本框架对象（文本框架必须位于对象上方）。

#### 类型

布尔值。

---

### CompoundPathItem.zOrderPosition

`app.activeDocument.activeLayer.compoundPathItems[index].zOrderPosition`

#### 描述

此艺术项在包含艺术项的组或图层（`Parent`）中的堆叠顺序中的位置。

#### 类型

数字（长整型）；只读。

---

## 方法

### CompoundPathItem.duplicate()

`app.activeDocument.activeLayer.compoundPathItems[index].duplicate([relativeObject][,insertionLocation])`

#### 描述

创建所选对象的副本。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象，可选 | 要复制到的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 插入元素的位置 |

#### 返回值

[CompoundPathItem](#compoundpathitem)

---

### CompoundPathItem.move()

`app.activeDocument.activeLayer.compoundPathItems[index].move(relativeObject, insertionLocation)`

#### 描述

移动对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象 | 要移动元素的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement)，可选 | 移动元素到的位置 |

#### 返回值

无。

---

### CompoundPathItem.remove()

`app.activeDocument.activeLayer.compoundPathItems[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。

---

### CompoundPathItem.resize()

```javascript
app.activeDocument.activeLayer.compoundPathItems[index].resize(
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

### CompoundPathItem.rotate()

```javascript
app.activeDocument.activeLayer.compoundPathItems[index].rotate(
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

### compoundPathItem.transform()

```javascript
app.activeDocument.activeLayer.compoundPathItems[index].transform(
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

### CompoundPathItem.translate()

```javascript
app.activeDocument.activeLayer.compoundPathItems[index].translate(
 deltaX
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

### CompoundPathItem.zOrder()

`app.activeDocument.activeLayer.compoundPathItems[index].zOrder(zOrderCmd)`

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

### 选择文档中的路径

```javascript
// 选择所有不属于复合路径的路径
if ( app.documents.length > 0 ) {
 var doc = app.activeDocument;
 var count = 0;
 if ( doc.pathItems.length > 0 ) {
 var thePaths = doc.pathItems;
 var numPaths = thePaths.length;
 for ( var i = 0; i < doc.pathItems.length; i++ ) {
 var pathArt = doc.pathItems[i];
 if ( pathArt.parent.typename != "compoundPathItem" ) {
 pathArt.selected = true;
 count++;
 }
 }
}
```

### 创建和修改复合路径项

```javascript
// 创建一个包含3个路径项的新复合路径项，
// 然后设置复合路径中所有项的描边宽度和颜色

if (app.documents.length > 0) {
 var doc = app.activeDocument;
 var newCompoundPath = doc.activeLayer.compoundPathItems.add();

 // 创建路径项
 var newPath = newCompoundPath.pathItems.add();
 newPath.setEntirePath(Array(Array(30, 50), Array(30, 100)));

 newPath = newCompoundPath.pathItems.add();
 newPath.setEntirePath(Array(Array(40, 100), Array(100, 100)));

 newPath = newCompoundPath.pathItems.add();
 newPath.setEntirePath(Array(Array(100, 110), Array(100, 300)));

 // 设置复合路径的描边和宽度属性
 newPath.stroked = true;
 newPath.strokeWidth = 3.5;
 newPath.strokeColor = app.activeDocument.swatches[3].color;
}
```
