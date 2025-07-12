---
title: PrintColorManagementOptions
---
# PrintColorManagementOptions

`new PrintColorManagementOptions()`

#### 描述

用于文档颜色管理的信息。

---

## 属性

### PrintColorManagementOptions.colorProfileMode

`printColorManagementOptions.colorProfileMode`

#### 描述

颜色管理配置文件模式。

默认值：`PrintColorProfile.SOURCEPROFILE`

#### 类型

[PrintColorProfile](../scripting-constants#printcolorprofile)

---

### PrintColorManagementOptions.intent

`printColorManagementOptions.intent`

#### 描述

颜色管理意图类型。

默认值：`PrintColorIntent.RELATIVECOLORIMETRIC`

#### 类型

[PrintColorIntent](../scripting-constants#printcolorintent)

---

### PrintColorManagementOptions.name

`printColorManagementOptions.name`

#### 描述

颜色管理配置文件的名称。

#### 类型

字符串

---

### PrintColorManagementOptions.typename

`printColorManagementOptions.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 管理打印颜色

```javascript
// 创建一个新文档，添加符号，然后创建一个
// PrintColorManagementOptions 对象并将其分配
// 给 PrintOptions 对象，然后使用每种颜色意图打印

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

redraw();

var colorOptions = new PrintColorManagementOptions();
var options = new PrintOptions();
options.colorManagementOptions = colorOptions;
colorOptions.name = "ColorMatch RGB";

// 使用每种颜色意图打印当前文档一次。
colorOptions.intent = PrintColorIntent.ABSOLUTECOLORIMETRIC;
docRef.print(options);

colorOptions.intent = PrintColorIntent.PERCEPTUALINTENT;
docRef.print(options);

colorOptions.intent = PrintColorIntent.RELATIVECOLORIMETRIC;
docRef.print(options);

colorOptions.intent = PrintColorIntent.SATURATIONINTENT;
docRef.print(options);
```
