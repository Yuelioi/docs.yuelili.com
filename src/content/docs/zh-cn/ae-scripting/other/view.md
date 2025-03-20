---
title: view
---
# View object

`app.activeViewer.views[0]`

#### 描述

The View object represents a specific view.

---

## 属性

### View.active

`app.activeViewer.views[0].active`

#### 描述

When `true`, indicates if the viewer panel is focused, and thereby frontmost.

#### 类型

Boolean; 只读.

---

### View.options

`app.activeViewer.views[0].options`

#### 描述

Options object for this View

#### 类型

[ViewOptions object](../viewoptions)

---

## 函数

### View.setActive()

`app.activeViewer.views[0].setActive()`

#### 描述

Moves this view panel to the front and places focus on it, making it active.
Calling this method will set the [view's active attribute](#viewactive) to `true`.

#### 参数

None.

#### 返回

Boolean, indicating if the view panel was made active.
