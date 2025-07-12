---
title: rqitemcollection
---
# RQItemCollection 对象

`app.project.renderQueue.items`

#### 描述

RQItemCollection 包含项目中所有的渲染队列项，如项目渲染队列面板中所示。该集合提供了对 [RenderQueueItem 对象](../renderqueueitem) 的访问，并允许你从合成中创建它们。集合中的第一个 RenderQueueItem 对象位于索引位置 1。

:::info
RQItemCollection 是 [Collection 对象](../../other/collection) 的子类。在使用 RQItemCollection 时，Collection 的所有方法和属性都可用。
:::

---

## 函数

### RQItemCollection.add()

`app.project.renderQueue.items.add(comp)`

#### 描述

将合成添加到渲染队列中，创建一个 RenderQueueItem。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `comp` | [CompItem 对象](../../item/compitem) | 要添加的合成。 |

#### 返回

[RenderQueueItem 对象](../renderqueueitem)。
