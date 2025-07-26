---
title: trace
order: 77
---
| 本页内容 | * [光源包含/排除选项](#光源包含排除选项) * [区域采样选项](#区域采样选项) * [光线选项](#光线选项) * [光线发射选项](#光线发射选项) * [向表面着色器发送信息](#向表面着色器发送信息) * [从光线导入信息](#从光线导入信息) * [采样过滤选项](#采样过滤选项) * [渲染管线选项](#渲染管线选项) |
| --- | --- |
| 上下文 | [着色](../contexts/shading.html) |
说明：用于计算输入矩阵迹(trace)的VEX函数是[tr](/zh-cn/houdini-vex/math/tr "返回给定矩阵的迹")。

`void  trace(vector &cv, vector &of, float &af, vector P, vector D, float shadow_bias, float max_contrib, ...)`

从点P沿归一化向量D发射光线。结果的颜色、不透明度和alpha值将存入输出变量。

shadow_bias通常是一个小数值，用于防止自阴影。

max_contrib控制trace()调用结果对最终像素颜色的贡献程度。max_contrib不会影响trace()调用本身的结果。

`int  trace(vector pos, vector dir, float time, ...)`

在指定`time`向场景发射单条光线并获取击中表面的信息。返回值为1表示光线击中了表面。

只有第二种函数签名接受以下可变参数。第一种trace签名更特定，是旧版mantra的遗留形式。
光源包含/排除选项

## 光源包含排除选项

"`categories`",
`string`
`="*"`

通过灯光的"category"标签指定要包含/排除的光源。
相比使用`"lightmask"`关键字参数通过名称模式匹配，这是更推荐的包含/排除光源方式。

例如：

```vex
diff = diffuse(nml, "lightmask", "hero | fill");

```

详见[光源分类](../../render/lights.html#categories)。

"`lightmask`",
`string`
`="*"`

当评估光照和阴影着色器时，对象有预定义的光照遮罩。该遮罩通常在几何对象中指定，定义了用于照亮表面或雾效着色器的光源列表。可以通过指定"lightmask"参数来覆盖默认光照遮罩。

例如：

```vex
diff = diffuse(nml, "lightmask", "light*,^light2");

```

...将使所有名称以"light"开头（除了名为"light2"的光源）的光源参与漫反射照明计算。

支持除组扩展外的所有Houdini作用域模式：

- `*` - 通配符匹配
- `?` - 单字符匹配
- `^` - 排除运算符
- `[list]` - 字符列表匹配

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
当指定纹理时（如使用`"environment"`关键字），也可以使用图像过滤关键字参数。详见[environment](/zh-cn/houdini-vex/texturing/environment "返回环境纹理的颜色")查看图像过滤关键字参数列表。

"`scope`",
`string`

可被光线击中的对象列表。指定后，`scope`将覆盖给定`raystyle`的默认作用域。`"scope:default"`值将使`scope`参数使用当前上下文的默认作用域——就像未指定该参数一样。

允许覆盖光线相交的[作用域](/zh-cn/houdini-vex/contexts/shading_contexts.html#scope)。
特殊作用域参数`scope:self`将匹配当前着色对象。

"`currentobject`",
`material`

用于指定当前着色对象。例如，当与scope参数一起使用时，`scope:self`将匹配由此参数传入的对象。

"`maxdist`",
`float`
`=-1`

搜索对象的最大距离。可用于将对象搜索限制在附近对象。如果给定的`maxdist`为负值，则表示没有最大距离限制。

允许覆盖测试相交时光线能行进的最大距离。某些函数（如[fastshadow](/zh-cn/houdini-vex/light/fastshadow "从位置P沿方向D发射光线")）已隐式定义了最大距离（通过光线长度），应避免使用此选项。但在计算反射、全局光照、折射等时，此选项可有效使用。

"`variancevar`",
`string`

用于方差抗锯齿的VEX导出变量名。渲染器会将该值与相邻微多边形比较（使用`vm_variance`[属性](../../props/index.html "属性允许设置灵活强大的渲染、着色、光照和相机参数层次结构")作为阈值），决定哪些着色点需要额外采样（最多达到指定的最大光线采样数）。

该变量必须从击中表面导入，因此必须在导入名称列表中（见下文"从光线导入信息"）。如果未导入命名变量，此选项将被忽略。

方差抗锯齿会在图像高方差区域（如锐利阴影边缘）放置更多采样。仅在启用`vm_dorayvariance`时使用。否则，仅使用最小光线采样数（或显式提供的`"samples"`值）进行聚集循环的抗锯齿。

覆盖用于决定光线追踪抗锯齿质量的全局方差控制（mantra的-v选项）。详情请参阅mantra文档。

"`angle`",
`float`
`=0`

分布角度（以弧度指定）。对于gather()，光线将按此角度分布。对于trace()，该角度用于指示随着相交距离增加，过滤宽度应增加的速率。较大角度会使更远的击中表面使用更大的导数，从而提高纹理和置换性能。

要生效，还应指定samples参数。

"`samples`",
`int|float`
`=1`

应发送多少采样来过滤光线。对于辐照度和遮挡函数，指定samples参数将覆盖默认辐照度采样。

"`environment`",
`string`

如果发射到场景中的光线未击中任何物体，则可以指定要评估的环境贴图。

使用光线方向，将评估指定的环境贴图并返回结果颜色。很可能需要为环境贴图评估指定变换空间。

对于refractlight和trace，无论指定的背景色如何，Of和Af变量都将设为0。

指定环境贴图时，也支持texture()的过滤选项。

参见[如何创建环境/反射贴图](../../render/envmaps.html)。

"`envobject`",
`string`

如果使用环境贴图，可以通过将光线转换到场景中另一个对象、光源或雾效对象空间来指定环境贴图的方向。在Houdini中，可使用null对象指定方向。例如：

```vex
Cf = R*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null_object_name");

```

"`envlight`",
`string`

如果使用环境贴图，可以通过将光线转换到场景中光源的空间来指定环境贴图的方向。

"`envtint`",
`vector`

如果使用环境贴图，用此颜色为其着色。

"`background`",
`vector`

如果光线未击中任何物体，使用此颜色作为场景背景色。对于refractlight和trace，无论指定的背景色如何，Of和Af变量都将设为0。

"`distribution`",
`string`

**函数**：[irradiance](/zh-cn/houdini-vex/shading-and-rendering/irradiance "计算点P处法线为N的辐照度（全局光照）"), [occlusion](/zh-cn/houdini-vex/shading-and-rendering/occlusion "计算环境光遮挡")

计算辐照度的分布方式。默认使用余弦分布（漫反射照明）。样式可能值为`"nonweighted"`（均匀采样）或`"cosine"`（余弦加权采样）。

光线发射选项

## 光线发射选项

"`width`",
`float`
`=-1`

指定光线源处的过滤宽度。如果同时指定了`angle`，过滤宽度将随光线距离增加而变大。默认情况下，过滤宽度从当前着色上下文初始化，因此通常不需要直接指定`width`。负值将被忽略，并导致过滤宽度从当前着色上下文初始化。

"`distribution`",
`string`
`="cosine"`

决定采样分布方式。

对于[gather](/zh-cn/houdini-vex/shading-and-rendering/gather "向场景发射光线并返回被光线击中的表面着色器信息")：

- `cosine` – 光线按余弦（漫反射）函数在半球上分布
- `uniform` – 光线在半球上均匀分布

对于[sample_geometry](/zh-cn/houdini-vex/sampling/sample_geometry "采样场景中的几何体并返回被采样表面的着色器信息")：

- `area` – 采样按图元面积分布
- `parametric` – 采样按图元ID、细分ID和参数化表面坐标(s,t)分布
- `solidangle` – 采样按图元面积或图元面积及图元所对立体角分布

"`biasdir`",
`vector`
`=Ng`

当**沿法线偏置**启用时，覆盖偏置方向。未指定`biasdir`时使用几何法线`Ng`。当沿法线偏置禁用时，此选项无效。

"`SID`",
`int`
`=0`

传递给被调用着色器的采样标识符。如果调用着色器使用SID生成采样，将修改后的采样标识符传递给被调用着色器会很有用，这样它可以从指定偏移处开始采样。该值将用于初始化击中表面中的SID全局变量。

"`rayweight`",
`float`
`=1`

给mantra的提示，表示此光线对最终着色的相对贡献度。该值被光线裁剪阈值用于限制光线发送（类似于光线反弹）。

"`raystyle`",
`string`
`="refract"`

发射的光线类型。Mantra将使用`raystyle`决定默认的光线追踪遮罩和用于光线终止的反弹限制。

- `reflect` – 发射反射光线。Mantra将使用反射遮罩和反射限制来终止光线追踪。
- `refract` – (默认)发射折射光线。Mantra将使用折射遮罩和折射限制来终止光线追踪。
- `diffuse` – 发射漫反射光线。Mantra将对漫反射光线使用漫反射限制。
- `shadow` – 发射阴影光线。Mantra不会修改光线追踪层级，如果在阴影或光源着色器内部，将根据`shadowmask`进行追踪。
- `primary` – 发射主光线。当着色器需要改变主光线方向而不影响仅应用于直接可见对象（如遮罩和幻影）的渲染设置行为时，可使用此样式。Mantra在发射`primary`光线时仍会增加光线追踪层级。
- `nolimit` – 发射无光线追踪反弹次数限制的反射光线。Mantra在发射`nolimit`光线时仍会增加光线追踪层级。

"`categories`",
`string`

用于选择可被光线击中对象的类别表达式。指定后，将覆盖现有的`reflectcategories`和`refractcategories`参数。

例如，`^hidden`将击中所有不具有hidden类别的对象，`shiny|happy`将击中所有具有shiny或happy类别的对象。

scope和categories参数的交叉部分用于选择可被光线击中的对象。

"`samplebase`",
`float`
`=0`

通常，光线在被着色的微多边形表面上分布。此参数可用于控制区域。值为0将强制所有光线从同一点发射。值为1将覆盖整个微多边形。（仅限Gather）

"`transparentsamples`",
`int`
`=1`

使用数组输出进行随机透明采样的采样数。通常此值应设为1，除非您请求了数组变量中的导出——在这种情况下，光线追踪器将为沿光线的每个采样在数组中插入一个条目。

注意
当使用`screendoor` `samplefilter`导入`F`或`ray:material`时，`transparentsamples`必须为1。

向表面着色器发送信息

## 向表面着色器发送信息

使用`"send:name", value`形式的关键字，您可以将数据从原始表面传递到被光线相交的表面。这些参数传递您想要的任何值。

```vex
gather(P, dir, "send:N", normalize(N)) { ... }

```

您可以在接收端（即被光线击中的表面）使用[rayimport](/zh-cn/houdini-vex/shading-and-rendering/rayimport "导入由聚集循环中的着色器发送的值")函数提取这些传递的数据。第一个参数是名称（不带`send:`前缀），第二个参数是存储导入值的变量。

`int rayimport(string name, <type> &value)`

`rayimport`成功导入值时返回`1`。

从光线导入信息

## 从光线导入信息

您可以指定要从击中着色器导入的全局或导出变量名称，形式为`"varname", &var`，通常包括`Cf`（击中表面的颜色向量）和`Of`（击中表面的不透明度向量）。

```vex
vector hitcf;
gather(P, dir, "bias", 0.01, "Cf", hitcf) {...}

```

此外，您可以导入以下特殊关键字获取光线本身的信息：

"`ray:origin`",
`&vector`

光线的原点（在`else`子句中也定义）。

"`ray:direction`",
`&vector`

光线的方向（在`else`子句中也定义）。

"`ray:length`",
`&float`

到被光线击中的第一个表面的距离。

"`ray:area`",
`&float`

光线追踪作用域中所有几何体的总表面积。

"`ray:solidangle`",
`&float`

光线追踪作用域中所有几何体所对立体角的估计值。对于靠近或包围光线原点的大型物体，这可能是一个非常粗略的估计，而对于单个图元，估计可以非常准确。

您可以通过在数组变量中请求数据来检索沿光线多个击中点的信息。当导入值是数组类型时，[trace](/zh-cn/houdini-vex/shading-and-rendering/trace "从P沿归一化向量D发射光线")函数会自动为光线追踪期间合成的每个独立击中点在数组中追加一个条目。对于`opacity`采样过滤器（见下文），将为遇到的每个半透明采样创建数组条目，直到达到完全不透明。使用数组输出时，也可以使用`all`采样过滤器，这将导致无论是否超过不透明度限制，沿光线的所有击中点都会被插入。

```vex
// 查找沿光线所有击中点的位置和法线，不考虑可见性。
vector a_pos[];
vector a_nml[];
trace(P, dir, Time,
 "samplefilter", "all",
 "P", a_pos,
 "N", a_nml);

```

采样过滤选项

## 采样过滤选项

默认情况下，Houdini使用透明度混合来合成全局变量。在某些情况下，获取最近表面（无论是否透明）的值更为实用。您可以使用特殊的`samplefilter`关键字，其字符串值为`closest`或`opacity`，来控制全局变量的值是来自最近的表面还是透明度混合。

"`samplefilter`",
`string`

当在参数列表中遇到`samplefilter`关键字时，*之后所有*导入变量都将使用指定的过滤模式。您可以在单个gather语句中指定多个`samplefilter`参数，以不同方式过滤不同变量。

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
当使用[sample_geometry](/zh-cn/houdini-vex/sampling/sample_geometry "对场景中的几何体进行采样，并从采样表面的着色器返回信息。")时，默认的`samplefilter`设置为`closest`，因为透明度混合仅在沿射线合成数据时有效。

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

管线选项

## 管线选项

"`pipeline`",
`string`

在指定变量时，您可以穿插`pipeline`关键字选项来控制管线中填充读写变量的位置。该值可以是`surface`、`atmosphere`或`displacement`之一。您可以多次指定`pipeline`选项。每次使用该选项都会影响之后指定的任何变量（直到下一次使用`pipeline`，如果有的话）。

```vex
gather(p, d, "pipeline", "surface", "Cf", surfCf,
 "pipeline", "atmosphere" "Cf", fogCf, "P", hitP)

```
