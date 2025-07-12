---
title: 时间
---
# 时间

有两种不同的时间表示方式：`scale over sampleSize` 和 `ticks`。

---

## scale over sampleSize

第一种时间表示方式使用 value/scale/`sampleSize` 组件，这些组件可以分开使用，也可以组合在 TDB_TimeRecord 结构中。scale over `sampleSize` 定义了时间基准。例如，要表示 NTSC 标准的 29.97 帧每秒，`scale` / `sampleSize = 30000` / 1001。要表示 PAL 标准的 25 帧每秒，25 / 1。

要表示 24p 标准的 23.976，23976 / 1000，或 24000 / 1001。要表示大多数其他时间基准，使用 `sampleSize = 1`，scale 是帧速率（例如 15、24、30 fps 等）。另一种理解 scale 和 `sampleSize` 的方式是，`sampleSize` 是视频帧的持续时间，而 scale 是视频一秒钟的持续时间。

`value` 是以 `scale` over `sampleSize` 给出的时间基准中的时间。因此，例如，30 帧且 `sampleSize` 为 1001 的 `value` 为 30030。

要将 `value` 转换为秒，除以 scale。要将 `value` 转换为帧，除以 `sampleSize`。

有时，在处理纯音频媒体时，`sampleSize` 指的是音频样本，且 `sampleSize = 1`。在这种情况下，scale 是音频采样率（22050、32000、44100、48000 Hz 等）。

---

## PrTime

API 中较新的部分使用基于 ticks 的时间值，该值存储在有符号的 64 位整数中。使用这种新格式的变量类型为 PrTime。当帧速率表示为 PrTime 时，帧速率是帧持续时间内的 ticks 数量。

每秒的 ticks 数量必须使用 [Time Suite](../sweetpea-suites#time-suite) 中的回调函数来获取。此速率在应用程序运行期间保证是恒定的。
