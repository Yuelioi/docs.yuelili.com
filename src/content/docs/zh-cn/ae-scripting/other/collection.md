---
title: collection
---
# Collection object

#### 描述

Like an array, a collection associates a set of objects or values as a logical group and provides access to them by index. However, most collection objects are read-only. You do not assign objects to them yourself—their contents update automatically as objects are created or deleted.

:::tip
The index numbering of a collection starts with 1, not 0.
:::

## Objects

- [ItemCollection object](../../item/itemcollection) All of the items (imported files, folders, solids, and so on) found in the Project panel.
- [LayerCollection object](../../layer/layercollection) All of the layers in a composition.
- [OMCollection object](../../renderqueue/omcollection) All of the Output Module items in the project.
- [RQItemCollection object](../../renderqueue/rqitemcollection) All of the render-queue items in the project.

---

## 属性

| Attribute |  类型   |               描述                |
| --------- | ------- | ---------------------------------------- |
| `length`  | Integer | The number of objects in the collection. |

---

## 函数

| Method | Return Type |                                        描述                                         |
| ------ | ----------- | ------------------------------------------------------------------------------------------ |
| `[]`   | Object      | Retrieves an object in the collection by its index number. The first object is at index 1. |
