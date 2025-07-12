---
title: ComponentParam 对象
---
# ComponentParam 对象

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index]`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index]`

#### 描述

ComponentParam 对象表示与组件关联的参数，应用于 [TrackItem 对象](../../item/trackitem)。

:::note
`C:\Program Files\Adobe\Adobe Premiere Pro 2024\Dictionaries\en_DE\zdictionary_PPRO_en_US.dat` - ("…anti-flicker Filter")
:::

---

## 属性

### ComponentParam.displayName

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].displayName`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].displayName`

#### 描述

组件参数的名称，显示给用户的名称。已本地化。

#### 类型

字符串；只读。

---

## 方法

### ComponentParam.addKey()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].addKey(time)`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].addKey(time)`

#### 描述

在指定时间向组件参数流添加关键帧。注意：只能在支持关键帧的参数上设置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `time` | [Time 对象](../../other/time) | 关键帧应添加的时间。 |

#### 返回值

成功时返回 `0`。

---

### ComponentParam.areKeyframesSupported()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].areKeyframesSupported()`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].areKeyframesSupported()`

#### 描述

检索此组件参数是否支持关键帧。

#### 参数

无。

#### 返回值

如果支持关键帧，返回 `true`；否则返回 `false`。

---

### ComponentParam.findNearestKey()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].findNearestKey(timeToCheck, threshold)`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].findNearestKey(timeToCheck, threshold)`

#### 描述

设置组件参数是否随时间变化。注意：只能在支持关键帧的参数上设置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `timeToCheck` | | 从给定时间开始搜索 |
| `threshold` | 整数 | 时间距离，以滴答为单位，可以是正向或反向。 |

#### 返回值

返回一个 Time 值，指示最近的关键帧时间。

---

### ComponentParam.findNextKey()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].findNextKey(timeToCheck)`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].findNextKey(timeToCheck)`

#### 描述

返回在提供的 `timeToCheck` 之后的关键帧。注意：只能在支持关键帧的参数上设置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `timeToCheck` | | 从给定时间开始搜索。 |

#### 返回值

返回一个 Time 值，指示最近的关键帧时间，如果没有后续关键帧，则返回 `0`。

---

### ComponentParam.findPreviousKey()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].findPreviousKey(timeToCheck)`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].findPreviousKey(timeToCheck)`

#### 描述

返回在提供的 `timeToCheck` 之前的关键帧。注意：只能在支持关键帧的参数上设置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `timeToCheck` | | 从给定时间开始搜索。 |

#### 返回值

返回一个 Time 值，指示最近的关键帧时间，如果没有前一个关键帧，则返回 `0`。

---

### ComponentParam.getColorValue()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].getColorValue()`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].getColorValue()`

#### 描述

获取组件参数流的值。注意：只能在非时间变化的参数上使用。

#### 参数

无。

#### 返回值

返回一个包含组件参数流中值的 Color，如果不成功则返回 `0`。

---

### ComponentParam.getKeys()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].getKeys()`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].getKeys()`

#### 描述

返回 `timeToCheck` 组件参数上所有关键帧的数组。注意：只能在支持关键帧的参数上设置。

#### 参数

无。

#### 返回值

返回一个 Time 值数组，指示每个关键帧发生的时间，如果没有关键帧则返回 `0`。

---

### ComponentParam.getValue()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].getValue()`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].getValue()`

#### 描述

获取组件参数流的值。注意：只能在非时间变化的参数上使用。

#### 参数

无。

#### 返回值

返回组件参数流的值；返回值随流类型而变化。

---

### ComponentParam.getValueAtKey()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].getValueAtKey(time)`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].getValueAtKey(time)`

#### 描述

在指定的关键帧时间检索组件参数流的值。注意：只能用于支持关键帧的参数流。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `time` | [Time 对象](../../other/time) | 从该时间检索关键帧值。 |

#### 返回值

返回 `time` 处组件参数流的值，如果不成功则返回 `0`。

---

### ComponentParam.getValueAtTime()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].getValueAtTime(time)`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].getValueAtTime(time)`

#### 描述

在指定时间检索组件参数流的值。如果值在两个关键帧之间，则进行插值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `time` | [Time 对象](../../other/time) | 从该时间检索关键帧值。 |

#### 返回值

返回 `time` 处组件参数流的值，如果不成功则返回 `0`。

---

### ComponentParam.isTimeVarying()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].isTimeVarying()`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].isTimeVarying()`

#### 描述

检索组件参数是否随时间变化。

#### 参数

无。

#### 返回值

如果参数随时间变化，返回 `true`；否则返回 `false`。

---

### ComponentParam.removeKey()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].removeKey(time)`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].removeKey(time)`

#### 描述

在指定时间从组件参数流中删除关键帧。注意：只能在支持关键帧的参数上设置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `time` | [Time 对象](../../other/time) | 指示关键帧应删除的时间值。 |

#### 返回值

成功时返回 `0`。

---

### ComponentParam.removeKeyRange()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].removeKeyRange(startTime, endTime)`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].removeKeyRange(startTime, endTime)`

#### 描述

在指定时间范围内从组件参数流中删除所有关键帧。注意：只能在支持关键帧的参数上设置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `startTime` | [Time 对象](../../other/time) | 开始删除关键帧的时间（包含）。 |
| `endTime` | [Time 对象](../../other/time) | 结束删除关键帧的时间。 |

#### 返回值

成功时返回 `0`。

---

### ComponentParam.setColorValue()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].setColorValue(alpha, red, green, blue, updateUI)`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].setColorValue(alpha, red, green, blue, updateUI)`

#### 描述

设置表示颜色的组件参数流中的值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `alpha` | 整数 | Alpha 值。 |
| `red` | 整数 | 红色值。 |
| `green` | 整数 | 绿色值。 |
| `blue` | 整数 | 蓝色值。 |
| `updateUI`| 整数 | 如果为 `1`，将在更新流的值后强制 Premiere Pro 更新 UI。 |

#### 返回值

成功时返回 `0`。

---

### ComponentParam.setInterpolationTypeAtKey()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].setInterpolationTypeAtKey(time, interpretationType, [updateUI])`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].setInterpolationTypeAtKey(time, interpretationType, [updateUI])`

#### 描述

指定在指定时间分配给关键帧的插值类型。注意：只能用于支持关键帧的参数流。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `time` | [Time 对象](../../other/time) | 要修改的关键帧时间。 |
| `interpolationType`| 插值类型枚举 | 以下之一： |
| | | - `0` - `KF_Interp_Mode_Linear` |
| | | - `1` - `kfInterpMode_EaseIn_Obsolete`|
| | | - `2` - `kfInterpMode_EaseOut_Obsolete`|
| | | - `3` - `kfInterpMode_EaseInEaseOut_Obsolete` |
| | | - `4` - `KF_Interp_Mode_Hold` |
| | | - `5` - `KF_Interp_Mode_Bezier` |
| | | - `6` - `KF_Interp_Mode_Time` |
| | | - `7` - `kfInterpMode_TimeTransitionStart` |
| | | - `8` - `kfInterpMode_TimeTransitionEnd` |
| `updateUI` | 布尔值 | 是否在之后更新 UI。 |

#### 返回值

成功时返回 `0`。

---

### ComponentParam.setTimeVarying()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].setTimeVarying(varying)`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].setTimeVarying(varying)`

#### 描述

设置组件参数是否随时间变化。注意：只能在支持关键帧的参数上设置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `varying` | 布尔值 | 如果为 `true`，组件参数将随时间变化；如果为 `false`，则不会。 |

#### 返回值

成功时返回 `0`。

---

### ComponentParam.setValue()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].setValue(value, updateUI)`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].setValue(value, updateUI)`

#### 描述

设置组件参数流的值。注意：只能在非时间变化的参数上使用。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | | 必须是适合组件参数流的类型。 |
| `updateUI`| 整数 | 如果为 `1`，将在更新流的值后强制 Premiere Pro 更新 UI。 |

#### 返回值

成功时返回 `0`。

---

### ComponentParam.setValueAtKey()

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].setValueAtKey(time, value, updateUI)`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].setValueAtKey(time, value, updateUI)`

#### 描述

在指定的关键帧时间设置组件参数流的值。注意：只能用于支持关键帧的参数流。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `time` | [Time 对象](../../other/time) | 设置关键帧值的时间。 |
| `value` | | 要设置的值。 |
| `updateUI`| 整数 | 如果为 `1`，将在更新流的值后强制 Premiere Pro 更新 UI。 |

#### 返回值

成功时返回 `0`。

---
