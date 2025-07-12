---
title: RasterItems
---
# RasterItems

`app.activeDocument.rasterItems`

#### 描述

[RasterItem](.././RasterItem) 对象的集合。

---

## 属性

### RasterItems.length

`app.activeDocument.rasterItems.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### RasterItems.parent

`app.activeDocument.rasterItems.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### RasterItems.typename

`app.activeDocument.rasterItems.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### RasterItems.getByName()

`app.activeDocument.rasterItems.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[SymbolItem](.././SymbolItem)

---

### RasterItems.index()

`app.activeDocument.rasterItems.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[SymbolItem](.././SymbolItem)

---

### RasterItems.removeAll()

`app.activeDocument.rasterItems.removeAll()`

#### 描述

删除集合中的所有元素。

#### 返回值

无。

---

## 示例

### 创建栅格项

```javascript
// 从栅格文件在新文档中创建一个新的栅格项
// jpgFilePath 包含 jpg 文件的完整路径和文件名
function createRasterItem(jpgFilePath) {
 var rasterFile = File(jpgFilePath);
 var myDoc = app.documents.add();

 var myPlacedItem = myDoc.placedItems.add();
 myPlacedItem.file = rasterFile;
 myPlacedItem.position = Array(0, myDoc.height);
 myPlacedItem.embed();
}
```

### 查找并检查栅格项

```javascript
// 检查文档中第一个栅格项的颜色空间并在 ESTK 控制台中显示结果
if (app.documents.length > 0 && app.activeDocument.rasterItems.length > 0) {
 var rasterArt = app.activeDocument.rasterItems[0];

 switch (rasterArt.imageColorSpace) {
 case ImageColorSpace.CMYK:
 $.writeln("第一个栅格项的颜色空间是 CMYK");
 break;

 case ImageColorSpace.RGB:
 $.writeln("第一个栅格项的颜色空间是 RGB");
 break;

 case ImageColorSpace.GRAYSCALE:
 $.writeln("第一个栅格项的颜色空间是 GRAYSCALE");
 break;
 }
}
```
