---
title: layercollection
---
# LayerCollection object

`app.project.item(index).layers`

#### 描述

The LayerCollection object represents a set of layers. The LayerCollection belonging to a [CompItem object](../../item/compitem) contains all the layer objects for layers in the composition. The methods of the collection object allow you to manipulate the layer list.

:::info
LayerCollection is a subclass of [Collection object](../../other/collection). All methods and attributes of Collection, in addition to those listed below, are available when working with LayerCollection.
:::

#### 示例

Given that the first item in the project is a CompItem and the second item is an AVItem, this example shows the number of layers in the CompItem's layer collection, adds a new layer based on an AVItem in the project, then displays the new number of layers.

```javascript
var firstComp = app.project.item(1);
var layerCollection = firstComp.layers;
alert("number of layers before is " + layerCollection.length);
var anAVItem = app.project.item(2);
layerCollection.add(anAVItem);
alert("number of layers after is " + layerCollection.length);
```

---

## 函数

### LayerCollection.add()

`app.project.item(index).layers.add(item[, duration])`

#### 描述

Creates a new [AVLayer object](../avlayer) containing the specified item, and adds it to this collection. The new layer honors the "Create Layers at Composition Start Time" preference. This method generates an exception if the item cannot be added as a layer to this CompItem.

#### 参数

| 参数  |                类型                |                                                                                                                                描述                                                                                                                                |
|------------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `item`     | [AVItem object](../../item/avitem) | The item to be added.                                                                                                                                                                                                                                                     |
| `duration` | Floating-point value               | Optional. The length of a still layer in seconds. Used only if the item contains a piece of still footage. Has no effect on movies, sequences or audio.                                                                                                                   |
|            |                                    | If supplied, sets the duration value of the new layer. Otherwise, the duration value is set according to user preferences.                                                                                                                                                |
|            |                                    | By default, this is the same as the duration of the containing [CompItem](../../item/compitem). To set another preferred value, open `Edit > Preferences > Import` (Windows) or `After Effects > Preferences > Import` (Mac OS), and specify options under Still Footage. |

#### 返回

[AVLayer object](../avlayer);

---

### LayerCollection.addBoxText()

`app.project.item(index).layers.addBoxText([width, height])`

#### 描述

Creates a new paragraph (box) text layer with [TextDocument.lineOrientation](../text/textdocument.md#textdocumentlineorientation) set to `LineOrientation.HORIZONTAL` and adds the new [TextLayer object](../textlayer) to this collection. To create a point text layer, use the [LayerCollection.addText()](#layercollectionaddtext) method.

#### 参数

|     参数     |              类型              |             描述             |
| ----------------- | ------------------------------ | ----------------------------------- |
| `[width, height]` | Array of floating-point values | The dimensions of the new text box. |

#### 返回

TextLayer object.

---

### LayerCollection.addCamera()

`app.project.item(index).layers.addCamera(name, centerPoint)`

#### 描述

Creates a new camera layer and adds the [CameraLayer object](../cameralayer) to this collection. The new layer honors the "Create Layers at Composition Start Time" preference.

#### 参数

|   参数   |                   类型                   |                                             描述                                             |
| ------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `name`        | String                                   | The name of the new layer.                                                                          |
| `centerPoint` | Array of floating-point values, `[x, y]` | The initial X and Y values of the new camera's Point of Interest property. The z value is set to 0. |

#### 返回

[CameraLayer object](../cameralayer).

---

### LayerCollection.addLight()

`app.project.item(index).layers.addLight(name, centerPoint)`

#### 描述

Creates a new light layer and adds the [LightLayer object](../lightlayer) to this collection. The new layer honors the "Create Layers at Composition Start Time" preference.

#### 参数

|   参数   |                   类型                   |         描述         |
| ------------- | ---------------------------------------- | --------------------------- |
| `name`        | String                                   | The name of the new layer.  |
| `centerPoint` | Array of floating-point values, `[x, y]` | The center of the new light |

#### 返回

[LightLayer object](../lightlayer).

---

### LayerCollection.addNull()

`app.project.item(index).layers.addNull([duration])`

#### 描述

Creates a new null layer and adds the [AVLayer object](../avlayer) to this collection. This is the same as choosing Layer > New > Null Object.

#### 参数

| 参数  |         类型         |                                                                                                                                描述                                                                                                                                |
|------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `duration` | Floating-point value | Optional. The length of a still layer in seconds. If supplied, sets the `duration` value of the new layer. Otherwise, the `duration` value is set according to user preferences.                                                                                          |
|            |                      | By default, this is the same as the duration of the containing [CompItem](../../item/compitem). To set another preferred value, open `Edit > Preferences > Import (Windows)` or `After Effects > Preferences > Import (Mac OS)`, and specify options under Still Footage. |

#### 返回

[AVLayer object](../avlayer).

---

### LayerCollection.addShape()

`app.project.item(index).layers.addShape()`

#### 描述

Creates a new [ShapeLayer object](../shapelayer) for a new, empty Shape layer. Use the ShapeLayer object to add properties, such as shape, fill, stroke, and path filters. This is the same as using a shape tool in "Tool Creates Shape" mode. Tools automatically add a vector group that includes Fill and Stroke as specified in the tool options.

#### 参数

None.

#### 返回

ShapeLayer object.

---

### LayerCollection.addSolid()

`app.project.item(index).layers.addSolid(color, name, width, height, pixelAspect[, duration])`

#### 描述

Creates a new [SolidSource object](../../sources/solidsource), with values set as specified; sets the new SolidSource as the `mainSource` value of a new [FootageItem object](../../item/footageitem), and adds the FootageItem to the project. Creates a new [AVLayer object](../avlayer), sets the new Footage Item as its `source`, and adds the layer to this collection.

#### 参数

|   参数   |                 类型                 |                                                                                                                               描述                                                                                                                                |
|---------------|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `color`       | Array of three floating-point values | The color of the solid. Three numbers, `[R, G, B]`, 范围为 `[0.0..1.0]`                                                                                                                                                                                            |
| `name`        | String                               | The name of the solid.                                                                                                                                                                                                                                                   |
| `width`       | Integer                              | The width of the solid in pixels, 范围为 `[4..30000]`                                                                                                                                                                                                              |
| `height`      | Integer                              | The height of the solid in pixels, 范围为 `[4..30000]`                                                                                                                                                                                                             |
| `pixelAspect` | Floating-point value                 | The pixel aspect ratio of the solid, 范围为 `[0.01..100.0]`                                                                                                                                                                                                        |
| `duration`    | Floating-point value                 | Optional. The length of a still layer in seconds. If supplied, sets the `duration` value of the new layer. Otherwise, the `duration` value is set according to user preferences.                                                                                         |
|               |                                      | By default, this is the same as the duration of the containing [CompItem](../../item/compitem). To set another preferred value, open `Edit > Preferences > Import` (Windows) or `After Effects > Preferences > Import` (MacOS), and specify options under Still Footage. |

#### 返回

[AVLayer object](../avlayer).

---

### LayerCollection.addText()

`app.project.item(index).layers.addText([sourceText])`

#### 描述

Creates a new point text layer with [TextDocument.lineOrientation](../text/textdocument.md#textdocumentlineorientation) set to `LineOrientation.HORIZONTAL` and adds the new [TextLayer object](../textlayer) to this collection. To create a paragraph (box) text layer, use [LayerCollection.addBoxText()](#layercollectionaddboxtext).

#### 参数

|  参数   |  类型  |                                                                 描述                                                                  |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceText` | String | Optional. The source text of the new layer, or a [TextDocument object](../../text/textdocument) containing the source text of the new layer. |

#### 返回

[TextLayer object](../textlayer).

---

### LayerCollection.addVerticalBoxText()

`app.project.item(index).layers.addVerticalBoxText([width, height])`

:::note
该方法添加于 After Effects 24.2
:::

#### 描述

Creates a new paragraph (box) text layer with [TextDocument.lineOrientation](../text/textdocument.md#textdocumentlineorientation) set to `LineOrientation.VERTICAL_RIGHT_TO_LEFT` and adds the new [TextLayer object](../textlayer) to this collection. To create a point text layer, use the [LayerCollection.addText()](#layercollectionaddtext) or [LayerCollection.addVerticalText()](#layercollectionaddverticaltext) methods.

#### 参数

|     参数     |              类型              |             描述             |
| ----------------- | ------------------------------ | ----------------------------------- |
| `[width, height]` | Array of floating-point values | The dimensions of the new text box. |

#### 返回

TextLayer object.

---

### LayerCollection.addVerticalText()

`app.project.item(index).layers.addVerticalText([sourceText])`

:::note
该方法添加于 After Effects 24.2
:::

#### 描述

Creates a new point text layer with [TextDocument.lineOrientation](../text/textdocument.md#textdocumentlineorientation) set to `LineOrientation.VERTICAL_RIGHT_TO_LEFT` and adds the new [TextLayer object](../textlayer) to this collection. To create a paragraph (box) text layer, use the [LayerCollection.addBoxText()](#layercollectionaddboxtext) or [LayerCollection.addVerticalBoxText()](#layercollectionaddverticalboxtext) methods.

#### 参数

|  参数   |  类型  |                                                                 描述                                                                  |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceText` | String | Optional. The source text of the new layer, or a [TextDocument object](../../text/textdocument) containing the source text of the new layer. |

#### 返回

[TextLayer object](../textlayer).

---

### LayerCollection.byName()

`app.project.item(index).layers.byName(name)`

#### 描述

Returns the first (topmost) layer found in this collection with the specified name, or `null` if no layer with the given name is found.

#### 参数

| `name` | A string containing the name. |

#### 返回

[Layer object](../layer) or `null`.

---

### LayerCollection.precompose()

`app.project.item(index).layers.precompose(layerIndicies, name[, moveAllAttributes])`

#### 描述

Creates a new [CompItem object](../../item/compitem) and moves the specified layers into its layer collection. It removes the individual layers from this collection, and adds the new CompItem to this collection.

#### 参数

|      参数      |       类型        |                                                                                                                                                                                              描述                                                                                                                                                                                              |
| ------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `layerIndices`      | Array of integers | The position indexes of the layers to be collected.                                                                                                                                                                                                                                                                                                                                                   |
| `name`              | String            | The name of the new [CompItem](../../item/compitem) object.                                                                                                                                                                                                                                                                                                                                          |
| `moveAllAttributes` | Boolean           | Optional. When `true` (the default), retains all attributes in the new composition. This is the same as selecting the "Move all attributes into the new composition" option in the Pre-compose dialog box. You can only set this to `false` if there is just one index in the `layerIndices` array. This is the same as selecting the "Leave all attributes in" option in the Pre-compose dialog box. |

#### 返回

[CompItem object](../../item/compitem).
