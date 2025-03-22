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

[Point 对象](./size-and-location-objects.md#point)

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

|     参数     |  类型  |                                                      描述                                                       |
| ----------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| `left`, `top`     | Number | 定义区域的左上角，位于包含此图形对象的控件的坐标系中。 |
| `width`, `height` | Number | 可选。区域的宽度和高度（以像素为单位）。                                                                |

##### 返回

无

---

#### drawImage()

`controlObj.graphics.drawImage(image, left, top[, width, height])`

##### 描述

在给定的矩形区域内绘制图像，使用来自给定图像对象的图像文件，该文件适合控件的当前状态。

##### 参数

|     参数     |                     类型                      |                                                                                                   描述                                                                                                    |
| ----------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `image`           | [ScriptUIImage 对象](#scriptuiimage-object) | 包含要绘制的图像的 ScriptUIImage 对象。                                                                                                                                                      |
| `left`, `top`     | Number                                        | 定义绘制区域的左上角，位于包含此图形对象的控件的坐标系中。                                                                                   |
| `width`, `height` | Number                                        | 可选。绘制区域的宽度和高度（以像素为单位）。如果指定，图像将被拉伸或缩小以适应给定的矩形区域。如果省略，则使用图像的原始宽度或高度。 |

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

| 参数 |                    类型                     |                                                       描述                                                        |
| --------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `text`    | String                                      | 文本字符串。                                                                                                         |
| `pen`     | [ScriptUIPen 对象](#scriptuipen-object)   | 用于绘制的 [ScriptUIPen 对象](#scriptuipen-object)。                                                |
| `x`, `y`  | Number                                      | 绘制文本的起点，位于包含此图形对象的控件的坐标系中。          |
| `font`    | [ScriptUIFont 对象](#scriptuifont-object) | 可选。用于绘制的 [ScriptUIFont 对象](#scriptuifont-object)。默认为此对象中的字体值。 |

##### 返回

无

---

#### ellipsePath()

`controlObj.graphics.ellipsePath(left, top[, width, height])`

##### 描述

在 `currentPath` 对象中定义一个椭圆路径，该路径可以使用 [`fillPath()`](#fillpath) 填充或使用 [`strokePath()`](#strokepath) 描边。

返回区域的左上角的 [Point 对象](./size-and-location-objects.md#point)，这是新的 [`currentPoint`](#currentpoint)。

##### 参数

|     参数     |  类型  |                                                      描述                                                       |
| ----------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| `left`, `top`     | Number | 定义区域的左上角，位于包含此图形对象的控件的坐标系中。 |
| `width`, `height` | Number | 区域的宽度和高度（以像素为单位）。                                                                          |

##### 返回

[Point 对象](./size-and-location-objects.md#point)

---

#### fillPath()

`controlObj.graphics.fillPath(brush[, path])`

##### 描述

使用给定的绘画笔刷填充路径。

##### 参数

| 参数 |                     类型                      |                                                      描述                                                      |
| --------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `brush`   | [ScriptUIBrush 对象](#scriptuibrush-object) | 定义填充颜色的 ScriptUIBrush 对象。                                                                 |
| `path`    | [ScriptUIPath 对象](#scriptuipath-object)   | 可选，路径的 [ScriptUIPath 对象](#scriptuipath-object)。如果未提供，则对 currentPath 进行操作。 |

##### 返回

无

---

#### lineto()

`controlObj.graphics.lineto(x, y)`

##### 描述

向 `currentPath` 添加一个路径段，从 `currentPoint` 到指定点。

返回区域的左上角的 [Point 对象](./size-and-location-objects.md#point)，这是新的 [`currentPoint`](#currentpoint)。

##### 参数

| 参数 |  类型  |                                                  描述                                                   |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| `x`, `y`  | Number | 线的目标点，位于包含此图形对象的控件的坐标系中。 |

##### 返回

[Point 对象](./size-and-location-objects.md#point)

---

#### measureString()

`controlObj.graphics.measureString(text, font[, boundingWidth])`

##### 描述

计算在给定字体中绘制文本字符串所需的大小。

返回包含字符串高度和宽度的 [Dimension 对象](./size-and-location-objects.md#dimension)（以像素为单位）。

##### 参数

|    参数    |                    类型                     |                                                                                 描述                                                                                 |
| --------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`          | Text                                        | 要测量的文本字符串。                                                                                                                                                 |
| `font`          | [ScriptUIFont 对象](#scriptuifont-object) | 可选。用于绘制的 [ScriptUIFont 对象](#scriptuifont-object)。默认为此对象中的字体值。                                                    |
| `boundingWidth` | Number                                      | 可选。指定文本可能放置区域的最大宽度（以像素为单位）。当将长文本字符串跨多行换行时使用。 |

##### 返回

[Dimension 对象](./size-and-location-objects.md#dimension)

---

#### moveto()

`controlObj.graphics.moveto(x, y)`

##### 描述

将给定点添加到 [`currentPath`](#currentpath)，并将其设为 [`currentPoint`](#currentpoint)。

##### 参数

| 参数 |  类型  |                                           描述                                            |
| --------- | ------ | ------------------------------------------------------------------------------------------------ |
| `x`, `y`  | Number | 新坐标，位于包含此图形对象的控件的坐标系中。 |

##### 返回

[Point 对象](./size-and-location-objects.md#point)

---

#### newBrush()

`controlObj.graphics.newBrush(type, color);`

##### 描述

创建一个新的绘画笔刷。

##### 参数

| 参数 |          类型           |                                                                                                             描述                                                                                                              |
|-----------|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type      | [BrushType](#brushtype) | 笔刷类型，以下常量之一：                                                                                                                                                                                              |
|           |                         | - `ScriptUIGraphics.BrushType.SOLID_COLOR`                                                                                                                                                                                           |
|           |                         | - `ScriptUIGraphics.BrushType.THEME_COLOR`                                                                                                                                                                                           |
| color     | Array of Numbers        | 笔刷颜色。如果类型为 `SOLID_COLOR`，则颜色表示为三个或四个值的数组，形式为 `[R, B, G, A]`，指定颜色的红、绿、蓝值以及可选的透明度（alpha 通道）。 |
|           |                         | 所有值均为 `[0.0...1.0]` 范围内的数字。                                                                                                                                                                                   |
|           |                         | 透明度为 0 表示完全透明，透明度为 1 表示完全不透明。                                                                                                                                                           |
|           |                         | 如果类型为 `THEME_COLOR`，则为主题的名称字符串。                                                                                                                                                                          |
|           |                         | 主题颜色由宿主应用程序定义。                                                                                                                                                                                    |

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

|  参数  |        类型         |                                                                                                                   描述                                                                                                                   |
|-------------|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type        | [PenType](#pentype) | 笔类型，以下常量之一：                                                                                                                                                                                                           |
|             |                     | - `ScriptUIGraphics.PenType.SOLID_COLOR`                                                                                                                                                                                                        |
|             |                     | - `ScriptUIGraphics.PenType.THEME_COLOR`                                                                                                                                                                                                        |
| `color`     | Array of Numbers    | 笔颜色。如果类型为 SOLID_COLOR，则颜色表示为三个或四个值的数组，形式为 `[R, B, G, A]`，指定颜色的红、绿、蓝值以及可选的透明度（alpha 通道）。                |
|             |                     | 所有值均为 `[0.0...1.0]` 范围内的数字。                                                                                                                                                                                              |
|             |                     | 透明度为 0 表示完全透明，透明度为 1 表示完全不透明。                                                                                                                                                                      |
|             |                     | 如果类型为 `THEME_COLOR`，则为主题的名称字符串。                                                                                                                                                                                     |
|             |                     | 主题颜色由宿主应用程序定义。                                                                                                                                                                                               |
| `lineWidth` | Pixels              | 此笔绘制的线的宽度（以像素为单位）。线以当前点为中心。例如，如果 lineWidth 为 2，则从 (0, 10) 到 (5, 10) 绘制一条线会在 y 位置 10 的正上方和正下方绘制两行像素。 |

##### 返回

[ScriptUIPen 对象](#scriptuipen-object)。

---

#### rectPath()

`controlObj.graphics.rectPath(left, top[, width, height])`

##### 描述

在 `currentPath` 对象中定义一个矩形路径，该路径可以使用 [`fillPath()`](#fillpath) 填充或使用 [`strokePath()`](#strokepath) 描边。

返回矩形左上角的 [Point 对象](./size-and-location-objects.md#point)，这是新的 currentPoint。

##### 参数

|     参数     |  类型  |                                                      描述                                                       |
| ----------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| `left`, `top`     | Number | 定义区域的左上角，位于包含此图形对象的控件的坐标系中。 |
| `width`, `height` | Number | 区域的宽度和高度（以像素为单位）。                                                                          |

##### 返回

[Point 对象](./size-and-location-objects.md#point)

---

#### strokePath()

`controlObj.graphics.fillPath(pen[, path])`

##### 描述

使用给定的绘制笔描边路径的路径段。

##### 参数

| 参数 |                    类型                     |                                                      描述                                                      |
| --------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `pen`     | [ScriptUIPen 对象](#scriptuipen-object)   | 定义颜色和线