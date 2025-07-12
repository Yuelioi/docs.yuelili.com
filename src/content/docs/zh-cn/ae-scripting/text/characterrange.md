---
title: 字符范围
---
# CharacterRange 对象

`app.project.item(index).layer(index).text.sourceText.value.characterRange(characterIndexStart, [signedCharacterIndexEnd])`

:::note
该方法添加于 After Effects 24.3
:::

#### 描述

CharacterRange 对象是从 [TextDocument 对象](../textdocument) 实例创建的字符范围的访问器。

与 [TextDocument 对象](../textdocument) 不同，后者在返回字符属性时仅查看第一个字符，而这里的字符范围可以跨越零个或多个字符。因此，两个或多个字符 *可能不具有相同的属性值*，这种混合状态将通过返回 `undefined` 来指示。

- [characterStart](#characterrangecharacterstart) 属性是范围的第一个字符索引。
- [characterEnd](#characterrangecharacterend) 属性将报告范围的（最后一个 + 1）字符索引，使得 ([characterEnd](#characterrangecharacterend) - [characterStart](#characterrangecharacterstart)) 表示范围中的字符数。

对于大多数属性来说，有效范围为零是可以接受的——也称为插入点。

当访问时，CharacterRange 对象将检查 [characterStart](#characterrangecharacterstart) 和有效 [characterEnd](#characterrangecharacterend) 是否仍然适用于相关 [TextDocument 对象](../textdocument) 的当前范围。这与创建 CharacterRange 时应用的规则相同，但由于相关 [TextDocument 对象](../textdocument) 的长度可能通过添加或删除字符而发生变化，[characterStart](#characterrangecharacterstart) 和有效 [characterEnd](#characterrangecharacterend) 可能不再有效。在这种情况下，访问时将抛出异常，无论是读取还是写入。如果有效范围不再有效，[isRangeValid](#characterrangeisrangevalid) 属性将返回 `false`。

请注意，如果 [TextDocument 对象](../textdocument) 的长度发生变化，[CharacterRange 对象](#characterrange-object) 的范围可能会再次变为有效。

#### 与 TextDocument 的区别

由于 CharacterRange 是 [TextDocument 对象](../textdocument) 的访问器，因此在处理 CharacterRange 时，TextDocument 的大多数方法和属性都可用。CharacterRange 独有的或表现出独特行为的属性和方法包含在本页中。

以下属性和方法在 CharacterRange 实例中 **不可用**：

| 属性 | 方法 |
| --- | --- |
| `baselineLocs` | `characterRange` |
| `boxText` | `paragraphCharacterIndexesAt` |
| `boxTextPos` | `paragraphRange` |
| `boxTextSize` | |
| `lineOrientation` | |
| `paragraphCount` | |
| `pointText` | |

#### 示例

此示例增加 TextDocument 中第一个字符的字体大小，并将其余字符的字体大小设置为 40。

```javascript
var textDocument = app.project.item(index).layer(index).property("Source Text").value;
var characterRange = textDocument.characterRange(0,1);

characterRange.fontSize = characterRange.fontSize + 5;
textDocument.characterRange(1,-1).fontSize = 40;
```

---

## 属性

### CharacterRange.characterEnd

`CharacterRange.characterEnd`

#### 描述

文本图层范围计算的字符结束值。

如果有效值超出相关 [TextDocument 对象](../textdocument) 的边界，访问时将抛出异常。

#### 类型

无符号整数；只读。

---

### CharacterRange.characterStart

`CharacterRange.characterStart`

#### 描述

文本图层范围计算的字符起始值。

如果有效值超出相关 [TextDocument 对象](../textdocument) 的边界，访问时将抛出异常。

#### 类型

无符号整数；只读。

---

### CharacterRange.fillColor

`CharacterRange.fillColor`

#### 描述

文本图层范围 CharacterRange 属性的填充颜色，作为 `[r, g, b]` 浮点值的数组。

例如，在 8-bpc 项目中，红色值 255 将为 1.0，而在 32-bpc 项目中，超亮的蓝色值可能为 3.2。

设置此值还会将 `applyFill` 设置为 `true`，应用于受影响的字符。

如果此属性在字符范围内具有混合值，则读取时将返回 `undefined`。

:::warning
与 TextDocument API 上的相同属性相比，如果 `applyFill` 不是 `true`，我们 *不会* 在读取时抛出异常。
:::

#### 类型

浮点值的数组 `[r, g, b]`；可读写。

---

### CharacterRange.isRangeValid

`CharacterRange.isRangeValid`

#### 描述

如果当前范围在相关 [TextDocument 对象](../textdocument) 的边界内，则返回 `true`，否则返回 `false`。

#### 类型

布尔值；只读。

---

### CharacterRange.kerning

`CharacterRange.kerning`

#### 描述

文本图层范围字符属性的字距调整选项。

这实际上报告的是手动字距调整值，而不是自动字距调整计算出的字距调整值。

- 如果范围内的 [autoKernType](../textdocument#textdocumentautokerntype) 设置为 `AutoKernType.METRIC_KERN`、`AutoKernType.OPTICAL_KERN` 或混合值，则此属性将返回 `undefined`。
- 如果范围内的 [autoKernType](../textdocument#textdocumentautokerntype) 设置为 `AutoKernType.NO_AUTO_KERN`，并且此属性具有混合值，则读取时将返回 `undefined`。

设置此值还会将 `AutoKernType.NO_AUTO_KERN` 设置为 `true`，应用于受影响的字符。

#### 类型

整数值；可读写。

---

### CharacterRange.strokeColor

`CharacterRange.strokeColor`

#### 描述

文本图层 CharacterRange 描边颜色字符属性，作为 [r, g, b] 浮点值的数组。

例如，在 8-bpc 项目中，红色值 255 将为 1.0，而在 32-bpc 项目中，超亮的蓝色值可能为 3.2。

如果此属性具有混合值，则读取时将返回 `undefined`。

设置此值还会将 [applyStroke](../textdocument#textdocumentapplystroke) 设置为 `true`，应用于受影响的字符。

:::warning
与 TextDocument API 上的相同属性相比，如果 [applyStroke](../textdocument#textdocumentapplystroke) 不是 `true`，我们 *不会* 在读取时抛出异常。
:::

#### 类型

浮点值的数组 [r, g, b]；可读写。

---

### CharacterRange.strokeOverFill

`CharacterRange.strokeOverFill`

#### 描述

文本图层 CharacterRange 描边覆盖填充字符属性。

指示范围内字符的填充和描边的渲染顺序。当为 `true` 时，描边将显示在填充之上。

如果此属性具有混合值，则读取时将返回 `undefined`。

:::warning

此处返回的值表示应用于字符的内容，而不考虑可能的文本图层覆盖。
:::

#### 类型

布尔值；可读写。

---

### CharacterRange.text

`CharacterRange.text`

#### 描述

文本图层范围的文本值。

读取时，将返回与范围跨度相同数量的字符。如果跨度为零（插入点），则返回空字符串。

写入时，范围内的字符将被替换为提供的字符串值。如果为空字符串，则范围内的字符将被有效删除。

要在不删除任何现有字符的情况下插入字符，请调用 [TextDocument.characterRange()](../textdocument#textdocumentcharacterrange)，并将起始值和结束值设置为相同值，以获得插入点范围。

#### 类型

字符串；可读写。

---

## 函数

### CharacterRange.pasteFrom()

`CharacterRange.pasteFrom(characterRange)`

:::note
该方法添加于 After Effects (Beta) 25.0，并且在 Beta 期间可能会发生变化。
:::

#### 描述

使用粘贴语义从 `characterRange` 参数复制到调用者 [CharacterRange 对象](#characterrange-object)。这两个实例可以是相同的，并且跨度可以不同。

将检查两个 [CharacterRange 对象](#characterrange-object) 实例是否有效。

操作的内部步骤如下：

- 删除目标实例中的文本。
- 从源实例粘贴文本。

由于 [CharacterRange 对象](#characterrange-object) 的跨度不会通过此调用进行调整，当源 [CharacterRange 对象](#characterrange-object) 实例的跨度比目标 [CharacterRange 对象](#characterrange-object) 实例短时，目标实例可能会变为无效。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `characterRange` | [CharacterRange 对象](#characterrange-object) | 其文本和样式将被粘贴到调用者[CharacterRange 对象](#characterrange-object) 中的对象。 |

#### 返回

无。

---

### CharacterRange.toString()

`CharacterRange.toString()`

#### 描述

返回一个字符串，其中包含用于创建 CharacterRange 实例的参数，例如 `"CharacterRange(0,-1)"`。

即使 isRangeValid 返回 `false`，也可以安全地调用此方法。

#### 参数

无。

#### 返回

字符串；只读。
