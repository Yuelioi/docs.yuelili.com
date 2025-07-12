---
title: 路径
---
# Path Property

`thisLayer.mask("Mask 1").maskPath`

`thisLayer.content("Shape 1").content("Path 1").path;`

:::note 该方法添加于 After Effects 15.0 (CC) :::此类别包含与蒙版和形状*路径*相关的信息。

:::info
在本页中，我们将使用 `thisLayer.mask("Mask 1").maskPath` 作为调用这些项的示例，但请注意，任何返回 [路径](#) 的方法都可以使用。
:::

---

## 属性

### name

`thisLayer.mask("Mask 1").maskPath.name`

#### 描述

返回属性的名称。

#### 类型

字符串

---

## 函数

### PathProperty.createPath()

`thisLayer.mask("Mask 1").maskPath.createPath(points=[[0,0], [100,0], [100,100], [0,100]], inTangents=[], outTangents=[], is_closed=true)`

#### 描述

从一组点和切线创建路径对象。

路径的 [`points()`]()、[`inTangents()`]()、[`outTangents()`]() 和 [`isClosed()`]() 方法可以传递给 `points`、`inTangents`、`outTangents` 和 `is_closed` 参数以复制路径。

可以将相同路径的点和切线传递给 `createPath()` 并进行修改以生成不同的结果。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `points` | 数字对数组的数组 | 可选。表示点的 `[x, y]` 坐标的数字对数组的数组。数组必须包含至少 1 个项目，并且可以是任意长度。默认为 `[[0,0], [100,0], [100,100], [0,100]]`。 |
| `inTangents` | 数字对数组的数组 | 可选。表示其 `[x, y]` *偏移*坐标的数字对数组的数组。此数组的长度必须与 `points` 参数完全相同。默认为 `[]`。 |
| | | 坐标值相对于父点坐标的偏移。即，值 `[0, 0]` 在传入切线处不创建曲率。 |
| `outTangents` | 数字对数组的数组 | 可选。参见 `inTangents`。默认为 `[]`。 |
| `is_closed` | 布尔值 | 可选。默认为 `true`。 |

#### 返回

[路径]()

#### 示例

例如，以下表达式将通过不传递 `inTangents` 或 `outTangents` 参数来移除 Mask 1 的曲线：

```js
const myMask = mask("Mask 1").path;
myMask.createPath(myMask.points());
```

以下示例传递 Mask 1 的点和切线，并通过将 `is_closed` 设置为 `false` 将其转换为开放路径：

```js
const myMask = mask("Mask 1").path;
myMask.createPath(myMask.points(), myMask.inTangents(), myMask.outTangents(), false);
```

---

### PathProperty.inTangents()

`thisLayer.mask("Mask 1").maskPath.inTangents([t=time])`

#### 描述

获取路径上所有点的传入切线手柄的 `[x, y]` 坐标。

切线坐标值相对于父点坐标的偏移（即，值 `[0, 0]` 在传入切线处不创建曲率）。

此方法可以传递给 [`createPath()`]() 方法的 `inTangents` 参数以复制路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 | 可选。采样切线的时间（以合成秒为单位）。默认为 `time`（当前合成时间，以秒为单位）。 |

#### 返回

数字对数组的数组，四舍五入到小数点后四位

---

### PathProperty.isClosed()

`thisLayer.mask("Mask 1").maskPath.isClosed()`

#### 描述

确定路径是开放还是闭合。如果路径闭合，则返回 `true`；如果路径开放，则返回 `false`。

此方法可以传递给 [`createPath()`]() 方法的 `is_closed` 参数以复制路径。

#### 返回

布尔值

---

### PathProperty.normalOnPath()

`thisLayer.mask("Mask 1").maskPath.normalOnPath(percentage=0.5, t=time)`

#### 描述

获取路径上任意点的法线的 `[x, y]` 坐标。

法线的坐标值相对于父点坐标的偏移（即，值 `[0, 0]` 与父点相同）。

法线的父点表示为路径弧长的百分比。有关弧长百分比的详细信息，请参阅 [`pointOnPath()`]() 方法的描述。

父点坐标与 `normalOnPath()` 坐标之间的线性距离始终为 `1`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `percentage` | 数字 | 可选。采样法线的路径百分比。默认为 `0.5`（50%）。 |
| `t` | 数字 | 可选。采样路径的时间（以合成秒为单位）。默认为 `time`（当前合成时间，以秒为单位）。 |

#### 返回

数字对数组

#### 示例

**采样法线并使其更长：**

```js
myPath.normalOnPath() * 100
```

---

### PathProperty.outTangents()

`thisLayer.mask("Mask 1").maskPath.outTangents([t=time])`

#### 描述

获取路径上所有点的传出切线手柄的 `[x, y]` 坐标。

切线坐标值相对于父点坐标的偏移（即，值 `[0, 0]` 在传出切线处不创建曲率）。

此方法可以传递给 [`createPath()`]() 方法的 `outTangents` 参数以复制路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 | 可选。采样切线的时间（以合成秒为单位）。默认为 `time`（当前合成时间，以秒为单位）。 |

#### 返回

数字对数组的数组，四舍五入到小数点后四位

---

### PathProperty.pointOnPath()

`thisLayer.mask("Mask 1").maskPath.pointOnPath([percentage=0.5][, t=time])`

#### 描述

获取路径上任意点的 `[x, y]` 坐标。

该点表示为路径弧长的百分比。`0.0`（0%）是第一个点，`1.0`（100%）是最后一个点。当路径闭合时，0% 和 100% 将返回相同的坐标。

:::info 这意味着对于具有相同点的开放路径和闭合路径，开放路径上的百分比不会返回与闭合路径相同的坐标，因为闭合路径的长度更长。 :::| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `percentage` | 数字 | 可选。采样点的路径百分比。默认为 `0.5`（50%）。 |
| `t` | 数字 | 可选。采样路径的时间（以合成秒为单位）。默认为 `time`（当前合成时间，以秒为单位）。 |

#### 返回

数字对数组

---

### PathProperty.points()

`thisLayer.mask("Mask 1").maskPath.points([t=time])`

#### 描述

获取路径上所有点的 `x,y` 坐标。

返回的值是相对的，具体取决于上下文：

* **图层蒙版路径点**的坐标相对于图层左上角的原点。
* **贝塞尔形状路径点**的坐标相对于路径形状组的锚点
 * （例如，“Transform: Shape 1 > Anchor Point”）。
* **画笔描边路径点**的坐标相对于 **描边的起点** ；第一个点是 `[0,0]`。
 * 此方法可以传递给 [`createPath()`]() 方法的 `points` 参数以复制路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 | 可选。采样路径的时间（以合成秒为单位）。默认为 `time`（当前合成时间，以秒为单位）。 |

#### 返回

数字对数组的数组，四舍五入到小数点后四位

#### 示例

**读取 Dark Gray Solid 1 上 Mask 1 的第一个顶点的坐标并将其转换为合成坐标。**

将此应用于效果（如 Write-on 或 CC Particle Systems II）的 2D 点控制，以使效果跟踪或追踪动画蒙版的第一个点。

复制效果并更改路径点索引值（[0]）以跟踪或追踪蒙版的其他点。

```js
const myLayer = thisComp.layer("Dark Gray Solid 1");
myLayer.toComp(myLayer.mask("Mask 1").maskPath.points()[0]);
```

---

### PathProperty.tangentOnPath()

`thisLayer.mask("Mask 1").maskPath.tangentOnPath([percentage=0.5][, t=time])`

#### 描述

获取路径上任意点的传出切线手柄的 `[x, y]` 坐标。

切线坐标值相对于父点坐标的偏移（即，值 `[0, 0]` 在传出切线处不创建曲率）。如果在该弧长百分比处存在用户定义的点，则返回值将与 `outTangents()` 返回的值不同。

传入切线手柄是该值的逆（将 `[x, y]` 坐标乘以 `-1`）。

切线的父点表示为路径弧长的百分比。有关弧长百分比的详细信息，请参阅 [`pointOnPath()`]() 方法的描述。

父点坐标与 `tangentOnPath()` 坐标之间的线性距离始终为 `1`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `percentage` | 数字 | 可选。采样切线的路径百分比。默认为 `0.5`（50%）。 |
| `t` | 数字 | 可选。采样路径的时间（以合成秒为单位）。默认为 `time`（当前合成时间，以秒为单位）。 |

#### 返回

数字对数组

#### 示例

**采样切线并使其更长：**

```js
myPath.tangentOnPath() * 100
```

---

## 示例

将 Shape Layer 1 图层上 Shape 1 的 Path 1 路径的点坐标和切线坐标列表写入字符串，时间为 `time=0`。

将此应用于文本图层的源文本属性，以读取形状的坐标和传入和传出切线。

```js
let pointsList = "";
const sampleTime = 0;
const myShape = thisComp.layer("Shape Layer 1").content("Shape 1").content("Path 1").path;

for (i = 0; i < myShape.points(sampleTime).length; i++) {
 pointsList += "c: " + myShape.points(sampleTime)[i].toString() + " i: " + myShape.inTangents(sampleTime)[i].toString() + " o: " + myShape.outTangents(sampleTime)[i].toString() + "\n";
}

pointsList;
```
