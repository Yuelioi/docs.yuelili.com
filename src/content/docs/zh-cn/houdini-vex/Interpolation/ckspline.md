---
title: ckspline
order: 1
---

要使用均匀间隔的值键指定曲线，请使用[cspline](/zh-cn/houdini-vex/interpolation/cspline "采样由均匀间隔键定义的Catmull-Rom（Cardinal）样条")。

`float  ckspline(float t, float value, float pos, ...)`

`vector  ckspline(float t, vector value, float pos, ...)`

`vector4  ckspline(float t, vector4 value, float pos, ...)`

`t`

沿样条采样的位置。

`value`, `pos`, `...`

一系列键值和位置对，用于定义要采样的曲线。

返回值

曲线在位置`t`处的插值。

计算指定关键点之间的Catmull-Rom（Cardinal）样条。值根据给定的键进行间隔排列。插值器(t)的定义域应在第二个和倒数第二个指定键值之间。键应按升序指定，否则结果将不可预测。

由于Cardinal样条的特性，与第一个和最后一个键关联的值永远不会被返回。然而，这些键用于确定曲线入口和出口的形状。例如：

## 示例

在位置`t`处沿曲线查找值

```vex
Cf = ckspline(t,
 {1,1,1}, -0.25, // 第一个键
 {.5,.5,.5}, 0.0, // 第二个键
 {.5, 0,.5}, 0.25, // 第三个键
 {0,0,.8}, 1.0, // 第四个键
 {0,0,0}, 1.25 // 第五个键
);

```

由上述键定义的Catmull-Rom样条的有效插值范围是0到1。第一个和最后一个键仅用于确定曲线在第二个和倒数第二个键处的斜率。
