---
title: PlacedItems
---
# PlacedItems

`app.activeDocument.placedItems`

#### 描述

文档中的 [PlacedItem](.././PlacedItem) 对象集合。

---

## 属性

### PlacedItems.length

`app.activeDocument.placedItems.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### PlacedItems.parent

`app.activeDocument.placedItems.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### PlacedItems.typename

`app.activeDocument.placedItems.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### PlacedItems.add()

`app.activeDocument.placedItems.add()`

#### 描述

创建一个新对象。

用于在文档中放置新的图稿。使用生成的 `placedItem` 对象的 `file` 属性链接包含图稿的文件。请参阅 [PlacedItem](.././PlacedItem)。

#### 返回值

[PlacedItem](.././PlacedItem)

---

### PlacedItems.getByName()

`app.activeDocument.placedItems.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[PlacedItem](.././PlacedItem)

---

### PlacedItems.index()

`app.activeDocument.placedItems.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[PlacedItem](.././PlacedItem)

---

### PlacedItems.removeAll()

`app.activeDocument.placedItems.removeAll()`

#### 描述

删除集合中的所有元素。

#### 返回值

无
---
