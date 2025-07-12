---
title: 时间对象
---
# 时间对象

`myTime = new Time()`

#### 描述

一个表示时间的对象。在内部，时间以 `ticks` 计算；每秒有 254016000000 个 ticks。该时间可以以不同的表示形式访问，包括作为时间码字符串。

---

## 属性

### Time.seconds

`myTime.seconds`

#### 描述

时间值，以秒表示。

#### 类型

数字。

---

### Time.ticks

`myTime.ticks`

#### 描述

时间值，以 ticks 表示。

#### 类型

字符串。

---

## 方法

### Time.getFormatted()

`myTime.getFormatted(frameRate, displayFormat)`

#### 描述

返回传递的 `Time` 值，作为字符串，并以指定的显示格式格式化。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `frameRate` | [时间对象](#) | 时间对象，表示要使用的帧率的单帧持续时间。 |
| `displayFormat` | 整数 | 要使用的显示格式。可选值之一： |
| | | - `TIMEDISPLAY_24Timecode = 100;` |
| | | - `TIMEDISPLAY_25Timecode = 101;` |
| | | - `TIMEDISPLAY_2997DropTimecode = 102;` |
| | | - `TIMEDISPLAY_2997NonDropTimecode = 103;` |
| | | - `TIMEDISPLAY_30Timecode = 104;` |
| | | - `TIMEDISPLAY_50Timecode = 105;` |
| | | - `TIMEDISPLAY_5994DropTimecode = 106;` |
| | | - `TIMEDISPLAY_5994NonDropTimecode = 107;` |
| | | - `TIMEDISPLAY_60Timecode = 108;` |
| | | - `TIMEDISPLAY_Frames = 109;` |
| | | - `TIMEDISPLAY_23976Timecode = 110;` |
| | | - `TIMEDISPLAY_16mmFeetFrames = 111;` |
| | | - `TIMEDISPLAY_35mmFeetFrames = 112;` |
| | | - `TIMEDISPLAY_48Timecode = 113;` |
| | | - `TIMEDISPLAY_AudioSamplesTimecode = 200;` |
| | | - `TIMEDISPLAY_AudioMsTimecode = 201;` |

#### 返回值

字符串。

---

### Time.setSecondsAsFraction()

`myTime.setSecondsAsFraction(numerator, denominator)`

#### 描述

将时间对象设置为分子除以分母的结果。

#### 参数

分子和分母都是整数。

#### 返回值

布尔值；如果成功则为 `true`。
