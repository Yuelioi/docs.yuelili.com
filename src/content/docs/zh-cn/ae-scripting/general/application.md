---
title: application
---
# Application object

`app`

#### 描述

Provides access to objects and application settings within the After Effects application. The single global object is always available by its name, app.

Attributes of the Application object provide access to specific objects within After Effects. Methods of the Application object can create a project, open an existing project, control Watch Folder mode, purge memory, and quit the After Effects application. When the After Effects application quits, it closes the open project, prompting the user to save or discard changes as necessary, and creates a project file as necessary.

---

## 属性

### app.activeViewer

`app.activeViewer`

#### 描述

The Viewer object for the currently focused or active-focused viewer (Composition, Layer, or Footage) panel. Returns `null` if no viewers are open.

#### 类型

[Viewer object](../../other/viewer) object; 只读.

---

### app.availableGPUAccelTypes

`app.availableGPUAccelTypes`

:::note
该方法添加于 After Effects 14.0 (CC 2017)
:::

#### 描述

Use this in conjunction with `app.project.gpuAccelType` to set the value for Project Settings > Video Rendering and Effects > Use.

#### 类型

Array of `GpuAccelType` enums, or `null` if no viewers are open; 只读. One of:

- `CUDA`
- `Metal`
- `OPENCL`
- `SOFTWARE`

#### 示例

The following sample code checks the current computer's available GPU acceleration types, and sets it to Metal if available.

```javascript
// app.availableGPUAccelTypes returns GPU acceleration types available on the current system.
// You can use this to check before setting the GPU acceleration type.
var newType = GpuAccelType.METAL;

// Before trying to set, check which GPU acceleration types are available on the current system.
var canSet = false;
var currentOptions = app.availableGPUAccelTypes;
for (var op in currentOptions) {
    if (currentOptions[op] === newType) {
        canSet = true;
    }
}

if (canSet) {
    // Set the GPU acceleration type.
    app.project.gpuAccelType = newType;
} else {
    alert("Metal is not available on this OS.");
}
```

---

### app.buildName

`app.buildName`

#### 描述

The name of the build of After Effects being run, used internally by Adobe for testing and troubleshooting.

#### 类型

String; 只读.

---

### app.buildNumber

`app.buildNumber`

#### 描述

The number of the build of After Effects being run, used internally by Adobe for testing and troubleshooting.

#### 类型

Integer; 只读.

---

### app.disableRendering

`app.disableRendering`

:::note
该方法添加于 After Effects 16.0 (CC 2019)
:::

#### 描述

When `false` (the default), rendering proceeds as normal. Set to `true` to disable rendering as if Caps Lock were turned on.

#### 类型

Boolean; read/write.

---

### app.effects

`app.effects`

#### 描述

The effects available in the application.

#### 类型

Array, with each element containing the following properties; read-only:

|   Property    |  类型  |                                                                           描述                                                                           |
| ------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayName` | String | A string representing the localized display name of the effect as seen in the Effect menu.                                                                      |
| `category`    | String | A string representing the localized category label as seen in the Effect menu. This can be `""` for synthetic effects that aren't normally shown to the user.   |
| `matchName`   | String | A string representing the internal unique name for the effect. This name does not change between versions of After Effects. Use this value to apply the effect. |
| `version`     | String | Effect's internal version string. This value might be different than the version number the plug-in vendor decides to show in the effect's about box.           |

#### 示例

```javascript
var effectName = app.effects[12].displayName;
```

---

### app.exitAfterLaunchAndEval

`app.exitAfterLaunchAndEval`

#### 描述

This attribute is used only when executing a script from a command line on Windows. When the application is launched from the command line, the `-r` or `-s` command line flag causes the application to run a script (from a file or from a string, respectively).

If this attribute is set to `true`, After Effects will exit after the script is run; if it is `false`, the application will remain open. This attribute only has an effect when After Effects is run from the Windows command line. It has no effect in Mac OS.

#### 类型

Boolean; read/write.

---

### app.exitCode

`app.exitCode`

#### 描述

A numeric status code used when executing a script externally (that is, from a command line or AppleScript).

- In Windows, the value is returned on the command line when After Effects was launched on the command line (using the `afterfx` or `afterfx -m` command), and a script was specified with the `-r` or `-s` option.
- In Mac OS, the value is returned as the AppleScript `DoScript` result for each script.
- In both Mac OS and Windows, the value is set to 0 (`EXIT_SUCCESS`) at the beginning of each script evaluation. In the event of an error while the script is running, the script can set this to a positive integer that indicates what error occurred.

#### 类型

Integer; read/write.

#### 示例

```javascript
app.exitCode = 2; // on quit, if value is 2, an error has occurred
```

---

### app.fonts

`app.fonts`

:::note
该方法添加于 After Effects 24.0
:::

#### 描述

Returns an object to navigate and retreive all the fonts currently available on your system.

#### 类型

[Fonts object](../../text/fontsobject); 只读.

---

### app.isoLanguage

`app.isoLanguage`

#### 描述

A string indicating the locale (language and regional designations) After Effects is running.

:::tip
`$.locale` returns the operating system language, not the language of the After Effects application.
:::

#### 类型

String; 只读. Some common values include:

- `en_US` for English (United States)
- `de_DE` for German (Germany)
- `es_ES` for Spanish (Spain)
- `fr_FR` for French (France)
- `it_IT` for Italian (Italy)
- `ja_JP` for Japanese (Japan)
- `ko_KR` for Korean (Korea)

#### 示例

```javascript
var lang = app.isoLanguage;
if (lang === "en_US") {
    alert("After Effects is running in English.");
} else if (lang === "fr_FR") {
    alert("After Effects is running in French.");
} else {
    alert("After Effects is running not in English or French.");
}
```

---

### app.isRenderEngine

`app.isRenderEngine`

#### 描述

`true` if After Effects is running as a render engine.

#### 类型

Boolean; 只读.

---

### app.isWatchFolder

`app.isWatchFolder`

#### 描述

`true` if the Watch Folder dialog box is currently displayed and the application is currently watching a folder for rendering.

#### 类型

Boolean; 只读.

---

### app.memoryInUse

`app.memoryInUse`

#### 描述

The number of bytes of memory currently used by this application.

#### 类型

Number; 只读.

---

### app.onError

`app.onError`

#### 描述

The name of a callback function that is called when an error occurs. By creating a function and assigning it to this attribute, you can respond to errors systematically; for example, you can close and restart the application, noting the error in a log file if it occurred during rendering. See [RenderQueue.render()](../renderqueue/renderqueue.md#renderqueuerender). The callback function is passed the error string and a severity string. It should not return any value.

#### 类型

A function name string, or `null` if no function is assigned; read/write.

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

The currently loaded AE app preferences. See [Preferences object](../../other/preferences).

#### 类型

Preferences object; 只读.

---

### app.project

`app.project`

#### 描述

The project that is currently loaded. See [Project object](../project).

#### 类型

Project object; 只读.

---

### app.saveProjectOnCrash

`app.saveProjectOnCrash`

#### 描述

When `true` (the default), After Effects attempts to display a dialog box that allows you to save the current project if an error causes the application to quit unexpectedly.

Set to `false` to suppress this dialog box and quit without saving.

#### 类型

Boolean; read/write.

---

### app.settings

`app.settings`

#### 描述

The currently loaded settings. See [Settings object](../../other/settings).

#### 类型

Settings object; 只读.

---

### app.version

`app.version`

:::note
该方法添加于 After Effects 12.0 (CC)
:::

#### 描述

An alphanumeric string indicating which version of After Effects is running.

#### 类型

String; 只读.

#### 示例

```javascript
var ver = app.version;
alert("This machine is running version " + ver + " of AfterEffects.");
```

---

## 函数

### app.activate()

`app.activate()`

#### 描述

Opens the application main window if it is minimized or iconified, and brings it to the front of the desktop.

#### 参数

None.

#### 返回

Nothing.

---

### app.beginSuppressDialogs()

`app.beginSuppressDialogs()`

#### 描述

Begins suppression of script error dialog boxes in the user interface. Use [app.endSuppressDialogs()](#appendsuppressdialogs) to resume the display of error dialogs.

#### 参数

None.

#### 返回

Nothing.

---

### app.beginUndoGroup()

`app.beginUndoGroup(undoString)`

#### 描述

Marks the beginning of an undo group, which allows a script to logically group all of its actions as a single undoable action (for use with the Edit > Undo/Redo menu items). Use the [app.endUndoGroup()](#appendundogroup) method to mark the end of the group.

`beginUndoGroup()` and `endUndoGroup()` pairs can be nested. Groups within groups become part of the larger group, and will undo correctly. In this case, the names of inner groups are ignored.

#### 参数

|  参数   |  类型  |                                    描述                                    |
| ------------ | ------ | --------------------------------------------------------------------------------- |
| `undoString` | String | The text that will appear for the Undo command in the Edit menu (that is, "Undo") |

#### 返回

Nothing.

---

### app.cancelTask()

`app.cancelTask(taskID)`

#### 描述

Removes the specified task from the queue of tasks scheduled for delayed execution.

#### 参数

| 参数 |  类型   |                                         描述                                         |
| --------- | ------- | ------------------------------------------------------------------------------------------- |
| `taskID`  | Integer | An integer that identifies the task, as returned by [app.scheduleTask()](#appscheduletask). |

#### 返回

Nothing.

---

### app.endSuppressDialogs()

`app.endSuppressDialogs(alert)`

#### 描述

Ends the suppression of script error dialog boxes in the user interface. Error dialogs are displayed by default;call this method only if [app.beginSuppressDialogs()](#appbeginsuppressdialogs) has previously been called.

#### 参数

| 参数 |  类型   |                                                     描述                                                      |
| --------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| `alert`   | Boolean | When `true`, errors that have occurred following the call to `beginSuppressDialogs()` are displayed in a dialog box. |

#### 返回

Nothing.

---

### app.endUndoGroup()

`app.endUndoGroup()`

#### 描述

Marks the end of an undo group begun with the [app.beginUndoGroup()](#appbeginundogroup) method. You can use this method to place an end to an undo group in the middle of a script, should you wish to use more than one undo group for a single script. If you are using only a single undo group for a given script, you do not need to use this method; in its absence at the end of a script, the system will close the undo group automatically. Calling this method without having set a `beginUndoGroup()` method yields an error.

#### 参数

None.

#### 返回

Nothing.

---

### app.endWatchFolder()

`app.endWatchFolder()`

#### 描述

Ends Watch Folder mode.

#### 参数

None.

#### 返回

Nothing.

#### See Also

- [app.watchFolder()](#appwatchfolder)
- [app.parseSwatchFile()](#appparseswatchfile)
- [app.isWatchFolder](#appiswatchfolder)

---

### app.executeCommand()

`app.executeCommand(id)`

#### 描述

Menu Commands in the GUI application have an individual ID number, which can be used as the parameter for this method. For some functions not included in the API this is the only way to access them.

The [app.findMenuCommandId()](#appfindmenucommandid) method can be used to find the ID number for a command.

These web sites have more information and lists of the known numbers:

- [https://www.provideocoalition.com/after-effects-menu-command-ids/](https://www.provideocoalition.com/after-effects-menu-command-ids/)
- [https://hyperbrew.co/blog/after-effects-command-ids/](https://hyperbrew.co/blog/after-effects-command-ids/)

#### 参数

| 参数 |  类型   |          描述          |
| --------- | ------- | ----------------------------- |
| `id`      | Integer | The ID number of the command. |

#### 返回

None.

#### 示例

```javascript
// calls the Convert to Bezier Path command
app.executeCommand(4162);
```

---

### app.findMenuCommandId()

`app.findMenuCommandId(command)`

#### 描述

Menu Commands in the GUI application have an individual ID number, which can be used as a parameter for the [app.executeCommand()](#appexecutecommand) command. For some functions not included in the API this is the only way to access them.

It should be noted that this method is not reliable across different language packages of AE, so you'll likely want to find the command ID number during development and then call it directly using the number in production.

These web sites have more information and lists of the known numbers:

- [https://www.provideocoalition.com/after-effects-menu-command-ids/](https://www.provideocoalition.com/after-effects-menu-command-ids/)
- [https://hyperbrew.co/blog/after-effects-command-ids/](https://hyperbrew.co/blog/after-effects-command-ids/)

#### 参数

| 参数 |  类型  |                           描述                           |
| --------- | ------ | --------------------------------------------------------------- |
| `command` | String | The text of the menu command, exactly as it is shown in the UI. |

#### 返回

Integer, the ID number of the menu command.

#### 示例

```javascript
app.findMenuCommandId("Convert To Bezier Path")
```

---

### app.newProject()

`app.newProject()`

#### 描述

Creates a new project in After Effects, replicating the File > New > New Project menu command. If the current project has been edited, the user is prompted to save it. If the user cancels out of the Save dialog box, the new project is not created and the method returns `null`.

Use `app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES)` to close the current project before opening a new one. See [Project.close()](project.md#projectclose)

#### 参数

None.

#### 返回

A new Project object, or `null` if no new project is created.

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

Opens a project.

#### 参数

| 参数 |                                              类型                                              |                                              描述                                               |
| --------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `file`    | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) | Optional. Project file to open. If not supplied, the method prompts the user to select a project file. |

#### 返回

A new Project object for the specified project, or `null` if the user cancels the Open dialog box.

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

:::warning
This method/property is officially undocumented and was found via research. The information here may be inaccurate, and this whole method/property may disappear or stop working some point. Please contribute if you have more information on it!
:::

#### 描述

Opens a project faster than `app.open()` by skipping some checks.

#### 参数

| 参数 |                                              类型                                              |      描述      |
| --------- | ---------------------------------------------------------------------------------------------- | --------------------- |
| `file`    | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) | Project file to open. |

#### 返回

A new Project object for the specified project.

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

alert( "The difference is " + parseInt(normalEnd-fastEnd) + " ms" +
        "\n\nFast: " + fastEnd + " ms" +
        "\nNormal:" + normalEnd + " ms" );
```

---

### app.parseSwatchFile()

`app.parseSwatchFile(file)`

#### 描述

Loads color swatch data from an Adobe Swatch Exchange (ASE) file.

#### 参数

| 参数 |                                              类型                                              |      描述       |
| --------- | ---------------------------------------------------------------------------------------------- | ---------------------- |
| `file`    | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) | The ASE file to parse. |

#### 返回

The swatch data, in this format:

|      Property       |                            描述                            |
|---------------------|-------------------------------------------------------------------|
| `data.majorVersion` | The ASE version number.                                           |
| `data.minorVersion` |                                                                   |
| `data.values`       | An array of Swatch Value.                                         |
| `SwatchValue.type`  | One of "RGB", "CMYK", "LAB", "Gray"                               |
| `SwatchValue.r`     | When `type = "RGB"`, the color values in the range `[0.0..1.0]`.  |
| `SwatchValue.g`     |                                                                   |
| `SwatchValue.b`     | `[0, 0, 0]` is Black.                                             |
| `SwatchValue.c`     | When `type = "CMYK"`, the color values in the range `[0.0..1.0]`. |
| `SwatchValue.m`     |                                                                   |
| `SwatchValue.y`     | `[0, 0, 0, 0]` is White.                                          |
| `SwatchValue.k`     |                                                                   |
| `SwatchValue.L`     | When `type = "LAB"`, the color values.                            |
| `SwatchValue.a`     |                                                                   |
| `SwatchValue.b`     | - `L` is in the range `[0.0..1.0]`                                |
|                     | - `a` and `b`are in the range `[-128.0..+128.0]`                  |
|                     | `[0, 0, 0]` is Black.                                             |
| `SwatchValue.value` | When `type = "Gray"`, the `value` range is `[0.0..1.0]`.          |
|                     | `0.0` is Black.                                                   |

---

### app.pauseWatchFolder()

`app.pauseWatchFolder(pause)`

#### 描述

Pauses or resumes the search of the target watch folder for items to render.

#### 参数

| 参数 |  类型   |             描述             |
| --------- | ------- | ----------------------------------- |
| `pause`   | Boolean | `true` to pause, `false` to resume. |

#### 返回

Nothing.

#### See Also

- [app.isWatchFolder](#appiswatchfolder)
- [app.watchFolder()](#appwatchfolder)
- [app.endWatchFolder()](#appendwatchfolder)

---

### app.purge()

`app.purge(target)`

:::tip
This functionality was updated in After Effects 24.3 to allow the `ALL_CACHES` enumerated value to clear both the RAM and disk cache, with the ALL_MEMORY_CACHES enumerated value added to purge only the RAM. In versions prior to 24.3, `ALL_CACHES` will only clear the RAM cache.
:::

#### 描述

Purges unused data of the specified types. Replicates the Purge options in the Edit menu.

#### 参数

| 参数 |        类型        |                                               描述                                                |
|-----------|--------------------|----------------------------------------------------------------------------------------------------------|
| `target`  | `PurgeTarget` enum | The type of elements to purge from memory. One of:                                                       |
|           |                    | - `PurgeTarget.ALL_CACHES`: Purges all data that After Effects has cached to both RAM and disk cache.    |
|           |                    | - `PurgeTarget.ALL_MEMORY_CACHES`: Purges all data that After Effects has cached to RAM. *(new in 24.3)* |
|           |                    | - `PurgeTarget.UNDO_CACHES`: Purges all data saved in the undo cache.                                    |
|           |                    | - `PurgeTarget.SNAPSHOT_CACHES`: Purges all data cached as composition/layer snapshots.                  |
|           |                    | - `PurgeTarget.IMAGE_CACHES`: Purges all saved image data.                                               |

#### 返回

Nothing.

---

### app.quit()

`app.quit()`

#### 描述

Quits the After Effects application.

#### 参数

None.

#### 返回

Nothing.

---

### app.scheduleTask()

`app.scheduleTask(stringToExecute, delay, repeat)`

#### 描述

Schedules the specified JavaScript for delayed execution.

#### 参数

|     参数     |  类型   |                                                                 描述                                                                  |
| ----------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `stringToExecute` | String  | A string containing JavaScript to be executed.                                                                                               |
| `delay`           | Float   | A number of milliseconds to wait before executing the JavaScript.                                                                            |
| `repeat`          | Boolean | When `true`, execute the script repeatedly, with the specified delay between each execution. When `false`, the script is executed only once. |

#### 返回

Integer, a unique identifier for this task, which can be used to cancel it with [app.cancelTask()](#appcanceltask).

---

### app.setMemoryUsageLimits()

`app.setMemoryUsageLimits(imageCachePercentage, maximumMemoryPercentage)`

#### 描述

Sets memory usage limits as in the Memory & Cache preferences area. For both values, if installed RAM is less than a given amount (`n` gigabytes), the value is a percentage of the installed RAM, and is otherwise a percentage of `n`. The value of `n` is: 2 GB for 32-bit Windows, 4 GB for 64-bit Windows, 3.5 GB for Mac OS.

#### 参数

|         参数         | Type  |                    描述                    |
| ------------------------- | ----- | ------------------------------------------------- |
| `imageCachePercentage`    | Float | The percentage of memory assigned to image cache. |
| `maximumMemoryPercentage` | Float | The maximum usable percentage of memory.          |

#### 返回

Nothing.

---

### app.setMultiFrameRenderingConfig()

`app.setMultiFrameRenderingConfig(mfr_on, max_cpu_perc)`

:::note
该方法添加于 After Effects 22.0 (2022)
:::

#### 描述

Calling this function from a script will set the Multi-Frame Rendering configuration for the next render.
After execution of the script is complete, these settings will be reset to what was previously set in the UI.

#### 参数

|   参数    |                     类型                      |                                                 描述                                                  |
| -------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `mfr_on`       | Boolean                                       | Set to `true` to enable Multi-Frame Rendering.                                                               |
| `max_cpu_perc` | Floating-point value, 范围为 `[1..100]` | The maximum CPU percentage Multi-Frame Rendering should utilize. If `mfr_on` is set to `false`, pass in 100. |

#### 返回

Nothing.

---

### app.setSavePreferencesOnQuit()

`app.setSavePreferencesOnQuit(doSave)`

#### 描述

Set or clears the flag that determines whether preferences are saved when the application is closed.

#### 参数

| 参数 |  类型   |                            描述                             |
| --------- | ------- | ------------------------------------------------------------------ |
| `doSave`  | Boolean | When `true`, preferences saved on quit, when `false` they are not. |

#### 返回

Nothing.

---

### app.watchFolder()

`app.watchFolder(folder_object_to_watch)`

#### 描述

Starts a Watch Folder (network rendering) process pointed at a specified folder.

#### 参数

|        参数         |                                                类型                                                |     描述      |
| ------------------------ | -------------------------------------------------------------------------------------------------- | -------------------- |
| `folder_object_to_watch` | [Extendscript Folder](https://extendscript.docsforadobe.dev/file-system-access/folder-object.html) | The folder to watch. |

#### 返回

Nothing.

#### 示例

```javascript
var theFolder = new Folder("c:/tool");
app.watchFolder(theFolder);
```

#### See Also

- [app.endWatchFolder()](#appendwatchfolder)
- [app.parseSwatchFile()](#appparseswatchfile)
- [app.isWatchFolder](#appiswatchfolder)
