---
title: Datasets
---
# Datasets

`app.activeDocument.dataSets`

#### Description

A collection of [Dataset](.././Dataset) objects.

---

## Properties

### Datasets.length

`app.activeDocument.dataSets.length`

#### Description

The number of datasets in the collection.

#### Type

Number; read-only.

---

### Datasets.parent

`app.activeDocument.dataSets.parent`

#### Description

The name of the object that contains this dataset.

#### Type

[Document](.././Document); read-only.

---

### Datasets.typename

`app.activeDocument.dataSets.typename`

#### Description

The class name of the referenced object.

#### Type

String; read-only.

---

## Methods

### Datasets.add()

`app.activeDocument.dataSets.add()`

#### Description

Creates a new dataset object.

#### Returns

[Dataset](.././Dataset)

---

### Datasets.getByName()

`app.activeDocument.dataSets.getByName(name)`

#### Description

Gets the first element in the collection with the specified name.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | String | Name of element to get |

#### Returns

[Dataset](.././Dataset)

---

### Datasets.index()

`app.activeDocument.dataSets.index(itemKey)`

#### Description

Gets an element from the collection.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `itemKey` | String, Number | String or number key |

#### Returns

[Dataset](.././Dataset)

---

### Datasets.removeAll()

`app.activeDocument.dataSets.removeAll()`

#### Description

Removes all elements in the collection.

#### Returns

Nothing.
