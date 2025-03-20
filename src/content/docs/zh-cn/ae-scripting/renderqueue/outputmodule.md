---
title: outputmodule
---
# OutputModule object

`app.project.renderQueue.item(index).outputModule(index)`

#### 描述

An OutputModule object of a [RenderQueueItem](../renderqueueitem) generates a single file or sequence via a render operation, and contains attributes and methods relating to the file to be rendered.

---

## 属性

### OutputModule.file

`app.project.renderQueue.item(index).outputModule(index).file`

#### 描述

The [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) object for the file this output module is set to render.

#### 类型

[Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) object; read/write.

---

### OutputModule.includeSourceXMP

`app.project.renderQueue.item(index).outputModule(index).includeSourceXMP`

#### 描述

When `true`, writes all source footage XMP metadata to the output file. Corresponds to the Include Source XMP Metadata option in the Output Module Settings dialog box.

#### 类型

Boolean; read/write.

---

### OutputModule.name

`app.project.renderQueue.item(index).outputModule(index).name`

#### 描述

The name of the output module, as shown in the user interface.

#### 类型

String; 只读.

---

### OutputModule.postRenderAction

`app.project.renderQueue.item(index).outputModule(index).postRenderAction`

#### 描述

An action to be performed when the render operation is completed.

#### 类型

A `PostRenderAction` enumerated value (read/write); one of:

- `PostRenderAction.NONE`
- `PostRenderAction.IMPORT`
- `PostRenderAction.IMPORT_AND_REPLACE_USAGE`
- `PostRenderAction.SET_PROXY`

---

### OutputModule.templates

`app.project.renderQueue.item(index).outputModule(index).templates`

#### 描述

The names of all output-module templates available in the local installation of After Effects.

#### 类型

Array of strings; 只读.

---

## 函数

### OutputModule.applyTemplate()

`app.project.renderQueue.item(index).outputModule(index).applyTemplate(templateName)`

#### 描述

Applies the specified existing output-module template.

#### 参数

|   参数    |  类型  |               描述               |
| -------------- | ------ | --------------------------------------- |
| `templateName` | String | The name of the template to be applied. |

#### 返回

Nothing.

---

### OutputModule.getSetting()

`app.project.renderQueue.item(index).outputModule(index).getSetting()`

:::note
该方法添加于 After Effects 13.0 (CC 2014)
:::

#### 描述

Gets a specific setting for a given Output Module.

- Depreciated Source: [https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)
- Archived version: [https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)

#### 示例

See the example in [RenderQueueItem.getSetting()](renderqueueitem.md#renderqueueitemgetsetting) for structure reference.

---

### OutputModule.getSettings()

`app.project.renderQueue.item(index).outputModule(index).getSettings()`

:::note
该方法添加于 After Effects 13.0 (CC 2014)
:::

#### 描述

Gets all settings for a given Output Module.

- Depreciated Source: [https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)
- Archived version: [https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)

#### 示例

```javascript
// Get object that contains the string version of all current output module setting
// values of output module item 1 from render queue item 1.
// To get the values in the number format, use GetSettingsFormat.NUMBER as an argument.

var omItem1_all_str= app.project.renderQueue.item(1).outputModule(1).getSettings( GetSettingsFormat.STRING );

// Convert to JSON format so that it is human-readable.

var omItem1_all_str_json = omItem1_all_str.toSource();

// Get object that contains string version of settable output module setting values
// of output module item 1 from render queue item 1.
// If you want to get the values in the number format, use
// GetSettingsFormat.NUMBER_SETTABLE as an argument.

var omItem1_settable_str = app.project.renderQueue.item(1).outputModule(1).getSettings( GetSettingsFormat.STRING_SETTABLE );

// Currently, the format setting in the output module is not settable, but it
// is readable. The next line will tell you the current format of output module
// item 1 from render queue item 1.

var current_format = app.project.renderQueue.item(1).outputModule(1).getSettings(GetSettingsFormat.STRING).Format;

// This line will tell you the output module file info.

var current_omFileTempalte = app.project.renderQueue.item(1).outputModule(1).getSettings(GetSettingsFormat.STRING)["Output File Info"]["File Template"];
```

---

### OutputModule.remove()

`app.project.renderQueue.item(index).outputModule(index).remove()`

#### 描述

Removes this OutputModule object from the collection.

#### 参数

None.

#### 返回

Nothing.

---

### OutputModule.saveAsTemplate()

`app.project.renderQueue.item(index).outputModule(index).saveAsTemplate(name)`

#### 描述

Saves this output module as a template and adds it to the te mpl ate s array.

#### 参数

| 参数 |  类型  |          描述          |
| --------- | ------ | ----------------------------- |
| `name`    | String | The name of the new template. |

#### 返回

Nothing.

---

### OutputModule.setSetting()

`app.project.renderQueue.item(index).outputModule(index).setSetting()`

:::note
该方法添加于 After Effects 13.0 (CC 2014)
:::

#### 描述

Sets a specific setting for a given Output Module.

- Depreciated Source: [https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)
- Archived version: [https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)

#### 示例

See the example in [RenderQueueItem.setSetting()](renderqueueitem.md#renderqueueitemsetsetting) for structure reference.

---

### OutputModule.setSettings()

`app.project.renderQueue.item(index).outputModule(index).setSettings()`

:::note
该方法添加于 After Effects 13.0 (CC 2014)
:::

#### 描述

- Depreciated Source: [https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)
- Archived version: [https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)

:::warning
There is a bug that causes OutputModule object to be invalidated after the output module setting is modified, so you need to retrieve the Output Module again after you modify it.
:::

#### 示例

Get the settings from one item's output module and use them on another:

```javascript
// If you want to get the values in the number format, use
// GetSettingsFormat.NUMBER_SETTABLE as an argument.

var omItem1_settable_str = app.project.renderQueue.item(1).outputModule(1).getSettings( GetSettingsFormat.STRING_SETTABLE );

// Set output module item 1 of render queue item 2 with values that you get from
// output module 1 of render queue item 1

app.project.renderQueue.item(2).outputModule(1).setSettings( omItem1_settable_str );
```

Set output module item 1 of render queue item 3 with values that you create:

```javascript
var crop_data = {
    "Crop":        true,
    "Crop Bottom": 0,
    "Crop Left":   0,
    "Crop Right":  8,
    "Crop Top":    10
};

app.project.renderQueue.item(1).outputModule(3).setSettings( crop_data );
```

Route the output file to the user directory:

```javascript
var om1 = app.project.renderQueue.item(1).outputModule(1);
var file_name = File.decode( om1.file.name ); // Name contains special character, space?
var new_dir = new Folder( "~/new_output" );
var new_path = new_dir.fsName;

var new_data = {
    "Output File Info": {
        "Base Path":      new_path,
        "Subfolder Path": "draft",
        "File Name":      file_name
    }
};

om1.setSettings( new_data );
```

In this example, the output file is routed to the user directory, but this time using the full path:

```javascript
var om1 = app.project.renderQueue.item(1).outputModule(1);

// Name contains special character, such as space?
var file_name = File.decode( om1.file.name );
var new_path = "/Users/myAccount/new_output";
var separator = "/";

if ($.os.indexOf("Mac") == -1) {
    new_path = "C:\Users\myAccount\new_output";
    separator = "\\";
}

var new_data = {
    "Output File Info": {
        "Full Flat Path": new_path + separator + file_name
    }
};

om1.setSettings( new_data );
```
