---
title: composedlinerange
---
# ComposedLineRange 对象

`app.project.item(index).layer(index).text.sourceText.value.composedLineRange(composedLineIndexStart, [signedComposedLineIndexEnd])`

:::note
该方法添加于 After Effects 24.3
:::

#### 描述

ComposedLineRange 对象是一个访问器，用于访问从其创建的 [TextDocument 对象](../textdocument) 实例的组成行范围。

组成行在 [TextDocument 对象](../textdocument) 创建时初始化，并且在 [TextDocument 对象](../textdocument) 更改时保持不变。
需要注意的是，当对 [TextDocument 对象](../textdocument) 进行更改时，实例不会重新组合 - 只有在实例被应用回 [TextLayer 对象](../../layer/textlayer) 时才会发生。
因此，如果你删除了 [TextDocument 对象](../textdocument) 实例中的所有文本，组成行的数量将保持不变。

- [characterStart](#composedlinerangecharacterstart) 属性将报告范围的第一个字符索引。
- [characterEnd](#composedlinerangecharacterend) 属性将报告范围的（最后一个 + 1）字符索引，使得 ([characterEnd](#composedlinerangecharacterend) - [characterStart](#composedlinerangecharacterstart)) 表示范围内的字符数。
- 组成行始终具有一定的长度。

当访问时，ComposedLineRange 对象将检查范围的有效 [characterStart](#composedlinerangecharacterstart) 和有效 [characterEnd](#composedlinerangecharacterend) 是否仍然适用于相关 [TextDocument 对象](../textdocument) 的当前范围。这与创建 ComposedLineRange 时应用的规则相同，但由于相关 [TextDocument 对象](../textdocument) 的长度可以通过添加或删除字符来更改，因此有效 [characterStart](#composedlinerangecharacterstart) 和有效 [characterEnd](#composedlinerangecharacterend) 可能不再有效。在这种情况下，访问时将抛出异常，无论是读取还是写入。如果有效范围不再有效，属性 [isRangeValid](#composedlinerangeisrangevalid) 将返回 `false`。

请注意，如果 [TextDocument 对象](../textdocument) 的长度发生变化，字符范围可能会再次变为有效。

为了方便起见，可以调用函数 [ComposedLineRange.characterRange()](#composedlinerangecharacterrange)，它将返回一个从 [characterStart](#composedlinerangecharacterstart) 和 [characterEnd](#composedlinerangecharacterend) 初始化的 [CharacterRange 对象](../characterrange) 实例。
此实例与它来自的 ComposedLineRange 实例无关，因此对 ComposedLineRange 限制的后续更改不会传达给 [CharacterRange 对象](../characterrange) 实例。

出于性能原因，当访问多个属性时，建议检索一次 [CharacterRange 对象](../characterrange) 并重复使用，而不是每次都创建一个新的。

#### 示例

这将更改 TextDocument 中第一个组成行的填充颜色为红色，并将其余行的颜色设置为蓝色。

```javascript
var textDocument = app.project.item(index).layer(index).property("Source Text").value;

var composedLineRange0 = textDocument.composedLineRange(0,1);
var characterRange0 = composedLineRange0.characterRange();
characterRange0.fillColor = [1.0, 0, 0];

textDocument.composedLineRange(1,-1).characterRange().fillColor = [0, 0, 1.0];
```

---

## 属性

### ComposedLineRange.characterEnd

`ComposedLineRange.characterEnd`

#### 描述

文本图层范围计算的字符结束值。

如果有效值超出相关 [TextDocument 对象](../textdocument) 的边界，则在访问时抛出异常。

#### 类型

无符号整数；只读。

---

### ComposedLineRange.characterStart

`ComposedLineRange.characterStart`

#### 描述

文本图层范围计算的字符起始值。

如果有效值超出相关 [TextDocument 对象](../textdocument) 的边界，则在访问时抛出异常。

#### 类型

无符号整数；只读。

---

### ComposedLineRange.isRangeValid

`ComposedLineRange.isRangeValid`

#### 描述

如果当前范围在相关 [TextDocument 对象](../textdocument) 的边界内，则返回 `true`，否则返回 `false`。

#### 类型

布尔值；只读。

---

## 函数

### ComposedLineRange.characterRange()

`ComposedLineRange.characterRange()`

#### 描述

返回一个从 [characterStart](#composedlinerangecharacterstart) 和 [characterEnd](#composedlinerangecharacterend) 初始化的 [CharacterRange 对象](../characterrange)。

如果 isRangeValid 返回 `false`，将抛出异常。

返回的实例一旦创建，就与其来自的 ComposedLineRange 的后续更改无关。

#### 参数

无。

#### 返回

[CharacterRange 对象](../characterrange)；

---

### ComposedLineRange.toString()

`ComposedLineRange.toString()`

#### 描述

返回一个包含用于创建 ComposedLineRange 实例的参数字符串，例如 `"ComposedLineRange(0,-1)"`。

在 isRangeValid 返回 `false` 的实例上可以安全调用此方法。

#### 参数

无。

#### 返回

字符串；
