---
title: cspline
order: 3
---

要使用非均匀间隔的关键点指定曲线，请使用[ckspline](/zh-cn/houdini-vex/interpolation/ckspline "对由位置/值关键点定义的Catmull-Rom（Cardinal）样条进行采样")。

`float  cspline(float t, float val1, ...)`

`vector  cspline(float t, vector val1, ...)`

`vector4  cspline(float t, vector4 val1, ...)`

`t`

要采样的样条曲线上的位置。

`val1`, `val2`, `...`

一系列关键值。假设这些关键点在0到1范围内均匀分布。

返回值

在曲线`t`位置处的插值。

计算指定关键点之间的Catmull-Rom（Cardinal）样条曲线。

由于Cardinal样条的特性，与第一个和最后一个关键点关联的值永远不会被返回。然而，这些关键点用于确定曲线入口和出口的形状。
