---
title: 音频
---
# 音频

## 32位浮点，非交错格式

所有与 Premiere 相关的音频调用都使用 32 位浮点缓冲区数组来传递音频。音频不是交错的，而是将不同的通道存储在单独的缓冲区中。因此，立体声音频的结构如下所示：

```cpp
float* audio[2];
```

其中 `audio[0]` 是一个长度为 N 个样本的缓冲区的地址，`audio[1]` 是第二个长度为 N 个样本的缓冲区的地址。`audio[0]` 包含左声道，`audio[1]` 包含右声道。N 是缓冲区中的样本帧数。

由于 Premiere 使用 32 位浮点数表示每个音频样本，因此它可以表示高于 0 dB 的值。0 dB 对应于浮点数中的 +/- 1.0。可以通过将浮点样本乘以 32767.0 并将结果转换为短整型来将其转换为 16 位短整型。

例如：

```cpp
sample16bit[n] = (short int) (sample32bit[n] * 32767.0)
```

当读取使用不同格式的文件时，插件负责与 32 位非交错格式之间进行转换。[Audio Suite](../sweetpea-suites#audio-suite) 中有用于格式之间转换的调用。为了在整数 <-> 浮点数转换中保持对称性，我们建议您使用提供的实用函数。

---

## 音频样本类型

由于 32 位浮点数是唯一传递的音频格式，因此没有样本类型或位深度的选项。然而，文件格式确实使用各种样本类型和位深度，因此 `AudioSampleTypes` 定义了多种可能的格式。

这些格式用于设置传递给 Premiere 的结构中的成员，以定义用户界面，并且不会影响传递给和从 Premiere 传递的音频格式。

| PrAudioSampleType | 描述 |
| --- | --- |
| `kPrAudioSampleType_8BitInt` | 8位整数 |
| `kPrAudioSampleType_8BitTwosInt` | 8位整数，补码表示 |
| `kPrAudioSampleType_16BitInt` | 16位整数 |
| `kPrAudioSampleType_24BitInt` | 24位整数 |
| `kPrAudioSampleType_32BitInt` | 32位整数 |
| `kPrAudioSampleType_32BitFloat` | 32位浮点数 |
| `kPrAudioSampleType_64BitFloat` | 64位浮点数 |
| `kPrAudioSampleType_16BitIntBigEndian` | 16位整数，大端序 |
| `kPrAudioSampleType_24BitIntBigEndian` | 24位整数，大端序 |
| `kPrAudioSampleType_32BitIntBigEndian` | 32位整数，大端序 |
| `kPrAudioSampleType_32BitFloatBigEndian` | 32位浮点数，大端序 |
| `kPrAudioSampleType_Compressed` | 任何非PCM格式 |
| `kPrAudioSampleType_Packed` | 任何混合样本类型的PCM格式 |
| `kPrAudioSampleType_Other` | 不在此列表中的样本类型 |
| `kPrAudioSampleType_Any` | 任何可用的样本类型（用于导出器） |

---

## 音频样本帧

样本帧是音频的测量单位。一个音频样本帧描述了音频的一个样本的所有通道。每个样本是一个 32 位浮点数。因此，一个音频样本帧的存储需求（以字节为单位）等于 `4 * 通道数`。

---

## 音频采样率

`PrAudioSample` 是一个 `prInt64`

---

## 音频通道类型

Premiere 目前支持四种不同的音频通道类型：单声道、立体声、5.1 和最大通道。

大于 5.1 的通道支持最初在 Premiere Pro 4.0.1 中添加，部分支持 16 通道主音频轨道，仅用于导入 OMF 和输出到硬件。

在 CS6 中，添加了 16 通道音频导出。

从 CC 开始，音频通道支持增加到 32 通道。

| PrAudioChannelType | 描述 |
|---|---|
| `kPrAudioChannelType_Mono` | 单声道 |
| `kPrAudioChannelType_Stereo` | 立体声。立体声通道的顺序为： |
| | - `kPrAudioChannelLabel_FrontLeft` |
| | - `kPrAudioChannelLabel_FrontRight` |
| `kPrAudioChannelType_51` | 5.1 音频。 |
| | 5.1 通道的顺序为： |
| | - `kPrAudioChannelLabel_FrontLeft` |
| | - `kPrAudioChannelLabel_FrontRight` |
| | - `kPrAudioChannelLabel_BackLeft` |
| | - `kPrAudioChannelLabel_BackRight` |
| | - `kPrAudioChannelLabel_FrontCenter` |
| | - `kPrAudioChannelLabel_LowFrequency` |
| | - `kPrAudioChannelLabel_BackLeft` |
| | - `kPrAudioChannelLabel_BackRight` |
| `kPrAudioChannelType_MaxChannel` | CC 新增。 |
| | `kMaxAudioChannelCount`，在 CC 中定义为 32 通道。 |
| | 所有通道使用 `kPrAudioChannelLabel_Discrete`。 |
