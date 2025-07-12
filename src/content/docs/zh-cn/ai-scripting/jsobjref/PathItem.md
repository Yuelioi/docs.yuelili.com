---
title: PathItem
---
# PathItem

`app.activeDocument.pathItems[index]`

#### 描述

指定一个路径项，其中包含定义其几何形状的 [PathPoint](.././PathPoint) 对象。

`PathItem` 类提供了对 Illustrator 中路径的完全访问。

`setEntirePath` 方法提供了一种非常高效的方式来创建由直线组成的路径。

---

## 属性

### PathItem.area

`app.activeDocument.pathItems[index].area`

#### 描述

该路径的面积（以平方点为单位）。

如果面积为负，则路径是逆时针方向的。

自相交路径可能包含相互抵消的子区域，这使得即使路径有明显的面积，该值也可能为零。

#### 类型

Number (double)；只读。

---

### PathItem.artworkKnockout

`app.activeDocument.pathItems[index].artworkKnockout`

#### 描述

此对象是否用于创建挖空效果，如果是，挖空类型是什么。

#### 类型

[KnockoutState](../scripting-constants#knockoutstate)

---

### PathItem.blendingMode

`app.activeDocument.pathItems[index].blendingMode`

#### 描述

合成对象时使用的混合模式。

#### 类型

[BlendModes](../scripting-constants#blendmodes)

---

### PathItem.clipping

`app.activeDocument.pathItems[index].clipping`

#### 描述

如果为 `true`，此路径应作为剪切路径使用。

#### 类型

Boolean

---

### PathItem.closed

`app.activeDocument.pathItems[index].closed`

#### 描述

如果为 `true`，此路径是闭合的。

#### 类型

Boolean

---

### PathItem.controlBounds

`app.activeDocument.pathItems[index].controlBounds`

#### 描述

对象的边界，包括描边宽度和控件。

#### 类型

4 个数字的数组；只读。

---

### PathItem.editable

`app.activeDocument.pathItems[index].editable`

#### 描述

如果为 `true`，此项目是可编辑的。

#### 类型

Boolean；只读。

---

### PathItem.evenodd

`app.activeDocument.pathItems[index].evenodd`

#### 描述

如果为 `true`，应使用奇偶规则来确定“内部”。

#### 类型

Boolean

---

### PathItem.fillColor

`app.activeDocument.pathItems[index].fillColor`

#### 描述

路径的填充颜色。

#### 类型

[Color](.././Color)

---

### PathItem.filled

`app.activeDocument.pathItems[index].filled`

#### 描述

如果为 `true`，路径被填充。

#### 类型

Boolean

---

### PathItem.fillOverprint

`app.activeDocument.pathItems[index].fillOverprint`

#### 描述

如果为 `true`，填充对象下方的图稿应进行叠印。

#### 类型

Boolean

---

### PathItem.geometricBounds

`app.activeDocument.pathItems[index].geometricBounds`

#### 描述

对象的边界，不包括描边宽度。

#### 类型

4 个数字的数组；只读。

---

### PathItem.guides

`app.activeDocument.pathItems[index].guides`

#### 描述

如果为 `true`，此路径是参考线对象。

#### 类型

Boolean

---

### PathItem.height

`app.activeDocument.pathItems[index].height`

#### 描述

组项目的高度。

#### 类型

Number (double)

---

### PathItem.hidden

`app.activeDocument.pathItems[index].hidden`

#### 描述

如果为 `true`，此项目是隐藏的。

#### 类型

Boolean

---

### PathItem.isIsolated

`app.activeDocument.pathItems[index].isIsolated`

#### 描述

如果为 `true`，此对象是隔离的。

#### 类型

Boolean

---

### PathItem.layer

`app.activeDocument.pathItems[index].layer`

#### 描述

此项目所属的图层。

#### 类型

[Layer](.././Layer)；只读。

---

### PathItem.left

`app.activeDocument.pathItems[index].left`

#### 描述

项目左侧的位置（以点为单位，从页面左侧测量）。

#### 类型

Number (double)

---

### PathItem.length

`app.activeDocument.pathItems[index].length`

#### 描述

此路径的长度（以点为单位）。

#### 类型

Number (double)

---

### PathItem.locked

`app.activeDocument.pathItems[index].locked`

#### 描述

如果为 `true`，此项目是锁定的。

#### 类型

Boolean

---

### PathItem.name

`app.activeDocument.pathItems[index].name`

#### 描述

此项目的名称。

#### 类型

String

---

### PathItem.note

`app.activeDocument.pathItems[index].note`

#### 描述

分配给此项目的注释。

#### 类型

String

---

### PathItem.opacity

`app.activeDocument.pathItems[index].opacity`

#### 描述

对象的不透明度。

范围：0.0 到 100.0

#### 类型

Number (double)

---

### PathItem.parent

`app.activeDocument.pathItems[index].parent`

#### 描述

此对象的父对象。

#### 类型

[Layer](.././Layer) 或 [GroupItem](.././GroupItem)

---

### PathItem.pathPoints

`app.activeDocument.pathItems[index].pathPoints`

#### 描述

此路径项中包含的路径点。

#### 类型

[PathPoints](.././PathPoints)；只读。

---

### PathItem.pixelAligned

`app.activeDocument.pathItems[index].pixelAligned`

#### 描述

如果为 `true`，此项目对齐到像素网格。

#### 类型

Boolean

---

### PathItem.polarity

`app.activeDocument.pathItems[index].polarity`

#### 描述

路径的极性。

#### 类型

[PolarityValues](../scripting-constants#polarityvalues)

---

### PathItem.position

`app.activeDocument.pathItems[index].position`

#### 描述

`pluginItem` 对象左上角的位置（以点为单位），格式为 [x, y]。不包括描边宽度。

#### 类型

2 个数字的数组；只读。

---

### PathItem.resolution

`app.activeDocument.pathItems[index].resolution`

#### 描述

路径的分辨率（以每英寸点数 (dpi) 为单位）。

#### 类型

Number (double)

---

### PathItem.selected

`app.activeDocument.pathItems[index].selected`

#### 描述

如果为 `true`，此项目被选中。

#### 类型

Boolean

---

### PathItem.selectedPathPoints

`app.activeDocument.pathItems[index].selectedPathPoints`

#### 描述

路径中所有选中的路径点。

#### 类型

[PathPoints](.././PathPoints)；只读。

---

### PathItem.sliced

`app.activeDocument.pathItems[index].sliced`

#### 描述

如果为 `true`，项目被切片。

默认值：`false`

#### 类型

Boolean

---

### PathItem.strokeCap

`app.activeDocument.pathItems[index].strokeCap`

#### 描述

线帽的类型。

#### 类型

[StrokeCap](../scripting-constants#strokecap)

---

### PathItem.strokeColor

`app.activeDocument.pathItems[index].strokeColor`

#### 描述

路径的描边颜色。

#### 类型

[Color](.././Color)

---

### PathItem.stroked

`app.activeDocument.pathItems[index].stroked`

#### 描述

如果为 `true`，路径应描边。

#### 类型

Boolean

---

### PathItem.strokeDashes

`app.activeDocument.pathItems[index].strokeDashes`

#### 描述

虚线长度。设置为空对象 `{}` 表示实线。

#### 类型

Object

---

### PathItem.strokeDashOffset

`app.activeDocument.pathItems[index].strokeDashOffset`

#### 描述

虚线图案中默认开始的距离。

#### 类型

Number (double)

---

### PathItem.strokeJoin

`app.activeDocument.pathItems[index].strokeJoin`

#### 描述

路径的连接类型。

#### 类型

[StrokeJoin](../scripting-constants#strokejoin)

---

### PathItem.strokeMiterLimit

`app.activeDocument.pathItems[index].strokeMiterLimit`

#### 描述

当默认描边连接设置为斜接时，此属性指定何时将连接转换为斜切（方形）。默认的斜接限制为 4 表示当点的长度达到描边宽度的四倍时，连接将从斜接连接转换为斜切连接。值为 1 表示斜切连接。

范围：1 到 500。

默认值：4

#### 类型

Number (double)

---

### PathItem.strokeOverprint

`app.activeDocument.pathItems[index].strokeOverprint`

#### 描述

如果为 `true`，描边对象下方的图稿应进行叠印。

#### 类型

Boolean

---

### PathItem.strokeWidth

`app.activeDocument.pathItems[index].strokeWidth`

#### 描述

描边的宽度（以点为单位）。

#### 类型

Number (double)

---

### PathItem.tags

`app.activeDocument.pathItems[index].tags`

#### 描述

此项目中包含的标签。

#### 类型

[Tags](.././Tags)；只读。

---

### PathItem.top

`app.activeDocument.pathItems[index].top`

#### 描述

项目顶部的位置（以点为单位，从页面底部测量）。

#### 类型

Number (double)

---

### PathItem.typename

`app.activeDocument.pathItems[index].typename`

#### 描述

引用对象的类名。

#### 类型

String；只读。

---

### PathItem.uRL

`app.activeDocument.pathItems[index].uRL`

#### 描述

分配给此项目的 Adobe URL 标签的值。

#### 类型

String

---

### PathItem.visibilityVariable

`app.activeDocument.pathItems[index].visibilityVariable`

#### 描述

绑定到项目的可见性变量。

#### 类型

[Variable](.././Variable)

---

### PathItem.visibleBounds

`app.activeDocument.pathItems[index].visibleBounds`

#### 描述

项目的可见边界，包括描边宽度。

#### 类型

4 个数字的数组；只读。

---

### PathItem.width

`app.activeDocument.pathItems[index].width`

#### 描述

项目的宽度。

#### 类型

Number (double)

---

### PathItem.wrapInside

`app.activeDocument.pathItems[index].wrapInside`

#### 描述

如果为 `true`，文本框架对象应在此对象内部换行。

#### 类型

Boolean

---

### PathItem.wrapOffset

`app.activeDocument.pathItems[index].wrapOffset`

#### 描述

围绕此对象换行文本时使用的偏移量。

#### 类型

Number (double)

---

### PathItem.wrapped

`app.activeDocument.pathItems[index].wrapped`

#### 描述

如果为 `true`，围绕此对象换行文本框架对象（文本框架必须位于对象上方）。

#### 类型

Boolean

---

### PathItem.zOrderPosition

`app.activeDocument.pathItems[index].zOrderPosition`

#### 描述

此项目在包含该项目的组或图层（`parent`）中的堆叠顺序中的位置。

#### 类型

Number；只读。

---

## 方法

### PathItem.duplicate()

`app.activeDocument.pathItems[index].duplicate([relativeObject][, insertionLocation])`

#### 描述

创建所选对象的副本。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | Object, 可选 | 要复制到的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement), 可选 | 插入元素的位置 |

#### 返回值

[PathItem](#pathitem)

---

### PathItem.move()

`app.activeDocument.pathItems[index].move(relativeObject, insertionLocation)`

#### 描述

移动对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | Object | 要移动元素的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement), 可选 | 移动元素到的位置 |

#### 返回值

[PathItem](#pathitem)

---

### PathItem.remove()

`app.activeDocument.pathItems[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。

---

### PathItem.resize()

```javascript
app.activeDocument.pathItems[index].resize(
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

缩放图稿项，其中 `scaleX` 是水平缩放因子，`scaleY` 是垂直缩放因子。100.0 = 100%。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `scaleX` | Number (double) | 水平缩放因子 |
| `scaleY` | Number (double) | 垂直缩放因子 |
| `changePositions` | Boolean, 可选 | 是否影响图稿对象的位置和方向 |
| `changeFillPatterns` | Boolean, 可选 | 是否变换填充图案 |
| `changeFillGradients` | Boolean, 可选 | 是否变换填充渐变 |
| `changeStrokePattern` | Boolean, 可选 | 是否变换描边图案 |
| `changeLineWidths` | Number (double), 可选 | 缩放线宽的量 |
| `scaleAbout` | [Transformation](../scripting-constants#transformation), 可选 | 用作锚点的点，用于变换 |

#### 返回值

无。

---

### PathItem.rotate()

```javascript
app.activeDocument.pathItems[index].rotate(
 angle
 [,changePositions]
 [,changeFillPatterns]
 [,changeFillGradients]
 [,changeStrokePattern]
 [,rotateAbout]
)
```

#### 描述

相对于当前旋转角度旋转图稿项。

如果 `angle` 值为正，则对象逆时针旋转；如果值为负，则顺时针旋转。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `angle` | Number (double) | 旋转元素的角度量 |
| `changePositions` | Boolean, 可选 | 是否影响图稿对象的位置和方向 |
| `changeFillPatterns` | Boolean, 可选 | 是否变换填充图案 |
| `changeFillGradients` | Boolean, 可选 | 是否变换填充渐变 |
| `changeStrokePattern` | Boolean, 可选 | 是否变换描边图案 |
| `rotateAbout` | [Transformation](../scripting-constants#transformation), 可选 | 用作锚点的点，用于变换 |

#### 返回值

无。

---

### PathItem.setEntirePath()

`app.activeDocument.pathItems[index].setEntirePath(pathPoints)`

#### 描述

使用 [x, y] 坐标对的数组设置路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `pathPoints` | [x, y] 坐标对的数组 | 要设置的点坐标数组 |

#### 返回值

无。

---

### PathItem.transform()

```javascript
app.activeDocument.pathItems[index].transform(
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

通过应用变换矩阵来变换图稿项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `transformationMatrix` | [Matrix](.././Matrix) | 要应用的变换矩阵 |
| `changePositions` | Boolean, 可选 | 是否更改位置 |
| `changeFillPatterns` | Boolean, 可选 | 是否更改填充图案 |
| `changeFillGradients` | Boolean, 可选 | 是否更改填充渐变 |
| `changeStrokePattern` | Boolean, 可选 | 是否更改描边图案 |
| `changeLineWidths` | Number (double), 可选 | 缩放线宽的量 |
| `transformAbout` | [Transformation](../scripting-constants#transformation), 可选 | 用作锚点的点，用于变换 |

#### 返回值

无。

---

### PathItem.translate()

```javascript
app.activeDocument.pathItems[index].translate(
 [deltaX]
 [, deltaY]
 [, transformObjects]
 [, transformFillPatterns]
 [, transformFillGradients]
 [, transformStrokePatterns]
)
```

#### 描述

相对于当前位置重新定位图稿项，其中 `deltaX` 是水平偏移量，`deltaY` 是垂直偏移量。

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

### PathItem.zOrder()

`app.activeDocument.pathItems[index].zOrder(zOrderCmd)`

#### 描述

在组或图层（父对象）的堆叠顺序中排列图稿项的位置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `zOrderCmd` | [ZOrderMethod](../scripting-constants#zordermethod) | 堆叠顺序排列方法 |

#### 返回值

无。

---

## 示例

### 设置路径中的颜色

```javascript
// 将路径项的描边和填充设置为随机选择的色板的颜色
if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
 var doc = app.activeDocument;

 for (var i = 0; i < doc.pathItems.length; i++) {
 var pathRef = doc.pathItems[i];
 pathRef.filled = true;
 pathRef.stroked = true;

 var swatchIndex = Math.round(Math.random() * (doc.swatches.length - 1));
 pathRef.fillColor = doc.swatches[swatchIndex].color;
 pathRef.strokeColor = doc.swatches[swatchIndex].color;
 }
}
```

---

### 用直线创造路径

```javascript
// 此脚本演示了 setEntirePath 方法的使用。
// 创建一个由10条直线组成的新开放路径
if (app.documents.length > 0) {
 var lineList = [];

 for (i = 0; i < lineList.length; i++) {
 lineList.push([i * 10 + 50, ((i - 5) ^ 2) * 5 + 50];
 }

 app.defaultStroked = true;
 newPath = app.activeDocument.pathItems.add();
 newPath.setEntirePath(lineList);
}
```
