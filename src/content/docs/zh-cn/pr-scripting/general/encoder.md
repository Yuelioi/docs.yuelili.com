---
title: 编码器对象
---
# 编码器对象

`app.encoder`

#### 描述

`encoder` 对象代表 Adobe Media Encoder，用于在 Premiere Pro 之外进行本地渲染。

:::warning
`app.encoder` 在 Premiere Pro 14.3.1 - 15 版本中仅在 Mac 上无法使用。已在 22 及更高版本中修复。[查看详情。](https://community.adobe.com/t5/premiere-pro-discussions/missing-the-object-app-encoder-14-3-1-15-0-15-1-15-2/m-p/12544488)
:::

---

## 属性

无。

---

## 方法

### Encoder.encodeFile()

`app.encoder.encodeFile(filePath, outputPath, presetPath, workArea, removeUponCompletion, inPoint, outPoint)`

#### 描述

使 Adobe Media Encoder 使用指定的设置渲染指定文件（可选地，渲染指定范围）。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `filePath` | String | 要渲染的文件的路径。 |
| `outputPath` | String | 输出文件的路径。 |
| `presetPath` | String | 预设文件（.epr）的路径。 |
| `workArea` | Integer | 表示要使用的工作区域的整数： |
| | | - `0` - `ENCODE_ENTIRE` |
| | | - `1` - `ENCODE_IN_TO_OUT` |
| | | - `2` - `ENCODE_WORK_AREA` |
| `removeUponCompletion` | Integer | 如果为 `1`，任务完成后将被移除。 |
| `inPoint` | [时间对象](../../other/time) | 新文件的入点时间对象。 |
| `outPoint` | [时间对象](../../other/time) | 新文件的出点时间对象。 |

#### 返回值

返回一个字符串类型的任务 ID，表示添加到 AME 队列中的渲染任务，如果失败则返回 `0`。

---

### Encoder.encodeProjectItem()

`app.encoder.encodeProjectItem(projectItem, outputPath, presetPath, workArea, removeUponCompletion)`

#### 描述

使 Adobe Media Encoder 使用指定的设置渲染指定的 [ProjectItem 对象](../../item/projectitem)（可选地，渲染指定范围）。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `projectItem` | [ProjectItem 对象](../../item/projectitem) | 要渲染的项目项。 |
| `outputPath` | String | 输出文件的路径。 |
| `presetPath` | String | 预设文件（.epr）的路径。 |
| `workArea` | Integer | 表示要使用的工作区域的整数： |
| | | - `0` - `ENCODE_ENTIRE` |
| | | - `1` - `ENCODE_IN_TO_OUT` |
| | | - `2` - `ENCODE_WORK_AREA` |
| `removeUponCompletion` | Integer | 如果为 `1`，任务完成后将被移除。 |

#### 返回值

返回一个字符串类型的任务 ID，表示添加到 AME 队列中的渲染任务，如果失败则返回 `0`。

---

### Encoder.encodeSequence()

`app.encoder.encodeSequence(sequence, outputPath, presetPath, workArea, removeUponCompletion)`

#### 描述

使 Adobe Media Encoder 使用指定的设置渲染指定的 [Sequence 对象](../../sequence/sequence)。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `sequence` | [Sequence 对象](../../sequence/sequence) | 要渲染的序列。 |
| `outputPath` | String | 输出文件的路径。 |
| `presetPath` | String | 预设文件（.epr）的路径。 |
| `workArea` | Integer | 表示要使用的工作区域的整数： |
| | | - `0` - `ENCODE_ENTIRE` |
| | | - `1` - `ENCODE_IN_TO_OUT` |
| | | - `2` - `ENCODE_WORK_AREA` |
| `removeUponCompletion` | Integer | 如果为 `1`，任务完成后将被移除。 |

#### 返回值

返回一个字符串类型的任务 ID，表示添加到 AME 队列中的渲染任务，如果失败则返回 `0`。

---

### Encoder.launchEncoder()

`app.encoder.launchEncoder()`

#### 描述

启动 Adobe Media Encoder。

#### 参数

无。

#### 返回值

如果成功则返回 `0`。

---

### Encoder.setEmbeddedXMPEnabled()

`app.encoder.setEmbeddedXMPEnabled(enabled)`

#### 描述

确定是否输出嵌入的 XMP 元数据。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `enabled` | Integer | 传递 `1` 启用嵌入输出，`0` 禁用。 |

#### 返回值

如果成功则返回 `0`。

:::note

应用程序根据多种因素做出此决定，并且没有 API 控制可以“强制”输出侧文件或嵌入输出，对于通常使用“另一种方法”的格式。
:::

---

### Encoder.setSidecarXMPEnabled()

`app.encoder.setSidecarXMPEnabled(enabled)`

#### 描述

确定是否输出包含 XMP 元数据的侧文件。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `enabled` | Integer | 传递 `1` 启用侧文件输出，`0` 禁用。 |

#### 返回值

如果成功则返回 `0`。

---

### Encoder.startBatch()

`app.encoder.startBatch()`

#### 描述

使 Adobe Media Encoder 开始渲染其渲染队列。

#### 参数

无。

#### 返回值

如果成功则返回 `0`。

---
