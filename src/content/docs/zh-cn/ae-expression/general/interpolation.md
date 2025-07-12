---
title: 插值
---
# Interpolation

对于所有插值方法，参数 `t` 通常是 `time`（时间）或 `value`（值），但它也可以是其他值。如果 `t` 是 `time`，则值之间的插值会在一段时间内发生。如果 `t` 是 `value`，则表达式会将一个值范围映射到一个新的值范围。

所有插值方法还可以用于将一个值范围转换为另一个值范围。

Chris 和 Trish Meyer 在 [ProVideo Coalition 网站](http://provideocoalition.com/index.php/cmg_keyframes/story/deeper_modes_of_expression_part_2_interpolation_methods/) 的文章中提供了关于这些方法的更多信息和示例。

Ian Haigh 在 [After Effects Scripts 网站](http://aescripts.com/ease-and-wizz/) 上提供了一个脚本，你可以使用它轻松地将高级插值方法（如弹跳效果）应用到属性上。

---

## 函数

### linear(t, tMin, tMax, value1, value2)

`linear(t, tMin, tMax, value1, value2)`

#### 描述

当 `t <= tMin` 时返回 `value1`。
当 `t >= tMax` 时返回 `value2`。
当 `tMin < t < tMax` 时，返回 `value1` 和 `value2` 之间的线性插值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 | 插值驱动器 |
| `tMin` | 数字 | 最小值 |
| `tMax` | 数字 | 最大值 |
| `value1` | 数字或数组 | 插值起始值 |
| `value2` | 数字或数组 | 插值结束值 |

#### 返回

数字数组

#### 示例

此表达式作用于不透明度（Opacity）属性，在 `0` 秒到 `6` 秒的时间范围内，令不透明度值从 `20%` 线性过渡到 `80%`：

```js
linear(time, 0, 6, 20, 80)
```

此表达式作用于不透明度（Opacity）属性，将不透明度值从 `0%` 到 `100%` 的范围转换为 `20%` 到 `80%` 的范围：

```js
linear(value, 0, 100, 20, 80)
```

---

### linear(t, value1, value2)

`linear(t, value1, value2)`

#### 描述

返回一个值，随着 `t` 从 `0` 变到 `1`，该值在 `value1` 和 `value2` 之间进行线性插值。当 `t <= 0` 时返回 `value1`，当 `t >= 1` 时返回 `value2`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 | 插值驱动器 |
| `value1` | 数字或数组 | 插值起始值 |
| `value2` | 数字或数组 | 插值结束值 |

#### 返回

数字或数组

---

### ease(t, tMin, tMax, value1, value2)

`ease(t, tMin, tMax, value1, value2)`

#### 描述

与线性插值相似，使用相同的参数，但插值过程会在开始和结束点进行缓动（ease in and out），使得速度在起始点和结束点时为 `0`。此方法产生平滑的动画效果。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 | 插值驱动器 |
| `tMin` | 数字 | 最小驱动值 |
| `tMax` | 数字 | 最大驱动值 |
| `value1` | 数字或数组 | 插值起始值 |
| `value2` | 数字或数组 | 插值结束值 |

#### 返回

数字或数组

---

### ease(t, value1, value2)

`ease(t, value1, value2)`

#### 描述

与线性插值相似，使用相同的参数，但插值过程会在开始和结束点进行缓动（ease in and out），使得速度在起始点和结束点时为 `0`。此方法产生平滑的动画效果。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 | 插值驱动器 |
| `value1` | 数字或数组 | 插值起始值 |
| `value2` | 数字或数组 | 插值结束值 |

#### 返回

数字或数组

---

### easeIn(t, tMin, tMax, value1, value2)

`easeIn(t, tMin, tMax, value1, value2)`

#### 描述

与 `ease` 相似，区别在于切线在 `tMin` 侧为 `0`，并且在 `tMax` 侧插值为线性。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 | 插值驱动器 |
| `tMin` | 数字 | 最小驱动值 |
| `tMax` | 数字 | 最大驱动值 |
| `value1` | 数字或数组 | 插值起始值 |
| `value2` | 数字或数组 | 插值结束值 |

#### 返回

数字或数组

---

### easeIn(t, value1, value2)

`easeIn(t, value1, value2)`

#### 描述

与 `ease` 相似，区别在于切线在 `value1` 侧为 `0`，并且在 `value2` 侧插值为线性。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 | 插值驱动器 |
| `value1` | 数字或数组 | 插值起始值 |
| `value2` | 数字或数组 | 插值结束值 |

#### 返回

数字或数组

---

### easeOut(t, tMin, tMax, value1, value2)

`easeOut(t, tMin, tMax, value1, value2)`

#### 描述

与 `ease` 相似，区别在于切线在 `tMax` 侧为 `0`，并且在 `tMin` 侧插值为线性。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 | 插值驱动器 |
| `tMin` | 数字 | 最小驱动值 |
| `tMax` | 数字 | 最大驱动值 |
| `value1` | 数字或数组 | 插值起始值 |
| `value2` | 数字或数组 | 插值结束值 |

#### 返回

数字或数组

---

### easeOut(t, value1, value2)

`easeOut(t, value1, value2)`

#### 描述

与 `ease` 相似，区别在于切线在 `value2` 侧为 `0`，并且在 `value1` 侧插值为线性。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 | 插值驱动器 |
| `value1` | 数字或数组 | 插值起始值 |
| `value2` | 数字或数组 | 插值结束值 |

#### 返回

数字或数组
