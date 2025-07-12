---
title: Collection object
---
# Collection object

Like an array, a collection associates a set of objects or values as a logical group and provides access to them by index. However, most collection objects are read-only. You do not assign objects to them yourself — their contents update automatically as objects are created or deleted.

## Objects

- [ComponentCollection object](../componentcollection) - *todo*.
- [MarkerCollection object](../markercollection) - a collection of the [Marker objects](../../general/marker) in a [ProjectItem object](../../item/projectitem) and [Sequence object](../../sequence/sequence).
- [ProjectCollection object](../projectcollection) - a collection of [Project objects](../../general/project).
- [ProjectItemCollection object](../projectitemcollection) - a collection of [ProjectItem objects](../../item/projectitem).
- [SequenceCollection object](../sequencecollection) - a collection of [Sequence objects](../../sequence/sequence).
- [TrackCollection object](../trackcollection) - a collection of [Track objects](../../sequence/track).
- [TrackItemCollection object](../trackitemcollection) - a collection of [TrackItem objects](../../item/trackitem).

---

## Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| `length` | Integer | The number of objects in the collection. |

---

## Methods

| Method | Return Type | Description |
| --- | --- | --- |
| `[]` | Object | Retrieves an object in the collection by its index number. The first object is at index 1. |
