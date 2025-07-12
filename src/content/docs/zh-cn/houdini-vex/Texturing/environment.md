---
title: environment
order: 3
---

| 本页内容 | * [图像过滤选项](#图像过滤选项) * [示例](#示例) |
| --- | --- |

`vector  environment(string texture_filename, vector reflect_dir, ...)`

`vector4  environment(string texture_filename, vector reflect_dir, ...)`

`vector  environment(string texture_filename, vector reflect_dir0, vector reflect_dir1, vector reflect_dir2, vector reflect_dir3, ...)`

`vector4  environment(string texture_filename, vector reflect_dir0, vector reflect_dir1, vector reflect_dir2, vector reflect_dir3, ...)`

`vector  environment(string texture_filename, vector reflect_dir, float filter_angle, ...)`

`vector4  environment(string texture_filename, vector reflect_dir, float filter_angle, ...)`

返回环境纹理在`reflect_dir`参数指定方向上的颜色。指定四个向量的签名会过滤由这些向量定义的锥体内的贴图像素。除了使用锥体，您还可以通过`filter_angle`参数配合单一反射方向来定义角度过滤贴图。

您还可以使用environment函数在应用了正确角度映射的IES光度学光图中查找强度值。要标准化IES数据，请将`iesnormalization`模式设置为：

- `preserveenergy`：保留光的能量输出
- `maxvalue`：使用表中的最大值进行标准化
- `none`：不进行标准化

注意
要在对象空间中执行环境贴图查找，必须首先使用`vtransform()`函数变换方向向量。

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

- 当读取非Houdini原生格式（如`.pic`或`.rat`）的纹理时，Houdini使用[OpenImageIO](http://en.wikipedia.org/wiki/OpenImageIO)从文件中读取图像数据。在这种情况下，以下部分可变参数可能无效。

- 当纹理函数评估非Houdini格式的纹理时，Houdini会切换到使用OpenImageIO进行纹理评估。虽然许多可变关键字有对应的值，但部分关键字在OpenImageIO中没有等效功能。

 - 默认情况下，OIIO不会为没有多分辨率图像的图像创建MIP贴图。您可以通过在`OPENIMAGEIO_IMAGECACHE_OPTIONS`环境变量中添加`automip=1`来启用此功能。

没有MIP贴图时，模糊和过滤可能无法按预期工作。
\* 您还可以使用`OPENIMAGEIO_IMAGECACHE_OPTIONS`覆盖OIIO用于缓存的内存大小。

默认情况下，Houdini会将缓存内存设置为计算机物理内存的1/8。如果设置了`OPENIMAGEIO_IMAGECACHE_OPTIONS`变量，它将覆盖计算出的缓存大小。

"`wrap`",
`string`
`="repeat"`

`repeat` 或 `periodic`

图像贴图将在0到1范围外重复。
基本上，纹理坐标的整数部分被忽略。这是默认设置。

`clamp` 或 `edge` 或 `streak`

纹理坐标将被限制在0到1的范围内。这会导致范围外的评估结果为最接近图像边缘的颜色（边界像素在范围外延伸）。

`black` 或 `decal` 或 `color`

范围0到1之外的坐标将评估为边界颜色（而不是图像中的颜色）。边界颜色默认为黑色（即0）。

"`uwrap`",
`string`

（又称`swrap`）
指定u坐标超出0到1范围时的行为。值与`wrap`相同。

"`vwrap`",
`string`

（又称`twrap`）
指定v坐标超出0到1范围时的行为。值与`wrap`相同。

"`border`",
`float|vector|vector4`
`=0`

指定使用Black/Decal/Color包裹时的边界颜色。
**对OpenImageIO格式无效**。

"`default_color`",
`float|vector|vector4`

指定在找不到纹理贴图时使用的颜色。如果未提供此参数，颜色将由HOUDINI_DEFAULT_TEXTURE_COLOR变量设置。

"`channel`",

指定具有多个颜色平面的纹理的颜色通道（例如`diffuse_indirect`或`N`）。
对于ptex图像，这指定第一个通道的索引（例如`0`或`4`）。

"`blur`",
`float`

在x和y方向模糊。模糊量以图像大小的百分比衡量——例如0.1的模糊会模糊图像宽度的10%。如果需要不同维度的模糊量，请使用`xblur`和`yblur`。

"`xblur`",

（又称`ublur`，`sblur`）
x图像方向的模糊量。

"`yblur`",

（又称`vblur`，`tblur`）
y图像方向的模糊量。

"`pixelblur`",
`float`

以浮点数像素模糊纹理。
**对OpenImageIO格式无效**。

```vex
Cf = texture("map.rat", ss, tt, "pixelblur", 2.0);

```

"`xpixelblur`",
`float`

在X方向以浮点数像素模糊纹理。

"`ypixelblur`",
`float`

在Y方向以浮点数像素模糊纹理。

"`filter`",
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

巴特利特/三角形过滤器

`"sinc"`

Sinc锐化过滤器

`"hanning"`

汉宁过滤器

`"blackman"`

布莱克曼过滤器

`"catrom"`

Catmull-Rom过滤器

**对于所有其他格式（由OpenImageIO加载）**，指定`"point"`过滤器会将OIIO插值模式设置为`"closest"`并禁用MIP贴图。任何其他值使用OIIO智能双三次插值。您可以使用`"filtermode"`可变参数进行更精细的控制（见下文）。

"`xfilter`",
`string`

（又称`ufilter`，`sfilter`）
指定X方向的过滤器。过滤器与`filter`相同。

"`yfilter`",
`string`

（又称`vfilter`，`tfilter`）
指定Y方向的过滤器。过滤器与`filter`相同。

"`filtermode`",
`string`

**对于Houdini原生格式**，VEX还支持更简单的过滤。`filtermode`可以设置为以下之一：

`filter`

使用`filter`关键字参数指定的过滤器。

`bilinear`

使用简单的双线性过滤。这是最快的专用过滤模式，但提供的过滤质量最低。

`biquadratic`

使用简单的二次过滤（三阶过滤）。

`bicubic`

使用简单的双三次过滤。

当`filtermode`设置为`bilinear`、`biquadratic`或`bicubic`时，
多个参数（如`filter`和`width`）将被忽略，转而使用固定的插值过滤器。其他参数（特别是`lerp`和`blur`关键字）仍然有效。

**对于所有其他格式（由OpenImageIO加载）**，您可以将`filtermode`设置为`"filter"`（见上文的`"filter"`）、`"bilinear"`、`"biquadratic"`或`"bicubic"`。

"`width`",
`float`
`=1.0`

**对于Houdini原生格式**，这设置X和Y方向的过滤器宽度。

**对于所有其他格式（由OpenImageIO加载）**，这设置OIIO的`swidth`和`twidth`选项。

"`xwidth`",
`float`

（又称`uwidth`，`swidth`）
X方向的过滤器宽度。

"`ywidth`",
`float`

（又称`vwidth`，`twidth`）
Y方向的过滤器宽度。

"`zwidth`",
`float`

Z方向的过滤器宽度（用于阴影贴图）。
与其他宽度参数不同，这是以世界空间单位衡量的。

"`extrapolate`",
`int`

是否在计算抗锯齿信息时使用导数外推。
导数外推默认开启。参数应为0或1。

"`lerp`",
`int`

**对于Houdini原生格式**，这指定RAT文件是否应在不同MIP级别之间插值。默认情况下，此功能关闭。启用插值将有助于消除访问`.rat`文件不同MIP级别时的不连续性。然而，纹理评估的结果会稍微柔和（即更模糊）并且需要更多时间。

此参数有三个可能的值。

`0`

禁用MIP贴图插值（最快）。

`1`

近似MIP贴图插值（快速）。

`2`

高质量MIP贴图插值（较慢但质量最高）。

**对于所有其他格式（由OpenImageIO加载）**，值为0指定单个MIP级别，任何其他值指定三线性插值。

"`depthinterp`",
`string`

指定深度阴影贴图的深度插值模式，
控制在两个z记录之间采样贴图时将返回的不透明度值。

参数必须为字符串。

`discrete`

（默认）返回采样点前的第一个z记录。

`linear`

线性插值采样点前后的z记录的不透明度。

有关两种模式差异的更多信息，请参见[深度阴影贴图](../../render/lights.html)。

"`beerlambert`",
`int`

在评估体积深度阴影贴图时，这将启用Beer-Lambert
不透明度插值。Beer-Lambert是一种更准确但更昂贵的插值形式。

参数应为0或1。

"`srccolorspace`",
`string`

指定纹理存储的颜色空间。
当访问纹理值时，如果需要，它们将从该空间转换为线性空间进行渲染。

`auto`

（默认）根据文件确定源颜色空间。目前，这将假定8位纹理为sRGB颜色空间，其他所有纹理为线性。

`linear`

转换为线性空间。目前这仅影响8位纹理，因为其他纹理已假定为线性空间。使用此选项强制线性解释用于凹凸或位移贴图的纹理。

`sRGB`

无论纹理的位深度或通道数量如何，强制从sRGB颜色空间转换为线性空间。

`rec709`

从Rec709颜色空间转换为线性空间。

`gamma22`

从Gamma 2.2颜色空间转换为线性空间。

`raw`

使用未经转换的贴图颜色

`srccolorspace`参数也可以是OpenColorIO已知的任何颜色空间。

"`face`",

在使用Ptex纹理贴图时，`face`参数用于指定ptexture查找的面。
**对OpenImageIO格式无效**。

"`ptexorient`",
`int`

在使用Ptex纹理时，多边形上的隐式纹理坐标用作纹理查找的插值（结合`face`）。然而，不同的软件可能对缠绕和方向有不同的理解。此关键字参数允许您控制Houdini多边形的方向解释。`ptexorient`需要一个整数参数，该参数由位字段组成

- 位0×01：补码`s`坐标
- 位0×02：补码`t`坐标
- 位0×04：交换`s`和`t`坐标

例如，值为6（0×4|0×2）相当于调用`texture(map, 1-t, s)`而不是`texture(map, s, t)`。

默认的`ptexorient`为0，这与<http://ptex.us>上的示例正常工作。

**对OpenImageIO格式无效**。

"`iesnormalization`",
`string`
`="maxvalue"`

选择通过`environment()`函数查询时标准化IES贴图输出值的不同方法。

`none`

使用标头中的坎德拉乘数缩放的原始值。

`maxvalue`

（默认）按最大值标准化。这是mantra默认灯光着色器使用的传统行为。

`preserveenergy`

按覆盖角度积分值标准化，以便IES配置文件影响光的形状，同时保留其总能量输出。

示例

## 示例

```vex
vector dir = vtransform("space:current", "space:object", {0, 1, 0});
vector clr = environment("sky.rat", dir);

```
