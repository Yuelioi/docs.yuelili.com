---
title: dw
order: 3
---
`float  Dw(float p, ...)`

`vector  Dw(vector p, ...)`

`vector4  Dw(vector4 p, ...)`

返回值

返回`p`相对于W的导数。

在渲染表面时，此函数返回0。

在着色上下文中，这是变量在着色体积上的变化量。
导数选项

## 导数选项

计算导数的函数接受额外参数以允许调整导数计算。

"`extrapolate`",
`int`
`=0`

是否在面片边界间保持导数"平滑"。在大多数情况下这是正确的，如果启用外推，对于C2曲面导数计算应该是精确的。然而当VEX变量高频变化时（例如高频位移贴图导致P变量高频变化），导数计算的外推可能会加剧面片边界间的不连续性。

"`smooth`",
`int`
`=1`

非均匀地调整面片上微分的幅度。这通常会减少位移/纹理着色器中的面片不连续性。但在某些特殊情况下，您可能需要关闭此功能。

```vex
N = computenormal(P, "extrapolate", 1, "smooth", 0);

```
