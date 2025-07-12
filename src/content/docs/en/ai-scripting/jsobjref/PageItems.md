---
title: PageItems
---
# PageItems

`app.activeDocument.pageItems`

#### Description

A collection of [PageItem](.././PageItem) objects. Provides complete access to all the art items in an Illustrator document in the following classes:

- [CompoundPathItem](../CompoundPathItem)
 - [Properties](../compoundpathitem#properties)
 - [Methods](../compoundpathitem#methods)
 - [Example](../compoundpathitem#example)
- [GraphItem](../GraphItem)
 - [Properties](../graphitem#properties)
 - [Methods](../graphitem#methods)
- [GroupItem](../GroupItem)
 - [Properties](../groupitem#properties)
 - [Methods](../groupitem#methods)
 - [Example](../groupitem#example)
- [LegacyTextItem](../LegacyTextItem)
 - [Properties](../legacytextitem#properties)
 - [Methods](../legacytextitem#methods)
- [MeshItem](../MeshItem)
 - [Properties](../meshitem#properties)
 - [Methods](../meshitem#methods)
 - [Example](../meshitem#example)
- [NonNativeItem](../NonNativeItem)
 - [Properties](../nonnativeitem#properties)
 - [Methods](../nonnativeitem#methods)
- [PathItem](../PathItem)
 - [Properties](../pathitem#properties)
 - [Methods](../pathitem#methods)
 - [Example](../pathitem#example)
- [PlacedItem](../PlacedItem)
 - [Properties](../placeditem#properties)
 - [Methods](../placeditem#methods)
 - [Example](../placeditem#example)
- [PluginItem](../PluginItem)
 - [Properties](../pluginitem#properties)
 - [Methods](../pluginitem#methods)
 - [Example](../pluginitem#example)
- [RasterItem](../RasterItem)
 - [Properties](../rasteritem#properties)
 - [Methods](../rasteritem#methods)
- [SymbolItem](../SymbolItem)
 - [Properties](../symbolitem#properties)
 - [Methods](../symbolitem#methods)
- [TextFrameItem](../TextFrameItem)
 - [Properties](../textframeitem#properties)
 - [Methods](../textframeitem#methods)
 - [Example](../textframeitem#example)

You can reference page items through the [PageItems](#pageitems) property in a [Document](.././Document), [Layer](.././Layer), or [GroupItem](.././GroupItem).

When you access an individual item in one of these collections, the reference is a page item of one of a particular type. For example, if you use [PageItems](#pageitems) to reference a graph item, the typename value of that object is [GraphItem](.././GraphItem).

---

## Properties

### PageItems.length

`app.activeDocument.pageItems.length`

#### Description

The number of objects in the collection.

#### Type

Number; read-only.

---

### PageItems.parent

`app.activeDocument.pageItems.parent`

#### Description

The parent of this object.

#### Type

Object; read-only.

---

### PageItems.typename

`app.activeDocument.pageItems.typename`

#### Description

The class name of the referenced object.

#### Type

String; read-only.

---

## Methods

### PageItems.getByName()

`app.activeDocument.pageItems.getByName(name)`

#### Description

Gets the first element in the collection with the specified name.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | String | Name of element to get |

#### Returns

[PageItem](.././PageItem)

---

### PageItems.index()

`app.activeDocument.pageItems.index(itemKey)`

#### Description

Gets an element from the collection.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `itemKey` | String, Number | String or number key |

#### Returns

[PageItem](.././PageItem)

---

### PageItems.removeAll()

`app.activeDocument.pageItems.removeAll()`

#### Description

Deletes all elements in this collection.

#### Returns

Nothing.

---

## Example

### Getting references to external files in page items

```javascript
// Gets all file-references in the current document using the pageItems object,
// then displays them in a new document

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

 // Write the file references to a new document
 var reportDoc = documents.add();
 var areaTextPath = reportDoc.pathItems.rectangle(reportDoc.height, 0, reportDoc.width, reportDoc.height);
 var fileNameText = reportDoc.textFrames.areaText(areaTextPath);
 fileNameText.textRange.size = 24;
 var paragraphCount = 3;
 var sourceName = sourceDoc.name;
 var text = "File references in \'" + sourceName + "\':\r\r";
 for (i = 0; i < fileReferences.length; i++) {
 text += (fileReferences[i] + "\r");
 paragraphCount++;
 }
 fileNameText.contents = text;
}
```
