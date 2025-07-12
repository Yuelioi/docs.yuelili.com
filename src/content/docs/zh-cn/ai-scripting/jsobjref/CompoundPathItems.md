---
title: CompoundPathItems
---
# CompoundPathItems

`app.activeDocument.activeLayer.compoundPathItems`

#### 描述

[CompoundPathItem](.././CompoundPathItem) 对象的集合。

---

## 属性

### CompoundPathItems.length

`app.activeDocument.activeLayer.compoundPathItems.length`

#### 描述

集合中对象的数量。

#### 类型

数字；只读。

---

### CompoundPathItems.parent

`app.activeDocument.activeLayer.compoundPathItems.parent`

#### 描述

此集合的父对象（可以是 `Layer` 或 `GroupItem`）。

#### 类型

对象；只读。

---

### CompoundPathItems.typename

`app.activeDocument.activeLayer.compoundPathItems.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### CompoundPathItems.add()

`app.activeDocument.activeLayer.compoundPathItems.add()`

#### 描述

创建一个新的 `CompoundPathItem`。

#### 返回值

[CompoundPathItem](.././CompoundPathItem)

---

### CompoundPathItems.getByName()

`app.activeDocument.activeLayer.compoundPathItems.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[CompoundPathItem](.././CompoundPathItem)

---

### CompoundPathItems.index()

`app.activeDocument.activeLayer.compoundPathItems.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[CompoundPathItem](.././CompoundPathItem)

---

### CompoundPathItems.removeAll()

`app.activeDocument.activeLayer.compoundPathItems.removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无。

---

## 示例

### 计算复合路径的数量

```javascript
// 计算当前文档中图层 1 的所有复合路径项
if (app.documents.length > 0) {
 var doc = app.activeDocument;
 var numCompoundPaths = doc.layers[0].compoundPathItems.length;
}
```
