---
title: 序列对象
---
# 序列对象

`app.project.sequences[index]`

#### 描述

序列对象表示 Premiere Pro 中的媒体序列或“时间线”。

---

## 属性

### Sequence.audioDisplayFormat

`app.project.sequences[index].audioDisplayFormat`

#### 描述

序列的音频显示格式。

使用 [Sequence.setSettings()](#sequencesetsettings) 方法设置此属性。

#### 类型

枚举值；可读/写。取值为：

- `200` - 音频采样
- `201` - 毫秒

---

### Sequence.audioTracks

`app.project.sequences[index].audioTracks`

#### 描述

序列中的音频 [Track](../track) 对象数组。

#### 类型

[TrackCollection 对象](../../collection/trackcollection)；只读。

---

### Sequence.end

`app.project.sequences[index].end`

#### 描述

序列结束的时间，以 ticks 为单位。

#### 类型

字符串；只读。

---

### Sequence.frameSizeHorizontal

`app.project.sequences[index].frameSizeHorizontal`

#### 描述

序列的水平帧大小（宽度）。

使用 [Sequence.setSettings()](#sequencesetsettings) 方法设置此属性。

#### 类型

整数；只读。

---

### Sequence.frameSizeVertical

`app.project.sequences[index].frameSizeVertical`

#### 描述

序列的垂直帧大小（高度）。

使用 [Sequence.setSettings()](#sequencesetsettings) 方法设置此属性。

#### 类型

整数；只读。

---

### Sequence.id

`app.project.sequences[index].id`

#### 描述

这是序列创建时分配的序号。

如果这是在一个 Premiere Pro 会话中创建的第 33 个序列，则该值为 `33`。

:::note
在测试中，此属性似乎不稳定并产生不可靠的结果。建议使用 [Sequence.sequenceID](#sequencesequenceid) 代替。
:::

#### 类型

整数，只读。

---

### Sequence.markers

`app.project.sequences[index].markers`

#### 描述

序列中的 [Marker](../../general/marker) 对象数组。

#### 类型

[MarkerCollection 对象](../../collection/markercollection)，只读；

---

### Sequence.name

`app.project.sequences[index].name`

#### 描述

序列的名称。

#### 类型

字符串；可读/写。

---

### Sequence.projectItem

`app.project.sequences[index].projectItem`

#### 描述

与序列关联的 [ProjectItem 对象](../../item/projectitem)。

:::note
并非所有序列都有 `projectItem`。Premiere 可能会生成一些用户不可见的序列，这些序列没有 `projectItem`。
:::

#### 类型

[ProjectItem 对象](../../item/projectitem)；只读。

---

### Sequence.sequenceID

`app.project.sequences[index].sequenceID`

#### 描述

序列创建时分配的唯一标识符，格式为 `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`。

#### 类型

字符串；只读。

---

### Sequence.timebase

`app.project.sequences[index].timebase`

#### 描述

序列中每帧的 ticks 数。转换为秒后，通常称为序列的帧持续时间。

#### 类型

字符串；只读。

---

### Sequence.videoDisplayFormat

`app.project.sequences[index].videoDisplayFormat`

#### 描述

序列的视频显示格式。

使用 [Sequence.setSettings()](#sequencesetsettings) 方法设置此属性。

#### 类型

枚举值；可读/写。取值为：

- `100` - 24 时间码
- `101` - 25 时间码
- `102` - 29.97 Drop 时间码
- `103` - 29.97 Non-Drop 时间码
- `104` - 30 时间码
- `105` - 50 时间码
- `106` - 59.94 Drop 时间码
- `107` - 59.94 Non-Drop 时间码
- `108` - 60 时间码
- `109` - 帧
- `110` - 23.976 时间码
- `111` - 16mm 英尺 + 帧
- `112` - 35mm 英尺 + 帧
- `113` - 48 时间码

---

### Sequence.videoTracks

`app.project.sequences[index].videoTracks`

#### 描述

序列中的视频 [Track](../track) 对象数组。

#### 类型

[TrackCollection 对象](../../collection/trackcollection)；只读。

---

### Sequence.zeroPoint

`app.project.sequences[index].zeroPoint`

#### 描述

序列的起始时间，以 ticks 为单位。

使用 [Sequence.setZeroPoint()](#sequencesetzeropoint) 方法设置此属性。

#### 类型

字符串；只读。

---

## 方法

### Sequence.attachCustomProperty()

`app.project.sequences[index].attachCustomProperty(propertyID, propertyValue)`

#### 描述

将自定义属性及其值附加到序列。如果序列导出为 FCP XML，则此属性可见。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `propertyID` | 字符串 | 自定义属性的 ID。 |
| `propertyValue` | 字符串 | 自定义属性的值。 |

#### 返回值

返回布尔值；成功时为 `true`。

---

### Sequence.autoReframeSequence()

`app.project.sequences[index].autoReframeSequence(numerator, denominator, motionPreset, newName, useNestedSequences)`

#### 描述

生成一个新的自动重新帧序列。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `numerator` | 整数 | 所需帧宽高比的分子。 |
| `denominator` | 整数 | 所需帧宽高比的分母。 |
| `motionPreset` | 字符串 | 取值为： |
| | | - `slower` |
| | | - `default` |
| | | - `faster` |
| `newName` | 字符串 | 新创建序列的名称。 |
| `useNestedSequences` | 布尔值 | 是否尊重嵌套序列。 |

#### 返回值

新的 [Sequence 对象](#sequence-object)。

#### 示例

```javascript
var sequence = app.project.activeSequence;
if (sequence) {
 var numerator = 1;
 var denominator = 1;
 var motionPreset = 'default'; // 'default', 'faster', 'slower'
 var newName = sequence.name + ', auto-reframed.';
 var useNestedSequences = false;

 var newSequence = sequence.autoReframeSequence(numerator, denominator, motionPreset, newName, useNestedSequences);

 if (newSequence) {
 alert('Created reframed sequence: ' + newName + '.');
 } else {
 alert('Failed to create re-framed sequence: ' + newName + '.');
 }
} else {
 alert('No active sequence');
}
```

---

### Sequence.clone()

`app.project.sequences[index].clone()`

#### 描述

创建序列的克隆或副本。

#### 参数

无。

#### 返回值

布尔值；成功时为 `true`。

---

### Sequence.close()

`app.project.sequences[index].close()`

#### 描述

关闭序列。

#### 参数

无。

#### 返回值

布尔值；成功时为 `true`。

---

### Sequence.createCaptionTrack()

`app.project.sequences[index].createCaptionTrack(projectItem, startAtTime, [captionFormat])`

#### 描述

使用 [ProjectItem 对象](../../item/projectitem) 中的字幕数据在序列中创建字幕轨道。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `projectItem` | [ProjectItem 对象](../../item/projectitem) | 字幕源剪辑（例如 .srt 文件）。 |
| `startAtTime` | 浮点数 | 从序列开始的偏移时间（秒）。 |
| `captionFormat` | `Sequence.CAPTION_FORMAT_` 枚举 | 新轨道的字幕格式。可选，默认为 `Sequence.CAPTION_FORMAT_SUBTITLE`。取值为： |
| | | - `Sequence.CAPTION_FORMAT_SUBTITLE` - 字幕 |
| | | - `Sequence.CAPTION_FORMAT_608` - CEA-608 |
| | | - `Sequence.CAPTION_FORMAT_708` - CEA-708 |
| | | - `Sequence.CAPTION_FORMAT_TELETEXT` - 图文电视 |
| | | - `Sequence.CAPTION_FORMAT_OPEN_EBU` - EBU 字幕 |
| | | - `Sequence.CAPTION_FORMAT_OP42` - OP-42 |
| | | - `Sequence.CAPTION_FORMAT_OP47` - OP-47 |

#### 返回值

返回布尔值；成功时为 `true`。

#### 示例

```javascript
app.project.activeSequence.createCaptionTrack(projectItem, 0, Sequence.CAPTION_FORMAT_708);
```

---

### Sequence.createSubsequence()

`app.project.sequences[index].createSubsequence([ignoreTrackTargeting])`

#### 描述

从入点到出点创建一个新序列，该序列是原始序列的子序列。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `ignoreTrackTargeting` | 布尔值 | 新序列是否应忽略原始序列中的轨道目标。可选，默认为 `false` |

#### 返回值

返回新创建的 [Sequence 对象](#sequence-object)。

:::note
这与嵌套不同。新创建的序列不会插入回原始序列中。要进行嵌套，请参见下面的示例函数。
:::

#### 示例

```javascript
function nestSelection() {
 var activeSequence = app.project.activeSequence;
 var selection = activeSequence.getSelection();

 if (!selection.length) {
 return;
 }

 var trackId = selection[0].parentTrackIndex;
 var originalInPoint = activeSequence.getInPointAsTime();
 var originalOutPoint = activeSequence.getOutPointAsTime();
 var start = selection[0].start;
 var end = selection[selection.length - 1].end;
 activeSequence.setInPoint(start.seconds);
 activeSequence.setOutPoint(end.seconds);

 var nestedSequence = activeSequence.createSubsequence(true);

 activeSequence.videoTracks[trackId].overwriteClip(nestedSequence.projectItem, start.seconds);
 activeSequence.setInPoint(originalInPoint.seconds);
 activeSequence.setOutPoint(originalOutPoint.seconds);

 return nestedSequence;
}
```

---

### Sequence.exportAsFinalCutProXML()

`app.project.sequences[index].exportAsFinalCutProXML(outputPath)`

#### 描述

创建序列及其组成媒体的新 FCP XML 表示。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `outputPath` | 字符串 | 新 FCP XML 文件的输出路径。 |

#### 返回值

返回布尔值；成功时为 `true`。

---

### Sequence.exportAsMediaDirect()

`app.project.sequences[index].exportAsMediaDirect(outputPath, presetPath, workAreaType)`

#### 描述

使用指定的输出预设（.epr 文件）将序列渲染到指定的输出路径，并尊重指定的工作区域类型。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `outputPath` | 字符串 | 渲染媒体的输出路径。 |
| `presetPath` | 字符串 | 包含编码设置的预设文件（.epr 文件）的路径。 |
| `workAreaType` | 整数 | 要渲染的工作区域类型（见下文）。取值为： |
| | | - `0` - 渲染整个序列。 |
| | | - `1` - 渲染序列的入点和出点之间的部分。 |
| | | - `2` - 渲染序列的工作区域。 |

#### 返回值

返回布尔值；成功时为 `true`。

---

### Sequence.exportAsProject()

`app.project.sequences[index].exportAsProject(outputPath)`

#### 描述

创建一个新的 [Project 对象](../../general/project)，仅包含给定序列及其组成媒体。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `outputPath` | 字符串 | 新项目的输出路径。 |

#### 返回值

返回布尔值；成功时为 `true`。

---

### Sequence.getExportFileExtension()

`app.project.sequences[index].getExportFileExtension(outputPresetPath)`

#### 描述

检索与指定输出预设（.epr 文件）关联的文件扩展名。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `outputPresetPath` | 字符串 | 要使用的输出预设。 |

#### 返回值

返回字符串。

---

### Sequence.getInPoint()

`app.project.sequences[index].getInPoint()`

#### 描述

检索当前序列的入点（秒）。

#### 参数

无。

#### 返回值

返回字符串。

---

### Sequence.getInPointAsTime()

`app.project.sequences[index].getInPointAsTime()`

#### 描述

检索当前序列的入点。

#### 参数

无。

#### 返回值

返回 [Time 对象](../../other/time)。

---

### Sequence.getOutPoint()

`app.project.sequences[index].getOutPoint()`

#### 描述

检索当前序列的出点（秒）。

#### 参数

无。

#### 返回值

返回字符串。

---

### Sequence.getOutPointAsTime()

`app.project.sequences[index].getOutPointAsTime()`

#### 描述

检索当前序列的出点。

#### 参数

无。

#### 返回值

返回 [Time 对象](../../other/time)。

---

### Sequence.getPlayerPosition()

`app.project.sequences[index].getPlayerPosition()`

#### 描述

检索 CTI（当前时间指示器）的位置（ticks）。

#### 参数

无。

#### 返回值

返回 [Time 对象](../../other/time)。

---

### Sequence.getSelection()

`app.project.sequences[index].getSelection()`

#### 描述

序列中选定剪辑的 [Track item](../../item/trackitem) 对象数组，按时间顺序排列。

#### 参数

无。

#### 返回值

返回 [TrackItemCollection 对象](../../collection/trackitemcollection)。

---

### Sequence.getSettings()

`app.project.sequences[index].getSettings()`

#### 描述

获取当前序列的设置。

#### 参数

无。

#### 返回值

返回一个对象；序列设置结构。

| 属性 | 类型 | 描述 |
|---|---|---|
| `audioChannelCount` | 整数 | 序列中的音频通道数。 |
| `audioChannelType` | 整数 | 音频通道类型。取值为： |
| | | - `0` - 单声道 |
| | | - `1` - 立体声 |
| | | - `2` - 5.1 |
| | | - `3` - 多声道 |
| | | - `4` - 4 声道 |
| | | - `5` - 8 声道 |
| `audioDisplayFormat`| 整数 | 音频时间码显示格式。取值为： |
| | | - `200` - 音频采样 |
| | | - `201` - 毫秒 |
| `audioSampleRate` | [时间对象](../../other/time) | 音频采样率。 |
| `autoToneMapEnabled`| 布尔值 | 是否启用了自动色调映射媒体。 |
| `compositeLinearColor`| 布尔值 | 序列是否以线性颜色合成。 |
| `editingMode` | 字符串 | 编辑模式的 GUID。 |
| `maximumBitDepth` | 布尔值 | 序列是否以最大深度合成。 |
| `maximumRenderQuality`| 布尔值 | 序列是否以最高质量渲染。 |
| `previewCodec` | 字符串 | 使用的预览编解码器的四字符代码。 |
| `previewFrameWidth` | 整数 | 预览帧的宽度。 |
| `previewFrameHeight`| 整数 | 预览帧的高度。 |
| `previewFileFormat` | 整数 | 用于预览文件渲染的输出预设路径（.epr 文件）。 |
| `videoDisplayFormat`| 整数 | 视频时间显示格式。取值为： |
| | | - `100` - 24 时间码 |
| | | - `101` - 25 时间码 |
| | | - `102` - 29.97 丢帧时间码 |
| | | - `103` - 29.97 非丢帧时间码 |
| | | - `104` - 30 时间码 |
| | | - `105` - 50 时间码 |
| | | - `106` - 59.94 丢帧时间码 |
| | | - `107` - 59.94 非丢帧时间码 |
| | | - `108` - 60 时间码 |
| | | - `109` - 帧数 |
| | | - `110` - 23.976 时间码 |
| | | - `111` - 16mm 英尺 + 帧数 |
| | | - `112` - 35mm 英尺 + 帧数 |
| | | - `113` - 48 时间码 |
| `videoFieldType` | 整数 | 视频场类型。取值为： |
| | | - `-1` - 默认 |
| | | - `0` - 无场（逐行扫描） |
| | | - `1` - 上场优先 |
| | | - `2` - 下场优先 |
| `videoFrameHeight` | 整数 | 序列视频帧的高度。 |
| `videoFrameWidth` | 整数 | 序列视频帧的宽度。 |
| `videoPixelAspectRatio`| 字符串 | 像素宽高比。 |
| `vrHorzCapturedView`| 整数 | VR 的水平捕捉视角，单位为度。 |
| `vrVertCapturedView`| 整数 | VR 的垂直捕捉视角，单位为度。 |
| `vrLayout` | 整数 | 使用的素材布局，用于 VR。取值为： |
| | | - `0` - 单视 |
| | | - `1` - 立体 - 上下 |
| | | - `2` - 立体 - 左右 |
| `vrProjection` | 整数 | 使用的投影类型，用于 VR 素材。取值为： |
| | | - `0` - 无 |
| | | - `1` - 等距圆柱投影 |

---

### Sequence.getWorkAreaInPoint()

`app.project.sequences[index].getWorkAreaInPoint()`

#### 描述

获取当前序列工作区域的入点，单位为秒。

#### 参数

无。

#### 返回值

返回一个字符串。

---

### Sequence.getWorkAreaInPointAsTime()

`app.project.sequences[index].getWorkAreaInPointAsTime()`

#### 描述

获取当前序列工作区域的入点。

#### 参数

无。

#### 返回值

返回一个 [时间对象](../../other/time)。

---

### Sequence.getWorkAreaOutPoint()

`app.project.sequences[index].getWorkAreaOutPoint()`

#### 描述

获取当前序列工作区域的出点，单位为秒。

#### 参数

无。

#### 返回值

返回一个字符串。

---

### Sequence.getWorkAreaOutPointAsTime()

`app.project.sequences[index].getWorkAreaOutPointAsTime()`

#### 描述

获取当前序列工作区域的出点。

#### 参数

无。

#### 返回值

返回一个 [时间对象](../../other/time)。

---

### Sequence.importMGT()

`app.project.sequences[index].importMGT(path, time, vidTrackOffset, audTrackOffset)`

#### 描述

将 MOGRT 或 After Effects 动态图形模板导入到指定的视频或音频轨道，并在指定时间插入。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `path` | 字符串 | 有效的 MOGRT 文件的完整路径（.mogrt 文件），在 After Effects 中创建。 |
| `time` | 字符串 | 插入 .mogrt 的时间，单位为 ticks。 |
| `vidTrackOffset` | 整数 | 从第零个视频轨道开始的轨道偏移量，用于插入 .mogrt 内容。 |
| `audTrackOffset` | 整数 | 从第零个音频轨道开始的轨道偏移量，用于插入 .mogrt 内容。 |

#### 返回值

返回一个 [TrackItem 对象](../../item/trackitem)。

---

### Sequence.importMGTFromLibrary()

`app.project.sequences[index].importMGTFromLibrary(libraryName, mgtName, time, vidTrackOffset, audTrackOffset)`

#### 描述

从当前 Premiere Pro 用户的 Creative Cloud 库中导入 MOGRT 或 After Effects 动态图形模板，到指定的视频或音频轨道，并在指定时间插入。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `libraryName` | 字符串 | 库的名称（来自当前 PPro 用户的 Creative Cloud 库）。 |
| `mgtName` | 字符串 | 该库中的 .mogrt 名称。 |
| `time` | 字符串 | 插入 .mogrt 的时间，单位为 ticks。 |
| `vidTrackOffset` | 整数 | 从第零个视频轨道开始的轨道偏移量，用于插入 .mogrt 内容。 |
| `audTrackOffset` | 整数 | 从第零个音频轨道开始的轨道偏移量，用于插入 .mogrt 内容。 |

#### 返回值

返回一个 [TrackItem 对象](../../item/trackitem)。

---

### Sequence.insertClip()

`app.project.sequences[index].insertClip(projectItem, time, vTrackIndex, aTrackIndex)`

#### 描述

将剪辑插入到序列中，在指定的视频和音频轨道上，并在指定时间插入。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `projectItem` | [ProjectItem 对象](../../item/projectitem) | 从中获取媒体的项目项。 |
| `time` | 时间 | 添加项目项的时间。 |
| `vTrackIndex` | 整数 | 插入视频的（从零开始的）轨道索引。 |
| `aTrackIndex` | 整数 | 插入音频的（从零开始的）轨道索引。 |

#### 返回值

返回一个布尔值；成功时为 `true`。

---

### Sequence.isDoneAnalyzingForVideoEffects()

`app.project.sequences[index].isDoneAnalyzingForVideoEffects()`

#### 描述

返回序列是否已完成视频效果分析。

#### 参数

无。

#### 返回值

返回一个布尔值。

---

### Sequence.isWorkAreaEnabled()

`app.project.sequences[index].isWorkAreaEnabled()`

#### 描述

返回序列工作区域栏是否启用。

:::note
工作区域栏默认禁用。要启用它，请在序列汉堡菜单中勾选“工作区域栏”。
:::

#### 参数

无。

#### 返回值

返回一个布尔值。

---

### Sequence.linkSelection()

`app.project.sequences[index].linkSelection()`

#### 描述

链接序列中选定的视频和音频剪辑。

#### 参数

无。

#### 返回值

返回一个布尔值；成功时为 `true`。

---

### Sequence.overwriteClip()

`app.project.sequences[index].overwriteClip(projectItem, time, vTrackIndex, aTrackIndex)`

#### 描述

将剪辑插入到序列中，*覆盖现有剪辑*，在指定的视频和音频轨道上，并在指定时间插入。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `projectItem` | [ProjectItem 对象](../../item/projectitem) | 从中获取媒体的项目项。 |
| `time` | 字符串 | 添加项目项的时间，单位为秒。 |
| `vTrackIndex` | 整数 | 插入视频的（从零开始的）轨道索引。 |
| `aTrackIndex` | 整数 | 插入音频的（从零开始的）轨道索引。 |

#### 返回值

返回一个布尔值；成功时为 `true`。

---

### Sequence.performSceneEditDetectionOnSelection()

`app.project.sequences[index].performSceneEditDetectionOnSelection(actionDesired, applyCutsToLinkedAudio, sensitivity)`

#### 描述

对序列选择执行剪切检测。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `actionDesired` | 字符串 | 取值为： |
| | | - `CreateMarkers` |
| | | - `ApplyCuts` |
| `applyCutsToLinkedAudio` | 布尔值 | 是否将检测到的剪切应用于链接的音频。 |
| `sensitivity` | 字符串 | 取值为： |
| | | - `LowSensitivity` |
| | | - `MediumSensitivity` |
| | | - `HighSensitivity` |

#### 返回值

返回一个布尔值；成功时为 `true`。

---

### Sequence.setInPoint()

`app.project.sequences[index].setInPoint(time)`

#### 描述

设置新的序列入点。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `time` | 整数或 [时间对象](../../other/time) | 新的时间，单位为秒。 |

#### 返回值

无。

---

### Sequence.setOutPoint()

`app.project.sequences[index].setOutPoint(time)`

#### 描述

设置新的序列出点。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `time` | 整数或 [时间对象](../../other/time) | 新的时间，单位为秒。 |

#### 返回值

无。

---

### Sequence.setPlayerPosition()

`app.project.sequences[index].setPlayerPosition(time)`

#### 描述

设置序列中 CTI（当前时间指示器）的位置。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `time` | 字符串 | 新的时间，单位为 ticks。 |

#### 返回值

返回一个布尔值；成功时为 `true`。

---

### Sequence.setSettings()

`app.project.sequences[index].setSettings(sequenceSettings)`

#### 描述

设置当前序列的设置。*[编者注：我为任何可能的迂腐道歉；有时，显而易见的文档需要显而易见。 -bbb]*

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `sequenceSettings` | `对象` | 序列设置对象，通过 [Sequence.getSettings()](#sequencegetsettings) 获取。 |

#### 返回值

返回一个布尔值；成功时为 `true`。

---

### Sequence.setWorkAreaInPoint()

`app.project.sequences[index].setWorkAreaInPoint(time)`

#### 描述

设置新的序列工作区域入点。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `time` | 整数或 [时间对象](../../other/time) | 新的时间，单位为秒。 |

#### 返回值

返回一个布尔值；成功时为 `true`。

---

### Sequence.setWorkAreaOutPoint()

`app.project.sequences[index].setWorkAreaOutPoint(time)`

#### 描述

设置新的序列工作区域出点。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `time` | 整数或 [时间对象](../../other/time) | 新的时间，单位为秒。 |

#### 返回值

返回一个布尔值；成功时为 `true`。

---

### Sequence.unlinkSelection()

`app.project.sequences[index].unlinkSelection()`

#### 描述

取消链接序列中选定的视频和音频剪辑。

#### 参数

无。

#### 返回值

返回一个布尔值；成功时为 `true`。

---

### Sequence.setZeroPoint()

`app.project.sequences[index].setZeroPoint(newZeroPoint)`

#### 描述

设置序列的起始时间。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `newZeroPoint` | 字符串 | 新的零点，单位为 ticks。 |

#### 返回值

返回一个布尔值；成功时为 `true`。
