---
title: avlayer
---
# AVLayer object

`app.project.item(index).layer(index)`

#### 描述

The AVLayer object provides an interface to those layers that contain AVItem objects (composition layers, footage layers, solid layers, text layers, and sound layers).

:::info
AVLayer is a subclass of [Layer object](../layer). All methods and attributes of Layer, in addition to those listed below, are available when working with AVLayer.
:::

:::info
AVLayer is a base class for [TextLayer object](../textlayer), so AVLayer attributes and methods are available when working with TextLayer objects.
:::

#### AE Properties

Different types of layers have different AE properties. AVLayer has the following properties and property groups:

- Marker
- Time Remap
- Motion Trackers
- Masks
- Effects
- Transform
  - Anchor Point
  - Position
  - Scale
  - Orientation
  - X Rotation
  - Y Rotation
  - Rotation
  - Opacity
- Layer Styles
- Geometry Options // Ray-traced 3D
- Material Options
  - Casts Shadows
  - Light Transmission
  - Accepts Shadows
  - Accepts Lights
  - Appears in Reflections // Ray-traced 3D
  - Ambient
  - Diffuse
  - Specular Intensity
  - Specular Shininess
  - Metal
  - Reflection Intensity // Ray-traced 3D
  - Reflection Sharpness // Ray-traced 3D
  - Reflection Rolloff // Ray-traced 3D
  - Transparency // Ray-traced 3D
  - Transparency Rolloff // Ray-traced 3D
  - Index of Refraction // Ray-traced 3D
- Audio
  - AudioLevels

#### 示例

If the first item in the project is a CompItem, and the first layer of that CompItem is an AVLayer, the following sets the layer `quality`, `startTime`, and `inPoint`.

```javascript
var firstLayer = app.project.item(1).layer(1);
firstLayer.quality = LayerQuality.BEST;
firstLayer.startTime = 1;
firstLayer.inPoint = 2;
```

---

## 属性

### AVLayer.adjustmentLayer

`app.project.item(index).layer(index).adjustmentLayer`

#### 描述

`true` if the layer is an adjustment layer.

#### 类型

Boolean; read/write.

---

### AVLayer.audioActive

`app.project.item(index).layer(index).audioActive`

#### 描述

`true` if the layer's audio is active at the current time. For this value to be true, `audioEnabled` must be true, no other layer with audio may be soloing unless this layer is soloed too, and the time must be between the `inPoint`
and `outPoint` of this layer.

#### 类型

Boolean; 只读.

---

### AVLayer.audioEnabled

`app.project.item(index).layer(index).audioEnabled`

#### 描述

When `true`, the layer's audio is enabled. This value corresponds to the audio toggle switch in the Timeline panel.

#### 类型

Boolean; read/write.

---

### AVLayer.blendingMode

`app.project.item(index).layer(index).blendingMode`

#### 描述

The blending mode of the layer.

#### 类型

A BlendingMode enumerated value; read/write. One of:

- `BlendingMode.ADD`
- `BlendingMode.ALPHA_ADD`
- `BlendingMode.CLASSIC_COLOR_BURN`
- `BlendingMode.CLASSIC_COLOR_DODGE`
- `BlendingMode.CLASSIC_DIFFERENCE`
- `BlendingMode.COLOR`
- `BlendingMode.COLOR_BURN`
- `BlendingMode.COLOR_DODGE`
- `BlendingMode.DANCING_DISSOLVE`
- `BlendingMode.DARKEN`
- `BlendingMode.DARKER_COLOR`
- `BlendingMode.DIFFERENCE`
- `BlendingMode.DISSOLVE`
- `BlendingMode.DIVIDE`
- `BlendingMode.EXCLUSION`
- `BlendingMode.HARD_LIGHT`
- `BlendingMode.HARD_MIX`
- `BlendingMode.HUE`
- `BlendingMode.LIGHTEN`
- `BlendingMode.LIGHTER_COLOR`
- `BlendingMode.LINEAR_BURN`
- `BlendingMode.LINEAR_DODGE`
- `BlendingMode.LINEAR_LIGHT`
- `BlendingMode.LUMINESCENT_PREMUL`
- `BlendingMode.LUMINOSITY`
- `BlendingMode.MULTIPLY`
- `BlendingMode.NORMAL`
- `BlendingMode.OVERLAY`
- `BlendingMode.PIN_LIGHT`
- `BlendingMode.SATURATION`
- `BlendingMode.SCREEN`
- `BlendingMode.SUBTRACT`
- `BlendingMode.SILHOUETE_ALPHA` - note the mispelling of 'SILHOUETTE'!
- `BlendingMode.SILHOUETTE_LUMA`
- `BlendingMode.SOFT_LIGHT`
- `BlendingMode.STENCIL_ALPHA`
- `BlendingMode.STENCIL_LUMA`
- `BlendingMode.SUBTRACT`
- `BlendingMode.VIVID_LIGHT`

---

### AVLayer.canSetCollapseTransformation

`app.project.item(index).layer(index).canSetCollapseTransformation`

#### 描述

`true` if it is legal to change the value of the `collapseTransformation` attribute on this layer.

#### 类型

Boolean; 只读.

---

### AVLayer.canSetTimeRemapEnabled

`app.project.item(index).layer(index).canSetTimeRemapEnabled`

#### 描述

`true` if it is legal to change the value of the `timeRemapEnabled` attribute on this layer.

#### 类型

Boolean; 只读.

---

### AVLayer.collapseTransformation

`app.project.item(index).layer(index).collapseTransformation`

#### 描述

`true` if collapse transformation is on for this layer.

#### 类型

Boolean; read/write.

---

### AVLayer.effectsActive

`app.project.item(index).layer(index).effectsActive`

#### 描述

`true` if the layer's effects are active, as indicated by the `<f>` icon next to it in the user interface.

#### 类型

Boolean; read/write.

---

### AVLayer.environmentLayer

`app.project.item(index).layer(index).environmentLayer`

#### 描述

`true` if this is an environment layer in a Ray-traced 3D composition. Setting this attribute to `true` automatically makes the layer 3D (`threeDLayer` becomes true).

#### 类型

Boolean; read/write.

---

### AVLayer.frameBlending

`app.project.item(index).layer(index).frameBlending`

#### 描述

`true` if frame blending is enabled for the layer.

#### 类型

Boolean; 只读.

---

### AVLayer.frameBlendingType

`app.project.item(index).layer(index).frameBlendingType`

#### 描述

The type of frame blending to perform when frame blending is enabled for the layer.

#### 类型

A FrameBlendingType enumerated value; read/write. One of:

- `FrameBlendingType.FRAME_MIX`
- `FrameBlendingType.NO_FRAME_BLEND`
- `FrameBlendingType.PIXEL_MOTION`

---

### AVLayer.guideLayer

`app.project.item(index).layer(index).guideLayer`

#### 描述

`true` if the layer is a guide layer.

#### 类型

Boolean; read/write.

---

### AVLayer.hasAudio

`app.project.item(index).layer(index).hasAudio`

#### 描述

`true` if the layer contains an audio component, regardless of whether it is audio-enabled or soloed.

#### 类型

Boolean; 只读.

---

### AVLayer.hasTrackMatte

`app.project.item(index).layer(index).hasTrackMatte`

:::note
This functionality was updated in After Effects 23.0. Track Matte is no longer dependent on layer order.
:::

#### 描述

`true` if this layer has track matte. When `true`, this layer's `trackMatteType` value controls how the matte is applied.

See [AVLayer.trackMatteType](#avlayertrackmattetype) for available track matte types.

#### 类型

Boolean; 只读.

---

### AVLayer.height

`app.project.item(index).layer(index).height`

#### 描述

The height of the layer in pixels.

#### 类型

Floating-point value; 只读.

---

### AVLayer.isNameFromSource

`app.project.item(index).layer(index).isNameFromSource`

#### 描述

`true` if the layer has no expressly set name, but contains a named source. In this case, `layer.name` has the same value as `layer.source.name`. `false` if the layer has an expressly set name, or if the layer does not have a source.

#### 类型

Boolean; 只读.

---

### AVLayer.isTrackMatte

`app.project.item(index)layer(index).isTrackMatte`

:::note
This functionality was updated in After Effects 23.0. Track Matte is no longer dependent on layer order.
:::

#### 描述

`true` if this layer is being used as a track matte.

#### 类型

Boolean; 只读.

---

### AVLayer.motionBlur

`app.project.item(index).layer(index).motionBlur`

#### 描述

`true` if motion blur is enabled for the layer.

#### 类型

Boolean; read/write.

---

### AVLayer.preserveTransparency

`app.project.item(index).layer(index).preserveTransparency`

#### 描述

`true` if preserve transparency is enabled for the layer.

#### 类型

Boolean; read/write.

---

### AVLayer.quality

`app.project.item(index).layer(index).quality`

#### 描述

The quality with which this layer is displayed.

#### 类型

A `LayerQuality` enumerated value; read/write. One of:

- `LayerQuality.BEST`
- `LayerQuality.DRAFT`
- `LayerQuality.WIREFRAME`

---

### AVLayer.samplingQuality

`app.project.item(index).layer(index).samplingQuality`

:::note
该方法添加于 After Effects 12.0 (CC)
:::

#### 描述

Set/get layer sampling method (bicubic or bilinear)

#### 类型

A `LayerSamplingQuality` enumerated value; read/write. One of:

- `LayerSamplingQuality.BICUBIC`
- `LayerSamplingQuality.BILINEAR`

---

### AVLayer.source

`app.project.item(index).layer(index).source`

#### 描述

The source AVItem for this layer. The value is `null` in a Text layer. Use [AVLayer.replaceSource()](#avlayerreplacesource) to change the value.

#### 类型

AVItem object; 只读.

---

### AVLayer.threeDLayer

`app.project.item(index).layer(index).threeDLayer`

#### 描述

`true` if this is a 3D layer.

#### 类型

Boolean; read/write.

---

### AVLayer.threeDPerChar

`app.project.item(index).layer(index).threeDPerChar`

#### 描述

`true` if this layer has the Enable Per-character 3D switch set, allowing its characters to be animated off the plane of the text layer. Applies only to text layers.

#### 类型

Boolean; read/write.

---

### AVLayer.timeRemapEnabled

`app.project.item(index).layer(index).timeRemapEnabled`

#### 描述

`true` if time remapping is enabled for this layer.

#### 类型

Boolean; read/write.

---

### AVLayer.trackMatteLayer

`app.project.item(index).layer(index).trackMatteLayer`

:::note
该方法添加于 After Effects 23.0
:::

#### 描述

Returns the track matte layer for this layer. Returns `null` if this layer has no track matte layer.

#### 类型

AVLayer object; read only.

---

### AVLayer.trackMatteType

`app.project.item(index).layer(index).trackMatteType`

:::note
This functionality was updated in After Effects 23.0
:::

:::warning
This is a Legacy API we don't recommend using for setting Track Matte Type in new scripts. Please consider using the latest track matte APIs [AVLayer.setTrackMatte()](#avlayersettrackmatte) and [AVLayer.removeTrackMatte()](#avlayerremovetrackmatte) for your tasks.
:::

#### 描述

If this layer has a track matte, specifies the way the track matte is applied.
Specifying the `TrackMatteType.NO_TRACK_MATTE` type will remove the track matte for this layer and reset the track matte type.

#### 类型

A `TrackMatteType` enumerated value; read/write. One of:

- `TrackMatteType.ALPHA`
- `TrackMatteType.ALPHA_INVERTED`
- `TrackMatteType.LUMA`
- `TrackMatteType.LUMA_INVERTED`
- `TrackMatteType.NO_TRACK_MATTE`

#### 示例

```javascript
// Returns the current track matte type for myLayer
var type = myLayer.trackMatteType;

// *** We recommend using the new Track Matte APIs for the operations below (See Warning) ***

// Changes the track matte type for myLayer to TrackMatteType.ALPHA_INVERTED
myLayer.trackMatteType = TrackMatteType.ALPHA_INVERTED;

// Removes the track matte and also resets the type
myLayer.trackMatteType = TrackMatteType.NO_TRACK_MATTE;
```

---

### AVLayer.width

`app.project.item(index).layer(index).width`

#### 描述

The width of the layer in pixels.

#### 类型

Floating-point value; 只读.

---

## 函数

### AVLayer.addToMotionGraphicsTemplate()

`app.project.item(index).layer(index).addToMotionGraphicsTemplate(comp)`

:::note
该方法添加于 After Effects 18.0 (2021)
:::

#### 描述

Adds the layer to the Essential Graphics Panel for the specified composition.

Returns `true` if the layer is successfully added, or otherwise `false`.

If the layer cannot be added, it is either because it is not a layer type for which media can be replaced (referred to as Media Replacement Layers), or the layer has already been added to the EGP for that composition. After Effects will present a warning dialog if the layer cannot be added to the EGP.

Use the [AVLayer.canAddToMotionGraphicsTemplate()](#avlayercanaddtomotiongraphicstemplate) method to test whether the layer can be added to a Motion Graphics template.

#### 参数

| 参数 |                  类型                   |                          描述                           |
| --------- | --------------------------------------- | -------------------------------------------------------------- |
| `comp`    | [CompItem object](../../item/compitem) | The composition where you wish to add the property to the EGP. |

#### 返回

Boolean.

---

### AVLayer.addToMotionGraphicsTemplateAs()

`app.project.item(index).layer(index).addToMotionGraphicsTemplateAs(comp, name)`

:::note
该方法添加于 After Effects 18.0 (2021)
:::

#### 描述

Adds the layer to the Essential Graphics Panel for the specified composition.

Returns `true` if the layer is successfully added, or otherwise `false`.

If the layer cannot be added, it is either because it is not a layer type for which media can be replaced (referred to as Media Replacement Layers), or the layer has already been added to the EGP for that composition. After Effects will present a warning dialog if the layer cannot be added to the EGP.

Use the [AVLayer.canAddToMotionGraphicsTemplate()](#avlayercanaddtomotiongraphicstemplate) method to test whether the layer can be added to a Motion Graphics template.

#### 参数

| 参数 |                  类型                   |                          描述                           |
| --------- | --------------------------------------- | -------------------------------------------------------------- |
| `comp`    | [CompItem object](../../item/compitem) | The composition where you wish to add the property to the EGP. |
| `name`    | String                                  | The new name.                                                  |

#### 返回

Boolean.

---

### AVLayer.audioActiveAtTime()

`app.project.item(index).layer(index).audioActiveAtTime(time)`

#### 描述

Returns `true` if this layer's audio will be active at the specified time.

For this method to return `true`, `audioEnabled` must be `true`, no other layer with audio may be soloing unless this layer is soloed too, and the time must be between the `inPoint` and `outPoint` of this layer.

#### 参数

| 参数 |         类型         |      描述      |
| --------- | -------------------- | --------------------- |
| `time`    | Floating-point value | The time, in seconds. |

#### 返回

Boolean.

---

### AVLayer.calculateTransformFromPoints()

`app.project.item(index).layer(index).calculateTransformFromPoints(pointTopLeft, pointTopRight, pointBottomRight)`

#### 描述

Calculates a transformation from a set of points in this layer.

#### 参数

|     参数      |                    类型                     |             描述             |
| ------------------ | ------------------------------------------- | ----------------------------------- |
| `pointTopLeft`     | Array of floating-point values, `[x, y, z]` | The top left point coordinates.     |
| `pointTopRight`    | Array of floating-point values, `[x, y, z]` | The top right point coordinates.    |
| `pointBottomRight` | Array of floating-point values, `[x, y, z]` | The bottom right point coordinates. |

#### 返回

An Object with the transformation properties set.

#### 示例

```javascript
var newLayer = comp.layers.add(newFootage);
newLayer.threeDLayer = true;
newLayer.blendingMode = BlendingMode.ALPHA_ADD;
var transform = newLayer.calculateTransformFromPoints(tl, tr, bl);
for (var sel in transform) {
    newLayer.transform[sel].setValue(transform[sel]);
}
```

---

### AVLayer.canAddToMotionGraphicsTemplate()

`app.project.item(index).layer(index).canAddToMotionGraphicsTemplate(comp)`

:::note
该方法添加于 After Effects 18.0 (2021)
:::

#### 描述

Test whether or not the layer can be added to the Essential Graphics Panel for the specified composition.

Returns `true` if the layer can be added, or otherwise `false`.

If the layer cannot be added, it is either because it is not a layer type for which media can be replaced (referred to as Media Replacement Layers), or the layer has already been added to the EGP for that composition.

Media Replacement layers are recognized as AVLayers with an [AVLayer.source](#avlayersource) set to a [FootageItem object](../../item/footageitem) (with specific source types) or a [CompItem object](../../item/compitem).

The AVLayer needs to comply with the restrictions below in order to be treated as a Media Replacement layer:

- [Layer.hasVideo](../layer/layer.md#layerhasvideo) should return `true`.
- [AVLayer.adjustmentLayer](#avlayeradjustmentlayer) should return `false`.
- [Layer.nullLayer](../layer/layer.md#layernulllayer) should return `false`.
- If the [AVLayer.source](#avlayersource) is a [FootageItem object](../../item/footageitem), then FootageItem.FootageSource should not be a [SolidSource object](../../sources/solidsource).
- If the [AVLayer.source](#avlayersource) is a [FootageItem object](../../item/footageitem) and the FootageItem.FootageSource is a [FileSource object](../../sources/filesource) then that FileSource should not point to a non-media file e.g. a JSX script file.

#### 参数

| 参数 |                  类型                   |                          描述                           |
| --------- | --------------------------------------- | -------------------------------------------------------------- |
| `comp`    | [CompItem object](../../item/compitem) | The composition where you wish to add the property to the EGP. |

#### 返回

Boolean.

---

### AVLayer.compPointToSource()

`app.project.item(index).layer(index).compPointToSource()`

:::note
该方法添加于 After Effects 13.2 (CC 2014.2)
:::

#### 描述

Converts composition coordinates, such as `sourcePointToComp`, to layer coordinates.

:::warning
This value only reflects the first character in the text layer at the current time.
:::

#### 参数

|      参数      |                   类型                   |                描述                |
| ------------------- | ---------------------------------------- | ----------------------------------------- |
| `sourcePointToComp` | Array of floating-point values, `[x, y]` | Position array of composition coordinates |

#### 返回

Array of ([X,Y]) position coordinates; 只读.

---

### AVLayer.openInViewer()

`app.project.item(index).layer(index).openInViewer()`

#### 描述

Opens the layer in a Layer panel, and moves the Layer panel to front and gives it focus.

#### 参数

None.

#### 返回

Viewer object for the Layer panel, or `null` if the layer could not be opened (e.g., for text or shape layers, which cannot be opened in the Layer panel).

---

### AVLayer.removeTrackMatte()

`app.project.item(index).layer(index).removeTrackMatte()`

:::note
该方法添加于 After Effects 23.0
:::

#### 描述

Removes the track matte for this layer while preserving the TrackMatteType.
See [AVLayer.setTrackMatte()](#avlayersettrackmatte) for another way of removing track matte.

#### 参数

None.

#### 返回

Nothing.

```javascript
// Sets the track matte layer of myLayer with otherLayer as LUMA type
myLayer.setTrackMatte(otherLayer, TrackMatteType.LUMA);

// Removes the track matte for myLayer but preserves the LUMA type
myLayer.removeTrackMatte();

// Still returns TrackMatteType.LUMA
alert(myLayer.trackMatteType);
```

---

### AVLayer.replaceSource()

`app.project.item(index).layer(index).replaceSource(newSource, fixExpressions)`

#### 描述

Replaces the source for this layer.

:::warning
If this method is performed on a null layer, the layers `isNull` attribute is not changed from `true`. This causes the layer not to be visible in comp viewer and renders.
:::

#### 参数

|    参数     |                类型                |                                                                                                       描述                                                                                                        |
|------------------|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `newSource`      | [AVItem object](../../item/avitem) | The new source AVItem object.                                                                                                                                                                                            |
| `fixExpressions` | Boolean                            | `true` to adjust expressions for the new source, otherwise `false`.                                                                                                                                                      |
|                  |                                    | !!! warning                                                                                                                                                                                                              |
|                  |                                    |      This feature can be resource-intensive; if replacing a large amount of footage, do this only at the end of the operation. See also [Project.autoFixExpressions()](../general/project.md#projectautofixexpressions). |

#### 返回

Nothing.

---

### AVLayer.setTrackMatte()

`app.project.item(index).layer(index).setTrackMatte(trackMatteLayer, trackMatteType)`

:::note
该方法添加于 After Effects 23.0
:::

#### 描述

Sets the track matte layer and type for this layer. Passing in `null` to trackMatteLayer parameter removes the track matte.
See [AVLayer.removeTrackMatte()](#avlayerremovetrackmatte) for another way of removing track matte.

#### 参数

|     参数     |                     类型                      |                  描述                   |
| ----------------- | --------------------------------------------- | ---------------------------------------------- |
| `trackMatteLayer` | [AVLayer](../../layer/avlayer)               | The layer to be used as the track matte layer. |
| `trackMatteType`  | [TrackMatteType](#avlayertrackmattetype) enum | The type of the track matte to be used.        |

:::warning
Passing in `TrackMatteType.NO_TRACK_MATTE` as type is invalid and will result in no-op.
:::

#### 返回

Nothing

#### 示例

```javascript
// Sets the track matte layer of myLayer with otherLayer as Alpha type
myLayer.setTrackMatte(otherLayer, TrackMatteType.ALPHA);

// Keeps the same trackMatteLayer and only changes the track matte type
myLayer.setTrackMatte(myLayer.trackMatteLayer, TrackMatteType.LUMA);

// Changes the track matte layer but keep the same track matte type
myLayer.setTrackMatte(newTrackMatteLayer, myLayer.trackMatteType);

// Removes the track matte for myLayer and sets the new specified TrackMatteType
myLayer.setTrackMatte(null, TrackMatteType.ALPHA);
myLayer.setTrackMatte(null, TrackMatteType.NO_TRACK_MATTE);

// Invalid. Nothing happens
myLayer.setTrackMatte(otherLayer, TrackMatteType.NO_TRACK_MATTE);
```

---

### AVLayer.sourcePointToComp()

`app.project.item(index).layer(index).sourcePointToComp()`

:::note
该方法添加于 After Effects 13.2 (CC 2014.2)
:::

#### 描述

Converts layer coordinates, such as `boxTextPos`, to composition coordinates.

:::warning
This value only reflects the first character in the text layer at the current time.
:::

#### 参数

|  参数   |                   类型                   |              描述               |
| ------------ | ---------------------------------------- | -------------------------------------- |
| `boxTextPos` | Array of floating-point values, `[x, y]` | A position array of layer coordinates. |

#### 返回

Array of ([X,Y]) position coordinates; 只读.

#### 示例

```javascript
// For a paragraph text layer.
// Converts position in layer coordinates to comp coordinates.
var boxTextCompPos = myTextLayer.sourcePointToComp(boxTextLayerPos);
```

---

### AVLayer.sourceRectAtTime()

`app.project.item(index).layer(index).sourceRectAtTime(timeT, extents)`

#### 描述

Retrieves the rectangle bounds of the layer at the specified time index, corrected for text or shape layer content. Use, for example, to write text that is properly aligned to the baseline.

#### 参数

| 参数 |         类型         |                                                              描述                                                               |
| --------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `timeT`   | Floating-point value | The time index, in seconds.                                                                                                            |
| `extents` | Boolean              | `true` to include the extents, otherwise `false`. Extents apply to shape layers, increasing the size of the layer bounds as necessary. |

#### 返回

A JavaScript object with four attributes, [`top`, `left`, `width`, `height`].
