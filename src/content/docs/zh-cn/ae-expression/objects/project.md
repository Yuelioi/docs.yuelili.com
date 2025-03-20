---
title: 项目
---
# Project

`thisProject`

此类别包含与当前*项目*整体相关的信息——即当前的 AEP 文件。因此，更改相应的项目设置也会更新这些表达式返回的值。

---

## 属性

### Project.bitsPerChannel

`thisProject.bitsPerChannel`

#### 描述

项目的颜色深度，以每通道位数（bpc）为单位，设置在*项目设置 > 颜色管理*中。

值为 8、16 或 32 之一。等同于脚本项目属性 [`app.project.bitsPerChannel`](https://ae-scripting.docsforadobe.dev/general/project/#projectbitsperchannel)。

#### 类型

数字

#### 示例

```js
thisProject.bitsPerChannel
```

---

### Project.fullPath

`thisProject.fullPath`

#### 描述

平台特定的绝对文件路径，包括项目文件名。如果项目尚未保存，则返回空字符串。

#### 类型

字符串

#### 示例

```js
thisProject.fullPath
```

---

### Project.linearBlending

`thisProject.linearBlending`

#### 描述

*项目设置 > 颜色管理*中“使用 1.0 Gamma 混合颜色”选项的状态。

等同于脚本项目属性 [`app.project.linearBlending`](https://ae-scripting.docsforadobe.dev/general/project/#projectlinearblending)。

#### 类型

布尔值

#### 示例

```js
thisProject.linearBlending
```
