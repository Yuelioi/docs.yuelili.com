---
title: TrackItem 对象
---
# TrackItem 对象

`app.project.sequences[index].audioTracks[index].clips[index]`

`app.project.sequences[index].videoTracks[index].clips[index]`

#### 描述

TrackItem 对象表示 [Sequence 对象](../../sequence/sequence) 中视频或音频轨道上的一个项目。

---

## 属性

### TrackItem.components

`app.project.sequences[index].audioTracks[index].clips[index].components`

`app.project.sequences[index].videoTracks[index].clips[index].components`

#### 描述

与此 trackItem 关联的组件。可以包括固有变换以及视频和音频效果。

#### 类型

[ComponentCollection 对象](../../collection/componentcollection)，只读；

---

### TrackItem.duration

`app.project.sequences[index].audioTracks[index].clips[index].duration`

`app.project.sequences[index].videoTracks[index].clips[index].duration`

#### 描述

trackItem 的持续时间。

#### 类型

[Time 对象](../../other/time)，只读。

---

### TrackItem.end

`app.project.sequences[index].audioTracks[index].clips[index].end`

`app.project.sequences[index].videoTracks[index].clips[index].end`

#### 描述

trackItem 在序列中的可见结束时间，相对于其对应序列的开始时间（而不是序列的零点）。

:::note
这可能与 trackItem 的出点不同，出点是相对于源的。
:::

#### 类型

[Time 对象](../../other/time)，可读写。

---

### TrackItem.inPoint

`app.project.sequences[index].audioTracks[index].clips[index].inPoint`

`app.project.sequences[index].videoTracks[index].clips[index].inPoint`

#### 描述

为此 trackItem 实例设置的源入点，相对于源的开始时间。

#### 类型

[Time 对象](../../other/time)，可读写。

---

### TrackItem.matchName

`app.project.sequences[index].audioTracks[index].clips[index].matchName`

`app.project.sequences[index].videoTracks[index].clips[index].matchName`

#### 描述

*添加描述*

#### 类型

字符串；只读。

---

### TrackItem.mediaType

`app.project.sequences[index].audioTracks[index].clips[index].mediaType`

`app.project.sequences[index].videoTracks[index].clips[index].mediaType`

#### 描述

此 trackItem 提供的媒体类型。

#### 类型

字符串，可选值为：

- `"Audio"`
- `"Video"`

---

### TrackItem.name

`app.project.sequences[index].audioTracks[index].clips[index].name`

`app.project.sequences[index].videoTracks[index].clips[index].name`

#### 描述

trackItem 的名称。

#### 类型

字符串；可读写。

---

### TrackItem.nodeId

`app.project.sequences[index].audioTracks[index].clips[index].nodeId`

`app.project.sequences[index].videoTracks[index].clips[index].nodeId`

#### 描述

*添加描述*

#### 类型

字符串。

---

### TrackItem.outPoint

`app.project.sequences[index].audioTracks[index].clips[index].outPoint`

`app.project.sequences[index].videoTracks[index].clips[index].outPoint`

#### 描述

为此 TrackItem 实例设置的源出点，相对于源的开始时间。

#### 类型

[Time 对象](../../other/time)，可读写。

---

### TrackItem.projectItem

`app.project.sequences[index].audioTracks[index].clips[index].projectItem`

`app.project.sequences[index].videoTracks[index].clips[index].projectItem`

#### 描述

从中提取媒体的 [ProjectItem 对象](../projectitem)。

#### 类型

一个 [ProjectItem 对象](../projectitem)。

---

### TrackItem.start

`app.project.sequences[index].audioTracks[index].clips[index].start`

`app.project.sequences[index].videoTracks[index].clips[index].start`

#### 描述

trackItem 在序列中的可见开始时间，相对于其对应序列的开始时间（而不是序列的零点）。注意：这可能与 trackItem 的入点不同，入点是相对于源的。

#### 类型

[Time 对象](../../other/time)，可读写。

---

### TrackItem.type

`app.project.sequences[index].audioTracks[index].clips[index].type`

`app.project.sequences[index].videoTracks[index].clips[index].type`

#### 描述

此 trackItem 提供的媒体类型。

#### 类型

数字，`1` 表示视频，`2` 表示音频。

---

## 方法

### TrackItem.getMGTComponent()

`app.project.sequences[index].videotracks[index].getMGTComponent`

`app.project.sequences[index].audiotracks[index].getMGTComponent`

#### 描述

将 After Effects 动态图形模板（Mogrt）添加到指定时间的选定轨道中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `mogrtPath` | 字符串 | 有效的 .mogrt 文件的完整路径，该文件在 After Effects 中创建 |
| `targetTime`| 字符串 | 插入 .mogrt 的时间，以 ticks 为单位 |
| `vidTrackOffset` | 整数 | 从 0（第一个可用轨道）开始的偏移量，用于插入 .mogrt 中的视频 |
| `audTrackOffset` | 整数 | 从 0（第一个可用轨道）开始的偏移量，用于插入 .mogrt 中的音频 |

#### 返回值

表示 .mogrt 参数的 Component 对象，这些参数由创建者公开。

---

### TrackItem.getSpeed()

`app.project.sequences[index].audioTracks[index].clips[index].getSpeed()`

`app.project.sequences[index].videoTracks[index].clips[index].getSpeed()`

#### 描述

返回应用于 TrackItem 的速度倍数。

#### 参数

无。

#### 返回值

返回应用于 TrackItem 的速度倍数，作为浮点数。无速度调整 = `1`。

---

### TrackItem.isAdjustmentLayer()

`app.project.sequences[index].audioTracks[index].clips[index].isAdjustmentLayer()`

`app.project.sequences[index].videoTracks[index].clips[index].isAdjustmentLayer()`

#### 描述

返回 TrackItem 是否为调整图层。

#### 参数

无。

#### 返回值

如果 trackitem 是调整图层，则返回 `true`；否则返回 `false`。

---

### TrackItem.isSpeedReversed()mm

`app.project.sequences[index].audioTracks[index].clips[index].isSpeedReversed()`

`app.project.sequences[index].videoTracks[index].clips[index].isSpeedReversed()`

#### 描述

返回 trackItem 是否反转。

#### 参数

无。

#### 返回值

如果 TrackItem 反转，则返回 `1`；否则返回 `0`。

---

### TrackItem.isSelected()

`app.project.sequences[index].audioTracks[index].clips[index].isSelected()`

`app.project.sequences[index].videoTracks[index].clips[index].isSelected()`

#### 描述

获取 trackItem 的当前选择状态。

#### 参数

无。

#### 返回值

如果 trackItem 被选中，则返回 `true`；否则返回 `false`。

---

### TrackItem.setSelected()

`app.project.sequences[index].audioTracks[index].clips[index].setSelected(state, updateUI)`

`app.project.sequences[index].videoTracks[index].clips[index].setSelected(state, updateUI)`

#### 描述

设置 trackItem 的选择状态。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `state` | 整数 | 如果为 `1`，则 track item 将被选中；如果为 `0`，则将被取消选中。 |
| `updateUI`| 整数 | 如果为 `1`，则在调用此函数后更新 Premiere Pro 用户界面。 |

#### 返回值

如果成功，则返回 `0`。

---

### TrackItem.getMatchName()

`app.project.sequences[index].audioTracks[index].clips[index].getMatchName()`

`app.project.sequences[index].videoTracks[index].clips[index].getMatchName()`

#### 描述

获取 trackItem 的匹配名称。

#### 参数

无。

#### 返回值

如果成功，则返回匹配名称作为字符串。

---

### TrackItem.remove()

`app.project.sequences[index].audioTracks[index].clips[index].remove(inRipple, inAlignToVideo)`

`app.project.sequences[index].videoTracks[index].clips[index].remove(inRipple, inAlignToVideo)`

#### 描述

设置 trackItem 的选择状态。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `inRipple` | 布尔值 | 如果为 `1`，则后续的 track items 将向前移动以填补空白；如果为 `0`，则后续的 track items 将保持原位。 |
| `inAlignToVideo` | 布尔值 | 如果为 `1`，Premiere Pro 将移动的 track items 对齐到最近的视频帧的开始位置。 |

#### 返回值

如果成功，则返回 `0`。

---

### TrackItem.disabled

`app.project.sequences[index].audioTracks[index].clips[index].disabled`

`app.project.sequences[index].videoTracks[index].clips[index].disabled`

#### 描述

设置 TrackItem 的禁用状态。可读写。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `newDisableState` | 布尔值 | 如果为 `true`，则此 TrackItem 将被禁用；如果为 `false`，则 TrackItem 将被启用。 |

#### 返回值

如果成功，则返回 `0`。

---

### TrackItem.move()

`app.project.sequences[index].audioTracks[index].clips[index].move(newInPoint)`

`app.project.sequences[index].videoTracks[index].clips[index].move(newInPoint)`

#### 描述

通过将 track item 的入点移动指定的秒数，将其移动到新的时间。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `newInPoint` | [Time 对象](../../other/time) | 表示要移动 track item 开始时间的秒数的 Time 对象。 |

#### 返回值

如果成功，则返回 `0`。

---
