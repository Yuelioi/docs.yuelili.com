---
title: rqitemcollection
---
# RQItemCollection object

`app.project.renderQueue.items`

#### 描述

The RQItemCollection contains all of the render-queue items in a project, as shown in the Render Queue panel of the project. The collection provides access to the [RenderQueueItem objects](../renderqueueitem), and allows you to create them from compositions. The first RenderQueueItem object in the collection is at index position 1.

:::info
RQItemCollection is a subclass of [Collection object](../../other/collection). All methods and attributes of Collection are available when working with RQItemCollection.
:::

---

## 函数

### RQItemCollection.add()

`app.project.renderQueue.items.add(comp)`

#### 描述

Adds a composition to the Render Queue, creating a RenderQueueItem.

#### 参数

| 参数 |                  类型                   |         描述          |
| --------- | --------------------------------------- | ---------------------------- |
| `comp`    | [CompItem object](../../item/compitem) | The composition to be added. |

#### 返回

[RenderQueueItem object](../renderqueueitem).
