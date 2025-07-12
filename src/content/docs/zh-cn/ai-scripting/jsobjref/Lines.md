---
title: 行
---
# 行

`lines`

#### 描述

表示文本框架中文本行的 [TextRange](.././TextRange) 对象集合。元素没有名称；必须通过索引访问它们。

---

## 属性

### Lines.length

`lines.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### Lines.parent

`lines.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### Lines.typename

`lines.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Lines.index()

`lines.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[TextRange](.././TextRange)

---

### Lines.removeAll()

`lines.removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无。
