---
title: interpolate
order: 39
---
`float  interpolate(float val, float sx, float sy)`

`vector  interpolate(vector val, float sx, float sy)`

`vector4  interpolate(vector4 val, float sx, float sy)`

`bsdf  interpolate(bsdf val, float sx, float sy)`

这些操作可用于在微多边形渲染引擎中生成抗锯齿位置。

`sx` 和 `sy` 是随机值，例如由 [nextsample](/zh-cn/houdini-vex/sampling/nextsample) 生成的。不同的 `sx` 和 `sy` 值会转换为微多边形上的不同随机位置。

在光线追踪引擎中返回值是未定义的。

```vex
vector hitP = interpolate(P, sx, sy);

```
