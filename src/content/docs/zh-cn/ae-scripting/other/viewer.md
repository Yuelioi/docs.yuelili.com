---
title: 查看器
---
# Viewer 对象

`app.activeViewer`

#### 描述

Viewer 对象表示一个合成、图层或素材面板。

#### 示例

以下代码将最大化活动查看器面板，并在其包含合成时显示其类型。

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

当为 `true` 时，表示查看器面板是否被聚焦，从而位于最前面。

#### 类型

布尔值；只读。

---

### Viewer.activeViewIndex

`viewer.activeViewIndex`

#### 描述

当前活动的 [View 对象](../view) 在 [Viewer.views](#viewerviews) 数组中的索引。

#### 类型

整数；可读写。

---

### Viewer.maximized

`viewer.maximized`

#### 描述

当为 `true` 时，表示查看器面板是否处于最大化状态。

#### 类型

布尔值；可读写。

---

### Viewer.views

`viewer.views`

#### 描述

与此查看器关联的所有视图。

#### 类型

[View 对象](../view) 数组；只读。

---

### Viewer.type

`viewer.type`

#### 描述

查看器面板中的内容类型。

#### 类型

`ViewerType` 枚举值；只读。可能的值包括：

- `ViewerType.VIEWER_COMPOSITION`
- `ViewerType.VIEWER_LAYER`
- `ViewerType.VIEWER_FOOTAGE`

---

## 函数

### Viewer.setActive()

`viewer.setActive()`

#### 描述

将查看器面板移至最前面并聚焦，使其处于活动状态。调用此方法会将 [viewer 的 active 属性](#vieweractive) 设置为 `true`。

#### 参数

无。

#### 返回

布尔值，表示查看器面板是否被激活。
