---
title: sample_geometry
order: 17
---
| 本页内容 | * [面积分布](#面积分布) * [参数化分布](#参数化分布) * [立体角分布](#立体角分布) * [细节](#细节)   + [光源包含/排除选项](#光源包含排除选项)  + [光线选项](#光线选项)  + [光线发射选项](#光线发射选项)  + [向表面着色器发送信息](#向表面着色器发送信息)  + [从光线导入信息](#从光线导入信息)  + [采样过滤选项](#采样过滤选项)  + [管线选项](#管线选项) * [示例](#示例) |
| --- | --- |
| 上下文 | [置换](../contexts/displace.html)  [雾效](../contexts/fog.html)  [光源](../contexts/light.html)  [阴影](../contexts/shadow.html)  [表面](../contexts/surface.html) |

`int  sample_geometry(vector origin, vector sample, float time, ...)`

VEX中的sample_geometry操作用于在场景中的几何体对象上分布单个采样点，并在该点执行表面着色器。此操作类似于[trace](/zh-cn/houdini-vex/shading-and-rendering/trace "从P点沿归一化向量D发送光线。")和[gather](/zh-cn/houdini-vex/shading-and-rendering/gather "向场景中发送光线，并从光线击中的表面着色器返回信息。")函数，因为它接受一个可变参数列表，这些参数是操作要导出的着色器输出。然而，`sample_geometry`与光线追踪函数的不同之处在于它实际上并不向场景中发送光线来确定应该在何处运行着色器。origin和sample参数的含义取决于分布类型。time可以与运动模糊一起使用，在时间和空间上分布采样点。

面积分布

## 面积分布

在此模式下，点将根据图元的面积分布在多个图元上。面积较大的图元上会放置比面积较小的图元更多的采样点。sample参数应包含0到1范围内的均匀随机变量。origin参数无效。

参数化分布

## 参数化分布

在此模式下，图元和细分ID以及参数化表面坐标被映射到表面位置。当试图在多帧之间保持一组连贯的表面位置（例如，在点云中）时，此模式非常有用，因为相同的图元ID、细分ID、s和t坐标会映射到相似的表面位置，即使网格正在变形。sample参数包含s和t坐标（在第一和第二个分量中），而origin参数包含图元和细分ID（同样在第一和第二个分量中）。

立体角分布

## 立体角分布

此模式类似于"面积"模式，不同之处在于特定图元上的点是根据立体角而非面积分布的。更具体地说，采样将根据相对于origin的半球覆盖范围分布。sample参数应包含0到1范围内的均匀随机变量。

细节

## 细节

### 光源包含/排除选项

光源包含排除选项

"`categories`",
`string`
`="*"`

通过"category"标签指定要包含/排除的光源。这是比使用`"lightmask"`关键字参数通过模式匹配光源名称更优的包含/排除光源方式。

例如：

```vex
diff = diffuse(nml, "lightmask", "hero | fill");

```

更多信息请参阅[光源类别](../../render/lights.html#categories)。

"`lightmask`",
`string`
`="*"`

在评估光源和阴影着色器时，对象有预定义的光源遮罩。此遮罩通常在几何体对象中指定，并指定用于照亮表面或雾效着色器的光源列表。可以通过指定"lightmask"参数来覆盖默认的光源遮罩。

例如：

```vex
diff = diffuse(nml, "lightmask", "light*,^light2");

```

...将导致所有名称以"light"开头的光源（名为"light2"的光源除外）被考虑用于漫反射照明。

支持所有Houdini范围模式（组扩展除外）：

- `*` - 通配符匹配
- `?` - 单字符匹配
- `^` - 排除操作符
- `[list]` - 字符列表匹配

### 光线选项

光线选项

提示
当您指定纹理时（例如使用`"environment"`关键字），您也可以使用图像过滤关键字参数。请参阅[environment](/zh-cn/houdini-vex/texturing/environment "返回环境纹理的颜色。")以获取图像过滤关键字参数的列表。

"`scope`",
`string`

可以被光线击中的对象列表。指定时，`scope`将覆盖给定`raystyle`的默认范围。`"scope:default"`值将导致`scope`参数使用当前上下文的默认范围 - 就像未指定该参数一样。

允许覆盖用于光线相交的[范围](/zh-cn/houdini-vex/contexts/shading_contexts.html#scope)。
特殊范围参数`scope:self`将匹配当前着色对象。

"`currentobject`",
`material`

用于指定当前着色对象。例如，当与scope参数一起使用时，`scope:self`将匹配由此参数传递的对象。

"`maxdist`",
`float`
`=-1`

搜索对象的最大距离。这可以用于将对象搜索限制在附近对象。如果给定的`maxdist`为负，则将表现为没有最大距离。

允许覆盖测试相交时光线可以行进的最大距离。某些函数（例如[fastshadow](/zh-cn/houdini-vex/light/fastshadow "从位置P沿方向D指定的方向发送光线。")）具有隐式定义的最大距离（由光线长度决定），可能应避免使用此选项。但是，此选项可以在计算反射、全局照明、折射等时有效使用。

"`variancevar`",
`string`

用于方差抗锯齿的VEX导出变量名称。渲染器将此值与微多边形渲染中的相邻微多边形进行比较，以决定哪些着色点需要额外的采样（使用`vm_variance`[属性](../../props/index.html "属性允许您设置渲染、着色、照明和相机参数的灵活且强大的层次结构。")作为阈值）。如果需要更多采样，算法将采样到指定的最大光线采样数。

此变量必须从击中的表面导入，因此它必须在导入名称列表中（见下面的"从光线导入信息"）。如果未导入命名变量，则将忽略此选项。

方差抗锯齿将更多采样放在图像中高方差的区域，例如锐利的阴影边缘。仅当启用`vm_dorayvariance`时使用。否则，仅使用最小光线采样（或显式提供的`"samples"`值）进行gather循环的抗锯齿。

覆盖用于确定光线追踪抗锯齿质量的全局方差控制（mantra的-v选项）。
更多信息请参阅mantra文档。

"`angle`",
`float`
`=0`

分布角度（以弧度指定）。对于gather()，光线将分布在此角度上。对于trace()，角度用于指示随着相交距离增加，滤镜宽度应增加的速率。较大的角度将导致更远的击中表面使用更大的导数，从而提高纹理和置换性能。

要有效，还应指定samples参数。

"`samples`",
`int|float`
`=1`

应发送多少采样来过滤光线。对于
irradiance和occlusion函数，指定samples
参数将覆盖默认的irradiance采样。

"`environment`",
`string`

如果发送到场景的光线未击中任何物体，则可以指定要评估的环境贴图。

使用光线的方向，将评估指定的环境贴图并返回结果颜色。
很可能需要为环境贴图评估指定变换空间。

在refractlight和trace的情况下，无论指定的背景颜色如何，Of和Af变量都将设置为0。

指定环境贴图时，还支持texture()的过滤选项。

参见[如何创建环境/反射贴图](../../render/envmaps.html)。

"`envobject`",
`string`

如果使用环境贴图，可以通过将光线变换到场景中另一个对象、光源或雾效对象的空间来指定环境贴图的方向。在Houdini中，可以使用null对象来指定方向。例如：

```vex
Cf = R*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null_object_name");

```

"`envlight`",
`string`

如果使用环境贴图，可以通过将光线变换到场景中光源的空间来指定环境贴图的方向。

"`envtint`",
`vector`

如果使用环境贴图，用此颜色为其着色。

"`background`",
`vector`

如果光线未击中任何物体，则使用此作为场景的背景颜色。在refractlight和trace的情况下，无论指定的背景颜色如何，Of和Af变量都将设置为0。

"`distribution`",
`string`

**函数**: [irradiance](/zh-cn/houdini-vex/shading-and-rendering/irradiance "计算点P处法线N的辐照度（全局照明）。"), [occlusion](/zh-cn/houdini-vex/shading-and-rendering/occlusion "计算环境光遮蔽。")

计算辐照度的分布。默认使用余弦分布（漫反射照明）。样式的可能值为`"nonweighted"`用于均匀采样或`"cosine"`用于余弦加权采样。

### 光线发射选项

光线发射选项

"`width`",
`float`
`=-1`

指定光线源处的滤镜宽度。如果还指定了`angle`，则滤镜宽度将随着沿光线的距离增加而变大。默认情况下，滤镜宽度将从当前着色上下文初始化，因此通常不需要直接指定`width`。负值将被忽略，并将导致滤镜宽度从当前着色上下文初始化。

"`distribution`",
`string`
`="cosine"`

确定采样分布。

对于[gather](/zh-cn/houdini-vex/shading-and-rendering/gather "向场景中发送光线，并从光线击中的表面着色器返回信息。"):

- `cosine` – 光线按余弦（漫反射）函数分布在半球上。
- `uniform` – 光线均匀分布在半球上

对于[sample_geometry](/zh-cn/houdini-vex/sampling/sample_geometry "采样场景中的几何体，并从采样的表面着色器返回信息。"):

- `area` – 采样按图元面积分布
- `parametric` – 采样按图元ID、细分ID和参数化表面坐标（s, t）分布。
- `solidangle` – 采样按图元面积或图元面积和图元所对的立体角分布。

"`biasdir`",
`vector`
`=Ng`

当**沿法线偏置**启用时，覆盖偏置方向。当未指定`biasdir`时，使用几何法线`Ng`。当沿法线偏置禁用时，此选项无效。

"`SID`",
`int`
`=0`

要传递给被调用着色器的采样标识符。如果调用着色器已使用SID生成采样，则可以将修改后的采样标识符传递给被调用着色器，以便它可以从指定的偏移量开始采样。此值将用于初始化击中表面中的SID全局变量。

"`rayweight`",
`float`
`=1`

向mantra提示此光线对最终着色的相对贡献。此值由光线剪辑阈值用于限制光线发送（类似于光线反弹）。

"`raystyle`",
`string`
`="refract"`

您发送的光线类型。Mantra将使用`raystyle`来确定用于光线终止的默认光线追踪遮罩和反弹限制。

- `reflect` – 发送反射光线。Mantra将使用反射遮罩和反射限制来终止光线追踪。
- `refract` – (默认) 发送折射光线。Mantra将使用折射遮罩和折射限制来终止光线追踪。
- `diffuse` – 发送漫反射光线。Mantra将使用漫反射限制来处理漫反射光线。
- `shadow` – 发送阴影光线。Mantra不会修改光线追踪级别，并且如果在阴影或光源着色器内部，将针对`shadowmask`进行追踪。
- `primary` – 发送主光线。当着色器需要在不影响仅适用于直接可见对象的渲染设置（如遮罩和幻影）行为的情况下更改主光线方向时，可以使用此样式。Mantra在发送`primary`光线时仍会增加光线追踪级别。
- `nolimit` – 发送反射光线，对光线追踪反弹次数没有限制。Mantra在发送`nolimit`光线时仍会增加光线追踪级别。

"`categories`",
`string`

用于选择可以被光线击中的对象的类别表达式。指定时，这将覆盖现有的`reflectcategories`和`refractcategories`参数。

例如，`^hidden`将击中所有不具有hidden类别的对象，而`shiny|happy`将击中所有具有shiny或happy类别的对象。

scope和categories参数的交集用于选择可以被光线击中的对象。

"`samplebase`",
`float`
`=0`

通常，光线分布在正在着色的微多边形表面上。此参数可用于控制区域。值为0将强制所有光线从同一点发送。值为1将覆盖整个微多边形。（仅限Gather）

"`transparentsamples`",
`int`
`=1`

用于带数组输出的随机透明度的透明采样数。通常此值应设置为1，除非您已请求在数组变量中导出 - 在这种情况下，光线追踪器将为沿光线的每个采样在数组中插入一个条目。

注意
当使用`screendoor` `samplefilter`导入`F`或`ray:material`时，`transparentsamples`必须为1。

### 向表面着色器发送信息

向表面着色器发送信息
使用形式为`"send:name", value`的关键字，您可以将数据从原始表面传递到被光线相交的表面。这些参数传递您想要的任何值。

```vex
gather(P, dir, "send:N", normalize(N)) { ... }

```

您可以在接收端（即被光线击中的表面）使用[rayimport](/zh-cn/houdini-vex/shading-and-rendering/rayimport "导入由gather循环中的着色器发送的值。")函数提取此传递的数据。第一个参数是名称（不带`send:`前缀），第二个参数是存储导入值的变量。

`int rayimport(string name, <type> &value)`

`rayimport`在成功导入值时返回`1`。

### 从光线导入信息

从光线导入信息
您可以指定要从击中着色器导入的全局或导出变量的名称，形式为`"varname", &var`，通常包括`Cf`（击中表面的颜色向量）和`Of`（击中表面的不透明度向量）。

```vex
vector hitcf;
gather(P, dir, "bias", 0.01, "Cf", hitcf) {...}

```

此外，您可以导入以下特殊关键字以获取有关光线本身的信息：

"`ray:origin`",
`&vector`

光线的原点（在`else`子句中也定义）。

"`ray:direction`",
`&vector`

光线的方向（在`else`子句中也定义）。

"`ray:length`",
`&float`

到第一个被光线击中的表面的距离。

"`ray:area`",
`&float`

光线追踪范围内所有几何体的总表面积。

"`ray:solidangle`",
`&float`

光线追踪范围内所有几何体所对的估计立体角。对于靠近或包围光线原点的大型对象，这可能是一个非常差的估计，而对于单个图元，估计可以非常好。

您可以通过在数组变量中请求数据来检索沿光线多个击中点的信息。当导入值为数组类型时，[trace](/zh-cn/houdini-vex/shading-and-rendering/trace "从P点沿归一化向量D发送光线。")函数将自动为光线追踪期间合成的每个单独击中点在数组中附加一个条目。对于`opacity`采样过滤器（见下文），将为遇到的每个半透明采样创建一个数组条目，直到达到完全不透明度。使用数组输出时，使用`all`采样过滤器也可能有用，这将导致沿光线的所有击中点都被插入，无论是否超过不透明度限制。

```vex
// 查找沿光线所有击中点的位置和法线，无论可见性如何。
vector a_pos[];
vector a_nml[];
trace(P, dir, Time,
 "samplefilter", "all",
 "P", a_pos,
 "N", a_nml);

```

### 采样过滤选项

sample-filtering-options
默认情况下，Houdini使用不透明度混合来合成全局变量。在某些情况下，获取最近表面的值（无论是否透明）更为实用。您可以使用特殊的`samplefilter`关键字，其字符串值为`closest`或`opacity`，来控制全局变量的值是来自最近的表面还是不透明度混合。

"`samplefilter`",
`string`

当在参数列表中遇到`samplefilter`关键字时，*之后所有*的导入变量将使用指定的过滤模式。您可以在单个gather语句中指定多个`samplefilter`参数，以不同方式过滤不同的变量。

当前允许的`samplefilter`类型包括：

`minimum`

取所有样本的最小值。注意，对于元组值，将使用每个分量的最小值。

`maximum`

取所有样本的最大值。注意，对于元组值，将使用每个分量的最大值。

`opacity`

使用over操作合成样本。

`closest`

这是默认行为，仅返回最近的表面。

`screendoor`

使用样本的随机合成。

`sum`

返回所有样本值的总和。

`sum_square`

返回所有样本值的平方和。

`sum_reciprocal`

返回每个样本的倒数之和。

注意
当使用[sample_geometry](/zh-cn/houdini-vex/sampling/sample_geometry "对场景中的几何体进行采样，并从采样表面的着色器返回信息。")时，默认的`samplefilter`设置为`closest`，因为不透明度混合仅在沿射线合成数据时有效。

```vex
gather(P, dir,
 "samplefilter", "opacity",
 "Cf", hitCf,
 "Of", hitOf,
 "samplefilter", "closest",
 "P", hitP,
 "N", hitN)
{
 trace(pos, dir, time,
 // 使用随机透明度合成命中表面的bsdf
 "samplefilter", "screendoor",
 "F", hitF,
 // 但找到最近样本的位置
 "samplefilter", "closest",
 "P", hitP);
}

```

### 管线选项

pipeline-options

"`pipeline`",
`string`

在指定变量时，您可以穿插`pipeline`关键字选项来控制读写变量在管线中的填充位置。该值可以是`surface`、`atmosphere`或`displacement`之一。您可以多次指定`pipeline`选项。每次使用该选项都会影响之后指定的任何变量（直到下一次使用`pipeline`，如果有的话）。

```vex
gather(p, d, "pipeline", "surface", "Cf", surfCf,
 "pipeline", "atmosphere" "Cf", fogCf, "P", hitP)

```

示例

## 示例

以下示例演示了如何使用`sample_geometry`从一个表面照亮另一个表面。不是使用光源，而是从场景中名为`/obj/sphere_object*`的其他表面收集光照，并将照亮任何分配了geolight表面着色器的表面。

关于该着色器的几点观察：

- 使用`ray:solidangle`输出来按命中表面所对的立体角缩放几何体样本的贡献。这确保使用sample_geometry的结果与基于物理的辐照度匹配。
- 使用[trace](/zh-cn/houdini-vex/shading-and-rendering/trace "从P沿归一化向量D发送一条射线。")指令进行阴影处理
- 使用[newsampler](/zh-cn/houdini-vex/sampling/newsampler "为nextsample函数初始化采样序列。")和[nextsample](/zh-cn/houdini-vex/sampling/nextsample)的高质量采样模式进行抗锯齿处理

```vex
surface
geolight(int nsamples = 64)
{
 vector sam;
 vector clr, pos;
 float angle, sx, sy;
 int sid;
 int i;

 sid = newsampler();

 Cf = 0;
 for (i = 0; i < nsamples; i++)
 {
 nextsample(sid, sx, sy, "mode", "qstrat");
 sam = set(sx, sy, 0.0);
 if (sample_geometry(P, sam, Time,
 "distribution", "solidangle",
 "scope", "/obj/sphere_object*",
 "ray:solidangle", angle, "P", pos, "Cf", clr))
 {
 if (!trace(P, normalize(pos-P), Time,
 "scope", "/obj/sphere_object*",
 "maxdist", length(pos-P)-0.01))
 {
 clr *= angle / (2*PI);
 clr *= max(dot(normalize(pos-P), normalize(N)), 0);
 }
 else
 clr = 0;
 }
 Cf += clr;
 }
 Cf /= nsamples;
}

```
