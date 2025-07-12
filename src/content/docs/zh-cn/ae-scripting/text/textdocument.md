---
title: textdocument
---
# TextDocument 对象

`new TextDocument(docText)`

`app.project.item(index).layer(index).property("Source Text").value`

#### 描述

TextDocument 对象存储了 TextLayer 的 Source Text 属性的值。通过构造函数创建它，并传递要封装的字符串。

#### 示例

以下代码设置了一些源文本的值，并显示一个弹窗展示新值。

```javascript
var myTextDocument = new TextDocument("HappyCake");
myTextLayer.property("Source Text").setValue(myTextDocument);
alert(myTextLayer.property("Source Text").value);
```

以下代码为文本设置关键帧值，以显示随时间变化的不同单词。

```javascript
var textProp = myTextLayer.property("Source Text");
textProp.setValueAtTime(0, newTextDocument("Happy"));
textProp.setValueAtTime(.33, newTextDocument("cake"));
textProp.setValueAtTime(.66, newTextDocument("is"));
textProp.setValueAtTime(1, newTextDocument("yummy!"));
```

以下代码为一些文本设置各种字符和段落样式。

```javascript
var textProp = myTextLayer.property("Source Text");
var textDocument = textProp.value;
myString = "Happy holidays!";
textDocument.resetCharStyle();
textDocument.fontSize = 60;
textDocument.fillColor = [1, 0, 0];
textDocument.strokeColor = [0, 1, 0];
textDocument.strokeWidth = 2;
textDocument.font = "Times New Roman PSMT";
textDocument.strokeOverFill = true;
textDocument.applyStroke = true;
textDocument.applyFill = true;
textDocument.text = myString;
textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
textDocument.tracking = 50;
textProp.setValue(textDocument);
```

---

## 属性

### TextDocument.allCaps

`textDocument.allCaps`

:::note
该方法添加于 After Effects 13.2 (CC 2014.2)
:::

#### 描述

如果文本图层启用了“全部大写”，则为 `true`；否则为 `false`。要设置此值，请使用 After Effects 24.0 中添加的 [fontCapsOption](#textdocumentfontcapsoption)。

:::warning
此值仅反映文本图层中的第一个字符。
:::

#### 类型

布尔值；只读。

---

### TextDocument.applyFill

`textDocument.applyFill`

#### 描述

当为 `true` 时，文本图层显示填充。访问 [fillColor](#textdocumentfillcolor) 属性以获取实际颜色。当为 `false` 时，仅显示描边。

#### 类型

布尔值；可读写。

---

### TextDocument.applyStroke

`textDocument.applyStroke`

#### 描述

当为 `true` 时，文本图层显示描边。访问 [strokeColor](#textdocumentstrokecolor) 属性以获取实际颜色，访问 [strokeWidth](#textdocumentstrokewidth) 以获取其粗细。当为 `false` 时，仅显示填充。

#### 类型

布尔值；可读写。

---

### TextDocument.autoHyphenate

`textDocument.autoHyphenate`

:::note
该方法添加于 After Effects 24.0
:::

#### 描述

文本图层的自动连字符段落选项。

如果此属性具有混合值，则读取为 `undefined`。

:::warning
此值反映文本图层中的所有段落。
:::

如果更改此值，它将为文本图层中的所有段落设置指定的设置。

#### 类型

布尔值；可读写。

---

### TextDocument.autoLeading

`textDocument.autoLeading`

#### 描述

文本图层的自动行距字符选项。

如果此属性具有混合值，则读取为 `undefined`。

:::warning
此值反映文本图层中的所有段落。
:::

如果更改此值，它将为文本图层中的所有段落设置指定的设置。

#### 类型

布尔值；可读写。

---

### TextDocument.autoKernType

`textDocument.autoKernType`

:::note
该方法添加于 After Effects 24.0
:::

#### 描述

文本图层的自动字距类型选项。

:::warning
此值仅反映文本图层中的第一个字符。
:::

如果更改此值，它将为文本图层中的所有字符设置指定的设置。

#### 类型

`AutoKernType` 枚举值；可读写。可能的值包括：

- `AutoKernType.NO_AUTO_KERN`
- `AutoKernType.METRIC_KERN`
- `AutoKernType.OPTICAL_KERN`

---

### TextDocument.baselineDirection

`textDocument.baselineDirection`

:::note
该方法添加于 After Effects 24.0
:::

#### 描述

文本图层的基线方向选项。这对于垂直文本中的日语文本尤为重要。"BASELINE_VERTICAL_CROSS_STREAM" 也称为 Tate-Chu-Yoko。

:::warning
此值仅反映文本图层中的第一个字符。
:::

如果更改此值，它将为文本图层中的所有字符设置指定的设置。

#### 类型

`BaselineDirection` 枚举值；可读写。可能的值包括：

- `BaselineDirection.BASELINE_WITH_STREAM`
- `BaselineDirection.BASELINE_VERTICAL_ROTATED`
- `BaselineDirection.BASELINE_VERTICAL_CROSS_STREAM`

---

### TextDocument.baselineLocs

`textDocument.baselineLocs`

:::note
该方法添加于 After Effects 13.6 (CC 2015)
:::

#### 描述

文本图层的基线 (x,y) 位置。段落文本框中的换行被视为多行。

:::tip
如果某行没有字符，则开始和结束的 x 和 y 值将为最大浮点值 (`3.402823466e+38F`)。
:::

#### 类型

浮点值数组，形式如下：

```javascript
[
 line0.start_x,
 line0.start_y,
 line0.end_x,
 line0.end_y,
 line1.start_x,
 line1.start_y,
 line1.end_x,
 line1.end_y,
 ...
 lineN-1.start_x,
 lineN-1.start_y,
 lineN-1.end_x,
 lineN-1.end_y
]
```

---

### TextDocument.baselineShift

`textDocument.baselineShift`

:::note
该方法添加于 After Effects 13.2 (CC 2014.2)
:::

#### 描述

此文本图层的基线偏移量（以像素为单位）。

:::warning
此值仅反映文本图层中的第一个字符。
:::

如果更改此值，它将为文本图层中的所有字符设置指定的设置。

#### 类型

浮点值；可读写。

---

### TextDocument.boxAutoFitPolicy

`textDocument.boxAutoFitPolicy`

:::note
该方法添加于 After Effects 24.6
:::

#### 描述

启用自动调整框高度以适应框中的文本内容。
框仅向下增长。

默认为 `BoxAutoFitPolicy.NONE`。

如果 [TextDocument.boxVerticalAlignment](#textdocumentboxverticalalignment) 不是 `BoxVerticalAlignment.TOP`，则此功能将被禁用。

#### 类型

`BoxAutoFitPolicy` 枚举值；可读写。可能的值包括：

- `BoxAutoFitPolicy.NONE`
- `BoxAutoFitPolicy.HEIGHT_CURSOR`
- `BoxAutoFitPolicy.HEIGHT_PRECISE_BOUNDS`
- `BoxAutoFitPolicy.HEIGHT_BASELINE`

---

### TextDocument.boxFirstBaselineAlignment

`textDocument.boxFirstBaselineAlignment`

:::note
该方法添加于 After Effects 24.6
:::

#### 描述

控制第一行文本相对于框顶部的对齐方式。

如果 [TextDocument.boxFirstBaselineAlignmentMinimum](#textdocumentboxfirstbaselinealignmentminimum) 不为零，则此功能将被禁用。

默认为 `BoxFirstBaselineAlignment.ASCENT`。

#### 类型

`BoxFirstBaselineAlignment` 枚举值；可读写。可能的值包括：

- `BoxFirstBaselineAlignment.ASCENT`
- `BoxFirstBaselineAlignment.CAP_HEIGHT`
- `BoxFirstBaselineAlignment.EM_BOX`
- `BoxFirstBaselineAlignment.LEADING`
- `BoxFirstBaselineAlignment.LEGACY_METRIC`
- `BoxFirstBaselineAlignment.MINIMUM_VALUE_ASIAN`
- `BoxFirstBaselineAlignment.MINIMUM_VALUE_ROMAN`
- `BoxFirstBaselineAlignment.TYPO_ASCENT`
- `BoxFirstBaselineAlignment.X_HEIGHT`

---

### TextDocument.boxFirstBaselineAlignmentMinimum

`textDocument.boxFirstBaselineAlignmentMinimum`

:::note
该方法添加于 After Effects 24.6
:::

#### 描述

手动控制第一行文本相对于框顶部的位置。

此处设置的非零值将覆盖 [TextDocument.boxFirstBaselineAlignment](#textdocumentboxfirstbaselinealignment) 值的效果。

默认为零。

#### 类型

浮点值；可读写。

---

### TextDocument.boxInsetSpacing

`textDocument.boxInsetSpacing`

:::note
该方法添加于 After Effects 24.6
:::

#### 描述

控制框边界与可组合文本框开始位置之间的内部间距。相同的值应用于框的所有四个边。

默认为零。

#### 类型

浮点值；可读写。

---

### TextDocument.boxOverflow

`textDocument.boxOverflow`

:::note
该方法添加于 After Effects 24.6
:::

#### 描述

如果文本的某些部分未组合到框中，则返回 `true`。

#### 类型

布尔值；只读。

---

### TextDocument.boxText

`textDocument.boxText`

#### 描述

如果文本图层是段落（有界）文本图层，则为 `true`；否则为 `false`。

#### 类型

布尔值；只读。

---

### TextDocument.boxTextPos

`textDocument.boxTextPos`

:::note

从 After Effects 14 (CC2017) 开始，此属性似乎也可写。
:::

#### 描述

段落（框）文本图层的锚点的图层坐标，作为像素尺寸的 [宽度, 高度] 数组。

:::warning
如果 [boxText](#textdocumentboxtext) 对文本图层不返回 `true`，则抛出异常。
:::

#### 类型

([X,Y]) 位置坐标数组；可读写。

#### 示例

```javascript
// 对于段落文本图层，返回图层锚点的 [x, y] 位置（图层坐标）。
// 例如，使用默认字符面板设置时，大约为 [0, -25]。
var boxTextLayerPos = myTextLayer.sourceText.value.boxTextPos;
```

---

### TextDocument.boxTextSize

`textDocument.boxTextSize`

#### 描述

段落（框）文本图层的大小，作为像素尺寸的 [宽度, 高度] 数组。

:::warning
如果 [boxText](#textdocumentboxtext) 对文本图层不返回 `true`，则抛出异常。
:::

#### 类型

两个整数的数组（最小值为 1）；可读写。

---

### TextDocument.boxVerticalAlignment

`textDocument.boxVerticalAlignment`

:::note
该方法添加于 After Effects 24.6
:::

#### 描述

启用框中组合文本的自动垂直对齐。

默认为 `BoxVerticalAlignment.TOP`

#### 类型

`BoxVerticalAlignment` 枚举值；可读写。可能的值包括：

- `BoxVerticalAlignment.TOP`
- `BoxVerticalAlignment.CENTER`
- `BoxVerticalAlignment.BOTTOM`
- `BoxVerticalAlignment.JUSTIFY`

---

### TextDocument.composedLineCount

`textDocument.composedLineCount`

#### 描述

返回文本图层中组合行的数量，如果所有文本都溢出，则可能为零。

[TextDocument 对象](#textdocument-object) 实例从组合状态初始化，后续对 [TextDocument 对象](#textdocument-object) 实例的更改不会导致重新组合。

即使从 [TextDocument 对象](#textdocument-object) 实例中删除所有文本，此处返回的值仍保持不变。

#### 类型

整数；只读。

---

### TextDocument.composerEngine

`textDocument.composerEngine`

:::note
该方法添加于 After Effects 24.0
:::

#### 描述

文本图层的段落组合引擎选项。默认情况下，新的文本图层将使用 `ComposerEngine.UNIVERSAL_TYPE_ENGINE`；其他枚举值仅在 [After Effects 22.1.1](https://helpx.adobe.com/after-effects/using/whats-new/2022-1.html) 中 Universal Type Engine（以前称为南亚和中东引擎）成为默认引擎之前创建的项目中遇到。

如果此属性具有混合值，则读取为 `undefined`。

此属性可读写，但如果写入除 `ComposerEngine.UNIVERSAL_TYPE_ENGINE` 之外的任何枚举值，则会抛出异常。

实际上，您可以将旧文档从 `ComposerEngine.LATIN_CJK_ENGINE` 更改为 `ComposerEngine.UNIVERSAL_TYPE_ENGINE`，但不能反向更改。

:::warning
此值反映文本图层中的所有段落。
:::

如果更改此值，它将为文本图层中的所有段落设置指定的设置。

#### 类型

`ComposerEngine` 枚举值；可读写。可能的值包括：

- `ComposerEngine.LATIN_CJK_ENGINE`
- `ComposerEngine.UNIVERSAL_TYPE_ENGINE`

---

### TextDocument.digitSet

`textDocument.digitSet`

:::note
该方法添加于 After Effects 24.0
:::

#### 描述

文本图层的数字集选项。

:::warning
此值仅反映文本图层中的第一个字符。
:::

如果更改此值，它将为文本图层中的所有字符设置指定的设置。

#### 类型

`DigitSet` 枚举值；可读写。可能的值包括：

- `DigitSet.DEFAULT_DIGITS`
- `DigitSet.ARABIC_DIGITS`
- `DigitSet.HINDI_DIGITS`
- `DigitSet.FARSI_DIGITS`
- `DigitSet.ARABIC_DIGITS_RTL`

---

### TextDocument.direction

`textDocument.direction`

:::note
此功能在 After Effects 24.0 版本中新增
:::

#### 描述

文本图层的段落方向选项。

如果该属性值为混合值，读取时将返回 `undefined`。

:::warning
该值反映文本图层中所有段落的设置
:::

修改此值会将文本图层中所有段落设置为指定方向。

#### 类型

`ParagraphDirection` 枚举值；可读写。可选值包括：

- `ParagraphDirection.DIRECTION_LEFT_TO_RIGHT`
- `ParagraphDirection.DIRECTION_RIGHT_TO_LEFT`

---

### TextDocument.endIndent

`textDocument.endIndent`

:::note
此功能在 After Effects 24.0 版本中新增
:::

#### 描述

文本图层的段落末端缩进选项。

如果该属性值为混合值，读取时将返回 `undefined`。

:::warning
该值反映文本图层中所有段落的设置
:::

修改此值会将文本图层中所有段落设置为指定缩进值。

#### 类型

浮点数值；可读写。

---

### TextDocument.everyLineComposer

`textDocument.everyLineComposer`

:::note
此功能在 After Effects 24.0 版本中新增
:::

#### 描述

文本图层的"每行排版器"段落选项。若设为 `false`，TextDocument 将使用"单行排版器"。

如果该属性值为混合值，读取时将返回 `undefined`。

:::warning
该值反映文本图层中所有段落的设置
:::

修改此值会将文本图层中所有段落设置为指定排版方式。

#### 类型

布尔值；可读写。

---

### TextDocument.fauxBold

`textDocument.fauxBold`

:::note
写入功能在 After Effects 24.0 版本中新增
:::

#### 描述

若文本图层启用伪粗体则返回 `true`，否则返回 `false`。

:::warning
该值仅反映文本图层中第一个字符的设置
:::

修改此值会将文本图层中所有字符设置为指定状态。

#### 类型

布尔值；可读写。

#### 示例

```javascript
var isFauxBold = myTextLayer.sourceText.value.fauxBold;
```

---

### TextDocument.fauxItalic

`textDocument.fauxItalic`

:::note
写入功能在 After Effects 24.0 版本中新增
:::

#### 描述

若文本图层启用伪斜体则返回 `true`，否则返回 `false`。

:::warning
该值仅反映文本图层中第一个字符的设置
:::

修改此值会将文本图层中所有字符设置为指定状态。

#### 类型

布尔值；可读写。

---

### TextDocument.fillColor

`textDocument.fillColor`

#### 描述

文本图层的填充颜色，以 `[r, g, b]` 浮点数组表示。例如在8-bpc项目中，红色值255对应1.0；在32-bpc项目中，超亮蓝色值可以是3.2之类的数值。

若 [applyFill](#textdocumentapplyfill) 不为 `true`，读取时会抛出异常。

设置此值同时会将受影响字符的 [applyFill](#textdocumentapplyfill) 设为 `true`。

:::warning
该值仅反映文本图层中第一个字符的设置
:::

修改此值会将文本图层中所有字符设置为指定颜色。

#### 类型

`[r, g, b]` 浮点数组；可读写。

---

### TextDocument.firstLineIndent

`textDocument.firstLineIndent`

:::note
此功能在 After Effects 24.0 版本中新增
:::

#### 描述

文本图层的段落首行缩进选项。

如果该属性值为混合值，读取时将返回 `undefined`。

:::warning
该值反映文本图层中所有段落的设置
:::

修改此值会将文本图层中所有段落设置为指定缩进值。

#### 类型

浮点数值；可读写。

---

### TextDocument.font

`textDocument.font`

#### 描述

通过PostScript名称指定的文本图层字体。

写入时限制极少——如果底层字体管理系统没有与提供的PostScript名称匹配的[字体对象](../fontobject)实例，将创建替代实例。
在PostScript名称重复的情况下，返回的字体实例将是[FontsObject.getFontsByPostScriptName()](../fontsobject#fontsobjectgetfontsbypostscriptname)返回数组的第0个元素。

如需精确控制，应使用[字体对象](../fontobject)属性。

:::warning
该值仅反映文本图层中第一个字符的设置
:::

修改此值会将文本图层中所有字符设置为指定字体。

#### 类型

字符串；可读写。

---

### TextDocument.fontBaselineOption

`textDocument.fontBaselineOption`

:::note
此功能在 After Effects 24.0 版本中新增
:::

#### 描述

文本图层的字体基线选项。用于将文本设置为上标或下标。

:::warning
该值仅反映文本图层中第一个字符的设置
:::

修改此值会将文本图层中所有字符设置为指定基线。

#### 类型

`FontBaselineOption` 枚举值；可读写。可选值包括：

- `FontBaselineOption.FONT_NORMAL_BASELINE`
- `FontBaselineOption.FONT_FAUXED_SUPERSCRIPT`
- `FontBaselineOption.FONT_FAUXED_SUBSCRIPT`

---

### TextDocument.fontCapsOption

`textDocument.fontCapsOption`

:::note
此功能在 After Effects 24.0 版本中新增
:::

#### 描述

文本图层的字体大写选项。

:::warning
该值仅反映文本图层中第一个字符的设置
:::

修改此值会将文本图层中所有字符设置为指定大写样式。

#### 类型

`FontCapsOption` 枚举值；可读写。可选值包括：

- `FontCapsOption.FONT_NORMAL_CAPS`
- `FontCapsOption.FONT_SMALL_CAPS`
- `FontCapsOption.FONT_ALL_CAPS`
- `FontCapsOption.FONT_ALL_SMALL_CAPS`

---

### TextDocument.fontFamily

`textDocument.fontFamily`

:::note
此功能在 After Effects 13.1 (CC 2014.1) 版本中新增
:::

#### 描述

包含字体家族名称的字符串。

:::warning
该值仅反映文本图层中第一个字符的设置
:::

#### 类型

字符串；只读。

---

### TextDocument.fontLocation

`textDocument.fontLocation`

:::note
此功能在 After Effects 13.1 (CC 2014.1) 版本中新增
:::

#### 描述

字体文件的磁盘路径。

:::warning
并非所有字体类型都能返回此值；某些字体可能返回空字符串
:::

:::warning
该值仅反映文本图层中第一个字符的设置
:::

#### 类型

字符串；只读。

---

### TextDocument.fontObject

`textDocument.fontObject`

:::note
此功能在 After Effects 24.0 版本中新增
:::

#### 描述

通过PostScript名称指定的文本图层[字体对象](../fontobject)。

:::warning
该值仅反映文本图层中第一个字符的设置
:::

#### 类型

[字体对象](../fontobject)；可读写。

---

### TextDocument.fontSize

`textDocument.fontSize`

#### 描述

文本图层的字体大小（像素单位）。

:::warning
该值仅反映文本图层中第一个字符的设置
:::

修改此值会将文本图层中所有字符设置为指定字号。

#### 类型

浮点数值（0.1至1296，含边界值）；可读写。

---

### TextDocument.fontStyle

`textDocument.fontStyle`

:::note
此功能在 After Effects 13.1 (CC 2014.1) 版本中新增
:::

#### 描述

包含样式信息的字符串，如"bold"、"italic"等。

:::warning
该值仅反映文本图层中第一个字符的设置
:::

#### 类型

字符串；只读。

---

### TextDocument.hangingRoman

`textDocument.hangingRoman`

:::note
此功能在 After Effects 24.0 版本中新增
:::

#### 描述

文本图层的"罗马悬挂标点"段落选项。仅对文本框图层有意义——允许标点符号悬挂在框外而不换行。

如果该属性值为混合值，读取时将返回 `undefined`。

:::warning
该值反映文本图层中所有段落的设置
:::

修改此值会将文本图层中所有段落设置为指定状态。

#### 类型

布尔值；可读写。

---

### TextDocument.horizontalScale

`textDocument.horizontalScale`

:::note
此功能在 After Effects 13.2 (CC 2014.2) 版本中添加
:::

#### 描述

文本图层水平缩放比例（以像素为单位）。

:::warning
该值仅反映文本图层中的第一个字符。
:::

修改此值将会把文本图层中所有字符设置为指定值。

#### 类型

浮点数值；可读写。

#### 示例

```javascript
var valOfHScale = myTextLayer.sourceText.value.horizontalScale;
```

---

### TextDocument.justification

`textDocument.justification`

#### 描述

文本图层的段落对齐方式。

#### 类型

`ParagraphJustification`枚举值；可读写。可选值包括：

- `ParagraphJustification.LEFT_JUSTIFY`（左对齐）
- `ParagraphJustification.RIGHT_JUSTIFY`（右对齐）
- `ParagraphJustification.CENTER_JUSTIFY`（居中对齐）
- `ParagraphJustification.FULL_JUSTIFY_LASTLINE_LEFT`（两端对齐最后行左对齐）
- `ParagraphJustification.FULL_JUSTIFY_LASTLINE_RIGHT`（两端对齐最后行右对齐）
- `ParagraphJustification.FULL_JUSTIFY_LASTLINE_CENTER`（两端对齐最后行居中对齐）
- `ParagraphJustification.FULL_JUSTIFY_LASTLINE_FULL`（两端对齐最后行两端对齐）
- `ParagraphJustification.MULTIPLE_JUSTIFICATIONS`（多重对齐方式）

若文本图层包含混合对齐方式，将返回`ParagraphJustification.MULTIPLE_JUSTIFICATIONS`。

尝试将TextDocument设置为`ParagraphJustification.MULTIPLE_JUSTIFICATIONS`时实际会应用`ParagraphJustification.CENTER_JUSTIFY`。

:::warning
该值反映文本图层中的所有段落。
:::

修改此值将会把文本图层中所有段落设置为指定对齐方式。

---

### TextDocument.kerning

`textDocument.kerning`

:::note
此功能在 After Effects 24.0 版本中添加
:::

#### 描述

文本图层的字距调整选项。

对于`AutoKernType.METRIC_KERN`和`AutoKernType.OPTICAL_KERN`将返回零。

设置此值同时会将受影响字符的`AutoKernType.NO_AUTO_KERN`设为`true`。

:::warning
该值仅反映文本图层中的第一个字符。
:::

修改此值将会把文本图层中所有字符设置为指定值。

#### 类型

整数值；可读写。

---

### TextDocument.leading

`textDocument.leading`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 版本中添加
:::

#### 描述

文本图层的行间距。

若[TextDocument.autoLeading](#textdocumentautoleading)为`true`则返回零。

设置此值同时会将受影响字符的[TextDocument.autoLeading](#textdocumentautoleading)设为`true`。

:::warning
该值仅反映文本图层中的第一个字符。
:::

修改此值将会把文本图层中所有字符设置为指定值。

最小可设置值为0，但会被自动调整为0.01。

#### 类型

浮点数值；可读写。

#### 示例

```javascript
// 创建文本图层并设置行间距为100

var composition = app.project.activeItem;
var myTextLayer = comp.layers.addText("Spring\nSummer\nAutumn\nWinter");
var myTextSource = myTextLayer.sourceText;
var myTextDocument = myTextSource.value;
myTextDocument.leading = 100;
myTextSource.setValue(myTextDocument);
```

---

### TextDocument.leadingType

`textDocument.leadingType`

:::note
此功能在 After Effects 24.0 版本中添加
:::

#### 描述

文本图层的段落行距类型选项。

若该属性存在混合值，将返回`undefined`。

:::warning
该值反映文本图层中的所有段落。
:::

修改此值将会把文本图层中所有段落设置为指定值。

#### 类型

`LeadingType`枚举值；可读写。可选值包括：

- `LeadingType.ROMAN_LEADING_TYPE`（罗马行距）
- `LeadingType.JAPANESE_LEADING_TYPE`（日文行距）

---

### TextDocument.ligature

`textDocument.ligature`

:::note
此功能在 After Effects 24.0 版本中添加
:::

#### 描述

文本图层的连字选项。

:::warning
该值仅反映文本图层中的第一个字符。
:::

修改此值将会把文本图层中所有字符设置为指定值。

#### 类型

布尔值；可读写。

---

### TextDocument.lineJoinType

`textDocument.lineJoinType`

:::note
此功能在 After Effects 24.0 版本中添加
:::

#### 描述

文本图层描边的线段连接类型选项。

:::warning
该值仅反映文本图层中的第一个字符。
:::

修改此值将会把文本图层中所有字符设置为指定值。

#### 类型

`LineJoinType`枚举值；可读写。可选值包括：

- `LineJoinType.LINE_JOIN_MITER`（尖角连接）
- `LineJoinType.LINE_JOIN_ROUND`（圆角连接）
- `LineJoinType.LINE_JOIN_BEVEL`（斜切连接）

---

### TextDocument.lineOrientation

`textDocument.lineOrientation`

:::note
此功能在 After Effects 24.2 版本中添加
:::

#### 描述

文本图层的行方向（水平/垂直），影响图层中所有文字的排版方式。

#### 类型

`LineOrientation`枚举值；可读写。可选值包括：

- `LineOrientation.HORIZONTAL`（水平方向）
- `LineOrientation.VERTICAL_RIGHT_TO_LEFT`（垂直方向从右到左）
- `LineOrientation.VERTICAL_LEFT_TO_RIGHT`（垂直方向从左到右）

---

### TextDocument.noBreak

`textDocument.noBreak`

:::note
此功能在 After Effects 24.0 版本中添加
:::

#### 描述

文本图层的不断行属性。

:::warning
该值仅反映文本图层中的第一个字符。
:::

修改此值将会把文本图层中所有字符设置为指定值。

#### 类型

布尔值；可读写。

---

### TextDocument.paragraphCount

`textDocument.paragraphCount`

#### 描述

返回文本图层中的段落数量（始终大于等于1）。

#### 类型

整数值；只读。

---

### TextDocument.pointText

`textDocument.pointText`

#### 描述

若文本图层为点文本（无边界）则返回`true`，否则返回`false`。

#### 类型

布尔值；只读。

---

### TextDocument.smallCaps

`textDocument.smallCaps`

:::note
此功能在 After Effects 13.2 (CC 2014.2) 版本中添加
:::

#### 描述

若文本图层启用小型大写字母则返回`true`，否则返回`false`。要设置此值，请使用After Effects 24.0添加的[TextDocument.fontCapsOption](#textdocumentfontcapsoption)。

:::warning
该值仅反映文本图层中的第一个字符。
:::

#### 类型

布尔值；只读。

---

### TextDocument.spaceAfter

`textDocument.spaceAfter`

:::note
此功能在 After Effects 24.0 版本中添加
:::

#### 描述

文本图层的段后间距选项。

若该属性存在混合值，将返回`undefined`。

:::warning
该值反映文本图层中的所有段落。
:::

修改此值将会把文本图层中所有段落设置为指定值。

#### 类型

浮点数值；可读写。

---

### TextDocument.spaceBefore

`textDocument.spaceBefore`

:::note
此功能在 After Effects 24.0 版本中新增
:::

#### 描述

文本图层的段落前间距选项。

如果该属性具有混合值，则读取时为 `undefined`。

:::warning
该值反映文本图层中的所有段落。
:::

如果更改此值，将会把文本图层中的所有段落设置为指定值。

#### 类型

浮点数值；可读写。

---

### TextDocument.startIndent

`textDocument.startIndent`

:::note
此功能在 After Effects 24.0 版本中新增
:::

#### 描述

文本图层的段落首行缩进选项。

如果该属性具有混合值，则读取时为 `undefined`。

:::warning
该值反映文本图层中的所有段落。
:::

如果更改此值，将会把文本图层中的所有段落设置为指定值。

#### 类型

浮点数值；可读写。

---

### TextDocument.strokeColor

`textDocument.strokeColor`

#### 描述

文本图层的描边颜色，以 [r, g, b] 浮点数值数组表示。例如，在 8-bpc 项目中，红色值 255 对应 1.0；在 32-bpc 项目中，超亮蓝色值可以是 3.2 之类的数值。

如果 [applyStroke](#textdocumentapplystroke) 不为 `true`，读取时会抛出异常。

设置此值也会将受影响字符的 [applyStroke](#textdocumentapplystroke) 设为 `true`。

:::warning
该值仅反映文本图层中的第一个字符。
:::

如果更改此值，将会把文本图层中的所有字符设置为指定值。

#### 类型

[r, g, b] 浮点数值数组；可读写。

---

### TextDocument.strokeOverFill

`textDocument.strokeOverFill`

#### 描述

指示文本图层填充和描边的渲染顺序。当为 `true` 时，描边显示在填充上方。

如果文本图层在字符面板中设置为"所有描边在所有填充之上"或"所有填充在所有描边之上"，则文本图层可以覆盖每个字符的属性设置。因此此处返回的值可能与字符上设置的实际属性值不同。可以通过文本图层的"更多选项"下的"填充和描边"属性（使用 TextLayer.text("ADBE Text More Options")("ADBE Text Render Order")）来设置填充/描边的渲染顺序。

:::warning
该值仅反映文本图层中的第一个字符。
:::

如果更改此值，将会把文本图层中的所有字符设置为指定值。

#### 类型

布尔值；可读写。

---

### TextDocument.strokeWidth

`textDocument.strokeWidth`

#### 描述

文本图层的描边粗细（以像素为单位）。

:::warning
该值仅反映文本图层中的第一个字符。
:::

如果更改此值，将会把文本图层中的所有字符设置为指定值。

设置的最小可接受值为 0，但会静默截取为 0.01。

#### 类型

浮点数值（0 至 1000，含边界值）；可读写。

---

### TextDocument.subscript

`textDocument.subscript`

:::note
此功能在 After Effects 13.2 (CC 2014.2) 版本中新增
:::

#### 描述

如果文本图层启用了下标则为 `true`；否则为 `false`。要设置此值，请使用 After Effects 24.0 新增的 [TextDocument.fontBaselineOption](#textdocumentfontbaselineoption)。

:::warning
该值仅反映文本图层中的第一个字符。
:::

#### 类型

布尔值；只读。

---

### TextDocument.superscript

`textDocument.superscript`

:::note
此功能在 After Effects 13.2 (CC 2014.2) 版本中新增
:::

#### 描述

如果文本图层启用了上标则为 `true`；否则为 `false`。要设置此值，请使用 After Effects 24.0 新增的 [TextDocument.fontBaselineOption](#textdocumentfontbaselineoption)。

:::warning
该值仅反映文本图层中的第一个字符。
:::

#### 类型

布尔值；只读。

---

### TextDocument.text

`textDocument.text`

#### 描述

文本图层源文本属性的文本值。

#### 类型

字符串；可读写。

---

### TextDocument.tracking

`textDocument.tracking`

#### 描述

文本图层字符间的间距。

:::warning
该值仅反映文本图层中的第一个字符。
:::

如果更改此值，将会把文本图层中的所有字符设置为指定值。

#### 类型

浮点数值；可读写。

---

### TextDocument.tsume

`textDocument.tsume`

:::note
此功能在 After Effects 13.2 (CC 2014.2) 版本中新增
:::

#### 描述

文本图层的 tsume 值（标准化百分比，范围 0.0 -> 1.0）。

:::warning
该值仅反映文本图层中的第一个字符。
:::

如果更改此值，将会把文本图层中的所有字符设置为指定值。

此属性接受 0.0 -> 100.0 的值，但实际期望的是 0.0 -> 1.0 的标准化值。使用大于 1.0 的值会产生意外结果；AE 的字符面板会将值限制在 100%，尽管脚本设置了更高的值（即 `TextDocument.tsume = 100` 实际设置的是 10,000%）。

#### 类型

浮点数值；可读写。

---

### TextDocument.verticalScale

`textDocument.verticalScale`

:::note
此功能在 After Effects 13.2 (CC 2014.2) 版本中新增
:::

#### 描述

文本图层的垂直缩放（以像素为单位）。

:::warning
该值仅反映文本图层中的第一个字符。
:::

如果更改此值，将会把文本图层中的所有字符设置为指定值。

#### 类型

浮点数值；可读写。

---

## 方法

### TextDocument.characterRange()

`textDocument.characterRange(characterStart, [signedCharacterEnd])`

:::note
此功能在 After Effects 24.3 版本中新增
:::

#### 描述

返回文本图层范围访问器 CharacterRange 的实例。

该实例会记住构造函数中传入的参数 - 这些参数保持不变，对 [TextDocument](#textdocument-object) 长度的更改可能导致实例在访问时抛出异常，直到 [TextDocument](#textdocument-object) 长度更改使范围再次有效。

使用 toString() 可查看构造参数。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `characterStart` | 无符号整数 | 从零开始，必须小于或等于 [TextDocument 对象](#textdocument-object) 的（文本）长度。 |
| `signedCharacterEnd` | 有符号整数。 | 可选。如果未指定，则计算为 `(characterStart + 1)`。 |
| | | 如果设为 `-1`，则 [CharacterRange 对象](../characterrange) 会在访问时动态计算此值，使其等于 [TextDocument 对象](#textdocument-object) 的（文本）长度。 |
| | | `signedCharacterEnd` 必须大于或等于 `characterStart`，且小于或等于 [TextDocument 对象](#textdocument-object) 的（文本）长度。 |

如果参数会导致无效范围，则抛出异常。

无法创建跨越 [TextDocument 对象](#textdocument-object) 中最后一个回车符的 [CharacterRange 对象](../characterrange)。

#### 返回值

[CharacterRange 对象](../characterrange) 的实例

---

### TextDocument.composedLineCharacterIndexesAt()

`textDocument.composedLineCharacterIndexesAt(characterIndex)`

:::note
此功能在 After Effects 24.3 版本中新增
:::

#### 描述

返回文本图层中 [ComposedLineRange 对象](../composedlinerange) 的字符索引边界。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `characterIndex` | 无符号整数 | 文本图层中的文本索引，将映射到其相交的排版行。 |

#### 返回值

通用对象；
键 `start` 将设为排版行起始的文本索引（大于或等于零）。
键 `end` 将设为排版行结束的文本索引（大于起始值，或如果是最后一个排版行则等于起始值）。

如果计算的起始和结束超出当前 [TextDocument 对象](#textdocument-object) 范围，将抛出异常。
请注意排版行是静态的，后续对 [TextDocument 对象](#textdocument-object) 实例的更改如果导致其长度变化，可能会使排版行数据无效。

---

### TextDocument.composedLineRange()

`textDocument.composedLineRange(composedLineIndexStart, [signedComposedLineIndexEnd])`

:::note
此功能在 After Effects 24.3 版本中新增
:::

#### 描述

返回文本图层范围访问器 [ComposedLineRange 对象](../composedlinerange) 的实例。

该实例会记住构造函数中传入的参数 - 这些参数保持不变，对 [TextDocument](#textdocument-object) 内容的更改可能导致实例在访问时抛出异常，直到 [TextDocument](#textdocument-object) 内容更改使范围再次有效。

使用 [ComposedLineRange.toString()](../composedlinerange#composedlinerangetostring) 可查看构造参数。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `composedLineIndexStart` | 无符号整数 | 从零开始，必须小于 [TextDocument 对象](#textdocument-object) 中的排版行数量。 |
| `signedComposedLineIndexEnd` | 有符号整数。 | 可选。如果未指定，则计算为 `(composedLineIndexStart + 1)`。 |
| | | 如果设为 -1，则 [ComposedLineRange 对象](../composedlinerange) 会在访问时动态计算此值为 [TextDocument 对象](#textdocument-object) 的最后一个排版行。 |
| | | `signedComposedLineIndexEnd` 必须大于 `composedLineIndexStart`，且小于或等于 [TextDocument 对象](#textdocument-object) 中的排版行数量。 |

如果参数会导致无效范围，则抛出异常。

请注意排版行是静态的，后续对 [TextDocument 对象](#textdocument-object) 实例的更改如果导致其长度变化，可能会使排版行数据无效。

#### 返回值

[ComposedLineRange 对象](../composedlinerange) 的实例

---

### TextDocument.paragraphCharacterIndexesAt()

`textDocument.paragraphCharacterIndexesAt(characterIndex)`

:::note
此功能在 After Effects 24.3 版本中新增
:::

#### 描述

返回文本图层中段落的字符索引边界。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `characterIndex` | 无符号整数 | 文本图层中的文本索引，将映射到其相交的段落。 |

#### 返回值

通用对象；
键 `start` 将设为段落起始的文本索引（大于或等于零）。
键 `end` 将设为段落结束的文本索引（大于起始值，或如果是最后一个段落则等于起始值）。

---

### TextDocument.paragraphRange()

`textDocument.paragraphRange(paragraphIndexStart, [signedParagraphIndexEnd])`

:::note
此功能在 After Effects 24.3 版本中新增
:::

#### 描述

返回文本图层范围访问器 [ParagraphRange 对象](../paragraphrange) 的实例。

该实例会记住构造函数中传入的参数 - 这些参数保持不变，对 [TextDocument](#textdocument-object) 内容的更改可能导致实例在访问时抛出异常，直到 [TextDocument](#textdocument-object) 内容更改使范围再次有效。

使用 [ParagraphRange.toString()](../paragraphrange#paragraphrangetostring) 可查看构造参数。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `paragraphIndexStart` | 无符号整数 | 从零开始，必须小于 [TextDocument 对象](#textdocument-object) 中的段落数量。 |
| `signedParagraphIndexEnd` | 有符号整数 | 可选。如果未指定，则计算为 `(paragraphIndexStart + 1)`。 |
| | | 如果设为 -1，则 [ParagraphRange 对象](../paragraphrange) 会在访问时动态计算此值为 [TextDocument 对象](#textdocument-object) 的最后一个段落。 |
| | | `signedParagraphIndexEnd` 必须大于 `paragraphIndexStart`，且小于或等于 [TextDocument 对象](#textdocument-object) 中的段落数量。 |

如果参数会导致无效范围，则抛出异常。

#### 返回值

[ParagraphRange 对象](../paragraphrange) 的实例

---

### TextDocument.resetCharStyle()

`textDocument.resetCharStyle()`

#### 描述

将文本图层中的所有字符恢复为字符面板中的默认文本字符特性。

#### 参数

无。

#### 返回值

无。

---

### TextDocument.resetParagraphStyle()

`textDocument.resetParagraphStyle()`

#### 描述

将文本图层中的所有段落恢复为段落面板中的默认文本段落特性。

#### 参数

无。

#### 返回值

无。
