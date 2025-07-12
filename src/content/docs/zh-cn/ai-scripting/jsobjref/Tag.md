---
title: 标签
---
# 标签

`app.activeDocument.selection[index].tags[index]`

#### 描述

与特定艺术作品相关联的标签。

标签允许您为文档中的任何页面项分配无限数量的键值对。

---

## 属性

### Tag.name

`app.activeDocument.selection[index].tags[index].name`

#### 描述

标签的名称。

#### 类型

字符串；只读。

---

### Tag.parent

`app.activeDocument.selection[index].tags[index].parent`

#### 描述

包含此标签的对象。

#### 类型

对象；只读。

### Tag.typename

`app.activeDocument.selection[index].tags[index].typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

### Tag.value

`app.activeDocument.selection[index].tags[index].value`

#### 描述

存储在此标签中的数据。

#### 类型

字符串；只读。

---

## 方法

### Tag.remove()

`app.activeDocument.selection[index].tags[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。

## 示例

### 使用标签

```javascript
// 查找与所选艺术作品相关联的标签，
// 在一个单独的文档中显示名称和值

if ( app.documents.length > 0 ) {
 doc = app.activeDocument;

 if ( doc.selection.length > 0 ) {
 for ( i = 0; i < selection.length; i++ ) {
 selectedArt = selection[0];
 tagList = selectedArt.tags;

 if (tagList.length == 0) {
 var tempTag = tagList.add();
 tempTag.name = "OneWord";
 tempTag.value = "anything you want";
 }

 // 创建一个文档并为每个标签添加一行文本
 reportDocument = app.documents.add();
 top_offset = 400;

 for ( i = 0; i < tagList.length; i++ ) {
 tagText = tagList[i].value;
 newItem = reportDocument.textFrames.add();
 newItem.contents = "标签: (" + tagList[i].name + " , " + tagText + ")";
 newItem.position = Array(100, top_offset);
 newItem.textRange.size = 24;
 top_offset = top_offset - 20;
 }
 }
 }
}
```
