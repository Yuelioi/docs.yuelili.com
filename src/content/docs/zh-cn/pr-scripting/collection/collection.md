---
title: 集合对象
---
# 集合对象

与数组类似，集合将一组对象或值关联为一个逻辑组，并通过索引提供对它们的访问。然而，大多数集合对象是只读的。您不会自己为它们分配对象——它们的内容会在对象创建或删除时自动更新。

## 对象

- [ComponentCollection 对象](../componentcollection) - *待办*。
- [MarkerCollection 对象](../markercollection) - [ProjectItem 对象](../../item/projectitem) 和 [Sequence 对象](../../sequence/sequence) 中的 [Marker 对象](../../general/marker) 的集合。
- [ProjectCollection 对象](../projectcollection) - [Project 对象](../../general/project) 的集合。
- [ProjectItemCollection 对象](../projectitemcollection) - [ProjectItem 对象](../../item/projectitem) 的集合。
- [SequenceCollection 对象](../sequencecollection) - [Sequence 对象](../../sequence/sequence) 的集合。
- [TrackCollection 对象](../trackcollection) - [Track 对象](../../sequence/track) 的集合。
- [TrackItemCollection 对象](../trackitemcollection) - [TrackItem 对象](../../item/trackitem) 的集合。

---

## 属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `length` | 整数 | 集合中对象的数量。 |

---

## 方法

| 方法 | 返回类型 | 描述 |
| --- | --- | --- |
| `[]` | 对象 | 通过索引号检索集合中的对象。第一个对象的索引为 1。 |
