---
title: SymbolItems
---
# SymbolItems

`app.activeDocument.symbolItems`

#### 描述

文档中 [SymbolItem](.././SymbolItem) 对象的集合。

---

## 属性

### SymbolItems.length

`app.activeDocument.symbolItems.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### SymbolItems.parent

`app.activeDocument.symbolItems.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### SymbolItems.typename

`app.activeDocument.symbolItems.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### SymbolItems.add()

`app.activeDocument.symbolItems.add(symbol)`

#### 描述

创建指定符号的实例。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `symbol` | [Symbol](.././Symbol) | 要实例化的符号 |

#### 返回值

[SymbolItem](.././SymbolItem)

---

### SymbolItems.getByName()

`app.activeDocument.symbolItems.getByName(name)`

#### 描述

获取集合中第一个具有指定名称的元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取元素的名称 |

#### 返回值

[SymbolItem](.././SymbolItem)

---

### SymbolItems.index()

`app.activeDocument.symbolItems.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[SymbolItem](.././SymbolItem)

---

### SymbolItems.removeAll()

`app.activeDocument.symbolItems.removeAll()`

#### 描述

删除集合中的所有元素。

#### 返回值

无。

---

## 示例

### 创建符号

```javascript
// 从每个图形样式创建一个路径项
// 然后将每个项添加为新符号

var docRef = documents.add();
var y = 750;
var x = 25;

var iCount = docRef.graphicStyles.length;

for (var i=0; i<iCount; i++) {

 var pathRef = docRef.pathItems.rectangle( y, x, 20, 20 );
 docRef.graphicStyles[i].applyTo(pathRef);

 // 是否到达底部？
 if ( (y-=60) <= 60 ) {
 y = 750; // 回到顶部。
 x+= 200
 }

 redraw();
 docRef.symbolItems.add(pathRef);
}
```
