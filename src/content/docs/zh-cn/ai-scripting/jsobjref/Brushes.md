---
title: 画笔
---
# 画笔

`app.activeDocument.brushes`

#### 描述

文档中的[画笔](.././Brush)对象集合。

---

## 属性

### Brushes.length

`app.activeDocument.brushes.length`

#### 描述

集合中的对象数量。

#### 类型

数字；只读。

---

### Brushes.parent

`app.activeDocument.brushes.parent`

#### 描述

包含此画笔集合的文档。

#### 类型

对象；只读。

---

### Brushes.typename

`app.activeDocument.brushes.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Brushes.getByName()

`app.activeDocument.brushes.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[画笔](.././Brush)

---

### Brushes.index()

`app.activeDocument.brushes.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[画笔](.././Brush)

---

## 示例

### 统计画笔数量

```javascript
// 统计活动文档中的所有画笔数量

if (app.documents.length > 0) {
 var numberOfBrushes = app.activeDocument.brushes.length;
}
```
