---
title: PathPoints
---
# PathPoints

`app.activeDocument.pathItems[index].pathPoints`

#### 描述

特定路径中的 [PathPoint](.././PathPoint) 对象集合。

元素没有名称；必须通过索引访问它们。

---

## 属性

### PathPoints.length

`app.activeDocument.pathItems[index].pathPoints.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### PathPoints.parent

`app.activeDocument.pathItems[index].pathPoints.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### PathPoints.typename

`app.activeDocument.pathItems[index].pathPoints.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### PathPoints.add()

`app.activeDocument.pathItems[index].pathPoints.add()`

#### 描述

创建一个新对象。

#### 返回值

[PathPoint](.././PathPoint)

---

### PathPoints.index()

`app.activeDocument.pathItems[index].pathPoints.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[PathPoint](.././PathPoint)

---

### PathPoints.removeAll()

`app.activeDocument.pathItems[index].pathPoints.removeAll()`

#### 描述

删除集合中的所有元素。

#### 返回值

无。

---

## 示例

### 向路径添加路径点

```javascript
// 向现有路径追加一个新的 PathPoint
// 并初始化其锚点和控制点。
if (app.documents.length > 0) {
 var doc = app.activeDocument;

 var line = doc.pathItems.add();
 line.stroked = true;
 line.setEntirePath(Array(Array(220, 475), Array(375, 300)));

 // 向线条追加另一个点
 var newPoint = doc.pathItems[0].pathPoints.add();
 newPoint.anchor = Array(220, 300);
 newPoint.leftDirection = newPoint.anchor;
 newPoint.rightDirection = newPoint.anchor;
 newPoint.pointType = PointType.CORNER;
}
```
