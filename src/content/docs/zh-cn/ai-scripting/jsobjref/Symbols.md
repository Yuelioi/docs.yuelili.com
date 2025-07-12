---
title: 符号
---
# 符号

`app.activeDocument.symbols`

#### 描述

文档中 [Symbol](.././Symbol) 对象的集合。

---

## 属性

### Symbols.length

`app.activeDocument.symbols.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### Symbols.parent

`app.activeDocument.symbols.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### Symbols.typename

`app.activeDocument.symbols.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Symbols.add()

`app.activeDocument.symbols.add(sourceArt[, registrationPoint])`

#### 描述

返回从源图稿项创建的符号对象，源图稿项可以是以下任意一种：

- [CompoundPathItems](.././CompoundPathItems)
- [GroupItems](.././GroupItems)
- [MeshItems](.././MeshItems)
- [NonNativeItems](.././NonNativeItems)
- [PageItems](.././PageItems)
- [PathItems](.././PathItems)
- [RasterItems](.././RasterItems)
- [SymbolItems](.././SymbolItems)
- [TextFrameItems](.././TextFrameItems)

默认的注册点是 `SymbolRegistrationPoint.SYMBOLCENTERPOINT`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sourceArt` | [PageItem](.././PageItem) | 用于创建符号的源图稿 |
| `registrationPoint` | [SymbolRegistrationPoint](../scripting-constants#symbolregistrationpoint), 可选 | 使用的注册点 |

#### 返回值

[Symbol](.././Symbol)

---

### Symbols.getByName()

`app.activeDocument.symbols.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素名称 |

#### 返回值

[Symbol](.././Symbol)

---

### Symbols.index()

`app.activeDocument.symbols.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[Symbol](.././Symbol)

---

### Symbols.removeAll()

`app.activeDocument.symbols.removeAll()`

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
 y = 750; // 回到顶部
 x+= 200
 }

 redraw();
 docRef.symbols.add(pathRef);
}
```
