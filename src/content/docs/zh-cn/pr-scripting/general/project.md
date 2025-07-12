---
title: 项目对象
---
# 项目对象

`app.project`

#### 描述

表示一个 Premiere Pro 项目。从 Premiere Pro 12.0 开始，可以同时打开多个项目。

---

## 属性

### Project.activeSequence

`app.project.activeSequence`

#### 描述

项目中当前活动的 [Sequence 对象](../../sequence/sequence)。

#### 类型

一个 [Sequence 对象](../../sequence/sequence)，如果当前没有活动的序列，则为 `0`。

---

### Project.cloudProjectlocalID

`app.project.cloudProjectlocalID`

#### 描述

云项目的 ID。

#### 类型

字符串；只读。

---

### Project.documentID

`app.project.documentID`

#### 描述

此项目的唯一标识符，格式为 `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`。

#### 类型

字符串；只读。

---

### Project.isCloudProject

`app.project.isCloudProject`

#### 描述

检查项目是否为云项目。

#### 类型

布尔值；只读。

---

### Project.name

`app.project.name`

#### 描述

项目的名称。

#### 类型

字符串；只读。

---

### Project.path

`app.project.path`

#### 描述

项目的文件路径。

#### 类型

字符串；只读。

#### 示例

获取当前活动项目的路径

```javascript
app.project.path; // /Users/USERNAME/Desktop/Project.prproj
```

---

### Project.rootItem

`app.project.rootItem`

#### 描述

表示项目“根”的 [ProjectItem 对象](../../item/projectitem)。

#### 类型

一个 [ProjectItem 对象](../../item/projectitem)；此对象始终为 `ProjectItemType_BIN` 类型。

---

### Project.sequences

`app.project.sequences`

#### 描述

项目中的序列。

#### 类型

[SequenceCollection 对象](../../collection/sequencecollection)，只读。

---

## 方法

### Project.addPropertyToProjectMetadataSchema()

`app.project.addPropertyToProjectMetadataSchema(propertyName, propertyLabel, propertyType)`

#### 描述

向 Premiere Pro 的私有项目元数据模式添加指定类型的新字段。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `propertyName` | 字符串 | 要添加的属性名称。 |
| `propertyLabel` | 字符串 | 要添加的属性标签。 |
| `propertyType` | 整数 | 必须是以下之一： |
| | | - `0` - 整数 |
| | | - `1` - 实数 |
| | | - `2` - 字符串 |
| | | - `3` - 布尔值 |

#### 返回值

如果成功返回 `true`，如果失败返回 `undefined`。

---

### Project.closeDocument()

`app.project.closeDocument(saveFirst, promptIfDirty)`

#### 描述

关闭此项目。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `saveFirst` | 整数 | 如果为 `1`，则在关闭前保存项目。 |
| `promptIfDirty` | 整数 | 如果为 `1`，则询问用户是否要先保存更改。 |

#### 返回值

如果成功返回 `0`。

---

### Project.consolidateDuplicates()

`app.project.consolidateDuplicates()`

#### 描述

调用 Premiere Pro 的“合并重复素材”功能，与 UI 中的功能相同。

#### 参数

无。

#### 返回值

如果成功返回 `0`。

---

### Project.createNewSequence()

`app.project.createNewSequence(sequenceName, sequenceID)`

#### 描述

创建一个具有指定 ID 的新 [Sequence 对象](../../sequence/sequence)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sequenceName` | 字符串 | 序列的名称。 |
| `sequenceID` | 字符串 | 新序列的唯一标识 ID。 |

#### 返回值

如果创建成功，返回一个 [Sequence 对象](../../sequence/sequence)，如果失败返回 `0`。

---

### Project.createNewSequenceFromClips()

`app.project.createNewSequenceFromClips(sequenceName, arrayOfProjectItems, [destinationBin])`

#### 描述

创建一个具有指定名称的新 [Sequence 对象](../../sequence/sequence)，并将其插入到指定的目标 bin 中，并依次插入项目项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sequenceName` | 字符串 | 可选。新序列的名称。 |
| `arrayOfProjectItems` | [ProjectItem 对象](../../item/projectitem) 数组 | 要插入序列的项目项数组。 |
| `destinationBin` | [ProjectItem 对象](../../item/projectitem) | 可选。包含序列的目标 bin。 |

#### 返回值

如果成功，返回新创建的 [Sequence 对象](../../sequence/sequence)；如果失败返回 `0`。

---

### Project.deleteSequence()

`app.project.deleteSequence(sequence)`

#### 描述

从项目中删除指定的 [Sequence 对象](../../sequence/sequence)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sequence` | [Sequence 对象](../../sequence/sequence) | 要删除的序列。 |

#### 返回值

如果成功返回 `true`，如果失败返回 `false`。

---

### Project.exportAAF()

`app.project.exportAAF(sequenceToExport, outputPath, mixdownVideo, explodeToMono, sampleRate, bitsPerSample, embedAudio, audioFileFormat, trimSources, handleFrames, presetPath, renderAudioEffects, includeClipCopies, preserveParentFolder)`

#### 描述

使用指定的设置导出指定 [Sequence 对象](../../sequence/sequence) 的 AAF 文件。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sequenceToExport` | [Sequence 对象](../../sequence/sequence) | 要导出的序列。 |
| `outputPath` | 字符串 | .aaf 文件的输出路径。 |
| `mixdownVideo` | 整数 | 如果为 `1`，则在导出前渲染视频。 |
| `explodeToMono` | 整数 | 如果为 `1`，则将立体声轨道拆分为单声道。 |
| `sampleRate` | 整数 | 输出音频的采样率。 |
| `bitsPerSample` | 整数 | 音频输出的每样本位数。 |
| `embedAudio` | 整数 | 如果为 `1`，则嵌入音频；如果为 `0`，则为外部音频。 |
| `audioFileFormat` | 整数 | `0` 为 AIFF，`1` 为 WAV。 |
| `trimSources` | 整数 | 如果为 `1`，则在导出前修剪并重新编码媒体；`0` 导出整个文件。 |
| `handleFrames` | 整数 | 处理帧数（0 到 1000）。 |
| `presetPath` | 字符串 | 导出预设 (.epr) 文件的路径。 |
| `renderAudioEffects` | 整数 | 如果为 `1`，则在导出前渲染音频效果。 |
| `includeClipCopies` | 整数 | 如果为 `1`，则包含每个剪辑的副本。 |
| `preserveParentFolder` | 整数 | 如果为 `1`，则在输出中保留父文件夹。 |

#### 返回值

如果成功返回 `0`。

---

### Project.exportFinalCutProXML()

`app.project.exportFinalCutProXML(outputPath, suppressUI)`

#### 描述

将整个项目的 FCP XML 表示导出到指定的输出路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `outputPath` | 字符串 | .xml 文件的输出路径。 |
| `suppressUI` | 整数 | 如果为 `1`，则在导出期间不显示警告或提示。 |

#### 返回值

如果成功返回 `0`。

---

### Project.exportOMF()

`app.project.exportOMF(sequence, outputPath, omfTitle, sampleRate, bitsPerSample, audioEncapsulated, audioFileFormat, trimAudioFiles, handleFrames, includePan)`

#### 描述

使用指定的设置导出指定 [Sequence 对象](../../sequence/sequence) 的 OMF 文件。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sequence` | [Sequence 对象](../../sequence/sequence) | 要输出的序列。 |
| `filePath` | 字符串 | .omf 文件的输出路径。 |
| `omfTitle` | 字符串 | OMF 的标题。 |
| `sampleRate` | | 输出音频的采样率。 |
| `bitsPerSample` | | 音频输出的每样本位数。 |
| `audioEncapsulated` | 整数 | 如果为 `1`，则嵌入音频；如果为 `0`，则为外部音频。 |
| `audioFileFormat` | 整数 | `0` 为 AIFF，`1` 为 WAV。 |
| `trimAudioFiles` | 整数 | `1` 表示修剪音频文件。 |
| `handleFrames` | 整数 | 处理帧数（0 到 1000）。 |
| `includePan` | 整数 | `1` 表示包含平移信息；`0` 表示不包含。 |

#### 返回值

如果成功返回 `0`。

---

### Project.exportTimeline()

`app.project.exportTimeline(exportControllerName)`

#### 描述

使用具有指定名称的导出控制器插件导出当前活动的 [Sequence 对象](../../sequence/sequence)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `exportControllerName` | 字符串 | 要使用的导出控制器插件的名称。要使用 Premiere Pro SDK 示例导出控制器，值为 "SDK Export Controller"。 |

#### 返回值

如果成功返回 `0`，否则返回错误代码。

---

### Project.getGraphicsWhiteLuminance()

`app.project.getGraphicsWhiteLuminance()`

#### 描述

检索此项目的当前图形白亮度值。

#### 参数

无。

#### 返回值

返回当前选定的图形白亮度值。

---

### Project.getInsertionBin()

`app.project.getInsertionBin()`

#### 描述

返回一个 [ProjectItem 对象](../../item/projectitem)，引用将发生导入的 bin。

#### 参数

无。

#### 返回值

如果成功返回一个 [ProjectItem 对象](../../item/projectitem)，否则返回 `0`。

---

### Project.getProjectPanelMetadata()

`app.project.getProjectPanelMetadata()`

#### 描述

返回项目面板的当前布局。

#### 参数

无。

#### 返回值

返回表示当前项目面板布局的字符串，如果失败返回 `0`。

---

### Project.getSharedLocation()

`app.project.getSharedLocation()`

#### 描述

返回共享文件要复制到的位置的路径。

#### 参数

无。

#### 返回值

返回包含路径的字符串。

---

### Project.getSupportedGraphicsWhiteLuminances()

`app.project.getSupportedGraphicsWhiteLuminances()`

#### 描述

检索此项目支持的图形白亮度值。

#### 参数

无。

#### 返回值

返回项目支持的图形白亮度设置数组；当前返回 (100, 203, 300)。

---

### Project.importAEComps()

`app.project.importAEComps(path, compNames, [targetBin])`

#### 描述

从包含的 After Effects .aep 项目文件中导入指定的合成（按名称）。您可以指定目标 bin；否则，合成将出现在此项目中最近的目标 bin 中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `path` | 字符串 | After Effects .aep 项目文件的路径。 |
| `compNames` | 字符串数组 | 要导入的指定项目中的合成名称。 |
| `targetBin` | [ProjectItem 对象](../../item/projectitem) | 可选。此导入的目标 bin。 |

#### 返回值

如果成功返回 `0`。

---

### Project.importAllAEComps()

`app.project.importAllAEComps(path, [targetBin])`

#### 描述

从包含的 After Effects .aep 项目文件中导入所有合成。您可以指定目标 bin；否则，合成将出现在此项目中最近的目标 bin 中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `path` | 字符串 | After Effects .aep 项目文件的路径。 |
| `targetBin` | [ProjectItem 对象](../../item/projectitem) | 可选。此导入的目标 bin。 |

#### 返回值

如果成功返回 `0`。

---

### Project.importFiles()

`app.project.importFiles(filePaths, suppressUI, targetBin, importAsNumberedStills)`

#### 描述

从指定的文件路径导入媒体。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `filePaths` | 字符串数组 | 要导入的文件路径数组。 |
| `suppressUI` | 布尔值 | 是否应抑制警告对话框。 |
| `targetBin` | [ProjectItem 对象](../../item/projectitem) | 文件应导入的 bin。 |
| `importAsNumberedStills` | 布尔值 | 文件路径是否应解释为编号静止图像的序列。 |

#### 返回值

如果成功返回 `true`，否则返回 `false`。

---

### Project.importSequences()

`app.project.importSequences(path, sequenceIDs)`

#### 描述

从指定的项目中导入具有指定 sequenceIDs 的 [sequence](../../sequence/sequence) 对象数组到当前项目中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `path` | 字符串 | 项目文件的路径。 |
| `sequenceIDs` | 数组 | 要导入的序列 ID 数组。 |

#### 返回值

如果成功返回 `0`。

---

### Project.isSharedLocationCopyEnabled()

`app.project.isSharedLocationCopyEnabled()`

#### 描述

确定是否为此项目启用了复制到共享位置。

#### 参数

无。

#### 返回值

如果启用了复制返回 `true`；否则返回 `false`。

---

### Project.newBarsAndTone()

`app.project.newBarsAndTone(width, height, timeBase, PARNum, PARDen, audioSampleRate, name)`

#### 描述

创建一个具有指定名称的新 [Sequence 对象](../../sequence/sequence)，基于指定的预设 (.sqpreset 文件)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `width` | 整数 | |
| `height` | 整数 | |
| `timeBase` | | 新项目项的时间基准。 |
| `PARNum` | 整数 | 像素宽高比分子。 |
| `PARDen` | 整数 | 像素宽高比分母。 |
| `audioSampleRate` | | 音频采样率。 |
| `name` | 字符串 | 新项目项的名称。 |

#### 返回值

返回新彩条和音调的 [ProjectItem 对象](../../item/projectitem)，如果失败返回 `0`。

---

### Project.newSequence()

`app.project.newSequence(name, pathToSequencePreset)`

#### 描述

创建一个具有指定名称的新 [Sequence 对象](../../sequence/sequence)，基于指定的预设 (.sqpreset 文件)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 新序列的名称。 |
| `pathToSequencePreset` | 字符串 | 预设 .sqpreset 文件的路径。 |

#### 返回值

返回一个 [Sequence 对象](../../sequence/sequence)，如果失败返回 `0`。

---

### Project.openSequence()

`app.project.openSequence(sequence.sequenceID)`

#### 描述

使具有提供的序列 ID 的 [Sequence 对象](../../sequence/sequence) 变为活动状态。这将在时间线面板中打开序列。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sequenceID` | [Sequence.sequenceID](../../sequence/sequence#sequencesequenceid) | 应打开的有效序列 ID。 |

#### 返回值

如果成功返回 `true`，否则返回 `false`。

---

### Project.pauseGrowing()

`app.project.pauseGrowing(pause)`

#### 描述

暂停（和恢复）增长文件捕获。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `pause` | 整数 | 如果为 `1`，则启用增长文件。 |

#### 返回值

如果成功返回 `0`。

---

### Project.save()

`app.project.save()`

#### 描述

在项目的当前路径保存项目。

#### 参数

无。

#### 返回值

如果成功返回 `0`。

---

### Project.saveAs()

`app.project.saveAs(path)`

#### 描述

将当前项目导出到新的唯一文件路径，从新位置打开项目，并关闭之前打开的（且相同的）项目。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `path` | 字符串 | 新文件的路径。 |

#### 返回值

如果成功返回 `0`，否则返回错误代码。

---

### Project.setEnableTranscodeOnIngest()

`app.project.setEnableTranscodeOnIngest(state)`

#### 描述

控制给定项目的“导入时转码”行为的启用状态。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `state` | Boolean | 期望的状态。 |

#### 返回值

如果成功，返回 `true`。

---

### Project.setGraphicsWhiteLuminance()

`app.project.setGraphicsWhiteLuminance(value)`

#### 描述

设置当前项目的图形白亮度值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | Integer | 要使用的值；必须是由 [Project.getSupportedGraphicsWhiteLuminances()](#projectgetsupportedgraphicswhiteluminances) 提供的值。 |

#### 返回值

如果成功，返回 `true`。

---

### Project.setProjectPanelMetadata()

`app.project.setProjectPanelMetadata(layout)`

#### 描述

返回项目面板的当前布局。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `layout` | String | 表示期望的项目面板布局。注意：生成有效布局字符串的唯一已知方法是设置项目面板为所需状态，然后使用 [Project.getProjectPanelMetadata()](#projectgetprojectpanelmetadata)。 |

#### 返回值

如果失败，返回 `0`。

---

### Project.setScratchDiskPath()

`app.project.setScratchDiskPath(newPath, whichScratchDiskPath)`

#### 描述

将指定的暂存盘路径更改为新路径。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `newPath` | String | 新路径。 |
| `scratchDiskType` | `ScratchDiskType` 枚举 | 以下之一： |
| | | - `ScratchDiskType.FirstVideoCaptureFolder` |
| | | - `ScratchDiskType.FirstAudioCaptureFolder` |
| | | - `ScratchDiskType.FirstVideoPreviewFolder` |
| | | - `ScratchDiskType.FirstAudioPreviewFolder` |
| | | - `ScratchDiskType.FirstAutoSaveFolder` |
| | | - `ScratchDiskType.FirstCCLibrariesFolder` |
| | | - `ScratchDiskType.FirstCapsuleMediaFolder` |
| | | - `ScratchDiskType.FirstAudioCaptureFolder` |
| | | - `ScratchDiskType.FirstVideoPreviewFolder` |
| | | - `ScratchDiskType.FirstAudioPreviewFolder` |
| | | - `ScratchDiskType.FirstAutoSaveFolder` |
| | | - `ScratchDiskType.FirstCCLibrariesFolder` |
| | | - `ScratchDiskType.FirstCapsuleMediaFolder` |

#### 返回值

如果失败，返回 `0`。
