---
title: matchvex_blinn
order: 52
---
`bsdf  matchvex_blinn(float exponent, ...)`

`bsdf  matchvex_blinn(vector nml, float exponent, ...)`

![](../_static/rendering/matchvex_blinn.png)
[blinn](/zh-cn/houdini-vex/bsdfs/blinn "返回Blinn BSDF或计算Blinn着色")函数生成的BSDF与传统VEX的`blinn()`输出并不相同。使用本函数可以生成更接近传统VEX `blinn()`效果的近似匹配。

（说明：保持原有代码格式不变，仅翻译说明性文字部分。图片路径和函数签名保持原样，技术术语"BSDF"保留不译）
