---
title: GraphItems
---
# GraphItems

`app.activeDocument.graphItems`

#### 描述

一个 [GraphItem](.././GraphItem) 对象的集合，它允许你访问 Illustrator 文档中的所有图表艺术项。

---

## 属性

### GraphItems.length

`app.activeDocument.graphItems.length`

#### 描述

集合中的对象数量。

#### 类型

数字；只读。

---

### GraphItems.parent

`app.activeDocument.graphItems.parent`

#### 描述

此对象的父对象。

#### 类型

对象；只读。

---

### GraphItems.typename

`app.activeDocument.graphItems.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### GraphItems.getByName()

`app.activeDocument.graphItems.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素名称 |

#### 返回值

[GraphItems](#graphitems)

---

### GraphItems.index()

`app.activeDocument.graphItems.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[GraphItem](.././GraphItem)

---

### GraphItems.removeAll()

`app.activeDocument.graphItems.removeAll()`

#### 描述

删除集合中的所有元素。

#### 返回值

无。

---

## 示例

### 旋转图表项

```javascript
// 将当前文档中的每个图表项旋转 90 度。

// 验证是否打开了包含图表项的文档
var ok = false;

if (documents.length > 0) {
 var docRef = activeDocument;
 var iCount = docRef.graphItems.length;
 if (iCount > 0) {
 ok = true;
 for (var i = 0; i < iCount; i++) {
 var graphRef = docRef.graphItems[i];
 graphRef.selected = true;
 graphRef.rotate(90); // 顺时针旋转 90 度
 }
 redraw();
 }
}
```
