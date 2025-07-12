---
title: GroupItem
---
# GroupItem

`app.activeDocument.groupItems[index]`

#### 描述

一组分组的艺术项目。组项目可以包含图层可以包含的所有相同页面项目，包括其他嵌套组。

当脚本请求文档中包含的路径时，文档中组或复合路径中包含的路径将作为单独路径返回。然而，当脚本请求包含组或复合路径的图层中的路径时，组或复合路径中包含的路径不会返回。

---

## 属性

### GroupItem.artworkKnockout

`app.activeDocument.groupItems[index].artworkKnockout`

#### 描述

此对象是否用于创建挖空，如果是，挖空的类型是什么。

#### 类型

[KnockoutState](../scripting-constants#knockoutstate)

---

### GroupItem.blendingMode

`app.activeDocument.groupItems[index].blendingMode`

#### 描述

合成对象时使用的混合模式。

#### 类型

[BlendModes](../scripting-constants#blendmodes)

---

### GroupItem.clipped

`app.activeDocument.groupItems[index].clipped`

#### 描述

如果为 `true`，则组被裁剪到剪贴蒙版。

#### 类型

布尔值。

---

### GroupItem.compoundPathItems

`app.activeDocument.groupItems[index].compoundPathItems`

#### 描述

此组中包含的复合路径项目。

#### 类型

[CompoundPathItems](.././CompoundPathItems); 只读。

---

### GroupItem.controlBounds

`app.activeDocument.groupItems[index].controlBounds`

#### 描述

对象的边界，包括描边宽度和控件。

#### 类型

4个数字的数组; 只读。

---

### GroupItem.editable

`app.activeDocument.groupItems[index].editable`

#### 描述

如果为 `true`，则此项目可编辑。

#### 类型

布尔值; 只读。

---

### GroupItem.geometricBounds

`app.activeDocument.groupItems[index].geometricBounds`

#### 描述

对象的边界，不包括描边宽度。

#### 类型

4个数字的数组; 只读。

---

### GroupItem.graphItems

`app.activeDocument.groupItems[index].graphItems`

#### 描述

此组中包含的图表项目。

#### 类型

[GraphItems](.././GraphItems); 只读。

---

### GroupItem.groupItems

`app.activeDocument.groupItems[index].groupItems`

#### 描述

此组中包含的组项目。

#### 类型

[GroupItems](.././GroupItems); 只读。

---

### GroupItem.height

`app.activeDocument.groupItems[index].height`

#### 描述

组项目的高度。

#### 类型

数字（双精度）。

---

### GroupItem.hidden

`app.activeDocument.groupItems[index].hidden`

#### 描述

如果为 `true`，则此组项目被隐藏。

#### 类型

布尔值。

---

### GroupItem.isIsolated

`app.activeDocument.groupItems[index].isIsolated`

#### 描述

如果为 `true`，则此对象被隔离。

#### 类型

布尔值。

---

### GroupItem.layer

`app.activeDocument.groupItems[index].layer`

#### 描述

此组项目所属的图层。

#### 类型

[Layer](.././Layer); 只读。

---

### GroupItem.left

`app.activeDocument.groupItems[index].left`

#### 描述

项目左侧的位置（以点为单位，从页面左侧测量）。

#### 类型

数字（双精度）。

---

### GroupItem.legacyTextItems

`app.activeDocument.groupItems[index].legacyTextItems`

#### 描述

组中的旧版文本项目。

#### 类型

[LegacyTextItems](.././LegacyTextItems); 只读。

---

### GroupItem.locked

`app.activeDocument.groupItems[index].locked`

#### 描述

如果为 `true`，则此组项目被锁定。

#### 类型

布尔值。

---

### GroupItem.meshItems

`app.activeDocument.groupItems[index].meshItems`

#### 描述

此组中包含的网格项目。

#### 类型

[MeshItems](.././MeshItems); 只读。

---

### GroupItem.name

`app.activeDocument.groupItems[index].name`

#### 描述

此组项目的名称。

#### 类型

字符串。

---

### GroupItem.nonNativeItems

`app.activeDocument.groupItems[index].nonNativeItems`

#### 描述

此组中的非本地艺术项目。

#### 类型

[NonNativeItems](.././NonNativeItems)

---

### GroupItem.note

`app.activeDocument.groupItems[index].note`

#### 描述

分配给此项目的注释。

#### 类型

字符串。

---

### GroupItem.opacity

`app.activeDocument.groupItems[index].opacity`

#### 描述

对象的不透明度。

范围：0.0 到 100.0。

#### 类型

数字（双精度）。

---

### GroupItem.pageItems

`app.activeDocument.groupItems[index].pageItems`

#### 描述

此组中包含的页面项目（所有艺术项目类）。

#### 类型

[PageItems](.././PageItems); 只读。

---

### GroupItem.parent

`app.activeDocument.groupItems[index].parent`

#### 描述

此对象的父对象。

#### 类型

[Layer](.././Layer) 或 [GroupItem](.././GroupItem); 只读。

---

### GroupItem.pathItems

`app.activeDocument.groupItems[index].pathItems`

#### 描述

此组中包含的路径项目。

#### 类型

[PathItems](.././PathItems); 只读。

---

### GroupItem.placedItems

`app.activeDocument.groupItems[index].placedItems`

#### 描述

此组中包含的置入项目。

#### 类型

[PlacedItems](.././PlacedItems); 只读。

---

### GroupItem.pluginItems

`app.activeDocument.groupItems[index].pluginItems`

#### 描述

此组中包含的插件项目。

#### 类型

[PluginItems](.././PluginItems); 只读。

---

### GroupItem.position

`app.activeDocument.groupItems[index].position`

#### 描述

`groupItem` 对象左上角的位置（以点为单位），格式为 [x, y]。不包括描边宽度。

#### 类型

2个数字的数组。

---

### GroupItem.rasterItems

`app.activeDocument.groupItems[index].rasterItems`

#### 描述

此组中包含的栅格项目。

#### 类型

[RasterItems](.././RasterItems); 只读。

---

### GroupItem.selected

`app.activeDocument.groupItems[index].selected`

#### 描述

如果为 `true`，则此组项目被选中。

#### 类型

布尔值。

---

### GroupItem.sliced

`app.activeDocument.groupItems[index].sliced`

#### 描述

如果为 `true`，则项目被切片。

默认值：`false`。

#### 类型

布尔值。

---

### GroupItem.symbolItems

`app.activeDocument.groupItems[index].symbolItems`

#### 描述

此组中的符号项目对象。

#### 类型

[SymbolItems](.././SymbolItems); 只读。

---

### GroupItem.tags

`app.activeDocument.groupItems[index].tags`

#### 描述

此组中包含的标签。

#### 类型

[Tags](.././Tags); 只读。

---

### GroupItem.textFrames

`app.activeDocument.groupItems[index].textFrames`

#### 描述

此组中包含的文本艺术项目。

#### 类型

[TextFrameItems](.././TextFrameItems); 只读。

---

### GroupItem.top

`app.activeDocument.groupItems[index].top`

#### 描述

项目顶部的位置（以点为单位，从页面底部测量）。

#### 类型

数字（双精度）。

---

### GroupItem.typename

`app.activeDocument.groupItems[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串; 只读。

---

### GroupItem.uRL

`app.activeDocument.groupItems[index].uRL`

#### 描述

分配给此组项目的 Adobe URL 标签的值。

#### 类型

字符串。

---

### GroupItem.visibilityVariable

`app.activeDocument.groupItems[index].visibilityVariable`

#### 描述

绑定到项目的可见性变量。

#### 类型

[Variable](.././Variable)

---

### GroupItem.visibleBounds

`app.activeDocument.groupItems[index].visibleBounds`

#### 描述

组项目的可见边界，包括描边宽度。

#### 类型

4个数字的数组; 只读。

---

### GroupItem.width

`app.activeDocument.groupItems[index].width`

#### 描述

组项目的宽度。

#### 类型

数字（双精度）。

---

### GroupItem.wrapInside

`app.activeDocument.groupItems[index].wrapInside`

#### 描述

如果为 `true`，则文本框架对象应在此对象内换行。

#### 类型

布尔值。

---

### GroupItem.wrapOffset

`app.activeDocument.groupItems[index].wrapOffset`

#### 描述

围绕此对象换行文本时使用的偏移量。

#### 类型

数字（双精度）。

---

### GroupItem.wrapped

`app.activeDocument.groupItems[index].wrapped`

#### 描述

如果为 `true`，则围绕此对象换行文本框架对象（文本框架必须位于对象上方）。

#### 类型

布尔值。

---

### GroupItem.zOrderPosition

`app.activeDocument.groupItems[index].zOrderPosition`

#### 描述

此组对象在包含组对象的组或图层（`parent`）中的堆叠顺序中的位置。

#### 类型

数字（长整型）。

---

## 方法

### GroupItem.duplicate()

```javascript
app.activeDocument.groupItems[index].duplicate(
 [relativeObject]
 [,insertionLocation]
)
```

#### 描述

创建选定对象的副本。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象, 可选 | 要复制到的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement), 可选 | 插入元素的位置 |

#### 返回

[GroupItem](.././GroupItem)

---

### GroupItem.move()

`app.activeDocument.groupItems[index].move(relativeObject, insertionLocation)`

#### 描述

移动对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象 | 要移动元素的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement), 可选 | 移动元素到的位置 |

#### 返回

[GroupItem](.././GroupItem)

---

### GroupItem.remove()

`app.activeDocument.groupItems[index].remove()`

#### 描述

删除此对象。

#### 返回

无。

---

### GroupItem.resize()

```javascript
app.activeDocument.groupItems[index].resize(
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
| `scaleX` | 数字（双精度） | 水平缩放因子 |
| `scaleY` | 数字（双精度） | 垂直缩放因子 |
| `changePositions` | 布尔值, 可选 | 是否影响艺术对象的位置和方向 |
| `changeFillPatterns` | 布尔值, 可选 | 是否变换填充图案 |
| `changeFillGradients` | 布尔值, 可选 | 是否变换填充渐变 |
| `changeStrokePattern` | 布尔值, 可选 | 是否变换描边图案 |
| `changeLineWidths` | 数字（双精度）, 可选 | 缩放线宽的量 |
| `scaleAbout` | [Transformation](../scripting-constants#transformation), 可选 | 用作锚点的点，以进行变换 |

#### 返回

无。

---

### GroupItem.rotate()

```javascript
app.activeDocument.groupItems[index].rotate(
 angle
 [,changePositions]
 [,changeFillPatterns]
 [,changeFillGradients]
 [,changeStrokePattern]
 [,rotateAbout]
)
```

#### 描述

相对于当前旋转旋转艺术项目。如果 `angle` 值为正，则对象逆时针旋转；如果值为负，则顺时针旋转。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `angle` | 数字（双精度） | 旋转元素的角度量 |
| `changePositions` | 布尔值, 可选 | 是否影响艺术对象的位置和方向 |
| `changeFillPatterns` | 布尔值, 可选 | 是否变换填充图案 |
| `changeFillGradients` | 布尔值, 可选 | 是否变换填充渐变 |
| `changeStrokePattern` | 布尔值, 可选 | 是否变换描边图案 |
| `rotateAbout` | [Transformation](../scripting-constants#transformation), 可选 | 用作锚点的点，以进行变换 |

#### 返回

无。

---

### GroupItem.transform()

```javascript
app.activeDocument.groupItems[index].transform(
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
| `changePositions` | 布尔值, 可选 | 是否更改位置 |
| `changeFillPatterns` | 布尔值, 可选 | 是否更改填充图案 |
| `changeFillGradients` | 布尔值, 可选 | 是否更改填充渐变 |
| `changeStrokePattern` | 布尔值, 可选 | 是否更改描边图案 |
| `changeLineWidths` | 数字（双精度）, 可选 | 缩放线宽的量 |
| `transformAbout` | [Transformation](../scripting-constants#transformation), 可选 | 用作锚点的点，以进行变换 |

#### 返回

无。

---

### GroupItem.translate()

```javascript
app.activeDocument.groupItems[index].translate(
 [deltaX]
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
| `deltaX` | 数字（双精度）, 可选 | 水平偏移量 |
| `deltaY` | 数字（双精度）, 可选 | 垂直偏移量 |
| `transformObjects` | 布尔值, 可选 | 是否变换对象 |
| `transformFillPatterns` | 布尔值, 可选 | 是否变换填充图案 |
| `transformFillGradients` | 布尔值, 可选 | 是否变换填充渐变 |
| `transformStrokePatterns` | 布尔值, 可选 | 是否变换描边图案 |

#### 返回

无。

---

### GroupItem.zOrder()

`app.activeDocument.groupItems[index].zOrder(zOrderCmd)`

#### 描述

排列艺术项目在组或图层（父对象）中的堆叠顺序中的位置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `zOrderCmd` | [ZOrderMethod](../scripting-constants#zordermethod) | 堆叠顺序排列方法 |

#### 返回

无。

---

## 示例

### 修改组中的所有对象

修改组中包含的所有对象非常容易。此示例演示了如何通过创建组来包含多个对象，从而简化对多个对象的操作。

```javascript
// 创建一个新的组项目，向组中添加一个新的路径项目（三角形形状），
// 然后向组中添加一个新的文本项目，并将文本的填充颜色设置为红色

if (app.documents.length > 0) {
 var triangleGroup = app.activeDocument.groupItems.add();

 // 创建一个三角形并添加文本，新艺术项目在组内创建
 var trianglePath = triangleGroup.pathItems.add();
 trianglePath.setEntirePath(Array(Array(100, 100), Array(300, 100), Array(200, Math.tan(1.0471975) * 100 + 100)));
 trianglePath.closed = true;
 trianglePath.stroked = true;
 trianglePath.filled = false;
 trianglePath.strokeWidth = 3;

 var captionText = triangleGroup.textFrames.add();
 captionText.position = Array(100, 150);
 captionText.textRange.size = 48;
 captionText.contents = "A triangle";

 var fillColor = new RGBColor();
 fillColor.red = 255;
 fillColor.green = 0;
 fillColor.blue = 0;
 captionText.characters.fillColor = fillColor;
}
```
