---
title: 全局函数
---

# 全局

#### 描述

这些全局可用的函数是 After Effects 特有的。任何 JavaScript 对象或函数都可以调用这些函数，它们允许您在信息面板的一个小区域（3行）显示文本，将数字时间值与字符串值相互转换，或生成随机数。

| 全局函数 | 描述 |
| --- | --- |
| `clearOutput()` | 清除信息面板中的文本。 |
| `currentFormatToTime()` | 将字符串时间值转换为数字时间值。 |
| `generateRandomNumber()` | 生成一个随机数。 |
| `getEnumAsString()` | 将枚举值转换为其字符串名称。 |
| `timeToCurrentFormat()` | 将数字时间值转换为字符串时间值。 |
| `write()` | 将文本写入信息面板，不添加换行符。 |
| `writeLn()` | 将文本写入信息面板，并在末尾添加换行符。 |
| `isValid()` | 当为 `true` 时，指定的对象存在。 |

ExtendScript 还定义了用于标准用户 I/O 的额外全局函数（`alert`、`confirm` 和 `prompt`）以及用于文件 I/O 的静态函数；有关详细参考信息，请参阅 [JavaScript 工具指南](https://extendscript.docsforadobe.dev/)。

---

## 函数

### clearOutput()

`clearOutput()`

#### 描述

清除信息面板中的输出。

#### 参数

无。

#### 返回

无。

---

### currentFormatToTime()

`currentFormatToTime(formattedTime, fps[, isDuration])`

#### 描述

将帧时间值的格式化字符串转换为秒数，给定指定的帧速率。例如，如果格式化的帧时间值为 0:00:12（确切的字符串格式由项目设置决定），并且帧速率为 24 fps，则时间为 0.5 秒（12/24）。如果帧速率为 30 fps，则时间为 0.4 秒（12/30）。如果时间是持续时间，则帧从 0 开始计数。否则，帧从项目的起始帧开始计数（参见 [Project.displayStartFrame](https://project.md/#projectdisplaystartframe)）。

#### 参数

| 参数 | 描述 |
| --- | --- |
| `formattedTime` | 帧时间值，指定项目当前时间显示格式中帧数的字符串。 |
| `fps` | 帧速率，浮点值。 |
| `isDuration` | 可选。当为 `true` 时，时间为持续时间（从第 0 帧开始测量）。当为 `false`（默认值）时，时间从项目的起始帧开始测量。 |

#### 返回

浮点值，秒数。

---

### generateRandomNumber()

`generateRandomNumber()`

:::note
该方法添加于 After Effects 13.6 (CC 2015)
:::

#### 描述

生成随机数。建议使用此函数代替 `Math.random()` 来生成将应用于项目中的值的随机数（例如，使用 setValue 时）。

此方法避免了在 After Effects CC 2015 (13.5.x) 中由于多 CPU 线程的并发问题，`Math.random()` 不会返回随机值的问题。

#### 返回

浮点数，范围在 `[0..1]` 内的伪随机数。

#### 示例

```javascript
// 使用随机数更改所有图层的位置 X

var myComp = app.project.activeItem;
var x = 0;

for (var i = 1; i <= myComp.numLayers; i++) {
 // 如果使用 Math.random()，这将不起作用
 // x = 400 * (Math.random()) - 200;
 // 使用新的 generateRandomNumber() 代替

 x = 400 * generateRandomNumber() - 200;
 var currentPos = myComp.layer(i).property("Position").value;
 myComp.layer(i).property("Position").setValue([currentPos[0] + x, currentPos[1]]);
}
```

---

### getEnumAsString()

`getEnumAsString()`

:::note
该方法添加于 After Effects 24.0
:::

#### 描述

返回枚举的字符串值。

#### 参数

枚举。

#### 返回

字符串。

#### 示例

```javascript
// 返回: "BlendingMode.ADD"
alert(getEnumAsString(5220));
```

---

### isValid()

`isValid(obj)`

#### 描述

确定指定的 After Effects 对象（例如，合成、图层、遮罩等）是否仍然存在。某些操作，例如 [PropertyBase.moveTo()](.https://../property/propertybase#propertybasemoveto)，可能会使现有变量赋值失效。此函数允许您在尝试访问这些赋值之前测试它们是否仍然有效。

#### 参数

| 参数 | 描述 |
| --- | --- |
| `obj` | 要检查有效性的 After Effects 对象。 |

#### 返回

布尔值。

#### 示例

```javascript
var layer = app.project.activeItem.layer(1); // 假设图层有三个遮罩
alert(isValid(layer)); // 显示 "true"
var mask1 = layer.mask(1);
var mask2 = layer.mask(2);
var mask3 = layer.mask(3);
mask3.moveTo(1); // 将第三个遮罩移动到遮罩堆栈的顶部
alert(isValid(mask1)); // 显示 "false"; mask2 和 mask3 也是如此
```

---

### timeToCurrentFormat()

`timeToCurrentFormat(time, fps[, isDuration])`

#### 描述

将数字时间值（秒数）转换为帧时间值；即，显示在指定速率下该时间对应的帧的格式化字符串。例如，如果时间为 0.5 秒，帧速率为 24 fps，则帧为 0:00:12（当项目设置为显示时间码时）。如果帧速率为 30 fps，则帧为 0:00:15。时间码字符串的格式由项目设置决定。如果时间是持续时间，则帧从 0 开始计数。否则，帧从项目的起始帧开始计数（参见 [Project displayStartFrame](../project/#projectdisplaystartframe) 属性）。

#### 参数

| 参数 | 描述 |
| --- | --- |
| `time` | 秒数，浮点值。 |
| `fps` | 帧速率，浮点值。 |
| `isDuration` | 可选。当为 `true` 时，时间为持续时间（从第 0 帧开始测量）。当为 `false`（默认值）时，时间从项目的起始帧开始测量。 |

#### 返回

项目当前时间显示格式的字符串。

---

### write()

`write(text)`

#### 描述

将输出写入信息面板，不添加换行符。

#### 参数

| 参数 | 描述 |
| --- | --- |
| `text` | 要显示的字符串。如果信息面板空间不足，则会被截断。 |

#### 返回

无。

#### 示例

```javascript
write("此文本出现在信息面板中 ");
write("更多内容在同一行。");
```

---

### writeLn()

`writeLn(text)`

#### 描述

将输出写入信息面板，并在末尾添加换行符。

#### 参数

| 参数 | 描述 |
| --- | --- |
| `text` | 要显示的字符串。 |

#### 返回

无。

#### 示例

```javascript
writeLn("此文本出现在第一行");
writeLn("此文本出现在第二行");
```
