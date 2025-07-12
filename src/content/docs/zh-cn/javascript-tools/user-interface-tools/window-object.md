---
title: window-object
---
# Window 对象

## Window 对象构造函数

构造函数创建并返回一个新的 Window 对象，如果窗口创建失败则返回 `null`。

```javascript
new Window (type [, title, bounds, {creation_properties}]);
```

| 参数 | 类型 | 描述 |
|---|---|---|
| `type` | String | 窗口类型。可选值如下： |
| | | - `"dialog"` - 创建一个模态对话框。 |
| | | - `"palette"` - 创建一个非模态对话框，也称为浮动面板。（Photoshop CC 不支持。） |
| | | - `"window"` - 创建一个简单窗口，可用作应用程序的主窗口。（Photoshop CC 不支持。） |
| | | 此参数可以是 ScriptUI 资源规范；在这种情况下，所有其他参数将被忽略。请参阅 [资源规范](../resource-specifications)。 |
| `title` | String | 可选。窗口标题。可本地化的字符串。 |
| `bounds` | [Bounds](../size-and-location-objects#bounds) object. | 可选。窗口的位置和大小。 |
| `creation_properties` | Object | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 参数 | 类型 | 描述 |
|---|---|---|
| `resizeable` | Boolean | 当为 `true` 时，用户可调整窗口大小。 |
| | | 默认值为 `false`。 |
| `su1PanelCoordinates` | Boolean | （仅限 Photoshop）当为 `true` 时，此窗口的子面板会自动调整其子元素的位置以兼容 Photoshop CS（在 Photoshop CS 中，垂直坐标是从框架外部测量的）。 |
| | | 单个面板可以覆盖父窗口的设置。 |
| | | 默认值为 `false`。 |
| `closeButton` | Boolean | 当为 `true` 时，标题栏包含一个关闭窗口的按钮（如果平台和窗口类型允许）。 |
| | | 当为 `false` 时，不包含。不用于对话框。 |
| | | 默认值为 `true`。 |
| `maximizeButton` | Boolean | 当为 `true` 时，标题栏包含一个将窗口扩展到最大尺寸（通常是整个屏幕）的按钮（如果平台和窗口类型允许）。当为 `false` 时，不包含。不用于对话框。 |
| | | 默认值为 `false`（类型为 `palette` 时），`true`（类型为 `window` 时）。 |
| `minimizeButton` | Boolean | 当为 `true` 时，标题栏包含一个最小化或图标化窗口的按钮（如果平台和窗口类型允许）。当为 `false` 时，不包含。主窗口在 Mac OS 中不能有最小化按钮。不用于对话框。 |
| | | 默认值为 `false`（类型为 `palette` 时），`true`（类型为 `window` 时）。 |
| `independent` | Boolean | 当为 `true` 时，类型为 `window` 的窗口独立于其他应用程序窗口，并且可以在 Windows 中隐藏在其他窗口后面。在 Mac OS 中无效。 |
| | | 默认值为 `false`。 |
| `borderless` | Boolean | 当为 `true` 时，窗口没有标题栏或边框。控制这些功能的属性将被忽略。 |

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

### 间距

`windowOrContainerObj.spacing`

#### 描述

子元素与其相邻兄弟元素之间的像素间距。由于每个容器仅包含单行或单列的子元素，因此容器只需要一个间距值。

默认值基于容器类型，并遵循Adobe标准用户界面指南。

#### 类型

数值

---

### 文本

`windowOrContainerObj.text`

#### 描述

标题、标签或显示的文本。不适用于`group`或`tabbedpanel`类型的容器。

这是一个可本地化的字符串：参见[ScriptUI对象中的本地化](../localization-in-scriptui-objects)。

#### 类型

字符串

---

### 可见性

`windowOrContainerObj.visible`

#### 描述

当为`true`时显示元素，为`false`时隐藏元素。

当容器被隐藏时，其子元素也会被隐藏，但会保留各自的可见性值，并在父容器下次显示时根据这些值显示或隐藏。

#### 类型

布尔值

---

### 窗口

`windowOrContainerObj.window`

#### 描述

此容器的顶级父窗口，即[窗口对象](#window-object)。

#### 类型

[窗口](#window-object)

---

### 窗口边界

`windowOrContainerObj.windowBounds`

#### 描述

描述此容器相对于其顶级父窗口的大小和位置的Bounds对象。

#### 类型

[Bounds](../size-and-location-objects#bounds)

---

## 窗口对象方法

这些函数是为Window实例定义的，部分也适用于`Panel`和`Group`类型的容器对象。

---

### add()

`windowOrContainerObj.add(type[, bounds, text, { creation_props } ]);`

#### 描述

创建并返回一个新的控件或容器对象，并将其添加到此窗口或容器的子元素中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `type` | 字符串 | 控件类型。参见[控件类型和创建参数](../control-objects#control-types-and-creation-parameters)。 |
| `bounds` | [Bounds对象](../size-and-location-objects#bounds) | 可选。描述新控件或容器相对于其父容器的大小和位置的边界规范。参见Bounds对象的规范格式。如果提供，此值将创建一个新的Bounds对象并赋值给新对象的bounds属性。 |
| `text` | 字符串 | 可选。控件中显示的初始文本，作为标题、标签或内容，具体取决于控件类型。如果提供，此值将赋值给新对象的text属性。 |
| `creation_props` | 对象 | 可选。此对象的属性指定创建参数，这些参数特定于每种对象类型。参见[控件类型和创建参数](../control-objects#control-types-and-creation-parameters)。 |

#### 返回值

新创建的对象，如果无法创建对象则返回`null`。

---

### addEventListener()

`windowObj.addEventListener(eventName, handler[, capturePhase=false]);`

#### 描述

为此窗口中发生的特定类型事件注册事件处理程序。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `eventName` | 字符串 | 事件名称字符串。预定义的事件名称包括： |
| | | - `"change"` |
| | | - `"changing"` |
| | | - `"move"` |
| | | - `"moving"` |
| | | - `"resize"` |
| | | - `"resizing"` |
| | | - `"show"` |
| | | - `"enterKey"` |
| | | - `"focus"` |
| | | - `"blur"` |
| | | - `"mousedown"` |
| | | - `"mouseup"` |
| | | - `"mousemove"` |
| | | - `"mouseover"` |
| | | - `"mouseout"` |
| | | - `"click"` (detail = 1表示单击，2表示双击) |
| `handler` | 函数 | 为此目标中指定事件注册的函数。可以是扩展中定义的函数名称，或事件发生时执行的本地定义处理函数。处理函数接受一个参数，即UIEvent基类。参见[为窗口或控件注册事件监听器](../defining-behavior-with-event-callbacks-and-listeners#registering-event-listeners-for-windows-or-controls)。 |
| `capturePhase` | 布尔值 | 可选。当为`true`时，处理程序仅在事件传播的捕获阶段被调用。默认为`false`，表示如果此对象是目标的祖先，则在冒泡阶段调用处理程序；如果此对象本身就是目标，则在目标阶段调用处理程序。 |

#### 返回值

无

---

### center()

`windowObj.center([window])`

#### 描述

将此窗口在屏幕上居中，或相对于另一个指定窗口居中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `window` | [窗口对象](.././window-object) | 可选。一个窗口对象。 |

#### 返回值

无

---

### close()

`windowObj.close([result])`

#### 描述

关闭此窗口。如果为窗口定义了`onClose`回调函数，则在关闭窗口前调用该函数。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `result` | 数值 | 可选。从显示方法返回的数字，该方法将此窗口作为模态对话框调用。 |

#### 返回值

无

---

### dispatchEvent()

`windowObj.dispatchEvent(eventObj)`

#### 描述

模拟此目标中发生的事件。脚本可以为特定事件创建UIEvent基类，并将其传递给此方法以启动事件传播。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `eventObj` | [UIEvent基类](../event-handling#uievent-base-class) | 一个UIEvent基类。 |

#### 返回值

布尔值。如果任何处理事件的已注册监听器调用了事件对象的[preventDefault()](../event-handling#preventdefault)方法，则返回`false`，否则返回`true`。

---

### findElement()

`windowOrContainerObj.findElement(name)`

#### 描述

在此窗口或容器的子元素中搜索指定名称的元素，如果找到则返回该对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 元素的名称，在名称创建属性中指定。 |

#### 返回值

控件对象或`null`。

---

### hide()

`windowObj.hide()`

隐藏此窗口。当窗口被隐藏时，其子元素也会被隐藏，但当窗口再次显示时，子元素会保留各自的可见性状态。

对于模态对话框，关闭对话框并将其结果设置为`0`。

#### 返回值

无

---

### notify()

`windowObj.notify([event])`

#### 描述

发送通知消息，模拟指定的用户交互事件。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `event` | 字符串 | 可选。要调用的窗口事件处理程序的名称。可以是以下之一： |
| | | - `onClose` |
| | | - `onMove` |
| | | - `onMoving` |
| | | - `onResize` |
| | | - `onResizing` |
| | | - `onShow` |

#### 返回值

无

#### 示例

模拟用户移动对话框：

```javascript
myDlg.notify("onMove")
```

---

### remove()

`windowOrContainerObj.remove(index)`

`windowOrContainerObj.remove(text)`

`windowOrContainerObj.remove(child)`

#### 描述

从此窗口或容器的子元素数组中移除指定的子控件。如果子控件不存在，不会产生错误。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `index`/`text`/`child` | 数值、字符串或[控件对象](.././control-objects) | 要移除的子控件，可以通过基于0的索引、包含的文本值或控件对象指定。 |

#### 返回值

无

---

### removeEventListener()

`windowOrContainerObj.removeEventListener(eventName, handler[, capturePhase])`

#### 描述

取消注册此窗口中发生的特定类型事件的事件处理程序。所有参数必须与注册事件处理程序时使用的参数完全相同。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `eventName` | 字符串 | 事件名称字符串。 |
| `handler` | 函数 | 注册用于处理事件的函数。 |
| `capturePhase` | 布尔值 | 可选。处理程序是否仅在捕获阶段响应。 |

#### 返回值

无

---

### show()

`windowOrContainerObj.show()`

显示此窗口、容器或控件。如果为窗口定义了[onShow](#window-event-handling-callbacks)回调函数，则在显示窗口前调用该函数。

当窗口或容器被隐藏时，其子元素也会被隐藏，但当窗口或容器再次显示时，子元素会保留各自的可见性状态。

对于模态对话框，打开对话框并在对话框关闭前不返回。如果通过[close()](#close)方法关闭对话框，则此方法返回传递给该方法的结果值。否则返回0。

#### 返回值

无

---

### update()

`windowOrContainerObj.update()`

允许脚本运行长时间操作（如复制大文件）并更新UI元素以显示操作状态。

通常，对UI元素的绘制更新发生在空闲期间，即应用程序未执行任何操作且操作系统事件队列正在处理时。但在长时间的脚本操作期间，正常的事件循环不会运行。使用此方法执行必要的同步绘制更新，并处理某些鼠标和键盘事件，以允许用户取消当前操作（例如通过点击取消按钮）。

在update()操作期间，应用程序进入模态状态，因此不会处理任何会激活不同窗口或将焦点转移到正在更新的窗口之外的控件的事件。模态状态允许其他窗口中控件的绘制事件发生（如在模态[show()](#show)操作期间），因此脚本在操作循环期间不会阻止应用程序UI其他部分的更新。

对当前不可见的窗口调用update()方法是错误的。

#### 返回值

无

---

## 窗口事件处理回调

可以定义以下回调函数以响应窗口中的事件。要响应事件，请在`Window`实例中定义具有相应名称的函数。这些回调不适用于其他容器类型（`panel`或`group`类型的控件）。

### onActivate

当用户通过点击或使其成为键盘焦点来激活窗口时调用。

---

### onClose

当请求关闭窗口时调用，无论是通过显式调用[close()](#close)函数还是用户操作（点击标题栏中操作系统特定的关闭图标）。该函数在窗口实际关闭前调用；可以返回`false`以取消关闭操作。

---

### onDeactivate

当用户使先前活动的窗口变为非活动状态时调用；例如通过关闭它，或通过点击另一个窗口来更改键盘焦点。

---

### onDraw

当容器或控件即将被绘制时调用。允许脚本使用控件关联的[ScriptUIGraphics对象](../graphic-customization-objects#scriptuigraphics-object)修改或控制外观。处理函数接受一个参数，即[DrawState对象](../control-objects#drawstate-object)。

---

### onMove

当窗口被移动时调用。

---

### onMoving

当窗口正在移动时调用，每次位置变化时调用。处理程序可以监视移动操作。

---

### onResize

当窗口被调整大小时调用。

---

### onResizing

当窗口正在调整大小时调用，每次高度或宽度变化时调用。处理程序可以监视调整大小操作。

---

### onShortcutKey

（仅在[Windows](#)中）

当键入与此窗口的shortcutKey值匹配的快捷键序列时调用。

---

### onShow

当使用[show()](#show)方法请求打开窗口时调用，在窗口变为可见前调用，但在自动布局完成后。处理程序可以修改自动布局的结果。
