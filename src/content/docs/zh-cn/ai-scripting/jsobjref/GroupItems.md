---
title: GroupItems
---
# GroupItems

`app.activeDocument.groupItems`

#### 描述

文档中 [GroupItem](.././GroupItem) 对象的集合。

---

## 属性

### GroupItems.length

`app.activeDocument.groupItems.length`

#### 描述

集合中的对象数量。

#### 类型

数字；只读。

---

### GroupItems.parent

`app.activeDocument.groupItems.parent`

#### 描述

此对象的父对象。

#### 类型

对象；只读。

---

### GroupItems.typename

`app.activeDocument.groupItems.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### GroupItems.add()

`app.activeDocument.groupItems.add()`

#### 描述

创建一个新对象。

#### 返回值

[GroupItem](.././GroupItem)

---

### GroupItems.createFromFile()

`app.activeDocument.groupItems.createFromFile(imageFile)`

#### 描述

将外部矢量艺术文件作为组项放置在文档中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `imageFile` | [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象 | 要放置的矢量艺术文件 |

#### 返回值

[GroupItem](.././GroupItem)

---

### GroupItems.getByName()

`app.activeDocument.groupItems.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素名称 |

#### 返回值

[GroupItem](.././GroupItem)

---

### GroupItems.index()

`app.activeDocument.groupItems.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[GroupItem](.././GroupItem)

---

### GroupItems.removeAll()

`app.activeDocument.groupItems.removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无。

---

## 示例

### 将 PDF 导入为组项

以下脚本展示了如何使用 [GroupItems.createFromFile()](#groupitemscreatefromfile) 函数导入 PDF 文档。

:::note
在运行此脚本之前，您必须创建一个单页的 PDF 文件并将其放置在 `/temp/testfile1.pdf` 位置。
:::

```javascript
// 从指定路径的文件中嵌入一个新的组项到当前文档
// dest 应包含完整路径和文件名

function embedPDF(dest) {
 var embedDoc = new File(dest);
 if (app.documents.length > 0 && embedDoc.exists) {
 var doc = app.activeDocument;
 var placed = doc.groupItems.createFromFile(embedDoc);
 }
}
```
