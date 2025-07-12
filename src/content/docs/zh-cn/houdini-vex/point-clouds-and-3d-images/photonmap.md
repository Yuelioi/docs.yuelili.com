---
title: photonmap
order: 35
---

| 本页内容 | * [可变参数](#variadic-arguments) * [示例](#examples) |
| --- | --- |

`vector  photonmap(string mapname, vector position, vector normal, ...)`

`void  photonmap(string mapname, vector position, vector normal, vector &color, float &area, ...)`

可变参数

## variadic-arguments

您可以指定额外的关键字-值参数对来设置评估行为。这些参数必须在加载时定义（字面量或参数）。

要指定额外参数，请将关键字作为字符串传递，下一个参数是该关键字的值。例如 `..., "wrap", "clamp", "border", {.1,1,1})`。

| 关键字 | 类型 | 值 |
| --- | --- | --- |
| `"nphotons"` | `int` | 用于生成最终颜色的最大光子过滤数量。默认值为 `50`。 |
| `"type"` | `string` | 如何解释光子。<br>`"diffuse"`（默认值）<br>    根据朗伯余弦定律缩放每个光子。<br>`"irradiance"`<br>    使用每个光子的原始能量而不进行过滤。 |
| `"error"` | `float` | 评估中允许的误差量。较大的数值会导致评估精度降低（即扫描贴图的较小区域），而较小的数值会导致扫描贴图的较大区域。渲染时间随着误差容限的降低而增加。默认值为 `0.001`。 |
| `"filter"` | `string` | 指定从光子计算辐照度的"过滤器"。在评估光子贡献时，入射辐射度除以光子覆盖的面积（以确定通量）。面积可以通过三种不同方式计算：<br>`sphere`（默认值）<br>    使用所有光子的最小包围球来估计面积。此估计器会导致光子评估看起来柔和模糊。在基元边缘附近可能不准确。<br>`volume`<br>    类似于sphere，但使用最小包围球的体积而不是面积来归一化光子追踪结果。使用体积过滤时，通常需要将光子查找结果除以体积密度，以校正体积中发生的密度加权光子分布。使用体积过滤时，传递给`photonmap`函数的法线将被忽略。<br>`convex`<br>    使用所有光子的凸包来估计面积。此估计器会导致光子评估的边缘略微"锐利"，并且在基元边缘附近更准确。然而，由于边缘更锐利，此估计器可能产生非常嘈杂的评估。<br>`direct`<br>    此过滤器应用于已预过滤的光子贴图（例如，已由pcfilter实用程序过滤的贴图）。它将导致光子能量在不进行面积估计的情况下取平均值。 |

示例

## examples

```vex
Cf = photonmap(map, P, normalize(frontface(N, I)),
"nphotons", 100,
"type", "diffuse",
"error", 0.05,
"filter", "convex);

```

```vex
vector clr;
float area;
photonmap(map, P, normalize(frontface(N, I)), clr, area,
"nphotons", 100,
"type", "diffuse",
"error", 0.05,
"filter", "convex);
Cf = clr;

```
