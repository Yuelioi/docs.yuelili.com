---
title: window-class
---
# Window 类

Window 类定义了这些静态属性和函数。使用 `new Window()` 创建的 Window 实例不会定义这些属性和函数。

---

## Window 类属性

### Window.frameworkName

`Window.frameworkName`

#### 描述

:::danger
已弃用。请使用 [ScriptUI.frameworkName](../scriptui-class#scriptuiframeworkname) 代替。
:::

#### 类型

String

---

### Window.version

`Window.version`

#### 描述

:::danger
已弃用。请使用 [ScriptUI.version](../scriptui-class#scriptuiversion) 代替。
:::

#### 类型

String

---

## Window 类方法

通过类访问这些函数。例如：

```javascript
Window.alert("通知用户");
```

---

### alert()

`Window.alert(message[, title="脚本提示", errorIcon=false]);`

#### 描述

显示一个平台标准的对话框，包含一条简短的消息和一个“确定”按钮。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `message` | String | 显示的消息字符串。 |
| `title` | String | 可选。对话框的标题字符串，如果平台支持标题。Mac OS 不支持警报对话框的标题。默认标题字符串为 `"脚本提示"` |
| `errorIcon` | Boolean | 可选。当为 `true` 时，对话框中的平台标准警报图标将被平台标准错误图标替换。默认为 `false`。 |

#### 返回

无返回值

---

### confirm()

`Window.confirm(message[, noAsDflt=false, title="脚本提示"]);`

#### 描述

显示一个平台标准的对话框，包含一条简短的消息和两个按钮，分别标记为“是”和“否”。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `message` | String | 显示的消息字符串。 |
| `noAsDflt` | Boolean | 可选。当为 `true` 时，“否”按钮为默认选择，用户按下 ENTER 键时选择。默认为 `false`，表示“是”为默认选择。 |
| `title` | String | 可选。对话框的标题字符串，如果平台支持标题。Mac OS 不支持确认对话框的标题。默认标题字符串为 `"脚本提示"` |

#### 返回

Boolean。如果用户点击“是”则返回 `true`，如果用户点击“否”则返回 `false`。

---

### find()

`Window.find(resourceName)`

`Window.find(type, title)`

#### 描述

使用此方法查找现有窗口。这包括脚本已创建的窗口，以及应用程序创建的窗口（如果应用程序支持这种情况）。

:::warning
并非所有 ScriptUI 实现都支持此方法。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `resourceName` | String | 当前应用程序中可供 JavaScript 使用的预定义资源的名称。 |
| `type` | String | 可选。窗口类型（参见 [Window 对象构造函数](../window-object#window-object-constructor)），如果存在多个具有相同标题的窗口时使用。可以为 `null` 或空字符串。 |
| `title` | String | 窗口标题。 |

#### 返回

找到或从资源生成的 [Window 对象](.././window-object)，如果不存在此类窗口或资源则返回 `null`。

---

### prompt()

`Window.prompt(message, preset[, title="脚本提示"]);`

#### 描述

显示一个模态对话框，返回用户的文本输入。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `message` | String | 显示的消息字符串。 |
| `preset` | String | 文本编辑字段中显示的初始值。 |
| `title` | String | 可选。对话框的标题字符串。在 Windows 中，此标题显示在窗口框架中；在 Mac OS 中，它显示在消息上方。默认标题字符串为 `"脚本提示"`。 |

#### 返回

如果用户点击“确定”，则返回文本编辑字段的值；如果用户点击“取消”，则返回 `null`。
