---
title: MeshItems
---
# MeshItems

`app.activeDocument.meshItems`

#### 描述

一个 [MeshItem](.././MeshItem) 对象的集合。

---

## 属性

### MeshItems.length

`app.activeDocument.meshItems.length`

#### 描述

集合中对象的数量。

#### 类型

数字；只读。

---

### MeshItems.parent

`app.activeDocument.meshItems.parent`

#### 描述

该对象的父对象。

#### 类型

对象；只读。

---

### MeshItems.typename

`app.activeDocument.meshItems.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### MeshItems.getByName()

`app.activeDocument.meshItems.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[MeshItem](.././MeshItem)

---

### MeshItems.index()

`app.activeDocument.meshItems.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[MeshItem](.././MeshItem)

---

### MeshItems.removeAll()

`app.activeDocument.meshItems.removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无。

---

## 示例

### 将网格项复制到另一个文档

要运行此脚本，请打开两个文档。其中一个文档应至少包含一个网格项，另一个文档可以为空。在运行脚本之前，请将空文档置于最前面。

```javascript
// 将所有网格项从一个文档复制到新文档
if (app.documents.length > 0) {
 var srcDoc = documents[0];
 var locationOffset = 0;
 var targetDoc = documents.add();
 for (var i = 0; i < srcDoc.meshItems.length; i++) {
 var srcItem = srcDoc.meshItems[i];
 var dupItem = srcDoc.meshItems[i].duplicate(targetDoc, ElementPlacement.PLACEATEND);

 // 在 y 轴上偏移复制的项的位置
 dupItem.position = Array(100, 50 + locationOffset);
 locationOffset += 50;
 }
}
```
