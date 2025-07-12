---
title: 指定测量值
---
# 指定测量值

ExtendScript 提供了 `UnitValue` 对象来表示测量值。`UnitValue` 对象的属性和方法使得更改值、单位或两者都更改变得容易，或者可以执行从一个单位到另一个单位的转换。

## UnitValue 对象

表示包含数值大小和测量单位的测量值。

### UnitValue 对象构造函数

`UnitValue` 构造函数创建一个新的 `UnitValue` 对象。关键字 `new` 是可选的：

```javascript
myVal = new UnitValue (value, unit);
myVal = new UnitValue ("value unit");
myVal = new UnitValue (value, "unit");
```

`value` 是一个数字，`unit` 用一个字符串指定，可以是缩写、单数或复数形式，如下表所示。

| 缩写 | 单数形式 | 复数形式 | 备注 |
| --- | --- | --- | --- |
| `"in"` | `"inch"` | `"inches"` | 2.54 厘米 |
| `"ft"` | `"foot"` | `"feet"` | 30.48 厘米 |
| `"yd"` | `"yard"` | `"yards"` | 91.44 厘米 |
| `"mi"` | `"mile"` | `"miles"` | 1609.344 米 |
| `"mm"` | `"millimeter"` | `"millimeters"` | |
| `"cm"` | `"centintimeter"` | `"centimeters"` | |
| `"m"` | `"meter"` | `"meters"` | |
| `"km"` | `"kilometer"` | `"kilometers"` | |
| `"pt"` | `"point"` | `"points"` | 英寸 / 72 |
| `"pc"` | `"pica"` | `"picas"` | 点数 * 12 |
| `"tpt"` | `"traditional point"` | `"traditional points"` | 英寸 / 72.27 |
| `"tpc"` | `"traditional pica"` | `"traditional picas"` | 12 tpt |
| `"ci"` | `"cicero"` | `"ciceros"` | 12.7872 点 |
| `"px"` | `"pixel"` | `"pixels"` | 无基准（见下文） |
| `"%"` | `"percent"` | `"percent"` | 无基准（见下文） |

如果提供了未知的单位类型，类型将设置为 `"?"`，并且 `UnitValue` 对象将打印为 `"UnitValue 0.00000"`。

例如，以下所有格式都是等效的：

```javascript
myVal = new UnitValue (12, "cm");
myVal = new UnitValue ("12 cm");
myVal = UnitValue ("12 centimeters");
```

---

## 属性

### UnitValue.baseUnit

`unitValueObj.baseUnit`

#### 描述

一个 [UnitValue 对象](#unitvalue-object)，用于定义一个像素的大小，或用作百分比值基准的总大小。

这被用作像素和百分比的基础转换单位；请参阅 [转换像素和百分比值](#converting-pixel-and-percentage-values)。

默认值为 0.013889 英寸（1/72 英寸），这是 72 dpi 下像素的基础转换单位。设置为 `null` 以恢复默认值。

#### 类型

UnitValue

---

### UnitValue.type

`unitValueObj.type`

#### 描述

单位类型的缩写形式；例如，`"cm"` 或 `"in"`。

#### 类型

String

---

### UnitValue.value

`unitValueObj.value`

#### 描述

数值测量值。

#### 类型

Number

---

---

## 函数

### UnitValue.as()

`unitValueObj.as(unit)`

#### 描述

返回此对象在给定单位中的数值。如果单位未知或无法计算，则生成运行时错误。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `unit` | String | 单位类型的缩写形式；例如，`"cm"` 或 `"in"`。 |

#### 返回

Number

---

### UnitValue.convert()

`unitValueObj.convert(unit)`

#### 描述

将此对象转换为给定单位，并相应地重置类型和值。

如果转换成功，则返回 `true`。如果单位未知或对象无法转换，则生成运行时错误并返回 `false`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `unit` | String | 单位类型的缩写形式；例如，`"cm"` 或 `"in"`。 |

#### 返回

Boolean

---

## 转换像素和百分比值

在不同单位之间转换测量值需要一个共同的基础单位。例如，对于长度，米是基础单位。所有长度单位都可以转换为米，这使得可以将任何长度单位转换为任何其他长度单位。

像素和百分比没有标准的共同基础单位。像素测量相对于显示分辨率，而百分比相对于绝对总大小。

- 要将像素转换为长度单位，您必须知道单个像素的大小。像素的大小取决于显示分辨率。常见的分辨率测量是 72 dpi，这意味着每英寸有 72 个像素。72 dpi 下像素的转换基础是 0.013889 英寸（1/72 英寸）。
- 百分比值是相对于总测量的。例如，100 英寸的 10% 是 10 英寸，而 1 米的 10% 是 0.1 米。百分比的基础转换单位是 100% 对应的单位值。

`unitValue` 对象的默认 `baseUnit` 是 0.013889 英寸，即 72 dpi 下像素的基础。如果 `unitValue` 用于任何其他 dpi 的像素或百分比值，则必须相应地设置 `baseUnit` 值。`baseUnit` 值本身是一个 `unitValue` 对象，包含大小和单位。

对于使用不同 DPI 的系统，您可以更改 `UnitValue` 类中的 `baseUnit` 值，从而更改所有新 `unitValue` 对象的默认值。例如，要将像素的分辨率加倍：

```javascript
UnitValue.baseUnit = UnitValue (1/144, "in"); //144 dpi
```

要恢复默认值，请将 `null` 分配给类属性：

```javascript
UnitValue.baseUnit = null; //恢复默认值
```

您可以通过在该对象中设置属性来覆盖任何特定 `unitValue` 对象的默认值。例如，要创建一个 96 dpi 的像素 `unitValue` 对象：

```javascript
pixels = UnitValue (10, "px");
myPixBase = UnitValue (1/96, "in");
pixels.baseUnit = myPixBase;
```

对于百分比测量，将 `baseUnit` 属性设置为 100% 的测量值。例如，要创建一个 10 英尺的 40% 的 `unitValue` 对象：

```javascript
myPctVal = UnitValue (40, "%");
myBase = UnitValue (10, "ft")
myPctVal.baseUnit = myBase;
```

使用 [as()](#unitvalueas) 方法将百分比值转换为单位值：

```javascript
myFootVal = myPctVal.as ("ft"); // => 4
myInchVal = myPctVal.as ("in"); // => 36
```

您可以用相同的方式将 `unitValue` 从绝对测量转换为像素或百分比：

```javascript
myMeterVal = UnitValue (10, "m"); // 10 米
myBase = UnitValue (1, "km");
myMeterVal.baseUnit = myBase; //作为 1 千米的百分比
pctOfKm = myMeterVal.as ('%'); // => 1
myVal = UnitValue ("1 in"); // 定义以英寸为单位的测量值
// 使用默认基础转换为像素
myVal.convert ("px"); // => value=72 type=px
```

---

## 使用单位值进行计算

`UnitValue` 对象可以用于 JavaScript 计算表达式中。值的使用方式取决于操作符的类型。

### 一元操作符 `(~, !, +, -)`

| 操作符 | 行为 |
| --- | --- |
| `~unitValue` | 结果是一个新的 `UnitValue`，具有相同的类型，但值转换为 32 位整数并按位取反。 |
| `!unitValue` | 如果数值非零，则结果为 `true`，否则为 `false`。 |
| `+unitValue` | 结果是一个新的 `UnitValue`，具有与原始对象相同的类型和值。 |
| `-unitValue` | 结果是一个新的 `UnitValue`，具有与原始对象相同的类型和取反的值。 |

### 二元操作符 `(+, -, *, /, %)`

如果一个操作数是 `unitValue` 对象，另一个是数字，则操作将应用于数字和对象的数值。表达式返回一个新的 `unitValue` 对象，结果作为其值。

例如：

```javascript
val = new UnitValue ("10 cm");
res = val * 20;
// res 是一个 UnitValue (200, "cm");
```

如果两个操作数都是 `unitValue` 对象，JavaScript 将右操作数转换为与左操作数相同的单位，并将操作应用于结果值。表达式返回一个新的 `unitValue` 对象，具有左操作数的单位和结果值。

例如：

```javascript
a = new UnitValue ("1 m");
b = new UnitValue ("10 cm");
a + b;
// res 是一个 UnitValue (1.1, "m");
b + a;
// res 是一个 UnitValue (110, "cm");
```

### 比较操作符 `(=, ==, <, >, <=, >=)`

如果一个操作数是 `unitValue` 对象，另一个是数字，JavaScript 将数字与 `unitValue` 的数值进行比较。

如果两个操作数都是 `unitValue` 对象，JavaScript 将两个对象转换为相同的单位，并比较转换后的数值。

例如：

```javascript
a = new UnitValue ("98 cm");
b = new UnitValue ("1 m");
a < b; // => true
a < 1; // => false
a == 98; // => true
```
