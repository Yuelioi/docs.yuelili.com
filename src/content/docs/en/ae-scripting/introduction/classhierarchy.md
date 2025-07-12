---
title: classhierarchy
---
# After Effects Class Hierarchy

This section lists the class hierarchies for relevant AE API elements. For a primer on what this means, see [Javascript Classes](../javascript#javascript-classes)

When using this guide, any objects that exist as part of a class hierarchy will note whether they exist as a subclass or base class (or both) of another object.

As it can be useful to see all available class hierarchies in one place, we've created this list below.

Note that some classes exist only as base classes, and demonstrate unexpected behaviour when type checking via `instanceof`, as noted in the table below. Classes with no symbol behave as expected.

#### Symbol Legend

| Symbol | Definition |
| --- | --- |
| ⚠ | `instanceof` is always `false` |
| ❌ | Class is undefined; `instanceof` will throw an error |

---

## Properties, Property Groups, and Layers

- [PropertyBase object](../../property/propertybase) ⚠
 - [Property object](../../property/property)
 - [PropertyGroup object](../../property/propertygroup)
 - [MaskPropertyGroup object](../../property/maskpropertygroup)
 - [Layer object](../../layer/layer) ⚠
 - [AVLayer object](../../layer/avlayer)
 - [ShapeLayer object](../../layer/shapelayer)
 - [TextLayer object](../../layer/textlayer)
 - [CameraLayer object](../../layer/cameralayer)
 - [LightLayer object](../../layer/lightlayer)

---

## Project Items

- [Item object](../../item/item) ❌
 - [AVItem object](../../item/avitem) ❌
 - [CompItem object](../../item/compitem)
 - [FootageItem object](../../item/footageitem)
 - [FolderItem object](../../item/folderitem)

---

## Footage Item Sources

- [FootageSource object](../../sources/footagesource) ❌
 - [FileSource object](../../sources/filesource)
 - [PlaceholderSource object](../../sources/placeholdersource)
 - [SolidSource object](../../sources/solidsource)

---

## Collections

- [Collection object](../../other/collection) ❌
 - [ItemCollection object](../../item/itemcollection)
 - [LayerCollection object](../../layer/layercollection)
 - [OMCollection object](../../renderqueue/omcollection)
 - [RQItemCollection object](../../renderqueue/rqitemcollection)
