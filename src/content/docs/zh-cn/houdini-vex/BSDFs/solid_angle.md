---
title: solid_angle
order: 20
---
`float  solid_angle(bsdf b, int mask)`

`b`

要采样的BSDF。

`mask`

指示要评估哪些类型反弹的位掩码。

有关组件标签位掩码的信息，请参见[bouncemask](/zh-cn/houdini-vex/shading-and-rendering/bouncemask)。

## 示例

```vex
// 将BSDF拆分为分量波瓣
bsdf lobes[] = split_bsdf(hitF);

// 获取波瓣的立体角
float angles[];
resize(angles, len(lobes));
for (int i = 0; i < len(lobes); i++)
{
 angles[i] = solid_angle(lobes[i], PBR_ALL_MASK);
}

// 根据立体角计算PDF
float pdf[] = compute_pdf(angles);

// 根据PDF计算CDF
float cdf[] = compute_cdf(pdf);

// 基于反照率分布随机选择一个BSDF
int id = sample_cdf(cdf, sx);

// 对选中的BSDF进行操作
// lobes[id] ...

```
