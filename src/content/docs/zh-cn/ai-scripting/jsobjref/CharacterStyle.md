---
title: 字符样式
---
# 字符样式

`characterStyle`

#### 描述

将字符属性与字符关联。有关示例，请参阅 [字符样式](.././CharacterStyles)。

---

## 属性

### CharacterStyle.characterAttributes

`characterStyle.characterAttributes`

#### 描述

样式的字符属性。

#### 类型

[字符属性](.././CharacterAttributes)；只读。

---

### CharacterStyle.name

`characterStyle.name`

#### 描述

字符样式的名称。

#### 类型

字符串

---

### CharacterStyle.parent

`characterStyle.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### CharacterStyle.typename

`characterStyle.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### CharacterStyle.applyTo()

`characterStyle.applyTo(textItem [,clearingOverrides])`

#### 描述

将字符样式应用于文本对象或对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `textItem` | 对象 | 要应用样式的文本项 |
| `clearingOverrides` | 布尔值，可选 | 是否清除覆盖 |

#### 返回值

无

---

### CharacterStyle.remove()

`characterStyle.remove()`

#### 描述

删除对象。

#### 返回值

无。

---
