---
title: $ 对象
---
# Dollar ($) 对象

这个全局的 ExtendScript 对象提供了许多调试工具和信息方法。$ 对象的属性允许你获取全局信息，例如最近的运行时错误，并设置控制调试和本地化行为的标志。这些方法允许你在脚本执行期间将文本输出到 JavaScript 控制台，以编程方式控制执行和其他 ExtendScript 行为，并收集对象使用的统计信息。

---

## 属性

### $.appEncoding

`$.appEncoding`

#### 描述

应用程序默认字符编码的 Internet 名称，例如 "CP1252" 或 "X-SHIFT-JIS"。有效值取决于实现和操作系统。

设置为更改应用程序的默认编码。返回的值可能与设置的值不同。例如，在 Windows 中，如果设置为 "x-latin1"，则返回的值是同义的 "ISO-8859-1"。

#### 类型

字符串

---

### $.build

`$.build`

#### 描述

当前 ExtendScript 构建的版本信息。

#### 类型

字符串

只读。

---

### $.buildDate

`$.buildDate`

#### 描述

当前 JavaScript 引擎构建的日期。

#### 类型

`Date`

只读。

---

### $.decimalPoint

`$.decimalPoint`

#### 描述

当前区域设置中用于格式化数字输出的小数点字符。

#### 类型

字符串

只读。

---

### $.engineName

`$.engineName`

#### 描述

当前 JavaScript 引擎的名称（如果已设置）。

#### 类型

字符串

只读。

---

### $.error

`$.error`

#### 描述

最近的运行时错误信息，包含在 JavaScript Error 对象中。

将错误文本分配给此属性会生成运行时错误；然而，生成运行时错误的推荐方法是抛出 Error 对象。

#### 类型

`Error`

字符串

---

### $.fileName

`$.fileName`

#### 描述

当前脚本的文件名。

#### 类型

字符串

只读。

---

### $.flags

`$.flags`

#### 描述

获取或设置低级调试输出标志。以下位标志值的逻辑与：

- `0x0002` (2): 在执行时显示每行及其行号。
- `0x0040` (64): 启用过多的垃圾回收。通常，垃圾回收在上次垃圾回收后对象数量增加一定量时开始。此标志使 ExtendScript 在几乎每条语句后都进行垃圾回收。这会严重影响性能，但在怀疑对象过早释放时非常有用。
- `0x0080` (128): 显示所有调用及其参数和返回值。
- `0x0100` (256): 启用扩展错误处理（参见 strict）。
- `0x0200` (512): 启用 toString 方法的本地化功能。等同于 localize 属性。

:::note
其他位值不是公开的，不应使用。
:::

#### 类型

数字

---

### $.global

`$.global`

#### 描述

提供对 Global 对象的访问，该对象包含 JavaScript 全局命名空间。

#### 类型

Global

---

### $.hiresTimer

`$.hiresTimer`

#### 描述

一个高分辨率计时器，测量自上次访问此属性以来的微秒数。值尽可能早地初始化，因此第一次访问返回 ExtendScript 的启动时间。该属性是线程本地的；也就是说，线程上的第一次访问返回创建和初始化该线程所需的时间。

#### 类型

数字。只读。

---

### $.includePath

`$.includePath`

#### 描述

当前脚本的包含文件路径。

#### 类型

字符串。只读。

---

### $.level

`$.level`

#### 描述

当前的调试级别，启用或禁用 JavaScript 调试器。

#### 类型

数字。只读。以下之一：

- `0`: 无调试
- `1`: 在运行时错误时中断
- `2`: 完全调试模式

---

### $.line

`$.line`

#### 描述

当前执行脚本的当前行号；第一行为 1。

#### 类型

数字。只读。

---

### $.locale

`$.locale`

#### 描述

获取或设置当前区域设置。字符串包含五个字符，形式为 LL_RR，其中 LL 是 ISO 639 语言标识符，RR 是 ISO 3166 区域标识符。

最初，这是应用程序或平台为当前用户返回的值。你可以设置它以临时更改区域设置以进行测试。要返回到应用程序或平台设置，请设置为 Nothing、`null` 或空字符串。

#### 类型

字符串

---

### $.localize

`$.localize`

#### 描述

启用或禁用内置 `toString()` 方法的扩展本地化功能。

参见 [本地化 ExtendScript 字符串](.././localizing-extendscript-strings)。

#### 类型

布尔值

---

### $.memCache

`$.memCache`

#### 描述

获取或设置 ExtendScript 内存缓存大小（以字节为单位）。

#### 类型

数字

---

### $.os

`$.os`

#### 描述

当前操作系统的版本信息。

#### 类型

字符串。只读。

---

### $.screens

`$.screens`

#### 描述

包含有关连接到计算机的显示屏幕信息的对象数组。

#### 类型

对象数组

#### 属性

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `left` | 坐标 | 可绘制区域的左角 |
| `top` | 坐标 | 可绘制区域的顶部 |
| `right` | 坐标 | 可绘制区域的右角 |
| `bottom` | 坐标 | 可绘制区域的底部 |
| `primary` | 布尔值 | 如果对象描述主显示器，则为 `true` |

---

### $.stack

`$.stack`

#### 描述

当前的堆栈跟踪。

#### 类型

字符串

---

### $.strict

`$.strict`

#### 描述

当为 `true` 时，任何尝试写入只读属性的操作都会导致运行时错误。

某些对象在 `true` 时不允许创建新属性。

#### 类型

布尔值

---

### $.version

`$.version`

#### 描述

JavaScript 引擎的版本号，为一个三部分数字和描述；例如："3.92.95 (debug)"

#### 类型

字符串。只读。

---

## 函数

### $.about()

`$.about()`

#### 描述

显示 ExtendScript 组件的关于框，并返回关于框的文本作为字符串。

#### 返回

字符串

---

### $.bp()

`$.bp([condition])`

#### 描述

在当前位置执行断点。

如果不需要条件，建议在脚本中使用 JavaScript `debugger;` 语句，而不是此方法。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `condition` | 字符串 | 可选。用作条件的 JavaScript 语句。如果在此点到达时语句评估为 `true` 或非零，则停止执行。 |

#### 返回

无

---

### $.colorPicker()

`$.colorPicker(name)`

#### 描述

调用平台特定的颜色选择对话框。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 十六进制 RGB 值 (`0xRRGGBB`) | 对话框中预选的颜色，或 `-1` 表示平台默认值。 |

#### 返回

十六进制 RGB 值，例如 `0xRRGGBB`。

---

### $.evalFile()

`$.evalFile(path[, timeout=10000])`

#### 描述

从磁盘加载 JavaScript 脚本文件，评估它，并返回评估结果。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `path` | 字符串 | 文件的名称和位置。 |
| `timeout` | 数字 | 可选。在返回未定义之前等待的毫秒数，如果脚本无法评估。默认为 `10000`。 |

#### 返回

任意类型

---

### $.gc()

`$.gc()`

#### 描述

在 JavaScript 引擎中启动垃圾回收。

#### 返回

无

---

### $.getenv()

`$.getenv(envname)`

#### 描述

检索指定环境变量的值，如果未定义此类变量，则返回 null。

:::note

- 使用 `launchctl setenv CUSTOM_VAR "custom_value"` 创建的自定义环境变量

:::

在 .bash_profile、.bashrc、.profile、.zshenv 或 .zshrc 中设置的任何环境变量将被忽略。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `envname` | 字符串 | 环境变量的名称。 |

#### 返回

字符串

---

### $.setenv()

`$.setenv(envname, value)`

#### 描述

设置指定环境变量的值，如果未定义此类变量。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `envname` | 字符串 | 环境变量的名称。 |
| `value` | 字符串 | 新值，一个字符串。 |

#### 返回

无

---

### $.sleep()

`$.sleep(milliseconds)`

#### 描述

将调用线程挂起指定的毫秒数。

在睡眠期间，每隔 `100` 毫秒检查一次是否应终止睡眠。如果存在中断请求或脚本超时已过期，则可能发生这种情况。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `milliseconds` | 数字 | 等待的毫秒数。 |

#### 返回

无

---

### $.write()

`$.write(text[, text...]...)`

#### 描述

将指定的文本写入 JavaScript 控制台。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `text` | 字符串 | 要写入的一个或多个字符串，连接成一个字符串。 |

#### 返回

无

---

### $.writeln()

`$.writeln (text[, text...]...)`

#### 描述

将指定的文本写入 JavaScript 控制台并附加换行符序列。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `text` | 字符串 | 要写入的一个或多个字符串，连接成一个字符串。 |

#### 返回

无
