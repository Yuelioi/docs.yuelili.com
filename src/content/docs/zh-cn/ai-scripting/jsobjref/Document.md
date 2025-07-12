---
title: 文档
---
# 文档

`app.activeDocument`

#### 描述

一个 Illustrator 文档。文档包含在 [Application](.././Application) 对象中。

默认文档设置——那些以“default”开头的属性——是影响当前文档的全局设置。请确保仅在文档打开时修改这些默认属性。请注意，如果在创建新对象之前将默认属性设置为所需值，则可以简化脚本，无需指定诸如 `fillColor` 和 `stroked` 等具有默认属性的特定属性。

文档的颜色空间、高度和宽度只能在创建文档时设置。您无法在现有文档中修改这些属性。有关如何处理文档颜色空间的更多信息，请参阅 [Application.open()](../Application#applicationopen)。

---

## 属性

### Document.activeDataset

`app.activeDocument.activeDataset`

#### 描述

当前打开的数据集。

#### 类型

[Dataset](.././Dataset)

---

### Document.activeLayer

`app.activeDocument.activeLayer`

#### 描述

文档中的活动图层。

#### 类型

[Layer](.././Layer)

---

### Document.activeView

`app.activeDocument.activeView`

#### 描述

文档的当前视图。

#### 类型

[View](.././View); 只读。

---

### Document.artboards

`app.activeDocument.artboards`

#### 描述

文档中的所有画板。

#### 类型

[Artboards](.././Artboards); 只读。

---

### Document.brushes

`app.activeDocument.brushes`

#### 描述

文档中包含的画笔。

#### 类型

[Brushes](.././Brushes); 只读。

---

### Document.characterStyles

`app.activeDocument.characterStyles`

#### 描述

此文档中的字符样式列表。

#### 类型

[CharacterStyles](.././CharacterStyles); 只读。

---

### Document.compoundPathItems

`app.activeDocument.compoundPathItems`

#### 描述

文档中包含的复合路径项。

#### 类型

[CompoundPathItems](.././CompoundPathItems); 只读。

---

### Document.cropBox

`app.activeDocument.cropBox`

#### 描述

文档裁剪框的边界，用于输出，如果未设置值则为 `null`。

#### 类型

4 个数字的数组。

---

### Document.cropStyle

`app.activeDocument.cropStyle`

#### 描述

文档裁剪框的样式。

#### 类型

[CropOptions](../scripting-constants#cropoptions)

---

### Document.dataSets

`app.activeDocument.dataSets`

#### 描述

文档中包含的数据集。

#### 类型

[Datasets](.././Datasets); 只读。

---

### Document.defaultFillColor

`app.activeDocument.defaultFillColor`

#### 描述

如果 `defaultFilled` 为 `true`，则用于填充新路径的颜色。

#### 类型

[Color](.././Color)

---

### Document.defaultFilled

`app.activeDocument.defaultFilled`

#### 描述

如果为 `true`，则新路径应被填充。

#### 类型

布尔值。

---

### Document.defaultFillOverprint

`app.activeDocument.defaultFillOverprint`

#### 描述

如果为 `true`，则默认情况下应叠印填充对象下方的图稿。

#### 类型

布尔值。

---

### Document.defaultStrokeCap

`app.activeDocument.defaultStrokeCap`

#### 描述

创建的路径的默认线帽类型。

#### 类型

[StrokeCap](../scripting-constants#strokecap)

---

### Document.defaultStrokeColor

`app.activeDocument.defaultStrokeColor`

#### 描述

如果默认描边为 `true`，则新路径的描边颜色。

#### 类型

[Color](.././Color)

---

### Document.defaultStroked

`app.activeDocument.defaultStroked`

#### 描述

如果为 `true`，则新路径应被描边。

#### 类型

布尔值。

---

### Document.defaultStrokeDashes

`app.activeDocument.defaultStrokeDashes`

#### 描述

虚线中虚线和间隙的默认长度，从第一个虚线长度开始，然后是第一个间隙长度，依此类推。设置为空对象 `{}` 表示实线。

#### 类型

对象。

---

### Document.defaultStrokeDashOffset

`app.activeDocument.defaultStrokeDashOffset`

#### 描述

新路径的虚线图案中图案应开始的默认距离。

#### 类型

数字（双精度）。

---

### Document.defaultStrokeJoin

`app.activeDocument.defaultStrokeJoin`

#### 描述

新路径中的默认连接类型。

#### 类型

[StrokeJoin](../scripting-constants#strokejoin)

---

### Document.defaultStrokeMiterLimit

`app.activeDocument.defaultStrokeMiterLimit`

#### 描述

当默认描边连接设置为 `mitered` 时，此属性指定何时将连接转换为斜接（方形）。

默认斜接限制为 4 表示当点的长度达到描边宽度的四倍时，连接将从斜接连接转换为斜角连接。

范围：1 到 500；值为 1 表示斜角连接。

#### 类型

数字（双精度）。

---

### Document.defaultStrokeOverprint

`app.activeDocument.defaultStrokeOverprint`

#### 描述

如果为 `true`，则默认情况下应叠印描边对象下方的图稿。

#### 类型

布尔值。

---

### Document.defaultStrokeWidth

`app.activeDocument.defaultStrokeWidth`

#### 描述

新路径的默认描边宽度。

#### 类型

数字（双精度）。

---

### Document.documentColorSpace

`app.activeDocument.documentColorSpace`

#### 描述

用于此文档颜色空间的颜色规范系统。

#### 类型

[DocumentColorSpace](../scripting-constants#documentcolorspace)

---

### Document.fullName

`app.activeDocument.fullName`

#### 描述

与文档关联的文件，包括文件的完整路径。

#### 类型

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象；只读。

---

### Document.geometricBounds

`app.activeDocument.geometricBounds`

#### 描述

图稿的边界，不包括文档中任何对象的描边宽度。

#### 类型

4 个数字的数组；只读。

---

### Document.gradients

`app.activeDocument.gradients`

#### 描述

文档中包含的渐变。

#### 类型

[Gradients](.././Gradients); 只读。

---

### Document.graphicStyles

`app.activeDocument.graphicStyles`

#### 描述

此文档中定义的图形样式。

#### 类型

[GraphicStyles](.././GraphicStyles); 只读。

---

### Document.graphItems

`app.activeDocument.graphItems`

#### 描述

此文档中的图表图稿项。

#### 类型

[GraphItems](.././GraphItems); 只读。

---

### Document.groupItems

`app.activeDocument.groupItems`

#### 描述

文档中包含的组项。

#### 类型

[GroupItems](.././GroupItems); 只读。

---

### Document.height

`app.activeDocument.height`

#### 描述

文档的高度。

#### 类型

数字（双精度）；只读。

---

### Document.inkList

`app.activeDocument.inkList`

#### 描述

此文档中的墨水列表。

#### 类型

对象；只读。

---

### Document.kinsokuSet

`app.activeDocument.kinsokuSet`

#### 描述

不能开始或结束一行日文文本的 Kinsoku 字符集。

#### 类型

对象；只读。

---

### Document.layers

`app.activeDocument.layers`

#### 描述

文档中包含的图层。

#### 类型

[Layers](.././Layers); 只读。

---

### Document.legacyTextItems

`app.activeDocument.legacyTextItems`

#### 描述

文档中的旧版文本项。

#### 类型

[LegacyTextItems](.././LegacyTextItems); 只读。

---

### Document.meshItems

`app.activeDocument.meshItems`

#### 描述

文档中包含的网格图稿项。

#### 类型

[MeshItems](.././MeshItems); 只读。

---

### Document.mojikumiSet

`app.activeDocument.mojikumiSet`

#### 描述

预定义的 Mojikumi 集名称列表，指定日文文本的布局和排版间距。

#### 类型

对象；只读。

---

### Document.name

`app.activeDocument.name`

#### 描述

文档的名称（不是文档的完整文件路径）。

#### 类型

字符串；只读。

---

### Document.nonNativeItems

`app.activeDocument.nonNativeItems`

#### 描述

此文档中的非本地图稿项。

#### 类型

[NonNativeItems](.././NonNativeItems); 只读。

---

### Document.outputResolution

`app.activeDocument.outputResolution`

#### 描述

文档的当前输出分辨率，单位为每英寸点数 (dpi)。

#### 类型

数字（双精度）；只读。

---

### Document.pageItems

`app.activeDocument.pageItems`

#### 描述

文档中包含的页面项（所有图稿项类）。

#### 类型

[PageItems](.././PageItems); 只读。

---

### Document.pageOrigin

`app.activeDocument.pageOrigin`

#### 描述

页面在文档中的零点，相对于整体高度和宽度，不包括边距。

#### 类型

2 个数字的数组。

---

### Document.paragraphStyles

`app.activeDocument.paragraphStyles`

#### 描述

此文档中的段落样式列表。

#### 类型

[ParagraphStyles](.././ParagraphStyles); 只读。

---

### Document.parent

`app.activeDocument.parent`

#### 描述

包含此文档的应用程序。

#### 类型

[Application](.././Application); 只读。

---

### Document.path

`app.activeDocument.path`

#### 描述

与文档关联的文件，包括文件的完整路径。

#### 类型

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象；只读。

---

### Document.pathItems

`app.activeDocument.pathItems`

#### 描述

此文档中包含的路径项。

#### 类型

[PathItems](.././PathItems); 只读。

---

### Document.patterns

`app.activeDocument.patterns`

#### 描述

此文档中包含的图案。

#### 类型

[Patterns](.././Patterns); 只读。

---

### Document.placedItems

`app.activeDocument.placedItems`

#### 描述

此文档中包含的置入项。

#### 类型

[PlacedItems](.././PlacedItems); 只读。

---

### Document.pluginItems

`app.activeDocument.pluginItems`

#### 描述

此文档中包含的插件项。

#### 类型

[PluginItems](.././PluginItems); 只读。

---

### Document.printTiles

`app.activeDocument.printTiles`

#### 描述

如果为 `true`，则此文档应作为平铺输出打印。

#### 类型

布尔值；只读。

---

### Document.rasterEffectSettings

`app.activeDocument.rasterEffectSettings`

#### 描述

文档的栅格效果设置。

#### 类型

[RasterEffectOptions](.././RasterEffectOptions); 只读。

---

### Document.rasterItems

`app.activeDocument.rasterItems`

#### 描述

此文档中包含的栅格项。

#### 类型

[RasterItems](.././RasterItems); 只读。

---

### Document.rulerOrigin

`app.activeDocument.rulerOrigin`

#### 描述

文档中标尺的零点，相对于文档的左下角。

#### 类型

2 个数字的数组。

---

### Document.rulerUnits

`app.activeDocument.rulerUnits`

#### 描述

文档中标尺的默认测量单位。

#### 类型

[RulerUnits](../scripting-constants#rulerunits); 只读。

---

### Document.saved

`app.activeDocument.saved`

#### 描述

如果为 `true`，则文档自上次保存以来未被更改。

#### 类型

布尔值。

---

### Document.selection

`app.activeDocument.selection`

#### 描述

此文档当前选择中的对象的引用，如果未选择任何内容则为 `null`。

当在所选文本图稿项的内容中存在活动插入点时，返回对插入点的引用。类似地，当在文本图稿项的内容中选择字符时，返回对文本范围的引用。

#### 类型

对象数组。

---

### Document.showPlacedImages

`app.activeDocument.showPlacedImages`

#### 描述

如果为 `true`，则应在文档中显示置入的图像。

#### 类型

布尔值；只读。

---

### Document.splitLongPaths

`app.activeDocument.splitLongPaths`

#### 描述

如果为 `true`，则应在打印时拆分长路径。

#### 类型

布尔值；只读。

---

### Document.spots

`app.activeDocument.spots`

#### 描述

此文档中包含的专色。

#### 类型

[Spots](.././Spots); 只读。

---

### Document.stationery

`app.activeDocument.stationery`

#### 描述

如果为 `true`，则文件为模板文件。

#### 类型

布尔值；只读。

---

### Document.stories

`app.activeDocument.stories`

#### 描述

此文档中的故事项。

#### 类型

[Stories](.././Stories); 只读。

---

### Document.swatches

`app.activeDocument.swatches`

#### 描述

此文档中的色板。

#### 类型

[Swatches](.././Swatches); 只读。

---

### Document.swatchGroups

`app.activeDocument.swatchGroups`

#### 描述

此文档中的色板组。

#### 类型

[SwatchGroups](.././SwatchGroups); 只读。

---

### Document.symbolItems

`app.activeDocument.symbolItems`

#### 描述

文档中链接到符号的图稿项。

#### 类型

[SymbolItems](.././SymbolItems); 只读。

---

### Document.symbols

`app.activeDocument.symbols`

#### 描述

此文档中的符号。

#### 类型

[Symbols](.././Symbols); 只读。

---

### Document.tags

`app.activeDocument.tags`

#### 描述

此文档中的标签。

#### 类型

[Tags](.././Tags); 只读。

---

### Document.textFrames

`app.activeDocument.textFrames`

#### 描述

此文档中的文本框架。

#### 类型

[TextFrameItems](.././TextFrameItems); 只读。

---

### Document.tileFullPages

`app.activeDocument.tileFullPages`

#### 描述

如果为 `true`，则在打印此文档时应平铺完整页面。

#### 类型

布尔值；只读。

---

### Document.typename

`app.activeDocument.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

### Document.useDefaultScreen

`app.activeDocument.useDefaultScreen`

#### 描述

如果为 `true`，则在打印此文档时应使用打印机的默认屏幕。

#### 类型

布尔值；只读。

---

### Document.variables

`app.activeDocument.variables`

#### 描述

此文档中定义的变量。

#### 类型

[Variables](.././Variables); 只读。

---

### Document.variablesLocked

`app.activeDocument.variablesLocked`

#### 描述

如果为 `true`，则变量被锁定。

#### 类型

布尔值。

---

### Document.views

`app.activeDocument.views`

#### 描述

此文档中包含的视图。

#### 类型

[Views](.././Views); 只读。

---

### Document.visibleBounds

`app.activeDocument.visibleBounds`

#### 描述

文档的可见边界，包括图稿中任何对象的描边宽度。

#### 类型

4 个数字的数组；只读。

---

### Document.width

`app.activeDocument.width`

#### 描述

此文档的宽度。

#### 类型

数字（双精度）；只读。

---

### Document.XMPString

`app.activeDocument.XMPString`

#### 描述

与此文档关联的 XMP 元数据包。

#### 类型

字符串。

---

## 方法

### Document.activate()

`app.activeDocument.activate()`

#### 描述

将与文档关联的第一个窗口置于最前面。

#### 返回值

无。

---

### Document.arrange()

`app.activeDocument.arrange([layoutStyle])`

#### 描述

以给定的布局样式排列多个文档。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `layoutStyle` | [DocumentLayoutStyle](../scripting-constants#documentlayoutstyle), 可选 | 用于排列文档的布局样式 |

#### 返回值

布尔值。

---

### Document.close()

`app.activeDocument.close([saveOptions])`

#### 描述

使用指定的保存选项关闭文档。

关闭文档时，应将文档引用设置为 `null`，以防止脚本意外尝试访问已关闭的文档。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `saveOptions` | [SaveOptions](../scripting-constants#saveoptions) | 关闭时的保存选项 |

#### 返回值

无。

---

### Document.closeNoUI()

`app.activeDocument.closeNoUI()`

#### 描述

关闭指定的非 UI 文档。

#### 返回值

无。

---

### Document.convertCoordinate()

`app.activeDocument.convertCoordinate(coordinate, source, destination)`

#### 描述

将给定点在画板和文档坐标系之间转换。返回转换后的点坐标。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `coordinate` | 点 | 要转换的点 |
| `source` | [CoordinateSystem](../scripting-constants#coordinatesystem) | 源坐标系 |
| `destination` | [CoordinateSystem](../scripting-constants#coordinatesystem) | 目标坐标系 |

#### 返回值

点。

---

### Document.exportFile()

`app.activeDocument.exportFile(exportFile, exportFormat [,options])`

#### 描述

使用预定义的导出文件格式之一将文档导出到指定文件。文件扩展名会自动附加到文件名，除了 Photoshop® 文档。对于这些文档，您必须在文件规范中包含文件扩展名 (PSD)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `exportFile` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要保存的文件 |
| `exportFormat` | [ExportType](../scripting-constants#exporttype) | 导出文件格式 |
| `options` | [Variable](.././Variable), 可选 | 待办事项 |

#### 返回值

无。

---

### Document.exportPDFPreset()

`app.activeDocument.exportPDFPreset(file)`

#### 描述

将当前的 PDF 预设值导出到文件中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `file` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要导出的预设文件 |

#### 返回值

无。

---

### Document.exportPerspectiveGridPreset()

`app.activeDocument.exportPerspectiveGridPreset(file)`

#### 描述

将当前的透视网格预设值导出到文件中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `file` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要导出的预设文件 |

#### 返回值

无。

---

### Document.exportPrintPreset()

`app.activeDocument.exportPrintPreset(file)`

#### 描述

将当前的打印预设值导出到文件中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `file` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要导出的预设文件 |

#### 返回值

无。

---

### Document.exportVariables()

`app.activeDocument.exportVariables(fileSpec)`

#### 描述

将数据集保存到 XML 库中。数据集包含变量及其关联的动态数据。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `fileSpec` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要导出的 XML 库文件 |

#### 返回值

无。

---

### Document.fitArtboardToSelectedArt()

`app.activeDocument.fitArtboardToSelectedArt([index])`

#### 描述

调整给定索引的画板大小以适应当前选中的图稿。索引默认为 0。成功时返回 `true`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `index` | 数字（长整型），可选 | 要调整的画板索引 |

#### 返回值

布尔值。

---

### Document.getPageItemFromUuid()

`app.activeDocument.getPageItemFromUuid(uuid)`

:::note
此功能在 Illustrator 24.0 (CC2020) 中添加。
:::

#### 描述

使用 Uuid 检索 [PageItem](.././PageItem)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `uuid` | 字符串 | 要获取的项 Uuid |

#### 返回值

[PageItem](.././PageItem)。

---

### Document.getPerspectiveActivePlane()

`app.activeDocument.getPerspectiveActivePlane()`

#### 描述

检索文档中活动透视网格的活动平面。

#### 返回值

[PerspectiveGridPlaneType](../scripting-constants#perspectivegridplanetype)

---

### Document.hidePerspectiveGrid()

`app.activeDocument.hidePerspectiveGrid()`

#### 描述

隐藏文档中当前活动的网格。如果没有可见的网格，则不执行任何操作。

如果隐藏了网格，则返回 `true`。

#### 返回值

布尔值。

---

### Document.imageCapture()

`app.activeDocument.imageCapture(imageFile [,clipBounds] [,options])`

#### 描述

将文档中裁剪边界内的图稿内容捕获为栅格图像，并将图像数据写入指定的文件。

如果省略边界参数，则捕获整个图稿。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `imageFile`  [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要写入的图像文件 | |
| `clipBounds` | 矩形，可选 | 裁剪边界 |
| `options` | [ImageCaptureOptions](.././ImageCaptureOptions)，可选 | todo |

#### 返回值

无。

---

### Document.importCharacterStyles()

`app.activeDocument.importCharacterStyles(fileSpec)`

#### 描述

从 Illustrator 文件中加载字符样式。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `fileSpec`  [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要加载字符样式的文件 | |

#### 返回值

无。

---

### Document.importParagraphStyles()

`app.activeDocument.importParagraphStyles(fileSpec)`

#### 描述

从 Illustrator 文件中加载段落样式。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `fileSpec` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要加载段落样式的文件 |

#### 返回值

无。

---

### Document.importPDFPreset()

`app.activeDocument.importPDFPreset(fileSpec [, replacingPreset])`

#### 描述

从文件中加载所有 PDF 预设。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `fileSpec` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要加载 PDF 预设的文件 |
| `replacingPreset` | 字符串，可选 | 是否替换现有预设 |

#### 返回值

无。

---

### Document.importPrintPreset()

`app.activeDocument.importPrintPreset(printPreset, fileSpec)`

#### 描述

从文件中加载指定的打印预设。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `printPreset` | 字符串 | 要加载的预设名称 |
| `fileSpec` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要加载打印预设的文件 |

#### 返回值

无。

---

### Document.importVariables()

`app.activeDocument.importVariables(fileSpec)`

#### 描述

导入包含数据集、变量及其关联动态数据的库。导入变量会覆盖现有的变量和数据集。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `fileSpec` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要导入变量的文件 |

#### 返回值

无。

---

### Document.print()

`app.activeDocument.print([options])`

#### 描述

打印文档。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `options` | [PrintOptions](.././PrintOptions)，可选 | todo |

#### 返回值

无。

---

### Document.rasterize()

`app.activeDocument.rasterize(sourceArt [, clipBounds] [, options])`

#### 描述

在指定的裁剪边界内栅格化源图稿。栅格化后，源图稿将被处理掉。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sourceArt` | [Variable](.././Variable) | 要栅格化的源图稿 |
| `clipBounds` | 矩形，可选 | 裁剪边界 |
| `options` | [RasterizeOptions](.././RasterizeOptions)，可选 | todo |

#### 返回值

[RasterItem](.././RasterItem)

---

### Document.rearrangeArboards()

`app.activeDocument.rearrangeArboards([artboardLayout] [, artboardRowsOrCols] [, artboardSpacing] [, artboardMoveArtwork])`

#### 描述

重新排列文档中的画板。所有参数都是可选的。

默认布局样式为 `DocumentArtboard Layout.GridByRow`。

第二个参数根据所选布局样式指定行数或列数，范围为 `1..docNumArtboards-1`，或对于单行/列布局为 1（默认值）。

间距为像素数，默认为 20。

当最后一个参数为 true（默认值）时，图稿会随画板一起移动。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `artboardLayout` | [DocumentArtboardLayout](../scripting-constants#documentartboardlayout)，可选 | 画板布局 |
| `artboardRowsOrCols` | 整数，可选 | 行数或列数 |
| `artboardSpacing` | 数字，可选 | 间距的像素数 |
| `artboardMoveArtwork` | 布尔值，可选 | 是否将图稿随画板一起移动 |

#### 返回值

布尔值。

---

### Document.save()

`app.activeDocument.save()`

#### 描述

将文档保存到当前位置。

#### 返回值

无。

---

### Document.saveAs()

`app.activeDocument.saveAs(saveIn [, options])`

#### 描述

将文档保存为指定的 Illustrator、EPS 或 PDF 文件。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `saveIn` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要保存文档的文件 |
| `options` | [SaveOptions](../scripting-constants#saveoptions)，可选 | 保存选项 |

#### 返回值

无。

---

### Document.saveNoUI()

`app.activeDocument.saveNoUI(saveIn)`

#### 描述

将非 UI 文档保存到指定路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `saveIn` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要保存文档的文件 |

#### 返回值

无。

---

### Document.selectObjectsOnActiveArtboard()

`app.activeDocument.selectObjectsOnActiveArtboard()`

#### 描述

选择当前活动画板上的对象。成功时返回 `true`。

#### 返回值

布尔值。

---

### Document.setActivePlane()

`app.activeDocument.setActivePlane(gridPlane)`

#### 描述

设置文档中活动透视网格的活动平面。成功时返回 `true`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `gridPlane` | [PerspectiveGridPlaneType](../scripting-constants#perspectivegridplanetype) | 网格平面类型 |

#### 返回值

布尔值。

---

### Document.selectPerspectivePreset()

`app.activeDocument.selectPerspectivePreset(gridType, presetName)`

#### 描述

选择一个预定义的预设来定义当前文档的网格。成功时返回 `true`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `gridType` | [PerspectiveGridType](../scripting-constants#perspectivegridtype) | 网格类型 |
| `presetName` | 字符串 | 要选择的预设名称 |

#### 返回值

布尔值。

---

### Document.showPerspectiveGrid()

`app.activeDocument.showPerspectiveGrid()`

#### 描述

显示文档中当前活动的网格，如果没有活动的网格，则显示默认网格。成功时返回 `true`。

#### 返回值

布尔值。

---

### Document.windowCapture()

`app.activeDocument.windowCapture(imageFile, windowSize)`

#### 描述

将当前文档窗口捕获到目标 TIFF 图像文件中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `imageFile` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要保存的图像文件 |
| `windowSize` | 2 个数字的数组 | 窗口大小 |

#### 返回值

无。

---

## 示例

### 取消选择当前文档中的所有对象

:::note
最前面的文档可以称为 `activeDocument` 或 `documents[0`。
:::

```javascript
var docRef = activeDocument;
docRef.selection = null;
```

---

### 关闭文档

```javascript
// 关闭活动文档而不保存更改
if ( app.documents.length > 0 ) {
 var aiDocument = app.activeDocument;
 aiDocument.close( SaveOptions.DONOTSAVECHANGES );
 aiDocument = null;
}
```

---

### 使用默认值创建文档

```javascript
// 如果不存在文档，则创建一个新文档，然后将填充和描边默认值设置为 true
var doc;
if (app.documents.length == 0) {
 doc = app.documents.add();
} else {
 doc = app.activeDocument;
}

doc.defaultFilled = true;
doc.defaultStroked = true;
```
