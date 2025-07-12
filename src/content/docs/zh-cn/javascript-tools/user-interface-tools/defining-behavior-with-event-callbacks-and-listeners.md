---
title: 使用事件回调和监听器定义行为
---
# 使用事件回调和监听器定义行为

为了让控件能够响应用户交互，你必须定义它们的行为。你可以通过将事件处理回调函数定义为控件或窗口的一部分来实现这一点。为了响应特定事件，你需要为该事件定义一个处理函数，并将该函数的引用分配给窗口或控件对象的相应属性。不同类型的窗口和控件会响应不同的操作或事件：

- 当用户移动或调整窗口大小时，窗口会生成事件。为了处理这些事件，你需要为 `onMove`、`onMoving`、`onResize`、`onResizing` 定义回调函数。
 - 为了响应用户打开或关闭窗口，你需要为 `onShow` 和 `onClose` 定义回调函数。
- 当用户点击控件边界内的区域时，按钮（Button）、单选按钮（RadioButton）和复选框（Checkbox）控件会生成事件。
 - 为了处理该事件，你需要为 [onClick](../control-objects#onclick) 定义一个回调函数。
- 当内容或值发生变化时，EditNumber、EditText、Scrollbar 和 Slider 控件会生成事件，即当用户在编辑字段中输入内容或移动滚动条或滑块指示器时。为了处理这些事件，你需要为 [onChange](../control-objects#onchange) 和 [onChanging](../control-objects#onchanging) 定义回调函数。
- 当列表中的选择发生变化时，ListBox、DropDownList 和 TreeView 控件会生成事件。为了处理该事件，你需要为 [onChange](../control-objects#onchange) 定义一个回调函数。
 - 当用户展开或折叠节点时，TreeView 控件也会生成事件，这些事件由 [onExpand](../control-objects#onexpand) 和 [onCollapse](../control-objects#oncollapse) 回调函数处理。
- 当用户双击列表项时，ListBox 也会生成事件。为了处理该事件，你需要为 [onDoubleClick](../control-objects#ondoubleclick) 事件定义一个回调函数。
- 容器和控件在绘制之前都会生成事件，允许你自定义它们的外观。为了处理这些事件，你需要为 [onDraw](../control-objects#ondraw) 定义一个回调函数。
 - 你的处理函数可以使用控件关联的 [ScriptUIGraphics 对象](../graphic-customization-objects#scriptuigraphics-object) 中定义的方法来修改或控制容器或控件的绘制方式。
- 仅在 [Windows](.././window-object) 中，你可以将键序列注册为窗口或大多数类型控件的 [shortcutKey](../control-objects#shortcutkey)。为了处理该键序列，你需要在控件中为 [onShortcutKey](../control-objects#onshortcutkey) 定义一个回调函数。

---

## 定义事件处理回调函数

你的脚本可以将事件处理程序定义为回调属性引用的命名函数，或者定义为在回调属性中内联定义的未命名函数。

- 如果你定义了一个命名函数，请将其名称作为相应回调属性的值。例如：

 ```javascript
 function hasBtnsCbOnClick() { /* 做一些有趣的事情 */ }
 hasBtnsCb.onClick = hasBtnsCbOnClick;
 ```

- 对于简单的未命名函数，直接将属性值设置为函数定义：

 ```javascript
 UI-element.callback-name = function () { handler-definition };
 ```

事件处理函数不接受任何参数。

例如，以下代码将 hasBtnsCb 复选框的 onClick 属性设置为一个函数，该函数启用同一对话框中的另一个控件：

```javascript
hasBtnsCb.onClick = function () {
 this.parent.alertBtnsPnl.enabled = this.value;
};
```

以下语句为关闭包含对话框的按钮设置了 `onClick` 事件处理程序，返回不同的值给调用对话框的 `show` 方法，以便调用脚本可以知道点击了哪个按钮：

```javascript
buildBtn.onClick = function() {
 this.parent.parent.close( 1 );
};

cancelBtn.onClick = function() {
 this.parent.parent.close( 2 );
};
```

---

## 模拟用户事件

你可以通过使用 `notify` 方法直接向窗口或控件发送事件通知来模拟用户操作。脚本可以使用此方法在窗口的控件中生成事件，就像用户在点击按钮、输入文本或移动窗口一样。如果你为元素定义了事件处理回调，`notify` 方法会调用它。

`notify` 方法接受一个可选参数，用于指定它应模拟的事件。如果控件只能生成一种事件，通知默认会生成该事件。

以下控件会生成 `onClick` 事件：

- [`Button`](../control-objects#button)
- [`Checkbox`](../control-objects#checkbox)
- [`IconButton`](../control-objects#iconbutton)
- [`RadioButton`](../control-objects#radiobutton)

以下控件会生成 `onChange` 事件：

- [`DropDownList`](../control-objects#dropdownlist)
- [`EditNumber`](../control-objects#editnumber)
- [`EditText`](../control-objects#edittext)
- [`ListBox`](../control-objects#listbox)
- [`Scrollbar`](../control-objects#scrollbar)
- [`Slider`](../control-objects#slider)
- [`TreeView`](../control-objects#treeview)

以下控件会生成 `onChanging` 事件：

- [`EditNumber`](../control-objects#editnumber)
- [`EditText`](../control-objects#edittext)
- [`Scrollbar`](../control-objects#scrollbar)
- [`Slider`](../control-objects#slider)

在 [ListBox](../control-objects#listbox) 中，双击某个项会生成 `onDoubleClick` 事件。

在 [`RadioButton`](../control-objects#radiobutton) 和 [`Checkbox`](../control-objects#checkbox) 控件中，布尔值属性会在用户点击控件时自动更改。如果你使用 `notify()` 来模拟点击，值会像用户点击一样发生变化。

例如，如果复选框 `hasBtnsCb` 的值为 `true`，以下代码会将其值更改为 `false`：

```javascript
if ( dlg.hasBtnsCb.value == true ) {
 dlg.hasBtnsCb.notify(); // dlg.hasBtnsCb.value 现在为 `false`
}
```

---

## 为窗口或控件注册事件监听器

另一种定义窗口和控件行为的方法是注册一个处理函数，以响应该窗口或控件中特定类型的事件。这种技术允许你响应事件在容器和控件层次结构中的传播。

使用 [addEventListener()](../window-object#addeventlistener) 或 [addEventListener()](../control-objects#addeventlistener) 来注册处理程序。你注册的函数会接收一个事件对象（来自 [UIEvent 基类](../event-handling#uievent-base-class)），该对象封装了事件信息。当事件在层次结构中向下传播并返回时，你的处理程序可以在任何级别响应，或者使用 UIEvent 对象的 [stopPropagation()](../event-handling#stoppropagation) 方法在某个级别停止事件传播。

你可以注册：

- 扩展中定义的处理函数的名称，该函数接受一个参数，即事件对象。例如：

 ```javascript
 myButton.addEventListener( "click", myFunction );
 ```

- 本地定义的处理函数，该函数接受一个参数，即事件对象。例如：

 ```javascript
 myButton.addEventListener( "click", "function( e ) { /*处理代码*/ }" );
 ```

当指定事件在目标中发生时，处理程序或注册的代码语句会被执行。脚本可以通过使用 [ScriptUI.events.createEvent()](../scriptui-class#scriptuieventscreateevent) 创建事件对象，并将其传递给事件目标的 [dispatchEvent()](../control-objects#dispatchevent) 函数来以编程方式模拟事件。

你可以通过调用事件目标的 [removeEventListener()](../control-objects#removeeventlistener) 函数来移除之前注册的处理程序。传递给此函数的参数必须与传递给 [addEventListener()](../control-objects#addeventlistener) 调用的参数完全相同。通常，脚本会在初始化期间注册所有事件处理程序，并在终止时取消注册；然而，终止时取消注册处理程序并不是必需的。

你可以在实际目标的父对象或祖先对象中注册事件；请参阅以下部分。

预定义的 `UIEvent` 类型与事件回调对应如下：

| 回调 | UIEvent 类型 |
| --- | --- |
| [`"onChange"`](../control-objects#onchange) | `"change"` |
| [`"onChanging"`](../control-objects#onchanging) | `"changing"` |
| [`"onClick"`](../control-objects#onclick) | `"click"` (detail = 1) |
| [`"onDoubleClick"`](../control-objects#ondoubleclick) | `"click"` (detail = 2) |
| [`"onEnterKey"`](../control-objects#onenterkey) | `"enterKey"` |
| [`"onMove"`](../window-object#onmove) | `"move"` |
| [`"onMoving"`](../window-object#onmoving) | `"moving"` |
| [`"onResize"`](../window-object#onresize) | `"resize"` |
| [`"onResizing"`](../window-object#onresizing) | `"resizing"` |
| [`"onShow"`](../window-object#onshow) | `"show"` |
| [`"onActivate"`](../control-objects#onactivate) | `"focus"` |
| [`"onDeactivate"`](../control-objects#ondeactivate) | `"blur"` |

此外，ScriptUI 根据 W3C DOM 级别 3 功能规范 [UI 事件](https://www.w3.org/TR/uievents/) 实现了所有类型的 W3C 事件，并进行了以下修改和例外：

- ScriptUI 没有实现 `DOMImplementation` 接口的 `hasFeature()` 方法；无法查询 ScriptUI 中是否实现了给定的 W3C DOM 功能。
- 在 ScriptUI 中，W3C `EventTarget` 接口由 UI 元素对象（如 `Button`、`Window` 等）实现。
- 在 ScriptUI 中，W3C `AbstractView` 对象是一个 UI 元素（如 `Button`、`Window` 等）。
- 不支持任何“命名空间”属性或方法（如 `initEventNS` 和 `initMouseEventNS`）。

ScriptUI 对 W3C 鼠标事件的实现遵循 W3C DOM 级别 3 功能规范 [MouseEvent](https://www.w3.org/TR/uievents/#mouseevent)，但有以下区别：

- 要创建 `MouseEvent` 实例，请调用 `ScriptUI.events.createEvent( "MouseEvent" )`，而不是 `DocumentEvent.createEvent( "MouseEvent" )`。
- `MouseEvent` 接口的 `getModifierState` 方法不受支持。

ScriptUI 对 W3C 键盘事件的实现遵循 W3C DOM 级别 3 功能规范 [KeyboardEvent](https://www.w3.org/TR/uievents/#keyboardevent)。

---

## 注册的事件处理程序如何被调用

当事件在目标中发生时，所有为该事件和目标注册的处理程序都会被调用。可以为不同目标中的同一事件注册多个事件处理程序，甚至可以为同一类型的目标注册多个处理程序。例如，如果有一个包含两个复选框的对话框，你可能希望为每个复选框对象注册一个点击处理程序。例如，如果每个复选框对点击的反应不同，你会这样做。

你也可以为子对象在父对象中注册事件。如果两个复选框对鼠标点击的反应相同，它们需要相同的处理程序。在这种情况下，你可以在父窗口或容器中注册处理程序。当点击事件发生在任一子控件中时，为父窗口注册的处理程序会被调用。

你可以结合这两种技术，以便在响应事件时发生多个操作。也就是说，你可以在父对象中注册一个通用的事件处理程序，并在实际目标的子对象中为同一事件注册一个不同的、更具体的处理程序。

多个事件处理程序的调用规则取决于事件传播的三个阶段，如下所示：

- **捕获阶段** - 当事件发生在对象层次结构中时，它会被注册了处理程序的最高祖先对象（例如窗口）捕获。如果没有为最高祖先注册处理程序，ScriptUI 会查找下一个祖先（例如对话框）的处理程序，沿着层次结构向下直到实际目标的直接父对象。当 ScriptUI 找到为目标任何祖先注册的处理程序时，它会执行该处理程序，然后进入下一阶段。
- **目标阶段** - ScriptUI 调用为实际目标对象注册的任何处理程序。
- **冒泡阶段** - 事件在层次结构中冒泡返回；ScriptUI 再次查找为事件注册的处理程序，从直接父对象开始，沿着层次结构向上直到最高祖先。当 ScriptUI 找到处理程序时，它会执行它，事件传播完成。

例如，假设一个对话框窗口包含一个组，组中包含一个按钮。脚本为点击事件在 Window 对象注册了一个事件处理函数，另一个处理函数在组对象注册，第三个处理函数在按钮对象（实际目标）注册。

当用户点击按钮时，Window 对象的处理程序首先被调用（在捕获阶段），然后是按钮对象的处理程序（在目标阶段）。最后，ScriptUI 调用在组对象注册的处理程序（在冒泡阶段）。

如果你在实际事件目标的祖先对象中注册处理程序，你可以指定 [addEventListener()](../control-objects#addeventlistener) 的第三个参数，以便祖先的处理程序仅在捕获阶段响应，而不是在冒泡阶段。例如，以下点击处理程序在父对话框对象中注册，仅在捕获阶段响应：

```javascript
myDialog.addEventListener( "click", handleAllItems, true );
```

默认情况下，此值为 `false`，因此如果未提供，处理程序只能在冒泡阶段响应，当对象的后代是目标时，或者当对象本身是事件的目标时（目标阶段）。

为了区分在任何给定时间执行的多个注册处理程序，事件对象提供了 [eventPhase](../event-handling#eventphase) 和 [currentTarget](../event-handling#currenttarget)，在捕获和冒泡阶段，它包含当前执行处理程序注册的目标对象的祖先。
