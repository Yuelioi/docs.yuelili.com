---
title: split_bsdf
order: 22
---
`void  split_bsdf(bsdf &lobes[], bsdf source, float &weights[])`

`void  split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask)`

`void  split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask, int type)`

`void  split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask, int type, float u)`

`void  split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask, int type, float u, float cdf[])`

`&lobes`

该函数会将BSDF分量波瓣写入此数组。

`source`

待拆分的BSDF。

`weights`

该函数会将拆分波瓣的权重填充到此数组（与返回的`bsdf`数组长度相同）。当您使用返回的波瓣采样光照时，必须按这些权重进行缩放。

`mask`

指示要评估哪些类型弹跳的位掩码。

有关组件标签位掩码的信息，请参阅[bouncemask](/zh-cn/houdini-vex/shading-and-rendering/bouncemask)。

`type`

波瓣拆分方式。可通过`#import "pbr.h"`获取表示不同拆分类型的常量值：

- `PBR_SPLIT_FULL = 0`
- `PBR_SPLIT_RANDOM = 1`
- `PBR_SPLIT_ALBEDO = 2`
- `PBR_SPLIT_COMPONENT = 3`
- `PBR_SPLIT_DEFAULT = PBR_SPLIT_ALBEDO`

`u`

用于在CDF上采样的随机值。

`cdf`

用于控制BSDF组件间采样的累积分布函数。

返回值

表示波瓣的`bsdf`对象数组。

## 示例

```vex
// 将BSDF拆分为分量波瓣
float weights[];
bsdf lobes[];
split_bsdf(lobes, hitF, weights);

// 获取各波瓣的反照率
float albedos[];
resize(albedos, len(lobes));
for (int i = 0; i < len(lobes); i++)
{
 albedos[i] = luminance(albedo(lobes[i], -hitnI)) * weights[i];
}

// 计算CDF
float cdf[] = compute_cdf(albedos);

// 根据反照率分布随机选择BSDF
int index = 0;
sample_cdf(cdf, s.x, index);

// 对选中的BSDF进行操作
// lobes[index] ...

```
