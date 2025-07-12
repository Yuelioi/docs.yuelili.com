---
title: MarkerCollection 对象
---
# MarkerCollection 对象

`app.project.sequences[index].markers`

`app.project.rootItem.children[index].getMarkers()`

MarkerCollection 对象表示 [ProjectItem 对象](../../item/projectitem) 和 [Sequence 对象](../../sequence/sequence) 中的 [Marker 对象](../../general/marker) 集合。

:::info
MarkerCollection 是 [Collection 对象](../collection) 的子类。在使用 MarkerCollection 时，除了下面列出的方法和属性外，Collection 的所有方法和属性都可用。
:::

---

## 属性

### MarkerCollection.numMarkers

`app.project.sequences[index].markers.numMarkers`

`app.project.rootItem.children[index].getMarkers().numMarkers`

#### 描述

项目项或序列中标记对象的数量。

#### 类型

整数，只读。

---

## 方法

### MarkerCollection.createMarker()

`app.project.sequences[index].markers.createMarker(time)`

`app.project.rootItem.children[index].getMarkers().createMarker(time)`

#### 描述

在项目项或序列上创建一个新的 [Marker 对象](../../general/marker)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `time` | Float | 标记应创建的时间，以秒为单位。 |

#### 返回值

如果成功，返回 [Marker 对象](../../general/marker)。

---

### MarkerCollection.deleteMarker()

`app.project.sequences[index].markers.deleteMarker(marker)`

`app.project.rootItem.children[index].getMarkers().deleteMarker(marker)`

#### 描述

从集合中移除给定的标记对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `marker` | [Marker 对象](../../general/marker) | 要从集合中移除的标记对象。 |

#### 返回值

布尔值。

#### 示例

从活动序列中移除所有标记

```javascript
var markers = app.project.activeSequence.markers;
var marker = markers.getFirstMarker();
var count = markers.numMarkers;

while (marker) {
 markers.deleteMarker(marker);
 marker = markers.getFirstMarker();
}

alert('移除了 ' + count.toString() + ' 个标记');
```

---

### MarkerCollection.getFirstMarker()

`app.project.sequences[index].markers.getFirstMarker()`

`app.project.rootItem.children[index].getMarkers().getFirstMarker()`

#### 描述

检索给定项目项或序列中的第一个标记对象，按时间（以秒为单位）排序。

#### 参数

无。

#### 返回值

[Marker 对象](../../general/marker) 或 `undefined`。

---

### MarkerCollection.getLastMarker()

`app.project.sequences[index].markers.getLastMarker()`

`app.project.rootItem.children[index].getMarkers().getLastMarker()`

#### 描述

检索给定项目项或序列中的最后一个标记对象，按时间（以秒为单位）排序。

#### 参数

无。

#### 返回值

[Marker 对象](../../general/marker) 或 `undefined`。

---

### MarkerCollection.getNextMarker()

`app.project.sequences[index].markers.getNextMarker(currentMarker)`

`app.project.rootItem.children[index].getMarkers().getNextMarker(currentMarker)`

#### 描述

从给定的标记对象开始，按时间（以秒为单位）排序，获取下一个可用的标记对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `currentMarker` | [Marker 对象](../../general/marker) | 起始标记对象，从该对象开始获取下一个标记对象。 |

#### 返回值

[Marker 对象](../../general/marker) 或 `undefined`。

---

### MarkerCollection.getPrevMarker()

`app.project.sequences[index].markers.getPrevMarker(currentMarker)`

`app.project.rootItem.children[index].getMarkers().getPrevMarker(currentMarker)`

#### 描述

从给定的标记对象开始，按时间（以秒为单位）排序，获取上一个可用的标记对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `currentMarker` | [Marker 对象](../../general/marker) | 起始标记对象，从该对象开始获取上一个标记对象。 |

#### 返回值

[Marker 对象](../../general/marker) 或 `undefined`。

---
