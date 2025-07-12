---
title: scriptui-class
---
# ScriptUI 类

全局可用的 ScriptUI 类提供了关于 ScriptUI 模块的核心信息。该对象不可实例化。

---

## ScriptUI 类属性

### ScriptUI.Alignment

`ScriptUI.Alignment`

收集了可用于控件和容器的 [alignment](../window-object#alignment) 和 [alignChildren](../window-object#alignchildren) 属性中的枚举值，以及用于设置控件的 [titleLayout](../control-objects#titlelayout) 属性的对齐属性。

使用这些常量来设置对齐方式。

当查询 [alignment](../window-object#alignment) 属性时，它会返回与常量对应的索引值，如下所示。常量值为：

- `ScriptUI.Alignment.TOP` (1)
- `ScriptUI.Alignment.BOTTOM` (2)
- `ScriptUI.Alignment.LEFT` (3)
- `ScriptUI.Alignment.RIGHT` (4)
- `ScriptUI.Alignment.FILL` (5)
- `ScriptUI.Alignment.CENTER` (6)

#### 类型

对象。只读。

#### 示例

```javascript
myGroup.alignment = [ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP]
```

---

### ScriptUI.applicationFonts

`ScriptUI.applicationFonts`

#### 描述

收集了指定默认应用程序字体的枚举值。

可用的字体根据应用程序和系统配置而异。

#### 类型

对象

---

### ScriptUI.compatability

`ScriptUI.compatability`

#### 描述

一个对象，其属性是宿主应用程序支持的兼容模式名称。例如，`ScriptUI.compatability.su1PanelCoordinates` 的存在意味着应用程序允许与 ScriptUI 版本 1 中 Panel 元素的坐标系统向后兼容。

#### 类型

对象

---

### ScriptUI.coreVersion

`ScriptUI.coreVersion`

#### 描述

ScriptUI 组件的内部核心版本号。

#### 类型

字符串。只读。

---

### ScriptUI.environment

`ScriptUI.environment`

#### 描述

一个 JavaScript 对象，提供对 ScriptUI 环境属性的访问；包含一个 Keyboard 状态对象，该对象报告键盘在任何时间的活动状态，独立于事件处理框架。

#### 类型

[Environment 对象](../environment#environment-object)

---

### ScriptUI.events

`ScriptUI.events`

#### 描述

一个 JavaScript 对象，包含一个函数 [ScriptUI.events.createEvent()](#scriptuieventscreateevent)，该函数允许您创建事件对象以模拟用户交互事件。

#### 类型

对象

---

### ScriptUI.FontStyle

`ScriptUI.FontStyle`

#### 描述

收集了可用作 [ScriptUI.newFont()](#scriptuinewfont) 方法的 style 参数的枚举值。例如：

```javascript
var font = ScriptUI.newFont( "Helvetica", ScriptUI.FontStyle.BOLD )
```

值为：

- `REGULAR`
- `BOLD`
- `ITALIC`
- `BOLDITALIC`

#### 类型

字符串。只读。

---

### ScriptUI.frameworkName

`ScriptUI.frameworkName`

#### 描述

此 ScriptUI 组件兼容的用户界面框架的名称。

#### 类型

字符串。只读。

---

### ScriptUI.version

`ScriptUI.version`

#### 描述

ScriptUI 组件框架的主版本号。

#### 类型

字符串。只读。

---

## ScriptUI 类方法

### ScriptUI.events.createEvent()

`ScriptUI.events.createEvent(eventType)`

#### 描述

此函数位于 [events](#scriptuievents) 属性中包含的 JavaScript 对象中。

该对象被传递给一个函数，您注册该函数以响应窗口或控件中发生的某种类型的事件。使用 [windowObj.addEventListener()](../window-object#addeventlistener) 或 [controlObj.addEventListener()](../control-objects#addeventlistener) 来注册处理函数。

请参阅 [为窗口或控件注册事件监听器](../defining-behavior-with-event-callbacks-and-listeners#registering-event-listeners-for-windows-or-controls)。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `eventType` | String | 事件类型，其中之一： |
| | | - `UIEvent` |
| | | - `KeyboardEvent` |
| | | - `MouseEvent` |
| --- | --- | --- |

#### 返回

返回一个适当类型的事件对象：

- [UIEvent 基类](../event-handling#uievent-base-class) 封装了在容器和控件层次结构中传播的事件的输入事件信息。这是更专业的键盘和鼠标事件类型的基类。
- [KeyboardEvent 对象](../event-handling#keyboardevent-object) 封装了键盘输入事件的信息。
- [MouseEvent 对象](../event-handling#mouseevent-object) 封装了鼠标事件的信息。

---

### ScriptUI.getResourceText()

`ScriptUI.getResourceText(text)`

#### 描述

从宿主应用程序的资源数据中查找并返回给定文本字符串的资源。如果没有字符串资源与给定文本匹配，则返回文本本身。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `text` | String | 要匹配的文本。 |

#### 返回

字符串

---

### ScriptUI.newFont()

`ScriptUI.newFont(name, style, size);`

#### 描述

创建一个新的字体对象，用于文本控件和标题。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | String | 字体或字体族名称字符串。 |
| `style` | String | 字体样式字符串或 [ScriptUI.FontStyle](#scriptuifontstyle) 中的枚举值 |
| `size` | Number | 字体大小（以磅为单位），一个数字。 |

#### 返回

[ScriptUIFont 对象](../graphic-customization-objects#scriptuifont-object)

---

### ScriptUI.newImage()

`ScriptUI.newImage( normal, disabled, pressed, rollover );`

#### 描述

创建一个新的图像对象，用于可以显示图像的控件，从指定的资源或图像文件加载相关图像。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `normal` | String | 用于正常或默认状态的图像的资源名称或路径。 |
| `disabled` | String | 用于禁用状态的图像的资源名称或路径，当包含图像的控件被禁用时显示（enabled=false）。 |
| `pressed` | String | 用于按下状态的图像的资源名称或路径，当用户点击图像时显示。 |
| `rollover` | String | 用于悬停状态的图像的资源名称或路径，当光标移动到图像上时显示。 |

#### 返回

[ScriptUIImage 对象](../graphic-customization-objects#scriptuiimage-object)
