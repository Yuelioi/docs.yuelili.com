---
title: PrintCoordinateOptions
---
# PrintCoordinateOptions

`new PrintCoordinateOptions()`

#### 描述

有关介质和关联打印参数的信息。

---

## 属性

### PrintCoordinateOptions.emulsion

`printCoordinateOptions.emulsion`

#### 描述

如果为 `true`，则水平翻转图稿。

默认值：`false`

#### 类型

布尔值

---

### PrintCoordinateOptions.fitToPage

`printCoordinateOptions.fitToPage`

#### 描述

如果为 `true`，则按比例缩放图稿以适应介质。

默认值：`false`

#### 类型

布尔值

---

### PrintCoordinateOptions.horizontalScale

`printCoordinateOptions.horizontalScale`

#### 描述

水平缩放因子，以百分比表示（100 = 100%）。

范围：1.0 到 10000.0。

默认值：100.0

#### 类型

数字（双精度）

---

### PrintCoordinateOptions.orientation

`printCoordinateOptions.orientation`

#### 描述

图稿的方向。

默认值：`PrintOrientation.PORTRAIT`

#### 类型

[PrintOrientation](../scripting-constants#printorientation)

---

### PrintCoordinateOptions.position

`printCoordinateOptions.position`

#### 描述

图稿在介质上的位置。

默认值：`PrintPosition.TRANSLATECENTER`

#### 类型

[PrintPosition](../scripting-constants#printposition)

---

### PrintCoordinateOptions.tiling

`printCoordinateOptions.tiling`

#### 描述

页面平铺模式。

默认值：`PrintTiling.TILESINGLEFULLPAGE`

#### 类型

[PrintTiling](../scripting-constants#printtiling)

---

### PrintCoordinateOptions.typename

`printCoordinateOptions.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

### PrintCoordinateOptions.verticalScale

`printCoordinateOptions.verticalScale`

#### 描述

垂直缩放因子，以百分比表示（100 = 100%）。

范围：1.0 到 10000.0。

默认值：100.0

#### 类型

数字（双精度）

---

## 示例

### 管理打印坐标

```javascript
// 创建一个新文档，其中包含超出页面的符号项，然后以每种打印方向打印
var docRef = documents.add();
var y = 500;
var x = -70;

if (docRef.symbols.length > 0) {

 for (var i = 0; i < 5; i++) {
 symbolRef = docRef.symbols[0];

 symbolItemRef1 = docRef.symbolItems.add(symbolRef);
 symbolItemRef1.top = y;
 symbolItemRef1.left = x;

 x += 30;
 }

 redraw();

 // 使用各种坐标选项打印
 var coordinateOptions = new PrintCoordinateOptions();
 var options = new PrintOptions();
 options.coordinateOptions = coordinateOptions;

 coordinateOptions.emulsion = true; // 从右到左反转
 coordinateOptions.fitToPage = true; // 将图稿适应页面大小
 coordinateOptions.orientation = PrintOrientation.LANDSCAPE;
 docRef.print(options);

 coordinateOptions.emulsion = false;
 coordinateOptions.fitToPage = false;
 coordinateOptions.orientation = PrintOrientation.PORTRAIT;
 coordinateOptions.horizontalScale = 50;
 coordinateOptions.verticalScale = 50;
 docRef.print(options);
}
```
