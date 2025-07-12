---
title: hair
order: 12
---

`bsdf  hair(vector N, vector tip, float lobe_shift, float lobe_width_lon, ...)`

`bsdf  hair(vector N, vector tip, float lobe_shift, float lobe_width_lon, float lobe_with_azi, ...)`

`bsdf  hair(vector N, vector tip, float lobe_shift, float lobe_width_lon, float lobe_with_azi, float glint_shift, float glint_intensity, ...)`

毛发BSDF的详细实现可在源文件(`hair_eval.vfl`)中找到。

函数的任何可变参数都会传递给CVEX评估函数。

## 示例

这些不同的函数签名等同于以下代码：

```vex
bsdf hair(vector N; vector tip; float lobe_shift; float lobe_width_lon, ...)
{
 cvex_bsdf("hair_eval", "hair_sample",
 "label", "diffuse",
 "tip", tip,
 "lobe_shift", lobe_shift,
 "lobe_width_lon", lobe_width_lon,
 ...);
}

bsdf hair(vector N; vector tip; float lobe_shift; float lobe_width_lon, float lobe_with_azi, ...)
{
 cvex_bsdf("hair_eval", "hair_sample",
 "label", "refract",
 "tip", tip,
 "lobe_shift", lobe_shift,
 "lobe_width_lon", lobe_width_lon,
 "lobe_width_azi", lobe_width_azi,
 ...);
}

bsdf hair(vector N; vector tip; float lobe_shift; float lobe_width_lon, float glint_shift; float glint_intensity, ...)
{
 cvex_bsdf("hair_eval", "hair_sample",
 "label", "reflect",
 "tip", tip,
 "lobe_shift", lobe_shift,
 "lobe_width_lon", lobe_width_lon,
 "glint_shift", glint_shift,
 "glint_intensity", glint_intensity,
 ...);
}
```
