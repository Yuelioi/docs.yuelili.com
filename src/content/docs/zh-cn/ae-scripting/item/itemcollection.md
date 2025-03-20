---
title: itemcollection
---
# ItemCollection object

`app.project.items`

#### 描述

The ItemCollection object represents a collection of items. The ItemCollection belonging to a Project object contains all the Item objects for items in the project. The ItemCollection belonging to a FolderItem object contains all the Item objects for items in that folder.

:::info
ItemCollection is a subclass of [Collection object](../../other/collection). All methods and attributes of Collection, in addition to those listed below, are available when working with ItemCollection.
:::

---

## 函数

### ItemCollection.addComp()

`app.project.items.addComp(name, width, height, pixelAspect, duration, frameRate)`

#### 描述

Creates a new composition. Creates and returns a new CompItem object and adds it to this collection. If the ItemCollection belongs to the project or the root folder, then the new item's `parentFolder` is the root folder. If the ItemCollection belongs to any other folder, the new item's `parentFolder` is that `FolderItem`.

#### 参数

|   参数   |                        类型                         |                 描述                 |
| ------------- | --------------------------------------------------- | ------------------------------------------- |
| `name`        | String                                              | The name of the composition.                |
| `width`       | Integer, 范围为 `[4..30000]`                  | The width of the composition in pixels.     |
| `height`      | Integer, 范围为 `[4..30000]`                  | The height of the composition in pixels.    |
| `pixelAspect` | Floating-point value, 范围为 `[0.01..100.0]`  | The pixel aspect ratio of the composition.  |
| `duration`    | Floating-point value, 范围为 `[0.0..10800.0]` | The duration of the composition in seconds. |
| `frameRate`   | Floating-point value, 范围为 `[1.0..99.0]`    | The frame rate of the composition.          |

#### 返回

CompItem object.

---

### ItemCollection.addFolder()

`app.project.items.addFolder(name)`

#### 描述

Creates a new folder. Creates and returns a new FolderItem object and adds it to this collection. If the ItemCollection belongs to the project or the root folder, then the new folder's `parentFolder` is the root folder. If the ItemCollection belongs to any other folder, the new folder's `parentFolder` is that `FolderItem`. To put items in the folder, set the [Item.parentFolder](item.md#itemparentfolder) attribute

#### 参数

| 参数 |  类型  |       描述       |
| --------- | ------ | ----------------------- |
| `name`    | String | The name of the folder. |

#### 返回

FolderItem object.

#### 示例

This script creates a new FolderItem in the Project panel and moves compositions into it.

```javascript
//create a new FolderItem in project, with name "comps"
var compFolder = app.project.items.addFolder("comps");
//move all compositions into new folder by setting
//comp Item's parentFolder to "comps" folder
for (var i = 1; i <= app.project.numItems; i++) {
    if (app.project.item(i) instanceof CompItem) {
        app.project.item(i).parentFolder = compFolder;
    }
}
```
