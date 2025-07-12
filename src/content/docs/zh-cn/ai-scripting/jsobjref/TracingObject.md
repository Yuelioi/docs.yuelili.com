---
title: TracingObject
---
# TracingObject

`TracingObject`

#### 描述

一个追踪对象，它将源栅格艺术项与通过追踪创建的矢量艺术插件组关联起来。脚本可以使用 [PlacedItem.trace](../PlacedItem#placeditemtrace) 或 [RasterItem.trace()](../RasterItem#rasteritemtrace) 来启动追踪。

生成的 PluginItem 对象代表矢量艺术组，并在其追踪属性中包含此对象。

脚本可以通过调用 [Application.redraw()](../Application#applicationredraw) 强制进行追踪操作。该操作是异步的，因此脚本应在创建追踪对象后但在访问其属性或扩展追踪以将其转换为艺术项组之前调用 `redraw`。

描述追踪结果的只读属性仅在第一次追踪操作完成后才具有有效值。值为 0 表示操作尚未完成。

---

## 属性

### TracingObject.anchorCount

`tracingObject.anchorCount`

#### 描述

追踪结果中的锚点数量。

#### 类型

Number (long); 只读。

---

### TracingObject.areaCount

`tracingObject.areaCount`

#### 描述

追踪结果中的区域数量。

#### 类型

Number (long); 只读。

---

### TracingObject.imageResolution

`tracingObject.imageResolution`

#### 描述

源图像的分辨率，单位为每英寸像素数。

#### 类型

Number (real); 只读。

---

### TracingObject.parent

`tracingObject.parent`

#### 描述

对象的容器。

#### 类型

Object; 只读。

---

### TracingObject.pathCount

`tracingObject.pathCount`

#### 描述

追踪结果中的路径数量。

#### 类型

Number (long); 只读。

---

### TracingObject.sourceArt

`tracingObject.sourceArt`

#### 描述

用于创建关联矢量艺术插件组的栅格艺术。

#### 类型

[PlacedItem](.././PlacedItem) 或 [RasterItem](.././RasterItem)

---

### TracingObject.tracingOptions

`tracingObject.tracingOptions`

#### 描述

用于将栅格艺术作品转换为矢量艺术的选项。

#### 类型

[TracingOptions](.././TracingOptions)

---

### TracingObject.typename

`tracingObject.typename`

#### 描述

对象的类名。

#### 类型

String; 只读。

---

### TracingObject.usedColorCount

`tracingObject.usedColorCount`

#### 描述

追踪结果中使用的颜色数量。

#### 类型

Number (long); 只读。

---

## 方法

### TracingObject.expandTracing()

`tracingObject.expandTracing([viewed])`

#### 描述

将矢量艺术转换为新的组项。新的 GroupItem 对象替换文档中的 PluginItem 对象。

默认情况下，`viewed` 为 `false`，新组仅包含追踪结果（填充或描边的路径）。

如果 `viewed` 为 `true`，新组将保留为查看模式指定的附加信息，例如轮廓和叠加。

删除此对象及其关联的 [PluginItem](.././PluginItem) 对象。应用于插件项的任何组级属性将应用于新组项的顶层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `viewed` | Boolean, 可选 | todo |

#### 返回值

[GroupItem](.././GroupItem)

---

### TracingObject.releaseTracing()

`tracingObject.releaseTracing()`

#### 描述

将文档中的艺术作品恢复为原始源栅格艺术并删除追踪的矢量艺术。返回用于创建追踪的原始对象，并删除此对象及其关联的 PluginItem 对象。

#### 参数

#### 返回值

[PlacedItem](.././PlacedItem) 或 [RasterItem](.././RasterItem)
