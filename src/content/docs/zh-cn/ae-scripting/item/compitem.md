---
title: compitem
---
# CompItem object

`app.project.item(index)`

`app.project.items[index]`

#### 描述

The CompItem object represents a composition, and allows you to manipulate and get information about it. Access the objects by position index number in a project's item collection.

:::info
CompItem is a subclass of [AVItem object](../avitem), which is a subclass of [Item object](../item). All methods and attributes of AVItem and Item, in addition to those listed below, are available when working with CompItem.
:::

#### 示例

Given that the first item in the project is a CompItem, the following code displays two alerts. The first shows the number of layers in the CompItem, and the second shows the name of the last layer in the CompItem.

```javascript
var firstComp = app.project.item(1);
alert("number of layers is " + firstComp.numLayers);
alert("name of last layer is " + firstComp.layer(firstComp.numLayers).name);
```

---

## 属性

### CompItem.activeCamera

`app.project.item(index).activeCamera`

#### 描述

The active camera, which is the front-most camera layer that is enabled. The value is `null` if the composition contains no enabled camera layers.

#### 类型

CameraLayer object; 只读.

---

### CompItem.bgColor

`app.project.item(index).bgColor`

#### 描述

The background color of the composition. The three array values specify the red, green, and blue components of the color.

#### 类型

An array containing three floating-point values, `[R, G, B]`, 范围为 `[0.0..1.0]`; read/write.

---

### CompItem.counters

`app.project.item(index).counters`

:::note
该方法添加于 After Effects 13.2 (CC2014).
:::

:::warning
This method/property is officially undocumented and was found via research. The information here may be inaccurate, and this whole method/property may disappear or stop working some point. Please contribute if you have more information on it!
:::

#### 描述

This attribute works app-wide: if changed on one CompItem, it will change it for every CompItem in the project. The value stays until restarting AE. Once restarted, it will revert to `false`.

This parameter doesn't do anything.

#### 类型

Boolean; read/write.

---

### CompItem.displayStartFrame

`app.project.item(index).displayStartFrame`

#### 描述

The frame value of the beginning of the composition.

This value is an alternative to calculating the start frame using [CompItem.displayStartTime](#compitemdisplaystarttime) and [CompItem.frameDuration](#compitemframeduration) to compensate for floating-point problems.

:::note
该方法添加于 After Effects 17.1.
:::

#### 类型

Integer; read/write.

---

### CompItem.displayStartTime

`app.project.item(index).displayStartTime`

#### 描述

The time set as the beginning of the composition, in seconds. This is the equivalent of the Start Timecode or Start Frame setting in the Composition Settings dialog box.

:::note
As of After Effects 17.1, the minimum value is `-10800.0`. Before 17.1, the minimum value was `0.0`
:::

#### 类型

Floating-point valuem in the range `[-10800.0..86339.0]` (-3:00:00:00 to 23:59:00:00); read/write.

---

### CompItem.draft3d

`app.project.item(index).draft3d`

#### 描述

When `true`, Draft 3D mode is enabled for the Composition panel. This corresponds to the value of the Draft 3D button in the Composition panel.

#### 类型

Boolean; read/write.

---

### CompItem.dropFrame

`app.project.item(index).dropFrame`

#### 描述

When `true`, indicates that the composition uses drop-frame timecode. When `false`, indicates non-drop-frame timecode. This corresponds to the setting in the Composition Settings dialog box.

#### 类型

Boolean; read/write.

---

### CompItem.frameBlending

`app.project.item(index).frameBlending`

#### 描述

When `true`, frame blending is enabled for this Composition. Corresponds to the value of the Frame Blending button in the Composition panel.

#### 类型

Boolean; if `true`, frame blending is enabled; read/write.

---

### CompItem.frameDuration

`app.project.item(index).frameDuration`

#### 描述

The duration of a frame, in seconds. This is the inverse of the `frameRate` value (frames-per-second).

#### 类型

Floating-point value; read/write.

---

### CompItem.hideShyLayers

`app.project.item(index).hideShyLayers`

#### 描述

When `true`, only layers with shy set to `false` are shown in the Timeline panel. When `false`, all layers are visible, including those whose shy value is `true`. Corresponds to the value of the Hide All Shy Layers button in the Composition panel.

#### 类型

Boolean; read/write.

---

### CompItem.layers

`app.project.item(index).layers`

#### 描述

A [LayerCollection object](../../layer/layercollection) that contains all the Layer objects for layers in this composition.

#### 类型

LayerCollection object; 只读.

---

### CompItem.markerProperty

`app.project.item(index).markerProperty`

:::note
该方法添加于 After Effects 14.0 (CC 2017)
:::

#### 描述

A [PropertyGroup object](../../property/propertygroup) that contains all a composition's markers. Composition marker scripting has the same functionality as [Layer markers](../layer/layer.md#layermarker).

See [MarkerValue object](../../other/markervalue).

#### 类型

PropertyGroup object or `null`; 只读.

#### 示例

The following sample code creates a project and composition, then creates two composition markers with different properties

```javascript
// comp.markerProperty allows you to add markers to a comp.
// It has the same functionality as layer.property("Marker")
var currentProj = app.newProject();
var comp = currentProj.items.addComp("mycomp", 1920, 1080, 1.0, 5, 29.97);
var solidLayer = comp.layers.addSolid([1, 1, 1], "mylayer", 1920, 1080, 1.0);

var compMarker = new MarkerValue("This is a comp marker!");
compMarker.duration = 1;

var compMarker2 = new MarkerValue("Another comp marker!");
compMarker2.duration = 1;

comp.markerProperty.setValueAtTime(1, compMarker);
comp.markerProperty.setValueAtTime(3, compMarker2);
```

---

### CompItem.motionBlur

`app.project.item(index).motionBlur`

#### 描述

When `true`, motion blur is enabled for the composition. Corresponds to the value of the Motion Blur button in the Composition panel.

#### 类型

Boolean; read/write.

---

### CompItem.motionBlurAdaptiveSampleLimit

`app.project.item(index).motionBlurAdaptiveSampleLimit`

#### 描述

The maximum number of motion blur samples of 2D layer motion. This corresponds to the Adaptive Sample Limit setting in the Advanced tab of the Composition Settings dialog box.

#### 类型

Integer (between 16 and 256); read/write.

---

### CompItem.motionBlurSamplesPerFrame

`app.project.item(index).motionBlurSamplesPerFrame`

#### 描述

The minimum number of motion blur samples per frame for Classic 3D layers, shape layers, and certain effects. This corresponds to the Samples Per Frame setting in the Advanced tab of the Composition Settings dialog box.

#### 类型

Integer (between 2 and 64); read/write.

---

### CompItem.motionGraphicsTemplateControllerCount

`app.project.item(index).motionGraphicsTemplateControllerCount`

:::note
该方法添加于 After Effects 16.1 (CC 2019)
:::

#### 描述

The number of properties in the Essential Graphics panel for the composition.

#### 类型

Integer; 只读.

---

### CompItem.motionGraphicsTemplateName

`app.project.item(index).motionGraphicsTemplateName`

:::note
该方法添加于 After Effects 15.0 (CC 2018)
:::

#### 描述

Read or write the name property in the Essential Graphics panel for the composition.

The name in the Essential Graphics panel is used for the file name of an exported Motion Graphics template (ex., "My Template.mogrt").

The following example will set the name for the active composition and then return it as an alert

```javascript
app.project.activeItem.motionGraphicsTemplateName = "My Template";
alert(app.project.activeItem.motionGraphicsTemplateName);
```

#### 类型

String; read/write.

---

### CompItem.numLayers

`app.project.item(index).numLayers`

#### 描述

The number of layers in the composition.

#### 类型

Integer; 只读.

---

### CompItem.preserveNestedFrameRate

`app.project.item(index).preserveNestedFrameRate`

#### 描述

When `true`, the frame rate of nested compositions is preserved in the current composition. Corresponds to the value of the "Preserve frame rate when nested or in render queue" option in the Advanced tab of the Composition Settings dialog box.

#### 类型

Boolean; read/write.

---

### CompItem.preserveNestedResolution

`app.project.item(index).preserveNestedResolution`

#### 描述

When `true`, the resolution of nested compositions is preserved in the current composition. Corresponds to the value of the "Preserve Resolution When Nested" option in the Advanced tab of the Composition Settings dialog box.

#### 类型

Boolean; read/write.

---

### CompItem.renderer

`app.project.item(index).renderer`

#### 描述

The current rendering plug-in module to be used to render this composition, as set in the Advanced tab of the Composition Settings dialog box. Allowed values are the members of [CompItem.renderers](#compitemrenderers).

#### 类型

String; read/write.

---

### CompItem.renderers

`app.project.item(index).renderers`

#### 描述

The available rendering plug-in modules. Member strings reflect installed modules, as seen in the Advanced tab of the Composition Settings dialog box.

#### 类型

Array of strings; 只读.

---

### CompItem.resolutionFactor

`app.project.item(index).resolutionFactor`

#### 描述

The x and y downsample resolution factors for rendering the composition. The two values in the array specify how many pixels to skip when sampling; the first number controls horizontal sampling, the second controls vertical sampling. Full resolution is `[1, 1]`, half resolution is `[2, 2]`, and quarter resolution is `[4, 4]`. The default is `[1, 1]`.

#### 类型

Array of two integers in the range `[1..99]`; read/write.

---

### CompItem.selectedLayers

`app.project.item(index).selectedLayers`

#### 描述

All of the selected layers in this composition. This is a 0-based array (the first object is at index 0).

#### 类型

Array of [Layer](../../layer/layer) objects; 只读.

---

### CompItem.selectedProperties

`app.project.item(index).selectedProperties`

#### 描述

All of the selected properties (Property and PropertyGroup objects) in this composition. The first property is at index position 0.

#### 类型

Array of [Property](../../property/property) and [PropertyGroup](../../property/propertygroup) objects; 只读.

---

### CompItem.shutterAngle

`app.project.item(index).shutterAngle`

#### 描述

The shutter angle setting for the composition. This corresponds to the Shutter Angle setting in the Advanced tab of the Composition Settings dialog box.

#### 类型

Integer, 范围为 `[0..720]`; read/write.

---

### CompItem.shutterPhase

`app.project.item(index).shutterPhase`

#### 描述

The shutter phase setting for the composition. This corresponds to the Shutter Phase setting in the Advanced tab of the Composition Settings dialog box.

#### 类型

Integer, 范围为 `[-360..360]`; read/write.

---

### CompItem.workAreaDuration

`app.project.item(index).workAreaDuration`

#### 描述

The duration of the work area in seconds. This is the difference of the start-point and end-point times of the Composition work area.

#### 类型

Floating-point value; read/write.

---

### CompItem.workAreaStart

`app.project.item(index).workAreaStart`

#### 描述

The time when the Composition work area begins, in seconds.

#### 类型

Floating-point value; read/write.

---

## 函数

### CompItem.duplicate()

`app.project.item(index).duplicate()`

#### 描述

Creates and returns a duplicate of this composition, which contains the same layers as the original.

#### 参数

None.

#### 返回

CompItem object.

---

### CompItem.exportAsMotionGraphicsTemplate()

`app.project.item(index).exportAsMotionGraphicsTemplate(doOverWriteFileIfExisting[, file_path])`

:::note
该方法添加于 After Effects 15.0 (CC 2018)
:::

#### 描述

Exports the composition as a Motion Graphics template. Returns `true` if the Motion Graphics template is successfully exported, otherwise `false`.

The name in the Essential Graphics panel is used for the file name of the Motion Graphics template (ex., "My Template.mogrt").
Use the `motionGraphicsTemplateName` attribute to set the name.

Optionally specify the path to the folder where the Motion Graphics template file is saved. If not specified, the file will be saved in the current
user's Motion Graphics Templates folder:

|   OS    |                                        Path                                         |
| ------- | ----------------------------------------------------------------------------------- |
| macOS   | `/Users/<name>/Library/Application Support/Adobe/Common/Motion Graphics Templates/` |
| Windows | `C:\Users\<name>\AppData\Roaming\Adobe\Common\Motion Graphics Templates\`           |

If the project has been changed since the last time it was saved, After Effects will prompt the user to save the project. To avoid this, use the
project `save()` method before exporting the Motion Graphics template.

#### 参数

|          参数          |  类型   |                        描述                         |
| --------------------------- | ------- | ---------------------------------------------------------- |
| `doOverWriteFileIfExisting` | Boolean | Whether to overwrite an existing file of the same name.    |
| `file_path`                 | String  | Optional. Path to the folder where the file will be saved. |

#### 返回

Boolean.

---

### CompItem.getMotionGraphicsTemplateControllerName()

`app.project.item(index).getMotionGraphicsTemplateControllerName(index)`

:::note
该方法添加于 After Effects 16.1 (CC 2019)
:::

#### 描述

Gets the name of a single property in the Essential Graphics panel.

#### 参数

| 参数 |  类型   |                        描述                         |
| --------- | ------- | ---------------------------------------------------------- |
| `index`   | Integer | The index of the EGP property whose name will be returned. |

#### 返回

String; 只读.

---

### CompItem.setMotionGraphicsControllerName()

`app.project.item(index).setMotionGraphicsControllerName(index, newName)`

:::note
该方法添加于 After Effects 16.1 (CC 2019)
:::

#### 描述

Sets the name of a single property in the Essential Graphics panel.

:::tip
To rename a property as it is added to the EGP, see [Property.addToMotionGraphicsTemplateAs()](../property/property.md#propertyaddtomotiongraphicstemplateas).
:::

#### 参数

| 参数 |  类型   |                 描述                  |
| --------- | ------- | -------------------------------------------- |
| `index`   | Integer | The index of the EGP property to be renamed. |
| `newName` | String  | The new name for the EGP property.           |

#### 返回

String; 只读.

---

### CompItem.layer()

`app.project.item(index).layer(index)`

`app.project.item(index).layer(otherLayer, relIndex)`

`app.project.item(index).layer(name)`

#### 描述

Returns a Layer object, which can be specified by name, an index position in this layer, or an index position relative to another layer.

#### 参数

| 参数 |                                                 类型                                                 |                        描述                         |
| --------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `index`   | Integer, 范围为 `[1..numLayers]`, where `numLayers` is the number of layers in the composition | The index number of the desired layer in this composition. |

or:

|  参数   |                                                                     类型                                                                      |                                                                           描述                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `otherLayer` | [Layer object](../../layer/layer) in this composition.                                                                                       | The `relIndex` value is added to the index value of this layer to find the position of the desired layer.                                                       |
| `relIndex`   | Integer, 范围为 `[1 - otherLayer.index .. numLayers - otherLayer.index]`, where `numLayers` is the number of layers in the composition. | The position of the desired layer, relative to `otherLayer`. This value is added to the `otherLayer` value to derive the absolute index of the layer to return. |

or:

| 参数 |  类型  |          描述           |
| --------- | ------ | ------------------------------ |
| `name`    | String | The name of the desired layer. |

#### 返回

[Layer object](../../layer/layer).

---

### CompItem.openInEssentialGraphics()

`app.project.item(index).openInEssentialGraphics()`

:::note
该方法添加于 After Effects 15.0 (CC 2018)
:::

#### 描述

Opens the composition in the Essential Graphics panel.

#### 参数

None.

#### 返回

Nothing.

---

### CompItem.openInViewer()

`app.project.item(index).openInViewer()`

#### 描述

Opens the composition in a Composition panel, and moves the Composition panel to front and gives it focus.

#### 参数

None.

#### 返回

[Viewer object](../../other/viewer) object for the Composition panel, or `null` if the composition could not be opened.
