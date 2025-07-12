---
title: 套件
---
# 套件

有关如何获取和管理套件的信息，以及有关除发射器之外的其他插件类型可用的更多套件的信息，请参阅 [SweetPea 套件](../../universals/sweetpea-suites)。

---

## Playmod 音频套件

此套件用于在播放期间播放音频。玩家使用的功能还有很多，仍然记录在玩家章节中。在这里，我们只考虑与发射器相关的套件中的单个调用。

### 基于主机还是基于插件的音频？

发射器有两种播放音频的选择：它可以要求主机通过用户选择的音频设备播放音频，或者它可以从主机获取音频缓冲区并自行处理音频播放。

### GetNextAudioBuffer

从主机检索下一个连续请求的音频采样帧数，指定在 `inNumSampleFrames` 中，并在 `inInBuffers` 中以非交错浮点数数组的形式返回。

插件必须管理 `inInBuffers` 的内存分配，它必须指向长度为 `inNumSampleFrames` 的 n 个浮点值缓冲区，其中 n 是通道数。此调用仅在使用了 `InitPluginAudio` 时可用。

返回：

- `suiteError_NoError`，
- `suiteError_PlayModuleAudioNotInitialized`，或
- `suiteError_PlayModuleAudioNotStarted`

```cpp
prSuiteError (*GetNextAudioBuffer)(
 csSDK_int32 inPlayID,
 float** inInBuffers,
 float** outOutBuffers,
 unsigned int inNumSampleFrames);
```

| 参数 | 描述 |
|---|---|
| `inInBuffers` | 目前在 CS6 中未使用。 |
| | 指向一个缓冲区的数组，每个缓冲区中保存 `inNumSampleFrames` 个输入音频采样帧，对应于可用的输入通道总数。 |
| `outOutBuffers`| 指向一个长度为 `inNumSampleFrames` 的缓冲区数组，主机将在此数组中写入输出音频。 |
| | 必须有 N 个缓冲区，其中 N 是在 `InitPluginAudio` 中指定的输出通道类型的输出通道数。 |
| `inNumSampleFrames` | `inInBuffers` 和 `outOutBuffers` 中每个缓冲区的大小。 |

---

## 发射调用套件

此套件可供其他类型的插件使用，以将帧推送到发射器。

例如，具有模态设置对话框的效果或字幕插件可以将帧推送到输出。
