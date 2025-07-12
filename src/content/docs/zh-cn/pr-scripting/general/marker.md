---
title: 标记对象
---
# 标记对象

`app.project.activeSequence.markers.getFirstMarker()`

`app.project.rootItem.children[index].getMarkers().getFirstMarker()`

#### 描述

[项目项](../../item/projectitem) 和 [序列](../../sequence/sequence) 都有与之关联的标记对象，这些对象表示它们关联的标记。

---

## 属性

### Marker.comments

`app.project.activeSequence.markers.getFirstMarker().comments`

`app.project.rootItem.children[index].getMarkers().getFirstMarker().comments`

#### 描述

标记中的注释内容。

#### 类型

字符串；可读写。

---

### Marker.end

`app.project.activeSequence.markers.getFirstMarker().end`

`app.project.rootItem.children[index].getMarkers().getFirstMarker().end`

#### 描述

一个 [时间对象](../../other/time)，包含标记结束的值。

#### 类型

[时间对象](../../other/time)；可读写。

---

### Marker.guid

`app.project.activeSequence.markers.getFirstMarker().guid`

`app.project.rootItem.children[index].getMarkers().getFirstMarker().guid`

#### 描述

标记的唯一标识符，在实例化时创建。

#### 类型

字符串；只读。

---

### Marker.name

`app.project.activeSequence.markers.getFirstMarker().name`

`app.project.rootItem.children[index].getMarkers().getFirstMarker().name`

#### 描述

标记的名称。

#### 类型

字符串；可读写。

---

### Marker.start

`app.project.activeSequence.markers.getFirstMarker().start`

`app.project.rootItem.children[index].getMarkers().getFirstMarker().start`

#### 描述

一个 [时间对象](../../other/time)，包含标记开始的值。

#### 类型

[时间对象](../../other/time)；可读写。

---

### Marker.type

`app.project.activeSequence.markers.getFirstMarker().type`

`app.project.rootItem.children[index].getMarkers().getFirstMarker().type`

#### 描述

标记的类型，可以是以下之一：

- `"Comment"`（注释）
- `"Chapter"`（章节）
- `"Segmentation"`（分段）
- `"WebLink"`（网页链接）

:::note
Premiere Pro 可以导入一些无法在 Premiere Pro 内部创建的标记类型。
:::

#### 类型

字符串；只读。

---

## 方法

### Marker.getColorByIndex()

`app.project.activeSequence.markers.getFirstMarker().getColorByIndex(index)`

`app.project.rootItem.children[index].getMarkers().getFirstMarker().getColorByIndex(index)`

:::note
此功能在 Adobe Premiere Pro 13.x 版本中添加。
:::

#### 描述

获取标记的颜色索引。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `index` | 整数 | 要读取的标记的索引。 |

#### 返回值

返回颜色索引，类型为整数。

---

### Marker.getWebLinkFrameTarget()

`app.project.activeSequence.markers.getFirstMarker().getWebLinkFrameTarget()`

`app.project.rootItem.children[index].getMarkers().getFirstMarker().getWebLinkFrameTarget()`

#### 描述

从标记的 FrameTarget 字段中检索帧目标。

#### 参数

无。

#### 返回值

返回包含帧目标的字符串，如果不成功则返回 `0`。

---

### Marker.getWebLinkURL()

`app.project.activeSequence.markers.getFirstMarker().getWebLinkURL()`

`app.project.rootItem.children[index].getMarkers().getFirstMarker().getWebLinkURL()`

#### 描述

从标记的 URL 字段中检索 URL。

#### 参数

无。

#### 返回值

返回包含 URL 的字符串，如果不成功则返回 `0`。

---

### Marker.setColorByIndex()

`app.project.activeSequence.markers.getFirstMarker().setColorByIndex(colorIndex, markerIndex)`

`app.project.rootItem.children[index].getMarkers().getFirstMarker().setColorByIndex(colorIndex, markerIndex)`

:::note
此功能在 Adobe Premiere Pro 13.x 版本中添加。
:::

#### 描述

按索引设置标记颜色。颜色索引如下：

- `0` = 绿色
- `1` = 红色
- `2` = 紫色
- `3` = 橙色
- `4` = 黄色
- `5` = 白色
- `6` = 蓝色
- `7` = 青色

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `colorIndex` | 整数 | 应用于标记的颜色索引。 |
| `markerIndex` | 整数 | 要设置的标记的索引。 |

#### 返回值

返回 `undefined`。

---

### Marker.setTypeAsChapter()

`app.project.activeSequence.markers.getFirstMarker().setTypeAsChapter()`

`app.project.rootItem.children[index].getMarkers().getFirstMarker().setTypeAsChapter()`

#### 描述

将标记的类型设置为 "Chapter"（章节）。

#### 参数

无。

#### 返回值

如果成功则返回 `0`。

---

### Marker.setTypeAsComment()

`app.project.activeSequence.markers.getFirstMarker().setTypeAsComment()`

`app.project.rootItem.children[index].getMarkers().getFirstMarker().setTypeAsComment()`

#### 描述

将标记的类型设置为 "Comment"（注释）。

#### 参数

无。

#### 返回值

如果成功则返回 `0`。

---

### Marker.setTypeAsSegmentation()

`app.project.activeSequence.markers.getFirstMarker().setTypeAsSegmentation()`

`app.project.rootItem.children[index].getMarkers().getFirstMarker().setTypeAsSegmentation()`

#### 描述

将标记的类型设置为 "Segmentation"（分段）。

#### 参数

无。

#### 返回值

如果成功则返回 `0`。

---

### Marker.setTypeAsWebLink()

`app.project.activeSequence.markers.getFirstMarker().setTypeAsWebLink()`

`app.project.rootItem.children[index].getMarkers().getFirstMarker().setTypeAsWebLink()`

#### 描述

将标记的类型设置为 "WebLink"（网页链接）。

#### 参数

无。

#### 返回值

如果成功则返回 `0`。

---
