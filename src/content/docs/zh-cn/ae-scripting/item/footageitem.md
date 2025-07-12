---
title: 素材项目
---
# FootageItem 对象

`app.project.item(index)`
`app.project.items[index]`

#### 描述

FootageItem 对象表示导入项目中的素材项，这些素材项会显示在项目面板中。可以通过项目项集合中的位置索引号来访问它们。

:::info
FootageItem 是 [AVItem 对象](../avitem) 的子类，而 AVItem 又是 [Item 对象](../item) 的子类。除了下面列出的方法和属性外，使用 FootageItem 时还可以使用 AVItem 和 Item 的所有方法和属性。
:::

---

## 属性

### FootageItem.file

`app.project.item(index).file`

#### 描述

素材源文件的 [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 对象。

如果 FootageItem 的 `mainSource` 是 FileSource，则此属性与 [FootageItem.mainSource.file](../../sources/filesource#filesourcefile) 相同。否则为 `null`。

#### 类型

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 对象；只读。

---

### FootageItem.mainSource

`app.project.item(index).mainSource`

#### 描述

素材源，一个包含与该素材项相关的所有设置的对象，包括通常通过“解释素材”对话框访问的那些设置。该属性是只读的。要更改其值，请调用 FootageItem 的某个“替换”方法。请参阅 [FootageSource 对象](../../sources/footagesource) 及其三种类型：

- [SolidSource 对象](../../sources/solidsource)
- [FileSource 对象](../../sources/filesource)
- [PlaceholderSource 对象](../../sources/placeholdersource)

如果这是一个 FileSource 对象，并且 [footageMissing](../avitem#avitemfootagemissing) 值为 `true`，则缺失素材文件的路径位于 [FileSource.missingFootagePath](../../sources/filesource#filesourcemissingfootagepath) 属性中。

#### 类型

[FootageSource 对象](../../sources/footagesource)；只读。

---

## 函数

### FootageItem.openInViewer()

`app.project.item(index).openInViewer()`

#### 描述

在素材面板中打开素材，并将素材面板置于最前面并使其获得焦点。

:::tip
缺失和占位符素材可以使用此方法打开，但不能手动（通过双击）打开。
:::

#### 参数

无。

#### 返回

素材面板的 [Viewer 对象](../../other/viewer)，如果素材无法打开则返回 `null`。

---

### FootageItem.replace()

`app.project.item(index).replace(file)`

#### 描述

将此 FootageItem 的源更改为指定的文件。

除了加载文件外，该方法还会为该文件创建一个新的 FileSource 对象，并将 `mainSource` 设置为该对象。在新的源对象中，它会根据文件内容设置 `name`、`width`、`height`、`frameDuration` 和 `duration` 属性（请参阅 [AVItem 对象](../avitem)）。

该方法会保留之前 `mainSource` 对象的解释参数。

如果指定的文件具有未标记的 Alpha 通道，则该方法会估计 Alpha 解释。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `file` | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 对象 | 用作素材主源的文件。 |

---

### FootageItem.replaceWithPlaceholder()

`app.project.item(index).replaceWithPlaceholder(name, width, height, frameRate, duration)`

#### 描述

将此 FootageItem 的源更改为指定的占位符。创建一个新的 PlaceholderSource 对象，根据参数设置其值，并将 `mainSource` 设置为该对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 占位符的名称。 |
| `width` | 整数，范围为 `[4..30000]` | 占位符的宽度（以像素为单位）。 |
| `height` | 整数，范围为 `[4..30000]` | 占位符的高度（以像素为单位）。 |
| `frameRate` | 浮点值，范围为 `[1.0..99.0]` | 占位符的帧率。 |
| `duration` | 浮点值，范围为 `[0.0..10800.0]` | 占位符的持续时间（以秒为单位）。 |

---

### FootageItem.replaceWithSequence()

`app.project.item(index).replaceWithSequence(file, forceAlphabetical)`

#### 描述

将此 FootageItem 的源更改为指定的图像序列。

除了加载文件外，该方法还会为该文件创建一个新的 FileSource 对象，并将 `mainSource` 设置为该对象。在新的源对象中，它会根据文件内容设置 `name`、`width`、`height`、`frameDuration` 和 `duration` 属性（请参阅 [AVItem 对象](../avitem)）。

该方法会保留之前 `mainSource` 对象的解释参数。如果指定的文件具有未标记的 Alpha 通道，则该方法会估计 Alpha 解释。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `file` | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 对象 | 用作素材主源的序列中的第一个文件。 |
| `forceAlphabetical` | 布尔值 | 当为 `true` 时，使用“强制按字母顺序”选项。 |

---

### FootageItem.replaceWithSolid()

`app.project.item(index).replaceWithSolid(color, name, width, height, pixelAspect)`

#### 描述

将此 FootageItem 的源更改为指定的纯色。创建一个新的 SolidSource 对象，根据参数设置其值，并将 `mainSource` 设置为该对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `color` | 三个浮点值的数组，`[R, G, B]`，范围为 `[0.0..1.0]`。 | 纯色的颜色。 |
| `name` | 字符串 | 纯色的名称。 |
| `width` | 整数，范围为 `[4..30000]` | 纯色的宽度（以像素为单位）。 |
| `height` | 整数，范围为 `[4..30000]` | 纯色的高度（以像素为单位）。 |
| `pixelAspect` | 浮点值，范围为 `[0.01..100.0]` | 纯色的像素宽高比。 |
