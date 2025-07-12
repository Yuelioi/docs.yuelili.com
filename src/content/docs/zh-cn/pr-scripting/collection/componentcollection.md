---
title: ComponentCollection 对象
---
# ComponentCollection 对象

`app.project.rootItem.children[index].videoComponents()`

`app.project.sequences[index].audioTracks[index].clips[index].components`

`app.project.sequences[index].videoTracks[index].clips[index].components`

:::info
ComponentCollection 是 [Collection 对象](../collection) 的子类。在使用 ComponentCollection 时，除了下面列出的方法和属性外，Collection 的所有方法和属性都可用。
:::

---

## 属性

### ComponentCollection.numItems

`app.project.rootItem.children[index].videoComponents().numItems`

`app.project.sequences[index].audioTracks[index].clips[index].components.numItems`

`app.project.sequences[index].videoTracks[index].clips[index].components.numItems`

#### 描述

ComponentCollection 中的项目数量。

#### 类型

整数，只读。
