---
title: 变量
---
# 变量

`app.activeDocument.variables`

#### 描述

文档中 [Variable](.././Variable) 对象的集合。

有关如何创建变量的示例，请参阅 [使用变量和数据集](../Dataset#使用变量和数据集)。

---

## 属性

### Variables.length

`app.activeDocument.variables.length`

#### 描述

文档中变量的数量

#### 类型

数字；只读。

---

### Variables.parent

`app.activeDocument.variables.parent`

#### 描述

包含变量集合的对象

#### 类型

对象；只读。

---

### Variables.typename

`app.activeDocument.variables.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Variables.add()

`app.activeDocument.variables.add()`

#### 描述

向集合中添加一个新变量。

#### 返回值

[Variable](.././Variable)

---

### Variables.getByName()

`app.activeDocument.variables.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[Variable](.././Variable)

---

### Variables.index()

`app.activeDocument.variables.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[Variable](.././Variable)

---

### Variables.removeAll()

`app.activeDocument.variables.removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无。
