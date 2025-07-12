---
title: ProjectManager 对象
---
# ProjectManager 对象

`app.projectManager.options`

#### 描述

ProjectManager 对象暴露了 Premiere Pro 的项目管理器，用于项目整合、传输和转码。

---

## 属性

### ProjectManager.affectedSequences

`app.projectManager.options.affectedSequences`

#### 描述

一个 [Sequence](../../sequence/sequence) 对象的数组，表示要导出的序列。

#### 类型

数组；可读/可写。

---

### ProjectManager.clipTranscoderOption

`app.projectManager.options.clipTranscoderOption`

#### 描述

剪辑转码的指定设置。值将是以下之一：

- `CLIP_TRANSCODE_MATCH_PRESET` - 使用指定的预设进行转码。
- `CLIP_TRANSCODE_MATCH_CLIPS` - 匹配剪辑
- `CLIP_TRANSCODE_MATCH_SEQUENCE` - 匹配序列

#### 类型

字符串；可读/可写。

---

### ProjectManager.clipTransferOption

`app.projectManager.options.clipTransferOption`

#### 描述

剪辑传输的指定设置。值将是以下之一：

- `CLIP_TRANSFER_COPY` - 复制整个源媒体。
- `CLIP_TRANSFER_TRANSCODE` - 转码为默认输出格式。

---

### ProjectManager.convertAECompsToClips

`app.projectManager.options.convertAECompsToClips`

#### 描述

如果为 true，则将动态链接的 After Effects 合成渲染为新媒体（使用指定的输出预设）。

#### 类型

布尔值；可读/可写。

---

### ProjectManager.convertImageSequencesToClips

`app.projectManager.options.convertImageSequencesToClips`

#### 描述

如果为 true，则将图像序列转码为新媒体（使用指定的输出预设）。

#### 类型

布尔值；可读/可写。

---

### ProjectManager.convertSyntheticsToClips

`app.projectManager.options.convertSyntheticsToClips`

#### 描述

如果为 true，则将来自合成导入器的剪辑转码为新媒体（使用指定的输出预设）。

#### 类型

布尔值；可读/可写。

---

### ProjectManager.copyToPreventAlphaLoss

`app.projectManager.options.copyToPreventAlphaLoss`

#### 描述

如果为 true，则将任何可用的 Alpha 信息包含到转码的媒体中。

#### 类型

布尔值；可读/可写。

---

### ProjectManager.destinationPath

`app.projectManager.options.destinationPath`

#### 描述

导出项目和媒体的目标路径。

#### 类型

字符串；可读/可写。

---

### ProjectManager.encoderPresetFilePath

`app.projectManager.options.encoderPresetFilePath`

#### 描述

要使用的输出预设（.epr 文件）的路径。

#### 类型

字符串；可读/可写。

---

### ProjectManager.excludeUnused

`app.projectManager.options.excludeUnused`

#### 描述

如果为非零值，则从导出的项目中排除未使用的项目项。

#### 类型

布尔值；可读/可写。

---

### ProjectManager.handleFrameCount

`app.projectManager.options.handleFrameCount`

#### 描述

要包含的媒体“手柄”帧数（入点和出点前后的帧数）。

#### 类型

整数；可读/可写。

---

### ProjectManager.includeAllSequences

`app.projectManager.options.includeAllSequences`

#### 描述

如果为 true，则导出项目中的所有 [Sequences](../../sequence/sequence)。

#### 类型

布尔值；可读/可写。

---

### ProjectManager.includeConformedAudio

`app.projectManager.options.includeConformedAudio`

#### 描述

如果为 true，则在导出的项目中包含符合的音频文件。

#### 类型

布尔值；可读/可写。

---

### ProjectManager.includePreviews

`app.projectManager.options.includePreviews`

#### 描述

如果为 true，则在导出的项目中包含渲染的预览文件。

#### 类型

布尔值；可读/可写。

---

### ProjectManager.renameMedia

`app.projectManager.options.renameMedia`

#### 描述

如果为 true，则在导出过程中执行重命名操作。

#### 类型

布尔值；可读/可写

---
