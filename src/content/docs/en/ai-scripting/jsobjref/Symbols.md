---
title: Symbols
---
# Symbols

`app.activeDocument.symbols`

#### Description

The collection of [Symbol](.././Symbol) objects in the document.

---

## Properties

### Symbols.length

`app.activeDocument.symbols.length`

#### Description

Number of elements in the collection.

#### Type

Number; read-only.

---

### Symbols.parent

`app.activeDocument.symbols.parent`

#### Description

The object's container.

#### Type

Object; read-only.

---

### Symbols.typename

`app.activeDocument.symbols.typename`

#### Description

The class name of the object.

#### Type

String; read-only.

---

## Methods

### Symbols.add()

`app.activeDocument.symbols.add(sourceArt[, registrationPoint])`

#### Description

Returns a symbol object created from the source art item, any of the following:

- [CompoundPathItems](.././CompoundPathItems)
- [GroupItems](.././GroupItems)
- [MeshItems](.././MeshItems)
- [NonNativeItems](.././NonNativeItems)
- [PageItems](.././PageItems)
- [PathItems](.././PathItems)
- [RasterItems](.././RasterItems)
- [SymbolItems](.././SymbolItems)
- [TextFrameItems](.././TextFrameItems)

The default registration point is `SymbolRegistrationPoint.SYMBOLCENTERPOINT`.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `sourceArt` | [PageItem](.././PageItem) | Source art to create symbol from |
| `registrationPoint` | [SymbolRegistrationPoint](../scripting-constants#symbolregistrationpoint), optional | Registration point to use |

#### Returns

[Symbol](.././Symbol)

---

### Symbols.getByName()

`app.activeDocument.symbols.getByName(name)`

#### Description

Get the first element in the collection with the provided name.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | String | Name of element to get |

#### Returns

[Symbol](.././Symbol)

---

### Symbols.index()

`app.activeDocument.symbols.index(itemKey)`

#### Description

Gets an element from the collection.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `itemKey` | String, Number | String or number key |

#### Returns

[Symbol](.././Symbol)

---

### Symbols.removeAll()

`app.activeDocument.symbols.removeAll()`

#### Description

Deletes all elements in the collection.

#### Returns

Nothing.

---

## Example

### Creating a symbol

```javascript
// Creates a path item from each graphic style
// then adds each item as a new symbol

var docRef = documents.add();
var y = 750;
var x = 25;

var iCount = docRef.graphicStyles.length;

for (var i=0; i<iCount; i++) {

 var pathRef = docRef.pathItems.rectangle( y, x, 20, 20 );
 docRef.graphicStyles[i].applyTo(pathRef);

 // are we at bottom?
 if ( (y-=60) <= 60 ) {
 y = 750; // go back to the top.
 x+= 200
 }

 redraw();
 docRef.symbols.add(pathRef);
}
```
