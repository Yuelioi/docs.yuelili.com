---
title: avitem
---
# AVItem 对象

`app.project.item(index)`

#### 描述

AVItem 对象提供了对导入到 After Effects 中的音视频文件的属性和方法的访问。

:::info
AVItem 是 Item 的子类。除了下面列出的方法和属性外，Item 的所有方法和属性在处理 AVItem 时也可用。请参阅 [Item 对象](../item)。
:::

:::info
AVItem 是 CompItem 和 FootageItem 的基类，因此 AVItem 的属性和方法在处理 CompItem 和 FootageItem 对象时也可用。请参阅 [CompItem 对象](../compitem) 和 [FootageItem 对象](../footageitem)。
:::

:::warning
CompItems 和 FootageItems 虽然是 AVItem 的逻辑子类，但它们并不是 *真正的* AVItem 子类，因为 AVItem 在 Extendscript 中并不存在，即尝试检查 `item instanceof AVItem` 将会失败，因为 AVItem 是未定义的。对于 `Item` 本身也是如此。
:::

更多信息请参阅 [Javascript 类](../../introduction/javascript#javascript-classes) 和 [After Effects 类层次结构](../../introduction/classhierarchy)。

---

## 属性

### AVItem.duration

`app.project.item(index).duration`

#### 描述

返回项目的持续时间（以秒为单位）。静态素材项目的持续时间为 0。

- 在 CompItem 中，该值与合成的持续时间相关联，并且是可读写的。
- 在 FootageItem 中，该值与 `mainSource` 对象的 `duration` 相关联，并且是只读的。

#### 类型

浮点值，范围为 `[0.0..10800.0]`；对于 [CompItem](../../item/compitem) 是可读写的；否则为只读。

---

### AVItem.footageMissing

`app.project.item(index).footageMissing`

#### 描述

当为 `true` 时，AVItem 是一个占位符，或者表示源文件无法找到的素材。在这种情况下，缺失的源文件路径位于素材项目的源文件对象的 `missingFootagePath` 属性中。请参阅 [FootageItem.mainSource](../footageitem#footageitemmainsource) 和 [FileSource.missingFootagePath](../../sources/filesource#filesourcemissingfootagepath)。

#### 类型

布尔值；只读。

---

### AVItem.frameDuration

`app.project.item(index).frameDuration`

#### 描述

返回此 AVItem 的帧长度（以秒为单位）。这是 `frameRate` 的倒数。设置时，倒数会自动设置为新的 `frameRate` 值。此属性返回 `frameRate` 的倒数，可能与您设置的值不完全相同，如果该值不能均匀地除以 1.0（例如 0.3）。由于数值限制，(1 / (1 / 0.3)) 接近但不完全等于 0.3。如果 AVItem 是 FootageItem，则该值与 `mainSource` 相关联，并且是只读的。要更改它，请设置 `mainSource` 对象的 `conformFrameRate`。这将设置 FootageItem 的 `frameRate` 和 `frameDuration`。

#### 类型

浮点值，范围为 `[1/99..1.0]`；对于 [FootageItem](../../item/footageitem) 是只读的，否则为可读写。

---

### AVItem.frameRate

`app.project.item(index).frameRate`

#### 描述

AVItem 的帧速率，以每秒帧数为单位。这是 `frameDuration` 的倒数。设置时，倒数会自动设置为新的 `frameDuration` 值。

- 在 CompItem 中，该值与合成的 `frameRate` 相关联，并且是可读写的。
- 在 FootageItem 中，该值与 `mainSource` 对象的 `frameRate` 相关联，并且是只读的。要更改它，请设置 `mainSource` 对象的 `conformFrameRate`。这将设置 FootageItem 的 `frameRate` 和 `frameDuration`。

#### 类型

浮点值，范围为 `[1.0..99.0]`；对于 [FootageItem](../../item/footageitem) 是只读的，否则为可读写。

---

### AVItem.hasAudio

`app.project.item(index).hasAudio`

#### 描述

当为 `true` 时，AVItem 具有音频组件。

- 在 CompItem 中，该值与合成相关联。
- 在 FootageItem 中，该值与 `mainSource` 对象相关联。

#### 类型

布尔值；只读。

---

### AVItem.hasVideo

`app.project.item(index).hasVideo`

#### 描述

当为 `true` 时，AVItem 具有视频组件。

- 在 CompItem 中，该值与合成相关联。
- 在 FootageItem 中，该值与 `mainSource` 对象相关联。

#### 类型

布尔值；只读。

---

### AVItem.height

`app.project.item(index).height`

#### 描述

项目的高度（以像素为单位）。

- 在 CompItem 中，该值与合成相关联，并且是可读写的。
- 在 FootageItem 中，该值与 `mainSource` 对象相关联，并且仅在 `mainSource` 对象是 SolidSource 时可读写。否则为只读。

#### 类型

整数，范围为 `[1..30000]`；除非另有说明，否则为可读写。

---

### AVItem.isMediaReplacementCompatible

`app.project.item(index).isMediaReplacementCompatible`

:::note
该方法添加于 After Effects 18.0 (2021)
:::

#### 描述

测试 AVItem 是否可以在调用 [Property.setAlternateSource()](../../property/property#propertysetalternatesource) 时用作替代源。

如果项目可用，则返回 `true`，否则返回 `false`。

CompItem 或 FootageItem 可以用作图层的替代源，但有一些限制：

- 如果 AVItem 是 [FootageItem 对象](../footageitem)，则 FootageItem.FootageSource 不应该是 [SolidSource 对象](../../sources/solidsource)。
- 如果 AVItem 是 [FootageItem 对象](../footageitem) 并且 FootageItem.FootageSource 是 [FileSource 对象](../../sources/filesource)，则该 FileSource 不应指向非媒体文件，例如 JSX 脚本文件。
- 设置 AVItem 不能在项目中创建循环引用。

#### 类型

布尔值；只读。

---

### AVItem.name

`app.project.item(index).name`

#### 描述

项目的名称，如项目面板中所示。

- 在 FootageItem 中，该值与 `mainSource` 对象相关联。如果 `mainSource` 对象是 `FileSource`，则此值控制项目面板中的显示名称，但不会影响文件名。

#### 类型

字符串；可读写。

---

### AVItem.pixelAspect

`app.project.item(index).pixelAspect`

#### 描述

项目的像素宽高比 (PAR)。

- 在 CompItem 中，该值与合成相关联。
- 在 FootageItem 中，该值与 mainSource 对象相关联。

设置后检索的值可能与您提供的值略有不同。下表比较了 UI 中显示的值与此属性返回的更准确的值。

| After Effects UI 中的 PAR | pixelAspect 属性返回的 PAR |
| --- | --- |
| 0.91 | 0.909091 |
| 1 | 1 |
| 1.5 | 1.5 |
| 1.09 | 1.09402 |
| 1.21 | 1.21212 |
| 1.33 | 1.33333 |
| 1.46 | 1.45869 |
| 2 | 2 |

#### 类型

浮点值，范围为 `[0.01..100.0]`；可读写。

---

### AVItem.proxySource

`app.project.item(index).proxySource`

#### 描述

用作代理的 FootageSource。该属性是只读的；要更改它，请调用任何更改代理源的 AVItem 方法：`setProxy()`、`setProxyWithSequence()`、`setProxyWithSolid()` 或 `setProxyWithPlaceholder()`。

#### 类型

`FootageSource` 对象；只读。

---

### AVItem.time

`app.project.item(index).time`

#### 描述

项目从项目面板直接预览时的当前时间。该值以秒为单位。使用全局方法 [timeToCurrentFormat()](../../general/globals#timetocurrentformat) 将其转换为以帧表示时间的字符串值。对于 `mainSource` 是静态的 FootageItem（`item.mainSource.isStill` 为 `true`），设置此值是错误的。

#### 类型

浮点值；可读写。

---

### AVItem.usedIn

`app.project.item(index).usedIn`

#### 描述

所有使用此 AVItem 的合成。请注意，检索时，数组值会被复制，因此不会自动更新。如果您获取此值，然后将此项目添加到另一个合成中，则必须再次检索该值以获取包含新项目的数组。

#### 类型

CompItem 对象数组；只读。

---

### AVItem.useProxy

`app.project.item(index).useProxy`

#### 描述

当为 `true` 时，项目使用代理。所有 `SetProxy` 方法都会将其设置为 `true`，而 `SetProxyToNone()` 方法会将其设置为 `false`。

#### 类型

布尔值；可读写。

---

### AVItem.width

`app.project.item(index).width`

#### 描述

项目的宽度（以像素为单位）。

- 在 CompItem 中，该值与合成相关联，并且是可读写的。
- 在 FootageItem 中，该值与 `mainSource` 对象相关联，并且仅在 `mainSource` 对象是 SolidSource 时可读写。否则为只读。

#### 类型

整数，范围为 `[1..30000]`；除非另有说明，否则为可读写。

---

## 函数

### AVItem.setProxy()

`app.project.item(index).setProxy(file)`

#### 描述

将文件设置为此 AVItem 的代理。

将指定文件加载到新的 FileSource 对象中，将其设置为 `proxySource` 属性的值，并将 `useProxy` 设置为 `true`。

它不会保留解释参数，而是使用用户首选项。如果文件具有未标记的 alpha 通道，并且用户首选项设置为询问用户如何处理，则该方法会估计 alpha 解释，而不是询问用户。

这与设置 FootageItem 的 `mainSource` 不同，但这两个操作都像在用户界面中一样执行。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `file` | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 对象 | 用作代理的文件。 |

#### 返回

无。

---

### AVItem.setProxyToNone()

`app.project.item(index).setProxyToNone()`

#### 描述

从此 AVItem 中移除代理，将 `proxySource` 的值设置为 `null`，并将 `useProxy` 的值设置为 `false`。

#### 参数

无。

#### 返回

无。

---

### AVItem.setProxyWithPlaceholder()

`app.project.item(index).setProxyWithPlaceholder(name, width, height ,frameRate, duration)`

#### 描述

使用指定值创建一个 PlaceholderSource 对象，将其设置为 `proxySource` 属性的值，并将 `useProxy` 设置为 `true`。它不会保留解释参数，而是使用用户首选项。

:::note
在用户界面中没有直接的方法将占位符设置为代理；当代理已设置然后被移动或删除时，会发生此行为。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 新对象的名称。 |
| `width` | 整数, 范围为 `[4..30000]` | 占位符的像素尺寸。 |
| `height` | 整数, 范围为 `[4..30000]` | 占位符的像素尺寸。 |
| `frameRate` | 整数, 范围为 `[1..99]` | 代理的帧速率。 |
| `duration` | 整数, 范围为 `[0.0..10800.0]` | 总长度（以秒为单位），最多 3 小时。 |

#### 返回

无。

---

### AVItem.setProxyWithSequence()

`app.project.item(index).setProxyWithSequence(file,forceAlphabetical)`

#### 描述

将文件序列设置为此 AVItem 的代理，并可以选择强制按字母顺序排列。
将指定的文件序列加载到新的 FileSource 对象中，将其设置为 `proxySource` 属性的值，并将 `useProxy` 设置为 `true`。

它不会保留解释参数，而是使用用户首选项。
如果任何文件具有未标记的 alpha 通道，并且用户首选项设置为询问用户如何处理，则该方法会估计 alpha 解释，而不是询问用户。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `file` | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 对象 | 序列中的第一个文件。 |
| `forceAlphabetical` | 布尔值 | 当为 `true` 时，使用“强制按字母顺序排列”选项。 |

#### 返回

无。

---

### AVItem.setProxyWithSolid()

`app.project.item(index).setProxyWithSolid(color, name, width, height, pixelAspect)`

#### 描述

使用指定值创建一个 [SolidSource 对象](../../sources/solidsource)，将其设置为 `proxySource` 属性的值，并将 `useProxy` 设置为 `true`。它不会保留解释参数，而是使用用户首选项。

:::note
在用户界面中没有方法将纯色设置为代理；此功能仅通过脚本可用。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `color` | 三个浮点值的数组，`[R, G, B]`，范围为 `[0.0..1.0]`。 | 纯色的颜色。 |
| `name` | 字符串 | 新对象的名称。 |
| `width`, `height` | 整数, 范围为 `[1..30000]` | 占位符的像素尺寸。 |
| `pixelAspect` | 浮点值, 范围为 `[0.01..100.0]` | 纯色的像素宽高比。 |

#### 返回

无。
