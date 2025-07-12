---
title: PathPoint
---
# PathPoint

`app.activeDocument.pathItems[index].pathPoints[index]`

#### 描述

特定路径上的一个点。

每个路径点由一个锚点（`anchor`）和一对控制点（`leftDirection` 和 `rightDirection`）组成。

---

## 属性

### PathPoint.anchor

`app.activeDocument.pathItems[index].pathPoints[index].anchor`

#### 描述

该点的锚点位置。

#### 类型

包含2个数字的数组

---

### PathPoint.leftDirection

`app.activeDocument.pathItems[index].pathPoints[index].leftDirection`

#### 描述

该路径点的入控制点位置。

#### 类型

包含2个数字的数组

---

### PathPoint.parent

`app.activeDocument.pathItems[index].pathPoints[index].parent`

#### 描述

包含此路径点的路径项。

#### 类型

[PathItem](.././PathItem); 只读。

---

### PathPoint.pointType

`app.activeDocument.pathItems[index].pathPoints[index].pointType`

#### 描述

路径点的类型，可以是曲线点或角点。任何点都可以被视为角点。

将类型设置为角点时，当用户尝试在用户界面中修改它们时，会强制左右方向点位于一条直线上。

#### 类型

[PointType](../scripting-constants#pointtype)

---

### PathPoint.rightDirection

`app.activeDocument.pathItems[index].pathPoints[index].rightDirection`

#### 描述

该路径点的出控制点位置。

#### 类型

包含2个数字的数组

---

### PathPoint.selected

`app.activeDocument.pathItems[index].pathPoints[index].selected`

#### 描述

此路径点的点是否被选中，如果是，哪些点被选中。

#### 类型

[PathPointSelection](../scripting-constants#pathpointselection)

---

### PathPoint.typename

`app.activeDocument.pathItems[index].pathPoints[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串; 只读。

---

## 方法

### PathPoint.remove()

`app.activeDocument.pathItems[index].pathPoints[index].remove()`

#### 描述

从路径中移除引用的点。

#### 返回值

无。
```
