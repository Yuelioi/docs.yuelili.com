---
title: 随机数
---
# random numbers

这些条目处理表达式中的随机性。

:::note
[wiggle()](../../objects/property#wiggle) 方法—用于随机地变化属性值—属于 [Property](../../objects/property) 属性和方法类别。
:::

---

## 函数

### gaussRandom()

`gaussRandom([maxValOrArray=1])`

#### 描述

当 `maxValOrArray` 是数字时，此方法返回一个随机数。大约 `90%` 的结果位于 `0` 到 `maxValOrArray` 范围内，剩余的 `10%` 超出此范围。

当 `maxValOrArray` 是数组时，此方法返回一个随机值的数组，数组的维度与 `maxValOrArray` 相同。`90%` 的值在 `0` 到 `maxValOrArray` 的范围内，剩余的 `10%` 超出此范围。

结果遵循高斯（钟形）分布。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `maxValOrArray` | 数字或数组 | 可选。生成一个随机数的最大值（或数组），默认值为 `1`。 |

#### 返回

数字或数组

---

### gaussRandom(minValOrArray, maxValOrArray)

`gaussRandom(minValOrArray, maxValOrArray)`

#### 描述

如果 `minValOrArray` 和 `maxValOrArray` 是数字，此方法返回一个随机数。大约 `90%` 的结果在 `minValOrArray` 到 `maxValOrArray` 的范围内，剩余的 `10%` 超出此范围。

如果参数是数组，则此方法返回一个与参数中维度较大者维度相同的随机数数组。每个组件的大约 `90%` 的结果位于从 `minValOrArray` 到 `maxValOrArray` 对应组件的范围内，剩余的 `10%` 超出此范围。

结果遵循高斯（钟形）分布。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `minValOrArray` | 数字或数组 | 要生成随机数的最小值（或数组）。 |
| `maxValOrArray` | 数字或数组 | 要生成随机数的最大值（或数组）。 |

#### 返回

数字或数组

---

### noise(valOrArray)

`noise(valOrArray)`

#### 描述

返回一个范围在 `-1` 到 `1` 之间的数字。

噪声实际上不是随机的；它基于 Perlin 噪声，这意味着对于两个相近的输入值，返回值也往往接近。

这种噪声在你需要一系列看似随机的数字，而这些数字之间不会有剧烈波动时特别有用—例如在动画中模拟看似随机的自然运动。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `valOrArray` | 数字或数组（2维或3维） | 用于生成随机数的输入值（或数组）。 |

#### 返回

数字

#### 示例

```js
rotation + 360*noise(time)
```

---

### random()

`random([maxValOrArray=1])`

#### 描述

如果 `maxValOrArray` 是数字，此方法返回一个在 `0` 到 `maxValOrArray` 之间的数字。

如果 `maxValOrArray` 是数组，此方法返回一个数组，数组的维度与 `maxValOrArray` 相同，每个组件的值都在 `0` 到 `maxValOrArray` 对应组件的范围之间。

:::note
在 After Effects CC 和 CS6 中，`random()` 的行为已更改，使得当图层 ID 接近时，生成的随机性更强。`wiggle()` 表达式不受影响�
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `maxValOrArray` | Number or Array | 可选。生成一个随机数的最大值（或数组），默认值为 `1` |

#### 返回

Number or Array

---

### random(minValOrArray, maxValOrArray)

`random(minValOrArray, maxValOrArray)`

#### 描述

如果 `minValOrArray` 和 `maxValOrArray` 是数字，此方法返回一个在 `minValOrArray` 到 `maxValOrArray` 之间的数字。

如果参数是数组，则此方法返回一个数组，数组的维度与较大维度的数组相同，每个组件的值位于从 `minValOrArray` 到 `maxValOrArray` 对应组件的范围内。

例如，表达式 `random([100, 200], [300, 400])` 返回一个数组，其第一个值在 `100–300` 范围内，第二个值在 `200–400` 范围内。如果两个输入数组的维度不匹配，较短数组的高维度值将填充为零。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `minValOrArray` | Number or Array | 要生成随机数的最小值（或数组） |
| `maxValOrArray` | Number or Array | 要生成随机数的最大值（或数组) |

#### 返回

Number or Array

---

### seedRandom()

`seedRandom(offset[, timeless=false])`

#### 描述

`random()` 和 `gaussRandom()` 方法使用一个种子值来控制数字序列。

默认情况下，种子值是唯一图层标识符、图层中的属性、当前时间和 `0` 的偏移量的函数。

调用 `seedRandom()` 设置偏移量为 `0` 以外的值，以创建不同的随机序列。

此示例中 `100` 的乘法将 `random()` 方法返回的 `0–1` 范围的值转换为 `0–100` 范围的数字；这个范围对于 Opacity 属性非常有用，因为它的值从 `0%` 到 `100%`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `offset` | Number | 用于偏移种子的值。这也控制[`wiggle()`](../../objects/property#wiggle) 函数的初始值 |
| `timeless` | Boolean | 可选。若 `timeless` 为 `true`，则不使用当前时间作为随机种子的输入。这样可以生成一个与时间无关的随机数。默认值为 `false` |

#### 返回

None

#### 示例

此表达式将 Opacity 属性值设置为一个与时间无关的随机值：

```js
seedRandom(123456, true);
random()*100
```
