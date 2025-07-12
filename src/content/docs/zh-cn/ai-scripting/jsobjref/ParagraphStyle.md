---
title: ParagraphStyle
---
# ParagraphStyle

`app.activeDocument.paragraphStyles[index]`

#### 描述

将字符和段落属性与样式名称关联。样式对象可用于将这些属性应用于 TextFrame 对象中的文本。请参阅 [创建并应用段落样式](../ParagraphStyles#创建并应用段落样式) 示例。

---

## 属性

### ParagraphStyle.characterAttributes

`app.activeDocument.paragraphStyles[index].characterAttributes`

#### 描述

文本范围的字符属性。

#### 类型

[CharacterAttributes](.././CharacterAttributes); 只读。

---

### ParagraphStyle.name

`app.activeDocument.paragraphStyles[index].name`

#### 描述

段落样式的名称。

#### 类型

字符串。

---

### ParagraphStyle.paragraphAttributes

`app.activeDocument.paragraphStyles[index].paragraphAttributes`

#### 描述

文本范围的段落属性。

#### 类型

[CharacterAttributes](.././CharacterAttributes); 只读。

---

### ParagraphStyle.parent

`app.activeDocument.paragraphStyles[index].parent`

#### 描述

对象的容器。

#### 类型

对象; 只读。

---

### ParagraphStyle.typename

`app.activeDocument.paragraphStyles[index].typename`

#### 描述

对象的类名。

#### 类型

字符串; 只读。

---

## 方法

### ParagraphStyle.applyTo()

`app.activeDocument.paragraphStyles[index].applyTo(textItem [,clearingOverrides])`

#### 描述

将此段落样式应用于指定的文本项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `textItem` | 对象 | 要应用样式的段落项 |
| `clearingOverrides` | 布尔值, 可选 | 是否清除覆盖 |

#### 返回值

无。

---

### ParagraphStyle.remove()

`app.activeDocument.paragraphStyles[index].remove()`

#### 描述

删除对象。

#### 返回值

无。

---
