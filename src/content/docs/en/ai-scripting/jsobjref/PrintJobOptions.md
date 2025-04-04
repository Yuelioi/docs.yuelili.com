---
title: PrintJobOptions
---
# PrintJobOptions

`new PrintJobOptions()`

#### Description

Contains information about how the job is to be printed.

---

## Properties

### PrintJobOptions.artboardRange

`printJobOptions.artboardRange`

#### Description

The artboard range to be printed if printAllArtboards is false.

Default: 1-

#### Type

String

---

### PrintJobOptions.bitmapResolution

`printJobOptions.bitmapResolution`

#### Description

The bitmap resolution. Minimum: 0.0.

Default: 0.0

#### Type

Number (double)

---

### PrintJobOptions.collate

`printJobOptions.collate`

#### Description

If `true`, collate print pages.

Default: `false`

#### Type

Boolean

---

### PrintJobOptions.copies

`printJobOptions.copies`

#### Description

The number of copies to print. Minimum: 1.

Default: 1

#### Type

Number (long)

---

### PrintJobOptions.designation

`printJobOptions.designation`

#### Description

The layers/objects to be printed.

Default: `PrintArtworkDesignation.VISIBLEPRINTABLELAYERS`

#### Type

[PrintArtworkDesignation](../scripting-constants#printartworkdesignation)

---

### PrintJobOptions.file

`printJobOptions.file`

#### Description

The file to which to print.

#### Type

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) object

---

### PrintJobOptions.name

`printJobOptions.name`

#### Description

The print job name.

#### Type

String

---

### PrintJobOptions.printAllArtboards

`printJobOptions.printAllArtboards`

#### Description

Indicates whether to print all artboards.

Default: true

#### Type

Boolean

---

### PrintJobOptions.printArea

`printJobOptions.printArea`

#### Description

The printing bounds.

Default: `PrintingBounds.ARTBOARDBOUNDS`

#### Type

[PrintingBounds](../scripting-constants#printingbounds)

---

### PrintJobOptions.printAsBitmap

`printJobOptions.printAsBitmap`

#### Description

If `true`, print as bitmap.

Default: `false`

#### Type

Boolean

---

### PrintJobOptions.reversePages

`printJobOptions.reversePages`

#### Description

If `true`, print pages in reverse order.

Default: `false`

#### Type

Boolean

---

### PrintJobOptions.typename

`printJobOptions.typename`

#### Description

Read-only. The class name of the object.

#### Type

String

---

## Example

### Printing with job options

```javascript
// Creates a new document with layers containing visible, printable,
// non visible and non printable items then prints with each designation
// to view effects of using different job options

var docRef = documents.add();
var textRef_0 = docRef.layers[0].textFrames.add();
textRef_0.contents = "Visible and Printable";
textRef_0.top = 600;
textRef_0.left = 200;

var layerRef_1 = docRef.layers.add();
var textRef_1 = layerRef_1.textFrames.add();
textRef_1.contents = "Visible and Non-Printable";
textRef_1.top = 500;
textRef_1.left = 250;
layerRef_1.printable = false;

var layerRef_2 = docRef.layers.add();
var textRef_2 = layerRef_2.textFrames.add();
textRef_2.contents = "Non-Visible";
textRef_2.top = 400;
textRef_2.left = 300;
layerRef_2.visible = false;
redraw();

// Print with various job options
var printJobOptions = new PrintJobOptions();
var options = new PrintOptions();
options.jobOptions = printJobOptions;

printJobOptions.designation = PrintArtworkDesignation.ALLLAYERS;
printJobOptions.reverse = true;
docRef.print(options);

printJobOptions.collate = false;
printJobOptions.designation = PrintArtworkDesignation.VISIBLELAYERS;
printJobOptions.reverse = false;
docRef.print(options);

printJobOptions.designation = PrintArtworkDesignation.VISIBLEPRINTABLELAYERS;
var docPath = new File("~/printJobTest1.ps");
printJobOptions.file = docPath;
docRef.print(options);
```
