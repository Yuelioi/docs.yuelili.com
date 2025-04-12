---
title: chrampderiv
order: 15
---
| 始于版本 | 18.0 |
| --- | --- |

`float  chrampderiv(string channel, float ramppos)`

`float  chrampderiv(string channel, float ramppos, float time)`

`vector  chrampderiv(string channel, float ramppos)`

`vector  chrampderiv(string channel, float ramppos, float time)`

计算参数相对于位置的导数。

ramppos 表示在渐变上的求值位置，该值会被限制在 `[0,1]` 范围内。

如果渐变是动态变化的，可以使用 time 参数来指定非当前时间的求值时刻。
注意：这里的导数不是相对于时间的导数。
