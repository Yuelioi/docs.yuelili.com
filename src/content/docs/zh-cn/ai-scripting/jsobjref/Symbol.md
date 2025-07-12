---
title: 符号
---
# 符号

`app.activeDocument.symbols[index]`

#### 描述

存储在符号面板中的艺术项目，可以在文档中重复使用一次或多次，而无需复制艺术数据。符号包含在文档中。

文档中的 `Symbol` 实例与 [SymbolItem](.././SymbolItem) 对象相关联，这些对象存储艺术对象的属性。

---

## 属性

### Symbol.name

`app.activeDocument.symbols[index].name`

#### 描述

符号的名称

#### 类型

字符串。

---

### Symbol.parent

`app.activeDocument.symbols[index].parent`

#### 描述

包含符号对象的对象。

#### 类型

对象；只读。

---

### Symbol.typename

`app.activeDocument.symbols[index].typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Symbol.duplicate()

`app.activeDocument.symbols[index].duplicate()`

#### 描述

创建此对象的副本。

#### 返回值

[符号](#符号)

---

### Symbol.remove()

`app.activeDocument.symbols[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。
