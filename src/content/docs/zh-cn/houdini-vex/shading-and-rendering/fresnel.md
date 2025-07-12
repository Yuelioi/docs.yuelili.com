---
title: fresnel
order: 7
---

`void  fresnel(vector i, vector n, float eta, float &kr, float &kt)`

`void  fresnel(vector i, vector n, float eta, float &kr, float &kt, vector &R, vector &T)`

根据入射向量、表面法线（均已归一化）和折射率（eta），计算菲涅尔反射/折射的贡献值。反射光量将通过kr参数返回，透射光量将通过kt参数返回。

可选地，反射向量和透射向量可以通过R和T变量返回。退出时，R和<type>变量将是归一化的向量。

eta是相对折射率，即内部折射率与外部折射率的比值，其中外部由法线方向定义（法线指向远离内部的方向）。
