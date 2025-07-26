---
title: reflectlight
order: 62
---
| 本页内容 | * [区域采样选项](#区域采样选项) * [光线选项](#光线选项) * [图像过滤选项](#图像过滤选项) * [示例](#示例) |
| --- | --- |
| 上下文 | [着色](../contexts/shading.html) |

`vector  reflectlight(float bias, float max_contrib, ...)`

bias通常是一个小数值（例如0.005），用于帮助消除自反射。如果bias小于0，则将使用`vm_raybias`设置指定的默认光线追踪偏置值。

max_contrib告诉渲染器反射光对像素最终颜色的贡献程度。这通常是光照模型反射分量的最大值。这对结果颜色没有影响。该值通常应小于1。

`vector  reflectlight(vector P, vector D, float bias, float max_contrib, ...)`

通用形式，接收位置P和方向D。

`vector  reflectlight(vector P, vector N, vector I, float bias, float max_contrib, ...)`

通用形式，接收位置P、方向D和入射角I，并返回反射向量。

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
当指定纹理时（例如使用`"environment"`关键字），也可以使用图像过滤关键字参数。参见[environment](/zh-cn/houdini-vex/texturing/environment "返回环境纹理的颜色")了解图像过滤关键字参数的列表。

"`scope`"，
`string`

可以被光线击中的对象列表。当指定时，`scope`会覆盖给定`raystyle`的默认作用域。`"scope:default"`值将使`scope`参数使用当前上下文的默认作用域——就像没有指定该参数一样。

允许覆盖光线相交的[作用域](/zh-cn/houdini-vex/contexts/shading_contexts.html#scope)。
特殊的作用域参数`scope:self`将匹配当前着色对象。

"`currentobject`"，
`material`

用于指定当前着色对象是什么。例如，当与作用域参数一起使用时，`scope:self`将匹配通过此参数传入的对象。

"`maxdist`"，
`float`
`=-1`

搜索对象的最大距离。这可以用于将对象搜索限制在附近对象。如果给定的`maxdist`为负值，则视为没有最大距离。

允许覆盖测试相交时光线可以行进的最大距离。
某些函数（如[fastshadow](/zh-cn/houdini-vex/light/fastshadow "从位置P沿方向D发送光线")）隐式定义了最大距离（由光线长度决定），可能应避免使用此选项。
然而，此选项在计算反射、全局光照、折射等时可以有效地使用。

"`variancevar`"，
`string`

用于方差抗锯齿的VEX导出变量名称。渲染器将此值与微多边形渲染中的相邻微多边形进行比较，以决定哪些着色点需要额外采样（使用`vm_variance`[属性](../../props/index.html "属性允许您设置灵活且强大的渲染、着色、光照和相机参数层次结构")作为阈值）。如果需要更多采样，算法会采用指定的最大光线采样数。

此变量必须从击中表面导入，因此它必须在导入名称列表中（见下文“从光线导入信息”）。如果未导入命名变量，此选项将被忽略。

方差抗锯齿将更多采样放在图像中高方差区域，例如锐利的阴影边缘。仅在启用`vm_dorayvariance`时使用。否则，仅使用最小光线采样数（或显式提供的`"samples"`值）进行聚集循环的抗锯齿。

覆盖全局方差控制（mantra的-v选项），用于确定光线追踪的抗锯齿质量。
更多信息请参考mantra文档。

"`angle`"，
`float`
`=0`

分布角度（以弧度指定）。对于gather()，光线将分布在此角度上。对于trace()，该角度用于指示滤波器宽度应随相交距离增加而增加的速率。较大的角度会导致更远的击中表面使用更大的导数，从而提高纹理和位移性能。

要有效，还应指定samples参数。

"`samples`"，
`int|float`
`=1`

应发送多少采样以过滤光线。对于
辐照度和遮挡函数，指定samples
参数将覆盖默认的辐照度采样。

"`environment`"，
`string`

如果发送到场景的光线未击中任何物体，则可以指定一个环境贴图进行评估。

使用光线的方向，将评估指定的环境贴图并返回结果颜色。
很可能需要为环境贴图评估指定一个变换空间。

对于refractlight和trace，无论指定的背景颜色如何，Of和Af变量都将设置为0。

当指定环境贴图时，也支持texture()的过滤选项。

参见[如何创建环境/反射贴图](../../render/envmaps.html)。

"`envobject`"，
`string`

如果使用环境贴图，可以通过将光线变换到场景中另一个对象、灯光或雾对象的空间来指定环境贴图的方向。在Houdini中，可以使用空对象来指定方向。例如：

```vex
Cf = R*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null_object_name");

```

"`envlight`"，
`string`

如果使用环境贴图，可以通过将光线变换到场景中灯光空间来指定环境贴图的方向。

"`envtint`"，
`vector`

如果使用环境贴图，用此颜色为其着色。

"`background`"，
`vector`

如果光线未击中任何物体，使用此作为场景的背景颜色。对于refractlight和trace，无论指定的背景颜色如何，Of和Af变量都将设置为0。

"`distribution`"，
`string`

**函数**：[irradiance](/zh-cn/houdini-vex/shading-and-rendering/irradiance "在点P处计算辐照度（全局光照），法线为N。"), [occlusion](/zh-cn/houdini-vex/shading-and-rendering/occlusion "计算环境遮挡。")

计算辐照度的分布。默认使用余弦分布（漫反射光照）。样式的可能值为`"nonweighted"`用于均匀采样或`"cosine"`用于余弦加权采样。

图像过滤选项

## 图像过滤选项

指定过滤参数的示例：

```vex
colormap(map, u, v, "smode", "decal", "tmode", "repeat", "border", {.1,1,1});
colormap(map, u, v, "mode", "clamp", "width", 1.3);
colormap(map, u, v, "filter", "gauss", "width", 1.3, "mode", "repeat");

```

如果纹理是深层的`.rat`文件，可以使用`"channel"`关键字参数指定文件中的通道：

```vex
string channelname = "N";
cf = colormap(map, u, v, "channel", channelname);
```

- 当读取非Houdini原生格式（如`.pic`或`.rat`）的纹理时，Houdini使用[OpenImageIO](http://en.wikipedia.org/wiki/OpenImageIO)从文件中读取图像数据。在这种情况下，下面的一些可变参数可能不起作用。

- 当纹理函数评估非Houdini格式纹理时，Houdini切换到使用OpenImageIO进行纹理评估。虽然许多可变关键字有对应的值，但有些关键字在OpenImageIO中没有等效功能。

 - 默认情况下，OIIO*不会*为没有多分辨率图像的图像创建MIP映射。您可以通过在`OPENIMAGEIO_IMAGECACHE_OPTIONS`环境变量内容中添加`automip=1`来启用此功能。

没有MIP映射，模糊和过滤可能无法按预期工作。
\* 您也可以使用`OPENIMAGEIO_IMAGECACHE_OPTIONS`覆盖OIIO用于缓存的内存量。

默认情况下，Houdini会将缓存内存设置为计算机物理内存的1/8。如果设置了`OPENIMAGEIO_IMAGECACHE_OPTIONS`变量，它将覆盖计算出的缓存大小。

"`wrap`"，
`string`
`="repeat"`

`repeat`或`periodic`

图像贴图将在0到1范围外重复。
基本上，纹理坐标的整数部分被忽略。这是默认值。

`clamp`或`edge`或`streak`

纹理坐标将被限制在0到1范围内。这导致范围外的评估结果为图像最接近边缘的颜色（边界像素在范围外延伸）。

`black`或`decal`或`color`

范围0到1外的坐标将评估为边框颜色（而不是图像中的颜色）。边框颜色默认为黑色（即0）。

"`uwrap`"，
`string`

（又名`swrap`）
指定u坐标在0到1范围外的行为。值与`wrap`相同。

"`vwrap`"，
`string`

（又名`twrap`）
指定v坐标在0到1范围外的行为。值与`wrap`相同。

"`border`"，
`float|vector|vector4`
`=0`

指定使用Black/Decal/Color包裹时的边框颜色。
**对OpenImageIO格式无效**。

"`default_color`"，
`float|vector|vector4`

指定找不到纹理贴图时使用的颜色。如果未给出此参数，颜色由HOUDINI_DEFAULT_TEXTURE_COLOR变量设置。

"`channel`"，

指定具有多个颜色平面（例如`diffuse_indirect`或`N`）的纹理的颜色通道。
对于ptex图像，这指定第一个通道的索引（例如`0`或`4`）。

"`blur`"，
`float`

在x和y方向模糊。模糊量以图像大小的百分比测量——因此0.1的模糊将模糊图像宽度的10%。如果需要不同维度的模糊量，请使用`xblur`和`yblur`。

"`xblur`"，

（又名`ublur`，`sblur`）
x图像方向的模糊量。

"`yblur`"，

（又名`vblur`，`tblur`）
y图像方向的模糊量。

"`pixelblur`"，
`float`

以浮点数像素模糊纹理。
**对OpenImageIO格式无效**。

```vex
Cf = texture("map.rat", ss, tt, "pixelblur", 2.0);

```

"`xpixelblur`"，
`float`

以浮点数像素在X方向模糊纹理。

"`ypixelblur`"，
`float`

以浮点数像素在Y方向模糊纹理。

"`filter`"，
`string`
`="box"`

指定用于评估的抗锯齿过滤器类型。

**对于Houdini原生格式**，以下值应为指定以下之一的字符串：

`"point"`

点采样（即无过滤）

`"box"`

盒式过滤器（默认）

`"gauss"`

高斯过滤器

`"bartlett"`

巴特利特/三角过滤器

`"sinc"`

Sinc锐化过滤器

`"hanning"`

汉宁过滤器

`"blackman"`

布莱克曼过滤器

`"catrom"`

Catmull-Rom过滤器

**对于所有其他格式（由OpenImageIO加载）**，指定`"point"`过滤器将OIIO插值模式设置为`"closest"`并禁用MIP映射。任何其他值使用OIIO智能双三次插值。您可以使用`"filtermode"`可变参数获得更精细的控制（见下文）。

"`xfilter`"，
`string`

（又名`ufilter`，`sfilter`）
指定X方向的过滤器。过滤器与`filter`相同。

"`yfilter`"，
`string`

（又名`vfilter`，`tfilter`）
指定Y方向的过滤器。过滤器与`filter`相同。

"`filtermode`"，
`string`

**对于Houdini原生格式**，VEX还支持更简单的过滤。`filtermode`可以设置为以下之一：

`filter`

使用`filter`关键字参数指定的过滤器。

`bilinear`

使用简单的双线性过滤。这是最快的专用过滤模式，但提供的过滤质量最低。

`biquadratic`

使用简单的二次过滤（3阶过滤）。

`bicubic`

使用简单的双三次过滤。

当`filtermode`设置为`bilinear`、`biquadratic`或`bicubic`时，忽略几个参数（如`filter`和`width`），改用固定的插值过滤器。其他参数（特别是`lerp`和`blur`关键字）仍然有效。

**对于所有其他格式（由OpenImageIO加载）**，您可以将`filtermode`设置为`"filter"`（见上文`"filter"`）、`"bilinear"`、`"biquadratic"`或`"bicubic"`。

"`width`"，
`float`
`=1.0`

**对于Houdini原生格式**，这设置X和Y方向的过滤器宽度。

**对于所有其他格式（由OpenImageIO加载）**，这设置OIIO的`swidth`和`twidth`选项。

"`xwidth`"，
`float`

（又名`uwidth`，`swidth`）
X方向的过滤器宽度。

"`ywidth`"，
`float`

（又名`vwidth`，`twidth`）
Y方向的过滤器宽度。

"`zwidth`"，
`float`

Z方向的过滤器宽度（用于阴影贴图）。
与其他宽度参数不同，这是以世界空间单位测量的。

"`extrapolate`"，
`int`

是否在计算抗锯齿信息时使用导数外推。
默认启用导数外推。参数应为0或1。

"`lerp`"，
`int`

**对于Houdini原生格式**，这指定RAT文件是否应在不同MIP级别之间插值。默认情况下，此功能关闭。启用插值将有助于消除访问`.rat`文件的不同MIP级别时的不连续性。然而，纹理评估的结果会稍微柔和（即更模糊）并且需要更多时间。

此参数有三个可能的值。

`0`

禁用MIP映射插值（最快）。

`1`

近似MIP映射插值（快速）。

`2`

高质量MIP映射插值（较慢但质量最高）。

**对于所有其他格式（由OpenImageIO加载）**，值为0指定单个MIP级别，任何其他值指定三线性插值。

"`depthinterp`"，
`string`

指定深度阴影贴图的深度插值模式，以控制在采样点之间两个z记录之间返回的不透明度值。

参数必须为字符串。

`discrete`

（默认）返回采样点之前的第一个z记录。

`linear`

线性插值采样点前后的z记录的不透明度。

参见[深度阴影贴图](../../render/lights.html)了解两种模式之间的区别。

"`beerlambert`"，
`int`

评估体积深度阴影贴图时，这将启用Beer-Lambert不透明度插值。Beer-Lambert是一种更准确但更昂贵的插值形式。

参数应为0或1。

"`srccolorspace`"，
`string`

指定纹理存储的颜色空间。
当访问纹理值时，如果需要，它们将从该空间转换为线性空间进行渲染。
`auto`

(默认) 根据文件自动判断源色彩空间。当前实现中，8位纹理将假定为sRGB色彩空间，其他所有纹理假定为线性空间。

`linear`

转换为线性空间。当前仅影响8位纹理（其他纹理默认已在线性空间）。此选项用于强制将凹凸贴图或置换贴图使用的纹理按线性空间解释。

`sRGB`

无论纹理的位深度或通道数量如何，都强制从sRGB色彩空间转换为线性空间。

`rec709`

从Rec709色彩空间转换为线性空间。

`gamma22`

从Gamma 2.2色彩空间转换为线性空间。

`raw`

直接使用未经转换的贴图颜色

`srccolorspace`参数也可以是OpenColorIO支持的任何色彩空间。

"`face`",

使用Ptex纹理贴图时，`face`参数用于指定ptexture查询的面。
**对OpenImageIO格式无效**。

"`ptexorient`",
`int`

使用Ptex纹理时，多边形上的隐式纹理坐标将作为纹理查询的插值参数（与`face`结合使用）。但不同软件可能对缠绕方向和朝向有不同的理解。此关键字参数允许您控制Houdini多边形朝向的解释方式。`ptexorient`需要一个由位字段组成的整型参数：

- 位0×01：对`s`坐标取补
- 位0×02：对`t`坐标取补
- 位0×04：交换`s`和`t`坐标

例如，值6(0×4|0×2)相当于调用`texture(map, 1-t, s)`而非`texture(map, s, t)`。

默认`ptexorient`为0，与<http://ptex.us>上的示例兼容。

**对OpenImageIO格式无效**。

"`iesnormalization`",
`string`
`="maxvalue"`

通过`environment()`函数查询时，选择IES贴图输出值的不同归一化方法。

`none`

使用原始值（按头部坎德拉乘数缩放）。

`maxvalue`

(默认) 按最大值归一化。这是mantra默认灯光着色器使用的传统行为。

`preserveenergy`

按覆盖角度积分值归一化，使IES配置文件在保持总能量输出的同时影响光的形状。

示例

## 示例

```vex
surface mirror(vector refl_color=1; float bias=.005)
{
 Cf = refl_color * reflectlight(bias, max(refl_color));
}
```
