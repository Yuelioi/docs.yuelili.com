---
title: 输出模块
---
# OutputModule 对象

`app.project.renderQueue.item(index).outputModule(index)`

#### 描述

[RenderQueueItem](../renderqueueitem) 的 OutputModule 对象通过渲染操作生成单个文件或序列，并包含与要渲染的文件相关的属性和方法。

---

## 属性

### OutputModule.file

`app.project.renderQueue.item(index).outputModule(index).file`

#### 描述

此输出模块设置为渲染的文件的 [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 对象。

#### 类型

[Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 对象；可读写。

---

### OutputModule.includeSourceXMP

`app.project.renderQueue.item(index).outputModule(index).includeSourceXMP`

#### 描述

当为 `true` 时，将所有源素材的 XMP 元数据写入输出文件。对应于输出模块设置对话框中的“包含源 XMP 元数据”选项。

#### 类型

布尔值；可读写。

---

### OutputModule.name

`app.project.renderQueue.item(index).outputModule(index).name`

#### 描述

输出模块的名称，如用户界面中所示。

#### 类型

字符串；只读。

---

### OutputModule.postRenderAction

`app.project.renderQueue.item(index).outputModule(index).postRenderAction`

#### 描述

渲染操作完成后要执行的操作。

#### 类型

`PostRenderAction` 枚举值（可读写）；可以是以下之一：

- `PostRenderAction.NONE`
- `PostRenderAction.IMPORT`
- `PostRenderAction.IMPORT_AND_REPLACE_USAGE`
- `PostRenderAction.SET_PROXY`

---

### OutputModule.templates

`app.project.renderQueue.item(index).outputModule(index).templates`

#### 描述

本地安装的 After Effects 中所有可用的输出模块模板的名称。

#### 类型

字符串数组；只读。

---

## 函数

### OutputModule.applyTemplate()

`app.project.renderQueue.item(index).outputModule(index).applyTemplate(templateName)`

#### 描述

应用指定的现有输出模块模板。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `templateName` | 字符串 | 要应用的模板名称。 |

#### 返回

无。

---

### OutputModule.getSetting()

`app.project.renderQueue.item(index).outputModule(index).getSetting()`

:::note
该方法添加于 After Effects 13.0 (CC 2014)
:::

#### 描述

获取给定输出模块的特定设置。

- 废弃来源：[https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)
- 存档版本：[https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)

#### 示例

请参阅 [RenderQueueItem.getSetting()](../renderqueueitem#renderqueueitemgetsetting) 中的示例以获取结构参考。

---

### OutputModule.getSettings()

`app.project.renderQueue.item(index).outputModule(index).getSettings()`

:::note
该方法添加于 After Effects 13.0 (CC 2014)
:::

#### 描述

获取给定输出模块的所有设置。

- 废弃来源：[https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)
- 存档版本：[https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)

#### 示例

```javascript
// 获取包含渲染队列项1的输出模块项1的所有当前输出模块设置值的字符串版本的对象。
// 要以数字格式获取值，请使用 GetSettingsFormat.NUMBER 作为参数。

var omItem1_all_str= app.project.renderQueue.item(1).outputModule(1).getSettings( GetSettingsFormat.STRING );

// 转换为 JSON 格式以便人类可读。

var omItem1_all_str_json = omItem1_all_str.toSource();

// 获取包含渲染队列项1的输出模块项1的可设置输出模块设置值的字符串版本的对象。
// 如果要获取数字格式的值，请使用 GetSettingsFormat.NUMBER_SETTABLE 作为参数。

var omItem1_settable_str = app.project.renderQueue.item(1).outputModule(1).getSettings( GetSettingsFormat.STRING_SETTABLE );

// 目前，输出模块中的格式设置不可设置，但可读取。
// 下一行将告诉您渲染队列项1的输出模块项1的当前格式。

var current_format = app.project.renderQueue.item(1).outputModule(1).getSettings(GetSettingsFormat.STRING).Format;

// 此行将告诉您输出模块的文件信息。

var current_omFileTempalte = app.project.renderQueue.item(1).outputModule(1).getSettings(GetSettingsFormat.STRING)["Output File Info"]["File Template"];
```

---

### OutputModule.remove()

`app.project.renderQueue.item(index).outputModule(index).remove()`

#### 描述

从集合中删除此 OutputModule 对象。

#### 参数

无。

#### 返回

无。

---

### OutputModule.saveAsTemplate()

`app.project.renderQueue.item(index).outputModule(index).saveAsTemplate(name)`

#### 描述

将此输出模块保存为模板并将其添加到模板数组中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 新模板的名称。 |

#### 返回

无。

---

### OutputModule.setSetting()

`app.project.renderQueue.item(index).outputModule(index).setSetting()`

:::note
该方法添加于 After Effects 13.0 (CC 2014)
:::

#### 描述

设置给定输出模块的特定设置。

- 废弃来源：[https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)
- 存档版本：[https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)

#### 示例

请参阅 [RenderQueueItem.setSetting()](../renderqueueitem#renderqueueitemsetsetting) 中的示例以获取结构参考。

---

### OutputModule.setSettings()

`app.project.renderQueue.item(index).outputModule(index).setSettings()`

:::note
该方法添加于 After Effects 13.0 (CC 2014)
:::

#### 描述

- 废弃来源：[https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)
- 存档版本：[https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)

:::warning
存在一个错误，导致在修改输出模块设置后 OutputModule 对象失效，因此在修改后需要重新获取输出模块。
:::

#### 示例

从一个项目的输出模块获取设置并将其应用于另一个项目：

```javascript
// 如果要获取数字格式的值，请使用 GetSettingsFormat.NUMBER_SETTABLE 作为参数。

var omItem1_settable_str = app.project.renderQueue.item(1).outputModule(1).getSettings( GetSettingsFormat.STRING_SETTABLE );

// 使用从渲染队列项1的输出模块1获取的值设置渲染队列项2的输出模块项1

app.project.renderQueue.item(2).outputModule(1).setSettings( omItem1_settable_str );
```

使用您创建的值设置渲染队列项3的输出模块项1：

```javascript
var crop_data = {
 "Crop": true,
 "Crop Bottom": 0,
 "Crop Left": 0,
 "Crop Right": 8,
 "Crop Top": 10
};

app.project.renderQueue.item(1).outputModule(3).setSettings( crop_data );
```

将输出文件路由到用户目录：

```javascript
var om1 = app.project.renderQueue.item(1).outputModule(1);
var file_name = File.decode( om1.file.name ); // 名称包含特殊字符，如空格？
var new_dir = new Folder( "~/new_output" );
var new_path = new_dir.fsName;

var new_data = {
 "Output File Info": {
 "Base Path": new_path,
 "Subfolder Path": "draft",
 "File Name": file_name
 }
};

om1.setSettings( new_data );
```

在此示例中，输出文件被路由到用户目录，但这次使用完整路径：

```javascript
var om1 = app.project.renderQueue.item(1).outputModule(1);

// 名称包含特殊字符，如空格？
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
