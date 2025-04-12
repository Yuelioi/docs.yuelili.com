---
title: henyeygreenstein
order: 13
---
`bsdf henyeygreenstein(float anisotropic_bias, ...)`

亨尼-格林斯坦函数根据提供的`anisotropic_bias`参数值（必须是介于-1到1之间的浮点数）来决定光线是向前散射还是反向散射。当值为0时会产生各向同性散射（与`isotropic()` bsdf相同），正值产生前向散射，负值则产生反向散射。当参数为极值-1或1时，所有光线将沿单一方向散射：-1时完全反向光源方向散射，1时则完全不改变光线方向。

注意：
构建亨尼-格林斯坦BSDF时不需要法线向量，因为该函数本身不具有方向性。该BSDF的默认反照率为1，意味着它会散射100%的入射光。
