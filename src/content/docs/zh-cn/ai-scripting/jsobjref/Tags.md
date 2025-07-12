---
title: 标签
---
# 标签

`app.activeDocument.selection[index].tags`

#### 描述

[Tag](.././Tag) 对象的集合。

---

## 属性

### Tags.length

`app.activeDocument.selection[index].tags.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### Tags.parent

`app.activeDocument.selection[index].tags.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### Tags.typename

`app.activeDocument.selection[index].tags.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Tags.add()

`app.activeDocument.selection[index].tags.add()`

#### 描述

创建一个新的 [Tag](.././Tag) 对象。

#### 返回值

[Tag](.././Tag)

---

### Tags.getByName()

`app.activeDocument.selection[index].tags.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[Tag](.././Tag)

---

### Tags.index()

`app.activeDocument.selection[index].tags.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[Tag](.././Tag)

---

### Tags.removeAll()

`app.activeDocument.selection[index].tags.removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无。

---

## 示例

### 设置标签值

```javascript
// 为当前文档中的所有 RasterItems 和 PlacedItems 添加标签
if ( app.documents.length > 0 ) {
 var doc = app.activeDocument;

 if ( doc.placedItems.length + doc.rasterItems.length > 0 ) {
 for ( i = 0; i < doc.pageItems.length; i++ ) {
 var imageArt = doc.pageItems[i];

      if ( imageArt.typename == "PlacedItem" || imageArt.typename == "RasterItem") {
 // 创建一个名为 AdobeURL 的新标签，并设置其值为 www 链接

 var urlTAG = imageArt.tags.add();
 urlTAG.name = "AdobeWebSite";
 urlTAG.value = "http://www.adobe.com/";
 }
 }
 } else {
 alert( "文档中没有放置或栅格化的项目" );
 }
}
```
