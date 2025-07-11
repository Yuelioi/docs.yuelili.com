---
title: 控制对象
---
# 控制对象

属于窗口的UI元素可以是容器或控件。容器共享顶级窗口的某些方面，以及控件的某些方面，因此在这里与控件一起描述。

---

## 控制对象构造函数

使用 `add` 方法创建新的容器和控件。`add` 方法在 `window` 和容器（`panel` 和 `group`）对象上可用。（另请参见 [DropDownList](#dropdownlist) 和 [ListBox](#listbox) 控件的 [add()](#add) 方法。）

### add()

`containerObj.(type[, bounds, text, {creation_props}]);`

#### 描述

创建并返回一个新的控件或容器对象，并将其添加到此窗口或容器的子元素中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `type` | String | 控件类型。参见 [控件类型和创建参数](#control-types-and-creation-parameters)。 |
| `bounds` | [Bounds 对象](../size-and-location-objects#bounds) | 可选。描述新控件或容器的大小和位置的边界规范，相对于其父元素。如果提供，此值将创建一个新的 [Bounds](../size-and-location-objects#bounds) 对象，并将其分配给新对象的 `bounds` 属性。 |
| `text` | String | 可选。控件中显示的初始文本，作为标题、标签或内容，具体取决于控件类型。如果提供，此值将分配给新对象的 `text` 属性。 |
| `creation_props` | Object | 可选。此对象的属性指定创建参数，这些参数特定于每种对象类型。参见 [控件类型和创建参数](#control-types-and-creation-parameters)。 |

#### 返回

返回新对象，如果无法创建对象则返回 `null`。

---

## 控件类型和创建参数

以下关键字可以用作 `add` 方法的类型说明符，适用于 `Window` 和容器（`Panel` 和 `Group`）对象。类名可以在资源规范中用于定义容器元素（`Window`、`Panel` 或 `Group`）内的控件。

所有类型的控件，包括容器，都有一个可选的创建参数 `name`，允许您为对象指定唯一名称。

---

### button

类名：`Button`

#### 描述

包含鼠标敏感文本字符串的按钮。如果控件被点击或其 [notify()](#notify) 方法被调用，则调用 [onClick](#onclick) 回调。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [Bounds 对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `text` | String | 可选。控件中显示的文本。 |
| `creation_properties` | Object | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | String | 控件的唯一名称。对于模态对话框，特殊名称 "ok" 使此控件成为 [defaultElement](../window-object#defaultelement)，特殊名称 "cancel" 使此控件成为父对话框的 [cancelElement](../window-object#cancelelement)。 |

#### 示例

添加到窗口 `w`：

```javascript
w.add("button"[, bounds, text, {creation_properties}]);
```

---

### checkbox

类名：`Checkbox`

#### 描述

一个双状态控件，当值为 `true` 时显示带勾选框，当值为 `false` 时显示空框。如果控件被点击或其 [notify()](#notify) 方法被调用，则调用 [onClick](#onclick) 回调。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [Bounds 对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `text` | String | 可选。控件中显示的文本。 |
| `creation_properties` | Object | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | String | 控件的唯一名称。 |

#### 示例

添加到窗口 `w`：

```javascript
w.add("checkbox"[, bounds, text, {creation_properties}]);
```

---

### dropdownlist

类名：`DropDownList`

#### 描述

一个包含零个或多个项目的下拉列表。如果项目选择由脚本或用户更改，或调用对象的 [notify()](#notify) 方法，则调用 [onChange](#onchange) 回调。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [Bounds 对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `items` | Array of strings | 可选。提供此参数或 `creation_properties` 参数，不要同时提供两者。每个列表项的文本。为每个项目创建一个 `ListItem` 对象。文本字符串为 `"-"` 的项目将创建一个分隔符项目。 |
| `creation_properties` | Object | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | String | 控件的唯一名称。 |
| `items` | Array of strings | 每个列表项的文本。有关更多信息，请参见参数表。 |

#### 示例

添加到窗口 `w`：

```javascript
w.add( "dropdownlist", bounds[, items, {creation_properties}] );
```

---

### editnumber

类名：`EditNumber`

:::note
此功能在 Photoshop 20.0 (CC 2019) 中添加，可能在其他主机中不存在。
:::

#### 描述

用户可输入十进制数字的可编辑文本字段。允许输入分数。

如果文本被更改并且用户按下 `ENTER` 或控件失去焦点，或调用其 [notify()](#notify) 方法，则调用 [onChange](#onchange) 回调。

当对文本进行任何更改时，调用 [onChanging](#onchanging) 回调。

`textselection` 属性包含当前选定的文本。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [Bounds 对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `text` | String | 可选。控件中显示的文本。 |
| `minValue` | Number | 可选。允许输入的最小值。 |
| `maxValue` | Number | 可选。允许输入的最大值。 |
| `creation_properties` | Object | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | String | 控件的唯一名称。 |
| `readonly` | Boolean | 可选。当为 `false`（默认值）时，控件接受文本输入。当为 `true` 时，控件不接受输入，仅显示 `text` 属性的内容。 |
| `noecho` | Boolean | 可选。当为 `false`（默认值）时，控件显示输入文本。当为 `true` 时，控件不显示输入文本（用于密码输入字段）。 |
| `enterKeySignalsOnChange` | Boolean | 可选。当为 `false`（默认值）时，控件在可编辑文本更改且控件失去键盘焦点（即用户切换到另一个控件、点击控件外部或按下 `ENTER`）时发出 [onChange](#onchange) 事件。当为 `true` 时，控件仅在可编辑文本更改且用户按下 `ENTER` 时发出 `onChange` 事件；其他键盘焦点的更改不会触发该事件。 |
| `borderless` | Boolean | 可选。当为 `true` 时，控件绘制时没有边框。默认值为 `false`。 |

#### 示例

添加到窗口 `w`：

```javascript
w.add("editnumber"[, bounds, text, minValue, maxValue, {creation_properties}]);
```

---

### edittext

类名：`EditText`

#### 描述

用户可以更改的可编辑文本字段。如果文本被更改并且用户按下 `ENTER` 或控件失去焦点，或调用其 [notify()](#notify) 方法，则调用 [onChange](#onchange) 回调。当对文本进行任何更改时，调用 [onChanging](#onchanging) 回调。

`textselection` 属性包含当前选定的文本。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [Bounds 对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `text` | String | 可选。控件中显示的文本。 |
| `creation_properties` | Object | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | String | 控件的唯一名称。 |
| `readonly` | Boolean | 当为 `false`（默认值）时，控件接受文本输入。当为 `true` 时，控件不接受输入，仅显示 `text` 属性的内容。 |
| `noecho` | Boolean | 当为 `false`（默认值）时，控件显示输入文本。当为 `true` 时，控件不显示输入文本（用于密码输入字段）。 |
| `enterKeySignalsOnChange` | Boolean | 当为 `false`（默认值）时，控件在可编辑文本更改且控件失去键盘焦点（即用户切换到另一个控件、点击控件外部或按下 `ENTER`）时发出 [onChange](#onchange) 事件。当为 `true` 时，控件仅在可编辑文本更改且用户按下 `ENTER` 时发出 `onChange` 事件；其他键盘焦点的更改不会触发该事件。 |
| `borderless` | Boolean | 当为 `true` 时，控件绘制时没有边框。默认值为 `false`。 |
| `multiline` | Boolean | 当为 `false`（默认值）时，控件接受单行文本。当为 `true` 时，控件接受多行文本，文本在控件的宽度内换行。 |
| `scrollable` | Boolean | （仅适用于多行元素）当为 `true`（默认值）时，文本字段具有垂直滚动条，当元素包含的文本超出可见区域时启用。当为 `false` 时，不显示垂直滚动条；如果元素包含的文本超出可见区域，可以使用箭头键上下滚动文本。 |

#### 示例

添加到窗口 `w`：

```javascript
w.add("edittext"[, bounds, text, {creation_properties}]);
```

---

### flashplayer

类名：`FlashPlayer`

#### 描述

包含 Flash Player 的控件，可以加载并播放存储在 SWF 文件中的 Flash 电影。

ScriptUI FlashPlayer 元素在 Adobe 应用程序中运行 Flash 应用程序。Flash 应用程序运行 ActionScript，这是与 Adobe 应用程序运行的 ExtendScript 版本的 JavaScript 不同的 JavaScript 实现。

此类型的控件对象包含允许脚本加载 SWF 文件、控制电影播放并与 ActionScript 环境通信的函数。参见 [FlashPlayer 控件函数](#flashplayer-control-functions)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [Bounds 对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `moveToLoad` | String 或 [File 对象](../../file-system-access/file-object) | 可选。要加载到播放器中的 SWF 文件的路径或 URL 字符串或文件。 |
| `creation_properties` | Object | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | String | 控件的唯一名称。 |

#### 示例

添加到窗口 `w`：

```javascript
w.add("flashplayer"[, bounds, movieToLoad, {creation_properties}]);
```

---

### group

类名：`Group`

#### 描述

其他控件的容器。容器具有控制子元素的附加属性；参见 [容器属性](../window-object#container-attributes)。

隐藏组会隐藏其所有子元素。使其可见会使那些未单独隐藏的子元素可见。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [Bounds 对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `creation_properties` | Object | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | String | 控件的唯一名称。 |

#### 示例

添加到窗口 `w`：

```javascript
w.add("group"[, bounds, {creation_properties}]);
```

---

### iconbutton

类名：`IconButton`

#### 描述

包含图标的鼠标敏感按钮。如果控件被点击或其 [notify()](#notify) 方法被调用，则调用 [onClick](#onclick) 回调。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [Bounds 对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `icon` | Named resource, pathname, 或 [File 对象](../../file-system-access/file-object) | 可选。按钮控件中显示的图标或图标系列的命名资源，或图像文件的路径名或文件。图像必须为 PNG 格式。 |
| `creation_properties` | Object | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
|---|---|---|
| `name` | String | 控件的唯一名称。 |
| `style` | String | 视觉样式的字符串，其中之一： |
| | | - `button`: 具有可见边框，外观为凸起或 3D。 |
| | | - `toolbutton`: 具有扁平外观，适合包含在工具栏中 |
| `toggle` | Boolean | 对于按钮样式的控件，值为 `true` 时，第一次点击时会显示按钮按下状态，每次点击时交替显示未按下状态。切换状态反映在控件的 `value` 属性
