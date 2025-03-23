### Document.exportPDFPreset()

`app.activeDocument.exportPDFPreset(file)`

#### 描述

将当前的 PDF 预设值导出到文件中。

#### 参数

| 参数      |                                         类型                                         |       描述       |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| `file`    | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要导出的预设文件 |

#### 返回值

无。

---

### Document.exportPerspectiveGridPreset()

`app.activeDocument.exportPerspectiveGridPreset(file)`

#### 描述

将当前的透视网格预设值导出到文件中。

#### 参数

| 参数      |                                         类型                                         |       描述       |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| `file`    | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要导出的预设文件 |

#### 返回值

无。

---

### Document.exportPrintPreset()

`app.activeDocument.exportPrintPreset(file)`

#### 描述

将当前的打印预设值导出到文件中。

#### 参数

| 参数      |                                         类型                                         |       描述       |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| `file`    | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要导出的预设文件 |

#### 返回值

无。

---

### Document.exportVariables()

`app.activeDocument.exportVariables(fileSpec)`

#### 描述

将数据集保存到 XML 库中。数据集包含变量及其关联的动态数据。

#### 参数

| 参数       |                                         类型                                         |          描述          |
| ---------- | ------------------------------------------------------------------------------------ | ---------------------- |
| `fileSpec` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要导出的 XML 库文件    |

#### 返回值

无。

---

### Document.fitArtboardToSelectedArt()

`app.activeDocument.fitArtboardToSelectedArt([index])`

#### 描述

调整给定索引的画板大小以适应当前选中的图稿。索引默认为 0。成功时返回 `true`。

#### 参数

| 参数      |          类型          |       描述       |
| --------- | ---------------------- | ---------------- |
| `index`   | 数字（长整型），可选 | 要调整的画板索引 |

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

| 参数      |  类型  |      描述      |
| --------- | ------ | -------------- |
| `uuid`    | 字符串 | 要获取的项 Uuid |

#### 返回值

[PageItem](.././PageItem)。

---

### Document.getPerspectiveActivePlane()

`app.activeDocument.getPerspectiveActivePlane()`

#### 描述

检索文档中活动透视网格的活动平面。

#### 返回值

[PerspectiveGridPlaneType](scripting-constants.md#perspectivegridplanetype)

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

|                                             参数                                             |                           类型                            |   描述   |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------- | -------- |
| `imageFile`  [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要写入的图像文件                                          |          |
| `clipBounds`                                                                                  | 矩形，可选                                                | 裁剪边界 |
| `options`                                                                                     | [ImageCaptureOptions](.././ImageCaptureOptions)，可选      | todo     |

#### 返回值

无。

---

### Document.importCharacterStyles()

`app.activeDocument.importCharacterStyles(fileSpec)`

#### 描述

从 Illustrator 文件中加载字符样式。

#### 参数

|                                            参数                                             |                类型                | 描述 |
| ------------------------------------------------------------------------------------------- | ---------------------------------- | ---- |
| `fileSpec`  [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要加载字符样式的文件               |      |

#### 返回值

无。

---

### Document.importParagraphStyles()

`app.activeDocument.importParagraphStyles(fileSpec)`

#### 描述

从 Illustrator 文件中加载段落样式。

#### 参数

| 参数       |                                         类型                                         |            描述            |
| ---------- | ------------------------------------------------------------------------------------ | -------------------------- |
| `fileSpec` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要加载段落样式的文件       |

#### 返回值

无。

---

### Document.importPDFPreset()

`app.activeDocument.importPDFPreset(fileSpec [, replacingPreset])`

#### 描述

从文件中加载所有 PDF 预设。

#### 参数

|     参数      |                                         类型                                         |            描述            |
| ------------- | ------------------------------------------------------------------------------------ | -------------------------- |
| `fileSpec`    | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要加载 PDF 预设的文件      |
| `replacingPreset` | 字符串，可选                                                                     | 是否替换现有预设           |

#### 返回值

无。

---

### Document.importPrintPreset()

`app.activeDocument.importPrintPreset(printPreset, fileSpec)`

#### 描述

从文件中加载指定的打印预设。

#### 参数

|   参数     |                                         类型                                         |          描述          |
| ---------- | ------------------------------------------------------------------------------------ | ---------------------- |
| `printPreset` | 字符串                                                                               | 要加载的预设名称       |
| `fileSpec` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要加载打印预设的文件   |

#### 返回值

无。

---

### Document.importVariables()

`app.activeDocument.importVariables(fileSpec)`

#### 描述

导入包含数据集、变量及其关联动态数据的库。导入变量会覆盖现有的变量和数据集。

#### 参数

| 参数       |                                         类型                                         |          描述          |
| ---------- | ------------------------------------------------------------------------------------ | ---------------------- |
| `fileSpec` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要导入变量的文件       |

#### 返回值

无。

---

### Document.print()

`app.activeDocument.print([options])`

#### 描述

打印文档。

#### 参数

| 参数      |                    类型                     | 描述 |
| --------- | ------------------------------------------- | ---- |
| `options` | [PrintOptions](.././PrintOptions)，可选     | todo |

#### 返回值

无。

---

### Document.rasterize()

`app.activeDocument.rasterize(sourceArt [, clipBounds] [, options])`

#### 描述

在指定的裁剪边界内栅格化源图稿。栅格化后，源图稿将被处理掉。

#### 参数

|  参数       |                        类型                         |       描述       |
| ----------- | --------------------------------------------------- | ---------------- |
| `sourceArt` | [Variable](.././Variable)                           | 要栅格化的源图稿 |
| `clipBounds` | 矩形，可选                                          | 裁剪边界         |
| `options`   | [RasterizeOptions](.././RasterizeOptions)，可选     | todo             |

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

|       参数        |                                       类型                                        |                描述                |
| ----------------- | --------------------------------------------------------------------------------- | ---------------------------------- |
| `artboardLayout`  | [DocumentArtboardLayout](scripting-constants.md#documentartboardlayout)，可选     | 画板布局                           |
| `artboardRowsOrCols` | 整数，可选                                                                 | 行数或列数                         |
| `artboardSpacing` | 数字，可选                                                                  | 间距的像素数                       |
| `artboardMoveArtwork` | 布尔值，可选                                                              | 是否将图稿随画板一起移动           |

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

| 参数      |                                         类型                                         |         描述         |
| --------- | ------------------------------------------------------------------------------------ | -------------------- |
| `saveIn`  | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要保存文档的文件     |
| `options` | [SaveOptions](scripting-constants.md#saveoptions)，可选                              | 保存选项             |

#### 返回值

无。

---

### Document.saveNoUI()

`app.activeDocument.saveNoUI(saveIn)`

#### 描述

将非 UI 文档保存到指定路径。

#### 参数

| 参数      |                                         类型                                         |         描述         |
| --------- | ------------------------------------------------------------------------------------ | -------------------- |
| `saveIn`  | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要保存文档的文件     |

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

| 参数        |                                    类型                                     |   描述   |
| ----------- | --------------------------------------------------------------------------- | -------- |
| `gridPlane` | [PerspectiveGridPlaneType](scripting-constants.md#perspectivegridplanetype) | 网格平面类型 |

#### 返回值

布尔值。

---

### Document.selectPerspectivePreset()

`app.activeDocument.selectPerspectivePreset(gridType, presetName)`

#### 描述

选择一个预定义的预设来定义当前文档的网格。成功时返回 `true`。

#### 参数

| 参数         |                               类型                                |      描述      |
| ------------ | ----------------------------------------------------------------- | -------------- |
| `gridType`   | [PerspectiveGridType](scripting-constants.md#perspectivegridtype) | 网格类型       |
| `presetName` | 字符串                                                            | 要选择的预设名称 |

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

| 参数         |                                         类型                                         |      描述      |
| ------------ | ------------------------------------------------------------------------------------ | -------------- |
| `imageFile`  | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要保存的图像文件 |
| `windowSize` | 2 个数字的数组                                                                       | 窗口大小       |

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