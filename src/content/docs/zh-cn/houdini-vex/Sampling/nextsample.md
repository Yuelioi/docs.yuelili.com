---
title: nextsample
order: 5
---
| 上下文 | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [light](../contexts/light.html)  [shadow](../contexts/shadow.html)  [surface](../contexts/surface.html) |
| --- | --- |

`void  nextsample(int &sid, float &sx, float &sy, ...)`

`void  nextsample(int &sid, vector &svec, ...)`

[newsampler](/zh-cn/houdini-vex/sampling/newsampler "为nextsample函数初始化采样序列。")和本函数公开了mantra用于像素抗锯齿的高质量确定性采样模式。在光线追踪模式下渲染时，可以通过使用`SID`全局变量初始化采样序列，使用`nextsample`例程生成确定性2D样本。

此方法可以生成2D或3D采样模式。要生成2D样本，请使用带有2个float只写参数的签名。要生成3D样本，请使用带有vector只写参数的签名。

您可以添加一个额外参数`"mode"`，后跟以下选项之一：

`"qstrat"`

前进到模式中的下一个样本。当使用[newsampler](/zh-cn/houdini-vex/sampling/newsampler "为nextsample函数初始化采样序列。")时应使用此模式。

`"nextpixel"`

前进到新的像素采样模式。当使用SID进行光线追踪以在像素内生成高质量采样模式时，应使用此模式。此模式会考虑当前像素内的其他样本，并将适当分层。如果使用微多边形渲染，"nextpixel"将与"qstrat"行为相同。

`"decorrelate"`

前进到新的去相关样本。您应使用此模式来确定性生成与现有序列无关的新采样序列。与"nextpixel"类似，当与SID和光线追踪一起使用时，此模式会保持高质量的像素采样。

```vex
int nsamples = 10;
int sid = israytrace ? SID : newsampler();

for (i = 0; i < nsamples; i++)
{
if (israytrace)
nextsample(sid, sx, sy, "mode", "nextpixel");
else
nextsample(sid, sx, sy, "mode", "qstrat");
// 使用sx/sy进行采样...
}

```
