---
title: computenormal
order: 1
---
`vector  computenormal(vector P, ...)`

在着色上下文中，通过计算位置P的导数叉积来获取法线。

`vector  computenormal(vector P, vector N, vector Ng, ...)`

在着色上下文中，通过计算位置P的导数叉积来获取法线。
N表示原始表面法线，Ng表示几何法线。
此版本会对计算出的法线进行"调整"，使插值法线保持相对正确。

`void  computenormal(int i)`

(已弃用) 在SOP上下文中，设置当`P`或`N`变化时是否应重新计算法线的提示(0=从不，1=自动，2=总是)。

导数选项

## 导数选项

计算导数的函数接受额外参数以调整导数计算方式。

"`extrapolate`",
`int`
`=0`

控制导数是否在面片边界处保持"平滑"。
大多数情况下应启用此选项，若开启外推，对于C2连续曲面导数计算将是精确的。
但当VEX变量高频变化时(例如高频位移贴图导致P变量高频变化)，导数计算的外推可能会放大面片边界处的不连续性。

"`smooth`",
`int`
`=1`

非均匀调整面片上的微分幅度。
这通常会减少位移/纹理着色器中面片间的不连续性。
但在某些特殊情况下可能需要关闭此功能。

```vex
N = computenormal(P, "extrapolate", 1, "smooth", 0);

```
