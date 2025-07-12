---
title: 画笔
---
# 画笔

`app.activeDocument.brushes[index]`

#### 描述

Illustrator 文档中的画笔。画笔包含在文档中。用户可以在 Illustrator 中创建额外的画笔。你可以通过脚本访问画笔，但不能创建它们。

---

## 属性

### Brush.name

`app.activeDocument.brushes[index].name`

#### 描述

画笔的名称

#### 类型

字符串

---

### Brush.parent

`app.activeDocument.brushes[index].parent`

#### 描述

包含此画笔的文档。

#### 类型

[Document](.././Document); 只读。

---

### Brush.typename

`app.activeDocument.brushes[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串; 只读。

---

## 方法

### Brush.applyTo()

`app.activeDocument.brushes[index].applyTo(artItem)`

#### 描述

将 `brush` 应用到特定的艺术项目。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `artItem` | [PageItem](.././PageItem) | 要应用画笔的艺术项目 |

#### 返回值

无。

---

## 示例

### 应用画笔

```javascript
// 复制并分组当前选择中的所有项目，
// 然后对组中的每个项目应用相同的画笔

if (app.documents.length > 0) {
 var docSelection = app.activeDocument.selection;
 if (docSelection.length > 0) {
 var newGroup = app.activeDocument.groupItems.add();

 for (var i = 0; i < docSelection.length; i++) {
 var newItem = docSelection[i].duplicate();
 newItem.moveToBeginning(newGroup);
 }

 var brush = app.activeDocument.brushes[1];
 brush.applyTo(newGroup);
 }
}
```
