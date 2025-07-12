---
title: 使用对象
---
# 使用对象

## 获取最前面的文档或图层

要引用选中的文档，请在 AppleScript 中使用 `application` 对象的 `current document` 属性，或在 JavaScript 或 VBScript 中使用 `active document` 属性。类似地，您可以使用 `document` 对象的 `current layer` 或 `active layer` 属性来引用选中的图层。

还有其他类型的“活动”或“当前”对象属性，例如 `active dataset` 或 `active view`。有关详细信息，请参阅适用于您语言的 Adobe Illustrator CC 2017 脚本参考。

---

## 创建新对象

某些对象（除了 `application` 对象本身）无法从容器或父对象中获取。您的脚本必须直接创建这些对象。

以下对象必须显式创建：

- `CMYK 颜色`
- `文档预设`
- `EPS 保存选项`
- `导出选项 AutoCAD`
- `导出选项 Flash`
- `导出选项 GIF`
- `导出选项 JPEG`
- `导出选项 Photoshop`
- `导出选项 PNG8`
- `导出选项 PNG24`
- `导出选项 SVG`
- `导出选项 TIFF`
- `文件`
- `文件夹`
- `渐变颜色`
- `灰度颜色`
- `Illustrator 保存选项`
- `墨水`
- `墨水信息`
- `Lab 颜色`
- `矩阵`
- `MXG 保存选项`
- `无颜色`
- `打开选项`
- `打开选项 AutoCAD`
- `打开选项 FreeHand`
- `打开选项 PDF`
- `打开选项 Photoshop`
- `纸张信息`
- `图案颜色`
- `PDF 保存选项`
- `PPD 文件`
- `PPD 文件信息`
- `打印颜色管理选项`
- `打印颜色分离选项`
- `打印坐标选项`
- `打印机`
- `打印机信息`
- `打印拼合选项`
- `打印字体选项`
- `打印作业选项`
- `打印选项`
- `打印页面标记选项`
- `打印纸张选项`
- `打印 PostScript 选项`
- `栅格效果选项`
- `栅格化选项`
- `屏幕`
- `屏幕点函数`
- `RGB 颜色`
- `专色`
- `描摹选项`

`file` 和 `folder` 对象是 Adobe ExtendScript 设备，旨在提供对底层文件系统的平台无关访问。有关使用这些对象的信息，请参阅 [JavaScript 工具指南](https://extendscript.docsforadobe.dev/)。

有关显式创建对象的信息，请参阅适用于您脚本语言的章节。

---

## 集合对象

大多数集合对象必须从容器中获取。例如，`path items` 集合对象可以由 `document` 对象或 `layer` 对象包含；要获取 `path items` 集合中的对象，请引用这些包含对象之一。例如，请参阅以下特定语言的部分。

### AppleScript

要引用文档中的 `path items` 对象

```applescript
path item 1 in document 1
```

要引用图层中的 `path items` 对象

```applescript
path item 1 in layer 1 in document 1
```

### JavaScript

要引用文档中的 `path items` 对象

```javascript
documents[0].pathItems[1]
```

要引用图层中的 `path items` 对象

```javascript
documents[0].layers[0].pathItems[0]
```

### VBScript

要引用文档中的 `path items` 对象

```vbscript
Documents(1).PathItems(1)
```

要引用图层中的 `path items` 对象

```vbscript
Documents(1).Layers(1).PathItems(1)
```

有关集合项容器的更多示例，请参阅 Adobe Illustrator CC 2017 脚本参考：AppleScript 中的文档对象元素表，或 Adobe Illustrator CC 2017 脚本参考：JavaScript 或 Adobe Illustrator CC 2017 脚本参考：VBScript 中的属性表。Illustrator CC 2017 对象模型的图示位于 [Illustrator 脚本对象模型](../../objectmodel/objectModel)。

---

## 选中的对象

有时，您希望编写作用于当前选中对象的脚本。例如，您可能希望将格式应用于选中的文本或更改选中路径的形状。

### 选择文本

要选择文本，请使用 `text range` 对象的 `select` 命令或方法。

### 选择艺术项

您可以通过将其 `selected` 属性设置为 `true` 来选择艺术对象（如图表项、网格项、栅格项和符号项）。（在 AppleScript 中，`selected` 是 `page items` 对象的属性。）

### 引用选中的艺术项

要引用文档中所有当前选中的对象，请使用 `document` 对象的 `selection` 属性。要处理选择数组中的对象，您必须确定它们的类型，以便知道可以使用哪些属性和方法或命令。在 JavaScript 和 VBScript 中，每个艺术对象类型都有一个只读的 `typename` 属性，您可以使用它来确定对象的类型。在 AppleScript 中，请使用 `class` 属性。

---

## 关于重命名存储在应用程序面板中的对象的注意事项

某些对象可以重命名；也就是说，它们的 `name` 属性是可写的。以下类型的对象可以在相应的 Illustrator 面板中按字母顺序排序。如果脚本修改了此类对象的名称，则通过索引对该对象的引用可能会失效。

- `画笔`
- `渐变`
- `图形样式`
- `图案`
- `色板`
- `符号`
- `变量`
---
