---
title: 执行脚本
---
# 执行脚本

Illustrator 界面包含一个脚本菜单（文件 > 脚本），可以快速轻松地访问您的脚本。

脚本可以直接列为菜单项，当您选择它们时运行。请参阅[在脚本菜单中安装脚本](#installing-scripts-in-the-scripts-menu)。

您可以从菜单导航到文件系统中的任何脚本，然后运行该脚本。请参阅[从“其他脚本”菜单项执行脚本](#executing-scripts-from-the-other-scripts-menu-item)。

您还可以在启动应用程序时自动启动扩展名为 .jsx 的 JavaScript 脚本。有关信息，请参阅[启动脚本（仅限 .jsx 脚本）](#startup-scripts-jsx-scripts-only)。

---

## 在脚本菜单中安装脚本

要将脚本包含在脚本菜单（文件 > 脚本）中，请将脚本保存在 Illustrator CC 安装目录中的 `/lllustrator CC/Presets` 文件夹中的 Scripts 文件夹中。

脚本的文件名（不包括文件扩展名）将显示在脚本菜单中。

在 Illustrator 运行时添加到 Scripts 文件夹中的脚本不会出现在脚本菜单中，直到下次启动 Illustrator 时才会显示。

可以在脚本菜单中安装任意数量的脚本。如果您有许多脚本，请使用 Scripts 文件夹中的子文件夹来帮助组织脚本菜单中的脚本。

每个子文件夹都显示为一个单独的子菜单，其中包含该子文件夹中的脚本。

---

## 从“其他脚本”菜单项执行脚本

脚本菜单末尾的“其他脚本”项（文件 > 脚本 > 其他脚本）允许您执行未安装在 Scripts 文件夹中的脚本。

选择“其他脚本”会显示一个浏览对话框，您可以使用它导航到脚本文件。当您选择文件时，脚本将被执行。

浏览对话框中仅显示支持的文件类型的文件。有关详细信息，请参阅[Adobe Illustrator CC 中的脚本语言支持](../scriptingLanguageSupport#scripting-language-support-in-adobe-illustrator-cc)。

---

## 启动脚本（仅限 .jsx 脚本）

扩展名为 .jsx 的 JavaScript 脚本可以安装在两个文件夹之一中，以便在启动 Illustrator 时以及每次运行脚本时自动运行这些脚本。

这些文件夹是：

- 特定于应用程序的启动脚本文件夹，其中包含 IllustratorCC 的脚本
- 通用启动脚本文件夹，其中包含在启动任何 Creative Cloud 应用程序时自动运行的脚本

### 特定于应用程序的启动脚本文件夹

您必须将特定于应用程序的启动脚本放置在您在 Illustrator 安装目录中创建的名为 **Startup Scripts** 的文件夹中。

例如，当 IllustratorCC 安装到默认位置时，您将在以下位置创建 Startup Scripts 文件夹：

| 操作系统 | 路径 |
| --- | --- |
| Windows | `C:\Program Files\Adobe\Adobe lllustratorCC\Startup Scripts\` |
| Mac OS | `/Applications/Adobe lllustrator CC/Startup Scripts/` |

放置在 Startup Scripts 文件夹中的扩展名为 .jsx 的 JavaScript 脚本将在以下情况下自动运行：

- 启动应用程序时。
- 从脚本菜单（文件 > 脚本）中选择任何 JavaScript 文件时。

### 通用启动脚本文件夹

通用启动脚本文件夹包含在启动任何 Creative Cloud 应用程序时自动运行的脚本。

您可以在以下位置创建该文件夹：

| 操作系统 | 路径 |
| --- | --- |
| Windows | `/Program Files/Common Files/Adobe/Startup Scripts CC/Illustrator` |
| Mac OS | `/Library/Application Support/Adobe/Startup Scripts CC/Illustrator` |

如果通用启动文件夹中的脚本仅由 Illustrator 执行，则脚本必须包含 ExtendScript #target 指令（`#target illustrator`）或类似以下代码：

```javascript
if (BridgeTalk.appName == "illustrator") {
 // 继续执行脚本
}
```
