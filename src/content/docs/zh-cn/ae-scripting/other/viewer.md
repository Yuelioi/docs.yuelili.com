---
title: viewer
---
# Viewer object

`app.activeViewer`

#### 描述

The Viewer object represents a Composition, Layer, or Footage panel.

#### 示例

This maximizes the active viewer panel, and displays its type if it contains a composition.

```javascript
var activeViewer = app.activeViewer;
activeViewer.maximized = true;
if (activeViewer.type === ViewerType.VIEWER_COMPOSITION) {
    alert("Composition panel is active.");
}
```

---

## 属性

### Viewer.active

`viewer.active`

#### 描述

When `true`, indicates if the viewer panel is focused, and thereby frontmost.

#### 类型

Boolean; 只读.

---

### Viewer.activeViewIndex

`viewer.activeViewIndex`

#### 描述

The index of the current active [View object](../view), in the [Viewer.views](#viewerviews) array.

#### 类型

Integer; read/write.

---

### Viewer.maximized

`viewer.maximized`

#### 描述

When `true`, indicates if the viewer panel is at its maximized size.

#### 类型

Boolean; read/write.

---

### Viewer.views

`viewer.views`

#### 描述

All of the Views associated with this viewer.

#### 类型

Array of [View object](../view) objects; 只读.

---

### Viewer.type

`viewer.type`

#### 描述

The content in the viewer panel.

#### 类型

A `ViewerType` enumerated value; 只读. One of:

- `ViewerType.VIEWER_COMPOSITION`
- `ViewerType.VIEWER_LAYER`
- `ViewerType.VIEWER_FOOTAGE`

---

## 函数

### Viewer.setActive()

`viewer.setActive()`

#### 描述

Moves the viewer panel to the front and places focus on it, making it active.
Calling this method will set the [viewer's active attribute](#vieweractive) to `true`.

#### 参数

None.

#### 返回

Boolean indicating if the viewer panel was made active.
