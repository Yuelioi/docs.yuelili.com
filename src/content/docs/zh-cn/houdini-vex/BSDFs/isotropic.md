---
title: isotropic
order: 14
---
`bsdf  isotropic(...)`

isotropic函数会将光线均匀地向所有方向散射，适用于渲染烟雾等致密体积材质。请注意，构造各向同性bsdf时不需要法线向量，因为它不具有方向性。isotropic `bsdf`的默认反照率为1，这意味着isotropic()函数会散射100%的入射光。
