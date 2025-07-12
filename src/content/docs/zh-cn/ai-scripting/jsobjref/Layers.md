---
title: 图层
---
# 图层

`app.activeDocument.layers`

#### 描述

文档中的图层集合。

---

## 属性

### Layers.length

`app.activeDocument.layers.length`

#### 描述

集合中的对象数量。

#### 类型

数字；只读。

---

### Layers.parent

`app.activeDocument.layers.parent`

#### 描述

此对象的父对象。

#### 类型

对象；只读。

---

### Layers.typename

`app.activeDocument.layers.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Layers.add()

`app.activeDocument.layers.add()`

#### 描述

在文档中创建一个新图层。

#### 返回值

[Layer](.././Layer)

---

### Layers.getByName()

`app.activeDocument.layers.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[Layer](.././Layer)

---

### Layers.index()

`app.activeDocument.layers.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[Layer](.././Layer)

---

### Layers.removeAll()

`app.activeDocument.layers.removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无。

---

## 示例

### 查找并删除图层

```javascript
// 删除所有打开文档中名称以 "Temp" 开头的图层

var layersDeleted = 0;
for (var i = 0; i < app.documents.length; i++) {
 var targetDocument = app.documents[i];
 var layerCount = targetDocument.layers.length;

 // 从后向前遍历图层，以保留剩余图层的索引
 // 当我们删除一个图层时
 for (var ii = layerCount - 1; ii >= 0; ii--) {
 var targetLayer = targetDocument.layers[ii];
 var layerName = new String(targetLayer.name);
 if (layerName.indexOf("Temp") == 0) {
 targetDocument.layers[ii].remove();
 layersDeleted++;
 }
 }
}
```
