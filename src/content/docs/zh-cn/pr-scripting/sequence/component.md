---
title: 组件对象
---
# 组件对象

`app.project.sequences[index].audioTracks[index].clips[index].components[index]`

`app.project.sequences[index].videoTracks[index].clips[index].components[index]`

#### 描述

Component 对象表示已添加或应用于 trackItem 的内容。

---

## 属性

### Component.displayName

`app.project.sequences[index].audioTracks[index].clips[index].components[index].displayName`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].displayName`

#### 描述

组件的名称，显示给用户的名称。已本地化。

#### 类型

字符串；只读。

---

### Component.matchName

`app.project.sequences[index].audioTracks[index].clips[index].components[index].matchName`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].matchName`

#### 描述

组件的名称，从磁盘加载时使用的名称；用于唯一标识效果插件。

#### 类型

字符串；只读。

---

### Component.properties

`app.project.sequences[index].audioTracks[index].clips[index].components[index].properties`

`app.project.sequences[index].videoTracks[index].clips[index].components[index].properties`

#### 描述

相关组件的属性；通常是效果参数。

#### 类型

组件数组，只读；（ComponentParamCollection 对象）。
