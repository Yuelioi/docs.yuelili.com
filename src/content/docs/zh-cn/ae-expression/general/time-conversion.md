---
title: 时间转换
---
# Time Conversion

这些方法用于在各种时间格式之间进行转换。

:::tip
如果你想对素材中的时间码外观有更多控制，可以使用 `timeToCurrentFormat()` 方法或其他 `timeTo` 方法来生成时间码，而不是使用时间码或数字效果。
:::

#### 示例

你可以通过创建一个文本图层，应用你想要的文本样式，并将此表达式添加到源文本属性中，轻松格式化和动画化时间码文本：

```js
timeToCurrentFormat();
```

---

## 函数

### framesToTime()

`framesToTime(frames[, fps=1.0 / thisComp.frameDuration])`

#### 描述

返回与帧数参数对应的时间。帧数不必是整数。

这是 [`timeToFrames()`]() 的逆操作。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `frames` | Number | 要转换的帧数。 |
| `fps` | Number | 可选。用于转换的每秒帧数。默认为 `1.0 / thisComp.frameDuration`（当前合成的帧速率）。 |

#### 返回

Number

---

### timeToCurrentFormat()

`timeToCurrentFormat([t=time + thisComp.displayStartTime][, fps=1.0 / thisComp.frameDuration][, isDuration=false][, ntscDropFrame=thisComp.ntscDropFrame])`

#### 描述

将 `t` 的值转换为表示当前项目设置显示格式时间的字符串。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | Number | 可选。要转换的时间（以秒为单位）。默认为 `time + thisComp.displayStartTime`。 |
| `fps` | Number | 可选。默认为 `1.0 / thisComp.frameDuration`（当前合成的帧速率）。 |
| `isDuration` | Boolean | 可选。`t` 是否表示两个时间之间的差异，而不是绝对时间。绝对时间向负无穷方向舍入；持续时间向零舍入（正值向上舍入）。默认为 `false`。 |
| `ntscDropFrame` | Boolean | 可选。如果为 `false`，结果为 NTSC 非丢帧时间码。如果为 `true`，结果为 NTSC 丢帧时间码。默认为 `thisComp.ntscDropFrame`。 |

:::note `ntscDropFrame` 参数在 After Effects CS5.5 中添加。 :::#### 返回

String

---

### timeToFeetAndFrames()

`timeToFeetAndFrames([t=time + thisComp.displayStartTime][, fps=1.0 / thisComp.frameDuration][, framesPerFoot=16][, isDuration=false])`

#### 描述

将 `t` 的值转换为表示胶片英尺和帧数的字符串。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | Number | 可选。要转换的时间（以秒为单位）。默认为 `time + thisComp.displayStartTime`。 |
| `framesPerFoot` | Number | 可选。指定一英尺胶片中的帧数。默认为 `16`（35mm 胶片最常见的速率）。 |
| `isDuration` | Boolean | 可选。`t` 是否表示两个时间之间的差异，而不是绝对时间。绝对时间向负无穷方向舍入；持续时间向零舍入（正值向上舍入）。默认为 `false`。 |

#### 返回

String

---

### timeToFrames()

`timeToFrames([t=time + thisComp.displayStartTime][, fps=1.0 / thisComp.frameDuration][, isDuration=false])`

#### 描述

将 `t` 的值（以秒为单位的时间）转换为整数帧数。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | Number | 可选。要转换的时间（以秒为单位）。默认为 `time + thisComp.displayStartTime`。 |
| `fps` | Number | 可选。用于转换的每秒帧数。默认为 `1.0 / thisComp.frameDuration`（当前合成的帧速率）。 |
| `isDuration` | Boolean | 可选。`t` 是否表示两个时间之间的差异，而不是绝对时间。绝对时间向负无穷方向舍入；持续时间向零舍入（正值向上舍入）。默认为 `false`。 |

#### 返回

Number

---

### timeToNTSCTimecode()

`timeToNTSCTimecode([t=time + thisComp.displayStartTime][, ntscDropFrame=false][, isDuration=false])`

#### 描述

将 `t` 转换为表示 NTSC 时间码的字符串。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | Number | 可选。要转换的时间（以秒为单位）。默认为 `time + thisComp.displayStartTime`。 |
| `ntscDropFrame` | Boolean | 可选。如果为 `false`，结果为 NTSC 非丢帧时间码。如果为 `true`，结果为 NTSC 丢帧时间码。默认为 `false`。 |
| `isDuration` | Boolean | 可选。`t` 是否表示两个时间之间的差异，而不是绝对时间。绝对时间向负无穷方向舍入；持续时间向零舍入（正值向上舍入）。默认为 `false`。 |

#### 返回

String

---

### timeToTimecode()

`timeToTimecode([t=time + thisComp.displayStartTime][, timecodeBase=30][, isDuration=false])`

#### 描述

将 `t` 的值转换为表示时间码的字符串。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | Number | 可选。要转换的时间（以秒为单位）。默认为 `time + thisComp.displayStartTime`。 |
| `timecodeBase` | Number | 可选。指定每秒的帧数。默认为 `30`。 |
| `isDuration` | Boolean | 可选。`t` 是否表示两个时间之间的差异，而不是绝对时间。绝对时间向负无穷方向舍入；持续时间向零舍入（正值向上舍入）。默认为 `false`。 |

#### 返回

String
