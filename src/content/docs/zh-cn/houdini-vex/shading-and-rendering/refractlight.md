---
title: refractlight
order: 64
---

| 本页内容 | * [光源包含/排除选项](#光源包含排除选项) * [区域采样选项](#区域采样选项) * [光线选项](#光线选项) * [示例](#示例) |
| --- | --- |
| 上下文 | [着色](../contexts/shading.html) |

`void  refractlight(vector &cf, vector &of, float &af, vector P, vector D, float bias, float max_contrib, ...)`

`void  refractlight(vector &cf, vector &of, float &af, vector P, vector N, vector I, float eta, float bias, float max_contrib, ...)`

计算被当前表面折射的表面的光照。
计算并输出颜色(cf)、不透明度(of)和透明度(af)。参见[不透明度与透明度](/zh-cn/houdini-vex/contexts/shading_contexts.html#opacity)。

bias通常是一个小数值(例如0.005)，用于帮助消除自反射。

max_contrib告诉渲染器反射光对像素最终颜色的贡献程度。这对结果颜色没有影响。

第一种形式的refractlight()函数接受位置和方向，通常由[refract](/zh-cn/houdini-vex/shading-and-rendering/refract "给定入射方向、归一化法线和折射率，返回折射光线")或[fresnel](/zh-cn/houdini-vex/shading-and-rendering/fresnel "给定归一化的入射向量、表面法线和折射率(eta)，计算菲涅耳反射/折射贡献")函数计算得出。

为防止渲染器计算标准透明度(即非折射透明度)，必须将Of变量设置为{1,1,1}以使表面"不透明"。Af变量可以设置为任意值。

光源包含/排除选项

## 光源包含排除选项

"`categories`",
`string`
`="*"`

通过光源的"类别"标签指定要包含/排除的光源。
这是比使用`"lightmask"`关键字参数通过模式匹配光源名称更优的包含/排除光源方式。

例如：

```vex
diff = diffuse(nml, "lightmask", "hero | fill");
```

更多信息请参见[光源类别](../../render/lights.html#categories)。

"`lightmask`",
`string`
`="*"`

在评估光照和阴影着色器时，对象有预定义的光照遮罩。此遮罩通常在几何对象中指定，列出了用于照亮表面或雾着色器的光源。可以通过指定"lightmask"参数来覆盖默认的光照遮罩。

例如：

```vex
diff = diffuse(nml, "lightmask", "light*,^light2");
```

...将使所有名称以"light"开头(除了名为"light2"的光源)的光源被考虑用于漫反射照明。

支持除组扩展外的所有Houdini范围模式：

- `*` - 通配符匹配
- `?` - 单字符匹配
- `^` - 排除操作符
- `[list]` - 字符列表匹配

区域采样选项

## 区域采样选项

对于区域采样，必须同时指定角度和采样可变参数。例如：

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
当指定纹理时(例如使用`"environment"`关键字)，也可以使用图像过滤关键字参数。参见[environment](/zh-cn/houdini-vex/texturing/environment "返回环境纹理的颜色")了解图像过滤关键字参数的列表。

"`scope`",
`string`

可以被光线击中的对象列表。当指定时，`scope`会覆盖给定`raystyle`的默认范围。`"scope:default"`值将使`scope`参数使用当前上下文的默认范围 - 就像没有指定该参数一样。

允许覆盖光线交点的[范围](/zh-cn/houdini-vex/contexts/shading_contexts.html#scope)。
特殊的范围参数`scope:self`将匹配当前着色对象。

"`currentobject`",
`material`

用于指定当前着色对象是什么。例如，当与scope参数一起使用时，`scope:self`将匹配由此参数传入的对象。

"`maxdist`",
`float`
`=-1`

搜索对象的最大距离。这可以用于将对象搜索限制在附近对象。如果给定的`maxdist`为负值，则将视为没有最大距离。

允许覆盖测试交点时光线可以行进的最大距离。某些函数(如[fastshadow](/zh-cn/houdini-vex/light/fastshadow "从位置P沿方向D发送光线"))隐式定义了最大距离(由光线长度决定)，应避免使用此选项。然而，在计算反射、全局光照、折射等时，此选项可以有效地使用。

"`variancevar`",
`string`

用于方差抗锯齿的VEX导出变量名称。渲染器将此值与微多边形渲染中的相邻微多边形进行比较，以决定哪些着色点需要额外采样(使用`vm_variance`[属性](../../props/index.html "属性允许您设置渲染、着色、照明和相机参数的灵活而强大的层次结构")作为阈值)。如果需要更多样本，算法将采样到指定的最大光线样本数。

此变量必须从击中表面导入，因此它必须在导入名称列表中(见下文"从光线导入信息")。如果未导入命名变量，此选项将被忽略。

方差抗锯齿在高方差区域(如锐利的阴影边缘)放置更多样本。仅当`vm_dorayvariance`启用时使用。否则，仅使用最小光线样本(或显式提供的`"samples"`值)进行收集循环的抗锯齿。

覆盖用于确定光线追踪抗锯齿质量的全局方差控制(mantra的-v选项)。更多信息请参考mantra文档。

"`angle`",
`float`
`=0`

分布角度(以弧度指定)。对于gather()，光线将分布在此角度上。对于trace()，该角度用于指示滤波器宽度应随交点距离增加而增加的速率。较大的角度会使更远的击中表面使用更大的导数，从而提高纹理和置换性能。

要有效，还应指定samples参数。

"`samples`",
`int|float`
`=1`

应发送多少样本以过滤光线。对于辐照度和遮挡函数，指定samples参数将覆盖默认的辐照度采样。

"`environment`",
`string`

如果发送到场景的光线未击中任何物体，则可以指定要评估的环境贴图。

使用光线的方向，将评估指定的环境贴图并返回结果颜色。很可能需要为环境贴图评估指定变换空间。

对于refractlight和trace，无论指定的背景颜色如何，Of和Af变量都将设置为0。结果颜色。

当指定环境贴图时，还支持来自texture()的过滤选项。

参见[如何创建环境/反射贴图](../../render/envmaps.html)。

"`envobject`",
`string`

如果使用环境贴图，可以通过将光线变换到场景中另一个对象、光源或雾对象的空间来指定环境贴图的方向。在Houdini中，可以使用空对象来指定方向。例如：

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

如果光线未击中任何对象，则使用此作为场景的背景颜色。对于refractlight和trace，无论指定的背景颜色如何，Of和Af变量都将设置为0。

"`distribution`",
`string`

**函数**: [irradiance](/zh-cn/houdini-vex/shading-and-rendering/irradiance "在点P处计算具有法线N的辐照度(全局光照)"), [occlusion](/zh-cn/houdini-vex/shading-and-rendering/occlusion "计算环境遮挡")

计算辐照度的分布。默认为使用余弦分布(漫反射照明)。样式可能值为`"nonweighted"`表示均匀采样，或`"cosine"`表示余弦加权采样。

## 示例

```vex
surface
glass(float eta=1.3, bias = 0.005)
{
 float Kr, Kt;
 vector R, T;
 vector cf, of;
 float af;
 frensel(normalize(I), normalize(N), eta, Kr, Kt, R, T);
 Cf = Kr * reflectlight(P, R, bias, Kr);
 refractlight(cf, of, af, P, T, bias, Kt);
 Cf += Kt * cf;
 Af = clamp(Kr + af*Kt, 0, 1);
 Of = 1;
}
```
