---
title: rayhittest
order: 59
---
| 本页内容 | * [区域采样选项](#区域采样选项) * [射线选项](#射线选项) |
| --- | --- |
| 上下文 | [置换](../contexts/displace.html) [雾效](../contexts/fog.html) [光照](../contexts/light.html) [阴影](../contexts/shadow.html) [表面](../contexts/surface.html) |

`float rayhittest(vector P, vector D, float bias, ...)`

`float rayhittest(vector P, vector D, vector &pHit, vector &nHit, float bias, ...)`

从位置P沿方向D发射射线。向量D的长度表示检测遮挡时考虑的最远距离。

返回与物体相交的距离。如果没有命中物体，则返回小于0的值。

如果指定了pHit和nHit，它们将获取命中表面的位置和法线。

在许多情况下，区域采样功能与`rayhittest()`函数配合使用时不会产生可用结果。

提示
测试多边形命中时可能会遇到大量射线未命中的情况。此时对几何体进行三角化处理可以提高命中率。

区域采样选项

## 区域采样选项

进行区域采样时，必须同时指定角度和采样可变参数。例如：

```vex
surface
blurry_mirror(float angle = 3; int samples = 16; float bias=0.05)
{
 Cf = reflectlight(bias, 1, "angle", angle, "samples", samples);
}
```

射线选项

## 射线选项

提示
当指定纹理时（如使用`"environment"`关键字），也可以使用图像过滤关键字参数。详见[环境贴图](/zh-cn/houdini-vex/texturing/environment "返回环境纹理的颜色")中关于图像过滤关键字参数的说明。

"`scope`",
`string`

可被射线命中的物体列表。指定后，`scope`将覆盖给定`raystyle`的默认作用域。`"scope:default"`值将使`scope`参数使用当前上下文的默认作用域——就像未指定该参数一样。

允许覆盖射线相交的[作用域](/zh-cn/houdini-vex/contexts/shading_contexts.html#scope)。
特殊作用域参数`scope:self`将匹配当前着色对象。

"`currentobject`",
`material`

用于指定当前着色对象。例如，与scope参数配合使用时，`scope:self`将匹配通过此参数传入的对象。

"`maxdist`",
`float`
`=-1`

搜索物体的最大距离。可用于将物体搜索限制在附近物体范围内。如果给定的`maxdist`为负值，则表示没有最大距离限制。

允许覆盖测试相交时射线可以行进的最大距离。某些函数（如[快速阴影](/zh-cn/houdini-vex/light/fastshadow "从位置P沿方向D发射射线")）已隐式定义了最大距离（通过射线长度），应避免使用此选项。但在计算反射、全局光照、折射等时，此选项可以有效地使用。

"`variancevar`",
`string`

用于方差抗锯齿的VEX导出变量名称。渲染器会将该值与微多边形渲染中的相邻微多边形进行比较，以决定哪些着色点需要额外采样（使用`vm_variance`[属性](../../props/index.html "属性允许您设置灵活强大的渲染、着色、光照和相机参数层次结构")作为阈值）。如果需要更多样本，算法将采集样本直至达到指定的最大射线样本数。

此变量必须从命中表面导入，因此必须位于导入名称列表中（见下文"从射线导入信息"）。如果未导入命名变量，此选项将被忽略。

方差抗锯齿会在图像高方差区域（如锐利阴影边缘）放置更多样本。仅当启用`vm_dorayvariance`时使用。否则，仅使用最小射线样本数（或显式提供的`"samples"`值）进行采集循环的抗锯齿处理。

覆盖用于确定光线追踪抗锯齿质量的全局方差控制（mantra的-v选项）。更多信息请参考mantra文档。

"`angle`",
`float`
`=0`

分布角度（以弧度指定）。对于gather()，射线将分布在此角度范围内。对于trace()，该角度用于指示滤波宽度应随相交距离增加而增大的速率。较大的角度会使更远的命中表面使用更大的导数，从而提高纹理和置换性能。

要生效，还应指定samples参数。

"`samples`",
`int|float`
`=1`

应发送多少样本以过滤射线。对于辐照度和遮挡函数，指定samples参数将覆盖默认的辐照度采样。

"`environment`",
`string`

如果发射到场景中的射线未命中任何物体，则可以指定要评估的环境贴图。

使用射线的方向，将评估指定的环境贴图并返回结果颜色。很可能需要为环境贴图评估指定变换空间。

对于refractlight和trace，无论指定的背景颜色如何，Of和Af变量都将设置为0。

指定环境贴图时，还支持texture()的过滤选项。

参见[如何创建环境/反射贴图](../../render/envmaps.html)。

"`envobject`",
`string`

如果使用环境贴图，可以通过将射线变换到场景中其他对象、光源或雾效对象的空间来指定环境贴图的方向。在Houdini中，可以使用空对象来指定方向。例如：

```vex
Cf = R*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null_object_name");
```

"`envlight`",
`string`

如果使用环境贴图，可以通过将射线变换到场景中光源的空间来指定环境贴图的方向。

"`envtint`",
`vector`

如果使用环境贴图，用此颜色对其进行着色。

"`background`",
`vector`

如果射线未命中任何物体，则使用此颜色作为场景背景色。对于refractlight和trace，无论指定的背景颜色如何，Of和Af变量都将设置为0。

"`distribution`",
`string`

**函数**: [辐照度](/zh-cn/houdini-vex/shading-and-rendering/irradiance "计算点P处法线为N的辐照度（全局光照）"), [遮挡](/zh-cn/houdini-vex/shading-and-rendering/occlusion "计算环境光遮挡")

计算辐照度的分布方式。默认使用余弦分布（漫反射照明）。样式可能值为`"nonweighted"`表示均匀采样，或`"cosine"`表示余弦加权采样。
