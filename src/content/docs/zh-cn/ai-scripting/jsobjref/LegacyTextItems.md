---
title: LegacyTextItems
---
# LegacyTextItems

`legacyTextItems`

#### 描述

[LegacyTextItem](.././LegacyTextItem) 对象的集合。

---

## 属性

### LegacyTextItems.length

`legacyTextItems.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### LegacyTextItems.parent

`legacyTextItems.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### LegacyTextItems.typename

`legacyTextItems.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### LegacyTextItems.convertToNative()

`legacyTextItems.convertToNative()`

#### 描述

从所有旧版文本项创建文本框架；原始旧版文本项将被删除。成功时返回 `true`。

#### 返回值

布尔值。

---

### LegacyTextItems.getByName()

`legacyTextItems.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[LegacyTextItem](.././LegacyTextItem)

---

### LegacyTextItems.index()

`legacyTextItems.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[LegacyTextItem](.././LegacyTextItem)

---

### LegacyTextItems.removeAll()

`legacyTextItems.removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无。

```
