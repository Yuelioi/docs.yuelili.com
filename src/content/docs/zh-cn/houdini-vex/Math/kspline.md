---
title: kspline
order: 36
---
`float  kspline(string basis, float sample_pos, float value1, float key_pos1, ...)`

通过一系列值/位置对定义的曲线进行采样。
这对于指定一维数据渐变非常有用。

`vector  kspline(string basis, float sample_pos, vector value1, float key_pos1, ...)`

`vector4  kspline(string basis, float sample_pos, vector4 value1, float key_pos1, ...)`

通过一系列向量值/位置对定义的曲线进行采样。
这对于指定颜色渐变非常有用。

如果只需要线性间隔的关键点，或者需要变化基础曲线类型，请改用[spline](/zh-cn/houdini-vex/math/spline "沿折线或样条曲线采样值。")函数。

`basis`, `bases`

这些是与渐变参数支持的相同插值方式。

`"constant"`

保持每个关键值直到下一个关键点，形成"阶梯"状曲线。

`"linear"`

用折线连接关键点。

例如，如果指定四个值：

```vex
spline("linear", t, v0, v1, v2, v3)

```

...该函数返回在sample_pos位置处橙色点的高度。

`"cubic"` (或 `"catmullrom"`, `"cspline"`)

使用Catmull-Rom样条连接点值。

注意第一个和最后一个值在采样区域外，
用于提供曲线在第二个点(采样范围起点)和倒数第二个点(采样范围终点)处的斜率。

例如，如果指定六个值：

```vex
spline("catrom", t, v0, v1, v2, v3, v4, v5)

```

...该函数返回在位置t处橙色点的高度。

(此图仅用于说明，并不显示所示点的正确曲线。)

`"linearsolve"` (或 `"solvelinear"`)

在一组非均匀位置和一组值之间进行映射。
[kspline](/zh-cn/houdini-vex/math/kspline "返回由基础曲线和键/位置对定义的曲线上的插值。")函数隐式执行此映射。

```vex
tk = spline("linearsolve", t, k0, k1, k2, k3, ...);
v = spline(basis, tk, v1, v2, v3, ...);

```

(从技术上讲，`linearsolve`将值解释为键值，求解样条的交叉点，并返回截距点。)

`"monotonecubic"`

无控制值超调的三次样条。

`"bezier"`

贝塞尔样条。

`"bspline"`

B样条基。

`"hermite"`

厄米特样条。

`sample_pos`

沿曲线采样的位置。

`valuen`, `key_posn`

要定义曲线形状，需要传递多个值/位置对来指定曲线通过的关键点。

必须按升序指定关键位置，否则结果将不可预测。

提示
[spline](/zh-cn/houdini-vex/math/spline "沿折线或样条曲线采样值。")函数是本函数更灵活的超集。

此函数等效于：

```vex
type kspline(basis, t, v0, k0, v1, k1, v2, k2...)
{
 float tk = spline("linearsolve", t, k0, k1, k2, ...);
 return spline(basis, tk, v0, v1, v2, ...);
}

```
