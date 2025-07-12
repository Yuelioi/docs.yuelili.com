---
title: getsmoothp
order: 33
---

| 本页内容 | * [可变参数](#variadic-arguments) * [示例](#examples) |
| --- | --- |
| 上下文 | [着色](../contexts/shading.html) |

基于平滑函数返回修改后的表面位置。

`int  getsmoothP(vector &smoothP, vector ray_origin, ...)`

用修改后的表面位置覆盖 `smoothP` 变量。
此函数仅对某些图元类型（如多边形）有意义。

`vector  getsmoothP(...)`

使用全局变量 `Eye` 和 `I` 来填充光线起点和方向。

可变参数

## variadic-arguments

"style",
`string`

`none`

无平滑。

`shadow`

应用适合消除多边形阴影终止问题的平滑函数。

示例

## examples

```vex
shadow
fastshadow()
{
 vector surfP;
 if (!getsmoothP(surfP, Eye, I))
 surfP = Ps; // 设置为 Ps（表面位置）变量
 vector shad = trace(surfP, normalize(L), Time, "raystyle", "shadow");
 Cl *= ({1,1,1} - shad);
}
```
