---
title: graphic-customization-objects
---
# Graphic customization objects

These objects provide the ability to customize the appearance of user-interface controls before they are drawn:

- [ScriptUIGraphics object](#scriptuigraphics-object)
- [ScriptUIBrush object](#scriptuibrush-object)
- [ScriptUIFont object](#scriptuifont-object)
- [ScriptUIImage object](#scriptuiimage-object)
- [ScriptUIPath object](#scriptuipath-object)
- [ScriptUIPen object](#scriptuipen-object)

In addition, the Custom element class (if supported by the Adobe application you are using) allows you to define completely customized UI elements that are rendered by the application in a manner you define.

---

## ScriptUIGraphics Object

Most types of user-interface elements have a graphics property which contains an object of this type, which allows you to customize aspects of the element's appearance, such as the color and font. Use an onDraw callback function to set these properties or call the functions.

All measurements are in pixels.

### ScriptUIGraphics Class Attributes

These static properties provide color type constants with which to create Pen and Brush objects.

#### BrushType

##### Description

Contains the enumerated constants for the type argument of `newBrush()`. Types are:

- `SOLID_COLOR`
- `THEME_COLOR`

##### Type

Object

---

#### PenType

##### Description

Contains the enumerated constants for the type argument of `newPen()`. Types are:

- `SOLID_COLOR`
- `THEME_COLOR`

##### Type

Object

---

### ScriptUIGraphics Object Attributes

The object contains the following properties:

#### backgroundColor

`controlObj.graphics.backgroundColor`

##### Description

The background color of a container, or the parent background color for a control element.

##### Type

[ScriptUIBrush object](#scriptuibrush-object)

---

#### currentPath

`controlObj.graphics.currentPath`

##### Description

The current drawing path for this object.

##### Type

[ScriptUIPath object](#scriptuipath-object)

---

#### currentPoint

`controlObj.graphics.currentPoint`

##### Description

The current position in the drawing path for this object

##### Type

[Point object](../size-and-location-objects#point)

---

#### disabledBackgroundColor

`controlObj.graphics.disabledBackgroundColor`

##### Description

The background color for the disabled state of a container, or the parent background color for the disabled state of a control element.

##### Type

[ScriptUIBrush object](#scriptuibrush-object)

---

#### disabledForegroundColor

`controlObj.graphics.disabledForegroundColor`

##### Description

The foreground color for the disabled state of a container, or the parent foreground color for the disabled state of a control element.

##### Type

[ScriptUIPen object](#scriptuipen-object)

---

#### font

`controlObj.graphics.font`

##### Description

The default font to use in writing text.

##### Type

[ScriptUIFont object](#scriptuifont-object)

---

#### foregroundColor

`controlObj.graphics.foregroundColor`

##### Description

The foreground color for a container, or the parent foreground color of a control element.

##### Type

[ScriptUIPen object](#scriptuipen-object)

---

### ScriptUIGraphics Object Methods

These functions directly customize the appearance of the associated element by drawing on the screen, or create the Pen and Brush objects used to populate the graphics object or pass to the drawing methods:

---

#### closePath()

`controlObj.graphics.closePath()`

##### Description

Defines a line from the current position to the start point of the current path (the value of [`currentPath`](#currentpath)), which closes the path.

##### Returns

Nothing

---

#### drawFocusRing()

`controlObj.graphics.drawFocusRing(left, top[, width, height])`

##### Description

Draws a focus ring within the given rectangular region. This is a visual indicator showing that a given control has the keyboard focus (accepts keyboard input).

In Mac OS, this is typically a light blue ring around the control.

In Windows, it is typically a dashed-line rectangle around some part of the control.

##### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `left`, `top` | Number | Defines the top left corner of the region, in the coordinate system of the control that contains this graphics object. |
| `width`, `height` | Number | Optional. The width and height of the region in pixels. |

##### Returns

Nothing

---

#### drawImage()

`controlObj.graphics.drawImage(image, left, top[, width, height])`

##### Description

Draws an image within the given rectangular region, using the image file from the given image object that is appropriate to the control's current state.

##### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `image` | [ScriptUIImage object](#scriptuiimage-object) | The ScriptUIImage object containing the images to be drawn. |
| `left`, `top` | Number | Defines the top left corner of the drawing region, in the coordinate system of the control that contains this graphics object. |
| `width`, `height` | Number | Optional. The width and height of the drawing region in pixels. If specified, the image is stretched or shrunk to fit into the given rectangular area. If omitted, the image's original width or height is used. |

##### Returns

Nothing

---

#### drawOSControl()

`controlObj.graphics.drawOSControl()`

##### Description

Draws the platform-specific control associated with this element.

##### Returns

Nothing

---

#### drawString()

`controlObj.graphics.drawString(text, pen, x, y, font)`

##### Description

Draws a string of text starting at a given point, using the given pen and font.

##### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | String | The text string. |
| `pen` | [ScriptUIPen object](#scriptuipen-object) | The [ScriptUIPen object](#scriptuipen-object) for the drawing pen to use. |
| `x`, `y` | Number | The origin point of the drawn text, in the coordinate system of the control that contains this graphics object. |
| `font` | [ScriptUIFont object](#scriptuifont-object) | Optional. The [ScriptUIFont object](#scriptuifont-object) for the font to use. Default is the font value in this object. |

##### Returns

Nothing

---

#### ellipsePath()

`controlObj.graphics.ellipsePath(left, top[, width, height])`

##### Description

Defines an elliptical path within a given rectangular area in the currentPath object, which can be filled using [`fillPath()`](#fillpath) or stroked using [`strokePath()`](#strokepath).

Returns a [Point object](../size-and-location-objects#point) for the upper left corner of the area, which is the new [`currentPoint`](#currentpoint).

##### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `left`, `top` | Number | Defines the top left corner of the region, in the coordinate system of the control that contains this graphics object. |
| `width`, `height` | Number | The width and height of the region in pixels. |

##### Returns

[Point object](../size-and-location-objects#point)

---

#### fillPath()

`controlObj.graphics.fillPath(brush[, path])`

##### Description

Fills a path using a given painting brush.

##### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `brush` | [ScriptUIBrush object](#scriptuibrush-object) | The ScriptUIBrush object that defines the fill color. |
| `path` | [ScriptUIPath object](#scriptuipath-object) | Optional, the [ScriptUIPath object](#scriptuipath-object) for the path. If not supplied, operates on the currentPath. |

##### Returns

Nothing

---

#### lineto()

`controlObj.graphics.lineto(x, y)`

##### Description

Adds a path segment to the `currentPath`, from the `currentPoint` to the specified point.

Returns a [Point object](../size-and-location-objects#point) for the upper left corner of the area, which is the new [`currentPoint`](#currentpoint).

##### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `x`, `y` | Number | The destination point of the line, in the coordinate system of the control that contains this graphics object. |

##### Returns

[Point object](../size-and-location-objects#point)

---

#### measureString()

`controlObj.graphics.measureString(text, font[, boundingWidth])`

##### Description

Calculates the size needed to draw a text string in a given font.

Returns a [Dimension object](../size-and-location-objects#dimension) object containing the height and width of the string in pixels.

##### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | Text | The text string to measure. |
| `font` | [ScriptUIFont object](#scriptuifont-object) | Optional. The [ScriptUIFont object](#scriptuifont-object) for the font to use. Default is the font value in this object. |
| `boundingWidth` | Number | Optional. A number that specifies the maximum width in pixels of the area in which the text might be placed. Use when wrapping a long string of text across multiple lines. |

##### Returns

[Dimension object](../size-and-location-objects#dimension)

---

#### moveto()

`controlObj.graphics.moveto(x, y)`

##### Description

Adds a given point to the [`currentPath`](#currentpath), and makes it the [`currentPoint`](#currentpoint).

##### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `x`, `y` | Number | The new coordinates, in the coordinate system of the control that contains this graphics object. |

##### Returns

[Point object](../size-and-location-objects#point)

---

#### newBrush()

`controlObj.graphics.newBrush(type, color);`

##### Description

Creates a new painting brush.

##### Parameters

| Parameter | Type | Description |
|---|---|---|
| type | [BrushType](#brushtype) | The brush type, one of these constants: |
| | | - `ScriptUIGraphics.BrushType.SOLID_COLOR` |
| | | - `ScriptUIGraphics.BrushType.THEME_COLOR` |
| color | Array of Numbers | The brush color. If type is `SOLID_COLOR`, the color expressed as an array of three or four values, in the form `[R, B, G, A]` specifying the red, green, and blue values of the color and, optionally, the opacity (alpha channel). |
| | | All values are numbers in the range `[0.0...1.0]`. |
| | | An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque. |
| | | If the type is `THEME_COLOR`, the name string of the theme. |
| | | Theme colors are defined by the host application. |

##### Returns

[ScriptUIBrush object](#scriptuibrush-object).

---

#### newPath()

`controlObj.graphics.newPath();`

##### Description

Creates a new, empty drawing path in `currentPath`, replacing any existing path.

##### Returns

[ScriptUIPath object](#scriptuipath-object).

---

#### newPen()

`controlObj.graphics.newPen(type, color, lineWidth);`

##### Description

Creates a new drawing pen.

##### Parameters

| Parameter | Type | Description |
|---|---|---|
| type | [PenType](#pentype) | The pen type, one of these constants: |
| | | - `ScriptUIGraphics.PenType.SOLID_COLOR` |
| | | - `ScriptUIGraphics.PenType.THEME_COLOR` |
| `color` | Array of Numbers | The pen color. If type is SOLID_COLOR, the color expressed as an array of three or four values, in the form `[R, B, G, A]` specifying the red, green, and blue values of the color and, optionally, the opacity (alpha channel). |
| | | All values are numbers in the range `[0.0...1.0]`. |
| | | An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque. |
| | | If the type is `THEME_COLOR`, the name string of the theme. |
| | | Theme colors are defined by the host application. |
| `lineWidth` | Pixels | The width in pixels of the line this pen will draw. The line is centered around the current point. For example, if lineWidth is 2, drawing a line from (0, 10) to (5, 10) paints the two rows of pixels directly above and below y-position 10. |

##### Returns

[ScriptUIPen object](#scriptuipen-object).

---

#### rectPath()

`controlObj.graphics.rectPath(left, top[, width, height])`

##### Description

Defines a rectangular path in the currentPath object, which can be filled using [`fillPath()`](#fillpath) or stroked using [`strokePath()`](#strokepath).

Returns a [Point object](../size-and-location-objects#point) for the upper left corner of the rectangle, which is the new currentPoint.

##### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `left`, `top` | Number | Defines the top left corner of the region, in the coordinate system of the control that contains this graphics object. |
| `width`, `height` | Number | The width and height of the region in pixels. |

##### Returns

[Point object](../size-and-location-objects#point)

---

#### strokePath()

`controlObj.graphics.fillPath(pen[, path])`

##### Description

Strokes the path segments of a path with a given drawing pen.

##### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `pen` | [ScriptUIPen object](#scriptuipen-object) | The [ScriptUIPen object](#scriptuipen-object) that defines the color and line width. |
| `path` | [ScriptUIPath object](#scriptuipath-object) | Optional, the [ScriptUIPath object](#scriptuipath-object) for the path. If not supplied, operates on the currentPath. |

##### Returns

Nothing

---

## ScriptUIBrush Object

A helper object that encapsulates the qualities of a brush used to paint fill into a path in a control. Create with the `newBrush()` method of the `ScriptUIGraphics` object.

Used as a value of `backgroundColor` and `disabledBackgroundColor`.

Passed as an argument to `fillPath()`.

### ScriptUIBrush Object Attributes

The object contains the following properties:

| Property | Type | Description |
|---|---|---|
| `color` | Array of Number | The paint color to use when the type is `SOLID_COLOR`. An array in the form [R, B, G, A] specifying the red, green, blue values of the color and the opacity (alpha channel) value as numbers in the range [0.0...1.0]. |
| | | An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque. |
| `theme` | String | The name of a color theme to use as a painting texture when the type is `THEME_COLOR`. Theme colors are defined by the host application. |
| `type` | Number | The brush type, one of these constants: |
| | | - `ScriptUIGraphics.BrushType.SOLID_COLOR` |
| | | - `ScriptUIGraphics.BrushType.THEME_COLOR` |

---

## ScriptUIFont Object

A helper object that encapsulates the qualities of a font used to draw text into a control. Create with the [`newFont()`](../scriptui-class#scriptuinewfont) method of the `ScriptUI` class.

Used as a value of font.

Passed as an argument to [`drawString()`](#drawstring) and [`measureString()`](#measurestring).

### ScriptUIFont Object Attributes

The object contains the following properties:

| Property | Type | Description |
|---|---|---|
| `family` | String | The font family name. |
| `name` | String | The complete font name, consisting of the family and style, if specified. |
| `size` | Number | The font point size. |
| `style` | Object | The font style. One of these constants: |
| | | - `ScriptUI.FontStyle.REGULAR` |
| | | - `ScriptUI.FontStyle.BOLD` |
| | | - `ScriptUI.FontStyle.ITALIC` |
| | | - `ScriptUI.FontStyle.BOLDITALIC` |
| `substitute` | String | The name of a substitution font, a fallback font to substitute for this font if the requested font family or style is not available. |

---

## ScriptUIImage Object

A helper object that encapsulates a set of images that can be drawn into a control. Alternate versions of an image can reflect the state, such as a dimmed version for a disabled control.

An object of this type is created automatically when a script uses a pathname or File object to set the image property of an Image, IconButton, or ListItem object; the new object becomes the value of that property.

You can create this object explicitly using the [`newImage()`](../scriptui-class#scriptuinewimage) method of the `ScriptUI` class. When you do this, you can specify alternate versions of the image to be used for different control states, such as enabled, disabled, and rollover.

This object is passed as an argument to [`drawImage()`](#drawimage).

### ScriptUIImage Object Attributes

The object contains the following read-only properties:

| Property | Type | Description |
| --- | --- | --- |
| `format` | String | The image format. Scripts can define images in `JPEG` and `PNG` format. Applications can define images in the `resource` format. |
| `name` | String | The image name, either a file name or resource name. |
| `pathname` | String | The full path to the file that contains the image. |
| `size` | Dimension | A Dimension object that defines the size of the image in pixels. |

---

## ScriptUIPath Object

A helper object that encapsulates a drawing path for a figure to be drawn into a control. Create the object the [`newPath()`](#newpath) method and define path segments with the `moveto()`, `lineto()`, `rectPath()`, and `ellipsePath()` methods of the `ScriptUIGraphics` object.

Used as a value of currentPath, where it is acted upon by [`closePath()`](#closepath) and other methods.

Can be passed as an optional argument to [`fillPath()`](#fillpath) and [`strokePath()`](#strokepath) (which otherwise act upon the [`currentPath`](#currentpath)).

The class defines no properties or methods.

---

## ScriptUIPen Object

A helper object that encapsulates the qualities of a pen used to stroke path segments in a control. Create with the [`newPen()`](#newpen) method of the `ScriptUIGraphics` object.

Used as a value of [`foregroundColor`](#foregroundcolor) and [`disabledForegroundColor`](#disabledforegroundcolor).

Passed as an argument to [`drawString()`](#drawstring) and [`strokePath()`](#strokepath).

### ScriptUIPen Object Attributes

The object contains the following properties:

| Property | Type | Description |
|---|---|---|
| `color` | Array of Number | The paint color to use when the type is SOLID_COLOR. An array in the form [R, B, G, A] specifying the red, green, blue values of the color and the opacity (alpha channel) value as numbers in the range [0.0...1.0]. |
| | | An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque. |
| `lineWidth` | Number | The pixel width of the drawing line. |
| `theme` | String | The name of a color theme to use for drawing when the type is `THEME_COLOR`. Theme colors are defined by the host application. |
| `type` | Number | The pen type, one of these constants: |
| | | - `ScriptUIGraphics.PenType.SOLID_COLOR` |
| | | - `ScriptUIGraphics.PenType.THEME_COLOR` |

---

## Custom element class

Elements of the Custom class differ from typical UI elements in that they have no default appearance; the script which creates a custom element is responsible for drawing it by defining the element's onDraw event handler function. This allows scripts to create any appearance for custom elements that can be rendered via the drawing functions defined for a UI element's graphics object.

Custom elements have the same common properties that other types of control elements have (see [Common properties](../common-properties)). The different types of custom elements have additional properties.

The Custom element class has the following types of elements:

| Element | Description | |
|---|---|---|
| `customBoundedValue` | Can be used to implement controls whose 'value' can vary within minimum and maximum bounds, like the Progressbar, Slider, and Scrollbar. Has the same additional properties as those controls: | |
| | - `value` | |
| | - `minvalue` | |
| | - `maxvalue` | |
| | - `shortcutKey` | |
| | If the value property is changed, the control receives an onChange event notification, followed by an onDraw event notification, so the element can redraw itself with the changed state. | |
| `customButton` | Can be used to implement various types of button controls, like the `Button`, `IconButton` with text, `Checkbox`, and so on. Additional properties are: | |
| | - `image` | |
| | - `shortcutKey` | |
| | - `text` | |
| | - `value` | |
| `customView` | Has an `image` property that allows a script to define an image to display. | |
| | If no `onDraw` function is defined and the image property is set, the default appearance is simply the specified image, rendered centered in the bounds of the element. | |

A custom element's onDraw event handler function is not called when the mouse enters or leaves the screen region occupied by the element.

If you need to force a drawing update in such cases, you must call `notify("onDraw")` for the element, in response to a mouseOver or mouseout event for the element.

In the following example, the script forces a visual update for a customButton element when the mouse enters or leaves the button, by handling mouseover or mouseout events for the custom button:

```javascript
var res =
"""palette {
 text:'Custom elements demo',
 properties:{ closeOnKey:'OSCmnd+W', resizeable:true },
 customBtn: Custom {
 type:'customButton',
 text:'Redraw original image'
 },
 customImageViewer: Custom {
 type:'customView',
 alignment:['fill','fill']
 }
}""";

var w = new Window (res);
w.customBtn.onDraw = drawButton;
w.customBtn.addEventListener ("mouseover", btnMouseEventHandler, false);
w.customBtn.addEventListener ("mouseout", btnMouseEventHandler, false);

// ...

function btnMouseEventHandler (event) {
 try {
 //
 Redraw the button on mouseover and mouseout
 event.target.notify("onDraw");
 } catch (e) {
 ...
 }
}

function drawButton (drawingState) {
 ...
}
```
