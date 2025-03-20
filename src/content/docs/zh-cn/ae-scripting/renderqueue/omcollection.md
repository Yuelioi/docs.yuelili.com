---
title: omcollection
---
# OMCollection object

`app.project.renderQueue.items.outputModules`

#### 描述

The OMCollection contains all of the output modules in a render queue. The collection provides access to the [OutputModule objects](../outputmodule), and allows you to create them. The first OutputModule object in the collection is at index position 1.

:::info
OMCollection is a subclass of [Collection object](../../other/collection). All methods and attributes of Collection are available when working with OMCollection.
:::

---

## 函数

### OMCollection.add()

`app.project.renderQueue.item(1).outputModules.add()`

#### 描述

Adds a new Output Module to the Render Queue Item, creating an OutputModule.

#### 返回

[OutputModule object](../outputmodule).
