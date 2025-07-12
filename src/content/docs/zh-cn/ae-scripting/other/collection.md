---
title: 集合
---
# 集合对象

#### 描述

与数组类似，集合将一组对象或值关联为一个逻辑组，并通过索引提供对它们的访问。然而，大多数集合对象是只读的。您不会手动为它们分配对象——它们的内容会随着对象的创建或删除而自动更新。

:::tip
集合的索引编号从 1 开始，而不是 0。
:::

## 对象

- [ItemCollection 对象](../../item/itemcollection) 项目面板中所有项目（导入的文件、文件夹、实体等）。
- [LayerCollection 对象](../../layer/layercollection) 合成中的所有图层。
- [OMCollection 对象](../../renderqueue/omcollection) 项目中所有输出模块项。
- [RQItemCollection 对象](../../renderqueue/rqitemcollection) 项目中所有渲染队列项。

---

## 属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `length` | 整数 | 集合中对象的数量。 |

---

## 函数

| 方法 | 返回类型 | 描述 |
| --- | --- | --- |
| `[]` | 对象 | 通过索引号检索集合中的对象。第一个对象的索引为 1。 |
