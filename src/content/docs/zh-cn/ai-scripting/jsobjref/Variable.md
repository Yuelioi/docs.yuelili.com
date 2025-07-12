---
title: 变量
---
# 变量

`app.activeDocument.variables[index]`

#### 描述

一个文档级别的变量，可以被导入或导出。

变量是一个动态对象，用于创建数据驱动的图形。

例如，请参见 [数据集](.././Dataset)。

变量通过 Illustrator 中的变量面板进行访问。

---

## 属性

### Variable.kind

`app.activeDocument.variables[index].kind`

#### 描述

变量的类型。

#### 类型

[VariableKind](../scripting-constants#variablekind)

---

### Variable.name

`app.activeDocument.variables[index].name`

#### 描述

变量的名称。

#### 类型

string

---

### Variable.pageItems

`app.activeDocument.variables[index].pageItems`

#### 描述

变量中的所有图稿。

#### 类型

[PageItems](.././PageItems); 只读

---

### Variable.parent

`app.activeDocument.variables[index].parent`

#### 描述

只读。包含变量的对象。

#### 类型

Object

---

### Variable.typename

`app.activeDocument.variables[index].typename`

#### 描述

引用对象的类名。

#### 类型

String; 只读

---

## 方法

### Variable.remove()

`app.activeDocument.variables[index].remove()`

#### 描述

从变量集合中移除变量。

#### 返回值

无。
