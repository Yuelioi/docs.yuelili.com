---
title: AudioChannelMapping 对象
---
# AudioChannelMapping 对象

`app.project.rootItem.children[index].getAudioChannelMapping`

#### 描述

AudioChannelMapping 对象定义了应用于给定 [ProjectItem 对象](../../item/projectitem) 的音频通道映射。

---

## 属性

### AudioChannelMapping.audioChannelsType

`app.project.rootItem.children[index].getAudioChannelMapping.audioChannelsType`

#### 描述

此通道中包含的音频类型。值为 `0`、`1` 或 `2`，分别对应 `AUDIOCHANNELTYPE_Mono`、`AUDIOCHANNELTYPE_Stereo` 或 `AUDIOCHANNELTYPE_51`。

---

### AudioChannelMapping.audioClipsNumber

`app.project.rootItem.children[index].getAudioChannelMapping.audioClipsNumber`

#### 描述

与此音频通道关联的音频剪辑数量。

---

## 方法

### AudioChannelMapping.setMappingForChannel()

`app.project.rootItem.children[index].setMappingForChannel(channelIndex, sourceChannelIndex)`

#### 描述

将源通道映射到指定的通道索引。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `channelIndex` | 整数 | 要映射的通道索引。 |
| `sourceChannelIndex` | 整数 | 要映射的源通道索引。 |

#### 返回值

如果成功返回 `true`，如果该映射不受支持则返回 `false`。
