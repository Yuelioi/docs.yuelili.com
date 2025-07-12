---
title: 类层级结构
---
# After Effects 类层级结构

本节列出了 After Effects API 相关元素的类层级结构。关于类的基础知识，请参阅 [JavaScript 类](../javascript#javascript-classes)。

在使用本指南时，属于某个类层级的对象会标明它是另一个对象的子类、基类，或两者兼有。

为了方便查看所有可用的类层级，我们在下方列出了完整列表。

请注意，一些类仅作为基类存在，在使用 `instanceof` 进行类型检查时可能会表现出意外行为，这些情况已在下表中标注。没有符号的类则表现如预期。

#### 符号说明

| 符号 | 定义 |
| --- | --- |
| ⚠ | `instanceof` 始终返回 `false` |
| ❌ | 该类未定义，使用 `instanceof` 会抛出错误 |

---

## 属性、属性组和图层

- [PropertyBase 对象](../../property/propertybase) ⚠
 - [Property 对象](../../property/property)
 - [PropertyGroup 对象](../../property/propertygroup)
 - [MaskPropertyGroup 对象](../../property/maskpropertygroup)
 - [Layer 对象](../../layer/layer) ⚠
 - [AVLayer 对象](../../layer/avlayer)
 - [ShapeLayer 对象](../../layer/shapelayer)
 - [TextLayer 对象](../../layer/textlayer)
 - [CameraLayer 对象](../../layer/cameralayer)
 - [LightLayer 对象](../../layer/lightlayer)

---

## 项目项（Project Items）

- [Item 对象](../../item/item) ❌
 - [AVItem 对象](../../item/avitem) ❌
 - [CompItem 对象](../../item/compitem)
 - [FootageItem 对象](../../item/footageitem)
 - [FolderItem 对象](../../item/folderitem)

---

## 素材项来源（Footage Item Sources）

- [FootageSource 对象](../../sources/footagesource) ❌
 - [FileSource 对象](../../sources/filesource)
 - [PlaceholderSource 对象](../../sources/placeholdersource)
 - [SolidSource 对象](../../sources/solidsource)

---

## 集合（Collections）

- [Collection 对象](../../other/collection) ❌
 - [ItemCollection 对象](../../item/itemcollection)
 - [LayerCollection 对象](../../layer/layercollection)
 - [OMCollection 对象](../../renderqueue/omcollection)
 - [RQItemCollection 对象](../../renderqueue/rqitemcollection)

```
