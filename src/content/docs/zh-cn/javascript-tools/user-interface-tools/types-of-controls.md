---
title: 控件类型
---
# 控件类型

以下部分介绍了可以添加到 `Window` 或其他容器元素（`panel` 或 `group`）中的控件类型。有关属性和函数的详细信息，以及如何创建每种类型的元素，请参阅 [控件对象构造函数](../control-objects#control-object-constructors)。

---

## 容器

这些是包含在窗口中的 `Control` 对象类型，它们包含并分组其他控件。

### 面板 (Panel)

通常用于视觉上组织相关的控件。

- 设置 `text` 属性以定义出现在面板顶部的标题。
- 可选的 `borderStyle` 创建属性控制绘制在面板周围的边框的外观。

你可以将面板用作分隔符：宽度为 0 的面板显示为垂直线，高度为 0 的面板显示为水平线：

```javascript
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.msgPnl = dlg.add( "panel", [ 25, 15, 355, 130 ], "Messages" );
```

---

### 组 (Group)

用于视觉上组织相关的控件。

与 `Panel` 不同，`Group` 没有标题或可见的边框。

你可以使用它们创建控件的层次结构，并在较大的面板内对某些控件组的布局属性进行精细控制。有关示例，请参阅 [创建更复杂的布局](../automatic-layout#creating-more-complex-arrangements)。

---

### 选项卡面板 (TabbedPanel)

一个仅包含 `Tab` 对象作为其直接子元素的面板。它有一个 `selection` 属性，包含当前活动的 `Tab` 子元素。

当 `selection` 属性的值发生变化时，无论是用户选择不同的选项卡，还是脚本设置该属性，`TabbedPanel` 都会收到一个 `onChange` 通知。

`title` 属性提供了一个可选的标签；`titleLayout` 属性将标签放置在面板内。

---

### 选项卡 (Tab)

一个通用容器，其父元素是 `TabbedPanel`，带有一个可选的选项卡，显示可本地化的文本值。

其大小和位置由父元素决定。

---

## 用户界面控件

这些是包含在窗口、面板和组中的 `Control` 对象类型，提供特定类型的显示和用户交互。控件实例通过将相应的 `type` 关键字传递给 `Window` 或容器的 `add()` 方法来创建；请参阅 [控件类型和创建参数](../control-objects#control-types-and-creation-parameters)。

这些示例在创建时没有显式设置边界，因为通常更有用的是设置首选大小，然后让布局管理器设置边界；请参阅 [自动布局](../automatic-layout)。

### 按钮 (Button)

通常用于在用户单击按钮时从窗口启动某些操作；例如，接受对话框的当前设置、取消对话框、弹出新对话框等。

- 设置 `text` 属性以分配一个标签来标识按钮的功能。
- `onClick` 回调方法提供行为。

```javascript
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.btnPnl = dlg.add( "panel", undefined, "Build it" );
dlg.btnPnl.testBtn = dlg.btnPnl.add( "button", undefined, "Test" );
dlg.btnPnl.buildBtn = dlg.btnPnl.add( "button", undefined, "Build", { name: "ok" } );
dlg.btnPnl.cancelBtn = dlg.btnPnl.add( "button", undefined, "Cancel", { name: "cancel" } );
dlg.show();
```

---

### 图标按钮 (IconButton)

显示图标的按钮，可以带有或不带有文本标签。与文本按钮类似，通常在单击时启动操作。

- `image` 属性标识图标图像；请参阅 [显示图像](#displaying-images)。
- `title` 或 `text` 属性提供可选的标签；[titleLayout](../control-objects#titlelayout) 属性将标签相对于图像放置。
- `onClick` 回调方法提供行为。

---

### 图像 (Image)

显示图标图像。

- `image` 属性标识图标图像；请参阅 [显示图像](#displaying-images)。
- `title` 属性提供可选的标签；[titleLayout](../control-objects#titlelayout) 属性将标签相对于图像放置。

---

### 静态文本 (StaticText)

通常用于显示不打算由用户直接操作的文本字符串，例如信息性消息或标签。

此示例创建一个面板并添加多个静态文本元素：

```javascript
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.msgPnl = dlg.add( "panel", undefined, "Messages" );
dlg.msgPnl.titleSt = dlg.msgPnl.add( "statictext", undefined, "Alert box title:" );
dlg.msgPnl.msgSt = dlg.msgPnl.add( "statictext", undefined, "Alert message:" );
dlg.show();
```

---

### 编辑文本 (EditText)

允许用户输入文本，当对话框关闭时，文本将返回给脚本。`EditText` 元素中的文本可以被选择、复制和粘贴。

- 设置 `text` 属性以分配元素中初始显示的文本，并读取它以获取用户输入或修改的当前文本值。
- 设置 `textselection` 属性以用新文本替换当前选择，或在光标（插入点）处插入文本。读取此属性以获取当前选择（如果有）。

此示例添加了一些 `EditText` 元素，带有用户可以接受或替换的初始值：

```javascript
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.msgPnl = dlg.add( "panel", undefined, "Messages" );
dlg.msgPnl.titleSt = dlg.msgPnl.add( "statictext", undefined, "Alert box title:" );
dlg.msgPnl.titleEt = dlg.msgPnl.add( "edittext", undefined, "Sample Alert" );
dlg.msgPnl.msgSt = dlg.msgPnl.add( "statictext", undefined, "Alert message:" );
dlg.msgPnl.msgEt = dlg.msgPnl.add( "edittext", undefined, "<your message here>", { multiline: true } );
dlg.show();
```

:::note
第二个 `EditText` 字段的创建属性 `multiline: true` 表示一个可以输入长文本字符串的字段。文本换行显示为多行。
:::

---

### 编辑数字 (EditNumber)

允许用户输入一个十进制数字，当对话框关闭时，该数字将返回给脚本。输入的值将被验证为本地化的数字格式，并在控件失去焦点时检查其是否在上下边界内。`EditNumber` 元素中的文本可以被选择、复制和粘贴。

:::note
此功能在 Photoshop 20.0 (CC 2019) 中添加，可能在其他宿主中不存在。
:::

- 设置 `text` 属性以分配元素中初始显示的数字，并读取它以获取用户输入或修改的当前数字值。
- 设置 `textselection` 属性以用新文本替换当前选择，或在光标（插入点）处插入文本。读取此属性以获取当前选择（如果有）。

此示例添加了一些 `EditNumber` 元素，带有用户可以接受或替换的初始值：

```javascript
var dlg = new Window( "dialog", "Date Box" );
dlg.msgPnl = dlg.add( "panel", undefined, "Enter Date" );
dlg.msgPnl.titleSt = dlg.msgPnl.add( "statictext", undefined, "Month:" );
dlg.msgPnl.titleEt = dlg.msgPnl.add( "editnumber", undefined, 1, 1, 12 );
dlg.msgPnl.msgSt = dlg.msgPnl.add( "statictext", undefined, "Year:" );
dlg.msgPnl.msgEt = dlg.msgPnl.add( "editnumber", undefined, 2025, 2000, 2100 );
dlg.show();
```

:::note
接受像 `2.5` 这样的十进制数字作为最小值和最大值。
:::

---

### 复选框 (Checkbox)

允许用户设置布尔状态。

- 设置 `text` 属性以分配一个标识文本字符串，该字符串出现在可点击的框旁边。
- 用户可以点击选择或取消选择该框，选中时显示一个勾号。`value` 为 `true` 时表示选中（勾选），`false` 时表示未选中。

创建复选框时，可以设置其 `value` 属性以指定其初始状态和外观。

```javascript
// 添加一个复选框以控制关闭警告框的按钮
dlg.hasBtnsCb = dlg.add( "checkbox", undefined, "Should there be alert buttons?" );
dlg.hasBtnsCb.value = true;
```

---

### 单选按钮 (RadioButton)

允许用户在多个选项中选择一个。

- 设置 `text` 属性以分配一个标识文本字符串，该字符串出现在可点击的按钮旁边。
- 当按钮被选中时，`value` 为 `true`。按钮以平台特定的方式显示状态，例如填充或空心的圆点。

你可以通过连续创建所有相关的元素来分组一组相关的单选按钮。当任何按钮的 `value` 变为 `true` 时，组中所有其他按钮的 `value` 变为 `false`。创建一组单选按钮时，你应该将其中一个按钮的状态设置为 `true`：

```javascript
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.alertBtnsPnl = dlg.add( "panel", undefined, "Button alignment" );
dlg.alertBtnsPnl.alignLeftRb = dlg.alertBtnsPnl.add( "radiobutton", undefined, "Left" );
dlg.alertBtnsPnl.alignCenterRb = dlg.alertBtnsPnl.add( "radiobutton", undefined, "Center" );
dlg.alertBtnsPnl.alignRightRb = dlg.alertBtnsPnl.add( "radiobutton", undefined, "Right" );
dlg.alertBtnsPnl.alignCenterRb.value = true;
dlg.show();
```

---

### 进度条 (Progressbar)

通常用于显示耗时操作的进度。彩色条覆盖控件的部分区域，表示操作的完成百分比。

`value` 属性反映并控制着相对于最大值 (`maxvalue`) 的可见区域的着色比例。

默认范围为 `[0..100]`，因此当操作完成一半时，`value = 50`。

---

### 滑块 (Slider)

通常用于在一定范围内选择值。滑块是一个带有可拖动指示器的水平条，你可以点击滑块条上的某个点以将指示器跳转到该位置。

`value` 属性反映并控制指示器的位置，范围由 `minvalue` 和 `maxvalue` 决定。

默认范围为 0 到 100，因此设置 `value = 50` 会将指示器移动到条的中间。

---

### 滚动条 (Scrollbar)

与滑块类似，滚动条是一个带有可拖动指示器的条。它还在两端有“步进”按钮，你可以点击以按 `stepdelta` 属性中的量跳转指示器。如果你点击条上指示器外的某个点，指示器会按 `jumpdelta` 属性中的量跳转。

你可以创建水平或垂直方向的滚动条；如果 `width` 大于 `height`，则为水平滚动条，否则为垂直滚动条。创建滚动条的 `add` 方法的参数定义了 `value`、`minvalue` 和 `maxvalue` 属性的值。

滚动条通常与一个 `EditText` 字段关联，以显示滚动条的当前值，并允许将滚动条的位置设置为特定值。

此示例创建了一个滚动条，并在面板内关联了 `StaticText` 和 `EditText` 元素：

```javascript
dlg.sizePnl = dlg.add( "panel", undefined, "Dimensions" );
dlg.sizePnl.widthSt = dlg.sizePnl.add( "statictext", undefined, "Width:" );
dlg.sizePnl.widthScrl = dlg.sizePnl.add( "scrollbar", undefined, 300, 300, 800 );
dlg.sizePnl.widthEt = dlg.sizePnl.add( "edittext" );
```

---

### 列表框 (ListBox)、下拉列表 (DropDownList) 和树视图 (TreeView)

这些控件显示项目列表，这些项目由 `items` 属性中的 `ListItem` 对象表示。你可以使用基于 0 的索引访问此数组中的项目。

- `ListBox` 控件显示一个选择列表。创建对象时，你可以指定是否允许用户选择单个或多个项目。如果列表包含的项目多于可用区域中显示的项目，则可能会出现滚动条，允许用户滚动浏览所有列表项。列表框可以显示多列项目；请参阅 [创建多列列表](#creating-multi-column-lists)。
- `DropDownList` 控件显示一个可见的项目。当你点击控件时，会下拉一个列表，允许你选择列表中的其他项目之一。下拉列表可以有不可选择的分隔符项目，用于视觉上分隔相关项目组，如菜单中所示。
- `TreeView` 控件类似于 `ListBox`，不同之处在于项目可以有子项目。带有子项目的项目可以展开或折叠以显示或隐藏子项目。子项目又可以包含子项目。
- `title` 属性提供了一个可选的标签；[titleLayout](../control-objects#titlelayout) 属性将标签相对于列表放置。

你可以在创建列表对象时指定选择项目，或之后使用列表对象的 `add()` 方法。你可以使用列表对象的 `remove()` 和 `removeAll()` 方法以编程方式删除项目。

---

### 列表项 (ListItem)

添加到或插入到任何类型列表控件中的项目是 `ListItem` 对象，具有可以从脚本操作的属性。`ListItem` 元素可以是以下类型：

|    类型     |                                                                                         描述                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `item`      | 任何类型列表中的典型项目。它显示文本或图像，并且可以被选择。要显示图像，请设置项目对象的 `image` 属性；[显示图像](#displaying-images)。 |
| `separator` | 分隔符是下拉列表中的不可选择的视觉元素。尽管它有 `text` 属性，但该值被忽略，项目显示为水平线。                    |
| `node`      | `TreeView` 控件中的可显示和可选择项目，可以包含其他 `ListItem` 对象，包括其他类型为 `node` 的项目。                                                    |

---

### Flash 播放器 (FlashPlayer)

在 ScriptUI 窗口中运行 Flash 电影。其控件的方法允许你从 SWF 文件加载电影并控制播放。请参阅 [FlashPlayer 控件函数](../control-objects#flashplayer-control-functions)。

你还可以使用控件对象与 Flash 应用程序通信，调用 ActionScript 方法，并使你在 Adobe 应用程序脚本中定义的 JavaScript 方法可供 Flash ActionScript 代码使用。请参阅 [从 ScriptUI 脚本调用 ActionScript 函数](../communicating-with-the-flash-application#calling-actionscript-functions-from-a-scriptui-script)。

`title` 属性提供了一个可选的标签；[titleLayout](../control-objects#titlelayout) 属性将标签相对于播放器放置。

---

## 显示图像

你可以在 `Image` 或 `IconButton` 控件中显示图标图像，或在 `Listbox` 或 `DropdownList` 控件中显示图像以代替字符串或与字符串一起显示为可选项目。在每种情况下，图像通过设置元素的 `image` 属性来定义。你可以将其设置为 [ScriptUIImage 对象](../graphic-customization-objects#scriptuiimage-object)；命名的图标资源；[File 对象](../../file-system-access/file-object)；或包含图标图像的文件路径名，或该文件的别名或快捷方式（请参阅 [指定路径](../../file-system-access/using-file-and-folder-objects#specifying-paths)）。

图标图像数据可以是便携式网络图形（PNG）格式或联合图像专家组（JPEG）格式。有关这些格式的详细信息，请参阅 [http://www.libpng.org](http://www.libpng.org) 和 [http://www.jpeg.org/](http://www.jpeg.org/)。

你可以随时设置或