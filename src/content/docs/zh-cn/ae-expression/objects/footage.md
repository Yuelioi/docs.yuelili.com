---
title: 素材
---
# Footage

`footage("myFile")`

要将项目面板中的素材项用作表达式中的对象，请使用全局素材方法，例如 `footage("myFile")`。

你也可以使用图层的 source 属性访问素材对象，前提是该图层的源是素材项（即 `thisLayer.source`）。

:::info
在本页中，我们将使用 `footage("myFile")` 作为调用这些项的示例，但请注意，任何返回 [素材对象](#) 的方法都可以使用。
:::

---

## 属性

### Footage.duration

`footage("myFile").duration`

#### 描述

返回素材项的持续时间，单位为秒。

#### 类型

数字

---

### Footage.frameDuration

`footage("myFile").frameDuration`

#### 描述

返回素材项中一帧的持续时间，单位为秒。

#### 类型

数字

---

### Footage.height

`footage("myFile").height`

#### 描述

返回素材项的高度，单位为像素。

#### 类型

数字

---

### Footage.name

`footage("myFile").name`

#### 描述

返回素材项的名称，如项目面板中所示。

#### 类型

字符串

---

### Footage.ntscDropFrame

`footage("myFile").ntscDropFrame`

:::
note 该方法添加于 After Effects CS5.5
:::

#### 描述

如果时间码是丢帧格式，则返回 `true`。

#### 类型

布尔值

---

### Footage.pixelAspect

`footage("myFile").pixelAspect`

#### 描述

返回素材项的像素宽高比。

#### 类型

数字

---

### Footage.sourceData

`footage("myFile").sourceData`

#### 描述

返回 JSON 文件的数据作为 `sourceData` 对象的数组。

JSON 文件的结构将决定数组的大小和复杂性。

可以通过数据的层次结构属性引用各个数据流。

#### 类型

`sourceData` 对象的数组；只读。

#### 示例

给定一个名为 "Color" 的数据流，以下代码将返回第一个数据对象中 "Color" 的值：

```js
footage("sample.json").sourceData[0].Color
```

通常的用法是将 JSON 文件的 `sourceData` 分配给一个变量，然后引用所需的数据流。例如：

```js
const myData = footage("sample.json").sourceData;
myData[0].Color;
```

---

### Footage.sourceText

`footage("myFile").sourceText`

#### 描述

以字符串形式返回 JSON 文件的内容。

可以使用 `eval()` 方法将字符串转换为 `sourceData` 对象的数组，与 [Footage.sourceData]() 属性的结果相同，从中可以通过数据的层次结构属性引用各个数据流。

#### 类型

字符串，JSON 文件的内容；只读。

#### 示例

```js
const myData = eval(footage("sample.json").sourceText);
myData.sampleValue;
```

---

### Footage.width

`footage("myFile").width`

#### 描述

返回素材项的宽度，单位为像素。

#### 类型

数字

---

## 函数

### Footage.dataKeyCount()

`footage("myFile").dataKeyCount(dataPath)`

#### 描述

返回 MGJSON 文件中指定动态数据流的样本数量。

接受一个数组值来定义层次结构中所需动态数据流的路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `dataPath` | 数组 | 必需。层次结构中静态或动态数据流的路径。 |

#### 返回

动态数据流中的样本数量。

#### 示例

返回第一个子项的样本数量：

```js
footage("sample.mgjson").dataKeyCount([0])
```

返回第二个组的样本数量：

```js
footage("sample.mgjson").dataKeyCount([1][0])
```

---

### Footage.dataKeyTimes()

`footage("myFile").dataKeyTimes(dataPath[, t0=startTime][, t1=endTime])`

#### 描述

返回 MGJSON 文件中指定动态数据流样本的时间，单位为秒。

可选地指定要返回样本的时间范围。默认情况下，返回动态数据流中 `startTime` 和 `endTime` 之间的所有样本的时间，如 MGJSON 文件中数据流的 `samplesTemporalExtent` 属性所定义。

接受一个数组值来定义层次结构中所需动态数据流的路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `dataPath` | 数组 | 必需。层次结构中静态或动态数据流的路径。 |
| `t0` | 数字 | 可选。要返回样本的时间范围的开始时间，单位为秒。默认为 `startTime`。 |
| `t1` | 数字 | 可选。要返回样本的时间范围的结束时间，单位为秒。默认为 `endTime`。 |

#### 返回

表示样本时间的数字数组。

#### 示例

返回第一个子项在 1 秒到 3 秒之间的样本时间：

```js
footage("sample.mgjson").dataKeyTimes([0], 1, 3)
```

---

### Footage.dataKeyValues()

`footage("myFile").dataKeyValues(dataPath[, t0=startTime][, t1=endTime])`

#### 描述

返回 MGJSON 文件中指定动态数据流样本的值。

可选地指定要返回样本的时间范围。默认情况下，返回动态数据流中 `startTime` 和 `endTime` 之间的所有样本的值，如 MGJSON 文件中数据流的 `samplesTemporalExtent` 属性所定义。

接受一个数组值来定义层次结构中所需动态数据流的路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `dataPath` | 数组 | 必需。层次结构中静态或动态数据流的路径。 |
| `t0` | 数字 | 可选。要返回样本的时间范围的开始时间，单位为秒。默认为 `startTime`。 |
| `t1` | 数字 | 可选。要返回样本的时间范围的结束时间，单位为秒。默认为 `endTime`。 |

#### 返回

表示样本值的数字数组。

#### 示例

返回第一个子项在 1 秒到 3 秒之间的样本值：

```js
footage("sample.mgjson").dataKeyValues([0], 1, 3)
```

---

### Footage.dataValue()

`footage("myFile").dataValue(dataPath)`

#### 描述

返回 MGJSON 文件中指定静态或动态数据流的值。

接受一个数组值来定义层次结构中所需数据流的路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `dataPath` | 数组 | 必需。层次结构中静态或动态数据流的路径。 |

#### 返回

数据流的值。

#### 示例

返回第一个子项的数据：

```js
footage("sample.mgjson").dataValue([0])
```

返回第二个组中第一个子项的数据：

```js
footage("sample.mgjson").dataValue([1][0])
```
