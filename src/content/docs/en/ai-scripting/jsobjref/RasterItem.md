---
title: RasterItem
---
# RasterItem

`app.activeDocument.rasterItems[index]`

#### Description

A bitmap art item in a document. A script can create a raster item from an external file, or by copying an existing raster item with the `duplicate` method.

---

## Properties

### RasterItem.artworkKnockout

`app.activeDocument.rasterItems[index].artworkKnockout`

#### Description

Is this object used to create a knockout, and if so, what kind of knockout.

#### Type

[KnockoutState](../scripting-constants#knockoutstate)

---

### RasterItem.bitsPerChannel

`app.activeDocument.rasterItems[index].bitsPerChannel`

#### Description

The number of bits per channel.

#### Type

Number (long); read-only.

---

### RasterItem.blendingMode

`app.activeDocument.rasterItems[index].blendingMode`

#### Description

The blend mode used when compositing an object.

#### Type

[BlendModes](../scripting-constants#blendmodes)

---

### RasterItem.boundingBox

`app.activeDocument.rasterItems[index].boundingBox`

#### Description

The dimensions of the placed art item regardless of transformations.

#### Type

Array of 4 numbers

---

### RasterItem.channels

`app.activeDocument.rasterItems[index].channels`

#### Description

The number of channels.

#### Type

Number (long); read-only.

---

### RasterItem.colorants

`app.activeDocument.rasterItems[index].colorants`

#### Description

The colorants used in the raster art.

#### Type

Array of string; read-only.

---

### RasterItem.colorizedGrayscale

`app.activeDocument.rasterItems[index].colorizedGrayscale`

#### Description

If `true`, the raster art is a colorized grayscale image.

#### Type

Boolean; read-only.

---

### RasterItem.contentVariable

`app.activeDocument.rasterItems[index].contentVariable`

#### Description

The content variable bound to the item.

#### Type

[Variable](.././Variable)

---

### RasterItem.controlBounds

`app.activeDocument.rasterItems[index].controlBounds`

#### Description

The bounds of the object including stroke width and controls.

#### Type

Array of 4 numbers; read-only.

---

### RasterItem.editable

`app.activeDocument.rasterItems[index].editable`

#### Description

If `true`, this item is editable.

#### Type

Boolean; read-only.

---

### RasterItem.embedded

`app.activeDocument.rasterItems[index].embedded`

#### Description

If `true`, the raster art item is embedded in the illustration.

#### Type

Boolean

---

### RasterItem.file

`app.activeDocument.rasterItems[index].file`

#### Description

The file containing the artwork.

#### Type

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) object; read-only.

---

### RasterItem.geometricBounds

`app.activeDocument.rasterItems[index].geometricBounds`

#### Description

The bounds of the object excluding stroke width.

#### Type

Array of 4 numbers; read-only.

---

### RasterItem.height

`app.activeDocument.rasterItems[index].height`

#### Description

The height of the group item.

#### Type

Number (double)

---

### RasterItem.hidden

`app.activeDocument.rasterItems[index].hidden`

#### Description

If `true`, this item is hidden.

#### Type

Boolean

---

### RasterItem.imageColorSpace

`app.activeDocument.rasterItems[index].imageColorSpace`

#### Description

The color space of the raster image.

#### Type

[ImageColorSpace](../scripting-constants#imagecolorspace); read-only.

---

### RasterItem.isIsolated

`app.activeDocument.rasterItems[index].isIsolated`

#### Description

If `true`, this object is isolated.

#### Type

Boolean

---

### RasterItem.layer

`app.activeDocument.rasterItems[index].layer`

#### Description

The layer to which this item belongs.

#### Type

[Layer](.././Layer); read-only.

---

### RasterItem.left

`app.activeDocument.rasterItems[index].left`

#### Description

The position of the left side of the item (in points, measured from the left side of the page).

#### Type

Number (double)

---

### RasterItem.locked

`app.activeDocument.rasterItems[index].locked`

#### Description

If `true`, this item is locked.

#### Type

Boolean

---

### RasterItem.matrix

`app.activeDocument.rasterItems[index].matrix`

#### Description

The transformation matrix of the placed artwork.

#### Type

[Matrix](.././Matrix)

---

### RasterItem.name

`app.activeDocument.rasterItems[index].name`

#### Description

The name of this item.

#### Type

String

---

### RasterItem.note

`app.activeDocument.rasterItems[index].note`

#### Description

The note assigned to this item.

#### Type

String

---

### RasterItem.opacity

`app.activeDocument.rasterItems[index].opacity`

#### Description

The opacity of the object.

Range: 0.0 to 100.0

#### Type

Number (double)

---

### RasterItem.overprint

`app.activeDocument.rasterItems[index].overprint`

#### Description

If `true`, the raster art overprints.

#### Type

Boolean

---

### RasterItem.parent

`app.activeDocument.rasterItems[index].parent`

#### Description

The parent of this object.

#### Type

[Layer](.././Layer) or [GroupItem](.././GroupItem)

---

### RasterItem.position

`app.activeDocument.rasterItems[index].position`

#### Description

The position (in points) of the top left corner of the `rasterItem` object in the format [x, y]. Does not include stroke weight.

#### Type

Array of 2 numbers; read-only.

---

### RasterItem.selected

`app.activeDocument.rasterItems[index].selected`

#### Description

If `true`, this item is selected.

#### Type

Boolean

---

### RasterItem.sliced

`app.activeDocument.rasterItems[index].sliced`

#### Description

If `true`, the item sliced.

Default: `false`

#### Type

Boolean

---

### RasterItem.status

`app.activeDocument.rasterItems[index].status`

#### Description

Status of the linked image.

#### Type

[RasterLinkState](../scripting-constants#rasterlinkstate)

---

### RasterItem.tags

`app.activeDocument.rasterItems[index].tags`

#### Description

The tags contained in this item.

#### Type

[Tags](.././Tags); read-only.

---

### RasterItem.top

`app.activeDocument.rasterItems[index].top`

#### Description

The position of the top of the item (in points, measured from the bottom of the page).

#### Type

Number (double)

---

### RasterItem.transparent

`app.activeDocument.rasterItems[index].transparent`

#### Description

If `true`, the raster art is transparent.

#### Type

Boolean; read-only.

---

### RasterItem.typename

`app.activeDocument.rasterItems[index].typename`

#### Description

The class name of the referenced object.

#### Type

String; read-only.

---

### RasterItem.uRL

`app.activeDocument.rasterItems[index].uRL`

#### Description

The value of the Adobe URL tag assigned to this item.

#### Type

String

---

### RasterItem.visibilityVariable

`app.activeDocument.rasterItems[index].visibilityVariable`

#### Description

The visibility variable bound to the item.

#### Type

[Variable](.././Variable)

---

### RasterItem.visibleBounds

`app.activeDocument.rasterItems[index].visibleBounds`

#### Description

The visible bounds of the item including stroke width.

#### Type

Array of 4 numbers; read-only.

---

### RasterItem.width

`app.activeDocument.rasterItems[index].width`

#### Description

The width of the item.

#### Type

Number (double)

---

### RasterItem.wrapInside

`app.activeDocument.rasterItems[index].wrapInside`

#### Description

If `true`, the text frame object should be wrapped inside this object.

#### Type

Boolean

---

### RasterItem.wrapOffset

`app.activeDocument.rasterItems[index].wrapOffset`

#### Description

The offset to use when wrapping text around this object.

#### Type

Number (double)

---

### RasterItem.wrapped

`app.activeDocument.rasterItems[index].wrapped`

#### Description

If `true`, wrap text frame objects around this object (text frame must be above the object).

#### Type

Boolean

---

### RasterItem.zOrderPosition

`app.activeDocument.rasterItems[index].zOrderPosition`

#### Description

The position of this item within the stacking order of the group or layer (`parent`) that contains the item.

#### Type

Number; read-only.

---

## Methods

### RasterItem.colorize()

`app.activeDocument.rasterItems[index].colorize(rasterizeColor)`

#### Description

Colorizes the raster item with a CMYK or RGB Color.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `rasterizeColor` | [Color](.././Color) | CMYK or RGB Color to rasterize with |

#### Returns

Nothing.

---

### RasterItem.duplicate()

`app.activeDocument.rasterItems[index].duplicate([relativeObject][, insertionLocation])`

#### Description

Creates a duplicate of the selected object.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `relativeObject` | Object, optional | Object to duplicate to |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement), optional | Location to insert element |

#### Returns

[RasterItem](#rasteritem)

---

### RasterItem.move()

`app.activeDocument.rasterItems[index].move(relativeObject, insertionLocation)`

#### Description

Moves the object.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `relativeObject` | Object | Object to move element within |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement), optional | Location to move element to |

#### Returns

[RasterItem](#rasteritem)

---

### RasterItem.remove()

`app.activeDocument.rasterItems[index].remove()`

#### Description

Deletes this object.

#### Returns

Nothing.

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

#### Description

Scales the art item where `scaleX` is the horizontal scaling factor and `scaleY` is the vertical scaling factor. 100.0 = 100%.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `scaleX` | Number (double) | Horizontal scaling factor |
| `scaleY` | Number (double) | Vertical scaling factor |
| `changePositions` | Boolean, optional | Whether to effect art object positions and orientations |
| `changeFillPatterns` | Boolean, optional | Whether to transform fill patterns |
| `changeFillGradients` | Boolean, optional | Whether to transform fill gradients |
| `changeStrokePattern` | Boolean, optional | Whether to transform stroke patterns |
| `changeLineWidths` | Number (double), optional | The amount to scale line widths |
| `scaleAbout` | [Transformation](../scripting-constants#transformation), optional | The point to use as anchor, to transform about |

#### Returns

Nothing.

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

#### Description

Rotates the art item relative to the current rotation.

The object is rotated counter-clockwise if the `angle` value is positive, clockwise if the value is negative.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `angle` | Number (double) | The angle amount to rotate the element |
| `changePositions` | Boolean, optional | Whether to effect art object positions and orientations |
| `changeFillPatterns` | Boolean, optional | Whether to transform fill patterns |
| `changeFillGradients` | Boolean, optional | Whether to transform fill gradients |
| `changeStrokePattern` | Boolean, optional | Whether to transform stroke patterns |
| `rotateAbout` | [Transformation](../scripting-constants#transformation), optional | The point to use as anchor, to transform about |

#### Returns

Nothing.

---

### RasterItem.trace()

`app.activeDocument.rasterItems[index].trace()`

#### Description

Converts the raster art for this object to vector art, using default options.

Reorders the raster art into the source art of a plug-in group, and converts it into a group of filled and/or stroked paths that resemble the original image.

Creates and returns a [PluginItem](.././PluginItem) object that references a [TracingObject](.././TracingObject) object.

#### Returns

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

#### Description

Transforms the art item by applying a transformation matrix.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `transformationMatrix` | [Matrix](.././Matrix) | Transformation matrix to apply |
| `changePositions` | Boolean, optional | Whether to change Positions |
| `changeFillPatterns` | Boolean, optional | Whether to change Fill Patterns |
| `changeFillGradients` | Boolean, optional | Whether to change Fill Gradients |
| `changeStrokePattern` | Boolean, optional | Whether to change Stroke Pattern |
| `changeLineWidths` | Number (double), optional | The amount to scale line widths |
| `transformAbout` | [Transformation](../scripting-constants#transformation), optional | The point to use as anchor, to transform about |

#### Returns

Nothing.

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

#### Description

Repositions the art item relative to the current position, where `deltaX` is the horizontal offset and `deltaY` is the vertical offset.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `deltaX` | Number (double), optional | Horizontal offset |
| `deltaY` | Number (double), optional | Vertical offset |
| `transformObjects` | Boolean, optional | Whether to transform Objects |
| `transformFillPatterns` | Boolean, optional | Whether to transform Fill Patterns |
| `transformFillGradients` | Boolean, optional | Whether to transform Fill Gradients |
| `transformStrokePatterns` | Boolean, optional | Whether to transform Stroke Patterns |

#### Returns

Nothing.

---

### RasterItem.zOrder()

`app.activeDocument.rasterItems[index].zOrder(zOrderCmd)`

#### Description

Arranges the art item's position in the stacking order of the group or layer (parent) of this object.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `zOrderCmd` | [ZOrderMethod](../scripting-constants#zordermethod) | Stacking order arrangement method |

#### Returns

Nothing.
