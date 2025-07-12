---
title: 矢量数学
---
# Vector Math

矢量数学函数是全局方法，用于对数组执行操作，将其视为数学矢量。

除非另有说明，矢量数学方法对维度是宽松的，并返回与最大输入数组对象维度相同的值，缺失的元素用零填充。

与内置的 JavaScript 方法（如 `Math.sin`）不同，这些方法不使用 `Math` 前缀。

#### 示例

此表达式返回 `[11, 22, 3]`：

```js
add([10, 20], [1, 2, 3])
```

---

## 函数

### add()

`add(vec1, vec2)`

#### 描述

将两个矢量相加。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `vec1` | Array | 要相加的第一个矢量。 |
| `vec2` | Array | 要相加的第二个矢量。 |

#### 返回

Array

---

### clamp()

`clamp(value, limit1, limit2)`

#### 描述

将 `value` 的每个分量限制在 `limit1` 和 `limit2` 的对应值之间。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `value` | Number or Array | 要限制的值。 |
| `limit1` | Number or Array | 限制 `value` 的最小值。 |
| `limit2` | Number or Array | 限制 `value` 的最大值。 |

#### 返回

Number or Array

#### 示例

确保抖动值始终在 0-100 范围内：

```js
const wiggled = wiggle(0.5, 500);
clamp(wiggled, 0, 500);
```

---

### cross()

`cross(vec1, vec2)`

#### 描述

返回 `vec1` 和 `vec2` 的矢量叉积。

有关更多信息，请参阅数学参考或 JavaScript 指南。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `vec1` | Array (2- or 3-dimensional) | 要计算叉积的第一个矢量。 |
| `vec2` | Array (2- or 3-dimensional) | 要计算叉积的第二个矢量。 |

#### 返回

Array (2- or 3-dimensional)

---

### div()

`div(vec, amount)`

#### 描述

将矢量的每个元素除以 `amount`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `vec` | Array | 要除以的矢量。 |
| `amount` | Number | 要除以的值。 |

#### 返回

Array

---

### dot()

`dot(vec1, vec2)`

#### 描述

返回矢量参数的点积（内积）。

#### 参数

| 参数 | Type | 描述 |
| --- | --- | --- |
| `vec1` | Array | 要计算点积的第一个矢量。 |
| `vec2` | Array | 要计算点积的第二个矢量。 |

#### 返回

Number

---

### length()

`length(vec[, point2])`

#### 描述

返回矢量 `vec` 的长度。

如果提供了第二个参数，则将第一个参数视为点，并返回两点之间的距离。

:::tip
使用带有两个参数的 `length()` 等同于 `length(sub(vec, point2))`。
:::

#### 参数

| 参数 | Type | 描述 |
| --- | --- | --- |
| `vec` | Array | 要归一化的矢量，或要测量的第一个点。 |
| `point2` | Array | 可选。要测量的第二个点。 |

#### 返回

Number

#### 示例

例如，将此表达式添加到摄像机的焦点距离属性，以将焦平面锁定到摄像机的兴趣点，从而使兴趣点保持清晰：

```js
length(position, pointOfInterest)
```

---

### lookAt()

`lookAt(fromPoint, atPoint)`

#### 描述

使图层从 `fromPoint` 看向 `atPoint`。

返回值可用作 Orientation 属性的表达式，使图层的 z 轴指向 `atPoint`。

此方法特别适用于摄像机和灯光。

:::
tip 如果在摄像机上使用此表达式，请关闭自动定向。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `fromPoint` | Array (3-dimensional) | 要定向的图层的位置（在世界空间中）。 |
| `atPoint` | Array (3-dimensional) | 要指向的点（在世界空间中）。 |

#### 返回

Array (3-dimensional)

#### 示例

将此表达式应用于聚光灯的 Orientation 属性，使灯光指向同一合成中编号为 1 的图层的锚点：

```js
lookAt(position, thisComp.layer(1).position)
```

---

### mul()

`mul(vec, amount)`

#### 描述

将矢量的每个元素乘以 `amount`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `vec` | Array | 要乘以的矢量。 |
| `amount` | Number | 要乘以的值。 |

#### 返回

Array

---

### normalize()

`normalize(vec)`

#### 描述

归一化矢量，使其长度为 `1.0`。

使用 `normalize` 方法是执行 `div(vec, length(vec))` 操作的简写方式。

#### 参数

| 参数 | Type | 描述 |
| --- | --- | --- |
| `vec` | Array | 要归一化的矢量。 |

#### 返回

Array

---

### sub()

`sub(vec1, vec2)`

#### 描述

减去两个矢量。

#### 参数

| 参数 | Type | 描述 |
| --- | --- | --- |
| `vec1` | Array | 第一个矢量。 |
| `vec2` | Array | 第二个矢量。 |

#### 返回

Array
