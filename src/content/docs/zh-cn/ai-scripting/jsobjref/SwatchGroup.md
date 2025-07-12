---
title: SwatchGroup
---
# SwatchGroup

`swatchGroup`

#### 描述

一组 [Swatch](.././Swatch) 对象。

---

## 属性

### SwatchGroup.name

`swatchGroup.name`

#### 描述

色板组的名称。

#### 类型

string

---

### SwatchGroup.parent

`swatchGroup.parent`

#### 描述

包含色板组的对象。

#### 类型

Object; 只读。

---

### SwatchGroup.typename

`swatchGroup.typename`

#### 描述

引用对象的类名。

#### 类型

String; 只读

---

## 方法

### SwatchGroup.addSpot()

`swatchGroup.addSpot(spot)`

#### 描述

向色板组添加一个专色色板。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `spot` | [Spot](.././Spot) | 要添加的专色 |

#### 返回值

无。

---

### SwatchGroup.addSwatch()

`swatchGroup.addSwatch(swatch)`

#### 描述

向色板组添加一个色板。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `swatch` | [Swatch](.././Swatch) | 要添加的色板 |

#### 返回值

无。

---

### SwatchGroup.getAllSwatches()

`swatchGroup.getAllSwatches()`

#### 描述

获取色板组中所有色板的列表。

#### 返回值

[Swatch](.././Swatch) 的列表

---

### SwatchGroup.remove()

`swatchGroup.remove()`

#### 描述

删除此对象。

#### 返回值

无。

---

### SwatchGroup.removeAll()

`swatchGroup.removeAll()`

#### 描述

删除集合中的所有元素。

#### 返回值

无。

---
