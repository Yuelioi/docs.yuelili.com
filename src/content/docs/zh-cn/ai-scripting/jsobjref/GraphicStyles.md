---
title: 图形样式
---
# 图形样式

`app.activeDocument.graphicStyles`

#### 描述

文档中 [GraphicStyle](.././GraphicStyle) 对象的集合。

---

## 属性

### GraphicStyles.length

`app.activeDocument.graphicStyles.length`

#### 描述

文档中图形样式的数量。

#### 类型

数字；只读。

---

### GraphicStyles.parent

`app.activeDocument.graphicStyles.parent`

#### 描述

包含此图形样式集合的文档。

#### 类型

[Document](.././Document)；只读。

---

### GraphicStyles.typename

`app.activeDocument.graphicStyles.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### GraphicStyles.getByName()

`app.activeDocument.graphicStyles.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[GraphicStyle](.././GraphicStyle)

---

### GraphicStyles.index()

`app.activeDocument.graphicStyles.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[GraphicStyle](.././GraphicStyle)

---

### GraphicStyles.removeAll()

`app.activeDocument.graphicStyles.removeAll()`

#### 描述

移除引用集合中的所有元素。

#### 返回值

无。

---

## 示例

### 统计图形样式数量

```javascript
// 统计活动文档中图形样式的数量
// 并将结果存储在 numberOfStyles 中

if (app.documents.length > 0) {
 var numberOfStyles = app.activeDocument.graphicStyles.length;
}
```
