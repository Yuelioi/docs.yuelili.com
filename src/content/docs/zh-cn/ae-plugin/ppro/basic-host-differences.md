---
title: 基础主机差异
---
# 基础主机差异

我们已尽力为Premiere Pro中的After Effects效果插件提供强大的兼容性。

渲染管道中存在一些底层差异，导致了一些不同，我们意识到API的实现可能并不完美。

以下是插件在Premiere Pro中运行时可能遇到的一些差异的概述。

---

## 时间值

Premiere Pro在PF_InData中使用的时间值略有不同。例如在CS4中：

在NTSC中渲染时，`time_scale`为60000，`time_step`为1001，`field`给出场顺序（在After Effects中，对于场渲染，`scale`为2997，`step`为50，或者对于逐行渲染，`scale`为2997，`step`为100）。

在PAL中渲染时，`time_scale`为50，`time_step`为1，`field`给出场顺序（在After Effects中，对于场渲染，`scale`为3200，`step`为64，或者对于逐行渲染，`scale`为3200，`step`为128）。

时间值的生成是基于时间相关值的比率，而不是特定的`time_scale`值。未来Premiere Pro可能会使用不同的`time_scale`，因此请不要硬编码。只需注意它不一定使用与After Effects完全相同的值。

---

## 渲染帧

Premiere针对响应式编辑进行了优化。当在时间轴中拖动或更改效果参数时，Premiere会立即请求低质量渲染以立即显示，随后再进行高质量渲染。因此，效果可能会收到两次针对同一有效时间的请求，一次是低分辨率、低位深度的渲染，随后是完整分辨率、完整位深度的渲染。每次渲染请求的分辨率将考虑源监视器和节目监视器中设置的播放和暂停分辨率：第一次请求将以播放分辨率进行，第二次请求将以暂停分辨率进行。

Premiere还会执行推测性渲染，以提前渲染时间轴中的一组帧，以便在编辑器开始播放时，初始帧已经准备就绪。这意味着当重新定位时间指针或更改效果参数时，Premiere会要求效果渲染当前时间之前的一组帧。如果这些帧之前已经渲染并缓存，效果将不会看到这些渲染请求，因为将使用缓存的帧。

当以Premiere原生像素格式渲染帧时，Premiere会为每个场发送一次`PF_Cmd_RENDER`，而不是为每个帧发送。`PF_InData->field`将指示正在渲染的场，`PF_LayerDef->height`将是帧高度的一半，`PF_LayerDef->rowbytes`将是正常值的两倍。

---

## 渲染顺序

Premiere Pro旨在尽可能实时播放带有效果的素材。渲染调度更加激进，多线程渲染是基本要求。这与After Effects有很大不同，在After Effects中，用户正在构建层层效果，并且更愿意等待RAM预览。

Premiere中的多线程渲染也适用于AE效果。当渲染AE效果时，Premiere的请求会通过一个临界区，该临界区用于所有命令，除了与任意数据相关的命令。临界区防止两个线程同时调用同一个效果实例。然而，Premiere会创建多个效果实例，这些实例可以从不同的线程并发调用。

因此，效果不应期望按时间递增的顺序接收渲染请求。此外，效果不应依赖于静态的、非常量的变量。

---

## 帧尺寸

源素材与项目/合成之间的差异处理方式不同。

例如，在CS4中，当在PAL序列中导入NTSC剪辑时，`PF_InData>width,height`为`(598,480)`，`PF_InData->pixel_aspect_ratio`为`(768,702)`。

在AE中，`width,height`为`(720,480)`，`pixel_aspect_ratio`为`(10,11)`。

---

## PF_InData

Premiere Pro处理场渲染的方式与After Effects不同。在场渲染期间，`PF_InData>field`给出当前正在渲染的场，忽略是否设置了`PF_OutFlag_PIX_INDEPENDENT`标志。

在Premiere Pro中，效果会接收监视器窗口的质量设置，位于[PF_InData>quality](../../effect-basics/PF_InData#pf_indata-members)。这与After Effects不同，在After Effects中，这里提供的是源图层的质量设置。

---

## 参数UI

Premiere Pro不支持[PF_ParamFlag_START_COLLAPSED](../../effect-basics/PF_ParamDef#parameter-flags)标志。参数始终以折叠状态初始化，并且不能通过参数监督自动展开。

Premiere Pro支持宏`PF_ADD_FLOAT_EXPONENTIAL_SLIDER()`，该宏允许您定义指数。尽管此宏是为CC 2015版本2 SDK新添加的，但Premiere Pro已经在Fast Color Corrector中的Input Grey Level参数中使用了此功能。指数用于使范围从0.10到10，但1.0大约位于滑块的中间位置。我们使用的指数为2.5。典型值范围为0.01到100。

从CC 2015开始，当时间指针移动且没有关键帧时，效果将不会收到`PF_Cmd_UPDATE_PARAMS_UI`或`PF_Event_DRAW`，除非效果设置了`PF_OutFlag_NON_PARAM_VARY`。在效果控制面板中绘制直方图的效果需要注意此优化。

---

## 缺失的套件

After Effects支持的许多套件在Premiere Pro主机中未实现。在某些情况下，即使Premiere Pro中缺少某个套件，也有等效的宏函数可用。以下是一些示例：

| After Effects套件调用 | Premiere Pro等效函数 |
| --- | --- |
| `WorldTransformSuite1()->copy()` | `PF_COPY()` |
| `WorldTransformSuite1()->convolve()` | `in_data->utils->convolve()` |
| `FillMatteSuite2()->fill()` | `PF_FILL()` |
| `PF_PixelDataSuite1->get_pixel_data8()` | `PF_GET_PIXEL_DATA8()` |

示例项目展示了通过检查主机应用程序和版本来处理缺失套件的替代方法。Portable示例项目展示了主机应用程序和版本检查。

---

## 用于在Premiere Pro中运行的AE效果的特殊套件

Premiere Pro不支持任何AEGP调用。然而，在头文件PrSDKAESupport.h中有一些有趣的相似之处。例如，您可以使用该头文件中的Utility Suite来获取源素材的帧速率或场类型，或获取应用于剪辑的速度。

请注意，Premiere Pro SDK中的其他套件不能在AE效果中使用。
