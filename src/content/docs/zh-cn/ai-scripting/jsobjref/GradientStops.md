---
title: GradientStops
---
# GradientStops

`app.activeDocument.gradients[index].gradientStops`

#### 描述

特定渐变中的 [GradientStop](.././GradientStop) 对象集合。元素没有名称，必须通过索引访问。

---

## 属性

### GradientStops.length

`app.activeDocument.gradients[index].gradientStops.length`

#### 描述

集合中对象的数量。

#### 类型

数字；只读。

---

### GradientStops.parent

`app.activeDocument.gradients[index].gradientStops.parent`

#### 描述

该对象的父对象。

#### 类型

对象；只读。

---

### GradientStops.typename

`app.activeDocument.gradients[index].gradientStops.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### GradientStops.add()

`app.activeDocument.gradients[index].gradientStops.add()`

#### 描述

创建一个新对象。

#### 返回值

[GradientStop](.././GradientStop)

---

### GradientStops.getByName()

`app.activeDocument.gradients[index].gradientStops.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[GradientStop](.././GradientStop)

---

### GradientStops.index()

`app.activeDocument.gradients[index].gradientStops.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[GradientStop](.././GradientStop)

---

### GradientStops.removeAll()

`app.activeDocument.gradients[index].gradientStops.removeAll()`

#### 描述

删除此集合中的所有对象。

#### 返回值

无。

---

## 示例

### 添加一个新的渐变停止点

```javascript
// 向渐变中添加一个新的渐变停止点，新停止点的颜色为 70% 灰色
if (app.documents.length > 0 && app.activeDocument.gradients.length > 0) {
 // 获取要更改的渐变的引用
 var changeGradient = app.activeDocument.gradients[0];

 // 获取最后一个渐变停止点的引用
 var origCount = changeGradient.gradientStops.length;
 var lastStop = changeGradient.gradientStops[origCount - 1];

 // 添加新的渐变停止点
 var newStop = changeGradient.gradientStops.add();

 // 设置新渐变停止点的值。
 // 将原始的最后一个渐变停止点向左移动一点，并在旧位置插入新的渐变停止点
 newStop.rampPoint = lastStop.rampPoint;
 lastStop.rampPoint = lastStop.rampPoint - 10;

 // 创建一个新颜色以应用于新创建的渐变停止点
 var newStopColor = new GrayColor();
 newStopColor.gray = 70.0;
 newStop.color = newStopColor;
}
```
