---
title: 应用
---
# Application object

`app`

#### 描述

提供对 After Effects 应用程序内部对象和设置的访问。全局唯一的 Application 对象始终可通过其名称 `app` 访问。

Application 对象的属性提供了对 After Effects 内部特定对象的访问。其方法可以创建项目、打开现有项目、控制监视文件夹模式、清理内存以及退出 After Effects 应用程序。当 After Effects 退出时，会关闭当前项目（必要时提示用户保存或放弃更改），并根据需要创建项目文件。

---

## 属性

### app.activeViewer

`app.activeViewer`

#### 描述

当前获得焦点的活动查看器面板（合成、图层或素材）对应的 Viewer 对象。若无查看器打开则返回 `null`。

#### 类型

[Viewer 对象](../other/viewer) object; 只读.

---

### app.availableGPUAccelTypes

`app.availableGPUAccelTypes`

:::note 该方法添加于 After Effects 14.0 (CC 2017) :::#### 描述

与 `app.project.gpuAccelType` 配合使用，用于设置"项目设置 > 视频渲染和效果 > 使用"选项的值。

#### 类型

`GpuAccelType` 枚举数组，若无查看器打开则返回 `null`; 只读. 可选值包括:

* `CUDA`
* `Metal`
* `OPENCL`
* `SOFTWARE`

#### 示例

以下示例代码检查当前计算机可用的 GPU 加速类型，如果可用则设置为 Metal：

```javascript
// app.availableGPUAccelTypes 返回当前系统可用的 GPU 加速类型
// 在设置前需要先检查可用性
var newType = GpuAccelType.METAL;

// 设置前先检查当前系统支持的 GPU 加速类型
var canSet = false;
var currentOptions = app.availableGPUAccelTypes;
for (var op in currentOptions) {
 if (currentOptions[op] === newType) {
 canSet = true;
 }
}

if (canSet) {
 // 设置 GPU 加速类型
 app.project.gpuAccelType = newType;
} else {
 alert("当前操作系统不支持 Metal 加速");
}
```

---

### app.buildName

`app.buildName`

#### 描述

当前运行的 After Effects 构建名称，Adobe 内部用于测试和故障排查。

#### 类型

字符串; 只读.

---

### app.buildNumber

`app.buildNumber`

#### 描述

当前运行的 After Effects 构建编号，Adobe 内部用于测试和故障排查。

#### 类型

整数; 只读.

---

### app.disableRendering

`app.disableRendering`

:::note 该方法添加于 After Effects 16.0 (CC 2019) :::#### 描述

当为 `false`（默认值）时正常渲染。设置为 `true` 时会禁用渲染（类似于开启大写锁定键的效果）。

#### 类型

布尔值; 可读写.

---

### app.effects

`app.effects`

#### 描述

应用程序中可用的效果列表。

#### 类型

数组，每个元素包含以下属性; 只读:

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `displayName` | 字符串 | 本地化的效果显示名称（与效果菜单中显示的一致） |
| `category` | 字符串 | 本地化的分类标签（与效果菜单中显示的一致），对于不向用户显示的人工合成效果可能为 `""` |
| `matchName` | 字符串 | 效果的内部唯一标识名（不会随版本变化），用于实际应用效果 |
| `version` | 字符串 | 效果的内部版本号（可能与插件厂商在效果关于框中显示的版本不同） |

#### 示例

```javascript
var effectName = app.effects[12].displayName;
```

---

### app.exitAfterLaunchAndEval

`app.exitAfterLaunchAndEval`

#### 描述

此属性仅用于在 Windows 命令行执行脚本时。当通过命令行启动应用程序时，`-r` 或 `-s` 参数会使应用程序运行脚本（分别从文件或字符串读取）。

若设为 `true`，After Effects 在脚本运行后退出；若为 `false` 则保持打开。此属性仅在 Windows 命令行运行 After Effects 时有效，在 Mac OS 中无效。

#### 类型

布尔值; 可读写.

---

### app.exitCode

`app.exitCode`

#### 描述

用于外部执行脚本时返回的状态码：

* 在 Windows 中，当通过命令行启动 After Effects（使用 `afterfx` 或 `afterfx -m` 命令）并使用 `-r` 或 `-s` 参数指定脚本时，此值会作为命令行返回值
* 在 Mac OS 中，此值作为 AppleScript `DoScript` 的执行结果返回
* 在 Mac OS 和 Windows 中，每次脚本执行开始时此值会被重置为 0（`EXIT_SUCCESS`）。若脚本运行出错，可将其设为表示错误类型的正整数

#### 类型

整数; 可读写.

#### 示例

```javascript
app.exitCode = 2; // 退出时若值为 2 表示发生错误
```

---

### app.fonts

`app.fonts`

:::note 该方法添加于 After Effects 24.0 :::#### 描述

返回用于浏览和检索系统当前可用字体的对象。

#### 类型

[字体对象](../text/fontsobject); 只读.

---

### app.isoLanguage

`app.isoLanguage`

#### 描述

表示 After Effects 运行环境的本地化字符串（语言和地区标识）。

:::tip `$.locale` 返回操作系统语言，而非 After Effects 应用程序语言。 :::#### 类型

字符串; 只读. 常见值包括:

* `en_US` 英语（美国）
* `de_DE` 德语（德国）
* `es_ES` 西班牙语（西班牙）
* `fr_FR` 法语（法国）
* `it_IT` 意大利语（意大利）
* `ja_JP` 日语（日本）
* `ko_KR` 韩语（韩国）

#### 示例

```javascript
var lang = app.isoLanguage;
if (lang === "en_US") {
 alert("After Effects 当前使用英语界面");
} else if (lang === "fr_FR") {
 alert("After Effects 当前使用法语界面");
} else {
 alert("After Effects 当前使用非英法语言界面");
}
```

---

### app.isRenderEngine

`app.isRenderEngine`

#### 描述

若 After Effects 作为渲染引擎运行则为 `true`。

#### 类型

布尔值; 只读.

---

### app.isWatchFolder

`app.isWatchFolder`

#### 描述

若当前显示监视文件夹对话框且应用程序正在监视文件夹进行渲染则为 `true`。

#### 类型

布尔值; 只读.

---

### app.memoryInUse

`app.memoryInUse`

#### 描述

当前应用程序占用的内存字节数。

#### 类型

数值; 只读.

---

### app.onError

`app.onError`

#### 描述

错误发生时调用的回调函数名。通过创建函数并赋值给此属性，可以系统化响应错误（例如在渲染过程中发生错误时关闭并重启应用程序，或在日志中记录错误）。详见 [RenderQueue.render()](../../renderqueue/renderqueue#renderqueuerender)。回调函数接收错误字符串和严重级别字符串，不应返回任何值。

#### 类型

函数名字符串，未赋值时为 `null`; 可读写.

#### 示例

```javascript
function err(errString) {
 alert(errString) ;
}
app.onError = err;
```

---

### app.preferences

`app.preferences`

#### 描述

当前加载的 AE 应用程序首选项。参见 [首选项对象](../other/preferences)。

#### 类型

首选项对象; 只读.

---

### app.project

`app.project`

#### 描述

当前加载的项目。参见 [项目对象](../project)。

#### 类型

项目对象; 只读.

---

### app.saveProjectOnCrash

`app.saveProjectOnCrash`

#### 描述

当为 `true`（默认值）时，若错误导致应用程序意外退出，After Effects 会尝试显示保存当前项目的对话框。

设为 `false` 则跳过对话框直接退出且不保存。

#### 类型

布尔值; 可读写.

---

### app.settings

`app.settings`

#### 描述

当前加载的设置。参见 [设置对象](../other/settings)。

#### 类型

设置对象; 只读.

---

### app.version

`app.version`

:::note 该方法添加于 After Effects 12.0 (CC) :::#### 描述

表示当前 After Effects 版本的字母数字字符串。

#### 类型

字符串; 只读.

#### 示例

```javascript
var ver = app.version;
alert("本机运行的 AfterEffects 版本是：" + ver);
```

---

## 方法

### app.activate()

`app.activate()`

#### 描述

若应用程序窗口最小化或图标化则恢复显示，并将其置于桌面最前端。

#### 参数

无。

#### 返回

无。

---

### app.beginSuppressDialogs()

`app.beginSuppressDialogs()`

#### 描述

开始禁止显示脚本错误对话框。使用 [app.endSuppressDialogs()]() 恢复显示。

#### 参数

无。

#### 返回

无。

---

### app.beginUndoGroup()

`app.beginUndoGroup(undoString)`

#### 描述

标记撤销组的开始，使脚本的所有操作在逻辑上成为单个可撤销操作（对应编辑菜单的撤销/重做）。使用 [app.endUndoGroup()]() 标记组结束。

`beginUndoGroup()` 和 `endUndoGroup()` 可以嵌套，内部组会成为外部组的一部分并正确撤销。此时内部组的名称会被忽略。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `undoString` | 字符串 | 在编辑菜单中显示的撤销命令文本（即"Undo"对应的文字） |

#### 返回

无。

---

### app.cancelTask()

`app.cancelTask(taskID)`

#### 描述

从延迟执行任务队列中移除指定任务。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `taskID` | 整数 | 任务标识符（由[app.scheduleTask()]() 返回） |

#### 返回

无。

---

### app.endSuppressDialogs()

`app.endSuppressDialogs(alert)`

#### 描述

结束禁止显示脚本错误对话框。错误对话框默认显示，仅在之前调用过 [app.beginSuppressDialogs()]() 时需调用此方法。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `alert` | 布尔值 | 为 `true` 时显示调用 `beginSuppressDialogs()` 后发生的错误对话框 |

#### 返回

无。

---

### app.endUndoGroup()

`app.endUndoGroup()`

#### 描述

标记由 [app.beginUndoGroup()]() 开始的撤销组结束。可在脚本中间结束撤销组以实现多个撤销组。若脚本只使用单个撤销组则无需调用此方法，系统会在脚本结束时自动关闭撤销组。未调用 `beginUndoGroup()` 直接调用此方法会报错。

#### 参数

无。

#### 返回

无。

---

### app.endWatchFolder()

`app.endWatchFolder()`

#### 描述

结束监视文件夹模式。

#### 参数

无。

#### 返回

无。

#### 相关链接

* [app.watchFolder()]()
* [app.parseSwatchFile()]()
* [app.isWatchFolder]()

---

### app.executeCommand()

`app.executeCommand(id)`

#### 描述

GUI 应用程序中的菜单命令都有独立 ID 号，可作此方法的参数。对于未包含在 API 中的功能，这是唯一的访问方式。

[app.findMenuCommandId()]() 方法可用于查找命令的 ID 号。

相关网站提供更多信息和已知 ID 列表：

* [https://www.provideocoalition.com/after-effects-menu-command-ids/](https://www.provideocoalition.com/after-effects-menu-command-ids/)
* [https://hyperbrew.co/blog/after-effects-command-ids/](https://hyperbrew.co/blog/after-effects-command-ids/)

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `id` | 整数 | 菜单命令的 ID 号 |

#### 返回

无。

#### 示例

```javascript
// 调用"转换为贝塞尔路径"命令
app.executeCommand(4162);
```

---

### app.findMenuCommandId()

`app.findMenuCommandId(command)`

#### 描述

查找 GUI 应用程序中菜单命令的 ID 号，作为 [app.executeCommand()]() 的参数。对于未包含在 API 中的功能，这是唯一的访问方式。

注意：此方法在不同语言版本的 AE 中可能不可靠，建议开发时查找命令 ID 号后直接使用数字调用。

相关网站提供更多信息和已知 ID 列表：

* [https://www.provideocoalition.com/after-effects-menu-command-ids/](https://www.provideocoalition.com/after-effects-menu-command-ids/)
* [https://hyperbrew.co/blog/after-effects-command-ids/](https://hyperbrew.co/blog/after-effects-command-ids/)

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `command` | 字符串 | 菜单命令文本（需与界面显示完全一致） |

#### 返回

整数，菜单命令的 ID 号。

#### 示例

```javascript
app.findMenuCommandId("Convert To Bezier Path")
```

---

### app.newProject()

`app.newProject()`

#### 描述

新建项目（对应文件 > 新建 > 新建项目菜单命令）。若当前项目已修改会提示保存，若用户在保存对话框中取消则不创建新项目并返回 `null`。

使用 `app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES)` 关闭当前项目后再新建。参见 [Project.close()](https://project.md/#projectclose)

#### 参数

无。

#### 返回

新项目对象，未创建时返回 `null`。

#### 示例

```javascript
app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
app.newProject();
```

---

### app.open()

`app.open()`

`app.open(file)`

#### 描述

打开项目文件。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `file` | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) | 可选。要打开的项目文件，不提供时弹出对话框 |

#### 返回

指定项目的新 Project 对象，用户取消时返回 `null`。

#### 示例

```javascript
var my_file = new File("../my_folder/my_test.aep");
if (my_file.exists) {
 var new_project = app.open(my_file);
 if (new_project) {
 alert(new_project.file.name);
 }
}
```

---

### app.openFast()

`app.openFast(file)`

:::warning 此方法/属性为未公开文档内容，可能存在信息不准确或后续失效的情况，欢迎补充更多信息！ :::#### 描述

以比 `app.open()` 更快的速度打开项目（跳过部分检查）。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `file` | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) | 要打开的项目文件 |

#### 返回

指定项目的新 Project 对象。

#### 示例

```javascript
var projectFile = new File("someFile.aep");

$.hiresTimer;
app.openFast(projectFile);
var fastEnd = $.hiresTimer / 1000;

app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);

$.hiresTimer;
app.open(projectFile);
var normalEnd = $.hiresTimer / 1000;

app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);

alert( "时间差为 " + parseInt(normalEnd-fastEnd) + " 毫秒" +
 "\n\n快速打开: " + fastEnd + " 毫秒" +
 "\n常规打开:" + normalEnd + " 毫秒" );
```

### app.parseSwatchFile()

`app.parseSwatchFile(file)`

#### 描述

从 Adobe Swatch Exchange (ASE) 文件加载色板数据。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `file` | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) | The ASE file to parse. |

#### 返回

The swatch data, in this format:

| Property | 描述 |
| --- | --- |
| `data.majorVersion` | ASE 版本号。 |
| `data.minorVersion` | |
| `data.values` | 一个 Swatch Value 数组。 |
| `SwatchValue.type` | 颜色模式之一："RGB", "CMYK", "LAB", "Gray" |
| `SwatchValue.r` | 当 `type = "RGB"` 时，颜色值范围 `[0.0..1.0]`。 |
| `SwatchValue.g` | |
| `SwatchValue.b` | `[0, 0, 0]` 代表黑色 |
| `SwatchValue.c` | When `type = "CMYK"`, the color values in the range `[0.0..1.0]`. |
| `SwatchValue.m` | |
| `SwatchValue.y` | `[0, 0, 0, 0]` 代表白色 |
| `SwatchValue.k` | |
| `SwatchValue.L` | When `type = "LAB"`, the color values. |
| `SwatchValue.a` | |
| `SwatchValue.b` | -`L` is in the range `[0.0..1.0]` |
| | -`a` and `b`are in the range `[-128.0..+128.0]` |
| | `[0, 0, 0]` is Black. |
| `SwatchValue.value` | When `type = "Gray"`, the `value` range is `[0.0..1.0]`. |
| | `0.0` is Black. |

---

### app.pauseWatchFolder()

`app.pauseWatchFolder(pause)`

#### 描述

暂停或恢复对目标监视文件夹的搜索，以便渲染项目。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `pause` | Boolean | `true` 暂停, `false` 恢复 |

#### 返回

Nothing.

#### See Also

* [app.isWatchFolder](#appiswatchfolder)
* [app.watchFolder()](#appwatchfolder)
* [app.endWatchFolder()](#appendwatchfolder)

---

### app.purge()

`app.purge(target)`

:::tip
在 After Effects 24.3 版本中，`ALL_CACHES` 可清除 RAM 和磁盘缓存，而 `ALL_MEMORY_CACHES` 仅清除 RAM 缓存。在 24.3 之前的版本，`ALL_CACHES` 仅清除 RAM 缓存。
:::

#### 描述

清除指定类型的未使用数据，相当于“编辑”菜单中的“清除”选项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `target` | `PurgeTarget` 枚举值 | 要清除的缓存类型之一： |
| | | -`PurgeTarget.ALL_CACHES`：清除 RAM 和磁盘缓存。 |
| | | -`PurgeTarget.ALL_MEMORY_CACHES`：清除 RAM 缓存（24.3 版本新增）。 |
| | | -`PurgeTarget.UNDO_CACHES`：清除撤销缓存。 |
| | | -`PurgeTarget.SNAPSHOT_CACHES`：清除合成/图层快照缓存。 |
| | | -`PurgeTarget.IMAGE_CACHES`：清除已保存的图像数据。 |

#### 返回

无。

---

### app.quit()

`app.quit()`

#### 描述

退出 After Effects 应用程序。

#### 参数

无。

#### 返回

无。

---

### app.scheduleTask()

`app.scheduleTask(stringToExecute, delay, repeat)`

#### 描述

安排指定的 JavaScript 代码延迟执行。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `stringToExecute` | String | 需要执行的 JavaScript 代码。 |
| `delay` | Float | 执行前等待的毫秒数。 |
| `repeat` | Boolean | `true` 表示重复执行，`false` 仅执行一次。 |

#### 返回

整数，表示任务的唯一标识符，可用于 [app.cancelTask()](#appcanceltask) 取消任务。

---

### app.setMemoryUsageLimits()

`app.setMemoryUsageLimits(imageCachePercentage, maximumMemoryPercentage)`

#### 描述

设置内存使用限制，类似于“内存与缓存”偏好设置区域中的选项。对于这两个值，如果安装的内存小于给定数量（`n` GB），则该值是安装内存的百分比；否则是 `n` 的百分比。`n` 的值为：32位 Windows 为2 GB，64位 Windows 为4 GB，Mac OS 为3.5 GB。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `imageCachePercentage` | Float | 分配给图像缓存的内存百分比。 |
| `maximumMemoryPercentage` | Float | 最大可用内存百分比。 |

#### 返回

无

---

### app.setMultiFrameRenderingConfig()

`app.setMultiFrameRenderingConfig(mfr_on, max_cpu_perc)`

:::note
该方法添加于 After Effects 22.0 (2022)
:::

#### 描述

从脚本中调用此函数将为下一次渲染设置多帧渲染配置。
脚本执行完成后，这些设置将重置为之前在用户界面中设置的配置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `mfr_on` | Boolean | 设置为 `true` 以启用多帧渲染。 |
| `max_cpu_perc` | Floating-point value, 范围为 `[1..100]` | 多帧渲染应使用的最大 CPU 百分比。如果 `mfr_on` 设置为 `false`，则传入值应为100。 |

#### 返回

无返回值
---

### app.setSavePreferencesOnQuit()

`app.setSavePreferencesOnQuit(doSave)`

#### 描述

Set or clears the flag that determines whether preferences are saved when the application is closed.

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `doSave` | Boolean | When `true`, preferences saved on quit, when `false` they are not. |

#### 返回

无

---

### app.watchFolder()

`app.watchFolder(folder_object_to_watch)`

#### 描述

启动一个指向指定文件夹的监视文件夹（网络渲染）进程。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `folder_object_to_watch` | [Extendscript Folder](https://extendscript.docsforadobe.dev/file-system-access/folder-object.html) | 要监控的文件 |

#### 返回

无

#### 示例

```javascript
var theFolder = new Folder("c:/tool");
app.watchFolder(theFolder);
```

#### 参见

* [app.endWatchFolder()](#appendwatchfolder)
* [app.parseSwatchFile()](#appparseswatchfile)
* [app.isWatchFolder](#appiswatchfolder)
