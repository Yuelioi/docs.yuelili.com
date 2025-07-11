---
title: 测量单位
---
# 测量单位

Illustrator 使用点（points）作为几乎所有距离的测量单位。1 英寸等于 72 点。例外情况是像 `kerning`（字距调整）、`tracking`（字间距）和 `aki` 属性（用于日文文本排版）等属性的值，它们使用 em 单位。（参见 [Em 空间单位](#em-space-units)）

无论当前标尺单位是什么，Illustrator 在与脚本通信时都使用点作为单位。如果你的脚本依赖于添加、减去、乘以或除以非点单位的特定测量值，则必须执行任何必要的单位转换，以将你的测量值表示为点。例如，要使用英寸作为坐标或测量单位，你必须在脚本中输入值时将所有英寸值乘以 72。

下表显示了各种测量单位的转换公式：

| 单位 | 转换公式 |
|---|---|
| 厘米 | 28.346 点 = 1 厘米 |
| 英寸 | 72 点 = 1 英寸 |
| 毫米 | 2.834645 点 = 1 毫米 |
| 派卡 | 12 点 = 1 派卡 |
| Qs | 0.709 点 = 1 Q（1 Q 等于 0.23 毫米） |

JavaScript 提供了 `UnitValue` 对象类型，它提供了单位转换工具。有关详细信息，请参阅 [JavaScript 工具指南](https://extendscript.docsforadobe.dev/)

---

## Em 空间单位

使用 em 单位而不是点的值以千分之一 em 为单位进行测量。

一个 em 与当前字体大小成比例。

例如，在 6 点字体中，1 em 等于 6 点；在 10 点字体中，1 em 等于 10 点。

在 10 点字体中，20 em 单位的字距调整值相当于

```
(20 单位 x 10 点) / 1000 单位/em = 0.2 点
```
