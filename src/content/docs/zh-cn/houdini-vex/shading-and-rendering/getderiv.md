---
title: getderiv
order: 12
---
| 本页内容 | * [导数选项](#derivatives-options) * [示例](#examples) |
| --- | --- |
| 上下文 | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [light](../contexts/light.html)  [shadow](../contexts/shadow.html)  [surface](../contexts/surface.html) |

`void  getderiv(float attr, string attrName, int isVertexAttr, float s, float t, float &du, float &dv, ...)`

`void  getderiv(<vector>attr, string attrName, int isVertexAttr, float s, float t, <vector>&du, <vector>&dv, ...)`

注意
如果对多边形网格查询导数，系统会将其内部采样为细分曲面。

`attr`

属性值。

`attrName`

要计算的属性名称。

`isVertexAttr`

设置为`1`表示该属性是顶点类型。

`s`

参数化S着色值。应从全局变量`s`传入。

`t`

参数化<type>着色值。应从全局变量`t`传入。

`du`

属性在U方向的导数。

`dv`

属性在V方向的导数。

导数选项

## derivatives-options

计算导数的函数接受额外参数以允许调整导数计算方式。

"`extrapolate`"，
`int`
`=0`

是否在面片边界保持导数"平滑"。在大多数情况下应启用此选项，如果开启外推，对于C2连续曲面导数计算将是精确的。但当VEX变量高频变化时（例如高频位移贴图导致P变量高频变化），导数计算的外推可能会加剧面片边界的不连续性。

"`smooth`"，
`int`
`=1`

非均匀调整面片上微分量的幅度。这通常会减少位移/纹理着色器中面片的不连续性。但在某些特殊情况下可能需要关闭此功能。

```vex
N = computenormal(P, "extrapolate", 1, "smooth", 0);

```

示例

## examples

```vex
// 获取点属性'N'的导数
vector dNdu, dNdv;
getderiv(N, "N", 0, s, t, dNdu, dNdv);

```
