---
title: efit
order: 4
---

`float  efit(float value, float omin, float omax, float nmin, float nmax)`

将处于范围(omin, omax)内的值转换到新范围(nmin, nmax)中的对应值。
与[fit](/zh-cn/houdini-vex/interpolation/fit "将某个范围内的值转换到新范围中的对应值")不同，此函数不会将值限制在给定范围内。

`<vector> efit(<vector>value, <vector>omin, <vector>omax, <vector>nmin, <vector>nmax)`

`<vector> efit(<vector>value, <vector>omin, <vector>omax, float nmin, float nmax)`

向量版本会按分量进行拟合。您可以使用向量指定每个分量的最小/最大值，或使用浮点数指定统一的最小/最大值。

## 示例

```vex
efit(.3, 0, 1, 10, 20) == 13

```
