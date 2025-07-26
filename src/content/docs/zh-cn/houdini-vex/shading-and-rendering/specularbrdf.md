---
title: specularbrdf
order: 74
---

`float  specularBRDF(vector L, vector N, vector V, float rough)`

`specularBRDF`、[phongBRDF](phongBRDF.html)、[blinnBRDF](blinnBRDF.html)和[diffuseBRDF](diffuseBRDF.html)函数用于返回VEX着色中不同光照模型计算的BRDF值。您可以在自定义的[illuminance](/zh-cn/houdini-vex/shading-and-rendering/illuminance "遍历场景中所有光源，为每个光源调用光照着色器来设置Cl和L全局变量。")循环中使用这些函数，以复现对应VEX光照函数的光照模型。

```vex
vector nn = normalize(frontface(N, I));
vector ii = normalize(-I);
Cf = 0;
illuminance(P, nn)
{
 vector ll = normalize(L);
 Cf += Cl * (specularBRDF(ll, nn, ii, rough) + diffuseBRDF(ll, nn));
}
```
