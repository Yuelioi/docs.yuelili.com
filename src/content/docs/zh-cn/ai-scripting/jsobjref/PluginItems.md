---
title: PluginItems
---
# PluginItems

`app.activeDocument.pluginItems`

#### 描述

文档中的 [PluginItem](.././PluginItem) 对象集合。

参见 [复制插件项](../PluginItem#copying-a-plug-in-item)。

---

## 属性

### PluginItems.length

`app.activeDocument.pluginItems.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### PluginItems.parent

`app.activeDocument.pluginItems.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### PluginItems.typename

`app.activeDocument.pluginItems.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### PluginItems.getByName()

`app.activeDocument.pluginItems.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[PluginItem](.././PluginItem)

---

### PluginItems.index()

`app.activeDocument.pluginItems.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[PluginItem](.././PluginItem)

---

### PluginItems.removeAll()

`app.activeDocument.pluginItems.removeAll()`

#### 描述

删除集合中的所有元素。

#### 返回值

无。
