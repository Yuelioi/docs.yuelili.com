---
title: ProjectItem 对象
---
# ProjectItem 对象

`app.project.rootItem.children[index]`

#### 描述

项目中的每个项目都是一个 ProjectItem，包括项目根目录。

---

## 属性

### ProjectItem.children

`app.project.rootItem.children[index].children`

#### 描述

包含在指定项目项中的项目项数组。

#### 类型

[ProjectItemCollection 对象](../../collection/projectitemcollection)，只读。

---

### ProjectItem.getAudioChannelMapping

`app.project.rootItem.children[index].getAudioChannelMapping`

#### 描述

当前应用于此 ProjectItem 的音频通道映射。

#### 类型

一个 audioChannelMapping 对象。

---

### ProjectItem.getOverrideColorSpaceList

`app.project.rootItem.children[index].getOverrideColorSpaceList`

#### 描述

*添加描述*

返回一个对象，包含类似的数据

```javascript
{
 value: [
 sRGB,
 BT.601 (NTSC),
 BT.601 (PAL),
 BT.709,
 BT.709 (Scene),
 BT.2020,
 BT.2020 (Scene),
 BT.2100 PQ,
 BT.2100 PQ (Scene),
 BT.2100 HLG,
 BT.2100 HLG (Scene),
 DCDM XYZ,
 ]
};
```

#### 类型

Javascript 对象。

---

### ProjectItem.name

`app.project.rootItem.children[index].name`

#### 描述

项目项的名称。

#### 类型

字符串；可读写。

#### 示例

重命名第一个项目项。

```javascript
var item = app.project.rootItem.children[0];
if (item) {
 item.name = item.name + ', updated by PProPanel.';
} else {
 alert('Could not rename project item');
}
```

---

### ProjectItem.nodeId

`app.project.rootItem.children[index].nodeId`

#### 描述

项目项添加到项目时分配的唯一 ID。

:::note
区分对相同源媒体的引用。
:::

#### 类型

字符串；只读。

---

### ProjectItem.teamProjectsAssetId

`app.project.rootItem.children[index].teamProjectsAssetId`

#### 描述

项目项的 Team Projects Asset ID。

#### 类型

字符串；只读。

---

### ProjectItem.treePath

`app.project.rootItem.children[index].treePath`

#### 描述

项目项的当前项目位置。

示例：`\\ProjectName.prproj\\Media\\MXF\\filename.mxf`

#### 类型

字符串；只读。

---

### ProjectItem.type

`app.project.rootItem.children[index].type`

#### 描述

以下之一：

- `"CLIP"`
- `"BIN"`
- `"ROOT"`
- `"FILE"`

#### 类型

枚举值；只读。

---

## 方法

### ProjectItem.attachProxy()

`app.project.rootItem.children[index].attachProxy(mediaPath, isHiRes)`

#### 描述

将 `newMediaPath` 处的媒体附加到项目项，作为高分辨率或代理媒体。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `mediaPath` | 字符串 | 新分配媒体的路径。 |
| `isHiRes` | 整数 | 新媒体应作为代理 `0` 或高分辨率 `1` 媒体附加。 |

#### 返回值

成功时返回 `0`。

---

### ProjectItem.canChangeMediaPath()

`app.project.rootItem.children[index].canChangeMediaPath()`

#### 描述

如果 Premiere Pro 可以更改与此项目项关联的路径，则返回 `true`；否则返回 `false`。

#### 参数

无。

#### 返回值

布尔值；如果可以替换媒体，则为 `true`，否则为 `false`。

---

### ProjectItem.canProxy()

`app.project.rootItem.children[index].canProxy()`

#### 描述

指示是否可以为此项目项附加代理。

#### 参数

无。

#### 返回值

如果项目项允许附加代理，则返回 `true`；否则返回 `false`。

---

### ProjectItem.changeMediaPath()

`app.project.rootItem.children[index].changeMediaPath(newPath)`

#### 描述

更新项目项以指向新的媒体路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `newPath` | 字符串 | 媒体文件的新路径。 |
| `overrideChecks` | 布尔值 | 覆盖任何安全顾虑。 |

#### 返回值

如果替换成功，则返回 `0`。

---

### ProjectItem.clearOutPoint()

`app.project.rootItem.children[index].clearOutPoint()`

#### 描述

清除任何分配的出点；项目项将从 `startTime` 开始。

#### 参数

无

#### 返回值

成功时返回 `0`。

---

### ProjectItem.createBin()

`app.project.rootItem.children[index].createBin(name)`

#### 描述

在项目项中创建一个空的分箱。仅在分箱内有效。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 新分箱的名称。 |

#### 返回值

如果成功，则返回表示新分箱的项目项；否则返回 `0`。

---

### ProjectItem.createSmartBin()

`app.project.rootItem.children[index].createSmartBin(name, queryString)`

#### 描述

创建一个搜索分箱；仅对分箱项目项有效。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 新分箱的名称。 |
| `queryString` | 字符串 | 搜索的查询字符串。 |

#### 返回值

如果成功，则返回表示新创建的分箱的 projectItem。

---

### ProjectItem.createSubClip()

`app.project.rootItem.children[index].createSubClip(name, startTime, endTime, hasHardBoundaries, takeAudio, takeVideo)`

#### 描述

为现有项目项的子剪辑创建一个新的项目项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 新子剪辑的名称。 |
| `startTime` | 字符串 | 子剪辑的开始时间，以 ticks 为单位。 |
| `endTime` | 字符串 | 子剪辑的结束时间，以 ticks 为单位。 |
| `hasHardBoundaries` | 整数 | 如果为 `1`，用户无法扩展入点和出点。 |
| `takeVideo` | 整数 | 如果为 `1`，使用源视频。 |
| `takeAudio` | 整数 | 如果为 `1`，使用源音频。 |

#### 返回值

返回表示新子剪辑的项目项，如果创建失败则返回 0。

---

### ProjectItem.deleteBin()

`app.project.rootItem.children[index].deleteBin()`

#### 描述

从项目中删除分箱及其所有内容。

#### 参数

无。

#### 返回值

如果删除成功，则返回 `0`。

---

### ProjectItem.findItemsMatchingMediaPath()

`app.project.rootItem.children[index].findItemsMatchingMediaPath(pathToMatch, ignoreSubClips)`

#### 描述

返回引用相同媒体路径的项目项数组。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `pathToMatch` | 字符串 | 要匹配的路径。 |
| `ignoreSubClips` | 整数 | 如果为 `1`，则不返回子剪辑。 |

#### 返回值

返回项目项数组，如果未找到匹配 `matchPath` 的项目项，则返回 `0`。

---

### ProjectItem.getColorLabel()

`app.project.rootItem.children[index].getColorLabel()`

#### 描述

检索项目项的颜色标签。

#### 参数

无。

#### 返回值

整数，以下之一：

- `0` = 紫色
- `1` = 鸢尾色
- `2` = 加勒比色
- `3` = 薰衣草色
- `4` = 天蓝色
- `5` = 森林色
- `6` = 玫瑰色
- `7` = 芒果色
- `8` = 紫色
- `9` = 蓝色
- `10` = 青色
- `11` = 洋红色
- `12` = 棕褐色
- `13` = 绿色
- `14` = 棕色
- `15` = 黄色

---

### ProjectItem.getColorSpace()

`app.project.rootItem.children[index].getColorSpace()`

#### 描述

检索项目项的色彩空间属性。

#### 参数

无。

#### 返回值

返回项目项的色彩空间属性，一个包含以下内容的对象：

- `name`
- `transferCharacteristic`
- `primaries`
- `matrixEquation`

#### 示例

这将把上述信息写入事件面板。

```javascript
var colorSpace = app.project.rootItem.children[0].getColorSpace()
app.setSDKEventMessage("Color Space " + " = " + colorSpace.name, 'info');
app.setSDKEventMessage("Transfer Characteristic " + " = " + colorSpace.transferCharacteristic, 'info');
app.setSDKEventMessage("Color Primaries " + " = " + colorSpace.primaries, 'info');
app.setSDKEventMessage("Matrix Equation " + " = " + colorSpace.matrixEquation, 'info');
```

---

### ProjectItem.getOriginalColorSpace()

`app.project.rootItem.children[index].getOriginalColorSpace()`

#### 描述

检索项目项的色彩空间属性。

#### 参数

无。

#### 返回值

返回项目项的色彩空间属性，一个包含以下内容的对象：

- `name`
- `transferCharacteristic`
- `primaries`
- `matrixEquation`

#### 示例

参见 [ProjectItem.getColorSpace()](#projectitemgetcolorspace)

---

### ProjectItem.getEmbeddedLUTID()

`app.project.rootItem.children[index].getEmbeddedLUTID()`

#### 描述

检索项目项的 LUTID。

#### 参数

无。

#### 返回值

返回项目项的 LUTID

#### 示例

将 LUTID 写入事件面板。

```javascript
var lutID = app.project.rootItem.children[0].getEmbeddedLUTID()
app.setSDKEventMessage("LutID " + " = " + lutID, 'info');
```

---

### ProjectItem.getInputLUTID()

`app.project.rootItem.children[index].getInputLUTID()`

#### 描述

检索项目项的输入 LUTID。

#### 参数

无。

#### 返回值

返回项目项的输入 LUTID

#### 示例

将输入 LUTID 写入事件面板。

```javascript
var lutID = app.project.rootItem.children[0].getInputLUTID()
app.setSDKEventMessage("Input LutID " + " = " + inputLutID, 'info');
```

---

### ProjectItem.getFootageInterpretation()

`app.project.rootItem.children[index].getFootageInterpretation()`

#### 描述

返回描述项目项当前解释的结构。

#### 参数

无。

#### 返回值

一个素材解释结构，如果失败则返回 `0`。

| 属性 | 类型 | 描述 |
|---|---|---|
| `alphaUsage` | 整数 | Alpha，将是以下之一： |
| | | - `0` - `ALPHACHANNEL_NONE` |
| | | - `1` - `ALPHACHANNEL_STRAIGHT` |
| | | - `2` - `ALPHACHANNEL_PREMULTIPLIED` |
| | | - `3` - `ALPHACHANNEL_IGNORE` |
| `fieldType` | 整数 | 场类型，以下之一： |
| | | - `-1` - `FIELDTYPE_DEFAULT` |
| | | - `0` - `FIELDTYPE_PROGRESSIVE` |
| | | - `1` - `FIELDTYPE_UPPERFIRST` |
| | | - `2` - `FIELDTYPE_LOWERFIRST` |
| `ignoreAlpha` | 布尔值 | `true` 或 `false`。 |
| `invertAlpha` | 布尔值 | `true` 或 `false`。 |
| `frameRate` | 浮点数 | 帧率作为浮点值。 |
| `pixelAspectRatio` | 浮点数 | 像素宽高比作为浮点值。 |
| `removePulldown` | 布尔值 | `true` 或 `false`。 |
| `vrConformProjectionType` | 整数 | 用于 VR 素材的投影类型，以下之一： |
| | | - `0` - `VR_CONFORM_PROJECTION_NONE` |
| | | - `1` - `VR_CONFORM_PROJECTION_EQUIRECTANGULAR` |
| `vrLayoutType` | 整数 | 用于 VR 的素材布局，以下之一： |
| | | - `0` - `VR_LAYOUT_MONOSCOPIC` |
| | | - `1` - `VR_LAYOUT_STEREO_OVER_UNDER` |
| | | - `2` - `VR_LAYOUT_STEREO_SIDE_BY_SIDE` |
| `vrHorizontalView` | 字符串 | 用于 VR 素材的水平视图。 |
| `vrVerticalView` | 字符串 | 用于 VR 素材的垂直视图。 |

---

### ProjectItem.getInPoint()

`app.project.rootItem.children[index].getInPoint()`

#### 描述

获取当前项目项的入点。

#### 参数

无。

#### 返回值

一个包含入点的 [Time 对象](../../other/time)。

---

### ProjectItem.getMarkers()

`app.project.rootItem.children[index].getMarkers()`

#### 描述

检索与此项目项关联的 [MarkerCollection 对象](../../collection/markercollection)。

#### 参数

无。

#### 返回值

[MarkerCollection 对象](../../collection/markercollection)，只读；

---

### ProjectItem.getMediaPath()

`app.project.rootItem.children[index].getMediaPath()`

#### 描述

返回与项目项媒体关联的路径，作为字符串。

:::note

对于图像序列，仅返回序列中第一个图像的路径。
:::

#### 参数

无。

#### 返回值

包含与项目项关联的媒体路径的字符串。

---

### ProjectItem.getOutPoint()

`app.project.rootItem.children[index].getOutPoint(mediaType)`

#### 描述

检索指定媒体类型的当前出点。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `mediaType` | 整数 | 传递 `1` 仅用于视频，或 `2` 仅用于音频。 |
| | | 如果未传递 `mediaType`，则函数获取所有媒体的出点。 |

#### 返回值

返回一个 [Time 对象](../../other/time)。

---

### ProjectItem.getProjectMetadata()

`app.project.rootItem.children[index].getProjectMetadata()`

#### 描述

检索与项目项关联的元数据。与媒体 XMP 不同。

#### 参数

无。

#### 返回值

包含所有 Premiere Pro 私有项目元数据的字符串，序列化。

---

### ProjectItem.getProjectColumnsMetadata()

`app.project.rootItem.children[index].getProjectColumnsMetadata()`

#### 描述

向用户返回一个 JSON 字符串，包含当前项目视图布局中的所有元数据

#### 参数

无。

#### 返回值

一个 JSON 字符串，可以在 Javascript 层中使用 JSON.parse() 方法解析。

这将生成一个对象列表，每个对象代表一列。每个对象将包含 4 个键/值对：`ColumnName`、`ColumnValue`、`ColumnID`、`ColumnPath`。

- `ColumnName` 和 `ColumnValue` 作为信息键/值。
- `ColumnID` 和 `ColumnPath` 可用于通过方法 [setProjectMetadata()](#projectitemsetprojectmetadata) 或 [setXMPMetadata()](#projectitemsetxmpmetadata) 修改该列。

例如：

| 键 | 值 | 描述 |
| --- | --- | --- |
| `ColumnName` | `"Name"` | 列的名称 |
| `ColumnValue` | `"A014C003_180620_R205.mov"` | 列值的示例 |
| `ColumnID` | `"Column.Intrinsic.Name"` | 列的 ID |
| `ColumnPath` | `"http://ns.adobe.com/premierePrivateProjectMetaData/1.0/"` | 列的路径 |

---

### ProjectItem.getProxyPath()

`app.project.rootItem.children[index].getProxyPath()`

#### 描述

检索与此项目项关联的代理媒体的路径。

#### 参数

无。

#### 返回值

返回与代理项关联的代理媒体的路径（作为字符串），如果未找到则返回 `0`。

---

### ProjectItem.getXMPMetadata()

`app.project.rootItem.children[index].getXMPMetadata()`

#### 描述

检索与项目项关联的 XMP 元数据，作为字符串。

#### 参数

无。

#### 返回值

包含所有 XMP 元数据的字符串，序列化。

---

### ProjectItem.hasProxy()

`app.project.rootItem.children[index].hasProxy()`

#### 描述

指示是否已为项目项附加代理。

#### 参数

无。

#### 返回值

如果项目项已附加代理，则返回 `true`；否则返回 `false`。

---

### ProjectItem.isMergedClip()

`app.project.rootItem.children[index].isMergedClip()`

#### 描述

指示项目项是否引用合并剪辑。

#### 参数

无。

#### 返回值

如果项目项是合并剪辑，则返回 `true`，否则返回 `false`。

---

### ProjectItem.isMulticamClip()

`app.project.rootItem.children[index].isMulticamClip()`

#### 描述

指示项目项是否引用多机位剪辑。

#### 参数

无。

#### 返回值

如果项目项是多机位剪辑，则返回 `true`，否则返回 `false`。

---

### ProjectItem.isOffline()

`app.project.rootItem.children[index].isOffline()`

#### 描述

返回一个布尔值，指示项目项是否处于离线状态。

#### 参数

无。

#### 返回值

布尔值，如果离线则返回 `true`。

---

### ProjectItem.isSequence()

`app.project.rootItem.children[index].isSequence()`

#### 描述

指示项目项是否引用一个[序列对象](../../sequence/sequence)。

#### 参数

无。

#### 返回值

如果项目项是[序列对象](../../sequence/sequence)、多机位剪辑或合并剪辑，则返回 `true`。如果不是这些类型，则返回 `false`。

---

### ProjectItem.moveBin()

`app.project.rootItem.children[index].moveBin(newParentBinProjectItem)`

#### 描述

将项目项移动到新的父容器中。

#### 参数

无。

#### 返回值

如果移动成功，则返回 `0`。

---

### ProjectItem.refreshMedia()

`app.project.rootItem.children[index].refreshMedia()`

#### 描述

强制 Premiere Pro 更新与项目项关联的媒体的表示。如果媒体之前处于离线状态，这可能会导致其变为在线状态（如果之前缺失的媒体已变为可用）。

#### 参数

无。

#### 返回值

与项目项关联的标记数组，如果没有标记，则返回 `0`。

---

### ProjectItem.renameBin()

`app.project.rootItem.children[index].renameBin(newName)`

#### 描述

更改容器的名称。仅适用于作为容器的项目项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `newName` | 字符串 | 新的容器名称。 |

#### 返回值

如果重命名容器成功，则返回 `0`。

---

### ProjectItem.select()

`app.project.rootItem.children[index].select()`

#### 描述

将项目项（必须是容器）设置为后续导入到项目中的目标。

#### 参数

无。

#### 返回值

如果项目项已成功设置为后续导入的目标，则返回 `0`。

---

### ProjectItem.setColorLabel()

`app.project.rootItem.children[index].setColorLabel(labelColor)`

#### 描述

设置项目项的颜色标签。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `labelColor` | 整数 | 标签颜色；参见 [ProjectItem.getColorLabel()](#projectitemgetcolorlabel)。 |

#### 返回值

如果成功，则返回 `0`。

---

### ProjectItem.setFootageInterpretation()

`app.project.rootItem.children[index].setFootageInterpretation(interpretation)`

#### 描述

返回描述项目项当前解释的结构。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `interpretation` | | 素材解释结构。 |

#### 返回值

如果成功，则返回 `true`。

---

### ProjectItem.setInPoint()

`app.project.rootItem.children[index].setInPoint(time, mediaType)`

#### 描述

将入点设置为 `timeInTicks`，适用于指定的媒体类型。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `time` | 字符串 | 以 ticks 表示的时间。 |
| `mediaType` | 整数 | 确定要影响的媒体类型；传递 `1` 表示仅视频，`2` 表示仅音频，`4` 表示所有媒体类型。 |

#### 返回值

如果成功，则返回 `0`。

---

### ProjectItem.setOffline()

`app.project.rootItem.children[index].setOffline()`

#### 描述

将项目项设置为离线状态。

#### 参数

无。

#### 返回值

如果成功，则返回 `true`。

---

### ProjectItem.setOutPoint()

`app.project.rootItem.children[index].setOutPoint(time, mediaType)`

#### 描述

将出点设置为 `timeInTicks`，适用于指定的媒体类型。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `time` | 字符串 | 以 ticks 表示的时间。 |
| `mediaType` | 整数 | 确定要影响的媒体类型；传递 `1` 表示仅视频，`2` 表示仅音频，`4` 表示所有媒体类型。 |

#### 返回值

如果成功，则返回 `0`。

---

### ProjectItem.setOverrideFrameRate()

`app.project.rootItem.children[index].setOverrideFrameRate(newFrameRate)`

#### 描述

设置项目项的帧率。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `newFrameRate` | 浮点数 | 新的帧率。 |

#### 返回值

如果帧率已成功更改，则返回 `0`。

---

### ProjectItem.setOverridePixelAspectRatio()

`app.project.rootItem.children[index].setOverridePixelAspectRatio(numerator, denominator)`

#### 描述

设置项目项的像素宽高比。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `numerator` | 整数 | 新的分子。 |
| `denominator` | 整数 | 新的分母。 |

#### 返回值

如果宽高比已成功更改，则返回 `0`。

---

### ProjectItem.setProjectMetadata()

`app.project.rootItem.children[index].setProjectMetadata(newMetadata, updatedFields)`

#### 描述

设置与项目项关联的私有项目元数据。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `newMetadata` | 字符串 | 新的序列化私有项目元数据。 |
| `updatedFields` | 字符串数组 | 包含要更新的字段名称的数组。 |

#### 返回值

如果更新成功，则返回 `0`。

---

### ProjectItem.setScaleToFrameSize()

`app.project.rootItem.children[index].setScaleToFrameSize()`

#### 描述

启用缩放到帧大小功能，当从此项目项插入媒体到序列时生效。

#### 参数

无。

#### 返回值

未定义的返回值。

---

### ProjectItem.setStartTime()

`app.project.rootItem.children[index].setStartTime(time)`

#### 描述

为项目项分配新的开始时间。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `time` | 字符串 | 以 ticks 表示的新开始时间。 |

#### 返回值

如果成功，则返回 `0`。

---

### ProjectItem.setXMPMetadata()

`app.project.rootItem.children[index].setXMPMetadata(newXMP)`

#### 描述

设置与项目项关联的 XMP 元数据。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `newXMP` | 字符串 | 新的序列化 XMP 元数据。 |

#### 返回值

如果更新成功，则返回 `0`。

---

### ProjectItem.startTime()

`app.project.rootItem.children[index].startTime()`

#### 描述

返回一个[时间对象](../../other/time)，表示开始时间。

#### 参数

无。

#### 返回值

[时间对象](../../other/time)。

---

### ProjectItem.videoComponents()

`app.project.rootItem.children[index].videoComponents()`

#### 描述

此项目项的“主剪辑”的视频组件。

#### 类型

[组件集合对象](../../collection/componentcollection)，只读。
