---
title: 渐变
---
# 渐变

`app.activeDocument.gradients`

#### 描述

文档中的 [Gradient](.././Gradient) 对象集合。

---

## 属性

### Gradients.length

`app.activeDocument.gradients.length`

#### 描述

集合中的对象数量。

#### 类型

数字；只读。

---

### Gradients.parent

`app.activeDocument.gradients.parent`

#### 描述

该对象的父对象。

#### 类型

对象；只读。

---

### Gradients.typename

`app.activeDocument.gradients.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Gradients.add()

`app.activeDocument.gradients.add()`

#### 描述

创建一个新的 `Gradient` 对象。

#### 返回值

[Gradient](.././Gradient)

---

### Gradients.getByName()

`app.activeDocument.gradients.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[Gradient](.././Gradient)

---

### Gradients.index()

`app.activeDocument.gradients.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[Gradient](.././Gradient)

---

### Gradients.removeAll()

`app.activeDocument.gradients.removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无。

---

## 示例

### 删除渐变

```javascript
// 从当前文档中删除第一个渐变
if (app.documents.length > 0) {
 app.activeDocument.gradients[0].remove();
}
```
