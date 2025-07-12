---
title: volumesmoothsamplev
order: 21
---
`vector  volumesmoothsamplev(<geometry>geometry, int primnum, vector pos)`

`vector  volumesmoothsamplev(<geometry>geometry, string volumename, vector pos)`

`vector  volumesmoothsamplev(<geometry>geometry, int primnum, vector pos, matrix3 &grad)`

`vector  volumesmoothsamplev(<geometry>geometry, string volumename, vector pos, matrix3 &grad)`

`vector  volumesmoothsamplev(<geometry>geometry, int primnum, vector pos, matrix3 &grad, matrix3 &hessX, matrix3 &hessY, matrix3 &hessZ)`

`vector  volumesmoothsamplev(<geometry>geometry, string volumename, vector pos, matrix3 &grad, matrix3 &hessX, matrix3 &hessY, matrix3 &hessZ)`

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如 `.bgeo`）的字符串。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 引用。

返回值

在给定位置处体积图元的采样值。体素之间的值通过平滑插值计算。

`grad` 是一个矩阵，其第 i 列是体积第 i 个分量的梯度。

矩阵 `hessX`、`hessY`、`hessZ` 分别是 x、y 和 z 分量的二阶导数。

如果 `primnum` 或 `inputnum` 超出范围、几何体无效，或给定图元不是体积或 VDB 图元，则返回 0。

## 示例

使用点 `P` 处的体积值来近似计算点 `P + u` 处的体积值。

```vex
vector P = {1.0, 2.0, 3.0};
matrix3 grad, hessX, hessY, hessZ;
vector val1 = volumesmoothsamplev(0, "vel", P, grad, hessX, hessY, hessZ);

vector u = {0.1, 0.01, 0.001};
vector val2 = volumesmoothsamplev(0, "vel", P + u);

// 根据泰勒展开式，我们有：
// `val1 + u * grad` 约等于 `val2`

// 二阶近似：
// `val1 + u * grad + 0.5 * set(dot(u, u*hessX), dot(u, u*hessY), dot(u, u*hessZ))`
// 约等于 `val2`

```
