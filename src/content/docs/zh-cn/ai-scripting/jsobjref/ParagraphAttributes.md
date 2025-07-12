---
title: ParagraphAttributes
---
# ParagraphAttributes

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes`

#### 描述

指定文本框中段落的属性和特性。

:::note
段落属性没有默认值，在显式设置之前为 `undefined`。
:::

---

## 属性

### ParagraphAttributes.autoLeadingAmount

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.autoLeadingAmount`

#### 描述

自动行距量，以百分比表示。

#### 类型

数字（双精度）。

---

### ParagraphAttributes.bunriKinshi

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.bunriKinshi`

#### 描述

如果为 `true`，则启用 BunriKinshi。

#### 类型

布尔值。

---

### ParagraphAttributes.burasagariType

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.burasagariType`

#### 描述

Burasagari 类型。

#### 类型

[BurasagariTypeEnum](../scripting-constants#burasagaritypeenum)

---

### ParagraphAttributes.desiredGlyphScaling

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.desiredGlyphScaling`

#### 描述

期望的字形缩放，以默认字符宽度的百分比表示。

范围：50.0 到 200.0。在 100.0 时，字符宽度不变。

#### 类型

数字（双精度）。

---

### ParagraphAttributes.desiredLetterSpacing

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.desiredLetterSpacing`

#### 描述

期望的字母间距，以默认字距或跟踪的百分比表示。

范围：-100.0 到 500.0。在 0 时，字母之间不添加空格。在 100.0 时，字母之间添加一个完整的空格宽度。

#### 类型

数字（双精度）。

---

### ParagraphAttributes.desiredWordSpacing

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.desiredWordSpacing`

#### 描述

期望的单词间距，以字体默认空格的百分比表示。

范围：0.0 到 1000.0；在 100.00 时，单词之间不添加空格。

#### 类型

数字（双精度）。

---

### ParagraphAttributes.everyLineComposer

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.everyLineComposer`

#### 描述

如果为 `true`，则启用每行排版器。如果为 `false`，则启用单行排版器。

#### 类型

布尔值。

---

### ParagraphAttributes.firstLineIndent

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.firstLineIndent`

#### 描述

首行左缩进，以点为单位。

#### 类型

数字（双精度）。

---

### ParagraphAttributes.hyphenateCapitalizedWords

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.hyphenateCapitalizedWords`

#### 描述

如果为 `true`，则对首字母大写的单词启用连字符。

#### 类型

布尔值。

---

### ParagraphAttributes.hyphenation

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.hyphenation`

#### 描述

如果为 `true`，则为段落启用连字符。

#### 类型

布尔值。

---

### ParagraphAttributes.hyphenationPreference

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.hyphenationPreference`

#### 描述

连字符偏好比例，用于更好的间距（0）或更少的连字符（1）。

范围：0.0 到 1.0。

#### 类型

数字（双精度）。

---

### ParagraphAttributes.hyphenationZone

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.hyphenationZone`

#### 描述

从段落右边缘开始的距离（以点为单位），标记不允许连字符的部分。

:::note
`0` 允许所有连字符。仅在 [ParagraphAttributes.everyLineComposer](#paragraphattributeseverylinecomposer) 为 `false` 时有效。
:::

#### 类型

数字（双精度）。

---

### ParagraphAttributes.justification

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.justification`

#### 描述

段落对齐方式。

#### 类型

[Justification](../scripting-constants#justification)

---

### ParagraphAttributes.kinsoku

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.kinsoku`

#### 描述

Kinsoku Shori 名称。

#### 类型

字符串。

---

### ParagraphAttributes.kinsokuOrder

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.kinsokuOrder`

#### 描述

首选的 Kinsoku 顺序。

#### 类型

[KinsokuOrderEnum](../scripting-constants#kinsokuorderenum)

---

### ParagraphAttributes.kurikaeshiMojiShori

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.kurikaeshiMojiShori`

#### 描述

如果为 `true`，则启用 KurikaeshiMojiShori。

#### 类型

布尔值。

---

### ParagraphAttributes.leadingType

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.leadingType`

#### 描述

自动行距类型。

#### 类型

[AutoLeadingType](../scripting-constants#autoleadingtype)

---

### ParagraphAttributes.leftIndent

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.leftIndent`

#### 描述

左边距缩进，以点为单位。

#### 类型

数字（双精度）。

---

### ParagraphAttributes.maximumConsecutiveHyphens

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.maximumConsecutiveHyphens`

#### 描述

连续连字符行的最大数量。

#### 类型

数字（长整型）。

---

### ParagraphAttributes.maximumGlyphScaling

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.maximumGlyphScaling`

#### 描述

最大字形缩放，以默认字符宽度的百分比表示。

范围：50.0 到 200.0；在 100.0 时，字符宽度不变。

:::note
仅对两端对齐的段落有效。
:::

#### 类型

数字（双精度）。

---

### ParagraphAttributes.maximumLetterSpacing

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.maximumLetterSpacing`

#### 描述

最大字母间距，以默认字距或跟踪的百分比表示。

范围：-100.0 到 500.0；在 0 时，字母之间不添加空格。在 100.0 时，字母之间添加一个完整的空格宽度。

:::note
仅对两端对齐的段落有效。
:::

#### 类型

数字（双精度）。

---

### ParagraphAttributes.maximumWordSpacing

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.maximumWordSpacing`

#### 描述

最大单词间距，以字体默认空格的百分比表示。

范围：0.0 到 1000.0；在 100.00 时，单词之间不添加空格。

:::note
仅对两端对齐的段落有效。
:::

#### 类型

数字（双精度）。

---

### ParagraphAttributes.minimumAfterHyphen

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.minimumAfterHyphen`

#### 描述

连字符后的最小字符数。

#### 类型

数字（长整型）。

---

### ParagraphAttributes.minimumBeforeHyphen

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.minimumBeforeHyphen`

#### 描述

连字符前的最小字符数。

#### 类型

数字（长整型）。

---

### ParagraphAttributes.minimumGlyphScaling

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.minimumGlyphScaling`

#### 描述

最小字形缩放，以默认字符宽度的百分比表示。

范围：50.0 到 200.0。在 100.0 时，字符宽度不变。

:::note
仅对两端对齐的段落有效。
:::

#### 类型

数字（双精度）。

---

### ParagraphAttributes.minimumHyphenatedWordSize

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.minimumHyphenatedWordSize`

#### 描述

单词可连字符的最小字符数。

#### 类型

数字（长整型）。

---

### ParagraphAttributes.minimumLetterSpacing

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.minimumLetterSpacing`

#### 描述

最小字母间距，以默认字距或跟踪的百分比表示。范围：-100.0 到 500.0；在 0 时，字母之间不添加空格。在 100.0 时，字母之间添加一个完整的空格宽度。

:::note
仅对两端对齐的段落有效。
:::

#### 类型

数字（双精度）。

---

### ParagraphAttributes.minimumWordSpacing

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.minimumWordSpacing`

#### 描述

最小单词间距，以字体默认空格的百分比表示。

范围：0.0 到 1000.0；在 100.00 时，单词之间不添加空格。

:::note
仅对两端对齐的段落有效。
:::

#### 类型

数字（双精度）。

---

### ParagraphAttributes.mojikumi

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.mojikumi`

#### 描述

Mojikumi 名称。

#### 类型

字符串。

---

### ParagraphAttributes.parent

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### ParagraphAttributes.rightIndent

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.rightIndent`

#### 描述

右边距缩进，以点为单位。

#### 类型

数字（双精度）。

---

### ParagraphAttributes.romanHanging

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.romanHanging`

#### 描述

如果为 `true`，则启用罗马悬挂标点符号。

#### 类型

布尔值。

---

### ParagraphAttributes.singleWordJustification

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.singleWordJustification`

#### 描述

单个单词的对齐方式。

#### 类型

[Justification](../scripting-constants#justification)

---

### ParagraphAttributes.spaceAfter

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.spaceAfter`

#### 描述

段落后的间距，以点为单位。

#### 类型

数字（双精度）。

---

### ParagraphAttributes.spaceBefore

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.spaceBefore`

#### 描述

段落前的间距，以点为单位。

#### 类型

数字（双精度）。

---

### ParagraphAttributes.tabStops

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.tabStops`

#### 描述

制表符停止设置。

#### 类型

[TabStopInfo](.././TabStopInfo)

---

### ParagraphAttributes.typename

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 更改段落中的对齐方式

```javascript
// 创建一个新文档，包含 1 个文本框和 3 个段落
// 然后为每个段落设置不同的对齐方式

var docRef = documents.add();
var pathRef = docRef.pathItems.rectangle(600, 200, 200, 400);
var textRef = docRef.textFrames.areaText(pathRef);
textRef.paragraphs.add("左对齐段落。");
textRef.paragraphs.add("居中对齐段落。");
textRef.paragraphs.add("右对齐段落。");
textRef.textRange.characterAttributes.size = 28;

// 使用段落属性对象更改每个段落的对齐方式
var paraAttr_0 = textRef.paragraphs[0].paragraphAttributes;
paraAttr_0.justification = Justification.RIGHT;

var paraAttr_1 = textRef.paragraphs[1].paragraphAttributes;
paraAttr_1.justification = Justification.CENTER;

var paraAttr_2 = textRef.paragraphs[2].paragraphAttributes;
paraAttr_2.justification = Justification.LEFT;
```
