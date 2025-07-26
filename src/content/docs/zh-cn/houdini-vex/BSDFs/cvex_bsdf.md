---
title: cvex_bsdf
order: 7
---

| 本页内容 | * [评估函数](#eval_fn) * [采样函数](#sample_fn) * [组件掩码隐式参数](#component-mask-implicit-argument) * [自定义可变参数](#custom-variadic-arguments) * [验证](#validation) * [示例](#examples)   + [示例：漫反射](#example-diffuse)  + [示例：镜面反射](#example-specular) |
| --- | --- |

`bsdf  cvex_bsdf(string eval_cvex_shader, string sampler_cvex_shader, ...)`

该函数允许您通过一对`cvex`着色器定义BSDF反射函数：一个用于[评估反射函数](cvex_bsdf.html#eval_fn)，另一个用于[采样](cvex_bsdf.html#sample_fn)。

您可以将着色器作为VEX源代码字符串传递到前两个参数中。然后，您可以使用可变参数定义任意数据，这些数据将在调用着色器时传递给它们。

警告
此接口可能会在Houdini的未来版本中更改，不过任何潜在的更改可能不需要对您的着色器结构进行根本性修改。

评估函数

## eval_fn

评估函数必须接受以下参数：

```vex
(vector u, vector v, int bounces, int reverse, vector &refl, vector &eval, float &pdf)
```

`u`

出射光方向，从表面指向观察者。

`v`

入射光方向，从表面指向光源。

`bounces`

指定应评估的反射类型的掩码。

`reverse`

是从相机(`0`)还是光源(`1`)进行评估。

`refl`

函数必须用BSDF的反射率（反照率）覆盖此变量。

这不依赖于`v`向量，因为它用作所有光照方向上的平均反射率。这是[albedo](/zh-cn/houdini-vex/bsdfs/albedo "返回给定出射光方向的bsdf的反照率（反射光百分比）。")函数将返回的值。

`eval`

函数必须用给定方向的评估反射率覆盖此变量。

将其设置为`0`以指示mantra BSDF是否为delta函数。Delta函数在特定方向或线上反射光，并在光照算法中作为特殊情况处理以产生较少噪声的结果。Delta BSDF的行为由采样函数（如下）决定。

`pdf`

函数必须用给定方向的采样pdf覆盖此变量。此值在球面上的积分应等于`luminance(refl)*2*PI`。对于完美的重要性采样，`pdf == luminance(eval)`。

采样函数

## sample_fn

采样函数负责选择从评估函数（如上）定义的分布中重要性采样的随机反射方向。

采样函数必须接受以下参数：

```vex
(vector u, float sx, float sy, int bounces, vector &refl, vector &v, int &bouncetype, float &pdf)
```

如果评估函数是delta函数（由评估函数将`eval`设置为`0`指示），您可以自由选择任何采样方向。否则，您应该从与评估函数匹配或接近的分布中选择方向。`sx`和`sy`输入可用于帮助生成高质量的采样分布。这些值直接从mantra的像素采样模式初始化。

`u`

出射光方向，从表面指向观察者。

`sx`

0到1之间的均匀随机值，与sy在2D采样模式中相关。

`sy`

0到1之间的均匀随机值，与sx在2D采样模式中相关。

`bounces`

指定应评估的反射类型的掩码。

`refl`

BSDF的反射率（反照率），由采样方向的光的颜色着色。此值的亮度应与评估函数中的`refl`匹配。如果采样分布与评估函数不完全匹配，则应按评估分布与采样分布的比率缩放此值。

`v`

采样光方向，从表面指向光源。

`bouncetype`

采样选择的特定组件类型。

`pdf`

采样pdf。此值在球面上的积分应为常数`2*PI`。请注意，这与评估函数产生的`pdf`相差`luminance(refl)`的因子。

从Houdini 13开始，采样函数不需要直接从评估函数的分布中采样。要使用不同的采样函数，调整评估和采样着色器的`pdf`输出，使其反映被采样的分布。

组件掩码隐式参数

## component-mask-implicit-argument

如果您在评估或采样着色器中添加`int mybounces`输出参数，它将填充BSDF的组件掩码。您可以将其与传递给`cvex_bsdf()`函数的额外`"label"`可变参数进行检查，以查看是否应应用。这允许您为不同的组件类型使用相同的CVEX着色器源代码。

有关组件标签位掩码的信息，请参见[bouncemask](/zh-cn/houdini-vex/shading-and-rendering/bouncemask)。

自定义可变参数

## custom-variadic-arguments

在着色器字符串之后传递给`cvex_bsdf()`的任何额外`"key", value`对定义了在调用着色器时将传递给它们的自定义参数。

```vex
F = cvex_bsdf("...", "...", "label", "diffuse", "N", N);
```

特别是，您应提供一个“label”关键字参数来指定新BSDF的组件类型（例如，`"diffuse"`或`"reflect"`）。您可以在空格分隔的列表中指定多个标签（例如，`"label", "reflect refract"`）。

验证

## validation

有两种主要方法可用于验证您是否正确实现了`cvex_bsdf`评估和采样函数。

- 您可以使用mantra的多重重要性采样算法来确保渲染在不同采样技术下亮度匹配（除了噪声）。为此，创建一个环境光（分配了贴图）并使用**MIS Bias**参数的不同值进行渲染。您需要从渲染属性对话框中添加**MIS Bias**参数，因为默认情况下它在灯光上不可用。值为-1表示仅从BSDF采样，而值为1表示仅从光源采样。要验证采样函数中的`refl`值，将环境光渲染模式设置为**Ray Tracing Background**。如果渲染结果在值为-1、0、1和光线追踪背景时相同（除了噪声），则您的着色器是无偏的。
- 其次，可以使用[Verify BSDF](../../nodes/obj/verifybsdf.html)对象来验证反照率、pdf和采样函数是否正确对齐，并且它们是否积分到正确的值。此方法在SOP中使用基于点的随机采样，并另外将BSDF的形状可视化为极坐标点云。

示例

## examples

示例：漫反射

## example-diffuse

创建：

```vex
F = cvex_bsdf("diffuse_eval", "diffuse_sample", "label", "diffuse", "N", N);
```

评估着色器：

```vex
#include "pbr.h"

cvex diffuse_eval(
 vector u = 0;
 vector v = 0;
 int bounces = 0;
 int reverse = 0;
 export vector refl = 0;
 export vector eval = 0;
 export float pdf = 0;

 int mybounces = 0;
 vector N = 0)
{
 if (bounces & mybounces)
 {
 // 如果评估反向，则需要入射光方向而不是出射方向进行评估。
 // select语句根据"reverse"切换的值进行交换。
 vector vvec = select(reverse, u, v);
 pdf = max(dot(vvec, normalize(N)), 0);
 eval = pdf;
 refl = 0.5;
 }
}
```

采样着色器：

```vex
#include "math.h"
#include "pbr.h"

cvex diffuse_sample(
 vector u = 0;
 float sx = 0;
 float sy = 0;
 int bounces = 0;

 export vector refl = 0;
 export vector v = 0;
 export int bouncetype = 0;
 export float pdf = 0;

 int mybounces = 0;
 vector N = 0)
{
 if (bounces & mybounces)
 {
 vector nml = normalize(N);

 v = set(cos(sx*PI*2), sin(sx*PI*2), 0);
 v *= sqrt(sy);
 v.z = sqrt(1-sy);

 pdf = 2*v.z;

 // 将v转换为nml的参考系
 vector framex = normalize(cross(nml, u));
 vector framey = cross(nml, framex);

 v = framex * v.x + framey * v.y + nml*v.z;

 bouncetype = mybounces;
 refl = 0.5; // 亮度需要匹配反照率
 }
}
```

示例：镜面反射

## example-specular

创建：

```vex
F = cvex_bsdf("specular_eval", "specular_sample", "label", "reflect", "dir", reflect(I, N));
```

评估着色器：

```vex
#include "pbr.h"

cvex specular_eval(
 vector u = 0;
 vector v = 0;
 int bounces = 0;
 int reverse = 1;
 export vector refl = 0;
 export vector eval = 0; // Delta bsdf

 int mybounces = 0;
 vector dir = 0)
{
 if (bounces & mybounces)
 refl = 1;
}
```

采样着色器：

```vex
#include "math.h"
#include "pbr.h"

cvex specular_sample(
 vector u = 0;
 float sx = 0;
 float sy = 0;
 int bounces = 0;

 export vector refl = 0;
 export vector v = 0;
 export int bouncetype = 0;
 export float pdf = 0;

 int mybounces = 0;
 vector dir = 0)
{
 if (bounces & mybounces)
 {
 pdf = 1e6F;
 v = dir;
 bouncetype = mybounces;
 refl = 1; // 需要匹配反照率
 }
}
```
