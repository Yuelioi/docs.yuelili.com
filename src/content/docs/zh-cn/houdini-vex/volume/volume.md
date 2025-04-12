---
title: volume
order: 1
---
| 本页内容 | * [导数选项](#derivatives-options) * [示例](#examples) |
| --- | --- |

`float  volume(vector pos, ...)`

注意
此函数依赖于VEX"知道"`pos`具有导数(`dPdu`、`dPdv`和`dPdz`)这一事实。
如果传递字面量向量而非特殊变量(如`P`)，将返回`0`，因为VEX无法访问导数。

导数选项

## derivatives-options

计算导数的函数接受额外参数以允许调整导数计算。

"`extrapolate`",
`int`
`=0`

控制导数是否在面片边界间保持"平滑"。大多数情况下应启用此选项，
若开启外推，对于C2曲面导数计算将是精确的。但当VEX变量高频变化时
(例如高频位移贴图导致P变量高频变化)，导数计算的外推可能会放大面片边界间的不连续性。

"`smooth`",
`int`
`=1`

非均匀地调整微分幅度在面片上的分布。这通常会减少
位移/纹理着色器中面片间的不连续性。但在某些特殊情况下可能需要关闭此功能。

```vex
N = computenormal(P, "extrapolate", 1, "smooth", 0);

```

示例

## examples

返回当前微体素在相机空间中的体积：

```vex
volume(P)

```

返回`0`，因为参数不是VEX已知导数的变量：

```vex
volume({0.1, 2.3, 4.5})

```
