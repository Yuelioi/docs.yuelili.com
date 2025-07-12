---
title: 画板
---
# 画板

`artboards`

#### 描述

[画板](.././Artboard) 对象的集合。

---

## 属性

### Artboards.length

`artboards.length`

#### 描述

集合中数据集的数量。

#### 类型

数字；只读。

---

### Artboards.parent

`artboards.parent`

#### 描述

包含此数据集的对象名称。

#### 类型

[画板](.././Artboard)；只读。

---

### Artboards.typename

`artboards.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Artboards.add()

`artboards.add(artboardRect)`

#### 描述

创建一个新的画板对象。

#### 参数

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `artboardRect` | 矩形 | 画板尺寸 |

#### 返回值

[画板](.././Artboard)

---

### Artboards.getActiveArtboardIndex()

`artboards.getActiveArtboardIndex()`

#### 描述

检索活动画板在文档列表中的索引位置。

返回基于 0 的索引。

#### 返回值

数字（长整型）

---

### Artboards.getByName()

`artboards.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素名称 |

#### 返回值

[画板](.././Artboard)

---

### Artboards.insert()

`artboards.insert(artboardRect, index)`

#### 描述

创建一个新的画板对象并将其插入到列表中的指定索引处。

#### 参数

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `artboardRect` | 矩形 | 画板尺寸 |
| `index` | 数字（长整型） | 插入画板的索引位置 |

#### 返回值

无。

---

### Artboards.remove()

`artboards.remove(index)`

#### 描述

删除一个画板对象。不能删除文档中的最后一个画板。

#### 参数

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `index` | 数字（长整型） | 要删除的画板索引位置 |

#### 返回值

无。

---

### Artboards.setActiveArtboardIndex()

`artboards.setActiveArtboardIndex(index)`

#### 描述

使特定的画板成为活动画板，并在迭代顺序中将其设为当前画板。

#### 参数

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `index` | 数字（长整型） | 要设为活动的画板索引位置 |

#### 返回值

无。

---
