---
title: PluginItems
---
# PluginItems

`app.activeDocument.pluginItems`

#### Description

A collection of [PluginItem](.././PluginItem) objects in a document.

See [Copying a plug-in item](../pluginitem#copying-a-plug-in-item).

---

## Properties

### PluginItems.length

`app.activeDocument.pluginItems.length`

#### Description

Number of elements in the collection.

#### Type

Number; read-only.

---

### PluginItems.parent

`app.activeDocument.pluginItems.parent`

#### Description

The object's container.

#### Type

Object; read-only.

---

### PluginItems.typename

`app.activeDocument.pluginItems.typename`

#### Description

The class name of the object.

#### Type

String; read-only.

---

## Methods

### PluginItems.getByName()

`app.activeDocument.pluginItems.getByName(name)`

#### Description

Get the first element in the collection with the provided name.

#### Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | String | Name of element to get |

#### Returns

[PluginItem](.././PluginItem)

---

### PluginItems.index()

`app.activeDocument.pluginItems.index(itemKey)`

#### Description

Gets an element from the collection.

#### Parameters

| Parameter | Type | Description |
|---|---|---|
| `itemKey` | String, Number | String or number key |

#### Returns

[PluginItem](.././PluginItem)

---

### PluginItems.removeAll()

`app.activeDocument.pluginItems.removeAll()`

#### Description

Deletes all elements in the collection.

#### Returns

Nothing.
