---
title: 图案
---
# 图案

`app.activeDocument.patterns[index]`

#### 描述

文档中包含的 Illustrator 图案定义。

图案显示在色板面板中。

每个图案都由一个 [PatternColor](.././PatternColor) 对象引用，该对象定义了图案的外观。

---

## 属性

### Pattern.name

`app.activeDocument.patterns[index].name`

#### 描述

图案的名称。

#### 类型

字符串

---

### Pattern.parent

`app.activeDocument.patterns[index].parent`

#### 描述

包含此图案的文档。

#### 类型

[Document](.././Document); 只读。

---

### Pattern.typename

`app.activeDocument.patterns[index].typename`

#### 描述

对象的类名。

#### 类型

字符串; 只读。

---

## 方法

### Pattern.remove()

`app.activeDocument.patterns[index].remove()`

#### 描述

从文档中移除引用的图案。

#### 返回值

无。

---

### Pattern.toString()

`app.activeDocument.patterns[index].toString()`

#### 描述

返回引用对象的对象类型。如果对象有名称，则同时返回名称。

#### 返回值

字符串
