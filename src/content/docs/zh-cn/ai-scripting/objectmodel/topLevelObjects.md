---
title: 顶层（包含）对象
---
# 顶层（包含）对象

使用这些对象来访问有关Illustrator应用程序或单个文档的全局信息。

---

## 应用程序

`application` 对象的属性使您的脚本能够访问全局值，例如：

- 用户 `preferences`，用户可以通过使用首选项对话框（编辑 > 首选项）在Illustrator应用程序中交互式设置。
- 系统信息，如已安装的字体（`text fonts` 属性）和打印机（`printer list` 属性）。

此外，还有一些属性提供特定于应用程序的信息以及有关任何打开文档的更高级别信息：

- 应用程序信息，如安装 `path`、`version` 以及Illustrator是否 `visible`。
- 当前 `active` 文档；即显示并接受用户输入的艺术画布。
- 所有打开的 `documents`。

`application` 对象的方法或命令允许您的脚本执行应用程序范围的操作；例如：

- `Open` 文件
- `Undo` 和 `redo` 事务
- `Quit` Illustrator

---

## 文档

`document` 对象，您的脚本可以通过 `application` 对象创建或访问，表示一个艺术画布或已加载的Illustrator文件。

`document` 对象的属性使您可以访问文档的内容；例如：

- 当前 `selection`，或用户在文档中选择的艺术对象
- 所有包含的艺术对象，称为 `page items`，它们构成了艺术树
- 特定类型的艺术对象，如 `symbols` 和 `text frames`
- 所有 `layers` 和当前 `active layer`

文档属性还告诉您文档本身的状态；例如：

- 用户对文档的设置，如 `ruler units`
- 自上次内容更改以来文档是否已 `saved`
- 关联文件的 `path`

文档对象的方法允许您的脚本对文档进行操作；例如：

- `Save` 到Illustrator文件或以各种支持的文件格式 `save as`
- `Activate` 或 `close` 文档
- `Print` 文档。您的脚本可以通过引用 `print options` 对象选择打印机，或者通过应用程序对象的 `printer list` 属性引用可用的打印机。

---

## 图层

`layer` 对象提供对特定图层的内容或艺术树的访问。

您可以通过 `document` 对象访问 `layer` 对象。

`layer` 对象的属性提供对图层或其信息的访问，例如：

- 图层是否 `visible` 或 `locked`。
- 图层的 `opacity`（整体透明度）和 `z order position`（在堆叠顺序中的位置）。
- 图层的艺术创建首选项，如 `artwork knockout` 和 `blending mode`。
