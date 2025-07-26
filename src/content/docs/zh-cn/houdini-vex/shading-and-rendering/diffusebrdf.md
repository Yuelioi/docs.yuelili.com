---
title: diffusebrdf
order: 5
---
`float  diffuseBRDF(vector L, vector N)`

等效于 clamp(dot(L, N), 0, 1)。

`float  diffuseBRDF(vector L, vector N, vector V, float rough)`

[specularBRDF](specularBRDF.html "返回VEX着色中使用的不同光照模型计算出的BRDF值"), [phongBRDF](phongBRDF.html), [blinnBRDF](blinnBRDF.html),
和`diffuseBRDF`返回VEX着色中
使用的不同光照模型计算出的BRDF值。您可以在自定义的
[illuminance](/zh-cn/houdini-vex/shading-and-rendering/illuminance "遍历场景中的所有光源，为每个光源调用光照着色器来设置Cl和L全局变量")循环中使用它们
来复制对应VEX光照函数的光照模型。

查看[specularBRDF](specularBRDF.html "返回VEX着色中使用的不同光照模型计算出的BRDF值")获取示例代码。
