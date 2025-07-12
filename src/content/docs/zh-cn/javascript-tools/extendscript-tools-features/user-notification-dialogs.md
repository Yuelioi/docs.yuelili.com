---
title: 用户通知对话框
---
# 用户通知对话框

ExtendScript 提供了一组全局可用的函数，允许你在平台标准的对话框中向用户显示简短消息。有三种类型的消息对话框：

- **Alert** - 显示一个包含简短消息和 **OK** 按钮的对话框。
- **Confirm** - 显示一个包含简短消息和两个按钮（**Yes** 和 **No**）的对话框，允许用户接受或拒绝某个操作。
- **Prompt** - 显示一个包含简短消息、文本输入字段以及 **OK** 和 **Cancel** 按钮的对话框，允许用户为脚本提供一个值。

这些对话框在一定程度上是可定制的。外观是平台特定的。

---

## 全局方法

### alert()

`alert(message[, title="Script Alert", errorIcon=false]);`

#### 描述

显示一个平台标准的对话框，包含简短消息和一个 **OK** 按钮。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| message | String | 显示的字符串消息。 |
| title | String | 可选。如果平台支持标题，则显示为对话框的标题。Mac OS 不支持警报对话框的标题。默认标题字符串为 `"Script Alert"`。 |
| errorIcon | Boolean | 可选。当为 `true` 时，对话框中的平台标准警报图标将被平台标准错误图标替换。默认为 `false`。 |

#### 返回

无返回值

#### 示例

下图显示了 Windows 和 Mac OS 中的简单警报对话框。

![Windows Alert](./_static/08_extendscript-tools_user-notification-dialogs_alert_win1.jpg)
![Windows Alert](./_static/08_extendscript-tools_user-notification-dialogs_alert_win2.jpg)
![MacOS Alert](./_static/08_extendscript-tools_user-notification-dialogs_alert_macos.jpg)

下图显示了带有错误图标的警报对话框。

![Windows Alert w/ Icon](./_static/08_extendscript-tools_user-notification-dialogs_alert_win-icon.jpg)
![MacOS Alert w/ Icon](./_static/08_extendscript-tools_user-notification-dialogs_alert_macos-icon.jpg)

---

### confirm()

`confirm(message[,noAsDflt=false, title="Script Alert"]);`

#### 描述

显示一个平台标准的对话框，包含简短消息和两个分别标记为 **Yes** 和 **No** 的按钮。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| message | String | 显示的字符串消息。 |
| noAsDflt | Boolean | 可选。当为 `true` 时，**No** 按钮为默认选择，用户按下 `ENTER` 时将选择该按钮。默认为 `false`，意味着 **Yes** 是默认选择。 |
| title | String | 可选。如果平台支持标题，则显示为对话框的标题。Mac OS 不支持确认对话框的标题。默认标题字符串为 `"Script Alert"`。 |

#### 返回

如果用户点击 **Yes**，则返回 `true`；如果用户点击 **No**，则返回 `false`。

#### 示例

下图显示了 Windows 和 Mac OS 中的简单确认对话框。

![Windows Confirmation](./_static/08_extendscript-tools_user-notification-dialogs_confirmation_win.jpg)
![MacOS Confirmation](./_static/08_extendscript-tools_user-notification-dialogs_confirmation_macos.jpg)

下图显示了 **No** 作为默认按钮的确认对话框。

![Windows Confirmation w/ 'No' as default](./_static/08_extendscript-tools_user-notification-dialogs_confirmation_win-no-default.jpg)
![MacOS Confirmation w/ 'No' as default](./_static/08_extendscript-tools_user-notification-dialogs_confirmation_macos-no-default.jpg)

---

### prompt()

`prompt(message, preset[, title="Script Alert"]);`

#### 描述

显示一个平台标准的对话框，包含简短消息、文本编辑字段以及两个分别标记为 **OK** 和 **Cancel** 的按钮。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| message | String | 显示的字符串消息。 |
| preset | String | 文本编辑字段中显示的初始值。 |
| title | String | 可选。如果平台支持标题，则显示为对话框的标题。Mac OS 不支持确认对话框的标题。默认标题字符串为 `"Script Alert"`。 |

#### 返回

如果用户点击 **OK**，则返回文本编辑字段的值；如果用户点击 **Cancel**，则返回 `null`。

#### 示例

下图显示了 Windows 和 Mac OS 中的简单提示对话框。

![Windows prompt](./_static/08_extendscript-tools_user-notification-dialogs_prompt_win.jpg)
![MacOS prompt](./_static/08_extendscript-tools_user-notification-dialogs_prompt_macos.jpg)

下图显示了指定标题值的确认对话框。

![Windows prompt w/ title](./_static/08_extendscript-tools_user-notification-dialogs_prompt_win-title.jpg)
![MacOS prompt w/ title](./_static/08_extendscript-tools_user-notification-dialogs_prompt_macos-title.jpg)
