---
title: getrayweight
order: 30
---
| 上下文 | [着色](../contexts/shading.html) |
| --- | --- |

`float  getrayweight()`

返回该光线对最终像素颜色贡献的近似值。通常，这比[getraylevel](/zh-cn/houdini-vex/shading-and-rendering/getraylevel "返回当前着色光线树的深度")更能有效衡量对最终像素颜色的贡献。不过，该方法的准确性依赖于前序着色器能提供良好的着色贡献估计（参见[reflectlight](/zh-cn/houdini-vex/shading-and-rendering/reflectlight "计算照射到表面的反射光量")）。
