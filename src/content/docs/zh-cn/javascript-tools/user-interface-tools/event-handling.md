---
title: 事件处理
---
# 事件处理

多个辅助类提供了底层的事件处理能力。

事件对象通常由 ScriptUI 创建并传递给事件处理程序。然而，你可以通过使用 [ScriptUI.events.createEvent()](../scriptui-class#scriptuieventscreateevent) 构造一个事件对象，并将其发送到目标对象的 `controlobj-dispatchEvent` 函数来模拟用户操作。

一个辅助对象 [Keyboard state object](../environment#keyboard-state-object) 提供了在函数执行期间全局访问键盘状态的能力，这在事件处理框架之外非常有用。

---

## UIEvent 基类

封装了在容器和控件层次结构中传播的事件输入信息。这是更专门的 [KeyboardEvent 对象](#keyboardevent-object) 和 [MouseEvent 对象](#mouseevent-object) 的基类。

---

### UIEvent 对象属性

键盘和鼠标事件都具有以下属性。

#### bubbles

`eventObj.bubbles`

##### 描述

当为 `true` 时，事件支持冒泡阶段。

##### 类型

布尔值

---

#### cancelable

`eventObj.cancelable`

##### 描述

当为 `true` 时，处理程序可以调用此对象的 [preventDefault()](#preventdefault) 方法来取消事件的默认操作。

##### 类型

布尔值

---

#### currentTarget

`eventObj.currentTarget`

##### 描述

当前正在执行的处理程序注册的元素对象。

如果处理程序在捕获或冒泡阶段被调用，则可能是目标对象的祖先。

##### 类型

对象

---

#### eventPhase

`eventObj.eventPhase`

##### 描述

当前事件传播阶段。以下常量之一：

- `Event.NOT_DISPATCHING`
- `Event.CAPTURING_PHASE`
- `Event.AT_TARGET`
- `Event.BUBBLING_PHASE`

##### 类型

数字

---

#### target

`eventObj.target`

##### 描述

事件发生的元素对象。

##### 类型

对象

---

#### timeStamp

`eventObj.timeStamp`

##### 描述

事件发生的时间。一个 JavaScript Date 对象。

##### 类型

对象

---

#### 类型

`eventObj.type`

##### 描述

发生的事件的名称。预定义的事件类型包括：

- `"blur"`
- `"change"`
- `"changing"`
- `"enterKey"`
- `"focus"`
- `"move"`
- `"moving"`
- `"resize"`
- `"resizing"`
- `"show"`

其他类型名称专门适用于键盘和鼠标事件。

##### 类型

字符串

---

#### view

`eventObj.view`

##### 描述

分发事件的容器或控件对象。

##### 类型

[Container](.././window-object) 或 [Control](.././control-objects) 对象

---

### UIEvent 对象方法

#### initUIEvent()

`eventObj.initUIEvent(eventName, bubble, isCancelable, view, detail)`

##### 描述

在事件分发到目标之前修改事件。仅在 [UIEvent.eventPhase](#eventphase) 为 `Event.NOT_DISPATCHING` 时生效。

在其他阶段忽略。

##### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `eventName` | 字符串 | 事件名称字符串。 |
| `bubble` | 布尔值 | 当为 `true` 时，事件应在目标对象的祖先中触发冒泡阶段。 |
| `isCancelable` | 布尔值 | 当为 `true` 时，事件可以被取消。 |
| `view` | [Container](.././window-object) 或 [Control](.././control-objects) 对象 | 分发事件的容器或控件对象。 |
| `detail` | 任意 | 事件的详细信息，根据事件类型而变化。对于点击事件，值为 `1` 或 `2`，表示单次或双击。 |

##### 返回

无

---

#### preventDefault()

`eventObj.preventDefault()`

##### 描述

如果事件可取消（即 [cancelable](#cancelable) 为 true），则取消此事件的默认操作。

例如，OK 按钮的默认点击操作是关闭包含的对话框；此调用会阻止该行为。

##### 返回

无

---

#### stopPropagation()

`eventObj.stopPropagation()`

##### 描述

在当前目标执行完处理程序后停止事件传播（冒泡和捕获）。

##### 返回

无

---

## KeyboardEvent 对象

当发生键盘输入事件时，此类型的对象会传递给注册的事件处理程序。属性反映了键盘事件生成时的按键和修饰键状态。

:::info
所有属性均为只读。
:::

### KeyboardEvent 对象方法

除了 [UIEvent 基类](#uievent-base-class) 定义的属性外，键盘事件还具有以下属性。

#### altKey

`eventObj.altKey`

##### 描述

当为 `true` 时，`ALT` 键处于活动状态。

如果 `keyIdentifier` 是修饰键，则值为 `undefined`。

##### 类型

布尔值

---

#### ctrlKey

`eventObj.ctrlKey`

##### 描述

当为 `true` 时，`CTRL` 键处于活动状态。

如果 `keyIdentifier` 是修饰键，则值为 `undefined`。

##### 类型

布尔值

---

#### metaKey

`eventObj.metaKey`

##### 描述

当为 `true` 时，`META` 或 `COMMAND` 键处于活动状态。

如果 `keyIdentifier` 是修饰键，则值为 `undefined`。

##### 类型

布尔值

---

#### shiftKey

`eventObj.shiftKey`

##### 描述

当为 `true` 时，`SHIFT` 键处于活动状态。

如果 `keyIdentifier` 是修饰键，则值为 `undefined`。

##### 类型

布尔值

---

#### keyIdentifier

`eventObj.keyIdentifier`

##### 描述

生成事件的按键，作为包含在字符串中的 W3C 标识符；例如 `"U+0044"`。参见 [W3 Keyset Article](https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/keyset.html)。

##### 类型

字符串

---

#### keyLocation

`eventObj.keyLocation`

##### 描述

标识按键在键盘上位置的常量。

以下之一：

- `DOM_KEY_LOCATION_STANDARD`
- `DOM_KEY_LOCATION_LEFT`
- `DOM_KEY_LOCATION_RIGHT`
- `DOM_KEY_LOCATION_NUMPAD`

##### 类型

数字

---

#### keyName

`eventObj.keyName`

##### 描述

生成事件的按键，作为简单的键名；例如 `"A"`。

##### 类型

字符串

---

#### 类型

`eventObj.type`

##### 描述

发生的事件的名称。键盘事件类型包括：

- `keyup`
- `keydown`

##### 类型

字符串

---

### KeyboardEvent 对象方法

除了 [UIEvent 基类](#uievent-base-class) 定义的函数外，键盘事件还具有以下函数。

#### getModifierState()

`eventObj.getModifierState(keyIdentifier)`

##### 描述

获取此事件中当前使用的修饰键。

:::note
如果你想检查脚本中任何时候是否按下了键盘修饰键（alt/ctrl/meta/shift），而不仅仅是在事件中，请参阅 [Keyboard state object](../environment#keyboard-state-object)。
:::

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `keyIdentifier` | 字符串 | 包含修饰键标识符的字符串，以下之一： |
| | | - `Alt` |
| | | - `CapsLock` |
| | | - `Control` |
| | | - `Meta` |
| | | - `NumLock` |
| | | - `Scroll` |
| | | - `Shift` |

##### 返回

布尔值。如果事件发生时给定的修饰键处于活动状态，则为 `true`，否则为 `false`。

---

#### initKeyboardEvent()

`eventObj.initKeyboardEvent(eventName, bubble, isCancelable, view, keyID, keyLocation, modifiersList)`

##### 描述

重新初始化对象，允许你在构造后更改事件属性。参数设置相应的属性。

##### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `eventName` | 字符串 | 事件名称字符串。 |
| `bubble` | 布尔值 | 当为 `true` 时，事件应在目标对象的祖先中触发冒泡阶段。 |
| `isCancelable` | 布尔值 | 当为 `true` 时，事件可以被取消。 |
| `view` | [Container](.././window-object) 或 [Control](.././control-objects) 对象 | 分发事件的容器或控件对象。 |
| `keyID` | 字符串 | 设置 `keyIdentifier` 值。 |
| `keyLocation` | 字符串 | 设置 `keyLocation` 值。 |
| `modifiersList` | 字符串 | 以空格分隔的修饰键名称字符串，例如 "Control Alt"。 |

##### 返回

无

---

## MouseEvent 对象

当发生鼠标输入事件时，此类型的对象会传递给注册的事件处理程序。属性反映了事件生成时的按钮和修饰键状态以及指针位置。

在嵌套元素的情况下，鼠标事件类型始终针对最深层嵌套的元素。目标元素的祖先可以使用冒泡来获取其子元素内发生的鼠标事件的通知。

### MouseEvent 对象属性

除了 [UIEvent 基类](#uievent-base-class) 定义的属性外，鼠标事件还具有以下属性。

:::info
所有属性均为只读。
:::

---

#### altKey

`eventObj.altKey`

##### 描述

当为 `true` 时，`ALT` 键处于活动状态。

如果 `keyIdentifier` 是修饰键，则值为 `undefined`。

##### 类型

布尔值

---

#### button

`eventObj.button`

##### 描述

哪个鼠标按钮改变了状态。

以下之一：

- `0`：两键或三键鼠标的左键，或单键鼠标的按钮，用于激活 UI 按钮或选择文本。
- `1`：三键鼠标的中间按钮，或鼠标滚轮。
- `2`：右键，用于显示上下文菜单（如果存在）。

某些鼠标可能提供或模拟更多按钮，值大于 `2` 表示此类按钮。

##### 类型

数字

---

#### clientX 和 clientY

`eventObj.clientX`

`eventObj.clientY`

##### 描述

事件发生时的水平和垂直坐标，相对于目标对象。原点是控件或窗口的左上角，位于任何边框装饰内部。

##### 类型

数字

---

#### ctrlKey

`eventObj.ctrlKey`

##### 描述

当为 `true` 时，`CTRL` 键处于活动状态。

如果 `keyIdentifier` 是修饰键，则值为 `undefined`。

##### 类型

布尔值

---

#### detail

`eventObj.detail`

##### 描述

事件的详细信息，根据事件类型而变化。

对于 `click`、`mousedown` 和 `mouseup` 事件，单次点击的值为 `1`，双击的值为 `2`。

##### 类型

数字

---

#### metaKey

`eventObj.metaKey`

##### 描述

当为 `true` 时，`META` 或 `COMMAND` 键处于活动状态。

如果 `keyIdentifier` 是修饰键，则值为 `undefined`。

##### 类型

布尔值

---

#### relatedTarget

`eventObj.relatedTarget`

##### 描述

- 对于 `mouseover` 事件，指针离开的 UI 元素（如果有）。
- 对于 `mouseout` 事件，指针进入的 UI 元素（如果有）。

否则为 `undefined`。

##### 类型

对象

---

#### screenX 和 screenY

`eventObj.screenX`

`eventObj.screenY`

##### 描述

事件发生时的水平和垂直坐标，相对于屏幕。

##### 类型

数字

---

#### shiftKey

`eventObj.shiftKey`

##### 描述

当为 `true` 时，`SHIFT` 键处于活动状态。

如果 `keyIdentifier` 是修饰键，则值为 `undefined`。

##### 类型

布尔值

---

#### 类型

`eventObj.type`

##### 描述

发生的事件的名称。鼠标事件类型包括：

- `"mousedown"`
- `"mouseup"`
- `"mousemove"`
- `"mouseover"`
- `"mouseout"`
- `"click"`（单次点击为 1，双击为 2）

点击事件的顺序为：`mousedown`、`mouseup`、`click`。

##### 类型

字符串

---

### MouseEvent 对象方法

除了 [UIEvent 基类](#uievent-base-class) 定义的函数外，鼠标事件还具有以下函数。

---

#### getModifierState()

`eventObj.getModifierState(keyIdentifier)`

##### 描述

获取此事件中当前使用的修饰键。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `keyIdentifier` | 字符串 | 包含修饰键标识符的字符串，以下之一： |
| | | - `"Alt"`
