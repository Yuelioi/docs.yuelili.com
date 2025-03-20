---
title: project
---
# Project object

`app.project`

#### 描述

The project object represents an After Effects project. Attributes provide access to specific objects within the project, such as imported files or footage and compositions, and also to project settings such as the timecode base. Methods can import footage, create solids, compositions and folders, and save changes.

---

## 属性

### Project.activeItem

`app.project.activeItem`

#### 描述

The item that is currently active and is to be acted upon, or `null` if no item is currently selected or if multiple items are selected.

#### 类型

[Item object](../../item/item) or `null`; 只读.

---

### Project.bitsPerChannel

`app.project.bitsPerChannel`

#### 描述

The color depth of the current project, either 8, 16, or 32 bits.

#### 类型

Integer (8, 16, or 32 only); read/write.

---

### Project.compensateForSceneReferredProfiles

`app.project.compensateForSceneReferredProfiles`

:::note
该方法添加于 After Effects 16.0 (CC 2019)
:::

#### 描述

`true` if Compensate for Scene-referred Profiles should be enabled for this project; otherwise `false`.

#### 类型

Boolean; read/write.

---

### Project.dirty

`app.project.dirty`

:::note
该方法添加于 After Effects 17.5 (CC2020).
:::

:::warning
This method/property is officially undocumented and was found via research. The information here may be inaccurate, and this whole method/property may disappear or stop working some point. Please contribute if you have more information on it!
:::

#### 描述

`true` if the project has been modified from the last save; otherwise `false`.

"Dirty" projects will have an `*` in the project window title.

#### 类型

Boolean; 只读.

---

### Project.displayStartFrame

`app.project.displayStartFrame`

#### 描述

An alternate way of setting the Frame Count menu setting in the Project Settings dialog box to 0 or 1, and is equivalent to using the `FramesCountType.FC_START_0` or `FramesCountType.FC_START_1` enumerated values for the [framesCountType](#projectframescounttype).

#### 类型

Integer (0 or 1); read/write.

---

### Project.expressionEngine

`app.project.expressionEngine`

:::note
该方法添加于 After Effects 16.0 (CC 2019)
:::

#### 描述

The Expressions Engine setting in the Project Settings dialog box, as a string. One of:

- `extendscript`
- `javascript-1.0`

#### 类型

String; read/write.

---

### Project.feetFramesFilmType

`app.project.feetFramesFilmType`

#### 描述

The Use Feet + Frames menu setting in the Project Settings dialog box. Use this attribute instead of the old `timecodeFilmType` attribute.

#### 类型

A `FeetFramesFilmType` enumerated value; read/write. One of:

- `FeetFramesFilmType.MM16`
- `FeetFramesFilmType.MM35`

---

### Project.file

`app.project.file`

#### 描述

The [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) object for the file containing the project that is currently open.

#### 类型

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) object or `null` if project has not been saved; 只读.

---

### Project.footageTimecodeDisplayStartType

`app.project.footageTimecodeDisplayStartType`

#### 描述

The Footage Start Time setting in the Project Settings dialog box, which is enabled when Timecode is selected as the time display style.

#### 类型

A `FootageTimecodeDisplayStartType` enumerated value; read/write. One of:

- `FootageTimecodeDisplayStartType.FTCS_START_0`
- `FootageTimecodeDisplayStartType.FTCS_USE_SOURCE_MEDIA`

---

### Project.framesCountType

`app.project.framesCountType`

#### 描述

The Frame Count menu setting in the Project Settings dialog box.

#### 类型

A `FramesCountType` enumerated value; read/write. One of:

- `FramesCountType.FC_START_1`
- `FramesCountType.FC_START_0`
- `FramesCountType.FC_TIMECODE_CONVERSION`

:::warning
Setting this attribute to `FramesCountType.FC_TIMECODE_CONVERSION` resets the `displayStartFrame` attribute to 0.
:::

---

### Project.framesUseFeetFrames

`app.project.framesUseFeetFrames`

#### 描述

The "Use Feet + Frames" setting in the Project Settings dialog box.

`true` if using Feet + Frames; `false` if using Frames.

#### 类型

Boolean; read/write.

---

### Project.gpuAccelType

`app.project.gpuAccelType`

:::note
该方法添加于 After Effects 13.8 (CC 2015.3)
:::

#### 描述

Get or set the current projects GPU Acceleration option.
see [app.availableGPUAccelTypes](application.md#appavailablegpuacceltypes)

#### 类型

A `GpuAccelType` enumerated value; read/write. One of:

- `GpuAccelType.CUDA`
- `GpuAccelType.Metal`
- `GpuAccelType.OPENCL`
- `GpuAccelType.SOFTWARE`

#### 示例

```javascript
// access via scripting to Project Settings -> Video Rendering and Effects -> Use

var currentGPUSettings = app.project.gpuAccelType; // returns the current value
var type_str = "";

// check the current value and alert the user

switch (currentGPUSettings) {
    case GpuAccelType.CUDA:
        type_str = "CUDA";
        break;
    case GpuAccelType.METAL:
        type_str = "Metal";
        break;
    case GpuAccelType.OPENCL:
        type_str = "OpenCL";
        break;
    case GpuAccelType.SOFTWARE:
        type_str = "Software";
        break;
    default:
        type_str = "UNKNOWN";
}

alert("Your current setting is " + type_str);

// set the value to Metal
app.project.gpuAccelType = GpuAccelType.METAL;
```

---

### Project.items

`app.project.items`

#### 描述

All of the items in the project.

#### 类型

[ItemCollection object](../../item/itemcollection); 只读.

---

### Project.linearBlending

`app.project.linearBlending`

#### 描述

`true` if linear blending should be used for this project; otherwise `false`.

#### 类型

Boolean; read/write.

---

### Project.linearizeWorkingSpace

`app.project.linearizeWorkingSpace`

:::note
该方法添加于 After Effects 16.0 (CC 2019)
:::

#### 描述

`true` if Linearize Working Space should be enabled for this project; otherwise `false`.

#### 类型

Boolean; read/write.

---

### Project.numItems

`app.project.numItems`

#### 描述

The total number of items contained in the project, including folders and all types of footage.

#### 类型

Integer; 只读.

#### 示例

```javascript
var numItems = app.project.numItems;
alert("There are " + numItems + " items in this project.")
```

---

### Project.renderQueue

`app.project.renderQueue`

#### 描述

The [Render Queue](../../renderqueue/renderqueue) of the project.

#### 类型

[RenderQueue object](../../renderqueue/renderqueue); 只读.

---

### Project.revision

`app.project.revision`

#### 描述

The current revision of the project. Every user action increases the revision number. New project starts at revision 1.

#### 类型

Integer; the current revision version of the project; 只读.

---

### Project.rootFolder

`app.project.rootFolder`

#### 描述

The root folder containing the contents of the project; this is a virtual folder that contains all items in the Project panel, but not items contained inside other folders in the Project panel.

#### 类型

[FolderItem object](../../item/folderitem); 只读.

---

### Project.selection

`app.project.selection`

#### 描述

All items selected in the Project panel, in the sort order shown in the Project panel.

#### 类型

Array of [Item objects](../../item/item); 只读.

---

### Project.timeDisplayType

`app.project.timeDisplayType`

#### 描述

The time display style, corresponding to the Time Display Style section in the Project Settings dialog box.

#### 类型

A `TimeDisplayType` enumerated value; read/write. One of:

- `TimeDisplayType.FRAMES`
- `TimeDisplayType.TIMECODE`

---

### Project.toolType

`app.project.toolType`

:::note
该方法添加于 After Effects 14.0 (CC 2017)
:::

#### 描述

Get and sets the active tool in the Tools panel.

#### 类型

A `ToolType` enumerated value; read/write. One of:

- `ToolType.Tool_Arrow`: Selection Tool
- `ToolType.Tool_Rotate`: Rotation Tool
- `ToolType.Tool_CameraMaya`: Unified Camera Tool
- `ToolType.Tool_CameraOrbit`: Orbit Camera Tool
- `ToolType.Tool_CameraTrackXY`: Track XY Camera Tool
- `ToolType.Tool_CameraTrackZ`: Track Z Camera Tool
- `ToolType.Tool_Paintbrush`: Brush Tool
- `ToolType.Tool_CloneStamp`: Clone Stamp Tool
- `ToolType.Tool_Eraser`: Eraser Tool
- `ToolType.Tool_Hand`: Hand Tool
- `ToolType.Tool_Magnify`: Zoom Tool
- `ToolType.Tool_PanBehind`: Pan Behind (Anchor Point) Tool
- `ToolType.Tool_Rect`: Rectangle Tool
- `ToolType.Tool_RoundedRect`: Rounded Rectangle Tool
- `ToolType.Tool_Oval`: Ellipse Tool
- `ToolType.Tool_Polygon`: Polygon Tool
- `ToolType.Tool_Star`: Star Tool
- `ToolType.Tool_TextH`: Horizontal Type Tool
- `ToolType.Tool_TextV`: Vertical Type Tool
- `ToolType.Tool_Pen`: Pen Tool
- `ToolType.Tool_Feather`: Mask Feather Tool
- `ToolType.Tool_PenPlus`: Add Vertex Tool
- `ToolType.Tool_PenMinus`: Delete Vertex Tool
- `ToolType.Tool_PenConvert`: Convert Vertex Tool
- `ToolType.Tool_Pin`: Puppet Pin Tool
- `ToolType.Tool_PinStarch`: Puppet Starch Tool
- `ToolType.Tool_PinDepth`: Puppet Overlap Tool
- `ToolType.Tool_Quickselect`: Roto Brush Tool
- `ToolType.Tool_Hairbrush`: Refine Edge Tool

#### 示例

The following sample code checks the current tool, and if it is not the Unified Camera Tool, sets the current tool to that:

```javascript
// Check the current tool, then set it to Unified Camera Tool (UCT).
// Assume a composition is selected in the project.
var comp = app.project.activeItem;
if (comp instanceof CompItem) {
    // Add a camera to the current comp. (Requirement for UCT)
    var cameraLayer = comp.layers.addCamera("Test Camera", [comp.width / 2, comp.height / 2]);
    comp.openInViewer();

    // If the currently selected tool is not one of the camera tools, set it to UCT.
    if (( app.project.toolType !== ToolType.Tool_CameraMaya) &&
        ( app.project.toolType !== ToolType.Tool_CameraOrbit ) &&
        ( app.project.toolType !== ToolType.Tool_CameraTrackXY) &&
        ( app.project.toolType !== ToolType.Tool_CameraTrackZ)) {
            app.project.toolType = ToolType.Tool_CameraMaya;
        }
}
```

The following sample code uses the new app.project.toolType attribute to create a 360-degrees composition (environment layer and camera) from a selected footage item or composition selected in the Project panel. This script a good starting point for building VR compositions from equirectangular footage:

```javascript
// Create a 360 VR comp from a footage item or comp selected in the Project panel.

var item = app.project.activeItem;
if (item !== null && (item.typeName === "Footage" || item.typeName === "Composition")) {
    // Create a comp with the footage.
    var comp = app.project.items.addComp(item.name, item.width, item.height, item.pixelAspect, item.duration, item.frameRate);
    var layers = comp.layers;
    var footageLayer = layers.add(item);

    // Apply the CC Environment effect and create a camera.
    var effect = footageLayer.Effects.addProperty("CC Environment");
    var camera = layers.addCamera("360 Camera", [item.width / 2, item.height / 2]);
    comp.openInViewer();
    app.project.toolType = ToolType.Tool_CameraMaya;
} else {
    alert("Select a single footage item or composition in the Project panel.");
}
```

---

### Project.transparencyGridThumbnails

`app.project.transparencyGridThumbnails`

#### 描述

When `true`, thumbnail views use the transparency checkerboard pattern.

#### 类型

Boolean; read/write.

---

### Project.usedFonts

`app.project.usedFonts`

:::note
该方法添加于 After Effects 24.5
:::

#### 描述

Returns an Array of Objects containing references to used fonts and the Text Layers and times on which they appear in the current [Project](#project-object).

Each object is composed of `font` which is a [Font object](../../text/fontobject), and `usedAt` which is an Array of Objects, each composed of `layerID`, a [Layer.id](../layer/layer.md#layerid), and `layerTimeD` for when. See [Project.layerByID()](#projectlayerbyid) to retrieve the layers.

```javascript
var usedList = app.project.usedFonts;
if (usedList.length) {
    var font = usedList[0].font;
    var usedAt = usedList[0].usedAt;

    var str = "[0]:" + font.postScriptName + "\n";
    for (var i = 0; i < usedAt.length; i++) {
        var layerID = usedAt[i].layerID;
        // valueAtTime() for Source Text property is expecting timed
        // to be in Layer Time instead of Comp Time, unlike any of
        // the other properties. So we have adjusted the name returned
        // by usedFonts to make this clear as we expect that is where
        // it will be used next.
        var layerTimeD = usedAt[i].layerTimeD;

        var layer = app.project.layerByID(layerID);
        str += "    Layer:'" + String(layer.property("Source Text").valueAtTime(layerTimeD, false)) + "'\n";
    }
    alert(str);
}
```

#### 类型

Array of Objects; 只读.

---

### Project.workingGamma

`app.project.workingGamma`

#### 描述

The current project's working gamma value, either 2.2 or 2.4.

Setting values other than 2.2 or 2.4 will cause a scripting error.

:::tip
When the project's color working space is set, the working gamma value is ignored by After Effects.
:::

#### 类型

`2.2` or `2.4`; read/write.

#### 示例

- To set the working gamma to 2.4 (Rec. 709): `app.project.workingGamma = 2.4;`
- To get the current working gamma: `var currentGamma = app.project.workingGamma;`

---

### Project.workingSpace

`app.project.workingSpace`

#### 描述

A string which is the color profile description for the project's color working space. To set the working space to None, set `workingSpace` to an empty string.

Use `app.project.listColorProfiles()` to return an array of available color profile descriptions that can be used to set the color working space.

#### 类型

String; read/write.

#### 示例

- To set the working space to Rec.709 Gamma 2.4: `app.project.workingSpace = "Rec.709 Gamma 2.4";`
- To set the working space to None: `app.project.workingSpace = "";`
- To get the current working space: `var currentSpace = app.project.workingSpace;`

---

### Project.xmpPacket

`app.project.xmpPacket`

#### 描述

The project's XMP metadata, stored as RDF (XML-based). For more information on XMP, see the [JavaScript Tools Guide](https://extendscript.docsforadobe.dev/).

#### 类型

String; read/write.

#### 示例

The following example code accesses the XMP metadata of the current project, and modifies the Label project metadata field.

```javascript
var proj = app.project;

// load the XMPlibrary as an ExtendScript ExternalObject
if (ExternalObject.AdobeXMPScript === undefined){
    ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
}
var mdata = new XMPMeta(app.project.xmpPacket); //get the project's XMPmetadata
// update the Label project metadata's value
var schemaNS = XMPMeta.getNamespaceURI("xmp");
var propName = "xmp:Label";
try{
    mdata.setProperty(schemaNS, propName, "finalversion...no, really!");
} catch (e) {
    alert(e);
}

app.project.xmpPacket = mdata.serialize();
```

---

## 函数

### Project.autoFixExpressions()

`app.project.autoFixExpressions(oldText, newText)`

#### 描述

Automatically replaces text found in broken expressions in the project, if the new text causes the expression to evaluate without errors.

#### 参数

| 参数 |  类型  |     描述      |
| --------- | ------ | -------------------- |
| `oldText` | String | The text to replace. |
| `newText` | String | The new text.        |

#### 返回

Nothing.

---

### Project.close()

`app.project.close(closeOptions)`

#### 描述

Closes the project with the option of saving changes automatically, prompting the user to save changes or closing without saving changes.

#### 参数

|   参数    |        类型         |                                        描述                                        |
|----------------|---------------------|-------------------------------------------------------------------------------------------|
| `closeOptions` | `CloseOptions` enum | Action to be performed on close. One of:                                                  |
|                |                     | - `CloseOptions.DO_NOT_SAVE_CHANGES`: Close without saving.                               |
|                |                     | - `CloseOptions.PROMPT_TO_SAVE_CHANGES`: Prompt for whether to save changes before close. |
|                |                     | - `CloseOptions.SAVE_CHANGES`: Save automatically on close.                               |

#### 返回

Boolean. `true` on success. `false` if the file has not been previously saved, the user is prompted, and the user cancels the save.

---

### Project.consolidateFootage()

`app.project.consolidateFootage()`

#### 描述

Consolidates all footage in the project. Same as the File > Consolidate All Footage command.

#### 参数

None.

#### 返回

Integer; the total number of footage items removed.

---

### Project.importFile()

`app.project.importFile(importOptions)`

#### 描述

Imports the file specified in the specified ImportOptions object, using the specified options. Same as the File > Import File command.

Creates and returns a new FootageItem object from the file, and adds it to the project's items array.

#### 参数

|    参数    |                    类型                    |                               描述                                |
| --------------- | ------------------------------------------ | ------------------------------------------------------------------------ |
| `importOptions` | [ImportOptions](../../other/importoptions) | Options specifying the file to import and the options for the operation. |

#### 返回

[FootageItem object](../../item/footageitem).

#### 示例

```javascript
app.project.importFile(new ImportOptions(new File("sample.psd"));
```

---

### Project.importFileWithDialog()

`app.project.importFileWithDialog()`

#### 描述

Shows an Import File dialog box. Same as the File > Import > File command.

#### 返回

Array of [Item objects](../../item/item) created during import; or `null` if the user cancels the dialog box.

---

### Project.importPlaceholder()

`app.project.importPlaceholder(name, width, height, frameRate, duration)`

#### 描述

Creates and returns a new PlaceholderItem and adds it to the project's items array. Same as the File > Import > Placeholder command.

#### 参数

|  参数  |                        类型                         |                 描述                 |
| ----------- | --------------------------------------------------- | ------------------------------------------- |
| `name`      | String                                              | The name of the placeholder.                |
| `width`     | Integer, 范围为 `[4..30000]`                  | The width of the placeholder in pixels.     |
| `height`    | Integer, 范围为 `[4..30000]`                  | The height of the placeholder in pixels.    |
| `frameRate` | Floating-point value, 范围为 `[1.0..99.0]`    | The frame rate of the placeholder.          |
| `duration`  | Floating-point value, 范围为 `[0.0..10800.0]` | The duration of the placeholder in seconds. |

#### 返回

PlaceholderItem object.

---

### Project.item()

`app.project.item(index)`

#### 描述

Retrieves an item at a specified index position.

#### 参数

| 参数 |  类型   |                          描述                          |
| --------- | ------- | ------------------------------------------------------------- |
| `index`   | Integer | The index position of the item. The first item is at index 1. |

#### 返回

[Item object](../../item/item).

---

### Project.itemByID()

`app.project.itemByID(id)`

:::note
该方法添加于 After Effects 13.0 (CC 2014)
:::

#### 描述

Retrieves an item by its [Item ID](../item/item.md#itemid)

#### 参数

| 参数 |  类型   |    描述    |
| --------- | ------- | ----------------- |
| `id`      | Integer | The ID of an item |

#### 返回

[Item object](../../item/item).

---

### Project.layerByID()

`app.project.layerByID(id)`

:::note
该方法添加于 After Effects 22.0 (2022)
:::

#### 描述

Instance method on Project which, when given a valid ID value, returns the Layer object in the Project with that given ID.

#### 参数

| 参数 |          类型          |                      描述                      |
| --------- | ---------------------- | ----------------------------------------------------- |
| `id`      | Integer (non-negative) | The ID of the Layer to be retrieved from the Project. |

#### 返回

[Layer object](../../layer/layer) with the given ID if it exists on the project; otherwise null. Non-valid IDs will throw an exception stating that the input parameter is not an unsigned integer.

#### 示例

```javascript
var firstComp = app.project.item(1);
var firstLayer = firstComp.layer(1);
var layerID = firstLayer.id;

if (app.project.layerByID(layerID) === firstLayer) {
    alert("You can get the Layer from the ID!");
}
```

---

### Project.listColorProfiles()

`app.project.listColorProfiles()`

#### 描述

Returns an array of color profile descriptions that can be set as the project's color working space.

#### 参数

None.

#### 返回

Array of strings.

---

### Project.reduceProject()

`app.project.reduceProject(array_of_items)`

#### 描述

Removes all items from the project except those specified. Same as the File > Reduce Project command.

#### 参数

|    参数     |                   类型                   |      描述      |
| ---------------- | ---------------------------------------- | --------------------- |
| `array_of_items` | Array of [Item objects](../../item/item) | The items to be kept. |

#### 返回

Integer; the total number of items removed.

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

Removes unused footage from the project. Same as the File > Remove Unused Footage command.

#### 参数

None.

#### 返回

Integer; the total number of FootageItem objects removed.

---

### Project.replaceFont()

`app.project.replaceFont(fromFont, toFont, [noFontLocking = false])`

:::note
该方法添加于 After Effects 24.5
:::

#### 描述

This function will replace all the usages of [Font object](../../text/fontobject) `fromFont` with [Font object](../../text/fontobject) `toFont`.

This operation exposes the same mechanism and policy used for automatic font replacement of missing or substituted fonts and is therefore a complete and precise replacement, even on [TextDocuments](../../text/textdocument) which have mixed styling, preserving the character range the `fromFont` was applied to.

This operation is not undoable.

The optional parameter `noFontLocking` controls what happens when the `toFont` has no glyphs for the text it is applied to. By default a fallback font will be selected which will have the necessary glyphs, but if this parameter is set to `true` then this fallback will not take place and missing glyphs will result. There is no way at the current time to detect or report this.

Note that when `fromFont` is a substituted font and the `toFont` has the same font properties no fallback can occur and the parameter is ignored and treated as `true`.

```javascript
var fromFont = app.project.usedFonts[0].font;
var fontList = app.fonts.getFontsByPostScriptName("TimesNewRomanPSMT");
var toFont = fontList[0];
var layerChanged = app.project.replaceFont(fromFont, toFont);
```

#### 参数

|    参数    |                 类型                 |          描述          |
| --------------- | ------------------------------------ | ----------------------------- |
| `fromFont`      | [Font object](../../text/fontobject) | Font to be replaced.          |
| `toFont`        | [Font object](../../text/fontobject) | Font to replace it with.      |
| `noFontLocking` | Boolean                              | Optional. Defaults to `false` |

#### 返回

Boolean. `true` if at least one Layer was changed.

---

### Project.save()

`app.project.save([file])`

#### 描述

Saves the project. The same as the File > Save or File > Save As command. If the project has never previously been saved and no file is specified, prompts the user for a location and file name.

Pass a [File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) object to save a project to a new file without prompting.

#### 参数

| 参数 |                                              类型                                              |         描述         |
| --------- | ---------------------------------------------------------------------------------------------- | --------------------------- |
| `file`    | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) | Optional. The file to save. |

#### 返回

None.

---

### Project.saveWithDialog()

`app.project.saveWithDialog()`

#### 描述

Shows the Save dialog box. The user can name a file with a location and save the project, or click Cancel to exit the dialog box.

#### 参数

None.

#### 返回

Boolean; `true` if the project was saved.

---

### Project.setDefaultImportFolder()

`app.project.setDefaultImportFolder(folder)`

#### 描述

Sets the folder that will be shown in the file import dialog. This location will be used as an override until setDefaultImportFolder() is called with no parameters, or until After Effects is quit.

#### 参数

| 参数 |                                                类型                                                |       描述        |
| --------- | -------------------------------------------------------------------------------------------------- | ------------------------ |
| `folder`  | [Extendscript Folder](https://extendscript.docsforadobe.dev/file-system-access/folder-object.html) | Folder to set as default |

#### 返回

Boolean; indicates if the operation was successful.

#### 示例

Any of the following will set the default import folder to C:/My Folder:

- `var myFolder = new Folder("C:/My Folder"); app.project.setDefaultImportFolder(myFolder);`
- `app.project.setDefaultImportFolder(new Folder("C:/My Folder"));`
- `app.project.setDefaultImportFolder(Folder("C:/My Folder"));`

Note: if the path refers to an existing file and not a folder, the Folder function returns a File object instead of a Folder object, which will cause `setDefaultImportFolder()` to return `false`.

To set the default import folder to the current user's desktop folder: `app.project.setDefaultImportFolder(Folder.desktop);`

To disable the default folder, call `setDefaultImportFolder()` with no parameters: `app.project.setDefaultImportFolder();`

---

### Project.showWindow()

`app.project.showWindow(doShow)`

#### 描述

Shows or hides the Project panel.

#### 参数

| 参数 |  类型   |                                描述                                 |
| --------- | ------- | -------------------------------------------------------------------------- |
| `doShow`  | Boolean | When `true`, show the Project panel. When `false`, hide the Project panel. |

#### 返回

Nothing.

---

## Team Projects

### Project.newTeamProject()

`app.project.newTeamProject(teamProjectName, description)`

:::note
该方法添加于 After Effects 14.2 (CC 2017.1)
:::

#### 描述

Creates a new team project.

#### 参数

|     参数     |  类型  |          描述          |
| ----------------- | ------ | ----------------------------- |
| `teamProjectName` | String | Team project name             |
| `description`     | String | Optional. Project description |

#### 返回

Boolean. `true` if the team project is successfully created, otherwise `false`.

---

### Project.openTeamProject()

`app.project.openTeamProject(teamProjectName)`

:::note
该方法添加于 After Effects 14.2 (CC 2017.1)
:::

#### 描述

Opens a team project.

#### 参数

|     参数     |  类型  |    描述    |
| ----------------- | ------ | ----------------- |
| `teamProjectName` | String | Team project name |

#### 返回

Boolean. `true` if the team project is successfully opened, otherwise `false`.

---

### Project.shareTeamProject()

`app.project.shareTeamProject(comment)`

:::note
该方法添加于 After Effects 14.2 (CC 2017.1)
:::

#### 描述

Shares the currently open team project.

#### 参数

| 参数 |  类型  |    描述     |
| --------- | ------ | ------------------ |
| `comment` | String | Optional. Comment. |

#### 返回

Boolean. `true` if the team project is successfully shared, otherwise `false`.

---

### Project.syncTeamProject()

`app.project.syncTeamProject()`

:::note
该方法添加于 After Effects 14.2 (CC 2017.1)
:::

#### 描述

Syncs the currently open team project.

#### 返回

Boolean. `true` if the team project is successfully synced, otherwise `false`.

---

### Project.closeTeamProject()

`app.project.closeTeamProject()`

:::note
该方法添加于 After Effects 14.2 (CC 2017.1)
:::

#### 描述

Closes a currently open team project.

#### 返回

Boolean. `true` if the team project is successfully closed, otherwise `false`.

---

### Project.convertTeamProjectToProject()

`app.project.convertTeamProjectToProject(project_file)`

:::note
该方法添加于 After Effects 14.2 (CC 2017.1)
:::

#### 描述

Converts a team project to an After Effects project on a local disk.

#### 参数

|   参数    |                                              类型                                              |                                               描述                                               |
| -------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `project_file` | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) | The local After Effects project. File extension should be either .aep or .aet (.aepx is not supported). |

#### 返回

Boolean. `true` if the team project is successfully converted, otherwise `false`.

---

### Project.listTeamProjects()

`app.project.listTeamProjects()`

:::note
该方法添加于 After Effects 14.2 (CC 2017.1)
:::

#### 描述

Returns an array containing the name strings for all team projects available for the current user.
Archived Team Projects are not included.

#### 返回

Array of strings.

---

### Project.isTeamProjectOpen()

`app.project.isTeamProjectOpen(teamProjectName)`

:::note
该方法添加于 After Effects 14.2 (CC 2017.1)
:::

#### 描述

Checks whether specified team project is currently open.

#### 参数

|     参数     |  类型  |    描述    |
| ----------------- | ------ | ----------------- |
| `teamProjectName` | String | Team project name |

#### 返回

Boolean. `true` if the specified team project is currently open, otherwise `false`.

---

### Project.isAnyTeamProjectOpen()

`app.project.isAnyTeamProjectOpen()`

:::note
该方法添加于 After Effects 14.2 (CC 2017.1)
:::

#### 描述

Checks whether any team project is currently open.

#### 返回

Boolean. `true` if any team project is currently open, otherwise `false`.

---

### Project.isTeamProjectEnabled()

`app.project.isTeamProjectEnabled()`

:::note
该方法添加于 After Effects 14.2 (CC 2017.1)
:::

#### 描述

Checks whether or not team project is enabled for After Effects. (This will almost always return `true`.)

#### 返回

Boolean. `true` if team project is currently enabled, otherwise `false`.

---

### Project.isLoggedInToTeamProject()

`app.project.isLoggedInToTeamProject()`

:::note
该方法添加于 After Effects 14.2 (CC 2017.1)
:::

#### 描述

Checks whether or not the client (After Effects) is currently logged into the team project server.

#### 返回

Boolean. `true` if the client (After Effects) is currently logged into the team projects server, otherwise `false`.

---

### Project.isSyncCommandEnabled()

`app.project.isSyncCommandEnabled()`

:::note
该方法添加于 After Effects 14.2 (CC 2017.1)
:::

#### 描述

Checks whether or not the Sync command is enabled.

#### 返回

Boolean. `true` if the team projects Sync command is enabled, otherwise `false`.

---

### Project.isShareCommandEnabled()

`app.project.isShareCommandEnabled()`

:::note
该方法添加于 After Effects 14.2 (CC 2017.1)
:::

#### 描述

Checks whether or not the Share command is enabled.

#### 返回

Boolean. `true` if the team projects Share command is enabled, otherwise `false`.

---

### Project.isResolveCommandEnabled()

`app.project.isResolveCommandEnabled()`

:::note
该方法添加于 After Effects 14.2 (CC 2017.1)
:::

#### 描述

Checks whether or not the Resolve command is enabled.

#### 返回

Boolean. `true` if the team projects Resolve command is enabled, otherwise `false`.

---

### Project.resolveConflict()

`app.project.resolveConflict(ResolveType)`

:::note
该方法添加于 After Effects 14.2 (CC 2017.1)
:::

#### 描述

Resolves a conflict between the open team project and the version on the team projects server, using the specified resolution method.

#### 参数

|   参数   |        类型        |                                                                      描述                                                                       |
|---------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ResolveType` | `ResolveType` enum | The type of conflict resolution to use. One of:                                                                                                        |
|               |                    | - `ResolveType.ACCEPT_THEIRS`: Take the shared version. The shared version replaces your version.                                                      |
|               |                    | - `ResolveType.ACCEPT_YOURS`: Keep your version of the project. The shared version is not taken.                                                       |
|               |                    | - `ResolveType.ACCEPT_THEIRS_AND_COPY`: Copy and rename your version, then take the shared version. The shared version replaces your original version. |

#### 返回

Boolean. `true` if the resolution of the specified type was successful, otherwise `false`.
