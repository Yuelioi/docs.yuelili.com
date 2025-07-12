---
title: 样式
---
# Text Style

`text.sourceText.style`

在 AE 17.0 及更高版本中，大多数这些函数都可以通过 [SourceText.style](../sourcetext#sourcetextstyle) 对象访问。如注明，AE 25.0 中添加了额外的方法。25.0 中还添加了控制每个字符样式的功能。使用第二个和第三个参数（当可用时）来控制每个字符的样式。

:::note
当使用每个字符样式时，换行符和空格也被视为字符，并且在计算字符索引时必须考虑（或跳过，如果需要）。
:::

有关处理文本样式的更多信息，请参阅：

* [在 helpx.adobe.com 上使用表达式编辑和访问文本属性](https://helpx.adobe.com/after-effects/using/expressions-text-properties.html)
* [After Effects 2020: 表达你自己（和你的文本）在 blog.adobe.com](https://blog.adobe.com/en/publish/2020/01/24/after-effects-2020-express-yourself-and-your-text)
* [After Effects 2025: 每个字符的文本样式表达式在 youtube.com](https://www.youtube.com/watch?v=yG8UbiKKeYw)

### 链式调用

所有 [文本样式]() 的方法都会返回一个 [文本样式]() 对象，因此你可以链式调用它们，例如：

```js
text.sourceText.style.setFont("Times New Roman").setFontSize(42).setText("New Text");
```

:::tip

:::

---

## 属性

### TextStyle.applyFill

`text.sourceText.style.applyFill`

#### 描述

返回是否启用了填充颜色。

#### 类型

布尔值

---

### TextStyle.applyStroke

`text.sourceText.style.applyStroke`

#### 描述

返回是否启用了描边。

#### 类型

布尔值

---

### TextStyle.baselineDirection

`text.sourceText.style.baselineDirection`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层的基线方向。

#### 类型

预定义字符串。其中之一：

* `"default"`
* `"rotated"`
* `"tate-chuu-yoko"`

---

### TextStyle.baselineOption

`text.sourceText.style.baselineOption`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层的基线选项类型。

#### 类型

预定义字符串。其中之一：

* `"default"`
* `"subscript"`
* `"superscript"`

---

### TextStyle.baselineShift

`text.sourceText.style.baselineShift`

#### 描述

返回文本图层的基线偏移值。

#### 类型

数字

---

### TextStyle.digitSet

`text.sourceText.style.digitSet`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层的数字集。

#### 类型

预定义字符串。其中之一：

* `"default"`
* `"hindidigits"`

---

### TextStyle.direction

`text.sourceText.style.direction`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层第一段的方向值。

#### 类型

预定义字符串。其中之一：

* `"left-to-right"`
* `"right-to-left"`

---

### TextStyle.fillColor

`text.sourceText.style.fillColor`

#### 描述

返回文本填充颜色的 RGB 值，范围为 0 - 1.0。

#### 类型

数字数组。

---

### TextStyle.firstLineIndent

`text.sourceText.style.firstLineIndent`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层第一段第一行的首行缩进值。

#### 类型

数字

---

### TextStyle.font

`text.sourceText.style.font`

#### 描述

返回文本图层的字体名称。

#### 类型

字符串

---

### TextStyle.fontSize

`text.sourceText.style.fontSize`

#### 描述

返回文本图层的字体大小值。

#### 类型

数字

---

### TextStyle.horizontalScaling

`text.sourceText.style.horizontalScaling`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层的水平缩放。

#### 类型

数字

---

### TextStyle.isAllCaps

`text.sourceText.style.isAllCaps`

#### 描述

返回是否启用了全部大写。

#### 类型

布尔值

---

### TextStyle.isAutoLeading

`text.sourceText.style.isAutoLeading`

#### 描述

返回是否启用了自动行距。

#### 类型

布尔值

---

### TextStyle.isEveryLineComposer

`text.sourceText.style.isEveryLineComposer`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

如果文本图层第一段设置了每行排版器，则返回 `true`，如果设置了单行排版器，则返回 `false`。

#### 类型

布尔值

---

### TextStyle.isFauxBold

`text.sourceText.style.isFauxBold`

#### 描述

返回是否启用了伪粗体。

#### 类型

布尔值

---

### TextStyle.isFauxItalic

`text.sourceText.style.isFauxItalic`

#### 描述

返回是否启用了伪斜体。

#### 类型

布尔值

---

### TextStyle.isHangingRoman

`text.sourceText.style.isHangingRoman`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

是否对整个文本图层设置了悬挂罗马标点符号。

#### 类型

布尔值

---

### TextStyle.isLigature

`text.sourceText.style.isLigature`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回是否启用了连字。

#### 类型

布尔值

---

### TextStyle.isSmallCaps

`text.sourceText.style.isSmallCaps`

#### 描述

返回是否启用了小型大写字母。

#### 类型

布尔值

---

### TextStyle.justification

`text.sourceText.style.justification`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层第一段的对齐方式值。

:::warning
如果文本图层的 [TextStyle.direction](#textstyledirection) 设置为从右到左，对齐/两端对齐的左右值将反转。你可以使用属性或段落面板，或通过 [TextStyle.setDirection()](#textstylesetdirection) 来控制这一点。
:::

#### 类型

预定义字符串。其中之一：

* `"alignCenter"`
* `"alignLeft"`
* `"alignRight"`
* `"justifyFull"`
* `"justifyLastCenter"`
* `"justifyLastLeft"`
* `"justifyLastRight"`

---

### TextStyle.kerning

`text.sourceText.style.kerning`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层的字距调整值。

要使此值返回非零值，[KerningType]() 必须未设置。

#### 类型

数字。只读。

---

### TextStyle.kerningType

`text.sourceText.style.kerningType`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层的字距调整类型。

#### 类型

只读。预定义字符串。其中之一：

* `"manual"`
* `"metrics"`
* `"optical"`

---

### TextStyle.leading

`text.sourceText.style.leading`

#### 描述

返回文本图层的行距值。

#### 类型

数字

---

### TextStyle.leadingType

`text.sourceText.style.leadingType`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层第一段的行距类型值。

#### 类型

预定义字符串。其中之一：

* `"bottom-to-bottom"`
* `"top-to-top"`

---

### TextStyle.leftMargin

`text.sourceText.style.leftMargin`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层第一段的左边距值。

#### 类型

数字

---

### TextStyle.lineJoin

`text.sourceText.style.lineJoin`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层的线连接类型。

#### 类型

预定义字符串。其中之一：

* `"bevel"`
* `"miter"`
* `"round"`

---

### TextStyle.rightMargin

`text.sourceText.style.rightMargin`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层第一段的右边距值。

#### 类型

数字

---

### TextStyle.spaceAfter

`text.sourceText.style.spaceAfter`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层第一段后的间距值。

#### 类型

数字

---

### TextStyle.spaceBefore

`text.sourceText.style.spaceBefore`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层第一段前的间距值。

#### 类型

数字

---

### TextStyle.strokeColor

`text.sourceText.style.strokeColor`

#### 描述

返回描边颜色的 RGB 值，范围为 0 - 1.0。

#### 类型

数字数组

---

### TextStyle.strokeWidth

`text.sourceText.style.strokeWidth`

#### 描述

返回文本图层的描边宽度值。

#### 类型

数字

---

### TextStyle.tracking

`text.sourceText.style.tracking`

#### 描述

返回文本图层的字间距值。

#### 类型

数字

---

### TextStyle.tsume

`text.sourceText.style.tsume`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层的 Tsume 值。

#### 类型

数字（介于 `0` 和 `1` 之间）。

---

### TextStyle.verticalScaling

`text.sourceText.style.verticalScaling`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

返回文本图层的垂直缩放。

#### 类型

数字

---

## 函数

### TextStyle.replaceText()

`text.sourceText.style.replaceText(value[, startIndex, numOfCharacters])`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

当你想定义（或继承）一个 [文本样式]() 时使用，同时设置文本子字符串的内容。

#### 参数

| 参数 | 类型 | 描述 | |
| --- | --- | --- | --- |
| `value` | 字符串 | 必填。 | 要设置的文本。 |
| `startIndex` | 数字 | 可选。 | 要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。 | 要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

#### 示例

要创建一个自定义样式，然后在表达式中设置文本的子字符串：

```js
// 假设源文本的值为 "Old Text"
const referenceText = thisComp.layer("Source Layer Name").text.sourceText;
const style = referenceText.getStyleAt(0,0);

// 这将把文本从 "Old Text" 改为 "NewText"，因为前 4 个字符被替换了。
style.replaceText("New", 0, 4);
```

---

### TextStyle.setAllCaps()

`text.sourceText.style.setAllCaps(value[, startIndex, numOfCharacters])`

#### 描述

用于设置全部大写的状态。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 布尔值 | 必填。是否启用或禁用全部大写。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setApplyFill()

`text.sourceText.style.setApplyFill(value[, startIndex, numOfCharacters])`

#### 描述

用于设置是否启用填充颜色。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 布尔值 | 必填。是否启用或禁用填充。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setApplyStroke()

`text.sourceText.style.setApplyStroke(value[, startIndex, numOfCharacters])`

#### 描述

用于设置是否启用描边。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 布尔值 | 必填。是否启用或禁用描边。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setAutoLeading()

`text.sourceText.style.setAutoLeading(value[, startIndex, numOfCharacters])`

#### 描述

用于设置自动行距的状态。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 布尔值 | 必填。是否启用或禁用自动行距。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setBaselineDirection()

`text.sourceText.style.setBaselineDirection(value[, startIndex, numOfCharacters])`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

用于设置基线方向。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 预定义字符串，如[BaselineDirection]() 中所定义 | 要设置的基线方向值。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setBaselineShift()

`text.sourceText.style.setBaselineShift(value[, startIndex, numOfCharacters])`

#### 描述

用于将基线偏移设置为指定值。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字 | 必填。要设置的基线偏移值。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setBaselineOption()

`text.sourceText.style.setBaselineOption(value[, startIndex, numOfCharacters])`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

用于设置基线选项。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 预定义字符串，如[BaselineOption]() 中所定义 | 必填。要设置的基线选项值。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setDigitSet()

`text.sourceText.style.setDigitSet(value[, startIndex, numOfCharacters])`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

用于设置数字集。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 预定义字符串，如[DigitSet]() 中所定义 | 必填。要使用的数字集值。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setDirection()

`text.sourceText.style.setDirection(value)`

:::note
该方法添加于 After Effects 25.0.
:::

:::warning
如果同时使用 [TextStyle.setText()](#textstylesettext)，则必须在调用此方法之前调用它。
:::

#### 描述

用于设置整个文本图层的方向，可以是 `left-to-right` 或 `right-to-left`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 预定义字符串，如[Direction]() 中所定义 | 所需的方向值。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setEveryLineComposer()

`text.sourceText.style.setEveryLineComposer(value)`

:::note
该方法添加于 After Effects 25.0.
:::

:::warning
如果同时使用 [TextStyle.setText()](#textstylesettext)，则必须在调用此方法之前调用它。
:::

#### 描述

用于启用或禁用整个文本图层的每行排版器。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 布尔值 | 是否启用或禁用每行排版器。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setFauxBold()

`text.sourceText.style.setFauxBold(value[, startIndex, numOfCharacters])`

#### 描述

用于设置伪粗体状态。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 布尔值 | 必填。是否启用或禁用伪粗体。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setFauxItalic()

`text.sourceText.style.setFauxItalic(value[, startIndex, numOfCharacters])`

#### 描述

用于设置伪斜体状态。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 布尔值 | 必填。是否启用或禁用伪斜体。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setFillColor()

`text.sourceText.style.setFillColor(value[, startIndex, numOfCharacters])`

#### 描述

用于设置文本填充颜色。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

请记住，[TextStyle.applyFill]() 必须为 `true` 才能显示填充颜色。你可以通过在属性或字符面板中启用填充，或使用 [TextStyle.setApplyFill()]() 来将其设置为 `true`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字数组 | 必填。`[R, G, B]`，每个值介于 `0.0` 和 `1.0` 之间。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setFirstLineIndent()

`text.sourceText.style.setFirstLineIndent(value)`

:::note
该方法添加于 After Effects 25.0.
:::

:::warning
如果同时使用 [TextStyle.setText()](#textstylesettext)，则必须在调用此方法之前调用它。
:::

#### 描述

用于将文本图层的首行缩进设置为指定值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字 | 所需的首行缩进值。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setFont()

`text.sourceText.style.setFont(value[, startIndex, numOfCharacters])`

#### 描述

用于将字体设置为指定值。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 字符串 | 必填。要设置的字体。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setFontSize()

`text.sourceText.style.setFontSize(value[, startIndex, numOfCharacters])`

#### 描述

用于将字体大小设置为指定值。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字 | 必填。要设置的字体大小。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setHangingRoman()

`text.sourceText.style.setHangingRoman(value)`

:::note
该方法添加于 After Effects 25.0.
:::

:::warning
如果同时使用 [TextStyle.setText()](#textstylesettext)，则必须在调用此方法之前调用它。
:::

#### 描述

用于启用或禁用整个文本图层的悬挂罗马标点符号。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 布尔值 | 是否启用或禁用悬挂罗马标点符号。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setHorizontalScaling()

`text.sourceText.style.setHorizontalScaling(value[, startIndex, numOfCharacters])`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

用于将水平缩放设置为指定值。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字 | 必填。要设置的水平缩放值。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setJustification()

`text.sourceText.style.setJustification(value)`

:::note
该方法添加于 After Effects 25.0.
:::

:::warning
如果同时使用 [TextStyle.setText()](#textstylesettext)，则必须在调用此方法之前调用它。
:::

#### 描述

用于设置整个文本图层的对齐方式。

:::warning
如果文本图层的 [TextStyle.direction](#textstyledirection) 设置为从右到左，对齐/两端对齐的左右值将反转。你可以使用属性或段落面板，或通过 [TextStyle.setDirection()](#textstylesetdirection) 来控制这一点。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 预定义字符串，如[Justification]() 中所定义 | 所需的对齐方式值。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setKerning()

`text.sourceText.style.setKerning(value, characterIndex)`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

用于在指定字符索引处设置字距调整值。

只有当字符索引的 [KerningType]() 未设置时，才会影响文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字 | 必填。要设置的字距调整值。 |
| `characterIndex` | 数字 | 必填。要应用的子字符串的字符索引。 |

#### 返回

无

---

### TextStyle.setKerningType()

`text.sourceText.style.setKerningType(value[, startIndex, numOfCharacters])`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

用于设置字距调整类型。

除非指定了起始索引和字符数，否则该值将应用于整个文本图层。

:::note
另外，请注意，自动字距调整将优先于手动字距调整。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | `metrics` 或 `optical`，如 [KerningType]() 中所定义。 | 必填。要设置的字距调整类型值。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要更改的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

无

---

### TextStyle.setLeading()

`text.sourceText.style.setLeading(value[, startIndex, numOfCharacters])`

#### 描述

用于将行距设置为指定值。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

请记住，[TextStyle.isAutoLeading]() 必须为 `false`，`setLeading()` 才能产生任何可见效果。你可以通过在属性或字符面板中将行距设置为非自动值，或通过 [TextStyle.setAutoLeading()]() 来设置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字 | 必填。要设置的行距值。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setLeadingType()

`text.sourceText.style.setLeadingType(value)`

:::note
该方法添加于 After Effects 25.0.
:::

:::warning
如果同时使用 [TextStyle.setText()](#textstylesettext)，则必须在调用此方法之前调用它。
:::

#### 描述

用于设置整个文本图层的行距类型。

#### 参数

| 参数 | 类型 | 描述 | |
| --- | --- | --- | - |
| `value` | 预定义字符串，如[LeadingType]() 中所定义 | 所需的行距类型值。 | |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setLeftMargin()

`text.sourceText.style.setLeftMargin(value)`

:::note
该方法添加于 After Effects 25.0.
:::

:::warning
如果同时使用 [TextStyle.setText()](#textstylesettext)，则必须在调用此方法之前调用它。
:::

#### 描述

用于将文本图层的左边距设置为指定值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字 | 所需的左边距值。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setLigature()

`text.sourceText.style.setLigature(value[, startIndex, numOfCharacters])`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

用于启用或禁用连字。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 布尔值 | 必填。是否启用或禁用连字。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setLineJoin()

`text.sourceText.style.setLineJoin(value[, startIndex, numOfCharacters])`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

用于将线连接类型设置为指定值。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 预定义字符串，如[LineJoin]() 中所定义 | 必填。要设置的线连接类型值。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setRightMargin()

`text.sourceText.style.setRightMargin(value)`

:::note
该方法添加于 After Effects 25.0.
:::

:::warning
如果同时使用 [TextStyle.setText()](#textstylesettext)，则必须在调用此方法之前调用它。
:::

#### 描述

用于将文本图层的右边距设置为指定值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字 | 所需的右边距值。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setSmallCaps()

`text.sourceText.style.setSmallCaps(value[, startIndex, numOfCharacters])`

#### 描述

用于设置小型大写字母的状态。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 布尔值 | 必填。是否启用或禁用小型大写字母。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setSpaceAfter()

`text.sourceText.style.setSpaceAfter(value)`

:::note
该方法添加于 After Effects 25.0.
:::

:::warning
如果同时使用 [TextStyle.setText()](#textstylesettext)，则必须在调用此方法之前调用它。
:::

#### 描述

用于将文本图层的段后间距属性设置为指定值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字 | 所需的段后间距属性值。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setSpaceBefore()

`text.sourceText.style.setSpaceBefore(value)`

:::note
该方法添加于 After Effects 25.0.
:::

:::warning
如果同时使用 [TextStyle.setText()](#textstylesettext)，则必须在调用此方法之前调用它。
:::

#### 描述

用于将文本图层的段前间距属性设置为指定值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字 | 所需的段前间距属性值。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setStrokeColor()

`text.sourceText.style.setStrokeColor(value[, startIndex, numOfCharacters])`

#### 描述

用于设置描边颜色。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

请记住，[TextStyle.applyStroke]() 必须为 `true`，并且 [TextStyle.strokeWidth]() 必须大于零才能显示任何描边颜色。你可以通过在属性或字符面板中启用描边或增加描边宽度，或分别使用 [TextStyle.setApplyStroke()]() 和 [TextStyle.setStrokeWidth()]() 来设置这些值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字数组 | 必填。`[R, G, B]`，每个值介于 `0.0` 和 `1.0` 之间。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setStrokeWidth()

`text.sourceText.style.setStrokeWidth(value[, startIndex, numOfCharacters])`

#### 描述

用于将描边宽度设置为指定值。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

请记住，[TextStyle.applyStroke]() 必须为 `true` 才能看到描边宽度的任何变化。你可以通过在属性或字符面板中启用描边，或通过 [TextStyle.setApplyStroke()]() 来设置此值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字 | 必填。要设置的描边宽度值。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setText()

`text.sourceText.style.setText(value)`

#### 描述

当你想定义（或继承）一个 [文本样式]() 时使用，同时单独设置文本内容。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 字符串 | 要设置的文本。 |

#### 返回

一个 [TextStyle 对象]()。

#### 示例

要从另一个图层继承样式和内容：

```js
const referenceText = thisComp.layer("Source Layer Name").text.sourceText;

const style = referenceText.getStyleAt(0, 0);
style.setText(referenceText);
```

要创建一个自定义样式，然后在表达式中设置文本：

```js
text.sourceText
 .createStyle()
 .setFontSize(300)
 .setFont("Impact")
 .setText("Hello world!");
```

---

### TextStyle.setTracking()

`text.sourceText.style.setTracking(value[, startIndex, numOfCharacters])`

#### 描述

用于将字间距设置为指定值。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字 | 必填。要设置的字间距值。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。

---

### TextStyle.setTsume()

`text.sourceText.style.setTsume(value[, startIndex, numOfCharacters])`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

用于将 Tsume 设置为指定值。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字 | 必填。要设置的 Tsume 值，介于 `0` 和 `100` 之间。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

无

---

### TextStyle.setVerticalScaling()

`text.sourceText.style.setVerticalScaling(value[, startIndex, numOfCharacters])`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

用于将垂直缩放设置为指定值。

除非指定了 `startIndex` 和 `numOfCharacters`，否则该值将应用于整个文本图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | 数字 | 必填。要设置的垂直缩放值。 |
| `startIndex` | 数字 | 可选。要替换的子字符串的起始索引。默认为 `0`。 |
| `numOfCharacters` | 数字 | 可选。要替换的子字符串的长度。默认为字符串末尾的字符数。 |

#### 返回

一个 [TextStyle 对象]()。
