---
title: footageitem
---
# FootageItem object

`app.project.item(index)`
`app.project.items[index]`

#### 描述

The FootageItem object represents a footage item imported into a project, which appears in the Project panel. These are accessed by position index number in a project's item collection.

:::info
FootageItem is a subclass of [AVItem object](../avitem), which is a subclass of [Item object](../item). All methods and attributes of AVItem and Item, in addition to those listed below, are available when working with FootageItem.
:::

---

## 属性

### FootageItem.file

`app.project.item(index).file`

#### 描述

The [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) object for the footage's source file.

If the FootageItem's `mainSource` is a FileSource, this is the same as [FootageItem.mainSource.file](../sources/filesource.md#filesourcefile). Otherwise it is `null`.

#### 类型

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) object; 只读.

---

### FootageItem.mainSource

`app.project.item(index).mainSource`

#### 描述

The footage source, an object that contains all of the settings related to that footage item, including those that are normally accessed through the Interpret Footage dialog box. The attribute is read-only. To change its value, call one of the FootageItem "replace" methods. See the [FootageSource object](../../sources/footagesource), and its three types:

- [SolidSource object](../../sources/solidsource)
- [FileSource object](../../sources/filesource)
- [PlaceholderSource object](../../sources/placeholdersource)

If this is a FileSource object, and the [footageMissing](avitem.md#avitemfootagemissing) value is `true`, the path to the missing footage file is in the [FileSource.missingFootagePath](../sources/filesource.md#filesourcemissingfootagepath) attribute.

#### 类型

[FootageSource object](../../sources/footagesource); 只读.

---

## 函数

### FootageItem.openInViewer()

`app.project.item(index).openInViewer()`

#### 描述

Opens the footage in a Footage panel, and moves the Footage panel to front and gives it focus.

:::tip
Missing and placeholder footage can be opened using this method, but cannot manually (via double-clicking it).
:::

#### 参数

None.

#### 返回

[Viewer object](../../other/viewer) for the Footage panel, or `null` if the footage could not be opened.

---

### FootageItem.replace()

`app.project.item(index).replace(file)`

#### 描述

Changes the source of this FootageItem to the specified file.

In addition to loading the file, the method creates a new FileSource object for the file and sets mainSource to that object. In the new source object, it sets the `name`, `width`, `height`, `frameDuration`, and `duration` attributes (see [AVItem object](../avitem)) based on the contents of the file.

The method preserves interpretation parameters from the previous `mainSource` object.

If the specified file has an unlabeled alpha channel, the method estimates the alpha interpretation.

#### 参数

| 参数 |                                                 类型                                                  |                   描述                   |
| --------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `file`    | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) object | The file to be used as the footage main source. |

---

### FootageItem.replaceWithPlaceholder()

`app.project.item(index).replaceWithPlaceholder(name, width, height, frameRate, duration)`

#### 描述

Changes the source of this FootageItem to the specified placeholder. Creates a new PlaceholderSource object, sets its values from the parameters, and sets `mainSource` to that object.

#### 参数

|  参数  |                        类型                         |                 描述                 |
| ----------- | --------------------------------------------------- | ------------------------------------------- |
| `name`      | String                                              | The name of the placeholder.                |
| `width`     | Integer, 范围为 `[4..30000]`                  | The width of the placeholder in pixels.     |
| `height`    | Integer, 范围为 `[4..30000]`                  | The height of the placeholder in pixels.    |
| `frameRate` | Floating-point value, 范围为 `[1.0..99.0]`    | The frame rate of the placeholder.          |
| `duration`  | Floating-point value, 范围为 `[0.0..10800.0]` | The duration of the placeholder in seconds. |

---

### FootageItem.replaceWithSequence()

`app.project.item(index).replaceWithSequence(file, forceAlphabetical)`

#### 描述

Changes the source of this FootageItem to the specified image sequence.

In addition to loading the file, the method creates a new FileSource object for the file and sets `mainSource` to that object. In the new source object, it sets the `name`, `width`, `height`, `frameDuration`, and `duration` attributes (see [AVItem object](../avitem)) based on the contents of the file.

The method preserves interpretation parameters from the previous `mainSource` object. If the specified file has an unlabeled alpha channel, the method estimates the alpha interpretation.

#### 参数

|      参数      |                                                 类型                                                  |                              描述                              |
| ------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `file`              | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) object | The first file in the sequence to be used as the footage main source. |
| `forceAlphabetical` | Boolean                                                                                               | When `true`, use the "Force alphabetical order" option.               |

---

### FootageItem.replaceWithSolid()

`app.project.item(index).replaceWithSolid(color, name, width, height, pixelAspect)`

#### 描述

Changes the source of this FootageItem to the specified solid. Creates a new SolidSource object, sets its values from the parameters, and sets `mainSource` to that object.

#### 参数

|   参数   |                                     类型                                      |             描述              |
| ------------- | ----------------------------------------------------------------------------- | ------------------------------------ |
| `color`       | Array of three floating-point values, `[R, G, B]`, 范围为 `[0.0..1.0]`. | The color of the solid.              |
| `name`        | String                                                                        | The name of the solid.               |
| `width`       | Integer, 范围为 `[4..30000]`                                            | The width of the solid in pixels.    |
| `height`      | Integer, 范围为 `[4..30000]`                                            | The height of the solid in pixels.   |
| `pixelAspect` | Floating-point value, 范围为 `[0.01..100.0]`                            | The pixel aspect ratio of the solid. |
