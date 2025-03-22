---
title: 视图
---
# View 对象

`app.activeViewer.views[0]`

#### 描述

View 对象表示一个特定的视图。

---

## 属性

### View.active

`app.activeViewer.views[0].active`

#### 描述

当为 `true` 时，表示查看器面板是否被聚焦，并因此位于最前面。

#### 类型

Boolean; 只读.

---

### View.options

`app.activeViewer.views[0].options`

#### 描述

此视图的选项对象

#### 类型

[ViewOptions 对象](../viewoptions)

---

## 函数

### View.setActive()

`app.activeViewer.views[0].setActive()`

#### 描述

将此视图面板移至最前面并聚焦于它，使其处于活动状态。
调用此方法会将 [view 的 active 属性](#viewactive) 设置为 `true`。

#### 参数

无。

#### 返回

Boolean，表示视图面板是否被激活。
