---
title: PrintColorSeparationOptions
---
# PrintColorSeparationOptions

`new PrintColorSeparationOptions()`

#### 描述

用于打印文档的颜色分色信息。

---

## 属性

### PrintColorSeparationOptions.colorSeparationMode

`printColorSeparationOptions.colorSeparationMode`

#### 描述

颜色分色类型。

默认值: `PrintColorSeparationMode.COMPOSITE`

#### 类型

[PrintColorSeparationMode](../scripting-constants#printcolorseparationmode)

---

### PrintColorSeparationOptions.convertSpotColors

`printColorSeparationOptions.convertSpotColors`

#### 描述

如果为 `true`，所有专色应转换为印刷色。

默认值: `false`

#### 类型

布尔值

---

### PrintColorSeparationOptions.inkList

`printColorSeparationOptions.inkList`

#### 描述

颜色分色的油墨列表。

#### 类型

[Ink](.././Ink) 数组

---

### PrintColorSeparationOptions.overPrintBlack

`printColorSeparationOptions.overPrintBlack`

#### 描述

如果为 `true`，黑色叠印。

默认值: `false`

#### 类型

布尔值

---

### PrintColorSeparationOptions.typename

`printColorSeparationOptions.typename`

#### 描述

只读。对象的类名。

#### 类型

字符串

---

## 示例

### 管理打印的颜色分色

```javascript
// 创建一个包含符号项的新文档
// 并使用每种分色选项打印文档

// 向新文档添加一些符号项
var docRef = documents.add();
var y = docRef.height - 30;

for (var i = 0; i < (docRef.symbols.length); i++) {
 symbolRef = docRef.symbols[i];

 symbolItemRef1 = docRef.symbolItems.add(symbolRef);
 symbolItemRef1.top = y;
 symbolItemRef1.left = 100;

 y -= (symbolItemRef1.height + 10);
}

// 使用不同的分色选项打印
var sepOptions = new PrintColorSeparationOptions();
var options = new PrintOptions();
options.colorSeparationOptions = sepOptions;

sepOptions.convertSpotColors = true;
sepOptions.overPrintBlack = true;
sepOptions.colorSeparationMode = PrintColorSeparationMode.COMPOSITE;
docRef.print(options);

sepOptions.colorSeparationMode = PrintColorSeparationMode.INRIPSEPARATION;
docRef.print(options);

sepOptions.convertSpotColors = false;
sepOptions.overPrintBlack = false;
sepOptions.colorSeparationMode = PrintColorSeparationMode.HOSTBASEDSEPARATION;
docRef.print(options);
```
