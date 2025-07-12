---
title: 更大的差异
---
# 更大的差异

只要一个效果仅支持After Effects支持的基本ARGB_8u像素格式，Premiere Pro会尝试模仿After Effects的托管行为，并隐藏由于不同渲染管道架构带来的各种差异。但如果一个效果希望支持额外的像素格式，例如32位RGB，那么需要准备好处理进一步的差异行为。

---

## 像素格式

Premiere Pro提供了功能套件，用于声明支持除了After Effects使用的8位RGB格式（ARGB_8u）之外的其他像素格式。这些像素格式包括Premiere Pro原生的8位RGB格式（BGRA_8u），以及YUV、32位格式等。有关各种像素格式的详细讨论，请参阅[Premiere Pro SDK指南中的“像素格式和色彩空间”](http://ppro-plugin-sdk.aenhancers.com/universals/pixel-formats-and-color-spaces.html)。

使用PF像素格式套件（定义在PrAESDKSupport.h中）来注册[PF_EffectWorld / PF_LayerDef](../../effect-basics/PF_EffectWorld)以支持其他像素格式。使用Premiere像素格式套件（定义在PrSDKPixelFormatSuite.h中）来获取这些像素格式中的黑白值。

After Effects的函数（如`PF_BLEND()`）尚未增强以支持8位RGB之外的像素格式。

---

## 32位浮点支持

Premiere Pro不支持After Effects的16位渲染或SmartFX。要在Premiere Pro中进行32位渲染，您需要声明支持32位像素格式之一（参见上一节），然后为`PF_Cmd_RENDER`实现32位渲染。您可以通过这种方式支持多种渲染深度。请参阅SDK Noise示例项目以获取示例。

根据应用效果的剪辑，32位处理并不总是必要的，以保持源输入的质量。但有一些设置可以强制32位渲染，以便在需要时为效果处理提供更精细的粒度和更多的余量。转到设置>序列设置>视频预览>最大位深度，以控制时间轴上的预览。对于导出到文件，请使用导出设置>视频>基本设置>以最大深度渲染。

---

## PF_CHECKOUT_PARAM 和像素格式

在CS6之前，`PF_CHECKOUT_PARAM()`仅返回8位ARGB缓冲区，无论当前用于渲染的像素格式是什么。从CS6开始，效果可以选择获取与渲染请求相同格式的帧，无论是32位浮点、YUV等。

插件可以请求此行为，但现有插件将继续接收8位ARGB帧。调用是EffectWantsCheckedOutFramesToMatch RenderPixelFormat()，在PF Utility Suite中定义，位于PrSDKAESupport.h中。该调用应在`PF_Cmd_GLOBAL_SETUP`上进行，这是效果已经使用`AddSupportedPixelFormat()`声明支持8位RGB之外的像素格式的同一选择器。
