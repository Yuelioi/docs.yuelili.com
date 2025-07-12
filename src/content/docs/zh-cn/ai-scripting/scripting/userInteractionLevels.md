---
title: 用户交互级别
---
# 用户交互级别

当需要用户反馈时，应用程序通常会弹出一个对话框。这被称为用户交互。当你直接与应用程序交互时，这是有用且预期的；然而，当脚本与应用程序交互时，对话框会暂停脚本的执行，直到对话框被关闭。这在自动化环境中可能是一个严重的问题，因为没有人来处理这些对话框。

`application` 对象包含一个 `user interaction level` 属性，允许你控制脚本执行期间允许的交互级别。你可以在自动化环境中禁止交互，或者在脚本以更交互的方式使用时允许一些交互。

---

## AppleScript

使用 AppleScript，可以从一台机器向另一台机器发送命令，因此可以实现更多类型的交互。在 AppleScript 中，`user interaction` 级别属性有四个可能的值：

| 属性值 | 结果 |
|---|---|
| `never interact` | 不允许任何交互。 |
| `interact with self` | 仅允许与从脚本菜单（文件 > 脚本）执行的脚本交互。 |
| `interact with local`| 允许与在本地机器上执行的脚本交互（包括自身）。 |
| `interact with all` | 允许与所有脚本交互。 |

这四个值允许你根据脚本命令的来源控制交互。例如，如果应用程序作为远程用户的服务器，远程用户很难关闭对话框，但对于坐在机器前的人来说则没有问题。在这种情况下，将交互级别设置为 `interact with local` 可以防止对话框中断远程脚本，但允许为本地脚本显示对话框。

---

## JavaScript

在 JavaScript 中，`app.userInteractionLevel` 属性有两个可能的值：

| 属性值 | 结果 |
|---|---|
| `DISPLAYALERTS` | 允许交互。 |
| `DONTDISPLAYALERTS` | 不允许交互。 |

---

## VBScript

在 VBScript 中，`Application` 对象的 `UserInteractionLevel` 属性有两个可能的值：

| 属性值 | 结果 |
|---|---|
| `aiDisplayAlerts` | 允许交互。 |
| `aiDontDisplayAlerts`| 不允许交互。 |
