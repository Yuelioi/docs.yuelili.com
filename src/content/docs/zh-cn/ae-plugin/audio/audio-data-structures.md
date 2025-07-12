---
title: 音频数据结构
---
# 音频数据结构

以下是 After Effects 用于描述音频数据的数据类型。

| 结构体 | 描述 |
|---|---|
| `PF_SoundFormat` | 指示音频是否为无符号脉冲编码调制 (PCM)、有符号 PCM 或浮点格式。 |
| `PF_SoundSampleSize` | 采样格式为 1、2 或 4 字节。 |
| `PF_SoundChannels` | 指示音频是单声道还是立体声。 |
| `PF_SoundFormatInfo` | 包含采样率、声道数、采样大小以及所引用音频的格式。 |
| `PF_SoundWorld` | 使用 `PF_SoundWorlds` 来表示音频。 |
| | 除了 `PF_SoundFormatInfo` 外，它们还包含音频的长度以及指向实际音频数据的指针。 |

`PF_SoundFormat`、`PF_SoundSampleSize` 和 `PF_SoundChannels` 都包含在 `PF_SoundFormatInfo` 中。

`PF_SoundWorlds` 包含一个 `PF_SoundFormatInfo` 以及进一步的实例特定信息。
