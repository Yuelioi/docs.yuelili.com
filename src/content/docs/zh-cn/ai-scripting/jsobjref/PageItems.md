---
title: PageItems
---
# PageItems

`app.activeDocument.pageItems`

#### 描述

一个包含 [PageItem](.././PageItem) 对象的集合。提供了对 Illustrator 文档中所有艺术项目的完全访问权限，涵盖以下类：

- [CompoundPathItem](../CompoundPathItem)
 - [属性](../CompoundPathItem#properties)
 - [方法](../CompoundPathItem#methods)
 - [示例](../CompoundPathItem#example)
- [GraphItem](../GraphItem)
 - [属性](../GraphItem#properties)
 - [方法](../GraphItem#methods)
- [GroupItem](../GroupItem)
 - [属性](../GroupItem#properties)
 - [方法](../GroupItem#methods)
 - [示例](../GroupItem#example)
- [LegacyTextItem](../LegacyTextItem)
 - [属性](../LegacyTextItem#properties)
 - [方法](../LegacyTextItem#methods)
- [MeshItem](../MeshItem)
 - [属性](../MeshItem#properties)
 - [方法](../MeshItem#methods)
 - [示例](../MeshItem#example)
- [NonNativeItem](../NonNativeItem)
 - [属性](../NonNativeItem#properties)
 - [方法](../NonNativeItem#methods)
- [PathItem](../PathItem)
 - [属性](../PathItem#properties)
 - [方法](../PathItem#methods)
 - [示例](../PathItem#example)
- [PlacedItem](../PlacedItem)
 - [属性](../PlacedItem#properties)
 - [方法](../PlacedItem#methods)
 - [示例](../PlacedItem#example)
- [PluginItem](../PluginItem)
 - [属性](../PluginItem#properties)
 - [方法](../PluginItem#methods)
 - [示例](../PluginItem#example)
- [RasterItem](../RasterItem)
 - [属性](../RasterItem#properties)
 - [方法](../RasterItem#methods)
- [SymbolItem](../SymbolItem)
 - [属性](../SymbolItem#properties)
 - [方法](../SymbolItem#methods)
- [TextFrameItem](../TextFrameItem)
 - [属性](../TextFrameItem#properties)
 - [方法](../TextFrameItem#methods)
 - [示例](../TextFrameItem#example)

你可以通过 [Document](.././Document)、[Layer](.././Layer) 或 [GroupItem](.././GroupItem) 中的 [PageItems](#pageitems) 属性来引用页面项目。

当你访问这些集合中的单个项目时，引用的是特定类型的页面项目。例如，如果你使用 [PageItems](#pageitems) 来引用一个图表项目，该对象的 typename 值为 [GraphItem](.././GraphItem)。

---

## 属性

### PageItems.length

`app.activeDocument.pageItems.length`

#### 描述

集合中的对象数量。

#### 类型

数字；只读。

---

### PageItems.parent

`app.activeDocument.pageItems.parent`

#### 描述

该对象的父对象。

#### 类型

对象；只读。

---

### PageItems.typename

`app.activeDocument.pageItems.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### PageItems.getByName()

`app.activeDocument.pageItems.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素名称 |

#### 返回值

[PageItem](.././PageItem)

---

### PageItems.index()

`app.activeDocument.pageItems.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[PageItem](.././PageItem)

---

### PageItems.removeAll()

`app.activeDocument.pageItems.removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无。

---

## 示例

### 获取页面项目中的外部文件引用

```javascript
// 使用 pageItems 对象获取当前文档中的所有文件引用，
// 然后将它们显示在新文档中

if (app.documents.length > 0) {
 var fileReferences = new Array();
 var sourceDoc = app.activeDocument;

 for (var i = 0; i < sourceDoc.pageItems.length; i++) {
 var artItem = sourceDoc.pageItems[i];
 switch (artItem.typename) {
 case "PlacedItem":
 fileReferences.push(artItem.file.fsName);
 break;
 case "RasterItem":
 if (!artItem.embedded) {
 fileReferences.push(artItem.file.fsName);
 }
 break;
 }
 }

 // 将文件引用写入新文档
 var reportDoc = documents.add();
 var areaTextPath = reportDoc.pathItems.rectangle(reportDoc.height, 0, reportDoc.width, reportDoc.height);
 var fileNameText = reportDoc.textFrames.areaText(areaTextPath);
 fileNameText.textRange.size = 24;
 var paragraphCount = 3;
 var sourceName = sourceDoc.name;
 var text = "文件引用在 \'" + sourceName + "\':\r\r";
 for (i = 0; i < fileReferences.length; i++) {
 text += (fileReferences[i] + "\r");
 paragraphCount++;
 }
 fileNameText.contents = text;
}
```
