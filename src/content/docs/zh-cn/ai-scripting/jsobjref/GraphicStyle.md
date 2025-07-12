---
title: 图形样式
---
# 图形样式

`app.activeDocument.graphicStyles[index]`

#### 描述

一个图形样式。每个图形样式定义了一组外观属性，您可以非破坏性地应用于页面项目。图形样式包含在文档中。脚本无法创建新的图形样式。

---

## 属性

### GraphicStyle.name

`app.activeDocument.graphicStyles[index].name`

#### 描述

图形样式的名称。

#### 类型

字符串。

---

### GraphicStyle.parent

`app.activeDocument.graphicStyles[index].parent`

#### 描述

包含此图形样式的文档。

#### 类型

[Document](.././Document); 只读。

---

### GraphicStyle.typename

`app.activeDocument.graphicStyles[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串; 只读。

---

## 方法

### GraphicStyle.applyTo()

`app.activeDocument.graphicStyles[index].applyTo(artItem)`

#### 描述

将此艺术样式应用于指定的艺术项目。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `artItem` | [PageItem](.././PageItem) | 目标艺术项目 |

#### 返回值

无。

---

### GraphicStyle.mergeTo()

`app.activeDocument.graphicStyles[index].mergeTo(artItem)`

#### 描述

将此艺术样式合并到指定艺术项目的当前样式中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `artItem` | [PageItem](.././PageItem) | 目标艺术项目 |

#### 返回值

无。

---

### GraphicStyle.remove()

`app.activeDocument.graphicStyles[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。

---

## 示例

### 应用图形样式

```javascript
// 复制选择中的每个路径项目，将副本放入一个新组中，
// 然后将图形样式应用于新组的项目

if (app.documents.length > 0) {
 var doc = app.activeDocument;
 var selected = doc.selection;
 var newGroup = doc.groupItems.add();
 newGroup.name = "NewGroup";
 newGroup.move(doc, ElementPlacement.PLACEATEND);

 var endIndex = selected.length;
 for (var i = 0; i < endIndex; i++) {
 if (selected[i].typename == "PathItem")
 selected[i].duplicate(newGroup, ElementPlacement.PLACEATEND);
 }

 for (i = 0; i < newGroup.pageItems.length; i++) {
 doc.graphicStyles[1].applyTo(newGroup.pageItems[i]);
 }
}
```
