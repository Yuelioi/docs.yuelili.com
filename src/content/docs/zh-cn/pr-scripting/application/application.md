---
title: 应用程序对象
---
# 应用程序对象

`app`

#### 描述

提供对 Premiere Pro 内对象和应用程序设置的访问。

全局对象始终可以通过其名称 `app` 访问。

---

## 属性

### app.anywhere

`app.anywhere`

#### 描述

一个 [Anywhere 对象](../../general/anywhere)，提供对可用 Anywhere 服务器的访问。仅在 Anywhere 配置中运行时可用（已停用）。

#### 类型

[Anywhere 对象](../../general/anywhere)。

---

### app.build

`app.build`

#### 描述

当前运行的 Premiere Pro 的构建号。

#### 类型

字符串；只读。

#### 示例

获取当前应用程序的构建版本。

```js
// 在 Adobe Premiere Pro 版本 14.3.1 (Build 45) 中...
parseInt(app.build); // 45
```

---

### app.encoder

`app.encoder`

#### 描述

提供对 Adobe Media Encoder（在同一系统上）的访问。

:::warning
`app.encoder` 在 Premiere Pro 14.3.1 - 15 版本中仅在 Mac 上失效。已在 22 及以上版本修复。[参见此讨论](https://community.adobe.com/t5/premiere-pro-discussions/missing-the-object-app-encoder-14-3-1-15-0-15-1-15-2/m-p/12544488)。
:::

#### 类型

[Encoder 对象](../../general/encoder)。

---

### app.getAppPrefPath

`app.getAppPrefPath`

#### 描述

包含当前活动的 "Adobe Premiere Pro Prefs" 文件的路径。

#### 类型

字符串；只读。

#### 示例

获取当前活动的偏好文件路径

```js
app.getAppPrefPath;
// /Users/USERNAME/Documents/Adobe/Premiere Pro/14.0/Profile-USERNAME/
```

---

### app.getAppSystemPrefPath

`app.getAppSystemPrefPath`

#### 描述

Premiere Pro 的活动配置文件，不特定于某个用户。

#### 类型

字符串；只读。

#### 示例

获取当前活动的配置文件夹路径

```js
app.getAppSystemPrefPath;
// /Library/Application Support/Adobe/Adobe Premiere Pro 2020/
```

---

### app.getPProPrefPath

`app.getPProPrefPath`

#### 描述

包含当前活动的 "Adobe Premiere Pro Prefs" 文件的路径。

#### 类型

字符串；只读。

#### 示例

获取当前活动的偏好文件路径

```js
app.getPProPrefPath;
// /Users/USERNAME/Documents/Adobe/Premiere Pro/14.0/Profile-USERNAME/
```

---

### app.getPProSystemPrefPath

`app.getPProSystemPrefPath`

#### 描述

Premiere Pro 的活动配置文件，不特定于某个用户。

#### 类型

字符串；只读。

#### 示例

获取当前活动的配置文件夹路径

```js
app.getPProSystemPrefPath;
// /Library/Application Support/Adobe/Adobe Premiere Pro 2020/
```

---

### app.learnPanelContentDirPath

`app.learnPanelContentDirPath`

#### 描述

获取 Learn 面板的内容目录路径。

#### 类型

字符串；只读。

#### 示例

获取 Learn 面板的目录路径

```js
app.learnPanelContentDirPath;
// /Users/Shared/Adobe/Premiere Pro 2020/Learn Panel/
```

---

### app.learnPanelExampleProjectDirPath

`app.learnPanelExampleProjectDirPath`

#### 描述

获取 Learn 面板的示例项目目录路径。

#### 类型

字符串；只读。

#### 示例

获取 Learn 面板的示例项目目录路径

```js
app.learnPanelExampleProjectDirPath;
// /Users/Shared/Adobe/Premiere Pro/14.0/Tutorial/Going Home project/
```

---

### app.metadata

`app.metadata`

#### 描述

获取应用程序的 Metadata 对象。

#### 类型

[Metadata 对象](../../general/metadata)，只读。

---

### app.path

`app.path`

#### 描述

获取应用程序可执行文件的路径。

#### 类型

字符串；只读。

#### 示例

获取应用程序可执行文件的路径。

```js
app.path;
// /Applications/Adobe Premiere Pro 2020/Adobe Premiere Pro 2020.app/
```

---

### app.production

`app.production`

#### 描述

当前活动的生产。

#### 类型

如果至少有一个生产打开，则为 [Production 对象](../../general/production)，否则为 `null`。

---

### app.project

`app.project`

#### 描述

当前活动的项目。

#### 类型

[Project 对象](../../general/project)。

---

### app.projectManager

`app.projectManager`

#### 描述

提供对 Premiere Pro 内项目管理功能的访问。

#### 类型

[ProjectManager 对象](../../general/projectmanager)。

---

### app.projects

`app.projects`

#### 描述

引用所有打开项目的数组；`numProjects` 包含大小。

#### 类型

[ProjectCollection 对象](../../collection/projectcollection)，只读。

---

### app.properties

`app.properties`

#### 描述

属性对象提供访问和修改偏好值的方法。

#### 类型

[Properties 对象](../../general/properties)，只读；

---

### app.sourceMonitor

`app.sourceMonitor`

#### 描述

提供对 [SourceMonitor 对象](../../general/sourcemonitor) 的访问。

#### 类型

[SourceMonitor 对象](../../general/sourcemonitor)。

---

### app.userGuid

`app.userGuid`

#### 描述

当前登录的 Creative Cloud 用户的唯一标识符。

#### 类型

字符串；只读。

---

### app.version

`app.version`

#### 描述

提供 API 的 Premiere Pro 版本。

#### 类型

字符串；只读。

#### 示例

获取当前应用程序的版本 *(Adobe Premiere Pro 版本 14.3.1 (Build 45))*

```js
app.version; // 14.3.1
```

---

## 方法

### app.enableQE()

`app.enableQE()`

#### 描述

启用 Premiere Pro 的 QE DOM。

#### 参数

无。

#### 返回值

如果 QE DOM 已启用，则返回 `true`。

---

### app.getEnableProxies()

`app.getEnableProxies()`

#### 描述

确定当前是否启用了代理使用。

#### 参数

无。

#### 返回值

如果启用了代理，则返回 `1`，否则返回 `0`。

---

### app.getWorkspaces()

`app.getWorkspaces()`

#### 描述

获取可用工作区的数组，以字符串形式返回。

#### 参数

无。

#### 返回值

如果成功，返回字符串数组；如果不成功，返回 `null`。

#### 示例

获取可用工作区列表。

```js
app.getWorkspaces();
/* [
 "All Panels",
 "Assembly",
 "Audio",
 "Color",
 "Editing",
 "Effects",
 "Graphics",
 "Learning",
 "Libraries",
 "Metalogging",
 "Production"
]; */
```

---

### app.isDocument()

`app.isDocument(path)`

#### 描述

确定路径中的文件是否可以作为 Premiere Pro [项目](../../general/project) 打开。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `path` | 字符串 | 文件的路径。 |

#### 返回值

如果文件可以作为 Premiere Pro [项目](../../general/project) 打开，则返回 `true`。

#### 示例

测试有效的项目文件

```js
app.isDocument('~/Desktop/myProject.prproj'); // true
app.isDocument('~/Desktop/textFile.txt'); // false
app.isDocument('~/Desktop/footageFile.mov'); // false
app.isDocument('~/Desktop/imageFile.mov'); // false
```

---

### app.isDocumentOpen()

`app.isDocumentOpen()`

#### 描述

确定当前是否有任何 [项目](../../general/project) 打开。

#### 参数

无。

#### 返回值

如果至少有一个项目打开，则返回 `true`；否则返回 `false`。

---

### app.newProject()

`app.newProject(path)`

#### 描述

在指定路径创建一个新的 .prproj [Project 对象](../../general/project)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `path` | 字符串 | 新项目的完整路径；不会添加 .prproj 扩展名。 |

#### 返回值

如果成功，则返回 `true`。

---

### app.openDocument()

`app.openDocument(path, [suppressConversionDialog], [bypassLocateFileDialog], [bypassWarningDialog], [doNotAddToMRUList])`

#### 描述

打开指定路径的文件，作为 Premiere Pro [Project 对象](../../general/project)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `path` | 字符串 | 要打开的文件的完整路径。 |
| `suppressConversionDialog` | 布尔值 | 可选。抑制项目转换对话框。 |
| `bypassLocateFileDialog` | 布尔值 | 可选。绕过定位文件对话框。 |
| `bypassWarningDialog` | 布尔值 | 可选。绕过警告对话框。 |
| `doNotAddToMRUList` | 布尔值 | 可选。跳过将此文件添加到最近使用的列表。 |

#### 返回值

如果文件成功打开，则返回 `true`。

---

### app.openFCPXML()

`app.openFCPXML(path, projPath)`

#### 描述

将 FCP XML 文件作为 Premiere Pro [Project 对象](../../general/project) 打开（在 projPath 中指定）。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `path` | 字符串 | |
| `projPath` | 字符串 | |

#### 返回值

如果文件成功作为 Premiere Pro [Project 对象](../../general/project) 打开，则返回 `true`。

---

### app.quit()

`app.quit()`

#### 描述

退出 Premiere Pro；用户将被提示保存对 [Project 对象](../../general/project) 的任何更改。

#### 参数

无。

#### 返回值

无。

---

### app.setEnableProxies()

`app.setEnableProxies(enabled)`

#### 描述

确定当前是否启用了代理使用。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `enabled` | 整数 | `1` 启用代理，`0` 禁用代理。 |

#### 返回值

如果代理启用状态已更改，则返回 `1`。

---

### app.setExtensionPersistent()

`app.setExtensionPersistent(extensionID, persistent)`

#### 描述

是否在此会话中持久化具有给定 extensionID 的扩展。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `extensionID` | 字符串 | 要修改的扩展。 |
| `persistent` | 整数 | 传递 `1` 以保持扩展在内存中，`0` 以允许卸载。 |

#### 返回值

如果成功，则返回 `true`。

#### 示例

```js
var extensionID = 'com.adobe.PProPanel';
// 0 - 测试时（以启用快速重新加载）；
// 1 - 用于“即使不可见也不要卸载我。”
var persistent = 0;

app.setExtensionPersistent(extensionID, persistent);
```

---

### app.setScratchDiskPath()

`app.setScratchDiskPath(path, scratchDiskType)`

#### 描述

指定用于 Premiere Pro 的其中一个暂存盘路径的路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `path` | 字符串 | 要使用的新路径。 |
| `scratchDiskType` | `ScratchDiskType` 枚举 | 枚举值，必须为以下之一： |
| | | - `ScratchDiskType.FirstVideoCaptureFolder` |
| | | - `ScratchDiskType.FirstAudioCaptureFolder` |
| | | - `ScratchDiskType.FirstVideoPreviewFolder` |
| | | - `ScratchDiskType.FirstAudioPreviewFolder` |
| | | - `ScratchDiskType.FirstAutoSaveFolder` |
| | | - `ScratchDiskType.FirstCCLibrariesFolder` |
| | | - `ScratchDiskType.FirstCapsuleMediaFolder` |

#### 返回值

如果成功，则返回 `true`。

#### 示例

```js
var scratchPath = Folder.selectDialog('选择新的暂存盘文件夹');
if (scratchPath && scratchPath.exists) {
 app.setScratchDiskPath(scratchPath.fsName, ScratchDiskType.FirstAutoSaveFolder);
}
```

---

### app.setSDKEventMessage()

`app.setSDKEventMessage(message, decorator)`

#### 描述

将字符串写入 Premiere Pro 的事件面板。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `message` | 字符串 | 要显示的消息。 |
| `decorator` | 字符串 | 装饰器，以下之一： |
| | | - `info` |
| | | - `warning` |
| | | - `error` |

#### 返回值

如果成功，则返回 `true`。

---

### app.setWorkspace()

`app.setWorkspace(workspace)`

#### 描述

将工作区设置为活动状态。使用 [app.getWorkspaces()](#appgetworkspaces) 获取所有可用工作区的列表。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `workspace` | 字符串 | 工作区的名称。 |

#### 返回值

布尔值。

#### 示例

激活 "Editing" 工作区。

```js
var workspace = 'Editing';
if (app.setWorkspace(workspace)) {
 alert('工作区已更改为 "' + workspace + '"');
} else {
 alert('无法设置 "' + workspace + '" 工作区');
}
```

---

### app.trace()

`app.trace()`

#### 描述

将字符串写入 Premiere Pro 的调试控制台。

#### 参数

无。

#### 返回值

如果跟踪已添加，则返回 `true`。

---

### app.getProjectViewIDs()

`app.getProjectViewIDs()`

#### 描述

返回与任何项目关联的当前打开的视图的视图 ID。

#### 参数

无。

#### 返回值

视图 ID 的数组；可以为 null。

#### 示例

```js
var allViewIDs = app.getProjectViewIDs();
if (allViewIDs){
 var firstOne = allViewIDs[0];
} else {
 // 没有打开的视图。
}
```

---

### app.getProjectFromViewID()

`app.getProjectFromViewID()`

#### 描述

返回与提供的视图 ID 关联的 [项目](../../general/project)。

#### 参数

从 `getProjectViewIDs` 获取的视图 ID。

#### 返回值

与提供的视图 ID 关联的 [项目](../../general/project) 对象。可以为 `null`。

#### 示例

```js
var allViewIDs = app.getProjectViewIDs();
if (allViewIDs){
 var firstOne = allViewIDs[0];
 if (firstOne){
 var thisProject = getProjectFromViewID(firstOne);
 if (thisProject){
 var name = thisProject.name;
 } else {
 // 没有与该视图 ID 关联的项目。
 }
} else {
 // 没有打开的视图。
}
```

---

### app.getCurrentProjectViewSelection()

`app.getCurrentProjectViewSelection()`

#### 描述

返回当前活动项目视图中选择的 [ProjectItems](../../item/projectitem) 数组。

#### 参数

无。

#### 返回值

[ProjectItems](../../item/projectitem) 的数组；可以为 null。

#### 示例

```js
var selectedItems = app.getCurrentProjectViewSelection();
if (selectedItems){
 var firstOne = selectedItems[0];
} else {
 // 没有选择的 ProjectItems。
}
```
