---
title: 轨道对象
---
# 轨道对象

`app.project.sequences[index].audioTracks[index]`

`app.project.sequences[index].videoTracks[index]`

#### 描述

轨道对象表示[序列对象](../sequence)中的视频或音频轨道。

---

## 属性

### Track.clips

`app.project.sequences[index].audioTracks[index].clips`

`app.project.sequences[index].videoTracks[index].clips`

#### 描述

轨道中包含的[轨道项](../../item/trackitem)对象数组，按时间顺序排列。

#### 类型

[轨道项集合对象](../../collection/trackitemcollection)，只读；

---

### Track.id

`app.project.sequences[index].audioTracks[index].id`

`app.project.sequences[index].videoTracks[index].id`

#### 描述

这是轨道创建时分配的序号。

#### 类型

整数，只读。

---

### Track.mediaType

`app.project.sequences[index].audioTracks[index].mediaType`

`app.project.sequences[index].videoTracks[index].mediaType`

#### 描述

轨道中包含的媒体类型。

#### 类型

字符串，只读。可能的值：

- `Audio`
- `Video`

---

### Track.name

`app.project.sequences[index].audioTracks[index].name`

`app.project.sequences[index].videoTracks[index].name`

#### 描述

轨道的名称。

#### 类型

字符串；只读。

---

### Track.transitions

`app.project.sequences[index].audioTracks[index].transitions`

`app.project.sequences[index].videoTracks[index].transitions`

#### 描述

轨道中包含的转场对象数组，按时间顺序排列。

#### 类型

[轨道项集合对象](../../collection/trackitemcollection)，只读；

---

## 方法

### Track.insertClip()

`app.project.sequences[index].audioTracks[index].insertClip(projectItem, time, vTrackIndex, aTrackIndex)`

`app.project.sequences[index].videoTracks[index].insertClip(projectItem, time, vTrackIndex, aTrackIndex)`

#### 描述

在指定时间向轨道添加一个“片段”（来自[项目项对象](../../item/projectitem)的媒体片段）。媒体将在该时间插入。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `projectItem` | [项目项对象](../../item/projectitem) | 从中获取媒体的项目项。 |
| `time` | 字符串 | 添加项目项的时间，以ticks为单位。 |
| `vTrackIndex` | 整数 | 插入视频的（从零开始的）轨道索引。 |
| `aTrackIndex` | 整数 | 插入音频的（从零开始的）轨道索引。 |

#### 返回值

无。

---

### Track.isMuted()

`app.project.sequences[index].audioTracks[index].isMuted()`

`app.project.sequences[index].videoTracks[index].isMuted()`

#### 描述

获取轨道的当前静音状态。

#### 参数

无。

#### 返回值

如果轨道当前静音，则返回`true`；否则返回`false`。

---

### Track.overwriteClip()

`app.project.sequences[index].audioTracks[index].overwriteClip(projectItem, time)`

`app.project.sequences[index].videoTracks[index].overwriteClip(projectItem, time)`

#### 描述

在指定时间向轨道添加一个“片段”（来自[项目项对象](../../item/projectitem)的媒体片段）。这将覆盖该时间点的任何现有媒体。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `projectItem` | [项目项对象](../../item/projectitem) | 从中获取媒体的项目项。 |
| `time` | 字符串 | 添加项目项的时间，以ticks为单位。 |

#### 返回值

返回`true`。

---

### Track.setMute()

`app.project.sequences[index].audioTracks[index].setMute(isMuted)`

`app.project.sequences[index].videoTracks[index].setMute(isMuted)`

#### 描述

设置轨道的静音状态。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `isMuted` | 整数 | 如果为`1`，则静音轨道。如果为`0`，则取消静音轨道。 |

#### 返回值

如果成功，则返回`0`。

---
