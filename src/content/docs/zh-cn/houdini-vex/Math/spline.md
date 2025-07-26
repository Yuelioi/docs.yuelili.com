---
title: spline
order: 79
---
`float  spline(string basis, float sample_pos, float value1, ...)`

`vector  spline(string basis, float sample_pos, vector value1, ...)`

`vector4  spline(string basis, float sample_pos, vector4 value1, ...)`

此版本对所有关键点使用单一基础类型，并将（线性间隔的）关键值作为可变参数传入。

`float  spline(string basis, float sample_pos, float values[], ...)`

`vector  spline(string basis, float sample_pos, vector values[], ...)`

`vector4  spline(string basis, float sample_pos, vector4 values[], ...)`

此版本对所有关键点使用单一基础类型，并将（线性间隔的）关键值以数组形式传入。

`float  spline(string bases[], float sample_pos, float values[], ...)`

`vector  spline(string bases[], float sample_pos, vector values[], ...)`

`vector4  spline(string bases[], float sample_pos, vector4 values[], ...)`

此版本使用数组指定每对关键点之间的基础类型，并将（线性间隔的）关键值以数组形式传入。

`float  spline(string bases[], float sample_pos, float values[], float positions[], ...)`

`vector  spline(string bases[], float sample_pos, vector values[], float positions[], ...)`

`vector4  spline(string bases[], float sample_pos, vector4 values[], float positions[], ...)`

此版本使用数组指定每对关键点之间的基础类型，以及关键值数组和关键位置数组。

这些形式接受一个指定关键点间插值基础的字符串数组、关键值数组和关键位置数组。
即使关键位置非均匀分布（即间距不等），当相邻区段使用相同基础类型时，它们能确保插值曲线在控制点（关键点）处保持平滑（切线连续）。

`basis`, `bases`

这些是与渐变参数相同的插值类型。

`"constant"`

保持每个关键值直到下一个关键点，形成"阶梯"状曲线。

`"linear"`

用折线连接关键点。

例如，指定四个值时：

```vex
spline("linear", t, v0, v1, v2, v3)

```

...函数返回在sample_pos位置处橙色点的高度值。

`"cubic"` (或 `"catmullrom"`, `"cspline"`)

使用Catmull-Rom样条连接点值。

注意第一个和最后一个值位于采样区域外，用于提供曲线在第二个点（采样范围起点）和倒数第二个点（采样范围终点）处的斜率。

例如，指定六个值时：

```vex
spline("catrom", t, v0, v1, v2, v3, v4, v5)

```

...函数返回在位置t处橙色点的高度值。

（此图仅为示意，未显示所示点的正确曲线。）

`"linearsolve"` (或 `"solvelinear"`)

在非均匀位置集合与值集合之间建立映射。[kspline](/zh-cn/houdini-vex/math/kspline "返回由基础和键/位置对定义的曲线上的插值。")函数隐式实现了这种映射。

```vex
tk = spline("linearsolve", t, k0, k1, k2, k3, ...);
v = spline(basis, tk, v1, v2, v3, ...);

```

（技术上，`linearsolve`将值解释为关键值，求解样条交点并返回截距点。）

`"monotonecubic"`

无控制值超调的三次样条。

`"bezier"`

贝塞尔样条。

`"bspline"`

B样条基础。

`"hermite"`

埃尔米特样条。

`sample_pos`

在曲线上采样的位置。

返回值

在sample_pos位置处沿折线或三次样条的值。

注意
对于B样条基础，此函数隐式假设B样条曲线端点的重数为3，即使给定的控制点和节点没有显式重复。这确保曲线通过端点控制点，使得创建具有混合插值基础（例如被线性插值区段包围的B样条基础区段）的连续渐变曲线更加容易。
