---
title: 数据集
---
# 数据集

`app.activeDocument.dataSets`

#### 描述

[Dataset](.././Dataset) 对象的集合。

---

## 属性

### Datasets.length

`app.activeDocument.dataSets.length`

#### 描述

集合中数据集的数量。

#### 类型

数字；只读。

---

### Datasets.parent

`app.activeDocument.dataSets.parent`

#### 描述

包含此数据集的对象名称。

#### 类型

[Document](.././Document)；只读。

---

### Datasets.typename

`app.activeDocument.dataSets.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Datasets.add()

`app.activeDocument.dataSets.add()`

#### 描述

创建一个新的数据集对象。

#### 返回值

[Dataset](.././Dataset)

---

### Datasets.getByName()

`app.activeDocument.dataSets.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素名称 |

#### 返回值

[Dataset](.././Dataset)

---

### Datasets.index()

`app.activeDocument.dataSets.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[Dataset](.././Dataset)

---

### Datasets.removeAll()

`app.activeDocument.dataSets.removeAll()`

#### 描述

移除集合中的所有元素。

#### 返回值

无。
