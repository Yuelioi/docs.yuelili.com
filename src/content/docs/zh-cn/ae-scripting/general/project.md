---
title: 项目
---
# Project object

`app.project`

### Project.close()

---

#### 描述

项目对象代表一个 After Effects 项目。属性提供了对项目中特定对象的访问，例如导入的文件或素材和合成，以及项目设置，如时间码基准。方法可以导入素材、创建实底、合成和文件夹，并保存更改。

---

## 函数

### Project.close()

`app.project.close(closeOptions)`

#### 描述

关闭项目，可以选择自动保存更改、提示用户保存更改或不保存更改关闭。

#### 参数

| 参数             | 类型                  | 描述                                                                   |
| ---------------- | --------------------- | ---------------------------------------------------------------------- |
| `closeOptions` | `CloseOptions` 枚举 | 关闭时要执行的操作。可以是以下之一：                                   |
|                  |                       | -`CloseOptions.DO_NOT_SAVE_CHANGES`: 不保存关闭。                    |
|                  |                       | -`CloseOptions.PROMPT_TO_SAVE_CHANGES`: 关闭前提示用户是否保存更改。 |
|                  |                       | -`CloseOptions.SAVE_CHANGES`: 关闭时自动保存更改。                   |

#### 返回

布尔值。成功时为 `true`。如果文件之前未保存，用户被提示保存但取消了保存操作，则返回 `false`。

---

### Project.consolidateFootage()

`app.project.consolidateFootage()`

#### 描述

合并项目中的所有素材。等同于“文件 > 合并所有素材”命令。

#### 参数

无。

#### 返回

整数；删除的素材项总数。

---

### Project.importFile()

`app.project.importFile(importOptions)`

#### 描述

使用指定的选项导入指定在 ImportOptions 对象中的文件。等同于“文件 > 导入文件”命令。

从文件创建并返回一个新的 FootageItem 对象，并将其添加到项目的项数组中。

#### 参数

| 参数              | 类型                                 | 描述                               |
| ----------------- | ------------------------------------ | ---------------------------------- |
| `importOptions` | [ImportOptions](../other/importoptions) | 指定要导入的文件及操作选项的对象。 |

#### 返回

[FootageItem 对象](../item/footageitem)。

#### 示例

```javascript
app.project.importFile(new ImportOptions(new File("sample.psd"));
```

---

### Project.importFileWithDialog()

`app.project.importFileWithDialog()`

#### 描述

显示导入文件对话框。等同于“文件 > 导入 > 文件”命令。

#### 返回

导入过程中创建的 [Item 对象](../item/item) 数组；如果用户取消对话框，则返回 `null`。

---

### Project.importPlaceholder()

`app.project.importPlaceholder(name, width, height, frameRate, duration)`

#### 描述

创建并返回一个新的 PlaceholderItem，并将其添加到项目的项数组中。等同于“文件 > 导入 > 占位符”命令。

#### 参数

| 参数          | 类型                              | 描述                             |
| ------------- | --------------------------------- | -------------------------------- |
| `name`      | 字符串                            | 占位符的名称。                   |
| `width`     | 整数，范围为 `[4..30000]`       | 占位符的宽度（以像素为单位）。   |
| `height`    | 整数，范围为 `[4..30000]`       | 占位符的高度（以像素为单位）。   |
| `frameRate` | 浮点数，范围为 `[1.0..99.0]`    | 占位符的帧速率。                 |
| `duration`  | 浮点数，范围为 `[0.0..10800.0]` | 占位符的持续时间（以秒为单位）。 |

#### 返回

PlaceholderItem 对象。

---

### Project.item()

`app.project.item(index)`

#### 描述

检索指定索引位置的项。

#### 参数

| 参数      | 类型 | 描述                               |
| --------- | ---- | ---------------------------------- |
| `index` | 整数 | 项的索引位置。第一个项的索引为 1。 |

#### 返回

[Item 对象](../item/item)。

---

### Project.itemByID()

`app.project.itemByID(id)`

:::note

该方法添加于 After Effects 13.0 (CC 2014)

:::

#### 描述

通过 [Item ID](../item/item.md#itemid) 检索项。

#### 参数

| 参数   | 类型 | 描述      |
| ------ | ---- | --------- |
| `id` | 整数 | 项的 ID。 |

#### 返回

[Item 对象](../item/item)。

---

### Project.layerByID()

`app.project.layerByID(id)`

:::note 该方法添加于 After Effects 22.0 (2022) :::#### 描述

项目实例方法，当给定有效的 ID 值时，返回项目中具有该 ID 的图层对象。

#### 参数

| 参数   | 类型         | 描述                        |
| ------ | ------------ | --------------------------- |
| `id` | 整数（非负） | 要从项目中检索的图层的 ID。 |

#### 返回

如果项目中存在具有给定 ID 的 [Layer 对象](../layer/layer)，则返回该对象；否则返回 null。无效的 ID 将抛出异常，提示输入参数不是无符号整数。

#### 示例

```javascript
var firstComp = app.project.item(1);
var firstLayer = firstComp.layer(1);
var layerID = firstLayer.id;

if (app.project.layerByID(layerID) === firstLayer) {
  alert("您可以通过 ID 获取图层！");
}
```

---

### Project.listColorProfiles()

`app.project.listColorProfiles()`

#### 描述

返回可用作项目颜色工作空间的颜色配置文件描述的数组。

#### 参数

无。

#### 返回

字符串数组。

---

### Project.reduceProject()

`app.project.reduceProject(array_of_items)`

#### 描述

删除项目中除指定项之外的所有项。等同于“文件 > 精简项目”命令。

#### 参数

| 参数               | 类型                        | 描述         |
| ------------------ | --------------------------- | ------------ |
| `array_of_items` | [Item 对象](../item/item) 数组 | 要保留的项。 |

#### 返回

整数；删除的项总数。

#### 示例

```javascript
var items = [];
items[items.length] = app.project.item(1);
items[items.length] = app.project.item(3);
app.project.reduceProject(items);
```

---

### Project.removeUnusedFootage()

`app.project.removeUnusedFootage()`

#### 描述

删除项目中未使用的素材。等同于“文件 > 删除未使用素材”命令。

#### 参数

无。

#### 返回

整数；删除的 FootageItem 对象总数。

---

### Project.replaceFont()

`app.project.replaceFont(fromFont, toFont, [noFontLocking = false])`

:::note 该方法添加于 After Effects 24.5 :::#### 描述

此函数将替换项目中所有使用 [Font 对象](../text/fontobject) `fromFont` 的地方为 [Font 对象](../text/fontobject) `toFont`。

此操作使用了与自动字体替换相同的机制和策略，因此即使在具有混合样式的 [TextDocuments](../text/textdocument) 上也能进行完整且精确的替换，保留 `fromFont` 应用的字符范围。

此操作不可撤销。

可选参数 `noFontLocking` 控制当 `toFont` 没有应用于文本的字形时会发生什么。默认情况下，将选择一个具有必要字形的回退字体，但如果将此参数设置为 `true`，则不会进行回退，结果将导致缺少字形。目前无法检测或报告此情况。

请注意，当 `fromFont` 是替换字体且 `toFont` 具有相同的字体属性时，不会发生回退，参数将被忽略并视为 `true`。

```javascript
var fromFont = app.project.usedFonts[0].font;
var fontList = app.fonts.getFontsByPostScriptName("TimesNewRomanPSMT");
var toFont = fontList[0];
var layerChanged = app.project.replaceFont(fromFont, toFont);
```

#### 参数

| 参数              | 类型                         | 描述                   |
| ----------------- | ---------------------------- | ---------------------- |
| `fromFont`      | [Font 对象](../text/fontobject) | 要替换的字体。         |
| `toFont`        | [Font 对象](../text/fontobject) | 替换后的字体。         |
| `noFontLocking` | 布尔值                       | 可选。默认为 `false` |

#### 返回

布尔值。如果至少有一个图层被更改，则返回 `true`。

---

### Project.save()

`app.project.save([file])`

#### 描述

保存项目。等同于“文件 > 保存”或“文件 > 另存为”命令。如果项目之前从未保存过且未指定文件，则提示用户选择位置和文件名。

传递 [File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 对象以在不提示的情况下将项目保存到新文件。

#### 参数

| 参数     | 类型                                                                                        | 描述                 |
| -------- | ------------------------------------------------------------------------------------------- | -------------------- |
| `file` | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) | 可选。要保存的文件。 |

#### 返回

无。

---

### Project.saveWithDialog()

`app.project.saveWithDialog()`

#### 描述

显示保存对话框。用户可以命名文件并选择保存位置，或点击取消退出对话框。

#### 参数

无。

#### 返回

布尔值；如果项目已保存，则返回 `true`。

---

### Project.setDefaultImportFolder()

`app.project.setDefaultImportFolder(folder)`

#### 描述

设置文件导入对话框中显示的文件夹。此位置将用作覆盖，直到调用不带参数的 `setDefaultImportFolder()` 或 After Effects 退出。

#### 参数

| 参数       | 类型                                                                                            | 描述                   |
| ---------- | ----------------------------------------------------------------------------------------------- | ---------------------- |
| `folder` | [Extendscript Folder](https://extendscript.docsforadobe.dev/file-system-access/folder-object.html) | 要设置为默认的文件夹。 |

#### 返回

布尔值；指示操作是否成功。

#### 示例

以下任一操作都将默认导入文件夹设置为 C:/My Folder：

* `var myFolder = new Folder("C:/My Folder"); app.project.setDefaultImportFolder(myFolder);`
* `app.project.setDefaultImportFolder(new Folder("C:/My Folder"));`
* `app.project.setDefaultImportFolder(Folder("C:/My Folder"));`

注意：如果路径指向现有文件而不是文件夹，Folder 函数将返回 File 对象而不是 Folder 对象，这将导致 `setDefaultImportFolder()` 返回 `false`。

要将默认导入文件夹设置为当前用户的桌面文件夹：`app.project.setDefaultImportFolder(Folder.desktop);`

要禁用默认文件夹，请调用不带参数的 `setDefaultImportFolder()`：`app.project.setDefaultImportFolder();`

---

### Project.showWindow()

`app.project.showWindow(doShow)`

#### 描述

显示或隐藏项目面板。

#### 参数

| 参数       | 类型   | 描述                                                              |
| ---------- | ------ | ----------------------------------------------------------------- |
| `doShow` | 布尔值 | 当为 `true` 时，显示项目面板。当为 `false` 时，隐藏项目面板。 |

#### 返回

无。

---

## 团队项目

### Project.newTeamProject()

`app.project.newTeamProject(teamProjectName, description)`

:::note 该方法添加于 After Effects 14.2 (CC 2017.1) :::#### 描述

创建一个新的团队项目。

#### 参数

| 参数                | 类型   | 描述           |
| ------------------- | ------ | -------------- |
| `teamProjectName` | 字符串 | 团队项目名称   |
| `description`     | 字符串 | 可选。项目描述 |

#### 返回

布尔值。如果团队项目成功创建，则返回 `true`，否则返回 `false`。

---

### Project.openTeamProject()

`app.project.openTeamProject(teamProjectName)`

:::note 该方法添加于 After Effects 14.2 (CC 2017.1) :::#### 描述

打开一个团队项目。

#### 参数

| 参数                | 类型   | 描述         |
| ------------------- | ------ | ------------ |
| `teamProjectName` | 字符串 | 团队项目名称 |

#### 返回

布尔值。如果团队项目成功打开，则返回 `true`，否则返回 `false`。

---

### Project.shareTeamProject()

`app.project.shareTeamProject(comment)`

:::note 该方法添加于 After Effects 14.2 (CC 2017.1) :::#### 描述

共享当前打开的团队项目。

#### 参数

| 参数        | 类型   | 描述         |
| ----------- | ------ | ------------ |
| `comment` | 字符串 | 可选。注释。 |

#### 返回

布尔值。如果团队项目成功共享，则返回 `true`，否则返回 `false`。

---

### Project.syncTeamProject()

`app.project.syncTeamProject()`

:::note 该方法添加于 After Effects 14.2 (CC 2017.1) :::#### 描述

同步当前打开的团队项目。

#### 返回

布尔值。如果团队项目成功同步，则返回 `true`，否则返回 `false`。

---

### Project.closeTeamProject()

`app.project.closeTeamProject()`

:::note 该方法添加于 After Effects 14.2 (CC 2017.1) :::#### 描述

关闭当前打开的团队项目。

#### 返回

布尔值。如果团队项目成功关闭，则返回 `true`，否则返回 `false`。

---

### Project.convertTeamProjectToProject()

`app.project.convertTeamProjectToProject(project_file)`

:::note 该方法添加于 After Effects 14.2 (CC 2017.1) :::#### 描述

将团队项目转换为本地磁盘上的 After Effects 项目。

#### 参数

| 参数             | 类型                                                                                        | 描述                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `project_file` | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) | 本地 After Effects 项目。文件扩展名应为 .aep 或 .aet（不支持 .aepx）。 |

#### 返回

布尔值。如果团队项目成功转换，则返回 `true`，否则返回 `false`。

---

### Project.listTeamProjects()

`app.project.listTeamProjects()`

:::note 该方法添加于 After Effects 14.2 (CC 2017.1) :::#### 描述

返回包含当前用户可用的所有团队项目名称字符串的数组。
不包括已归档的团队项目。

#### 返回

字符串数组。

---

### Project.isTeamProjectOpen()

`app.project.isTeamProjectOpen(teamProjectName)`

:::note 该方法添加于 After Effects 14.2 (CC 2017.1) :::#### 描述

检查指定的团队项目是否当前已打开。

#### 参数

| 参数                | 类型   | 描述         |
| ------------------- | ------ | ------------ |
| `teamProjectName` | 字符串 | 团队项目名称 |

#### 返回

布尔值。如果指定的团队项目当前已打开，则返回 `true`，否则返回 `false`。

---

### Project.isAnyTeamProjectOpen()

`app.project.isAnyTeamProjectOpen()`

:::note 该方法添加于 After Effects 14.2 (CC 2017.1) :::#### 描述

检查是否有任何团队项目当前已打开。

#### 返回

布尔值。如果有任何团队项目当前已打开，则返回 `true`，否则返回 `false`。

---

### Project.isTeamProjectEnabled()

`app.project.isTeamProjectEnabled()`

:::note 该方法添加于 After Effects 14.2 (CC 2017.1) :::#### 描述

检查 After Effects 是否启用了团队项目。（几乎总是返回 `true`。）

#### 返回

布尔值。如果团队项目当前已启用，则返回 `true`，否则返回 `false`。

---

### Project.isLoggedInToTeamProject()

`app.project.isLoggedInToTeamProject()`

:::note 该方法添加于 After Effects 14.2 (CC 2017.1) :::#### 描述

检查客户端（After Effects）是否当前已登录到团队项目服务器。

#### 返回

布尔值。如果客户端（After Effects）当前已登录到团队项目服务器，则返回 `true`，否则返回 `false`。

---

### Project.isSyncCommandEnabled()

`app.project.isSyncCommandEnabled()`

:::note 该方法添加于 After Effects 14.2 (CC 2017.1) :::#### 描述

检查同步命令是否已启用。

#### 返回

布尔值。如果团队项目的同步命令已启用，则返回 `true`，否则返回 `false`。

---

### Project.isShareCommandEnabled()

`app.project.isShareCommandEnabled()`

:::note 该方法添加于 After Effects 14.2 (CC 2017.1) :::#### 描述

检查共享命令是否已启用。

#### 返回

布尔值。如果团队项目的共享命令已启用，则返回 `true`，否则返回 `false`。

---

### Project.isResolveCommandEnabled()

`app.project.isResolveCommandEnabled()`

:::note 该方法添加于 After Effects 14.2 (CC 2017.1) :::#### 描述

检查解决命令是否已启用。

#### 返回

布尔值。如果团队项目的解决命令已启用，则返回 `true`，否则返回 `false`。

### Project.resolveConflict()

`app.project.resolveConflict(ResolveType)`

此方法添加于 After Effects 14.2 (CC 2017.1)

#### 描述

使用指定的解决方式来处理当前打开的团队项目与团队项目服务器上的版本之间的冲突。

#### 参数

| 参数            | 类型                | 描述                                                                                            |
| --------------- | ------------------- | ----------------------------------------------------------------------------------------------- |
| `ResolveType` | `ResolveType`枚举 | 要使用的冲突解决类型。可选值包括：                                                              |
|                 |                     | -`ResolveType.ACCEPT_THEIRS`：接受共享版本，您的版本将被共享版本替换。                        |
|                 |                     | -`ResolveType.ACCEPT_YOURS`：保留您的版本，不接受共享版本。                                   |
|                 |                     | -`ResolveType.ACCEPT_THEIRS_AND_COPY`：复制并重命名您的版本，然后接受共享版本，替换原始版本。 |

#### 返回值

布尔值。若指定类型的冲突解决成功，则返回 `true`，否则返回 `false`。
