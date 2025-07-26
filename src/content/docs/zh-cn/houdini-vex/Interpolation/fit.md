---
title: fit
order: 5
---
`float  fit(float value, float omin, float omax, float nmin, float nmax)`

`<vector> fit(<vector>value, <vector>omin, <vector>omax, <vector>nmin, <vector>nmax)`

将处于范围 (omin, omax) 内的值转换到新范围 (nmin, nmax) 对应的值。

该函数在转换前会将给定值限制在 (omin, omax) 范围内，因此结果值保证在 (nmin, nmax) 范围内。若要避免限制，请改用 [efit](/zh-cn/houdini-vex/interpolation/efit "将处于某一范围内的值转换到新范围对应的值")。

## 示例

```vex
fit(.3, 0, 1, 10, 20) == 13

```
