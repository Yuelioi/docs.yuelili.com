---
title: gradient
order: 35
---
| 本页内容 | * [导数选项](#derivatives-options) * [示例](#examples) |
| --- | --- |

`vector  gradient(float val, ...)`

`vector  gradient(vector P, float val, ...)`

该方法通过给定位置(`Du`、`Dv`和`Dw`)的偏导数来计算体积场的导数。如果未提供位置参数，在着色上下文中默认使用`P`。如果只定义了`Du`和`Dv`，导数将与渲染表面相切。
导数选项

## derivatives-options

计算导数的函数可接受额外参数来调整导数计算方式。

"`extrapolate`",
`int`
`=0`

控制导数是否在面片边界"平滑"过渡。多数情况下应启用此选项，若开启外推，对C2连续曲面导数计算将更精确。但当VEX变量高频变化时(例如高频位移贴图导致P变量高频变化)，导数计算的外推可能加剧面片边界的不连续性。

"`smooth`",
`int`
`=1`

非均匀调整面片上微分量的幅值。通常可减少位移/纹理着色器中面片间的不连续性。但在某些特殊情况下可能需要关闭此功能。

```vex
N = computenormal(P, "extrapolate", 1, "smooth", 0);

```

示例

## examples

返回密度场的梯度：

```vex
surface test_grad(float density = 0)
{
Cf = gradient(density);
}

```
