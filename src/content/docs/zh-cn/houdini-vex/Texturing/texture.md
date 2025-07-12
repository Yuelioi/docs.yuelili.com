---
title: texture
order: 13
---

`vector|vector4 texture(string map, ...)`

在着色上下文中使用全局S和T坐标对纹理进行采样。这些签名仅在[着色上下文](../contexts/shading_contexts.html)中可用。

`vector|vector4 texture(string map, float ss, float tt, ...)`

在给定的S和T坐标处采样纹理，使用基于该点S和T导数的滤波宽度。如果在[着色上下文](../contexts/shading_contexts.html)之外使用此函数，滤波宽度将为0。

`vector|vector4 texture(string map, float s0, float t0, float s1, float t1, float s2, float t2, float s3, float t3, ...)`

使用显式采样四边形，其角点为(s0, t0)、(s1, t1)、(s2, t2)和(s3, t3)。

返回值

从纹理中采样的颜色值。

如果以`vector4`返回类型调用该函数，则第四分量将包含纹理的alpha值。

图像滤波选项

## 图像滤波选项

指定滤波参数的示例：

```vex
colormap(map, u, v, "smode", "decal", "tmode", "repeat", "border", {.1,1,1});
colormap(map, u, v, "mode", "clamp", "width", 1.3);
colormap(map, u, v, "filter", "gauss", "width", 1.3, "mode", "repeat");
```

如果纹理是深度`.rat`文件，可以使用`"channel"`关键字参数指定文件中的通道：

```vex
string channelname = "N";
cf = colormap(map, u, v, "channel", channelname);
```

- 当读取非Houdini原生格式（如`.pic`或`.rat`）的纹理时，Houdini使用[OpenImageIO](http://en.wikipedia.org/wiki/OpenImageIO)从文件中读取图像数据。在这种情况下，下面的一些可变参数可能无效。

- 当纹理函数评估非Houdini格式的纹理时，Houdini会切换到使用OpenImageIO进行纹理评估。虽然许多可变关键字有对应的值，但有些关键字在OpenImageIO中没有等效功能。

 - 默认情况下，OIIO不会为没有多分辨率图像的图像创建MIP贴图。可以通过在`OPENIMAGEIO_IMAGECACHE_OPTIONS`环境变量中添加`automip=1`来启用此功能。

没有MIP贴图时，模糊和滤波可能无法按预期工作。
\* 也可以使用`OPENIMAGEIO_IMAGECACHE_OPTIONS`来覆盖OIIO用于缓存的内存大小。

默认情况下，Houdini会将缓存内存设置为计算机物理内存的1/8。如果设置了`OPENIMAGEIO_IMAGECACHE_OPTIONS`变量，它将覆盖计算出的缓存大小。

"`wrap`",
`string`
`="repeat"`

`repeat` 或 `periodic`

图像贴图将在0到1范围之外重复。
基本上，纹理坐标的整数部分被忽略。这是默认设置。

`clamp` 或 `edge` 或 `streak`

纹理坐标将被限制在0到1范围内。这会导致范围外的评估结果为图像最边缘的颜色（边界像素在范围外被拉伸）。

`black` 或 `decal` 或 `color`

0到1范围之外的坐标将评估为边框颜色（而不是图像中的颜色）。默认边框颜色为黑色（即0）。

"`uwrap`",
`string`

（又名`swrap`）
指定当u坐标超出0到1范围时的行为。值与`wrap`相同。

"`vwrap`",
`string`

（又名`twrap`）
指定当v坐标超出0到1范围时的行为。值与`wrap`相同。

"`border`",
`float|vector|vector4`
`=0`

指定使用Black/Decal/Color包裹时的边框颜色。
**对OpenImageIO格式无效**。

"`default_color`",
`float|vector|vector4`

指定当找不到纹理贴图时使用的颜色。如果未提供此参数，颜色将由HOUDINI_DEFAULT_TEXTURE_COLOR变量设置。

"`channel`",

指定具有多个颜色通道的纹理的颜色通道（例如`diffuse_indirect`或`N`）。
对于ptex图像，这指定第一个通道的索引（例如`0`或`4`）。

"`blur`",
`float`

在x和y方向进行模糊处理。模糊量以图像大小的百分比衡量——因此0.1的模糊量将模糊图像宽度的10%。如果需要不同维度的模糊量，请使用`xblur`和`yblur`。

"`xblur`",

（又名`ublur`、`sblur`）
x图像方向的模糊量。

"`yblur`",

（又名`vblur`、`tblur`）
y图像方向的模糊量。

"`pixelblur`",
`float`

以像素数为单位模糊纹理。
**对OpenImageIO格式无效**。

```vex
Cf = texture("map.rat", ss, tt, "pixelblur", 2.0);
```

"`xpixelblur`",
`float`

在X方向以像素数为单位模糊纹理。

"`ypixelblur`",
`float`

在Y方向以像素数为单位模糊纹理。

"`filter`",
`string`
`="box"`

指定用于评估的抗锯齿滤波器类型。

**对于Houdini原生格式**，以下值应为指定以下之一的字符串：

`"point"`

点采样（即无滤波）

`"box"`

盒式滤波器（默认）

`"gauss"`

高斯滤波器

`"bartlett"`

Bartlett/三角滤波器

`"sinc"`

Sinc锐化滤波器

`"hanning"`

汉宁滤波器

`"blackman"`

布莱克曼滤波器

`"catrom"`

Catmull-Rom滤波器

**对于其他格式（由OpenImageIO加载）**，指定`"point"`滤波器会将OIIO插值模式设置为`"closest"`并禁用MIP贴图。任何其他值都使用OIIO智能双三次插值。可以使用`"filtermode"`可变参数进行更精细的控制（见下文）。

"`xfilter`",
`string`

（又名`ufilter`、`sfilter`）
指定X方向的滤波器。滤波器与`filter`相同。

"`yfilter`",
`string`

（又名`vfilter`、`tfilter`）
指定Y方向的滤波器。滤波器与`filter`相同。

"`filtermode`",
`string`

**对于Houdini原生格式**，VEX还支持更简单的滤波。`filtermode`可以设置为以下之一：

`filter`

使用`filter`关键字参数指定的滤波器。

`bilinear`

使用简单的双线性滤波。这是最快的专用滤波模式，但提供的滤波质量最低。

`biquadratic`

使用简单的二次滤波（三阶滤波）。

`bicubic`

使用简单的双三次滤波。

当`filtermode`设置为`bilinear`、`biquadratic`或`bicubic`时，
会忽略几个参数（如`filter`和`width`），转而使用固定的插值滤波器。其他参数（特别是`lerp`和`blur`关键字）仍然有效。

**对于其他格式（由OpenImageIO加载）**，可以将`filtermode`设置为`"filter"`（见上文`"filter"`）、`"bilinear"`、`"biquadratic"`或`"bicubic"`。

"`width`",
`float`
`=1.0`

**对于Houdini原生格式**，这设置X和Y方向的滤波宽度。

**对于其他格式（由OpenImageIO加载）**，这设置OIIO的`swidth`和`twidth`选项。

"`xwidth`",
`float`

（又名`uwidth`、`swidth`）
X方向的滤波宽度。

"`ywidth`",
`float`

（又名`vwidth`、`twidth`）
Y方向的滤波宽度。

"`zwidth`",
`float`

Z方向的滤波宽度（用于阴影贴图）。
与其他宽度参数不同，这是以世界空间单位衡量的。

"`extrapolate`",
`int`

是否在计算抗锯齿信息时使用导数外推。
默认启用导数外推。参数应为0或1。

"`lerp`",
`int`

**对于Houdini原生格式**，这指定RAT文件是否应在不同MIP级别之间插值。默认情况下，此功能关闭。启用插值将有助于消除访问`.rat`文件不同MIP级别时的不连续性。然而，纹理评估的结果会稍微模糊（即更柔和）并且需要更多时间。

此参数有三个可能的值。

`0`

禁用MIP贴图插值（最快）。

`1`

近似MIP贴图插值（较快）。

`2`

高质量MIP贴图插值（较慢但质量最高）。

**对于其他格式（由OpenImageIO加载）**，值为0表示单个MIP级别，任何其他值表示三线性插值。

"`depthinterp`",
`string`

指定深度阴影贴图的深度插值模式，
控制在两个z记录之间采样时返回的不透明度值。

参数必须为字符串。

`discrete`

（默认）返回采样点之前的第一个z记录。

`linear`

线性插值采样点前后的z记录的不透明度。

有关两种模式之间的差异，请参阅[深度阴影贴图](../../render/lights.html)。

"`beerlambert`",
`int`

评估体积深度阴影贴图时，这将启用Beer-Lambert不透明度插值。Beer-Lambert是一种更准确但更昂贵的插值形式。

参数应为0或1。

"`srccolorspace`",
`string`

指定纹理存储的颜色空间。
访问纹理值时，如果需要，它们将从该空间转换为线性空间进行渲染。

`auto`

（默认）根据文件确定源颜色空间。目前，这将假定8位纹理为sRGB颜色空间，其他所有纹理为线性。

`linear`

转换为线性空间。目前这仅影响8位纹理，因为其他纹理已假定为线性空间。使用此选项强制线性解释用于凹凸或位移贴图的纹理。

`sRGB`

无论纹理的位深度或通道数如何，强制从sRGB颜色空间转换为线性空间。

`rec709`

从Rec709颜色空间转换为线性空间。

`gamma22`

从Gamma 2.2颜色空间转换为线性空间。

`raw`

直接使用贴图颜色，不进行转换

`srccolorspace`参数也可以是OpenColorIO已知的任何颜色空间。

"`face`",

使用Ptex纹理贴图时，`face`参数用于指定ptexture查找的面。
**对OpenImageIO格式无效**。

"`ptexorient`",
`int`

使用Ptex纹理时，多边形上的隐式纹理坐标用作纹理查找的插值（结合`face`）。然而，不同软件可能对缠绕和方向有不同的理解。此关键字参数允许您控制Houdini多边形方向的解释。`ptexorient`需要一个整数参数，该参数由位字段组成

- 位0×01：补码`s`坐标
- 位0×02：补码`t`坐标
- 位0×04：交换`s`和`t`坐标

例如，值为6（0×4|0×2）相当于调用`texture(map, 1-t, s)`而不是`texture(map, s, t)`。

默认`ptexorient`为0，这与<http://ptex.us>上的示例正常工作。

**对OpenImageIO格式无效**。

"`iesnormalization`",
`string`
`="maxvalue"`

通过`environment()`函数查询时，选择不同的IES贴图输出值归一化方法。

`none`

使用标头中坎德拉乘数缩放的原始值。

`maxvalue`

（默认）按最大值归一化。这是mantra默认灯光着色器使用的传统行为。

`preserveenergy`

按覆盖角度积分值归一化，以便IES配置文件影响灯光的形状，同时保持其总能量输出。
