---
title: omcollection
---
# OMCollection 对象

`app.project.renderQueue.items.outputModules`

#### 描述

OMCollection 包含了渲染队列中的所有输出模块。该集合提供了对 [OutputModule 对象](../outputmodule) 的访问，并允许你创建它们。集合中的第一个 OutputModule 对象位于索引位置 1。

:::info
OMCollection 是 [Collection 对象](../../other/collection) 的子类。在使用 OMCollection 时，Collection 的所有方法和属性都可用。
:::

---

## 函数

### OMCollection.add()

`app.project.renderQueue.item(1).outputModules.add()`

#### 描述

向渲染队列项添加一个新的输出模块，创建一个 OutputModule。

#### 返回

[OutputModule 对象](../outputmodule)。
