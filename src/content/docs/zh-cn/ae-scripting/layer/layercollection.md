---
title: 图层集合
---
# LayerCollection 对象

`app.project.item(index).layers`

#### 描述

LayerCollection 对象表示一组图层。属于 [CompItem 对象](../../item/compitem) 的 LayerCollection 包含合成中所有图层的图层对象。集合对象的方法允许你操作图层列表。

:::info
LayerCollection 是 [Collection 对象](../../other/collection) 的子类。除了下面列出的方法外，Collection 的所有方法和属性在处理 LayerCollection 时都可用。
:::

#### 示例

假设项目中的第一个项目是 CompItem，第二个项目是 AVItem，此示例显示 CompItem 的图层集合中的图层数量，基于项目中的 AVItem 添加一个新图层，然后显示新的图层数量。

```javascript
var firstComp = app.project.item(1);
var layerCollection = firstComp.layers;
alert("添加前的图层数量为 " + layerCollection.length);
var anAVItem = app.project.item(2);
layerCollection.add(anAVItem);
alert("添加后的图层数量为 " + layerCollection.length);
```

---

## 函数

### LayerCollection.add()

`app.project.item(index).layers.add(item[, duration])`

#### 描述

创建一个包含指定项目的新 [AVLayer 对象](../avlayer)，并将其添加到此集合中。新图层遵循“在合成开始时间创建图层”首选项。如果项目无法作为图层添加到此 CompItem，此方法会生成异常。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `item` | [AVItem 对象](../../item/avitem) | 要添加的项目。 |
| `duration` | 浮点值 | 可选。静止图层的长度（以秒为单位）。仅在项目包含静止素材时使用。对影片、序列或音频无效。 |
| | | 如果提供，则设置新图层的持续时间值。否则，根据用户首选项设置持续时间值。 |
| | | 默认情况下，这与包含的[CompItem](../../item/compitem) 的持续时间相同。要设置其他首选值，请打开 `编辑 > 首选项 > 导入`（Windows）或 `After Effects > 首选项 > 导入`（Mac OS），并在静止素材下指定选项。 |

#### 返回

[AVLayer 对象](../avlayer);

---

### LayerCollection.addBoxText()

`app.project.item(index).layers.addBoxText([width, height])`

#### 描述

创建一个新的段落（框）文本图层，并将 [TextDocument.lineOrientation](../../text/textdocument#textdocumentlineorientation) 设置为 `LineOrientation.HORIZONTAL`，然后将新的 [TextLayer 对象](../textlayer) 添加到此集合中。要创建点文本图层，请使用 [LayerCollection.addText()](#layercollectionaddtext) 方法。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `[width, height]` | 浮点值数组 | 新文本框的尺寸。 |

#### 返回

TextLayer 对象。

---

### LayerCollection.addCamera()

`app.project.item(index).layers.addCamera(name, centerPoint)`

#### 描述

创建一个新的摄像机图层，并将 [CameraLayer 对象](../cameralayer) 添加到此集合中。新图层遵循“在合成开始时间创建图层”首选项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 新图层的名称。 |
| `centerPoint` | 浮点值数组，`[x, y]` | 新摄像机的“兴趣点”属性的初始 X 和 Y 值。Z 值设置为 0。 |

#### 返回

[CameraLayer 对象](../cameralayer)。

---

### LayerCollection.addLight()

`app.project.item(index).layers.addLight(name, centerPoint)`

#### 描述

创建一个新的灯光图层，并将 [LightLayer 对象](../lightlayer) 添加到此集合中。新图层遵循“在合成开始时间创建图层”首选项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 新图层的名称。 |
| `centerPoint` | 浮点值数组，`[x, y]` | 新灯光的中心 |

#### 返回

[LightLayer 对象](../lightlayer)。

---

### LayerCollection.addNull()

`app.project.item(index).layers.addNull([duration])`

#### 描述

创建一个新的空对象图层，并将 [AVLayer 对象](../avlayer) 添加到此集合中。这与选择“图层 > 新建 > 空对象”相同。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `duration` | 浮点值 | 可选。静止图层的长度（以秒为单位）。如果提供，则设置新图层的 `duration` 值。否则，根据用户首选项设置 `duration` 值。 |
| | | 默认情况下，这与包含的[CompItem](../../item/compitem) 的持续时间相同。要设置其他首选值，请打开 `编辑 > 首选项 > 导入 (Windows)` 或 `After Effects > 首选项 > 导入 (Mac OS)`，并在静止素材下指定选项。 |

#### 返回

[AVLayer 对象](../avlayer)。

---

### LayerCollection.addShape()

`app.project.item(index).layers.addShape()`

#### 描述

为新的、空的形状图层创建一个新的 [ShapeLayer 对象](../shapelayer)。使用 ShapeLayer 对象添加属性，例如形状、填充、描边和路径滤镜。这与在“工具创建形状”模式下使用形状工具相同。工具会自动添加一个矢量组，其中包括工具选项中指定的填充和描边。

#### 参数

无。

#### 返回

ShapeLayer 对象。

---

### LayerCollection.addSolid()

`app.project.item(index).layers.addSolid(color, name, width, height, pixelAspect[, duration])`

#### 描述

创建一个新的 [SolidSource 对象](../../sources/solidsource)，并按照指定设置值；将新的 SolidSource 设置为新 [FootageItem 对象](../../item/footageitem) 的 `mainSource` 值，并将 FootageItem 添加到项目中。创建一个新的 [AVLayer 对象](../avlayer)，将新的 FootageItem 设置为其 `source`，并将图层添加到此集合中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `color` | 三个浮点值的数组 | 实体的颜色。三个数字，`[R, G, B]`，范围为 `[0.0..1.0]` |
| `name` | 字符串 | 实体的名称。 |
| `width` | 整数 | 实体的宽度（以像素为单位），范围为 `[4..30000]` |
| `height` | 整数 | 实体的高度（以像素为单位），范围为 `[4..30000]` |
| `pixelAspect` | 浮点值 | 实体的像素宽高比，范围为 `[0.01..100.0]` |
| `duration` | 浮点值 | 可选。静止图层的长度（以秒为单位）。如果提供，则设置新图层的 `duration` 值。否则，根据用户首选项设置 `duration` 值。 |
| | | 默认情况下，这与包含的[CompItem](../../item/compitem) 的持续时间相同。要设置其他首选值，请打开 `编辑 > 首选项 > 导入`（Windows）或 `After Effects > 首选项 > 导入`（MacOS），并在静止素材下指定选项。 |

#### 返回

[AVLayer 对象](../avlayer)。

---

### LayerCollection.addText()

`app.project.item(index).layers.addText([sourceText])`

#### 描述

创建一个新的点文本图层，并将 [TextDocument.lineOrientation](../../text/textdocument#textdocumentlineorientation) 设置为 `LineOrientation.HORIZONTAL`，然后将新的 [TextLayer 对象](../textlayer) 添加到此集合中。要创建段落（框）文本图层，请使用 [LayerCollection.addBoxText()](#layercollectionaddboxtext)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sourceText` | 字符串 | 可选。新图层的源文本，或包含新图层源文本的[TextDocument 对象](../../text/textdocument)。 |

#### 返回

[TextLayer 对象](../textlayer)。

---

### LayerCollection.addVerticalBoxText()

`app.project.item(index).layers.addVerticalBoxText([width, height])`

:::note
该方法添加于 After Effects 24.2
:::

#### 描述

创建一个新的段落（框）文本图层，并将 [TextDocument.lineOrientation](../../text/textdocument#textdocumentlineorientation) 设置为 `LineOrientation.VERTICAL_RIGHT_TO_LEFT`，然后将新的 [TextLayer 对象](../textlayer) 添加到此集合中。要创建点文本图层，请使用 [LayerCollection.addText()](#layercollectionaddtext) 或 [LayerCollection.addVerticalText()](#layercollectionaddverticaltext) 方法。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `[width, height]` | 浮点值数组 | 新文本框的尺寸。 |

#### 返回

TextLayer 对象。

---

### LayerCollection.addVerticalText()

`app.project.item(index).layers.addVerticalText([sourceText])`

:::note
该方法添加于 After Effects 24.2
:::

#### 描述

创建一个新的点文本图层，并将 [TextDocument.lineOrientation](../../text/textdocument#textdocumentlineorientation) 设置为 `LineOrientation.VERTICAL_RIGHT_TO_LEFT`，然后将新的 [TextLayer 对象](../textlayer) 添加到此集合中。要创建段落（框）文本图层，请使用 [LayerCollection.addBoxText()](#layercollectionaddboxtext) 或 [LayerCollection.addVerticalBoxText()](#layercollectionaddverticalboxtext) 方法。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sourceText` | 字符串 | 可选。新图层的源文本，或包含新图层源文本的[TextDocument 对象](../../text/textdocument)。 |

#### 返回

[TextLayer 对象](../textlayer)。

---

### LayerCollection.byName()

`app.project.item(index).layers.byName(name)`

#### 描述

返回在此集合中找到的具有指定名称的第一个（最顶层）图层，如果未找到具有给定名称的图层，则返回 `null`。

#### 参数

| `name` | 包含名称的字符串。 |

#### 返回

[Layer 对象](../layer) 或 `null`。

---

### LayerCollection.precompose()

`app.project.item(index).layers.precompose(layerIndicies, name[, moveAllAttributes])`

#### 描述

创建一个新的 [CompItem 对象](../../item/compitem)，并将指定的图层移动到其图层集合中。它从此集合中移除各个图层，并将新的 CompItem 添加到此集合中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `layerIndices` | 整数数组 | 要收集的图层的位置索引。 |
| `name` | 字符串 | 新[CompItem](../../item/compitem) 对象的名称。 |
| `moveAllAttributes` | 布尔值 | 可选。当为 `true`（默认值）时，保留新合成中的所有属性。这与在预合成对话框中选择“将所有属性移动到新合成中”选项相同。只有在 `layerIndices` 数组中只有一个索引时，才能将此设置为 `false`。这与在预合成对话框中选择“将所有属性保留在”选项相同。 |

#### 返回

[CompItem 对象](../../item/compitem)。
