---
title: 像素格式与色彩空间
---
# 像素格式与色彩空间

截至 CC 版本，Premiere 支持 69 种不同的像素格式，不包括原始和自定义格式。

为什么这么多？每种像素格式都有其独特的优点和缺点。8 位格式紧凑，但质量较差。32 位格式更精确，但在某些情况下可能过度。压缩格式非常适合存储原始帧，但不适合效果处理。总之，选择时要明智！

---

## 我应该使用哪种格式？

从 CS4 开始，插件不再需要最低限度支持 8 位 BGRA。如果需要，Premiere 可以在渲染管道中进行中间格式转换，尽管这些中间转换会尽可能避免。

在 CS3 及更早版本中，除了导入器之外的所有插件都需要支持每通道 8 位的 BGRA，即使它们支持其他格式。

在选择支持哪些像素格式时，根据插件类型的不同，需要考虑不同的因素。

### 导入器

导入器通常应提供最接近源格式的帧格式。

如果需要，Premiere 可以将任何压缩格式转换为 8 位或 32 位的未压缩格式。在渲染管道中尽可能长时间保持压缩格式可以节省内存和带宽。

从 Premiere Pro CC 2014 开始，导入器现在可以选择它们渲染的格式。这允许导入器根据启用的硬件和其他源设置（如 HDR）更改像素格式和质量。要处理这种协商，请实现 *imSelectClipFrameDescriptor*。

### 效果

效果应支持最适合效果像素处理算法的未压缩格式。

如果算法基于 RGB 像素计算，则提供使用 8 位 BGRA 的快速渲染路径，并可选地提供使用 32 位 BGRA 的高质量渲染路径。如果算法基于 Y'UV，则使用 VUYA 像素格式。

### 导出器和传输器

导出器和传输器应请求最接近输出格式的帧格式。在 CS5 中新增，PrPixelFormat_Any 可以用于导出器渲染请求。

任何接受像素格式列表的渲染函数现在都可以仅使用两种格式调用——所需的 4:4:4:4 像素格式和 PrPixelFormat_Any。这允许主机在许多常见情况下避免帧转换和解压缩。最好的部分是插件不需要理解所有可能的像素格式来利用这一点。它可以使用 [图像处理套件](../sweetpea-suites#image-processing-suite) 从任何格式的 PPix 复制/转换到单独的内存缓冲区，这可能是无论如何都需要进行的复制。

发出请求后，Premiere 会分析用于生成单个渲染帧的所有导入器和效果的偏好格式，以及请求的格式列表，并选择每个片段的最佳格式。

如果请求者支持多种格式，并且序列中各种片段的导入器和效果支持不同的格式，则渲染可能会为每个片段使用不同的格式。

Premiere Pro 内置的 Rec. 601 到 709 色彩空间转换可能较慢。因此，如果大多数源和效果使用 Rec 601 色彩空间，并且导出器或传输器可以快速自行处理 601 到 709 的转换，那么在导出器或传输器中进行色彩空间转换可能会更快。

### 其他注意事项

对于高比特深度支持，推荐使用 32f 格式，而不是 16u 格式。例如，支持 10 位 Y'UV 的导出器应请求 32f Y'UV 格式的帧，然后将 32f 转换为 10u。

ARGB 格式可以在 After Effects 渲染管道中本地使用，并且由不支持任何其他像素格式的 After Effects 效果插件使用。然而，在 Premiere Pro 中，这些 ARGB 格式将需要字节交换，因此不应使用。

---

## 字节顺序

BGRA、ARGB 和 VUYA 按从左到右的内存地址递增顺序写入。未压缩格式具有左下角原点，这意味着缓冲区中的第一个像素描述图像左下角的像素。压缩格式具有特定格式的原点。使用 [图像处理套件](../sweetpea-suites#image-processing-suite) 中的调用来获取任何格式的详细信息。

8 位和 16 位 BGRA 格式不包含超白或超黑。

16 位格式使用从 0（黑色）到 32768（白色）的通道，类似于 After Effects 和 Photoshop 的 16 位格式。

### 未打包，未压缩

| PrPixelFormat | 每通道位数 | 格式 / FourCC | 附加详细信息 |
| --- | --- | --- | --- |
| BGRA_4444_8u | 8 | RGB | |
| VUYA_4444_8u | 8 | Y'UV | |
| VUYA_4444_8u_709 | 8 | Y'UV | Rec. 709 色彩空间。Premiere Pro 4.1 新增。 |
| BGRA_4444_16u | 16 | RGB | |
| BGRA_4444_32f | 32 | RGB | |
| VUYA_4444_32f | 32 | Y'UV | |
| VUYA_4444_32f_709 | 32 | Y'UV | Rec. 709 色彩空间。Premiere Pro 4.1 新增。 |

### 未打包，未压缩，仅限 After Effects 原生支持

| PrPixelFormat | 每通道位数 | 格式 / FourCC | 附加详细信息 |
| --- | --- | --- | --- |
| ARGB_4444_8u | 8 | RGB | 用于 After Effects 原生支持。对于 Premiere Pro 原生支持，请使用 BGRA。 |
| ARGB_4444_16u | 16 | RGB | |
| ARGB_4444_32f | 32 | RGB | |

### 未打包，未压缩，带有隐式 Alpha

| PrPixelFormat | 每通道位数 | 格式 / FourCC | 附加详细信息 |
| --- | --- | --- | --- |
| BGRX_4444_8u | 8 | RGB | 隐式不透明 Alpha 通道。实际数据可能填充了垃圾数据，这允许插件和主机进行优化处理，前提是 Alpha 通道是不透明的。Premiere Pro CS5 新增。 |
| VUYX_4444_8u | 8 | Y'UV | |
| VUYX_4444_8u_709 | 8 | Y'UV | |
| XRGB_4444_8u | 8 | RGB | |
| BGRX_4444_16u | 16 | RGB | |
| XRGB_4444_16u | 16 | RGB | |
| BGRX_4444_32f | 32 | RGB | |
| VUYX_4444_32f | 32 | Y'UV | |
| VUYX_4444_32f_709 | 32 | Y'UV | |
| XRGB_4444_32f | 32 | RGB | |
| BGRP_4444_8u | 8 | RGB | 预乘 Alpha。Premiere Pro CS5 新增。 |
| VUYP_4444_8u | 8 | Y'UV | |
| VUYP_4444_8u_709 | 8 | Y'UV | |
| PRGB_4444_8u | 8 | RGB | |
| BGRP_4444_16u | 16 | RGB | |
| PRGB_4444_16u | 16 | RGB | |
| BGRP_4444_32f | 32 | RGB | |
| VUYP_4444_32f | 32 | Y'UV | |
| VUYP_4444_32f_709 | 32 | Y'UV | |
| PRGB_4444_32f | 32 | RGB | |

### 线性 RGB

| PrPixelFormat | 每通道位数 | 格式 / FourCC | 附加详细信息 |
| --- | --- | --- | --- |
| BGRA_4444_32f_Linear | 32 | RGB | 这些 RGB 格式的伽马值为 1，而不是标准的 2.2。Premiere Pro CS5 新增。 |
| BGRP_4444_32f_Linear | 32 | RGB | |
| BGRX_4444_32f_Linear | 32 | RGB | |
| ARGB_4444_32f_Linear | 32 | RGB | |
| PRGB_4444_32f_Linear | 32 | RGB | |
| XRGB_4444_32f_Linear | 32 | RGB | |

### 打包，未压缩格式

| PrPixelFormat | 每通道位数 | 格式 / FourCC | 附加详细信息 |
| --- | --- | --- | --- |
| RGB_444_10u | | | Premiere Pro CC 新增。全范围 10 位 444 RGB 小端格式 |
| YUYV_422_8u_601 | 8 | 'YUY2' | Premiere Pro CS4 新增。 |
| YUYV_422_8u_709 | 8 | 'YUY2' | Rec. 709 色彩空间。Premiere Pro CS4 新增。 |
| UYVY_422_8u_601 | 8 | 'UYVY' | Premiere Pro CS4 新增。 |
| UYVY_422_8u_709 | 8 | 'UYVY' | Rec. 709 色彩空间。Premiere Pro CS4 新增。 |
| V210_422_10u_601 | 10 | 'v210' | Premiere Pro CS4 新增。 |
| V210_422_10u_709 | 10 | 'v210' | Rec. 709 色彩空间。Premiere Pro CS4 新增。 |
| UYVY_422_32f_601 | 32 | 'UYVY' | Premiere Pro CC 新增。 |
| UYVY_422_32f_709 | 32 | 'UYVY' | Premiere Pro CC 新增。 |

### 压缩 Y'UV

| PrPixelFormat | 每通道位数 | 格式 / FourCC | 附加详细信息 |
| --- | --- | --- | --- |
| NTSCDV25 | 8 | DV25 / 'dvsd' | |
| PALDV25 | 8 | DV25 / 'dvsd' | |
| NTSCDV50 | 8 | DV50 / 'dv50' | |
| PALDV50 | 8 | DV50 / 'dv50' | |
| NTSCDV100_720p | 8 | DV100 720p / 'dvh1' | |
| PALDV100_720p | 8 | DV100 720p / 'dvh1' | |
| NTSCDV100_1080i | 8 | DV100 1080i / 'dvh1' | |
| PALDV100_1080i | 8 | DV100 1080i / 'dvh1' | |
| YUV_420_MPEG2_FRAME_PICTURE_PLANAR_8u_601 | 8 | Y'UV 4:2:0 / 'YV12' | 渐进式 Rec. 601 色彩空间 |
| YUV_420_MPEG2_FIELD_PICTURE_PLANAR_8u_601 | 8 | Y'UV 4:2:0 / 'YV12' | 隔行 Rec. 601 色彩空间 |
| YUV_420_MPEG2_FRAME_PICTURE_PLANAR_8u_601_FullRange | 8 | Y'UV 4:2:0 / 'YV12' | Premiere Pro CS5.5 新增。渐进式 Rec. 601 色彩空间，全范围 Y'UV |
| YUV_420_MPEG2_FIELD_PICTURE_PLANAR_8u_601_FullRange | 8 | Y'UV 4:2:0 / 'YV12' | Premiere Pro CS5.5 新增。隔行 Rec. 601 色彩空间，全范围 Y'UV |
| YUV_420_MPEG2_FRAME_PICTURE_PLANAR_8u_709 | 8 | Y'UV 4:2:0 / 'YV12' | 渐进式 Rec. 709 色彩空间 |
| YUV_420_MPEG2_FIELD_PICTURE_PLANAR_8u_709 | 8 | Y'UV 4:2:0 / 'YV12' | 隔行 Rec. 709 色彩空间 |
| YUV_420_MPEG2_FRAME_PICTURE_PLANAR_8u_709_FullRange | 8 | Y'UV 4:2:0 / 'YV12' | Premiere Pro CS6 新增。渐进式 Rec. 709 色彩空间，全范围 Y'UV。矩阵从 709 按每个分量的偏移量缩放（Y 按 219/255 缩放，UV 按 224/256 缩放） |
| YUV_420_MPEG2_FIELD_PICTURE_PLANAR_8u_709_FullRange | 8 | Y'UV 4:2:0 / 'YV12' | Premiere Pro CS6 新增。隔行 Rec. 709 色彩空间，全范围 Y'UV |
| YUV_420_MPEG4_FRAME_PICTURE_PLANAR_8u_601 | 8 | Y'UV 4:2:0 / 'YV12' | Premiere Pro CS6 新增。渐进式 Rec. 601 色彩空间 |
| YUV_420_MPEG4_FIELD_PICTURE_PLANAR_8u_601 | 8 | Y'UV 4:2:0 / 'YV12' | Premiere Pro CS6 新增。隔行 Rec. 601 色彩空间 |
| YUV_420_MPEG4_FRAME_PICTURE_PLANAR_8u_601_FullRange | 8 | Y'UV 4:2:0 / 'YV12' | Premiere Pro CS6 新增。渐进式 Rec. 601 色彩空间，全范围 Y'UV |
| YUV_420_MPEG4_FIELD_PICTURE_PLANAR_8u_601_FullRange | 8 | Y'UV 4:2:0 / 'YV12' | Premiere Pro CS6 新增。隔行 Rec. 601 色彩空间，全范围 Y'UV |
| YUV_420_MPEG4_FRAME_PICTURE_PLANAR_8u_709 | 8 | Y'UV 4:2:0 / 'YV12' | Premiere Pro CS6 新增。渐进式 Rec. 709 色彩空间 |
| YUV_420_MPEG4_FIELD_PICTURE_PLANAR_8u_709 | 8 | Y'UV 4:2:0 / 'YV12' | Premiere Pro CS6 新增。隔行 Rec. 709 色彩空间 |
| YUV_420_MPEG4_FRAME_PICTURE_PLANAR_8u_709_FullRange | 8 | Y'UV 4:2:0 / 'YV12' | Premiere Pro CS6 新增。渐进式 Rec. 709 色彩空间，全范围 Y'UV。矩阵从 709 按每个分量的偏移量缩放（Y 按 219/255 缩放，UV 按 224/256 缩放） |
| PrPixelFormat_YUV_420_MPEG4_FIELD_PICTURE_PLANAR_8u_709_FullRange | 8 | Y'UV 4:2:0 / 'YV12' | Premiere Pro CS6 新增。隔行 Rec. 709 色彩空间，全范围 Y'UV |

### 其他

| PrPixelFormat | 每通道位数 | 格式 / FourCC | 附加详细信息 |
| --- | --- | --- | --- |
| Raw | ? | ? | 原始、不透明数据，没有行字节或高度信息 |

---

## 自定义像素格式

从CS4开始，支持自定义像素格式。插件可以定义一个像素格式，该格式可以通过我们管道的各个方面，但对内置渲染器保持完全不透明。请在[像素格式套件](../sweetpea-suites#pixel-format-suite)中使用宏`MAKE_THIRD_PARTY_CUSTOM_PIXEL_FORMAT_FOURCC`。请使用唯一的名称以避免冲突。

该格式不需要以任何方式注册。它们可以像当前像素格式一样使用，尽管在许多情况下它们会被忽略。

新像素格式可以在渲染管道中出现的第一个地方是在导入器级别。导入器可以在`imGetIndPixelFormat`期间宣传这些像素格式的可用性，就像它们对其他格式所做的那样。

:::note
导入器还必须支持非自定义像素格式，以便在使用内置渲染器的情况下使用，该渲染器不会准备处理由第三方添加的不透明像素格式。
:::

在导入器中，使用[PPix Creator 2套件](../sweetpea-suites#ppix-creator-2-suite)中的新`CreateCustomPPix`调用，并指定自定义像素格式和内存缓冲区大小，调用将返回请求格式的PPix。然后可以像其他PPix一样从导入器返回这些PPix。PPix的内存将由MediaCore分配，并且必须是平面数据结构，因为它们需要在进程之间复制。

然而，由于数据本身是完全不透明的，它可以很容易地引用另一个像素缓冲区，只要引用可以被复制。例如，缓冲区可以是一个恒定的16字节，包含一个GUID，该GUID可用于在另一个进程中按名称访问内存缓冲区。

要从播放器查询可用的自定义像素格式，请使用[剪辑渲染套件](../sweetpea-suites#clip-render-suite)中的`GetNumCustomPixelFormats`和`GetCustomPixelFormat`调用。自定义像素格式不会通过常规调用返回支持的帧格式，主要是为了防止它们被使用。

其他[剪辑渲染套件](../sweetpea-suites#clip-render-suite)函数将接受自定义像素格式的请求，并像其他格式一样返回这些自定义PPix。

使用[剪辑渲染套件](../sweetpea-suites#clip-render-suite)，第三方播放器可以直接从匹配的导入器访问这些自定义PPix。

### 智能渲染

智能渲染涉及将压缩帧从导入器传递到导出器，以绕过任何不必要的解压缩和重新压缩，这会降低质量和性能。

实现这一点的方法是在导入器、导出器和通常的渲染器之间传递自定义PPix。

在导出单个剪辑的罕见情况下，使用导出器中的[剪辑渲染套件](../sweetpea-suites#clip-render-suite)从导入器请求自定义PPix就足够了。但在更常见的导出序列的情况下，需要支持自定义像素格式的渲染器。

当在Media Encoder中运行的导出器解析序列中的片段时，它只有一个非常高级别的视图。它将整个序列视为一个剪辑（实际上是一个使用Dynamic Link打开到PProHeadless进程的临时项目文件），并将任何可选的裁剪或滤镜视为应用的效果。

因此，当导出器解析那个简单的高级序列时，如果没有效果，它应该使用MediaNode的ClipID与[剪辑渲染套件](../sweetpea-suites#clip-render-suite)直接从PProHeadless进程获取帧。在PProHeadless进程中，渲染器可以介入并解析真实的序列。

它可以使用[剪辑渲染套件](../sweetpea-suites#clip-render-suite)直接从导入器获取自定义像素格式的帧，然后将自定义PPix设置为渲染结果。然后，这个自定义PPix就可以以原始的、压缩的PPix形式提供给导出器。
