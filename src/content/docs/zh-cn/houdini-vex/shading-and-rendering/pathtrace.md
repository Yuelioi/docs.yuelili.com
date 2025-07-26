---
title: pathtrace
order: 57
---

| 上下文 | [着色](../contexts/shading.html) |
| --- | --- |

`vector  pathtrace(vector P, vector N, ...)`

`pathtrace` 功能类似于 [irradiance](/zh-cn/houdini-vex/shading-and-rendering/irradiance "计算点P在法线N方向上的全局光照")，但使用基于物理的渲染(PBR)引擎进行二次光线反弹计算。

`pathtrace` 提供了一种简单（但不太灵活）的方法从微多边形渲染中调用PBR渲染引擎。它使用路径追踪和`F`(BSDF)输出，而非命中着色器上的`Cf`/`Of`。最大路径深度由[mantra输出驱动](../../nodes/out/ifd.html "使用Houdini标准mantra渲染器渲染场景并生成IFD文件")PBR选项卡中的"漫反射反弹"参数控制。

辐照度缓存的工作方式与[occlusion](/zh-cn/houdini-vex/shading-and-rendering/occlusion "计算环境光遮蔽")相同。

## 光线选项

提示
当指定纹理时（如使用`"environment"`关键字），您还可以使用图像过滤关键字参数。参见[environment](/zh-cn/houdini-vex/texturing/environment "返回环境纹理的颜色")了解图像过滤关键字参数的列表。

"`scope`"，
`string`

可被光线命中的对象列表。指定后，`scope`将覆盖给定`raystyle`的默认作用域。`"scope:default"`值将使`scope`参数使用当前上下文的默认作用域——就像未指定该参数一样。

允许覆盖[作用域](/zh-cn/houdini-vex/contexts/shading_contexts.html#scope)以进行光线交叉测试。特殊作用域参数`scope:self`将匹配当前着色对象。

"`currentobject`"，
`material`

用于指定当前着色对象。例如，当与作用域参数一起使用时，`scope:self`将匹配由此参数传入的对象。

"`maxdist`"，
`float`
`=-1`

搜索对象的最大距离。可用于将对象搜索限制在附近对象。如果给定的`maxdist`为负值，则表示没有最大距离限制。

允许覆盖测试交叉点时光线可以行进的最大距离。某些函数（如[fastshadow](/zh-cn/houdini-vex/light/fastshadow "从位置P沿方向D发送光线")）已隐式定义了最大距离（通过光线长度），应避免使用此选项。但在计算反射、全局光照、折射等时，此选项可有效使用。

"`variancevar`"，
`string`

用于方差抗锯齿的VEX导出变量名称。渲染器将此值与微多边形渲染中的相邻微多边形进行比较，以决定哪些着色点需要额外采样（使用`vm_variance`[属性](../../props/index.html "属性允许您设置灵活强大的渲染、着色、照明和相机参数层次结构")作为阈值）。如果需要更多样本，算法将采样至指定的最大光线样本数。

此变量必须从命中表面导入，因此必须在导入名称列表中（见下文"从光线导入信息"）。如果未导入命名变量，此选项将被忽略。

方差抗锯齿在高方差区域（如锐利阴影边缘）放置更多样本。仅当启用`vm_dorayvariance`时使用。否则，仅使用最小光线样本数（或显式提供的`"samples"`值）进行聚集循环的抗锯齿。

覆盖全局方差控制（mantra的-v选项），该选项用于确定光线追踪的抗锯齿质量。更多信息请参考mantra文档。

"`angle`"，
`float`
`=0`

分布角度（以弧度指定）。对于gather()，光线将分布在此角度范围内。对于trace()，该角度用于指示滤波器宽度应随交叉距离增加而增加的速率。较大角度会使更远的命中表面使用更大的导数，从而提高纹理和置换性能。

要生效，还应指定samples参数。

"`samples`"，
`int|float`
`=1`

应发送多少样本以过滤光线。对于辐照度和遮蔽函数，指定samples参数将覆盖默认的辐照度采样。

"`environment`"，
`string`

如果发送到场景的光线未命中任何物体，则可指定要评估的环境贴图。

使用光线方向，将评估指定的环境贴图并返回结果颜色。很可能需要为环境贴图评估指定变换空间。

对于refractlight和trace，无论指定的背景颜色如何，Of和Af变量都将设置为0。

指定环境贴图时，还支持texture()的过滤选项。

参见[如何创建环境/反射贴图](../../render/envmaps.html)。

"`envobject`"，
`string`

如果使用环境贴图，可以通过将光线转换到场景中另一个对象、灯光或雾对象的空间来指定环境贴图的方向。在Houdini中，可使用空对象指定方向。例如：

```vex
Cf = R*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null_object_name");
```

"`envlight`"，
`string`

如果使用环境贴图，可以通过将光线转换到场景中灯光空间来指定环境贴图方向。

"`envtint`"，
`vector`

如果使用环境贴图，用此颜色为其着色。

"`background`"，
`vector`

如果光线未命中任何对象，则使用此作为场景背景色。对于refractlight和trace，无论指定的背景颜色如何，Of和Af变量都将设置为0。

"`distribution`"，
`string`

**函数**：[irradiance](/zh-cn/houdini-vex/shading-and-rendering/irradiance "计算点P在法线N方向上的全局光照")，[occlusion](/zh-cn/houdini-vex/shading-and-rendering/occlusion "计算环境光遮蔽")

计算辐照度的分布方式。默认使用余弦分布（漫射照明）。可能的样式值为：`"nonweighted"`表示均匀采样，`"cosine"`表示余弦加权采样。
