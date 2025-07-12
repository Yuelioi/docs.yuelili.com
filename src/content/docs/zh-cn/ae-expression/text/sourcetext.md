---
title: 源文本
---
# Source Text

`text.sourceText`

这些函数在 AE 17.0 及更高版本中可通过 [Text.sourceText](https://text.md/#textsourcetext) 对象访问。

---

## 属性

### SourceText.isHorizontalText

`text.sourceText.isHorizontalText`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

如果文本图层是水平的，则返回 `true`；如果是垂直的，则返回 `false`。

#### 类型

布尔值

---

### SourceText.isParagraphText

`text.sourceText.isParagraphText`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

如果文本图层是段落文本，则返回 `true`。如果文本图层是点文本，则返回 `false`。

#### 类型

布尔值

---

### SourceText.isPointText

`text.sourceText.isPointText`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

如果文本图层是点文本，则返回 `true`。如果文本图层是段落文本，则返回 `false`。

#### 类型

布尔值

---

### SourceText.isVerticalText

`text.sourceText.isVerticalText`

:::note
该方法添加于 After Effects 25.0.
:::

#### 描述

如果文本图层是垂直的，则返回 `true`；如果是水平的，则返回 `false`。

#### 类型

布尔值

---

### SourceText.style

`text.sourceText.style`

#### 描述

返回给定 `sourceText` 属性的 [文本样式](../style) 对象。

#### 类型

[文本样式](../style) 对象

---

## 函数

### SourceText.createStyle()

`text.sourceText.createStyle()`

#### 描述

用于初始化一个空的 [文本样式](../style) 对象，你可以在其中手动设置特定值。

#### 返回

空的 [文本样式](../style) 对象。

#### 示例

创建一个字体大小为 300 且字体为 Impact 的新样式：

```js
text.sourceText
 .createStyle()
 .setFontSize(300)
 .setFont("Impact");
```

---

### SourceText.getStyleAt()

`text.sourceText.getStyleAt(charIndex[, time])`

#### 描述

此函数返回特定时间某个字符的 [文本样式](../style) 对象。

如果样式是关键帧化的并且随时间变化，请使用第二个 `time` 参数指定获取样式的时间。

:::note
使用 [SourceText.style](#sourcetextstyle) 与使用 `text.sourceText.getStyleAt(0,0)` 相同。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `index` | 数字 | 需要样式的字母或字符的索引 |
| `time` | 数字 | 可选。获取样式的合成时间。默认为 `time`。 |

#### 返回

[文本样式](../style) 对象

#### 示例

获取时间轴开头第一个字符的样式：

```js
text.sourceText.getStyleAt(0,0);
```
