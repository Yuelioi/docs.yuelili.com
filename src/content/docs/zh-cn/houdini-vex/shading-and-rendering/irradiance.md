---
title: irradiance
order: 41
---
| 本页内容 | * [采样自适应选项](#sample-adaptation-options) * [光线选项](#ray-options) |
| --- | --- |
| 上下文 | [着色](../contexts/shading.html) |

`vector  irradiance(vector P, vector N, ...)`

计算点P处法线为N的辐照度（全局光照）。

采样自适应选项

## sample-adaptation-options

"`adaptive`",

`1` 或 `0`。开启自动优化功能，当遮挡变化较小时会减少采样数。这可以提高性能，但可能导致闪烁或增加噪点。

"`bias`",
`float`
`=0.001`

光线追踪偏移量。用于控制自相交问题。

光线选项

## ray-options

提示
当指定纹理时（如使用`"environment"`关键字），也可以使用图像过滤关键字参数。详见[环境贴图](../texturing/environment "返回环境纹理的颜色")中列出的图像过滤关键字参数。

"`scope`",
`string`

可被光线击中的对象列表。指定后，`scope`将覆盖给定`raystyle`的默认作用域。`"scope:default"`值将使`scope`参数使用当前上下文的默认作用域——就像未指定该参数一样。

允许覆盖光线相交的[作用域](../contexts/shading_contexts.html#scope)。
特殊作用域参数`scope:self`将匹配当前着色对象。

"`currentobject`",
`material`

用于指定当前着色对象。例如，与scope参数一起使用时，`scope:self`将匹配由此参数传入的对象。

"`maxdist`",
`float`
`=-1`

搜索对象的最大距离。可用于将对象搜索限制在附近对象。如果`maxdist`为负值，则表示没有最大距离限制。

允许覆盖测试相交时光线能传播的最大距离。某些函数（如[快速阴影](../light/fastshadow "从位置P沿方向D发送光线")）已隐式定义了最大距离（由光线长度决定），应避免使用此选项。但在计算反射、全局光照、折射等时，此选项可有效使用。

"`variancevar`",
`string`

用于方差抗锯齿的VEX导出变量名。渲染器会将该值与微多边形渲染中的相邻微多边形比较，以决定哪些着色点需要额外采样（使用`vm_variance`[属性](../../props/index.html "属性允许您设置灵活强大的渲染、着色、光照和相机参数层次结构")作为阈值）。如需更多采样，算法会采集最多指定的最大光线采样数。

此变量必须从命中表面导入，因此必须在导入名称列表中（见下文"从光线导入信息"）。如果未导入指定变量，此选项将被忽略。

方差抗锯齿会在高方差区域（如锐利阴影边缘）放置更多采样。仅当启用`vm_dorayvariance`时使用。否则仅使用最小光线采样数（或显式提供的`"samples"`值）进行聚集循环的抗锯齿。

覆盖用于确定光线追踪抗锯齿质量的全局方差控制（mantra的-v选项）。详情请参阅mantra文档。

"`angle`",
`float`
`=0`

分布角度（以弧度指定）。对于gather()，光线将按此角度分布。对于trace()，该角度表示滤波器宽度应随相交距离增加而增大的速率。较大角度会使更远的命中表面使用更大的导数，从而提高纹理和置换性能。

要生效，还应指定samples参数。

"`samples`",
`int|float`
`=1`

应发送多少采样来过滤光线。对于辐照度和遮挡函数，指定samples参数将覆盖默认辐照度采样。

"`environment`",
`string`

如果发送到场景的光线未命中任何物体，则可指定要评估的环境贴图。

使用光线方向，将评估指定的环境贴图并返回结果颜色。很可能需要为环境贴图评估指定变换空间。

对于refractlight和trace，无论指定何种背景色，Of和Af变量都将设为0。

指定环境贴图时，也支持texture()的过滤选项。

详见[如何创建环境/反射贴图](../../render/envmaps.html)。

"`envobject`",
`string`

如果使用环境贴图，可通过将光线转换到场景中其他对象、灯光或雾对象的空间来指定环境贴图的方向。在Houdini中，可使用空对象指定方向。例如：

```vex
Cf = R*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null_object_name");

```

"`envlight`",
`string`

如果使用环境贴图，可通过将光线转换到场景中灯光空间来指定环境贴图方向。

"`envtint`",
`vector`

如果使用环境贴图，用此颜色为其着色。

"`background`",
`vector`

如果光线未命中任何物体，则使用此作为场景背景色。对于refractlight和trace，无论指定何种背景色，Of和Af变量都将设为0。

"`distribution`",
`string`

**函数**: [辐照度](./irradiance "计算点P处法线为N的辐照度（全局光照）"), [遮挡](./occlusion "计算环境光遮挡")

计算辐照度的分布方式。默认使用余弦分布（漫射照明）。可能的样式值为：`"nonweighted"`表示均匀采样，`"cosine"`表示余弦加权采样。
