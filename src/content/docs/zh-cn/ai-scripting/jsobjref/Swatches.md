---
title: 色板
---
# 色板

`app.activeDocument.swatches`

#### 描述

文档中 [Swatch](.././Swatch) 对象的集合。

---

## 属性

### Swatches.length

`app.activeDocument.swatches.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### Swatches.parent

`app.activeDocument.swatches.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### Swatches.typename

`app.activeDocument.swatches.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Swatches.add()

`app.activeDocument.swatches.add()`

#### 描述

创建一个新的 [Swatch](.././Swatch) 对象。

#### 返回值

[Swatch](.././Swatch)

---

### Swatches.getByName()

`app.activeDocument.swatches.getByName(name)`

#### 描述

获取集合中第一个具有指定名称的元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[Swatch](.././Swatch)

---

### Swatches.getSelected()

`app.activeDocument.swatches.getSelected()`

#### 描述

获取文档中选中的色板。

#### 返回值

[Swatch](.././Swatch) 列表

---

### Swatches.index()

`app.activeDocument.swatches.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 要获取的元素的键 |

#### 返回值

[Swatch](.././Swatch)

---

### Swatches.removeAll()

`app.activeDocument.swatches.removeAll()`

#### 描述

删除集合中的所有元素。

#### 返回值

无。

---

## 示例

### 查找并删除色板

```javascript
// 从当前文档中删除第4个色板
if ( app.documents.length > 0 ) {
 if (app.activeDocument.swatches.length > 4) {
 var swatchToDelete = app.activeDocument.swatches[3];
 swatchToDelete.remove();
 }
}
```
