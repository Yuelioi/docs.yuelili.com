---
title: 应用程序
---
# 应用程序

`app`

#### 描述

Adobe® Illustrator® 应用程序对象，使用预定义的全局 `app` 对象引用，该对象包含所有其他 Illustrator 对象。

---

## 属性

### Application.activeDocument

`app.activeDocument`

#### 描述

Illustrator 中当前活动的（最前面的）文档。

#### 类型

[Document](.././Document)

---

### Application.browserAvailable

`app.browserAvailable`

#### 描述

如果为 `true`，则表示有可用的网页浏览器。

#### 类型

布尔值；只读。

---

### Application.buildNumber

`app.buildNumber`

#### 描述

应用程序的构建号。

#### 类型

字符串；只读。

---

### Application.colorSettingsList

`app.colorSettingsList`

#### 描述

当前可用的颜色设置文件列表。

#### 类型

对象；只读。

---

### Application.coordinateSystem

`app.coordinateSystem`

#### 描述

当前使用的坐标系，文档或画板。

#### 类型

[CoordinateSystem](../scripting-constants#coordinatesystem)

---

### Application.defaultColorSettings

`app.defaultColorSettings`

#### 描述

当前应用程序区域设置的默认颜色设置文件。

#### 类型

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象；只读。

---

### Application.documents

`app.documents`

#### 描述

应用程序中的文档。

#### 类型

[Documents](.././Documents)

---

### Application.flattenerPresetList

`app.flattenerPresetList`

#### 描述

当前可用的拼合样式名称列表。

#### 类型

对象；只读。

---

### Application.freeMemory

`app.freeMemory`

#### 描述

Illustrator 分区中未使用的内存量（以字节为单位）。

#### 类型

数字（长整型）；只读。

---

### Application.locale

`app.locale`

#### 描述

应用程序的区域设置。

#### 类型

字符串；只读。

---

### Application.name

`app.name`

#### 描述

应用程序的名称（与应用程序文件的文件名无关）。

#### 类型

字符串；只读。

---

### Application.pasteRememberLayers

`app.pasteRememberLayers`

#### 描述

如果为 `true`，则粘贴操作会保留图层结构。

#### 类型

布尔值；只读。

---

### Application.path

`app.path`

#### 描述

应用程序的文件路径。

#### 类型

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象；只读。

---

### Application.PDFPresetsList

`app.PDFPresetsList`

#### 描述

当前可用的预设 PDF 选项名称列表。

#### 类型

对象；只读。

---

### Application.PPDFileList

`app.PPDFileList`

#### 描述

当前可用的 PPD 文件列表。

#### 类型

对象；只读。

---

### Application.preferences

`app.preferences`

#### 描述

Illustrator 的偏好设置。

#### 类型

[Preferences](.././Preferences)

---

### Application.printerList

`app.printerList`

#### 描述

已安装的打印机列表。

#### 类型

[Printer](.././Printer) 数组

---

### Application.printPresetsList

`app.printPresetsList`

#### 描述

当前可用的预设打印选项名称列表。

#### 类型

对象；只读。

---

### Application.scriptingVersion

`app.scriptingVersion`

#### 描述

脚本插件的版本。

#### 类型

字符串；只读。

---

### Application.selection

`app.selection`

#### 描述

当前活动文档中所有选中的对象。

#### 类型

对象数组；只读。

---

### Application.startupPresetsList

`app.startupPresetsList`

#### 描述

可用于创建新文档的预设列表。

#### 类型

对象；只读。

---

### Application.textFonts

`app.textFonts`

#### 描述

已安装的字体。

#### 类型

[TextFonts](.././TextFonts)

---

### Application.tracingPresetList

`app.tracingPresetList`

#### 描述

当前可用的预设描摹选项名称列表。

#### 类型

字符串数组；只读。

---

### Application.typename

`app.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

### Application.userInteractionLevel

`app.userInteractionLevel`

#### 描述

处理脚本命令时允许与用户进行何种级别的交互。

#### 类型

[UserInteractionLevel](../scripting-constants#userinteractionlevel)

---

### Application.version

`app.version`

#### 描述

应用程序的版本。

#### 类型

字符串；只读。

---

### Application.visible

`app.visible`

#### 描述

如果为 `true`，则应用程序可见。

#### 类型

布尔值；只读。

---

## 方法

### Application.beep()

`app.beep()`

#### 描述

提醒用户。

#### 返回值

无。

---

### Application.concatenateMatrix()

`app.concatenateMatrix(matrix, secondMatrix)`

#### 描述

将两个矩阵连接在一起。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `matrix` | [Matrix](.././Matrix) | 第一个矩阵 |
| `secondMatrix` | [Matrix](.././Matrix) | 第二个矩阵 |

#### 返回值

jsobjref/Matrix。

---

### Application.concatenateRotationMatrix()

`app.concatenateRotationMatrix(matrix, angle)`

#### 描述

将旋转变换连接到变换矩阵。

:::note
需要以度为单位的值。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `matrix` | Matrix | 矩阵 |
| `angle` | 数字（双精度），可选 | 角度 |

#### 返回值

jsobjref/Matrix。

---

### Application.concatenateScaleMatrix()

`app.concatenateScaleMatrix(matrix[, scaleX][, scaleY])`

#### 描述

将缩放变换连接到变换矩阵。

:::note
需要以百分比为单位的值。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `matrix` | Matrix | 矩阵 |
| `scaleX` | 数字（双精度），可选 | X 缩放 |
| `scaleY` | 数字（双精度），可选 | Y 缩放 |

#### 返回值

[Matrix](.././Matrix)

---

### Application.concatenateTranslationMatrix()

`app.concatenateTranslationMatrix(matrix[, deltaX][, deltaY])`

#### 描述

将平移变换连接到变换矩阵。

:::note
需要以点为单位的值。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `matrix` | Matrix | 矩阵 |
| `deltaX` | 数字（双精度），可选 | X 平移 |
| `deltaY` | 数字（双精度），可选 | Y 平移 |

#### 返回值

[Matrix](.././Matrix)

---

### Application.convertSampleColor()

```javascript
app.convertSampleColor(
 sourceColorSpace,
 sourceColor,
 destColorSpace,
 colorConvertPurpose
 [, sourceHasAlpha]
 [, destHasAlpha]
)
```

#### 描述

将样本颜色从一个颜色空间转换为另一个颜色空间。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sourceColorSpace` | [ImageColorSpace](../scripting-constants#imagecolorspace) | 源颜色的颜色空间 |
| `sourceColor` | ColorComponents | 要转换的源颜色 |
| `destColorSpace` | [ImageColorSpace](../scripting-constants#imagecolorspace) | 目标颜色空间 |
| `colorConvertPurpose` | [ColorConvertPurpose](../scripting-constants#colorconvertpurpose) | 转换的目的 |
| `sourceHasAlpha` | 布尔值，可选 | 源是否具有透明度 |
| `destHasAlpha` | 布尔值，可选 | 目标是否具有透明度 |

#### 返回值

ColorComponents 数组

---

### Application.copy()

`app.copy()`

#### 描述

将当前选择复制到剪贴板。

#### 返回值

无。

---

### Application.cut()

`app.cut()`

#### 描述

将当前选择剪切到剪贴板。

#### 返回值

无。

---

### Application.deleteWorkspace()

`app.deleteWorkspace(workspaceName)`

#### 描述

删除现有的工作区。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `workspaceName` | 字符串 | 要删除的工作区名称 |

#### 返回值

布尔值

---

### Application.getIdentityMatrix()

`app.getIdentityMatrix()`

#### 描述

返回一个单位矩阵。

#### 返回值

[Matrix](.././Matrix)

---

### Application.getIsFileOpen()

`app.getIsFileOpen(filePath)`

:::note
此功能在 Illustrator XX.X (CC2017) 中添加。
:::

#### 描述

返回指定的文件路径是否已打开。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `filePath` | 字符串 | 要检查的文件路径 |

#### 返回值

布尔值

---

### Application.getPPDFileInfo()

`app.getPPDFileInfo(name)`

#### 描述

获取指定 PPD 文件的详细文件信息。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取信息的文件名 |

#### 返回值

[PPDFileInfo](.././PPDFileInfo)

---

### Application.getPresetFileOfType()

`app.getPresetFileOfType(presetType)`

#### 描述

返回应用程序的指定预设类型的默认文档配置文件的完整路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `presetType` | [DocumentPresetType](../scripting-constants#documentpresettype) | 要获取文件的预设类型 |

#### 返回值

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象

---

### Application.getPresetSettings()

`app.getPresetSettings(preset)`

#### 描述

从具有给定预设名称的模板中检索描摹选项设置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `preset` | 字符串 | 要从中获取设置的预设名称 |

#### 返回值

[DocumentPreset](.././DocumentPreset)

---

### Application.getRotationMatrix()

`app.getRotationMatrix([angle])`

#### 描述

返回包含单个旋转的变换矩阵。

:::note
需要以度为单位的值。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `angle` | 数字（双精度），可选 | 要获取矩阵的角度 |

#### 返回值

[Matrix](.././Matrix)

#### 示例

将对象逆时针旋转 30 度：

```javascript
app.getRotationMatrix(30);
```

顺时针旋转 30 度：

```javascript
app.getRotationMatrix(-30);
```

---

### Application.getScaleMatrix()

`app.getScaleMatrix([scaleX][, scaleY])`

#### 描述

返回包含单个缩放的变换矩阵。

:::note
需要以百分比为单位的值。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `scaleX` | 数字（双精度），可选 | 要获取矩阵的 X 缩放 |
| `scaleY` | 数字（双精度），可选 | 要获取矩阵的 Y 缩放 |

#### 返回值

[Matrix](.././Matrix)

#### 示例

将对象缩放到其原始大小的 60%：

```javascript
app.getScaleMatrix(60, 60);
```

将对象的边界加倍：

```javascript
app.getScaleMatrix(200, 200);
```

---

### Application.getScriptableHelpGroup()

`app.getScriptableHelpGroup()`

#### 描述

获取表示应用程序栏中搜索小部件的可脚本帮助组对象。

#### 返回值

Variant

---

### Application.getTranslationMatrix()

`app.getTranslationMatrix([deltaX][, deltaY])`

#### 描述

返回包含单个平移的变换矩阵。

:::note
需要以点为单位的值。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `deltaX` | Number (double), 可选 | X 增量 |
| `deltaY` | Number (double), 可选 | Y 增量 |

#### 返回值

[Matrix](.././Matrix)

#### 示例

将对象向右移动 100 点，向上移动 200 点：

```javascript
app.getTranslationMatrix(100, 200);
```

将对象向左和向下移动：

```javascript
app.getTranslationMatrix(-100, -200);
```

---

### Application.invertMatrix()

`app.invertMatrix(matrix)`

#### 描述

反转矩阵。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `matrix` | [Matrix](.././Matrix) | 要反转的矩阵 |

#### 返回值

[Matrix](.././Matrix)

---

### Application.isEqualMatrix()

`app.isEqualMatrix(matrix, secondMatrix)`

#### 描述

检查两个矩阵是否相等。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `matrix` | [Matrix](.././Matrix) | 要检查的第一个矩阵 |
| `secondMatrix`| [Matrix](.././Matrix) | 要检查的第二个矩阵 |

#### 返回值

Boolean

---

### Application.isSingularMatrix()

`app.isSingularMatrix(matrix)`

#### 描述

检查矩阵是否为奇异矩阵且无法反转。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `matrix` | [Matrix](.././Matrix) | 要检查的矩阵 |

#### 返回值

Boolean

---

### Application.loadColorSettings()

`app.loadColorSettings(fileSpec)`

#### 描述

从指定文件加载颜色设置，如果文件为空，则关闭颜色管理。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `fileSpec` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要加载设置的文件 |

#### 返回值

无。

---

### Application.open()

`app.open(file[, documentColorSpace][, options])`

#### 描述

打开指定的文档文件。

:::note
如果您打开一个包含 RGB 和 CMYK 颜色的 Illustrator 9 之前的文档，并且提供了 `documentColorSpace`，则所有颜色都将转换为指定的颜色空间。
:::

如果未提供参数，Illustrator 将打开一个对话框，以便用户选择颜色空间。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `file` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要打开的文件 |
| `documentColorSpace`| [DocumentColorSpace](../scripting-constants#documentcolorspace), 可选 | 文档的颜色空间 |
| `options` | 任意类型 | 待办事项 |

#### 返回值

[Document](.././Document)

---

### Application.paste()

`app.paste()`

#### 描述

将当前剪贴板内容粘贴到当前文档中。

#### 返回值

无。

---

### Application.quit()

`app.quit()`

#### 描述

退出 Illustrator。

:::note
如果剪贴板包含数据，Illustrator 可能会显示一个对话框，提示用户保存数据以供其他应用程序使用。
:::

#### 返回值

无。

---

### Application.redo()

`app.redo()`

#### 描述

重做最近撤销的事务。

#### 返回值

无。

---

### Application.redraw()

`app.redraw()`

#### 描述

强制 Illustrator 重绘所有窗口。

#### 返回值

无。

---

### Application.resetWorkspace()

`app.resetWorkspace()`

#### 描述

重置当前工作区。

#### 返回值

Boolean

---

### Application.saveWorkspace()

`app.saveWorkspace(workspaceName)`

#### 描述

保存一个新的工作区。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `workspaceName` | String | 要保存的工作区名称 |

#### 返回值

Boolean

---

### Application.sendScriptMessage()

`app.sendScriptMessage(pluginName, messageSelector, inputString)`

#### 描述

向指定插件发送插件定义的命令消息，并返回插件定义的结果字符串。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `pluginName` | String | 要发送消息的插件名称 |
| `messageSelector` | String | 要发送给插件的消息 |
| `inputString` | String | 传递给命令的数据 |

#### 返回值

String

---

### Application.showPresets()

`app.showPresets(fileSpec)`

#### 描述

从文件中获取预设。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `fileSpec` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要获取预设的文件 |

#### 返回值

PrintPresetList

---

### Application.switchWorkspace()

`app.switchWorkspace(workspaceName)`

#### 描述

切换到指定的工作区。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `workspaceName` | String | 要切换到的名称 |

#### 返回值

Boolean

---

### Application.translatePlaceholderText()

`app.translatePlaceholderText(text)`

#### 描述

将占位符文本转换为常规文本（一种以十六进制值输入 Unicode 点的方式）。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `text` | String | 要转换的字符串 |

#### 返回值

String

---

### Application.undo()

`app.undo()`

#### 描述

撤销最近的事务。

#### 返回值

无。

---

## 示例

### 复制活动文档

```javascript
// 将活动文档中的任何选定项复制到新文档中。

var newItem;
var docSelected = app.activeDocument.selection;

if (docSelected.length > 0) {
 // 创建一个新文档并将选定的项移动到其中。
 var newDoc = app.documents.add();
 if (docSelected.length > 0) {
 for (var i = 0; i < docSelected.length; i++) {
 docSelected[i].selected = false;
 newItem = docSelected[i].duplicate(newDoc, ElementPlacement.PLACEATEND);
 }
 } else {
 docSelected.selected = false;
 newItem = docSelected.parent.duplicate(newDoc, ElementPlacement.PLACEATEND);
 }
} else {
 alert("请选择一个或多个艺术对象");
}
```
