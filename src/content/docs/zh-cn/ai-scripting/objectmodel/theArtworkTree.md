---
title: 艺术作品树
---
# 艺术作品树

Illustrator 文档的内容被称为艺术作品树。艺术作品由以下对象表示：

- `compound path item`（复合路径项）
- `graph item`（图形项）
- `group item`（组项）
- `legacy text item`（旧版文本项）
- `mesh item`（网格项）
- `non native item`（非原生项）
- `path item`（路径项）
- `placed item`（置入项）
- `plugin item`（插件项）
- `raster item`（栅格项）
- `symbol item`（符号项）（参见 [动态对象](../dynamic)）
- `text frame`（文本框架）

您的脚本可以通过文档和图层对象中的集合访问和操作艺术对象。

艺术对象集合有两种类型：

- 对应于每种单独艺术作品对象类型的集合对象，例如 `graph items` 对象或 `mesh items` 对象。
- `page items` 对象，它包含所有类型的艺术对象。

此外，您可以使用 `group item` 对象来引用一组分组的艺术项。

您可以使用 `make` 命令（AppleScript）或艺术作品项集合对象的 `add` 方法创建新的艺术对象。例如，创建一个新的 `path item` 对象：

| 语言 | 命令 |
| --- | --- |
| AppleScript | `set myPathItem to make new path item in current document` |
| JavaScript | `var myPathItem = activeDocument.pathItems.add();` |
| VBScript | `Set myPathItem = appRef.ActiveDocument.PathItems.Add()` |

以下艺术作品集合不允许使用 `make` 命令或 `add` 方法创建新对象：

- `graph items` 对象
- `mesh items` 对象
- `plugin items` 对象
- `legacy text items` 对象

有关创建这些类型对象的详细信息，请参阅适用于您语言的 Adobe Illustrator CC 脚本参考。

---

## 艺术样式

您的脚本可以使用 `graphic style` 对象将图形样式应用于艺术作品。要应用图形样式，请使用 `document` 对象的 `graphic styles` 属性访问 `graphic style` 对象的 `apply to` 方法。

同样，`brush` 对象允许您指定要应用于艺术作品的画笔。您可以通过 `document` 对象的 `brushes` 集合对象访问任何画笔。

---

## 颜色对象

您的脚本可以使用 `fill color` 或 `stroke color` 属性将颜色、图案或渐变应用于 `path item` 对象：

- 脚本可以使用 `swatches` 对象的 `make` 命令或 `add` 方法定义新的颜色样本。您的脚本还可以使用 `spots` 对象的 `make` 命令或 `add` 属性创建新的专色。
- 您可以使用 `ink info` 对象定义墨水对象的属性，该对象是 `ink` 对象的属性。您可以通过 `document` 对象的 `ink list` 属性访问 `ink` 对象。

以下对象允许您在定义的颜色空间中创建颜色：

- `RGB color` 对象，使用 0.0 到 255.0 的范围表示三个单独的颜色值。
- `CMYK color` 对象，使用 0.0 到 100.0 的百分比值表示四个单独的颜色值。
- `grayscale color` 或 `LAB color` 对象，使用与 Illustrator 应用程序中相同的范围和值数量。
