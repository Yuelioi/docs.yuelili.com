---
title: 字符属性
---
# 字符属性

`characterAttributes`

#### 描述

指定文本框架中包含的字符的属性。`CharacterStyle` 对象通过其 `characterAttributes` 属性将这些属性与特定文本范围关联。

:::note
字符属性没有默认值，在明确设置之前是未定义的。
:::

---

## 属性

### CharacterAttributes.akiLeft

`characterAttributes.akiLeft`

#### 描述

在字符左侧添加的字符间距量，以千分之一 em 为单位（该量在全对齐期间不会压缩或扩展）。

#### 类型

Number (double)

---

### CharacterAttributes.akiRight

`characterAttributes.akiRight`

#### 描述

在字符右侧添加的字符间距量，以千分之一 em 为单位（该量在全对齐期间不会压缩或扩展）。

#### 类型

Number (double)

---

### CharacterAttributes.alignment

`characterAttributes.alignment`

#### 描述

字符对齐类型。

#### 类型

[StyleRunAlignmentType](../scripting-constants#stylerunalignmenttype)

---

### CharacterAttributes.alternateGlyphs

`characterAttributes.alternateGlyphs`

#### 描述

替代字形形式。

#### 类型

[AlternateGlyphsForm](../scripting-constants#alternateglyphsform)

---

### CharacterAttributes.autoLeading

`characterAttributes.autoLeading`

#### 描述

如果为 `true`，则应使用自动行距。

#### 类型

Boolean

---

### CharacterAttributes.baselineDirection

`characterAttributes.baselineDirection`

#### 描述

日文文本的基线方向。

#### 类型

[BaselineDirectionType](../scripting-constants#baselinedirectiontype)

---

### CharacterAttributes.baselinePosition

`characterAttributes.baselinePosition`

#### 描述

文本的基线位置。

#### 类型

[FontBaselineOption](../scripting-constants#fontbaselineoption)

---

### CharacterAttributes.baselineShift

`characterAttributes.baselineShift`

#### 描述

文本基线的偏移量，以点为单位。

#### 类型

Number (double)

---

### CharacterAttributes.capitalization

`characterAttributes.capitalization`

#### 描述

文本的大小写。

#### 类型

[FontCapsOption](../scripting-constants#fontcapsoption)

---

### CharacterAttributes.connectionForms

`characterAttributes.connectionForms`

#### 描述

如果为 `true`，则应使用 OpenType® 连接形式。

#### 类型

Boolean

---

### CharacterAttributes.contextualLigature

`characterAttributes.contextualLigature`

#### 描述

如果为 `true`，则应使用上下文连字。

#### 类型

Boolean

---

### CharacterAttributes.discretionaryLigature

`characterAttributes.discretionaryLigature`

#### 描述

如果为 `true`，则应使用自由连字。

#### 类型

Boolean

---

### CharacterAttributes.figureStyle

`characterAttributes.figureStyle`

#### 描述

OpenType 字体中的数字样式。

#### 类型

[FigureStyleType](../scripting-constants#figurestyletype)

---

### CharacterAttributes.fillColor

`characterAttributes.fillColor`

#### 描述

文本填充的颜色。

#### 类型

[Color](.././Color)

---

### CharacterAttributes.fractions

`characterAttributes.fractions`

#### 描述

如果为 `true`，则应使用 OpenType 分数。

#### 类型

Boolean

---

### CharacterAttributes.horizontalScale

`characterAttributes.horizontalScale`

#### 描述

字符水平缩放因子，以百分比表示（100 = 100%）。

#### 类型

Number (double)

---

### CharacterAttributes.italics

`characterAttributes.italics`

#### 描述

如果为 `true`，则日文 OpenType 字体支持斜体。

#### 类型

Boolean

---

### CharacterAttributes.kerningMethod

`characterAttributes.kerningMethod`

#### 描述

使用的自动字距调整方法。

#### 类型

[AutoKernType](../scripting-constants#autokerntype)

---

### CharacterAttributes.language

`characterAttributes.language`

#### 描述

文本的语言。

#### 类型

[LanguageType](../scripting-constants#languagetype)

---

### CharacterAttributes.leading

`characterAttributes.leading`

#### 描述

两行文本之间的间距量，以点为单位。

#### 类型

Number (double)

---

### CharacterAttributes.ligature

`characterAttributes.ligature`

#### 描述

如果为 `true`，则应使用连字。

#### 类型

Boolean

---

### CharacterAttributes.noBreak

`characterAttributes.noBreak`

#### 描述

如果为 `true`，则不允许换行。

#### 类型

Boolean

---

### CharacterAttributes.openTypePosition

`characterAttributes.openTypePosition`

#### 描述

OpenType 基线位置。

#### 类型

[FontOpenTypePositionOption](../scripting-constants#fontopentypepositionoption)

---

### CharacterAttributes.ordinals

`characterAttributes.ordinals`

#### 描述

如果为 `true`，则应使用 OpenType 序数。

#### 类型

Boolean

---

### CharacterAttributes.ornaments

`characterAttributes.ornaments`

#### 描述

如果为 `true`，则应使用 OpenType 装饰符。

#### 类型

Boolean

---

### CharacterAttributes.overprintFill

`characterAttributes.overprintFill`

#### 描述

如果为 `true`，则文本的填充应被叠印。

#### 类型

Boolean

---

### CharacterAttributes.overprintStroke

`characterAttributes.overprintStroke`

#### 描述

如果为 `true`，则文本的描边应被叠印。

#### 类型

Boolean

---

### CharacterAttributes.parent

`characterAttributes.parent`

#### 描述

对象的容器。

#### 类型

Object; 只读。

---

### CharacterAttributes.proportionalMetrics

`characterAttributes.proportionalMetrics`

#### 描述

如果为 `true`，则日文 OpenType 字体支持比例字形。

#### 类型

Boolean

---

### CharacterAttributes.rotation

`characterAttributes.rotation`

#### 描述

字符旋转角度，以度为单位。

#### 类型

Number (double)

---

### CharacterAttributes.size

`characterAttributes.size`

#### 描述

字体大小，以点为单位。

#### 类型

Number (double)

---

### CharacterAttributes.strikeThrough

`characterAttributes.strikeThrough`

#### 描述

如果为 `true`，则字符使用删除线样式。

#### 类型

Boolean

---

### CharacterAttributes.strokeColor

`characterAttributes.strokeColor`

#### 描述

文本描边的颜色。

#### 类型

[Color](.././Color)

---

### CharacterAttributes.strokeWeight

`characterAttributes.strokeWeight`

#### 描述

描边的线宽。

#### 类型

Number (double)

---

### CharacterAttributes.stylisticAlternates

`characterAttributes.stylisticAlternates`

#### 描述

如果为 `true`，则应使用 OpenType 风格替代。

#### 类型

Boolean

---

### CharacterAttributes.swash

`characterAttributes.swash`

#### 描述

如果为 `true`，则应使用 OpenType 花体字。

#### 类型

Boolean

---

### CharacterAttributes.tateChuYokoHorizontal

`characterAttributes.tateChuYokoHorizontal`

#### 描述

Tate-Chu-Yoko 水平调整，以点为单位。

#### 类型

Number (long)

---

### CharacterAttributes.tateChuYokoVertical

`characterAttributes.tateChuYokoVertical`

#### 描述

Tate-Chu-Yoko 垂直调整，以点为单位。

#### 类型

Number (long)

---

### CharacterAttributes.textFont

`characterAttributes.textFont`

#### 描述

文本字体。

#### 类型

[TextFont](.././TextFont)

---

### CharacterAttributes.titling

`characterAttributes.titling`

#### 描述

如果为 `true`，则应使用 OpenType 标题替代。

#### 类型

Boolean

---

### CharacterAttributes.tracking

`characterAttributes.tracking`

#### 描述

字距调整或范围字距调整量，以千分之一 em 为单位。

#### 类型

Number (long)

---

### CharacterAttributes.Tsume

`characterAttributes.Tsume`

#### 描述

日文字符周围空间减少的百分比。

#### 类型

Number (double)

---

### CharacterAttributes.typename

`characterAttributes.typename`

#### 描述

对象的类名。

#### 类型

String; 只读。

---

### CharacterAttributes.underline

`characterAttributes.underline`

#### 描述

如果为 `true`，则字符带有下划线。

#### 类型

Boolean

---

### CharacterAttributes.verticalScale

`characterAttributes.verticalScale`

#### 描述

字符垂直缩放因子，以百分比表示（= 100%）。

#### 类型

Number (double)

---

### CharacterAttributes.wariChuCharactersAfterBreak

`characterAttributes.wariChuCharactersAfterBreak`

#### 描述

指定 Wari-Chu 文本（日文文本中的插入注释）中的字符如何分成两行或更多行。

#### 类型

Number (long)

---

### CharacterAttributes.wariChuCharactersBeforeBreak

`characterAttributes.wariChuCharactersBeforeBreak`

#### 描述

指定 Wari-Chu 文本（日文文本中的插入注释）中的字符如何分成两行或更多行。

#### 类型

Number (long)

---

### CharacterAttributes.waiChuEnabled

`characterAttributes.waiChuEnabled`

#### 描述

如果为 `true`，则启用 Wari-Chu。

#### 类型

Boolean

---

### CharacterAttributes.wariChuJustification

`characterAttributes.wariChuJustification`

#### 描述

Wari-Chu 对齐方式。

#### 类型

[WariChuJustificationType](../scripting-constants#warichujustificationtype)

---

### CharacterAttributes.wariChuLineGap

`characterAttributes.wariChuLineGap`

#### 描述

Wari-Chu 行间距。

#### 类型

Number (long)

---

### CharacterAttributes.wariChuLines

`characterAttributes.wariChuLines`

#### 描述

Wari-Chu（多行文本适应单行空间）的行数。

#### 类型

Number (long)

---

### CharacterAttributes.wariChuScale

`characterAttributes.wariChuScale`

#### 描述

Wari-Chu 缩放比例。

#### 类型

Number (double)

---

## 示例

### 设置字符属性

```javascript
// 创建一个新文档，添加一个简单的文本项
// 然后逐步增加每个字符的水平和垂直缩放属性

var docRef = documents.add();
var textRef = docRef.textFrames.add();
textRef.contents = "I Love Scripting!";
textRef.top = 400;
textRef.left = 100;

// 逐步增加每个字符的缩放比例
var charCount = textRef.textRange.characters.length;
var size = 100;
for (var i = 0; i < charCount; i++, size *= 1.2) {
 textRef.textRange.characters[i].characterAttributes.horizontalScale = size;
 textRef.textRange.characters[i].characterAttributes.verticalScale = size;
}
```
