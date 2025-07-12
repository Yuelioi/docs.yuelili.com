---
title: SourceMonitor 对象
---
# SourceMonitor 对象

`app.sourceMonitor`

#### 描述

Source 对象代表 Premiere Pro 的源监视器。

---

## 属性

无。

---

## 方法

### SourceMonitor.closeAllClips()

`app.sourceMonitor.closeAllClips()`

#### 描述

关闭源监视器中的所有剪辑。

#### 参数

无。

#### 返回值

如果成功，返回 `0`。

---

### SourceMonitor.closeClip()

`app.sourceMonitor.closeClip()`

#### 描述

关闭源监视器中最前面的剪辑。

#### 参数

无。

#### 返回值

如果成功，返回 `0`。

---

### SourceMonitor.getPosition()

`app.sourceMonitor.getPosition()`

#### 描述

获取源监视器当前时间指示器的位置。

#### 参数

无。

#### 返回值

返回一个包含源监视器当前时间指示器位置的 [Time 对象](../../other/time)。

---

### SourceMonitor.getProjectItem()

`app.sourceMonitor.getProjectItem()`

#### 描述

获取与源监视器中打开的媒体对应的项目项。

#### 参数

无。

#### 返回值

如果成功，返回 projectItem；否则返回 null。

---

### SourceMonitor.openFilePath()

`app.sourceMonitor.openFilePath(path)`

#### 描述

在源监视器中打开一个文件。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `path` | 字符串 | 要打开的文件的路径。 |

#### 返回值

如果成功，返回 `true`。

---

### SourceMonitor.openProjectItem()

`app.sourceMonitor.openProjectItem(projectItem)`

#### 描述

在源监视器中打开一个项目项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `projectItem` | [ProjectItem 对象](../../item/projectitem) | 要打开的项目项。 |

#### 返回值

如果成功，返回 `0`。

---

### SourceMonitor.play()

`app.sourceMonitor.play(playbackSpeed)`

#### 描述

以指定的播放速度开始播放源监视器中的内容。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `playbackSpeed` | 浮点数 | 播放速度。 |

#### 返回值

如果成功，返回 `0`。
