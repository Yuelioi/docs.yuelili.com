---
title: interpolation
---
# Interpolation

For all the Interpolation methods, the argument `t` is often `time` or `value`, though it can have other values, instead. If `t` is `time`, the interpolation between values happens over a duration. If `t` is `value`, then the expression maps one range of values to a new range of values.

All the Interpolation methods can also be used to convert from one range of values to another.

Chris and Trish Meyer provide additional information and examples for these methods in an article on the [ProVideo Coalition website](http://provideocoalition.com/index.php/cmg_keyframes/story/deeper_modes_of_expression_part_2_interpolation_methods/).

Ian Haigh provides a script on [After Effects Scripts website](http://aescripts.com/ease-and-wizz/) that you can use to easily apply advanced interpolation method expressions—such as bounces—to properties.

---

## Methods

### linear(t, tMin, tMax, value1, value2)

`linear(t, tMin, tMax, value1, value2)`

#### Description

Returns `value1` when `t <= tMin`. Returns `value2` when `t >= tMax`. Returns a linear interpolation between `value1` and `value2` when `tMin < t < tMax`.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `t` | Number | Interpolation Driver |
| `tMin` | Number | Minimum driver value |
| `tMax` | Number | Maximum driver value |
| `value1` | Number or Array | Value to interpolate from |
| `value2` | Number or Array | Value to interpolate to |

#### Returns

Number or Array

#### Example

This expression on the Opacity property causes Opacity values to ramp linearly from `20%` to `80%` over the time from `0` seconds to `6` seconds:

```js
linear(time, 0, 6, 20, 80)
```

This expression on the Opacity property converts the Opacity values from the range `0%`-`100%` to the range `20%`-`80%`:

```js
linear(value, 0, 100, 20, 80)
```

---

### linear(t, value1, value2)

`linear(t, value1, value2)`

#### Description

Returns a value that linearly interpolates from `value1` to `value2` as `t` ranges from `0` to `1`. Returns `value1` when `t <= 0`. Returns `value2` when `t >= 1`.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `t` | Number | Interpolation Driver |
| `value1` | Number or Array | Value to interpolate from |
| `value2` | Number or Array | Value to interpolate to |

#### Returns

Number or Array

---

### ease(t, tMin, tMax, value1, value2)

`ease(t, tMin, tMax, value1, value2)`

#### Description

Similar to linear with the same arguments, except that the interpolation eases in and out so that the velocity is `0` at the start and end points. This method results in a smooth animation.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `t` | Number | Interpolation Driver |
| `tMin` | Number | Minimum driver value |
| `tMax` | Number | Maximum driver value |
| `value1` | Number or Array | Value to interpolate from |
| `value2` | Number or Array | Value to interpolate to |

#### Returns

Number or Array

---

### ease(t, value1, value2)

`ease(t, value1, value2)`

#### Description

Similar to linear with the same arguments, except that the interpolation eases in and out so that the velocity is `0` at the start and end points. This method results in a smooth animation.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `t` | Number | Interpolation Driver |
| `value1` | Number or Array | Value to interpolate from |
| `value2` | Number or Array | Value to interpolate to |

#### Returns

Number or Array

---

### easeIn(t, tMin, tMax, value1, value2)

`easeIn(t, tMin, tMax, value1, value2)`

#### Description

Similar to ease, except that the tangent is `0` only on the `tMin` side and interpolation is `linear` on the `tMax` side.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `t` | Number | Interpolation Driver |
| `tMin` | Number | Minimum driver value |
| `tMax` | Number | Maximum driver value |
| `value1` | Number or Array | Value to interpolate from |
| `value2` | Number or Array | Value to interpolate to |

#### Returns

Number or Array

---

### easeIn(t, value1, value2)

`easeIn(t, value1, value2)`

#### Description

Similar to ease, except that the tangent is `0` only on the `value1` side and interpolation is `linear` on the `value2` side.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `t` | Number | Interpolation Driver |
| `value1` | Number or Array | Value to interpolate from |
| `value2` | Number or Array | Value to interpolate to |

#### Returns

Number or Array

---

### easeOut(t, tMin, tMax, value1, value2)

`easeOut(t, tMin, tMax, value1, value2)`

#### Description

Similar to ease, except that the tangent is `0` only on the `tMax` side and interpolation is `linear` on the `tMin` side.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `t` | Number | Interpolation Driver |
| `tMin` | Number | Minimum driver value |
| `tMax` | Number | Maximum driver value |
| `value1` | Number or Array | Value to interpolate from |
| `value2` | Number or Array | Value to interpolate to |

#### Returns

Number or Array

---

### easeOut(t, value1, value2)

`easeOut(t, value1, value2)`

#### Description

Similar to ease, except that the tangent is `0` only on the `value2` side and interpolation is `linear` on the `value1` side.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `t` | Number | Interpolation Driver |
| `value1` | Number or Array | Value to interpolate from |
| `value2` | Number or Array | Value to interpolate to |

#### Returns

Number or Array
