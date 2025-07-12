---
title: 图形自定义对象
---
# 图形自定义对象

这些对象提供了在绘制用户界面控件之前自定义其外观的能力：

- [ScriptUIGraphics 对象](#scriptuigraphics-object)
- [ScriptUIBrush 对象](#scriptuibrush-object)
- [ScriptUIFont 对象](#scriptuifont-object)
- [ScriptUIImage 对象](#scriptuiimage-object)
- [ScriptUIPath 对象](#scriptuipath-object)
- [ScriptUIPen 对象](#scriptuipen-object)

此外，Custom 元素类（如果您使用的 Adobe 应用程序支持）允许您定义完全自定义的 UI 元素，这些元素由应用程序按照您定义的方式进行渲染。

---

## ScriptUIGraphics 对象

大多数类型的用户界面元素都有一个 `graphics` 属性，该属性包含此类型的对象，允许您自定义元素外观的各个方面，例如颜色和字体。使用 `onDraw` 回调函数来设置这些属性或调用这些函数。

所有测量值均以像素为单位。

### ScriptUIGraphics 类属性

这些静态属性提供了用于创建 Pen 和 Brush 对象的颜色类型常量。

#### BrushType

##### 描述

包含 `newBrush()` 的 `type` 参数的枚举常量。类型包括：

- `SOLID_COLOR`
- `THEME_COLOR`

##### 类型

Object

---

#### PenType

##### 描述

包含 `newPen()` 的 `type` 参数的枚举常量。类型包括：

- `SOLID_COLOR`
- `THEME_COLOR`

##### 类型

Object

---

### ScriptUIGraphics 对象属性

该对象包含以下属性：

#### backgroundColor

`controlObj.graphics.backgroundColor`

##### 描述

容器的背景颜色，或控件元素的父背景颜色。

##### 类型

[ScriptUIBrush 对象](#scriptuibrush-object)

---

#### currentPath

`controlObj.graphics.currentPath`

##### 描述

此对象的当前绘制路径。

##### 类型

[ScriptUIPath 对象](#scriptuipath-object)

---

#### currentPoint

`controlObj.graphics.currentPoint`

##### 描述

此对象的绘制路径中的当前位置。

##### 类型

[Point 对象](../size-and-location-objects#point)

---

#### disabledBackgroundColor

`controlObj.graphics.disabledBackgroundColor`

##### 描述

容器禁用状态的背景颜色，或控件元素禁用状态的父背景颜色。

##### 类型

[ScriptUIBrush 对象](#scriptuibrush-object)

---

#### disabledForegroundColor

`controlObj.graphics.disabledForegroundColor`

##### 描述

容器禁用状态的前景颜色，或控件元素禁用状态的父前景颜色。

##### 类型

[ScriptUIPen 对象](#scriptuipen-object)

---

#### font

`controlObj.graphics.font`

##### 描述

用于书写文本的默认字体。

##### 类型

[ScriptUIFont 对象](#scriptuifont-object)

---

#### foregroundColor

`controlObj.graphics.foregroundColor`

##### 描述

容器的前景颜色，或控件元素的父前景颜色。

##### 类型

[ScriptUIPen 对象](#scriptuipen-object)

---

### ScriptUIGraphics 对象方法

这些函数通过在屏幕上绘制来直接自定义关联元素的外观，或创建用于填充图形对象或传递给绘制方法的 Pen 和 Brush 对象：

---

#### closePath()

`controlObj.graphics.closePath()`

##### 描述

定义从当前位置到当前路径起点（[`currentPath`](#currentpath) 的值）的线，从而闭合路径。

##### 返回

无

---

#### drawFocusRing()

`controlObj.graphics.drawFocusRing(left, top[, width, height])`

##### 描述

在给定的矩形区域内绘制焦点环。这是一个视觉指示器，显示某个控件具有键盘焦点（接受键盘输入）。

在 Mac OS 中，这通常是控件周围的浅蓝色环。

在 Windows 中，这通常是控件某部分的虚线矩形。

##### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `left`, `top` | Number | 定义区域的左上角，位于包含此图形对象的控件的坐标系中。 |
| `width`, `height` | Number | 可选。区域的宽度和高度（以像素为单位）。 |

##### 返回

无

---

#### drawImage()

`controlObj.graphics.drawImage(image, left, top[, width, height])`

##### 描述

在给定的矩形区域内绘制图像，使用来自给定图像对象的图像文件，该文件适合控件的当前状态。

##### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `image` | [ScriptUIImage 对象](#scriptuiimage-object) | 包含要绘制的图像的 ScriptUIImage 对象。 |
| `left`, `top` | Number | 定义绘制区域的左上角，位于包含此图形对象的控件的坐标系中。 |
| `width`, `height` | Number | 可选。绘制区域的宽度和高度（以像素为单位）。如果指定，图像将被拉伸或缩小以适应给定的矩形区域。如果省略，则使用图像的原始宽度或高度。 |

##### 返回

无

---

#### drawOSControl()

`controlObj.graphics.drawOSControl()`

##### 描述

绘制与此元素关联的平台特定控件。

##### 返回

无

---

#### drawString()

`controlObj.graphics.drawString(text, pen, x, y, font)`

##### 描述

在给定点开始绘制文本字符串，使用给定的笔和字体。

##### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `text` | String | 文本字符串。 |
| `pen` | [ScriptUIPen 对象](#scriptuipen-object) | 用于绘制的 [ScriptUIPen 对象](#scriptuipen-object)。 |
| `x`, `y` | Number | 绘制文本的起点，位于包含此图形对象的控件的坐标系中。 |
| `font` | [ScriptUIFont 对象](#scriptuifont-object) | 可选。用于绘制的 [ScriptUIFont 对象](#scriptuifont-object)。默认为此对象中的字体值。 |

##### 返回

无

---

#### ellipsePath()

`controlObj.graphics.ellipsePath(left, top[, width, height])`

##### 描述

在 `currentPath` 对象中定义一个椭圆路径，该路径可以使用 [`fillPath()`](#fillpath) 填充或使用 [`strokePath()`](#strokepath) 描边。

返回区域的左上角的 [Point 对象](../size-and-location-objects#point)，这是新的 [`currentPoint`](#currentpoint)。

##### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `left`, `top` | Number | 定义区域的左上角，位于包含此图形对象的控件的坐标系中。 |
| `width`, `height` | Number | 区域的宽度和高度（以像素为单位）。 |

##### 返回

[Point 对象](../size-and-location-objects#point)

---

#### fillPath()

`controlObj.graphics.fillPath(brush[, path])`

##### 描述

使用给定的绘画笔刷填充路径。

##### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `brush` | [ScriptUIBrush 对象](#scriptuibrush-object) | 定义填充颜色的 ScriptUIBrush 对象。 |
| `path` | [ScriptUIPath 对象](#scriptuipath-object) | 可选，路径的 [ScriptUIPath 对象](#scriptuipath-object)。如果未提供，则对 currentPath 进行操作。 |

##### 返回

无

---

#### lineto()

`controlObj.graphics.lineto(x, y)`

##### 描述

向 `currentPath` 添加一个路径段，从 `currentPoint` 到指定点。

返回区域的左上角的 [Point 对象](../size-and-location-objects#point)，这是新的 [`currentPoint`](#currentpoint)。

##### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `x`, `y` | Number | 线的目标点，位于包含此图形对象的控件的坐标系中。 |

##### 返回

[Point 对象](../size-and-location-objects#point)

---

#### measureString()

`controlObj.graphics.measureString(text, font[, boundingWidth])`

##### 描述

计算在给定字体中绘制文本字符串所需的大小。

返回包含字符串高度和宽度的 [Dimension 对象](../size-and-location-objects#dimension)（以像素为单位）。

##### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `text` | Text | 要测量的文本字符串。 |
| `font` | [ScriptUIFont 对象](#scriptuifont-object) | 可选。用于绘制的 [ScriptUIFont 对象](#scriptuifont-object)。默认为此对象中的字体值。 |
| `boundingWidth` | Number | 可选。指定文本可能放置区域的最大宽度（以像素为单位）。当将长文本字符串跨多行换行时使用。 |

##### 返回

[Dimension 对象](../size-and-location-objects#dimension)

---

#### moveto()

`controlObj.graphics.moveto(x, y)`

##### 描述

将给定点添加到 [`currentPath`](#currentpath)，并将其设为 [`currentPoint`](#currentpoint)。

##### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `x`, `y` | Number | 新坐标，位于包含此图形对象的控件的坐标系中。 |

##### 返回

[Point 对象](../size-and-location-objects#point)

---

#### newBrush()

`controlObj.graphics.newBrush(type, color);`

##### 描述

创建一个新的绘画笔刷。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| type | [BrushType](#brushtype) | 笔刷类型，以下常量之一： |
| | | - `ScriptUIGraphics.BrushType.SOLID_COLOR` |
| | | - `ScriptUIGraphics.BrushType.THEME_COLOR` |
| color | Array of Numbers | 笔刷颜色。如果类型为 `SOLID_COLOR`，则颜色表示为三个或四个值的数组，形式为 `[R, B, G, A]`，指定颜色的红、绿、蓝值以及可选的透明度（alpha 通道）。 |
| | | 所有值均为 `[0.0...1.0]` 范围内的数字。 |
| | | 透明度为 0 表示完全透明，透明度为 1 表示完全不透明。 |
| | | 如果类型为 `THEME_COLOR`，则为主题的名称字符串。 |
| | | 主题颜色由宿主应用程序定义。 |

##### 返回

[ScriptUIBrush 对象](#scriptuibrush-object)。

---

#### newPath()

`controlObj.graphics.newPath();`

##### 描述

在 `currentPath` 中创建一个新的空绘制路径，替换任何现有路径。

##### 返回

[ScriptUIPath 对象](#scriptuipath-object)。

---

#### newPen()

`controlObj.graphics.newPen(type, color, lineWidth);`

##### 描述

创建一个新的绘制笔。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| type | [PenType](#pentype) | 笔类型，以下常量之一： |
| | | - `ScriptUIGraphics.PenType.SOLID_COLOR` |
| | | - `ScriptUIGraphics.PenType.THEME_COLOR` |
| `color` | Array of Numbers | 笔颜色。如果类型为 SOLID_COLOR，则颜色表示为三个或四个值的数组，形式为 `[R, B, G, A]`，指定颜色的红、绿、蓝值以及可选的透明度（alpha 通道）。 |
| | | 所有值均为 `[0.0...1.0]` 范围内的数字。 |
| | | 透明度为 0 表示完全透明，透明度为 1 表示完全不透明。 |
| | | 如果类型为 `THEME_COLOR`，则为主题的名称字符串。 |
| | | 主题颜色由宿主应用程序定义。 |
| `lineWidth` | Pixels | 此笔绘制的线的宽度（以像素为单位）。线以当前点为中心。例如，如果 lineWidth 为 2，则从 (0, 10) 到 (5, 10) 绘制一条线会在 y 位置 10 的正上方和正下方绘制两行像素。 |

##### 返回

[ScriptUIPen 对象](#scriptuipen-object)。

---

#### rectPath()

`controlObj.graphics.rectPath(left, top[, width, height])`

##### 描述

在 `currentPath` 对象中定义一个矩形路径，该路径可以使用 [`fillPath()`](#fillpath) 填充或使用 [`strokePath()`](#strokepath) 描边。

返回矩形左上角的 [Point 对象](../size-and-location-objects#point)，这是新的 currentPoint。

##### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `left`, `top` | Number | 定义区域的左上角，位于包含此图形对象的控件的坐标系中。 |
| `width`, `height` | Number | 区域的宽度和高度（以像素为单位）。 |

##### 返回

[Point 对象](../size-and-location-objects#point)

---

#### strokePath()

`controlObj.graphics.fillPath(pen[, path])`

##### 描述

使用指定的绘图笔触绘制路径段。

##### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `pen` | [ScriptUIPen 对象](#scriptuipen-object) | 定义颜色和线宽的 [ScriptUIPen 对象](#scriptuipen-object)。 |
| `path` | [ScriptUIPath 对象](#scriptuipath-object) | 可选参数，指定路径的 [ScriptUIPath 对象](#scriptuipath-object)。若未提供，则操作当前路径（currentPath）。 |

##### 返回值

无

---

## ScriptUIBrush 对象

辅助对象，封装了用于填充控件路径的画笔属性。通过 `ScriptUIGraphics` 对象的 `newBrush()` 方法创建。

用作 `backgroundColor` 和 `disabledBackgroundColor` 的属性值。

作为参数传递给 `fillPath()`。

### ScriptUIBrush 对象属性

该对象包含以下属性：

| 属性 | 类型 | 描述 |
|---|---|---|
| `color` | 数值数组 | 当类型为 `SOLID_COLOR` 时使用的颜色值。格式为 [R, G, B, A] 的数组，指定颜色的红、绿、蓝分量和透明度（Alpha通道），数值范围 [0.0...1.0]。 |
| | | 透明度为 0 表示完全透明，1 表示完全不透明。 |
| `theme` | 字符串 | 当类型为 `THEME_COLOR` 时使用的颜色主题名称。主题颜色由宿主应用程序定义。 |
| `type` | 数值 | 画笔类型，取以下常量之一： |
| | | - `ScriptUIGraphics.BrushType.SOLID_COLOR` |
| | | - `ScriptUIGraphics.BrushType.THEME_COLOR` |

---

## ScriptUIFont 对象

辅助对象，封装了用于在控件中绘制文本的字体属性。通过 `ScriptUI` 类的 [`newFont()`](../scriptui-class#scriptuinewfont) 方法创建。

用作 font 属性的值。

作为参数传递给 [`drawString()`](#drawstring) 和 [`measureString()`](#measurestring)。

### ScriptUIFont 对象属性

该对象包含以下属性：

| 属性 | 类型 | 描述 |
|---|---|---|
| `family` | 字符串 | 字体系列名称。 |
| `name` | 字符串 | 完整的字体名称，包含家族和样式（如指定）。 |
| `size` | 数值 | 字体磅值大小。 |
| `style` | 对象 | 字体样式。取以下常量之一： |
| | | - `ScriptUI.FontStyle.REGULAR` |
| | | - `ScriptUI.FontStyle.BOLD` |
| | | - `ScriptUI.FontStyle.ITALIC` |
| | | - `ScriptUI.FontStyle.BOLDITALIC` |
| `substitute` | 字符串 | 替代字体名称，当请求的字体系列或样式不可用时使用的回退字体。 |

---

## ScriptUIImage 对象

辅助对象，封装了可绘制到控件中的一组图像。图像的不同版本可以反映控件状态，例如禁用状态的变暗版本。

当脚本使用路径名或 File 对象设置 Image、IconButton 或 ListItem 对象的 image 属性时，会自动创建此类型的对象；该新对象将成为该属性的值。

可以通过 `ScriptUI` 类的 [`newImage()`](../scriptui-class#scriptuinewimage) 方法显式创建此对象。此时可以指定用于不同控件状态（如启用、禁用和悬停）的图像替代版本。

该对象作为参数传递给 [`drawImage()`](#drawimage)。

### ScriptUIImage 对象属性

该对象包含以下只读属性：

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `format` | 字符串 | 图像格式。脚本可定义 `JPEG` 和 `PNG` 格式的图像。应用程序可定义 `resource` 格式的图像。 |
| `name` | 字符串 | 图像名称，可以是文件名或资源名。 |
| `pathname` | 字符串 | 包含图像的文件的完整路径。 |
| `size` | Dimension | 定义图像像素尺寸的 Dimension 对象。 |

---

## ScriptUIPath 对象

辅助对象，封装了要绘制到控件中的图形路径。通过 [`newPath()`](#newpath) 方法创建，并使用 `ScriptUIGraphics` 对象的 `moveto()`、`lineto()`、`rectPath()` 和 `ellipsePath()` 方法定义路径段。

用作 currentPath 的值，由 [`closePath()`](#closepath) 和其他方法操作。

可作为可选参数传递给 [`fillPath()`](#fillpath) 和 [`strokePath()`](#strokepath)（否则作用于 [`currentPath`](#currentpath)）。

该类未定义任何属性或方法。

---

## ScriptUIPen 对象

辅助对象，封装了用于描边控件路径段的画笔属性。通过 `ScriptUIGraphics` 对象的 [`newPen()`](#newpen) 方法创建。

用作 [`foregroundColor`](#foregroundcolor) 和 [`disabledForegroundColor`](#disabledforegroundcolor) 的属性值。

作为参数传递给 [`drawString()`](#drawstring) 和 [`strokePath()`](#strokepath)。

### ScriptUIPen 对象属性

该对象包含以下属性：

| 属性 | 类型 | 描述 |
|---|---|---|
| `color` | 数值数组 | 当类型为 SOLID_COLOR 时使用的颜色值。格式为 [R, G, B, A] 的数组，指定颜色的红、绿、蓝分量和透明度（Alpha通道），数值范围 [0.0...1.0]。 |
| | | 透明度为 0 表示完全透明，1 表示完全不透明。 |
| `lineWidth` | 数值 | 绘制线条的像素宽度。 |
| `theme` | 字符串 | 当类型为 `THEME_COLOR` 时用于绘制的颜色主题名称。主题颜色由宿主应用程序定义。 |
| `type` | 数值 | 画笔类型，取以下常量之一： |
| | | - `ScriptUIGraphics.PenType.SOLID_COLOR` |
| | | - `ScriptUIGraphics.PenType.THEME_COLOR` |

---

## 自定义元素类

Custom 类的元素与典型 UI 元素不同之处在于它们没有默认外观；创建自定义元素的脚本需要通过定义元素的 onDraw 事件处理函数来负责绘制它。这允许脚本为自定义元素创建任何可以通过 UI 元素的 graphics 对象定义的绘图函数呈现的外观。

自定义元素具有与其他类型控件元素相同的公共属性（参见[公共属性](../common-properties)）。不同类型的自定义元素具有额外的属性。

Custom 元素类包含以下类型的元素：

| 元素 | 描述 | |
|---|---|---|
| `customBoundedValue` | 可用于实现其"值"可以在最小和最大范围内变化的控件，如 Progressbar、Slider 和 Scrollbar。具有与这些控件相同的附加属性： | |
| | - `value` | |
| | - `minvalue` | |
| | - `maxvalue` | |
| | - `shortcutKey` | |
| | 如果 value 属性发生变化，控件会收到 onChange 事件通知，然后是 onDraw 事件通知，因此元素可以重新绘制自身以反映更改后的状态。 | |
| `customButton` | 可用于实现各种类型的按钮控件，如 `Button`、带文本的 `IconButton`、`Checkbox` 等。附加属性包括： | |
| | - `image` | |
| | - `shortcutKey` | |
| | - `text` | |
| | - `value` | |
| `customView` | 具有 `image` 属性，允许脚本定义要显示的图像。 | |
| | 如果未定义 `onDraw` 函数且设置了 image 属性，则默认外观仅为指定的图像，在元素的边界范围内居中呈现。 | |

当鼠标进入或离开元素占据的屏幕区域时，不会调用自定义元素的 onDraw 事件处理函数。

如果在这种情况下需要强制更新绘图，则必须为元素调用 `notify("onDraw")`，以响应元素的 mouseover 或 mouseout 事件。

在以下示例中，脚本通过在自定义按钮的 mouseover 或 mouseout 事件时处理这些事件，强制更新 customButton 元素的视觉外观：

```javascript
var res =
"""palette {
 text:'自定义元素演示',
 properties:{ closeOnKey:'OSCmnd+W', resizeable:true },
 customBtn: Custom {
 type:'customButton',
 text:'重绘原始图像'
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
 在 mouseover 和 mouseout 时重绘按钮
 event.target.notify("onDraw");
 } catch (e) {
 ...
 }
}

function drawButton (drawingState) {
 ...
}
```
