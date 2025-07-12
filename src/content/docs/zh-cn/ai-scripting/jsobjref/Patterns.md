---
title: 图案
---
# 图案

`app.activeDocument.patterns`

#### 描述

文档中的 [Pattern](.././Pattern) 对象集合。

---

## 属性

### Patterns.length

`app.activeDocument.patterns.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### Patterns.parent

`app.activeDocument.patterns.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### Patterns.typename

`app.activeDocument.patterns.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Patterns.add()

`app.activeDocument.patterns.add()`

#### 描述

创建一个新对象。

#### 返回值

[Pattern](.././Pattern)

---

### Patterns.getByName()

`app.activeDocument.patterns.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[Pattern](.././Pattern)

---

### Patterns.index()

`app.activeDocument.patterns.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[Pattern](.././Pattern)

---

### Patterns.removeAll()

`app.activeDocument.patterns.removeAll()`

#### 描述

删除集合中的所有元素。

#### 返回值

无。

---

## 示例

### 删除图案

```javascript
// 从当前文档中删除最后一个图案。
if (app.documents.length > 0) {
 var lastIndex = app.activeDocument.patterns.length - 1;

 var patternToRemove = app.activeDocument.patterns[lastIndex];
 var patternName = patternToRemove.name;
 patternToRemove.remove();

 // 注意：删除 Illustrator 对象后，将引用已删除对象的变量设置为 null，因为它现在无效。
 patternToRemove = null;
}
```
