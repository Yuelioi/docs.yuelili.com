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

### 图标按钮

类名: `IconButton`

#### 描述

一个包含图标的鼠标敏感按钮。如果控件被点击或其[notify()](#notify)方法被调用，则会触发[onClick](#onclick)回调。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [边界对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `icon` | 命名资源、路径名或[文件对象](../../file-system-access/file-object) | 可选。按钮控件中显示的图标或图标系列的命名资源，或图像文件的路径名或文件对象。图像必须为PNG格式。 |
| `creation_properties` | 对象 | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
|---|---|---|
| `name` | 字符串 | 控件的唯一名称。 |
| `style` | 字符串 | 视觉样式的字符串，可选值: |
| | | - `button`: 具有可见边框和凸起或3D外观。 |
| | | - `toolbutton`: 具有扁平外观，适合包含在工具栏中 |
| `toggle` | 布尔值 | 对于按钮样式控件，值为`true`会导致首次点击时呈现按下状态外观，每次点击时在按下和未按下状态之间切换。切换状态反映在控件的`value`属性中。 |

#### 示例

添加到窗口`w`中:

```javascript
w.add("iconbutton"[, bounds, icon, {creation_properties}]);
```

---

### 图像

类名: `Image`

#### 描述

显示图标或图像。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [边界对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `icon` | 命名资源、路径名或[文件对象](../../file-system-access/file-object) | 可选。按钮控件中显示的图标或图标系列的命名资源，或图像文件的路径名或文件对象。图像必须为PNG格式。 |
| `creation_properties` | 对象 | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 控件的唯一名称。 |

#### 示例

添加到窗口`w`中:

```javascript
w.add("image"[, bounds, icon, {creation_properties}]);
```

---

### 项目

类名: `Array of ListItem`

#### 描述

列表框或下拉列表中的选项项。这些对象在创建父列表对象时指定项目后创建，或之后使用列表控件的[add()](#add)方法创建。

下拉列表中的项目可以是`separator`类型，这种情况下它们不能被选中，并显示为水平线。

项目对象具有以下其他控件中没有的属性:

- [checked](#checked)
- [expanded](#expanded)
- [image](#image)
- [index](#index)
- [selected](#selected)

---

### 列表框

类名: `ListBox`

#### 描述

包含零个或多个项目的列表框。如果项目选择被脚本或用户更改，或对象的[notify()](#notify)方法被调用，则触发[onChange](#onchange)回调。双击项目会选中该项目并触发[onDoubleClick](#ondoubleclick)回调。

#### 参数

| 参数 | 类型 | 描述 | |
| --- | --- | --- | --- |
| `bounds` | [边界对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 | |
| `items` | 字符串数组 | 可选。每个列表项的文本。为每个项目创建一个[ListItem](../types-of-controls#listitem)对象。提供此参数或`creation_properties`中的items属性，不要同时提供两者。文本字符串为`"-"`的项目创建分隔符项目。 | |
| `creation_properties` | 对象 | 可选。包含以下任何属性的对象。 | |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 控件的唯一名称。 |
| `multiselect` | 布尔值 | 当为`false`(默认)时，只能选择一个项目。当为`true`时，可以选择多个项目。 |
| `items` | 字符串数组 | 每个列表项的文本。提供此属性或`items`参数，不要同时提供两者。此形式对于使用[资源规范](../resource-specifications)定义的元素最有用。 |
| `numberOfColumns` | 数字 | 显示项目的列数；默认为1。当有多列时，每个[ListItem](../types-of-controls#listitem)对象表示一个可选行。其[text](#text)和[image](#image)值提供第一列的标签，`subitems`属性指定其他列的标签。 |
| `showHeaders` | 布尔值 | `true`显示列标题。 |
| `columnWidths` | 数字数组 | 每列首选宽度的像素值数组。 |
| `columnTitles` | 字符串数组 | 对应每列标题的字符串数组，如果`showHeaders`为`true`则显示。 |

#### 示例

添加到窗口`w`中:

```javascript
w.add("listbox", bounds[, items, {creation_properties}]);
```

---

### 面板

类名: `Panel`

#### 描述

其他类型控件的容器，带有可选的边框。

容器具有控制子元素的附加属性；参见[容器属性](../window-object#container-attributes)。隐藏面板会隐藏其所有子元素。使其可见会使那些未单独隐藏的子元素可见。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [边界对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `text` | 字符串 | 可选。面板边框内显示的文本。 |
| `creation_properties` | 对象 | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
|---|---|---|
| `name` | 字符串 | 控件的唯一名称。 |
| `borderStyle` | 字符串 | 指定面板周围绘制的边框外观的字符串。默认为`etched`。可选值: |
| | | - `black` |
| | | - `etched` |
| | | - `gray` |
| | | - `raised` |
| | | - `sunken` |
| | | - `topDivider`: 仅面板顶部绘制水平线。 |
| | | !!! 警告 |
| | | `topDivider`属性未正式记录，是通过研究发现的。如果您有更多信息，请贡献！ |
| `subPanelCoordinates` | 布尔值 | 当为`true`时，此面板自动调整其子元素的位置以兼容Photoshop CS。默认为`false`，表示即使父窗口启用了自动调整，面板也不会调整其子元素的位置。 |

#### 示例

添加到窗口`w`中:

```javascript
w.add("panel"[, bounds, text, {creation_properties}]);
```

---

### 进度条

类名: `Progressbar`

#### 描述

显示操作进度的水平矩形。

所有`progressbar`控件均为水平方向。`value`属性包含进度指示器的当前位置；默认为0。有一个`minvalue`属性，但它始终为0；尝试将其设置为其他值会被静默忽略。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [边界对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `value` | 数字 | 可选。进度指示器的初始位置。默认为0。 |
| `minvalue` | 数字 | 可选。`value`属性可设置的最小值。默认为0。与`maxvalue`一起定义范围。 |
| `maxvalue` | 数字 | 可选。`value`属性可设置的最大值。默认为100。与`minvalue`一起定义范围。 |
| `creation_properties` | 对象 | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 控件的唯一名称。 |

#### 示例

添加到窗口`w`中:

```javascript
w.add("progressbar"[, bounds, value, minvalue, maxvalue, creation_properties}]);
```

---

### 单选按钮

类名: `RadioButton`

#### 描述

一个双状态控件，与其他单选按钮分组，其中只能有一个处于选中状态。当`value`为`true`时显示选中状态，为`false`时显示未选中状态。如果控件被点击或其[notify()](#notify)方法被调用，则触发[onClick](#onclick)回调。

组中的所有单选按钮必须连续创建，中间不能创建其他类型的元素。一次只能设置组中的一个`radiobutton`；设置不同的`radiobutton`会取消原始设置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [边界对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `text` | 字符串 | 可选。控件中显示的文本。 |
| `creation_properties` | 对象 | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 控件的唯一名称。 |

#### 示例

添加到窗口`w`中:

```javascript
w.add("radiobutton"[, bounds, text, {creation_properties}]);
```

---

### 滚动条

类名: `Scrollbar`

#### 描述

带有可拖动滚动指示器和移动指示器的步进按钮的滚动条。如果创建时`width`大于`height`，则`scrollbar`控件为水平方向；如果`height`大于`width`，则为垂直方向。

如果指示器的位置被更改或其[notify()](#notify)方法被调用，则触发[onChange](#onchange)回调。当用户移动指示器时，会重复触发[onChanging](#onchanging)回调。

#### 属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字 | 包含滚动条指示器在滚动区域内的当前位置，范围在`minvalue`和`maxvalue`之间。 |
| `stepdelta` | 数字 | 确定向上或向下箭头的滚动单位。默认为`1`。 |
| `jumpdelta` | 数字 | 确定跳跃的滚动单位(如点击指示器或箭头之外的条时)；默认为`minvalue`和`maxvalue`之间范围的20%。 |

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [边界对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `value` | 数字 | 可选。滚动指示器的初始位置。默认为0。 |
| `minvalue` | 数字 | 可选。`value`属性可设置的最小值。默认为0。与`maxvalue`一起定义滚动范围。 |
| `maxvalue` | 数字 | 可选。`value`属性可设置的最大值。默认为100。与`minvalue`一起定义滚动范围。 |
| `creation_properties` | 对象 | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 控件的唯一名称。 |

#### 示例

添加到窗口`w`中:

```javascript
w.add("scrollbar"[, bounds, value, minvalue, maxvalue, {creation_properties}]);
```

---

### 滑块

类名: `Slider`

#### 描述

带有可移动位置指示器的滑块。所有`slider`控件均为水平方向。如果指示器的位置被更改或其[notify()](#notify)方法被调用，则触发[onChange](#onchange)回调。

当用户移动指示器时，会重复触发`onChanging`回调。

`value`属性包含指示器在`minvalue`和`maxvalue`范围内的当前位置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [边界对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `value` | 数字 | 可选。滚动指示器的初始位置。默认为0。 |
| `minvalue` | 数字 | 可选。`value`属性可设置的最小值。默认为0。与`maxvalue`一起定义范围。 |
| `maxvalue` | 数字 | 可选。`value`属性可设置的最大值。默认为100。与`minvalue`一起定义范围。 |
| `creation_properties` | 对象 | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 控件的唯一名称。 |

#### 示例

添加到窗口`w`中:

```javascript
w.add("slider"[, bounds, value, minvalue, maxvalue, {creation_properties}]);
```

---

### 静态文本

类名: `StaticText`

#### 描述

用户无法更改的文本字段。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [边界对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `text` | 字符串 | 可选。控件中显示的文本。 |
| `creation_properties` | 对象 | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
|---|---|---|
| `name` | 字符串 | 控件的唯一名称。 |
| `multiline` | 布尔值 | 当为`false`(默认)时，控件显示单行文本。当为`true`时，控件显示多行文本，文本在控件宽度内换行。 |
| `scrolling` | 布尔值 | 当为`false`(默认)时，显示的文本无法滚动。当为`true`时，可以使用滚动条垂直滚动显示的文本；这种情况意味着`multiline`为`true`。 |
| `truncate` | 字符串 | 截断行为，可选值: |
| | | - `middle` |
| | | - `end` |
| | | - `none` |
| | | 如果为`middle`或`end`，定义如果指定标题不适合为其保留的空间，则从文本中删除字符并用省略号替换的位置。 |
| | | 如果为`none`，且文本不适合，则从末尾删除字符，不替换任何省略号字符。 |

#### 示例

添加到窗口`w`中:

```javascript
w.add("statictext"[, bounds, text, {creation_properties}]);
```

---

### 标签页

类名: `Tab`

#### 描述

其他类型控件的容器。与[panel](#panel)元素的不同之处在于它必须是[tabbedpanel](#tabbedpanel)元素的直接子元素，标题显示在选择标签中，并且没有脚本可定义的边框。当前活动的标签是父元素的`selection`属性的值。

容器具有控制子元素的附加属性；参见[容器属性](../window-object#container-attributes)。隐藏面板会隐藏其所有子元素。使其可见会使那些未单独隐藏的子元素可见。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [边界对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `text` | 字符串 | 可选。控件中显示的文本。 |
| `creation_properties` | 对象 | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 控件的唯一名称。 |

#### 示例

添加到窗口`w`中的标签面板`t`:

```javascript
w.t.add("tab"[, bounds, text, {creation_properties}]);
```

---

### 标签面板

类名: `TabbedPanel`

#### 描述

可选择的[tab](#tab)容器的容器。与[panel](#panel)元素的不同之处在于它只能包含[tab](#tab)元素作为直接子元素。

容器具有控制子元素的附加属性；参见[容器属性](../window-object#container-attributes)。隐藏面板会隐藏其所有子元素。使其可见会使那些未单独隐藏的子元素可见。

选中的标签子元素是父元素的`selection`属性的值。必须且只能选中一个`tab`子元素；选择一个会取消选择其他。当`selection`属性的值更改时，无论是用户选择不同的标签还是脚本设置属性，`tabbedpanel`都会收到[onChange](#onchange)通知。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [边界对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `text` | 字符串 | 可选。控件中显示的文本。 |
| `creation_properties` | 对象 | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 控件的唯一名称。 |

#### 示例

添加到窗口`w`中:

```javascript
w.add("tabbedpanel"[, bounds, text, {creation_properties}]);
```

---

### 树状视图

类名：`TreeView`

#### 描述

一种层级列表，其项可以包含子项。树的任何级别的项都可以单独选择。如果项选择被脚本或用户更改，或者调用对象的[notify()](#notify)方法，则调用[onChange](#onchange)回调。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `bounds` | [Bounds对象](../size-and-location-objects#bounds) | 可选。控件的位置和大小。 |
| `items` | 字符串数组 | 可选。每个顶级列表项的文本。为每个项创建一个[ListItem](../types-of-controls#listitem)对象。类型为node的项可以包含子项。提供此参数，或`creation_properties`中的`items`属性，不要同时提供两者。 |
| `creation_properties` | 对象 | 可选。包含以下任何属性的对象。 |

#### 创建属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 控件的唯一名称。 |
| `items` | 字符串数组 | 每个顶级列表项的文本。为每个项创建一个[ListItem](../types-of-controls#listitem)对象。类型为`node`的项可以包含子项。提供此属性，或`items`参数，不要同时提供两者。此形式对于使用[资源规范](../resource-specifications)定义的元素最有用。 |

#### 示例

添加到窗口`w`：

```javascript
w.add("treeview"[, bounds, items, {creation_properties}])
```

---

## 控件对象属性

下表显示了ScriptUI控件元素的属性。某些值仅适用于特定类型的控件，如所示。

有关适用于容器元素（面板、选项卡面板、选项卡和组类型的控件）的属性，请参见[容器属性](../window-object#container-attributes)。

### active

`controlObj.active`

#### 描述

当为`true`时，对象处于活动状态，否则为`false`。设置为`true`以使给定控件或对话框处于活动状态。

- 可见的模态对话框默认是活动对话框。
- 活动面板是最前面的窗口。
- 活动控件是具有焦点的控件，即接受键盘输入的控件，或者在[Button](../types-of-controls#button)的情况下，当用户在Windows中键入ENTER或在Mac OS中按空格键时被选中。

#### 类型

布尔值

---

### alignment

`controlObj.alignment`

#### 描述

适用于容器的子元素。如果定义，此值将覆盖父容器的`alignChildren`设置。

对于单个字符串值，允许的值取决于父容器中的`orientation`值。

| `orientation` 值 | 允许的值 |
|---|---|
| `"row"` | - `"bottom"` |
| | - `"center"`（默认） |
| | - `"fill"` |
| | - `"top"` |
| `"column"` | - `"center"`（默认） |
| | - `"fill"` |
| | - `"left"` |
| | - `"right"` |
| `"stack"` | - `"bottom"` |
| | - `"center"`（默认） |
| | - `"fill"` |
| | - `"left"` |
| | - `"right"` |
| | - `"top"` |

对于数组值，第一个字符串元素定义水平对齐，第二个元素定义垂直对齐。

水平对齐值必须是`"left"`、`"right"`、`"center"`或`"fill"`之一。

垂直对齐值必须是`"top"`、`"bottom"`、`"center"`或`"fill"`之一。

:::note
值不区分大小写。
:::

#### 类型

字符串或2个字符串的数组

---

### bounds

`controlObj.bounds`

#### 描述

描述元素边界的[Bounds](../size-and-location-objects#bounds)对象，对于Window元素为屏幕坐标，对于子元素为相对于父元素的坐标（比较[windowBounds](#windowbounds)）。对于窗口，bounds仅指窗口的内容区域。

:::warning
设置元素的[`size`](#size)或[`location`](#location)会更改其[`bounds`](#bounds)属性，反之亦然。
:::

#### 类型

[Bounds](../size-and-location-objects#bounds)

---

### characters

`controlObj.characters`

#### 描述

由[LayoutManager对象](../layoutmanager-object)用于确定[StaticText](../types-of-controls#statictext)或[EditText](../types-of-controls#edittext)控件的默认[preferredSize](#preferredsize)。

控件将被设置为足够宽以显示控件所用字体中给定数量的`X`字符。设置此属性是在控件中为最大显示字符数保留空间的最佳方式。

#### 类型

数字

---

### checked

`controlObj.checked`

#### 描述

:::info
仅适用于[ListItem](../types-of-controls#listitem)对象。
:::

- 当为`true`时，该项标有平台适当的复选标记。
- 当为`false`时，不绘制复选标记，但在左边距中为其保留空间，以便该项与其他可勾选项对齐。
- 当为`undefined`时，不为复选标记保留空间。

#### 类型

布尔值

---

### columns

`controlObj.columns`

#### 描述

:::info
仅适用于[ListBox](#listbox)对象。
:::

一个JavaScript对象，具有两个只读属性，其值由创建参数设置。

#### 属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `titles` | 字符串数组 | 列标题字符串的数组，其长度与创建时指定的列数匹配。 |
| `preferredWidths` | 数字数组 | 列宽度的数组，其长度与创建时指定的列数匹配。 |

#### 类型

对象

---

### enabled

`controlObj.enabled`

#### 描述

- 当为`true`时，控件处于启用状态，意味着它接受输入。
- 当为`false`时，控件元素不接受输入，并且所有类型的元素都具有暗淡的外观。

:::note
禁用的[ListItem](../types-of-controls#listitem)在[ListBox](#listbox)、[DropDownList](#dropdownlist)或[TreeView](#treeview)对象中不可选择。
:::

#### 类型

布尔值

---

### expanded

`controlObj.expanded`

#### 描述

适用于[TreeView](#treeview)列表控件中类型为`node`的[ListItem](../types-of-controls#listitem)对象。当为`true`时，项处于展开状态并显示其子项，当为`false`时，它处于折叠状态并隐藏子项。

#### 类型

布尔值

---

### graphics

`controlObj.graphics`

#### 描述

一个[ScriptUIGraphics对象](../graphic-customization-objects#scriptuigraphics-object)，可用于自定义控件的外观，以响应[onDraw](#ondraw)事件。

#### 类型

[ScriptUIGraphics对象](../graphic-customization-objects#scriptuigraphics-object)

---

### helpTip

`controlObj.helpTip`

#### 描述

当鼠标光标悬停在用户界面控件元素上时，显示在小型浮动窗口中的简短帮助消息（也称为*工具提示*）。

设置为空字符串或`null`以删除帮助文本。

#### 类型

字符串

---

### icon

`controlObj.icon`

#### 描述

:::danger
已弃用。使用[Image](../types-of-controls#image)代替。
:::

#### 类型

字符串或[File](../../file-system-access/file-object)对象

---

### image

`controlObj.image`

#### 描述

一个[ScriptUIImage对象](../graphic-customization-objects#scriptuiimage-object)，或图标资源的名称，或包含PNG或JPEG格式的平台特定图像的文件路径名或[File对象](../../file-system-access/file-object)，或此类文件的快捷方式或别名。

- 对于[IconButton](../types-of-controls#iconbutton)，图标显示为按钮的内容。
- 对于[Image](../types-of-controls#image)，图像是图像元素的全部内容。
- 对于[ListItem](../types-of-controls#listitem)，图像显示在文本的左侧。
- 如果父项是多列[ListBox](#listbox)，这是第一列标签的显示图像，进一步列的标签在[subitems](#subitems)数组中指定。
- 参见[创建多列列表](../types-of-controls#creating-multi-column-lists)。

#### 类型

[ScriptUIImage对象](../graphic-customization-objects#scriptuiimage-object)

---

### indent

`controlObj.indent`

#### 描述

在自动布局期间缩进元素的像素数。适用于`column`方向和`left`对齐，或`row`方向和`top`对齐。

#### 类型

数字

---

### index

`controlObj.index`

#### 描述

:::info
仅适用于[ListItem](../types-of-controls#listitem)对象。
:::

此项在其父列表控件的`items`集合中的索引。

#### 类型

数字。只读。

---

### items

`controlObj.items`

#### 描述

:::info
仅适用于[ListBox](#listbox)、[DropDownList](#dropdownlist)或[TreeView](#treeview)对象。
:::

列表中项的[ListItem](../types-of-controls#listitem)对象的集合。通过0基索引访问。

:::tip
要获取列表中的项数，请使用`items.length`。
:::

#### 类型

对象数组。只读。

---

### itemSize

`controlObj.itemSize`

#### 描述

:::info
仅适用于[ListBox](#listbox)、[DropDownList](#dropdownlist)或[TreeView](#treeview)对象。
:::

描述列表中每个项的宽度和高度的[Dimension](../size-and-location-objects#dimension)对象（以像素为单位）。

如果未另行指定，由自动布局用于确定列表的[`preferredSize`](#preferredsize)。

如果未显式设置，则每个项的大小设置为匹配列表中所有项的最大高度和宽度。

#### 类型

[Dimension](../size-and-location-objects#dimension)对象

---

### jumpdelta

`controlObj.jumpdelta`

#### 描述

:::info
仅适用于[Scrollbar](../types-of-controls#scrollbar)对象。
:::

当用户点击可移动元素的前面或后面时，[Scrollbar](../types-of-controls#scrollbar)指示器位置的增量或减量。

默认为[`maxvalue`](#maxvalue)和[`minvalue`](#minvalue)属性值之间范围的20%。

#### 类型

数字

---

### justify

`controlObj.justify`

#### 描述

[StaticText](#statictext)和[EditText](#edittext)控件中文本的对齐方式。

其中之一：

- `"left"`（默认）
- `"center"`
- `"right"`

:::note
对齐方式仅在创建时使用资源规范或创建参数设置值时才有效。
:::

#### 类型

字符串

---

### location

`controlObj.location`

#### 描述

描述元素位置的[Point](../size-and-location-objects#point)对象，作为数组`[x, y]`，表示元素左上角的坐标。对于`Window`元素，这些是屏幕坐标，对于其他元素，是相对于父元素的坐标。

`location`定义为`[bounds.x, bounds.y]`。

默认情况下，`location`为`undefined`，直到父容器的布局管理器被调用。

:::warning
设置元素的[`size`](#size)或[`location`](#location)会更改其[`bounds`](#bounds)属性，反之亦然。
:::

#### 类型

[Point对象](../size-and-location-objects#point)

---

### maximumSize

`controlObj.maximumSize`

#### 描述

指定元素的最大高度和宽度的[Dimension](../size-and-location-objects#dimension)对象。

默认值为每个维度比屏幕尺寸小50像素。在Windows中，这可以占据整个屏幕；您必须定义一个足够大的`maximumSize`以满足您的预期用途。

#### 类型

[Dimension对象](../size-and-location-objects#dimension)

---

### minimumSize

`controlObj.minimumSize`

#### 描述

指定元素的最小高度和宽度的[Dimension](../size-and-location-objects#dimension)对象。默认为`[0,0]`。

#### 类型

[Dimension对象](../size-and-location-objects#dimension)

---

### maxvalue

`controlObj.maxvalue`

#### 描述

[`value`](#value)属性可以具有的最大值。

- 如果`maxvalue`重置为小于`value`，`value`重置为`maxvalue`。
- 如果`maxvalue`重置为小于[`minvalue`](#minvalue)，`minvalue`重置为`maxvalue`。

#### 类型

数字

---

### minvalue

`controlObj.minvalue`

#### 描述

[`value`](#value)属性可以具有的最小值。

- 如果`minvalue`重置为大于`value`，`value`重置为`minvalue`。
- 如果`minvalue`重置为大于[`maxvalue`](#maxvalue)，`maxvalue`重置为`minvalue`。

#### 类型

数字

---

### parent

`controlObj.parent`

#### 描述

此元素的直接父对象。

#### 类型

[Control Object](#)。只读。

---

### preferredSize

`controlObj.preferredSize`

#### 描述

一个 [Dimension](../size-and-location-objects#dimension) 对象，布局管理器使用它来确定每个元素的最佳尺寸。如果未通过脚本显式设置，则该值由使用 ScriptUI 的用户界面框架确定，并基于元素的文本、字体、字体大小、图标大小和其他特定于用户界面框架的属性。

脚本可以在调用布局管理器之前显式设置 `preferredSize`，以建立非默认的元素尺寸。若仅为一个维度设置特定值，请将另一个维度指定为 `-1`。

#### 类型

[Dimension 对象](../size-and-location-objects#dimension)

---

### properties

`controlObj.properties`

#### 描述

一个包含元素的一个或多个创建属性的对象（仅在元素创建时使用的属性）。

#### 类型

对象

---

### selected

`controlObj.selected`

#### 描述

:::info
仅适用于 [ListItem](../types-of-controls#listitem) 对象。
:::

- 当为 `true` 时，该项是其父列表的 [`selection`](#selection) 的一部分。
- 当为 `false` 时，该项未被选中。

设置为 `true` 以在单选列表中选择此项，或在多选列表中将此项添加到选择数组中。

#### 类型

布尔值

---

### selection

`controlObj.selection`

#### 描述

:::info
仅适用于 [ListBox](#listbox) 对象。
:::

对于 [ListBox](#listbox)，这是一个 [ListItem](../types-of-controls#listitem) 对象的数组，表示多选列表中的当前选择。设置此值会导致选中的项被高亮显示，并在必要时滚动到视图中。如果未选中任何项，则值为 `null`。设置为 `null` 以取消选择所有项。

该值也可能因为用户单击或双击某项，或因为某项被 [remove()](#remove) 或 [removeAll()](#removeall) 移除而改变。每当该值更改时，都会调用 [onChange](#onchange) 回调。如果该值因双击而更改，则调用 [onDoubleClick](#ondoubleclick) 回调。

您可以使用项的索引或索引数组来设置该值，而不是使用对象引用。如果设置的索引值超出范围，则操作将被忽略。当使用索引值设置时，该属性仍返回对象引用。

- 如果为单选列表设置该值为数组，则仅选择数组中的第一项。
- 如果为多选列表设置该值为单个项，则该项将添加到当前选择中。

#### 类型

[ListItem 对象](../types-of-controls#listitem) 的数组

---

### selection

`controlObj.selection`

#### 描述

:::info
仅适用于 [DropDownList](#dropdownlist) 或 [TreeView](#treeview) 对象。
:::

当前选中的 [ListItem](../types-of-controls#listitem) 对象。

设置此值会导致选中的项被高亮显示，并在必要时滚动到视图中。如果未选中任何项，则值为 `null`。设置为 `null` 以取消选择所有项。

该值也可能因为用户单击某项，或因为某项被 [remove()](#remove) 或 [removeAll()](#removeall) 移除而改变。

每当该值更改时，都会调用 [onChange](#onchange) 回调。

您可以使用项的索引或索引数组来设置该值，而不是使用对象引用。如果设置的索引值超出范围，则操作将被忽略。当使用索引值设置时，该属性仍返回对象引用。

#### 类型

`ListItem`

---

### shortcutKey

`controlObj.shortcutKey`

#### 描述

调用此元素的 [onShortcutKey](#onshortcutkey) 回调的键序列（仅在 [Windows](.././window-object) 中）。

#### 类型

字符串

---

### size

`controlObj.size`

#### 描述

一个 [Dimension](../size-and-location-objects#dimension) 对象，定义元素的实际尺寸。

初始时为 `undefined`，除非通过脚本显式设置，否则由 [LayoutManager 对象](.././layoutmanager-object) 定义。

虽然脚本可以在调用布局管理器之前显式设置 `size` 以建立不同于 [`preferredSize`](#preferredsize) 或默认尺寸的元素尺寸，但不建议这样做。

定义为 `[bounds.width, bounds.height]`。

:::warning
设置元素的 [`size`](#size) 或 [`location`](#location) 会更改其 [`bounds`](#bounds) 属性，反之亦然。
:::

#### 类型

[Dimension](../size-and-location-objects#dimension) 对象

---

### stepdelta

`controlObj.stepdelta`

#### 描述

用户单击步进按钮时，[Scrollbar](../types-of-controls#scrollbar) 元素位置的增量或减量。

#### 类型

数字

---

### subitems

`controlObj.subitems`

#### 描述

:::info
仅适用于 [ListItem](../types-of-controls#listitem) 对象。
:::

当父项为多列 [ListBox](#listbox) 时，[ListItem.text](#text) 和 [ListItem.image](#image) 值描述第一列中的标签，而此属性指定该行在其余列中的其他标签。

此属性包含一个 JavaScript 对象数组，其长度比列数少一。每个成员指定对应列中的标签，第一个成员 (`subitems[0]`) 描述第二列中的标签。

#### 属性

每个对象有两个属性，可以提供一个或两个：

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `text` | 字符串 | 此标签的可本地化显示字符串。 |
| `image` | Image | 此标签的 Image 对象。 |

#### 类型

数组

---

### text

`controlObj.text`

#### 描述

标题、标签或显示的文本。对于类型为 `group` 的容器忽略。

对于控件，其含义取决于控件类型。例如，按钮使用 `text` 作为标签，而编辑字段使用文本访问内容。

对于 [ListItem](../types-of-controls#listitem) 对象，这是列表选项的显示字符串。如果父项是多列列表框，则这是第一列中标签的显示字符串，其他列的标签在 [subitems](#subitems) 数组中指定。请参阅 [创建多列列表](../types-of-controls#creating-multi-column-lists)。

这是一个可本地化的字符串：请参阅 [ScriptUI 对象中的本地化](../localization-in-scriptui-objects)。

#### 类型

字符串

---

### textselection

`controlObj.textselection`

#### 描述

显示文本的控件中当前选中的文本，如果未选中任何文本，则为空字符串。

设置该值会替换当前文本选择并修改 [`text`](#text) 属性的值。如果没有当前选择，则会在当前插入点将新值插入到 `text` 字符串中。`textselection` 值在修改 `text` 值后重置为空字符串。

:::note
在 [EditText](../types-of-controls#edittext) 控件的父 Window 存在之前设置 `textselection` 属性是未定义的操作。
:::

#### 类型

字符串

---

### title

`controlObj.title`

#### 描述

:::info
仅适用于 [DropDownList](#dropdownlist)、[FlashPlayer](#flashplayer)、[IconButton](#iconbutton)、[Image](#image) 或 [TabbedPanel](#tabbedpanel) 对象。
:::

元素的文本标签。标题可以显示在元素的左侧或右侧，或上方或下方，也可以将标题叠加在元素的中心。位置由 [titleLayout](#titlelayout) 值控制。

#### 类型

字符串

---

### titleLayout

`controlObj.titleLayout`

#### 描述

:::info
仅适用于 [DropDownList](#dropdownlist)、[FlashPlayer](#flashplayer)、[IconButton](#iconbutton)、[Image](#image) 或 [TabbedPanel](#tabbedpanel) 对象。
:::

对于具有标题值的控件，文本标签相对于元素的显示方式。

#### 属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `alignment` | 数字数组 | 标题相对于元素的位置，一个 [horizontal_alignment, vertical_alignment] 数组。有关可能的对齐值，请参阅 [alignment](#alignment)。请注意，在此上下文中，`fill` 不是水平或垂直对齐的有效值。 |
| `characters` | 数字 | 如果为 `1` 或更大，则保留足够宽的标题宽度以容纳此元素字体中指定数量的 "X" 字符。如果为 0，则在布局操作期间根据 `title` 属性的值计算标题宽度。 |
| `spacing` | 数字 | `0` 或更大。标题与元素之间的像素数。 |
| `margins` | 数字数组，`[left, top, right, bottom]` | 元素边缘与其中可见内容之间的像素数。这会覆盖默认边距。 |
| `justify` | 字符串 | `"left"`、`"center"` 或 `"right"` 之一，当为标题宽度分配的空间大于文本的实际宽度时，如何对齐文本。 |
| `truncate` | 字符串 | 如果为 `"middle"` 或 `"end"`，定义如果指定的标题不适合为其保留的空间，则从何处删除字符并用省略号（"..."）替换。如果为 `"none"`，并且文本不适合，则从末尾删除字符，不替换任何省略号字符。 |

#### 类型

对象

---

### type

`controlObj.type`

#### 描述

包含元素的类型名称，如创建时所指定。

- 对于 [`Window`](.././window-object) 对象，类型名称为 window、palette 或 dialog 之一。
- 对于 [`controls`](.././control-objects)，控件的类型，如创建它的 add 方法中所指定。

#### 类型

字符串。只读。

---

### value

`controlObj.value`

#### 描述

:::info
仅适用于 [Checkbox](../types-of-controls#checkbox) 或 [RadioButton](../types-of-controls#radiobutton) 对象。
:::

如果控件处于选中或设置状态，则为 `true`，否则为 `false`。

#### 类型

布尔值

---

### value

`controlObj.value`

#### 描述

:::info
仅适用于 [Scrollbar](../types-of-controls#scrollbar) 或 [Slider](../types-of-controls#slider) 对象。
:::

指示器的当前位置。如果设置为超出 minvalue 和 maxvalue 指定范围的值，则会自动重置为最接近的边界。

#### 类型

数字

---

### visible

`controlObj.visible`

#### 描述

当为 `true` 时，元素显示；当为 `false` 时，元素隐藏。

当容器隐藏时，其子元素也会隐藏，但它们保留自己的可见性值，并在父元素下次显示时相应地显示或隐藏。

#### 类型

布尔值

---

### window

`controlObj.window`

#### 描述

包含此控件的 Window。

#### 类型

[Window 对象](../window-object)。只读。

---

### windowBounds

`controlObj.windowBounds`

#### 描述

一个 [Bounds](../size-and-location-objects#bounds) 对象，包含此控件在包含窗口坐标中的边界。与此控件对象的 [`.bounds`](#bounds) 属性相比，后者坐标相对于直接父容器。

#### 类型

[Bounds 对象](../size-and-location-objects#bounds)。只读。

---

### function_name

`controlObj.function_name`

#### 描述

对于 [FlashPlayer](../types-of-controls#flashplayer) 控件，这是从 Flash ActionScript 环境回调的函数定义。

没有特殊的命名要求，但该函数只能接受和返回支持的数据类型：

- 数组
- 布尔值
- Null
- 数字
- 对象
- 字符串
- undefined

:::note
ActionScript `class` 和 `date` 对象不支持作为参数值。
:::

#### 类型

函数

---

## 控件对象函数

下表显示了为每种元素类型以及特定控件类型定义的方法。

### addEventListener()

`controlObj.addEventListener(eventName, handler[, capturePhase=false]);`

#### 描述

为此控件中发生的特定类型的事件注册事件处理程序。

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
| | | - `"keyup"` |
| | | - `"keydown"` |
| | | - `"click"` （detail = 1 为单击，2 为双击） |
| `handler` | 函数 | 为此目标中指定事件注册的函数。这可以是扩展中定义的函数名称，或是在事件发生时执行的本地定义的处理函数。处理函数接受一个参数，即 UIEvent 基类的对象。请参阅 [为窗口或控件注册事件监听器](../defining-behavior-with-event-callbacks-and-listeners#registering-event-listeners-for-windows-or-controls)。 |
| `capturePhase` | 布尔值 | 可选。当为 `true` 时，处理程序仅在事件传播的捕获阶段调用。默认为 `false`，表示如果此对象是目标的祖先，则在冒泡阶段调用处理程序；如果此对象本身就是目标，则在目标阶段调用处理程序。 |

#### 返回

无

### dispatchEvent()

`controlObj.dispatchEvent(eventObj)`

#### 描述

在此目标对象上模拟触发事件。脚本可以使用[ScriptUI.events.createEvent()](../scriptui-class#scriptuieventscreateevent)为特定事件创建事件对象，并通过此方法传递以启动该事件的事件传播。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `eventObj` | Object | UIEvent基类的对象。 |

#### 返回值

布尔值。如果任何处理该事件的已注册监听器调用了事件对象的[preventDefault()](../event-handling#preventdefault)方法，则返回`false`，否则返回`true`。

---

### hide()

`controlObj.hide()`

#### 描述

隐藏此容器或控件。当窗口或容器被隐藏时，其子元素也会被隐藏，但当再次显示时，子元素会保持各自的可见状态。

#### 返回值

无

---

### notify()

`controlObj.notify([event])`

#### 描述

发送通知消息，模拟指定的用户交互事件。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `event` | String | 可选。要调用的控件事件处理程序名称。可选值之一： |
| | | - `"onClick"` |
| | | - `"onChange"` |
| | | - `"onChanging"` |
| | | 默认情况下，为[EditText](../types-of-controls#edittext)控件模拟[onChange](#onchange)事件，为支持该事件的控件模拟[onClick](#onclick)事件。 |

#### 返回值

无

---

### removeEventListener()

`controlbj.removeEventListener(eventName, handler[, capturePhase]);`

#### 描述

取消注册此控件特定类型事件的事件处理程序。所有参数必须与注册事件处理程序时使用的参数完全相同。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `eventName` | String | 事件名称。 |
| `handler` | Function | 注册用于处理事件的函数。 |
| `capturePhase` | Boolean | 可选。处理程序是否仅在捕获阶段响应。 |

#### 返回值

无

---

### show()

`controlObj.show()`

#### 描述

显示此容器或控件。

当窗口或容器被隐藏时，其子元素也会被隐藏，但当再次显示时，子元素会保持各自的可见状态。

#### 返回值

无

---

### toString()

`listItemObj.toString()`

#### 描述

:::info
仅适用于[ListItem](../types-of-controls#listitem)对象。
:::

将此项目的text属性值作为字符串检索。

#### 返回值

字符串

---

### valueOf()

`listItemObj.valueOf()`

#### 描述

:::info
仅适用于[ListItem](../types-of-controls#listitem)对象。
:::

检索此项目在父列表items数组中的索引号。

#### 返回值

数字

---

## 列表控件对象函数

下表仅显示为列表对象定义的方法。

### add()

`listObj.add(type, text[, index=listObj.numItems])`

#### 描述

:::info
仅适用于[ListBox](#listbox)、[DropDownList](#dropdownlist)或[TreeView](#treeview)对象。
:::

在给定索引处向items数组添加一个`item`。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `type` | String | 要添加的项目类型。可选值之一： |
| | | - `item`：带有文本标签的基本可选项目。 |
| | | - `separator`：分隔符。仅适用于[DropDownList](#dropdownlist)对象。此时忽略text值，方法返回`null`。 |
| `text` | String | 项目的本地化文本标签。 |
| `index` | Number | 可选。当前项目列表中插入此项目后的索引。如果未提供或大于当前列表长度，则新项目将添加到末尾。 |

#### 返回值

当`type = "item"`时返回[Item](#item)对象，当`type = "separator"`时返回`null`。

---

### find()

`listObj.find(text)`

#### 描述

:::info
仅适用于[ListBox](#listbox)、[DropDownList](#dropdownlist)或[TreeView](#treeview)对象。
:::

在此对象的`items`数组中查找具有给定`text`值的项目对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `text` | String | 要查找的项目的文本。 |

#### 返回值

如果找到则返回[ListItem](../types-of-controls#listitem)对象；否则返回`null`。

---

### remove()

`containerObj.remove(index)`

`containerObj.remove(text)`

`containerObj.remove(child)`

#### 描述

- 对于容器（[Panel](#panel)、[Group](#group)）：从容器的`children`数组中移除指定的子控件。
- 对于[ListBox](#listbox)、[DropDownList](#dropdownlist)或[TreeView](#treeview)对象：从此对象的items数组中移除指定的项目。

如果项目不存在，不会产生错误。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `index`, `text`, `child` | Number或String或[Control](#control-objects)对象 | 要移除的项目或子控件，可以通过基于0的索引、`text`值或`control`对象指定。 |

#### 返回值

无

---

### removeAll()

`listObj.removeAll()`

#### 描述

:::info
仅适用于[ListBox](#listbox)、[DropDownList](#dropdownlist)或[TreeView](#treeview)对象。
:::

从此对象的`items`数组中移除所有项目。

#### 返回值

无

---

### revealItem()

`listObj.revealItem(item)`

#### 描述

:::info
仅适用于[ListBox](#listbox)对象。
:::

如有必要，滚动列表以使指定项目可见。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `item` | [Control](.././control-objects)对象 | 要显示的项目或子控件，一个控件对象。 |

#### 返回值

无

---

## FlashPlayer控件函数

:::info
仅适用于[FlashPlayer](#flashplayer)对象。
:::

### 限制

这些函数在控制Flash影片播放时有以下限制：

- 不要使用[stopMovie()](#stopmovie)和[playMovie()](#playmovie)来暂停和随后恢复或重新启动由Flex™生成的SWF文件。
- 对于某些由Flash Authoring生成的SWF文件，[stopMovie()](#stopmovie)和[playMovie()](#playmovie)序列可能没有意义，具体取决于它们的实现方式。该序列可能无法正确将文件重置到初始状态（当[playMovie()](#playmovie)的`rewind`参数为`true`时），也无法正确暂停然后恢复文件的执行（当`rewind`为`false`时）。
- 从播放器的宿主环境中使用[stopMovie()](#stopmovie)对ScriptUI Flash Player元素中播放的SWF文件没有影响。但是，可以使用Flash Authoring生成一个SWF文件，使其能够响应用户交互自行停止。
- 当SWF文件已经在播放时，不要调用[playMovie()](#playmovie)。

---

### invokePlayerFunction()

`flashPlayerObj.invokePlayerFunction(fnName, [arg1[,...argN]] )`

#### 描述

调用Flash应用程序中定义的ActionScript函数。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `fnName` | String | Flash ActionScript函数的名称，该函数已由当前加载的SWF文件通过ExternalInterface对象注册；参见[从ScriptUI脚本调用ActionScript函数](../communicating-with-the-flash-application#calling-actionscript-functions-from-a-scriptui-script)。 |
| `args` | Any | 可选。传递给函数的一个或多个参数，可以是以下类型： |
| | | - 数组 |
| | | - 布尔值 |
| | | - `null` |
| | | - 数字 |
| | | - 对象 |
| | | - 字符串 |
| | | - `undefined` |

#### 返回值

被调用函数的结果，必须是允许的类型之一。ActionScript的`class`和`date`对象不支持作为返回值。

---

### loadMovie()

`flashPlayerObj.loadMovie(file)`

#### 描述

将影片加载到Flash Player中并开始播放。如果在创建控件时未指定关联的影片文件，则必须使用此函数加载一个。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `file` | [文件对象](../../file-system-access/file-object) | 要加载的SWF文件。 |

#### 返回值

无

---

### playMovie()

`flashPlayerObj.playMovie(rewind)`

#### 描述

重新开始播放已停止的影片。

:::warning
不要在影片正在播放时调用。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `rewind` | Boolean | 当为`true`时，从开头重新开始播放影片；否则，从停止的位置开始播放。 |

#### 返回值

无

---

### stopMovie()

`flashPlayerObj.stopMovie()`

#### 描述

停止当前影片的播放。

:::note
从播放器的宿主环境调用时不起作用。
:::

#### 返回值

无

---

## 控件事件处理回调

以下事件会在特定类型的控件中触发。要处理事件，请在控件对象中定义具有相应名称的函数。处理函数不接受参数且无预期返回值；参见[使用事件回调和监听器定义行为](../defining-behavior-with-event-callbacks-and-listeners)。

---

### onActivate

当用户通过点击或Tab键将键盘焦点给予控件时调用。

---

### onClick

当用户点击以下控件类型之一时调用：

- [按钮](../types-of-controls#button)
- [复选框](../types-of-controls#checkbox)
- [图标按钮](../types-of-controls#iconbutton)
- [单选按钮](../types-of-controls#radiobutton)

---

### onChange

当用户在以下控件类型之一完成更改时调用：

- [下拉列表](#dropdownlist)
- [编辑数字](../types-of-controls#editnumber)
- [编辑文本](../types-of-controls#edittext)
- [列表框](#listbox)
- [滚动条](../types-of-controls#scrollbar)
- [滑块](../types-of-controls#slider)
- [树视图](#treeview)

- 对于[编辑数字](../types-of-controls#editnumber)和[编辑文本](../types-of-controls#edittext)控件，仅在更改完成时调用，即当焦点移动到另一个控件或用户键入`ENTER`时。
- 具体行为取决于创建参数`enterKeySignalsOnChange`；参见[EditText](#edittext)描述。
- 对于[滑块](../types-of-controls#slider)或[滚动条](../types-of-controls#scrollbar)，当用户完成拖动位置标记或点击控件时调用。
- 对于[列表框](#listbox)、[下拉列表](#dropdownlist)或[树视图](#treeview)控件，当selection属性更改时调用。
- 这可能发生在脚本直接设置属性、从列表中移除选定项目或用户更改选择时。

---

### onChanging

在以下控件类型之一每次增量更改时调用：

- [编辑数字](../types-of-controls#editnumber)
- [编辑文本](../types-of-controls#edittext)
- [滚动条](../types-of-controls#scrollbar)
- [滑块](../types-of-controls#slider)

- 对于[编辑数字](../types-of-controls#editnumber)和[编辑文本](../types-of-controls#edittext)控件，当控件具有焦点时每次按键都会调用。
- 对于[滑块](../types-of-controls#slider)或[滚动条](../types-of-controls#scrollbar)，位置标记的任何移动都会调用。

---

### onCollapse

当用户在[树视图](#treeview)控件中折叠（关闭）节点时调用。

此函数的参数是被折叠的[ListItem](../types-of-controls#listitem)节点对象。

---

### onDeactivate

当用户通过点击外部或Tab键移出先前活动的控件移除键盘焦点时调用。

---

### onDoubleClick

当用户在[列表框](#listbox)控件中双击项目时调用。

列表的[`selection`](#selection)属性设置为被点击的项目。

---

### onEnterKey

:::warning
此方法/属性未正式记录，是通过研究发现的。此处信息可能不准确，且此方法/属性可能在未来消失或停止工作。如有更多信息，请贡献！
:::

当用户在[编辑文本](#edittext)控件中按下回车键时调用。

---

### onDraw

当容器或控件即将绘制时调用。允许脚本使用控件关联的[ScriptUIGraphics对象](../graphic-customization-objects#scriptuigraphics-object)修改或控制外观。处理函数接受一个参数，即[DrawState对象](#drawstate-object)。

---

### onExpand

当用户在[树视图](#treeview)控件中展开（打开）节点时调用。此函数的参数是被展开的[ListItem](../types-of-controls#listitem)节点对象。

---

### onShortcutKey

:::info
仅适用于[窗口](.././window-object)对象。
:::

当键入的快捷键序列与活动窗口中元素的[shortcutKey](#shortcutkey)值匹配时调用。

---

## DrawState对象

一个辅助对象，描述触发[onDraw](#ondraw)事件时的输入状态。包含报告当前控件是否具有输入焦点以及特定鼠标按钮和按键状态的属性。

没有对象构造函数。

### DrawState对象属性

该对象包含以下只读属性：

| 属性 | 类型 | 行为 |
| --- | --- | --- |
| `altKeyPressed` | Boolean | 当为`true`时，ALT键被按下。（仅在Windows操作系统中。） |
| `capsLockKeyPressed` | Boolean | 当为`true`时，CAPSLOCK键被按下。 |
| `cmdKeyPressed` | Boolean | 当为`true`时，CMD键被按下。（仅在Mac OS中。） |
| `ctrlKeyPressed` | Boolean | 当为`true`时，CTRL键被按下。 |
| `hasFocus` | Boolean | 当为`true`时，包含此对象的控件具有输入焦点。 |
| `leftButtonPressed` | Boolean | 当为`true`时，鼠标左键被按下。 |
| `middleButtonPressed` | Boolean | 当为`true`时，鼠标中键被按下。 |
| `mouseOver` | Boolean | 当为`true`时，光标位置位于包含此对象的控件边界内。 |
| `numLockKeyPressed` | Boolean | 当为`true`时，NUMLOCK键被按下。 |
| `optKeyPressed` | Boolean | 当为`true`时，OPT键被按下。（仅在Mac OS中。） |
| `rightButtonPressed` | Boolean | 当为`true`时，鼠标右键被按下。 |
| `shiftKeyPressed` | Boolean | 当为`true`时，SHIFT键被按下。 |
