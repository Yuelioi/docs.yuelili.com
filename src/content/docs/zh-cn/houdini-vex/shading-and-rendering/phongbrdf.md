---
title: phongbrdf
order: 58
---
`float  phongBRDF(vector L, vector N, vector V, float rough)`

[specularBRDF](specularBRDF.html "返回VEX着色中使用的不同光照模型计算出的BRDF值")、`phongBRDF`、[blinnBRDF](blinnBRDF.html)
和[diffuseBRDF](diffuseBRDF.html)函数用于返回VEX着色中不同光照模型计算出的双向反射分布函数(BRDF)。您可以在自定义的[illuminance](/zh-cn/houdini-vex/shading-and-rendering/illuminance "遍历场景中所有光源，为每个光源调用光照着色器来设置Cl和L全局变量")循环中使用这些函数，以复现对应VEX光照函数的光照模型效果。

具体示例代码可参考[specularBRDF](specularBRDF.html "返回VEX着色中使用的不同光照模型计算出的BRDF值")文档。
