---
title: window-object
---
# Window 对象

## Window 对象构造函数

构造函数创建并返回一个新的 Window 对象，如果窗口创建失败则返回 `null`。

```javascript
new Window (type [, title, bounds, {creation_properties}]);
```

|    参数    |      类型       |    描述    |
|-----------------------|---------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`     | String       | 窗口类型。可选值如下：        |
|      |    | - `"dialog"` - 创建一个模态对话框。         |
|      |    | - `"palette"` - 创建一个非模态对话框，也称为浮动面板。（Photoshop CC 不支持。）      |
|      |    | - `"window"` - 创建一个简单窗口，可用作应用程序的主窗口。（Photoshop CC 不支持。）      |
|      |    | 此参数可以是 ScriptUI 资源规范；在这种情况下，所有其他参数将被忽略。请参阅 [资源规范](../resource-specifications)。 |
| `title`     | String       | 可选。窗口标题。可本地化的字符串。      |
| `bounds`    | [Bounds](../size-and-location-objects#bounds) object. | 可选。窗口的位置和大小。       |
| `creation_properties` | Object       | 可选。包含以下任何属性的对象。   |

#### 创建属性

|    参数    |  类型   |    描述    |
|-----------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `resizeable`   | Boolean | 当为 `true` 时，用户可调整窗口大小。         |
|      |     | 默认值为 `false`。      |
| `su1PanelCoordinates` | Boolean | （仅限 Photoshop）当为 `true` 时，此窗口的子面板会自动调整其子元素的位置以兼容 Photoshop CS（在 Photoshop CS 中，垂直坐标是从框架外部测量的）。   |
|      |     | 单个面板可以覆盖父窗口的设置。       |
|      |     | 默认值为 `false`。      |
| `closeButton`     | Boolean | 当为 `true` 时，标题栏包含一个关闭窗口的按钮（如果平台和窗口类型允许）。       |
|      |     | 当为 `false` 时，不包含。不用于对话框。    |
|      |     | 默认值为 `true`。       |
| `maximizeButton`   | Boolean | 当为 `true` 时，标题栏包含一个将窗口扩展到最大尺寸（通常是整个屏幕）的按钮（如果平台和窗口类型允许）。当为 `false` 时，不包含。不用于对话框。      |
|      |     | 默认值为 `false`（类型为 `palette` 时），`true`（类型为 `window` 时）。         |
| `minimizeButton`   | Boolean | 当为 `true` 时，标题栏包含一个最小化或图标化窗口的按钮（如果平台和窗口类型允许）。当为 `false` 时，不包含。主窗口在 Mac OS 中不能有最小化按钮。不用于对话框。 |
|      |     | 默认值为 `false`（类型为 `palette` 时），`true`（类型为 `window` 时）。         |
| `independent`     | Boolean | 当为 `true` 时，类型为 `window` 的窗口独立于其他应用程序窗口，并且可以在 Windows 中隐藏在其他窗口后面。在 Mac OS 中无效。    |
|      |     | 默认值为 `false`。      |
| `borderless`   | Boolean | 当为 `true` 时，窗口没有标题栏或边框。控制这些功能的属性将被忽略。       |

---

## Window 对象属性

以下元素属性专门适用于 Window 元素：

### active

`windowOrContainerObj.active`

#### 描述

当为 `true` 时，对象处于活动状态，否则为 `false`。设置为 `true` 以使给定控件或对话框处于活动状态。

- 可见的模态对话框默认是活动对话框。
- 活动面板是最前面的窗口。
- 活动控件是具有焦点的控件，即接受键盘输入的控件，或者在按钮的情况下，当用户按下 RETURN 或 ENTER 时被选中。

#### 类型

Boolean

---

### cancelElement

`windowOrContainerObj.cancelElement`

#### 描述

对于类型为 `dialog` 的窗口，当用户按下 ESC 键时要通知的控件。

默认情况下，查找名称或文本为 `"cancel"`（不区分大小写）的按钮。

#### 类型

[Control object](.././control-objects)

---

### defaultElement

`windowOrContainerObj.defaultElement`

#### 描述

对于类型为 `dialog` 的窗口，当用户按下 ENTER 键时要通知的控件。

默认情况下，查找名称或文本为 `"ok"`（不区分大小写）的按钮。

#### 类型

[Control object](.././control-objects)

---

### frameBounds

`windowOrContainerObj.frameBounds`

#### 描述

一个 Bounds 对象，表示窗口框架在屏幕坐标中的边界。

框架包括标题栏和边框，包围窗口的内容区域，具体取决于窗口系统。

#### 类型

[Bounds](../size-and-location-objects#bounds)。只读。

---

### frameLocation

`windowOrContainerObj.frameLocation`

#### 描述

一个 Point 对象，表示窗口框架左上角的位置。与 `[frameBounds.x, frameBounds.y]` 相同。

设置此值以将窗口框架移动到屏幕上的指定位置。[`frameBounds`](#framebounds) 值会相应更改。

#### 类型

[Point](../size-and-location-objects#point)

---

### frameSize

`windowOrContainerObj.frameSize`

#### 描述

一个 Dimension 对象，表示窗口框架在屏幕坐标中的大小和位置。

#### 类型

[Dimension](../size-and-location-objects#dimension)。只读。

---

### maximized

`windowOrContainerObj.maximized`

#### 描述

当为 `true` 时，窗口已最大化。

#### 类型

Boolean

---

### minimized

`windowOrContainerObj.minimized`

#### 描述

当为 `true` 时，窗口已最小化或图标化。

#### 类型

Boolean

---

### opacity

`windowOrContainerObj.opacity`

#### 描述

窗口的不透明度，范围为 `[0..1]`。

值为 `1.0`（默认值）时，窗口完全不透明，值为 `0` 时，窗口完全透明。

中间值使窗口部分透明，透明度可调。

#### 类型

Number

---

### shortcutKey

`windowOrContainerObj.shortcutKey`

#### 描述

:::note
仅在 [Windows](#) 中有效。
:::

调用此窗口的 [ControlEvent.onShortcutKey](../control-objects#onshortcutkey) 回调的键序列。

#### 类型

String

---

## 容器属性

下表显示了适用于 Window 对象和容器对象（类型为 `panel`、`tabbedpanel`、`tab` 和 `group` 的控件）的属性。

---

### alignChildren

`windowOrContainerObj.alignChildren`

#### 描述

告诉布局管理器如何在容器中对齐不同大小的子元素。创建顺序决定了哪些子元素位于列的顶部或行的左侧；子元素创建得越早，它就越靠近其列或行的顶部或左侧。

如果定义了子元素的对齐方式，它将覆盖父容器的 `alignChildren` 设置。

对于单个字符串值，允许的值取决于 `orientation` 值。

对于 `orientation=row`：

- `top`
- `bottom`
- `center`（默认）
- `fill`

对于 `orientation=column`：

- `left`
- `right`
- `center`（默认）
- `fill`

对于 `orientation=stack`：

- `top`
- `bottom`
- `left`
- `right`
- `center`（默认）
- `fill`

对于数组值，第一个字符串元素定义水平对齐方式，第二个元素定义垂直对齐方式。水平对齐值必须为 `left`、`right`、`center` 或 `fill` 之一。垂直对齐值必须为 `top`、`bottom`、`center` 或 `fill` 之一。

值不区分大小写。

#### 类型

String 或 2 个 String 的数组

---

### alignment

`windowOrContainerObj.alignment`

#### 描述

适用于容器的子元素。如果定义了此值，它将覆盖父容器的 `alignChildren` 设置。

对于单个字符串值，允许的值取决于 `orientation` 值。

对于 `orientation = row`：

- `top`
- `bottom`
- `center`（默认）
- `fill`

对于 `orientation=column`：

- `left`
- `right`
- `center`（默认）
- `fill`

对于 `orientation = stack`：

- `top`
- `bottom`
- `left`
- `right`
- `center`（默认）
- `fill`

对于数组值，第一个字符串元素定义水平对齐方式，第二个元素定义垂直对齐方式。

水平对齐值必须为 `left`、`right`、`center` 或 `fill` 之一。垂直对齐值必须为 `top`、`bottom`、`center` 或 `fill` 之一。

值不区分大小写。

#### 类型

String 或 2 个 String 的数组

---

### bounds

`windowOrContainerObj.bounds`

#### 描述

一个 Bounds 对象，表示窗口的可绘制区域在屏幕坐标中的边界。与 [frameBounds](#framebounds) 进行比较。

不适用于类型为 `tab` 的容器，其边界由父 `tabbedpanel` 容器决定。

#### 类型

[Bounds](../size-and-location-objects#bounds)。只读。

---

### children

`windowOrContainerObj.children`

#### 描述

已添加到此窗口或容器的用户界面元素的集合。

一个按数字索引或按包含元素 `name` 的字符串索引的数组。此数组的 `length` 属性是容器元素的子元素数量，对于控件则为零。

#### 类型

对象数组。只读。

---

### graphics

`windowOrContainerObj.graphics`

#### 描述

一个 ScriptUIGraphics 对象，可用于自定义窗口的外观，以响应 `onDraw` 事件。

#### 类型

[ScriptUIGraphics 对象](../graphic-customization-objects#scriptuigraphics-object)

---

### layout

`windowOrContainerObj.layout`

#### 描述

窗口或容器的 LayoutManager 对象。容器对象首次可见时，ScriptUI 通过调用其布局函数来调用此布局管理器。

默认值是容器元素创建时自动创建的 LayoutManager 类的实例。

#### 类型

[LayoutManager 对象](../layoutmanager-object)

---

### location

`windowOrContainerObj.location`

#### 描述

一个 Point 对象，表示窗口可绘制区域的左上角位置，或面板框架的左上角位置。

与 `[bounds.x, bounds.y]` 相同。

#### 类型

[Point](../size-and-location-objects#point)

---

### margins

`windowOrContainerObj.margins`

#### 描述

一个 Margins 对象，描述此容器边缘与最外层子元素之间的像素数。可以为容器的每个边缘指定不同的边距。

默认值基于容器类型，并选择以匹配 Adobe 用户界面标准指南。

#### 类型

[Margins](../size-and-location-objects#margins)

---

### maximumSize

`windowOrContainerObj.maximumSize`

#### 描述

[Dimension](../size-and-location-objects#dimension)

一个 Dimension 对象，表示窗口可以调整到的最大矩形，用于自动布局和调整大小。

#### 类型

---

### minimumSize

`windowOrContainerObj.minimumSize`

#### 描述

[Dimension](../size-and-location-objects#dimension)

一个 Dimension 对象，表示窗口可以调整到的最小矩形，用于自动布局和调整大小。

#### 类型

---

### orientation

`windowOrContainerObj.orientation`

#### 描述

此容器内元素的组织方式。

由容器的布局管理器解释。

默认的 LayoutManager 对象接受（不区分大小写的）值：

- `row`
- `column`
- `stack`

默认方向取决于容器类型。对于 `Window` 和 `Panel`，默认值为 `column`，对于 `Group`，默认值为 `row`。

容器的 `alignChildren` 及其子元素的 `alignment` 属性的允许值取决于方向。

#### 类型

String

---

### parent

`windowOrContainerObj.parent`

#### 描述

此元素的直接父对象，即窗口或容器元素。对于 Window 对象，值为 `null`。

#### 类型

对象。只读。

---

### preferredSize

`windowOrContainerObj.preferredSize`

#### 描述

一个 Dimension 对象，表示窗口的首选大小，用于自动布局和调整大小。要为仅一个维度设置特定值，请将其他维度指定为 `-1`。

#### 类型

[Dimension](../size-and-location-objects#dimension)

---

### properties

`windowOrContainerObj.properties`

#### 描述

一个对象，包含容器的一个或多个创建属性（仅在元素创建时使用的属性）。

#### 类型

Object

---

### selection

`windowOrContainerObj.selection`

#### 描述

:::info
仅适用于 [TabbedPanel](../control-objects#tabbedpanel) 对象。
:::

当前活动的 [Tab](../control-objects#tab) 子元素。设置此属性会更改活动选项卡。仅当面板没有子元素时，值可以为 `null`；将其设置为 `null` 是错误的。

当值更改时，无论是用户选择不同的选项卡，还是脚本设置属性，面板的 [onChange](../control-objects#onchange) 回调都会被调用。

#### 类型

[tab](../control-objects#tab)

---

### size

`windowOrContainerObj.size`

#### 描述

一个 Dimension 对象，表示组或面板元素的当前大小和位置，或窗口内容区域的大小和位置。

#### 类型

[Dimension](../size-and-location-objects#dimension)

---

### spacing

`windowOrContainerObj.spacing`

#### 描述

一个
