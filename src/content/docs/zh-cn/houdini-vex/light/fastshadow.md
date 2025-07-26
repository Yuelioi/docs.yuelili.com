---
title: fastshadow
order: 3
---
| 本页内容 | * [区域采样选项](#area-sampling-options) * [光线选项](#ray-options) |
| --- | --- |
| 上下文 | [置换](../contexts/displace.html) [雾效](../contexts/fog.html) [光照](../contexts/light.html) [阴影](../contexts/shadow.html) [表面](../contexts/surface.html) |

`float  fastshadow(vector P, vector D, float bias, ...)`

从位置 P 沿方向 D 发射一条光线。向量 D 的长度表示检测遮挡时考虑的最远距离。

如果没有发现遮挡物体则返回 1，如果光线中途击中物体则返回 0。
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

光线选项

## 光线选项

提示
当指定纹理时（如使用`"environment"`关键字），也可以使用图像过滤关键字参数。详见[环境贴图](/zh-cn/houdini-vex/texturing/environment "返回环境纹理的颜色")中列出的图像过滤关键字参数。

"`scope`"，
`string`

可被光线击中的物体列表。指定后，`scope`将覆盖给定`raystyle`的默认作用域。`"scope:default"`值将使`scope`参数使用当前上下文的默认作用域——就像未指定该参数一样。

允许覆盖光线相交的[作用域](/zh-cn/houdini-vex/contexts/shading_contexts.html#scope)。
特殊作用域参数`scope:self`将匹配当前着色对象。

"`currentobject`"，
`material`

用于指定当前着色对象。例如，当与scope参数一起使用时，`scope:self`将匹配由此参数传入的对象。

"`maxdist`"，
`float`
`=-1`

搜索物体的最大距离。可用于将物体搜索限制在附近物体。如果`maxdist`为负值，则表示没有最大距离限制。

允许覆盖测试相交时光线传播的最大距离。某些函数（如[fastshadow](/zh-cn/houdini-vex/light/fastshadow "从位置P沿方向D发射光线")）已隐式定义了最大距离（通过光线长度），应避免使用此选项。但在计算反射、全局光照、折射等时，此选项可有效使用。

"`variancevar`"，
`string`

用于方差抗锯齿的VEX导出变量名。渲染器会将该值与微多边形渲染中的相邻微多边形比较，以决定哪些着色点需要额外采样（使用`vm_variance`[属性](../../props/index.html "属性允许您设置灵活强大的渲染、着色、光照和相机参数层次结构")作为阈值）。如需更多采样，算法会采集最多指定的最大光线采样数。

此变量必须从击中表面导入，因此必须在导入名称列表中（见下文"从射线导入信息"）。如果未导入命名变量，此选项将被忽略。

方差抗锯齿会在图像高方差区域（如锐利阴影边缘）放置更多采样。仅当启用`vm_dorayvariance`时使用。否则，仅使用最小光线采样数（或显式提供的`"samples"`值）进行聚集循环的抗锯齿。

覆盖用于确定光线追踪抗锯齿质量的全局方差控制（mantra的-v选项）。
更多信息请参阅mantra文档。

"`angle`"，
`float`
`=0`

分布角度（以弧度指定）。对于gather()，光线将按此角度分布。对于trace()，该角度用于指示滤镜宽度应随相交距离增加的速率。较大角度会使更远的命中表面使用更大导数，从而提高纹理和置换性能。

要生效，还应指定samples参数。

"`samples`"，
`int|float`
`=1`

应发送多少采样来过滤光线。对于辐照度和遮挡函数，指定samples参数将覆盖默认辐照度采样。

"`environment`"，
`string`

如果发射到场景的光线未击中任何物体，则可指定要评估的环境贴图。

使用光线方向，将评估指定的环境贴图并返回结果颜色。很可能需要为环境贴图评估指定变换空间。

对于refractlight和trace，无论指定何种背景色，Of和Af变量都将设为0。

指定环境贴图时，还支持texture()的过滤选项。

详见[如何创建环境/反射贴图](../../render/envmaps.html)。

"`envobject`"，
`string`

如果使用环境贴图，可通过将光线转换到场景中其他对象、灯光或雾效对象的空间来指定环境贴图的方向。在Houdini中，可使用空对象指定方向。例如：

```vex
Cf = R*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null_object_name");

```

"`envlight`"，
`string`

如果使用环境贴图，可通过将光线转换到场景中灯光空间来指定环境贴图方向。

"`envtint`"，
`vector`

如果使用环境贴图，用此颜色为其着色。

"`background`"，
`vector`

如果光线未击中任何物体，则使用此颜色作为场景背景色。对于refractlight和trace，无论指定何种背景色，Of和Af变量都将设为0。

"`distribution`"，
`string`

**函数**：[irradiance](/zh-cn/houdini-vex/shading-and-rendering/irradiance "计算点P处法线N的辐照度（全局光照）"), [occlusion](/zh-cn/houdini-vex/shading-and-rendering/occlusion "计算环境光遮蔽")

计算辐照度的分布方式。默认为使用余弦分布（漫反射照明）。可能的样式值为`"nonweighted"`（均匀采样）或`"cosine"`（余弦加权采样）。
