---
title: 视图
---
# 视图

`app.activeDocument.views`

#### 描述

文档中 [View](.././View) 对象的集合。

---

## 属性

### Views.length

`app.activeDocument.views.length`

#### 描述

集合中对象的数量。

#### 类型

数字；只读。

---

### Views.parent

`app.activeDocument.views.parent`

#### 描述

此对象的父对象。

#### 类型

对象；只读。

---

### Views.typename

`app.activeDocument.views.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Views.index()

`app.activeDocument.views.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[View](.././View)
