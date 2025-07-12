---
title: paragraphrange
---
# ParagraphRange 对象

`app.project.item(index).layer(index).text.sourceText.value.paragraphRange(paragraphIndexStart, [signedParagraphIndexEnd])`

:::note
该方法添加于 After Effects 24.3
:::

#### 描述

ParagraphRange 对象是从 [TextDocument 对象](../textdocument) 实例创建的段落范围的访问器。

- [characterStart](#paragraphrangecharacterstart) 属性将报告范围的第一个字符索引。
- [characterEnd](#paragraphrangecharacterend) 属性将报告范围的（最后一个 + 1）字符索引，因此 ([characterEnd](#paragraphrangecharacterend) - [characterStart](#paragraphrangecharacterstart)) 表示范围内的字符数。
- 这两个属性唯一相等的情况是在 [TextDocument 对象](../textdocument) 的最后一个空段落上。

当访问时，ParagraphRange 对象将检查有效 [characterStart](#paragraphrangecharacterstart) 和有效 [characterEnd](#paragraphrangecharacterend) 是否仍然适用于相关 [TextDocument 对象](../textdocument) 的当前范围。这与创建 ParagraphRange 时应用的规则相同，但由于相关 [TextDocument 对象](../textdocument) 的长度可能通过添加或删除字符而改变，因此有效 [characterStart](#paragraphrangecharacterstart) 和有效 [characterEnd](#paragraphrangecharacterend) 可能不再有效。在这种情况下，访问时将抛出异常，无论是读取还是写入。如果有效范围不再有效，[isRangeValid](#paragraphrangeisrangevalid) 属性将返回 `false`。

请注意，如果 [TextDocument 对象](../textdocument) 的长度发生变化，字符范围可能会再次变为有效。

为了方便起见，可以调用 [ParagraphRange.characterRange()](#paragraphrangecharacterrange) 函数，该函数将返回从 [characterStart](#paragraphrangecharacterstart) 和 [characterEnd](#paragraphrangecharacterend) 初始化的 [CharacterRange 对象](../characterrange) 实例。
此实例与它来自的 ParagraphRange 实例独立，因此 ParagraphRange 限制的后续更改不会传递到 [CharacterRange 对象](../characterrange) 实例。

出于性能原因，当访问多个属性时，建议检索一次 [CharacterRange 对象](../characterrange) 并重复使用它，而不是每次都创建一个新的实例。

#### 示例

以下示例将 TextDocument 中第一段的字体大小增加，并将其余段落的字体大小设置为 40。

```javascript
var textDocument = app.project.item(index).layer(index).property("Source Text").value;

var paragraphRange0 = textDocument.paragraphRange(0,1);
var characterRange0 = paragraphRange0.characterRange();
characterRange0.fontSize = characterRange0.fontSize + 5;

textDocument.paragraphRange(1,-1).characterRange().fontSize = 40;
```

---

## 属性

### ParagraphRange.characterEnd

`ParagraphRange.characterEnd`

#### 描述

文本图层范围计算的字符结束值。

如果有效值超出相关 [TextDocument 对象](../textdocument) 的范围，访问时将抛出异常。

#### 类型

无符号整数；只读。

---

### ParagraphRange.characterStart

`ParagraphRange.characterStart`

#### 描述

文本图层范围计算的字符起始值。

如果有效值超出相关 [TextDocument 对象](../textdocument) 的范围，访问时将抛出异常。

#### 类型

无符号整数；只读。

---

### ParagraphRange.isRangeValid

`ParagraphRange.isRangeValid`

#### 描述

如果当前范围在相关 [TextDocument 对象](../textdocument) 的范围内，则返回 `true`，否则返回 `false`。

#### 类型

布尔值；只读。

---

## 函数

### ParagraphRange.characterRange()

`ParagraphRange.characterRange()`

#### 描述

返回从 [characterStart](#paragraphrangecharacterstart) 和 [characterEnd](#paragraphrangecharacterend) 初始化的 [CharacterRange 对象](../characterrange)。

如果 [isRangeValid](#paragraphrangeisrangevalid) 返回 `false`，将抛出异常。

返回的实例一旦创建，就独立于它来自的 ParagraphRange 的后续更改。

#### 参数

无。

#### 返回

[CharacterRange 对象](../characterrange)；

---

### ParagraphRange.toString()

`ParagraphRange.toString()`

#### 描述

返回一个字符串，其中包含用于创建 ParagraphRange 实例的参数，例如 `"ParagraphRange(0,-1)"`。

即使 [isRangeValid](#paragraphrangeisrangevalid) 返回 `false`，也可以安全地调用此方法。

#### 参数

无。

#### 返回

字符串；
