---
title: SweetPea Suites
---
# SweetPea Suites

## 概述

本章节记录了多个插件类型共用的 Suites。

仅由一个插件类型使用的 Suites 将在该插件类型的章节中记录。

以下是 Premiere Pro 中所有可用的 Suites 表格：

| Suite 名称 | 相关插件类型 |
| --- | --- |
| Accelerated Render Invocation Suite | 导出器 |
| [App Info Suite](#app-info-suite) | 所有 |
| [Application Settings Suite](#application-settings-suite) | 所有 |
| [Async File Reader Suite](../../importers/suites#async-file-reader-suite) | 导入器 |
| Async Operation Suite | 所有 |
| [Audio Suite](#audio-suite) | 导入器, 导出器 |
| [Captioning Suite](#captioning-suite) | 设备控制器, 导出器, 传输器 |
| [Clip Render Suite](#clip-render-suite) | 导出器 |
| [Deferred Processing Suite](../../importers/suites#deferred-processing-suite) | 导入器 |
| [Error Suite](#error-suite) | 除 CS6 开始的导出器外的所有 |
| [Export File Suite](../../exporters/suites#export-file-suite) | 导出器 |
| [Export Info Suite](../../exporters/suites#export-info-suite) | 导出器 |
| [Export Param Suite](../../exporters/suites#export-param-suite) | 导出器 |
| [Export Progress Suite](../../exporters/suites#export-progress-suite) | 导出器 |
| [Export Standard Param Suite](../../exporters/suites#export-standard-param-suite) | 导出器 |
| [Exporter Utility Suite](../../exporters/suites#exporter-utility-suite) | 导出器 |
| [File Registration Suite](#file-registration-suite) | 导入器, 转场, 视频滤镜 |
| [Flash Cue Marker Data Suite](#flash-cue-marker-data-suite) | 导出器 |
| [GPU Device Suite](../../gpu-effects-transitions/suites#gpu-device-suite) | GPU 效果和转场 |
| [Image Processing Suite](#image-processing-suite) | 所有 |
| Importer File Manager Suite | 导入器 |
| [Legacy Callback Suites](../legacy-callback-suites) | 所有 |
| [Marker Suite](#marker-suite) | 导出器 |
| Media Accelerator Suite | 导入器 |
| [Memory Manager Suite](#memory-manager-suite) | 所有 |
| [Palette Suite](../../exporters/suites#palette-suite) | 导出器 |
| [Pixel Format Suite](#pixel-format-suite) | 所有 |
| [Playmod Audio Suite](../../transmitters/suites#playmod-audio-suite) | 传输器 |
| Playmod Device Control Suite | 无 (已弃用) |
| [Playmod Overlay Suite](#playmod-overlay-suite) | 传输器 |
| Playmod Render Suite | 无 (已弃用) |
| [PPix Cache Suite](#ppix-cache-suite) | 导入器 |
| [PPix Creator Suite](#ppix-creator-suite) | 所有 |
| [PPix Creator 2 Suite](#ppix-creator-2-suite) | 所有 |
| [PPix Suite](#ppix-suite) | 所有 |
| [PPix 2 Suite](#ppix-2-suite) | 所有 |
| Quality Suite | 无 (已弃用) |
| [RollCrawl Suite](#rollcrawl-suite) | 导出器 |
| Scope Render Suite | 无 (已弃用) |
| [Sequence Audio Suite](../../exporters/suites#sequence-audio-suite) | 导出器 |
| [Sequence Info Suite](#sequence-info-suite) | 导入器, 转场, 视频滤镜 |
| [Sequence Render Suite](../../exporters/suites#sequence-render-suite) | 导出器 |
| Stock Image Suite | 无 (已弃用) |
| [String Suite](#string-suite) | 所有 |
| [Threaded Work Suite](#threaded-work-suite) | 所有 |
| [Time Suite](#time-suite) | 所有 |
| [Transmit Invocation Suite](../../transmitters/suites#transmit-invocation-suite) | 所有 |
| [Video Segment Render Suite](#video-segment-render-suite) | 导出器 |
| [Video Segment Suite](#video-segment-suite) | 导出器 |
| [Window Suite](#window-suite) | 所有 |

---

## 获取和释放 Suites

所有 SweetPea Suites 都通过 Utilities Suite 访问。插件可以获取这些 Suites。

```cpp
SPBasicSuite SPBasic = NULL;
PrSDKPixelFormatSuite *PixelFormatSuite = NULL;

SPBasic = stdParmsP->piSuites->utilFuncs->getSPBasicSuite();

if (SPBasic) {
SPBasic->AcquireSuite ( kPrSDKPixelFormatSuite, kPrSDKPixelFormatSuiteVersion, (const void**)&PixelFormatSuite);
}
```

完成后不要忘记释放 Suites！

```cpp
if (SPBasic && PixelFormatSuite)
{
 SPBasic->ReleaseSuite ( kPrSDKPixelFormatSuite,
 kPrSDKPixelFormatSuiteVersion);
}
```

### 版本控制

通常从一个版本到另一个版本，Suites 的更改是增量的，因此建议尽可能使用 Suites 的最新版本。但是，最新版本的 Suites 可能不被旧版本的 Premiere Pro 或其他宿主应用程序支持。尝试获取宿主应用程序不支持的 Suites 将导致从 `AcquireSuite` 返回 NULL 指针。

为了支持多个版本，插件可以选择使用特定旧版本的 Suites，该版本在这些多个版本中都受支持。或者，它可以检查宿主应用程序的版本（使用 [App Info Suite](#app-info-suite)），并在可用时使用新的 Suites，或在旧版本中运行时使用旧的 Suites。要获取特定旧版本的 Suites，而不是请求上面的示例中的 `kPrSDKPixelFormatSuiteVersion`，请改用特定的版本号。

---

## 应用信息

对于在不同应用程序之间共享的插件非常有用，例如 After Effects 插件、Premiere 导出器、传输器和导入器，在这些情况下，了解插件当前运行的宿主、版本或语言可能很重要。

:::note
此 Suite 不适用于在 AE 中运行的 AE 效果。
:::

此 Suite 提供宿主应用程序和版本号。对于像 6.0.3 这样的版本，它将返回 major = 6，minor = 0，patch = 3。请参阅 PrSDKAppInfoSuite.h。

从 CC 中引入的 Suite 版本 2 开始，该 Suite 有一个新的选择器来检索构建号。SpeedGrade CC 从 2013 年 7 月更新开始支持此 Suite。

在版本 3 中，从 CC 2014 开始，该 Suite 有一个新的选择器来检索语言作为标识宿主应用程序中使用的区域设置的 NULL 终止字符串。例如："en_US"、"ja_JP"、"zh_CN"。

---

## 应用设置

CS4 新增。此 Suite 提供了获取当前项目中定义的暂存盘文件夹路径的调用，这些路径用于创建捕获文件和预览文件。它还提供了获取项目文件路径的调用。所有路径都以 PrSDKStrings 的形式返回。使用新的 [String Suite](#string-suite) 将字符串提取为 UTF-8 或 UTF-16。请参阅 PrSDKApplicationSettingsSuite.h。

---

## 音频

提供了将音频格式转换为 Premiere API 使用的原生音频格式的调用，支持不同的位深度。请参阅 PrSDKAudioSuite.h。

---

## 字幕

此 Suite 使设备控制器、导出器、播放器或传输器能够获取附加到序列的隐藏字幕数据。此 Suite 提供 Scenarist (CEA-608, \*.scc) 和 MacCaption (CEA-708, \*.mcc) 格式的数据。对于 CEA-708，它不仅包括要显示的文本，还包括位置信息、背景、字体等。如果传输器或播放器只想在帧上叠加字幕数据，可以使用 [Playmod Overlay Suite](#playmod-overlay-suite)。

---

## 剪辑渲染

2.0 新增。在播放器或渲染器中使用此 Suite，直接从导入器请求源帧。有一些调用可以查找支持的帧大小和像素格式，以便调用者可以做出明智的决定，选择请求的格式。可以同步或异步检索帧。异步请求可以取消，例如如果帧已经过了播放窗口。请参阅 PrSDKClipRenderSuite.h。

从 CS4 开始，此 Suite 包括查找剪辑支持的任何自定义像素格式的调用，并以这些自定义像素格式获取帧。

导出器可以使用此 Suite 以压缩像素格式从渲染器请求帧。

---

## 错误

使用单一回调处理错误、警告和信息。此回调将激活主应用程序窗口左下角的闪烁图标，点击该图标将打开包含错误信息的新事件窗口。请参阅 PrSDKErrorSuite.h。

从 CS4 引入的 Suite 版本 3 开始，该 Suite 支持 UTF-16 字符串。从 CS6 开始，导出器应使用 [Exporter Utility Suite](../../exporters/suites#exporter-utility-suite) 来报告事件。

---

## 文件注册

用于注册插件实例使用的外部文件（如纹理、徽标等），这些文件不会作为素材出现在项目窗口中。使用项目管理器修剪或复制项目时，将考虑已注册的文件。请参阅 PrSDKFileRegistrationSuite.h。

---

## 闪存提示标记数据

CS4 新增。用于读取 Flash 提示点的特定工具。与 [Marker Suite](#marker-suite) 结合使用。请参阅 PrSDKFlashCueMarkerDataSuite.h。

---

## 图片处理

CS5 新增。各种获取像素格式信息和处理帧的调用。`ScaleConvert()` 调用是从任何支持的像素格式的缓冲区复制转换到单独内存缓冲区的方式。

在 CS5.5 中新增的版本 2 中，我们添加了 `StampDVFrameAspect()`，它允许插件设置 DV 帧的宽高比。这是为了补充 `ScaleConvert()`，它没有宽高比参数。

---

## 标记

CS4 新增。读取所有类型标记的新方法。请参阅 PrSDKMarkerSuite.h。

---

## 内存管理

Premiere Pro 2.0 新增。分配和释放内存的调用，以及保留一定数量的内存以便宿主不使用的调用。请参阅 PrSDKMemoryManagerSuite.h。

在 CS6 中，该 Suite 现在为版本 4。`AdjustReservedMemorySize` 提供了一种相对于当前大小调整保留内存大小的方法。对于插件来说，这可能比维护绝对内存使用情况并使用旧的 `ReserveMemory` 调用更新它更容易。

### 保留内存

插件实例可以调用 `ReserveMemory` 来请求保留空间，以便 Premiere 的媒体缓存不使用它。每次调用 `ReserveMemory` 时，它都会更新 Premiere Pro 当前插件实例保留的字节数。指定的数量是绝对的，而不是累积的。因此，要释放任何保留的内存以供 Premiere Pro 的媒体缓存使用，请使用大小为 0 调用它。但是，当导出器在 `*exSDK_EndInstance*` 上销毁时，不需要重置此值，因为媒体管理器将删除所有引用。

`ReserveMemory` 会更改 Premiere 媒体缓存的最大大小。因此，如果缓存大小从 10 GB 开始，并且您保留了 1 GB，则缓存将不会增长超过 9 GB。`ReserveMemory` 将根据系统中可用内存的数量以及其他插件实例已经保留的内容来保留不同数量的内存。媒体缓存需要最少数量的内存来播放音频、渲染等。

从 CS4 引入的 Suite 版本 2 开始，有分配/释放内存的调用。这对于导出器是必要的，因为它们不会传递旧的 `memFuncs`。

---

## 像素格式

请参阅支持的像素格式表。`GetBlackForPixelFormat` 返回给定像素格式的最小值（黑色）。`GetWhiteForPixelFormat` 返回给定像素格式的最大值（白色）。像 YUYV 这样的像素类型实际上包含一组两个像素来完全指定颜色，因此在这种情况下返回的数据大小将为 4 字节（而不是 2）。此调用不支持 MPEG-2 平面格式。

`ConvertColorToPixelFormattedData` 将 BGRA/ARGB 值转换为不同像素类型的值。这些函数不用于将整个帧从一种颜色空间转换为另一种颜色空间，但可用于转换过滤器颜色选择器或转场边框的单个颜色值。要在像素格式之间转换帧，请参阅 [Image Processing Suite](#image-processing-suite)。

Premiere Pro 4.0.1 新增，`MAKE_THIRD_PARTY_CUSTOM_PIXEL_FORMAT_FOURCC()` 定义了自定义像素格式。

---

## Playmod 叠加

CS5.5 新增。传输器可以请求 Premiere Pro 渲染特定时间的叠加层。截至 CS6，这仅用于隐藏字幕。

要渲染隐藏字幕叠加层，无需了解隐藏字幕数据的任何信息，无论是 CEA-608 还是 CEA-708。`RenderImage` 只会生成一个 PPixHand。

之所以不称为 Closed Captioning Overlay Suite，是因为我们希望将来将其用作提供各种叠加层的通用 Suite。这样，当我们在未来添加更多叠加层类型时，您无需担心每次都在播放器端更新实现以镜像您的实现。将来，我们可能会使用此 Suite 来渲染静态叠加层，例如安全区域。为了支持这些，即使 `VariesOverTime` 返回 false，您也可以在时间 0 调用 `HasVisibleRegions`。

CC 2014 中的版本 2 移除了 `CalculateVisibleRegions()`。

### 渲染图片

将叠加层渲染到可选提供的 BGRA PPixHand 中。`RenderImage` 不会将叠加层合成到现有帧上，它只是将叠加层渲染到可见区域中。在播放器的显示大小渲染叠加层后，您需要将该结果合成到帧上。

如果用户放大了视频，渲染全尺寸叠加层图像然后缩放可能会浪费资源。为了获得更好的性能，可以以实际显示大小渲染叠加层。`inDisplayWidth`、`inDisplayHeight` 和 `inLogicalRegion` 参数提供了优化 UI 中缩放所需的额外信息。

例如，假设序列为 720x480，PAR 为 0.9091，序列监视器设置为以方形 PAR 显示全帧。将 `inLogicalRegion` 设置为 (0, 0, 720, 480)，并将 `inDisplayWidth` 设置为 654，`inDisplayHeight` 设置为 480。

如果监视器缩放级别设置为 50%，则 `inLogicalRegion` 应保持不变，但显示宽度和高度应设置为 327x240。如果缩放为 200%，显示宽度和高度应设置为 1308x960。要平移（而不是显示整个帧），应调整 `inLogicalRegion` 以表示当前显示的序列帧部分。

```cpp
prSuiteError (*RenderImage)(
 PrPlayID inPlayID,
 PrTime inTime,
 const prRect* inLogicalRegion,
 int inDisplayWidth,
 int inDisplayHeight,
 prBool inClearToTransparentBlack,
 PPixHand* ioPPix);
```

| 参数 | 描述 |
|---|---|
| `inLogicalRegion` | 源 PPix 的非缩放区域以叠加 |
| `inDisplayWidth` | 如果提供了 `ioPPix`，则为 PPix 的宽度和高度，缩放以考虑监视器缩放和 PAR |
| `inDisplayHeight` | |
| `inClearToTransparentBlack` | 如果为 `kPrTrue`，则在渲染之前将帧清除为透明黑色 |
| `ioPPix` | 绘制叠加层的帧。如果为 NULL，宿主将分配 PPix。 |
| | 如果提供，PPix 必须为 BGRA，方形像素宽高比，并且大小与 `inDisplayWidth` 和 `inDisplayHeight` 匹配。 |

### GetIdentifier

```cpp
prSuiteError (*GetIdentifier)(
 PrPlayID inPlayID,
 PrTime inTime,
 const prRect* inLogicalRegion,
 int inDisplayWidth,
 int inDisplayHeight,
 prBool inClearToTransparentBlack,
 prPluginID* outIdentifier);
```

### HasVisibleRegions

```cpp
prSuiteError (*HasVisibleRegions)(
 PrPlayID inPlayID,
 PrTime inTime,
 const prRect* inLogicalRegion,
 int inDisplayWidth,
 int inDisplayHeight,
 prBool* outHasVisibleRegions);
```

### VariesOverTime

```cpp
prSuiteError (*VariesOverTime)(
 PrPlayID inPlayID,
 prBool* outVariesOverTime);
```

---

## PPix 缓存

由导入器、播放器或渲染器使用，以利用主机应用程序的 PPix 缓存。请参阅 PrSDKPPixCacheSuite.h。

从 Premiere Pro 4.1 引入的该套件版本 2 开始，`AddFrameToCache` 和 `GetFrameFromCache` 现在有两个额外的参数 `inPreferences` 和 `inPreferencesLength`。现在，缓存中的帧会根据导入器偏好进行区分，因此当偏好发生变化时，主机在获取帧请求时不会使用旧的帧。

CS5.0.3 中新增的版本 4 添加了 `ExpireNamedPPixFromCache()` 和 `ExpireAllPPixesFromCache()`，允许插件从媒体缓存中移除一个或所有 PPix，这在媒体由于在单独应用程序中编辑而发生变化时非常有用。

要使用 `ExpireNamedPPixFromCache()` 使单个帧过期，必须知道标识符。插件可以使用 `AddNamedPPixToCache()` 指定标识符。如果帧在缓存中有多个名称，并且你使其中任何一个名称过期，则该帧将被过期。或者，对于渲染的帧，可以使用 [视频片段渲染套件](#video-segment-render-suite) 中的 `GetIdentifierForProduceFrameAsync()` 检索标识符。

清除缓存不会干扰任何未完成的请求，因为每个请求都持有对所需帧的依赖。

CS5.5 中新增的版本 5 添加了新的颜色配置文件感知调用 `AddFrameToCacheWithColorProfile()` 和 `GetFrameFromCacheWithColorProfile()`。

CC 2014 中新增的版本 6 添加了 `AddFrameToCacheWithColorProfile2()` 和 `GetFrameFromCacheWithColorProfile2()`，它们与版本 5 中添加的调用相同，但增加了一个 `PrRenderQuality` 参数。

版本 7 添加了 `AddFrameToCacheWithColorSpace()` 和 `GetFrameFromCacheWithColorSpace()`，这些 API 弃用了 `AddFrameToCacheWithColorProfile2()` 和 `GetFrameFromCacheWithColorProfile2()`。

---

## PPix 创建器

包括创建和复制 PPix 的回调。另请参阅 [PPix 创建器 2 套件](#ppix-creator-2-suite)。

### CreatePPix

创建一个新的 PPix。使用此回调的优势在于，分配的帧会在媒体缓存中记录，并且是 16 字节对齐的。

`ppixNew` 和 `newPtr` 不会在媒体缓存中分配内存，也不会执行任何对齐。

```cpp
prSuiteError (*CreatePPix)(
 PPixHand* outPPixHand,
 PrPPixBufferAccess inRequestedAccess,
 PrPixelFormat inPixelFormat,
 const prRect* inBoundingRect);
```

| 参数 | 描述 |
|---|---|
| `PPixHand *outPPixHand` | 如果创建成功，则为新的 PPix 句柄。否则为 NULL。 |
| `PrPPixBufferAccess inRequestedAccess` | 请求的像素访问权限。不允许只读（没有意义）。 |
| `PrPixelFormat inPixelFormat` | 此 PPix 的像素格式 |

### ClonePPix

克隆现有的 PPix。

如果仅请求读取访问权限且要复制的 PPix 也是只读的，则它将引用计数 PPix，否则它将创建一个新的并复制。

```cpp
prSuiteError (*ClonePPix)(
 PPixHand inPPixToClone,
 PPixHand* outPPixHand,
 PrPPixBufferAccess inRequestedAccess);
```

| 参数 | 描述 |
|---|---|
| `PPixHand inPPixToClone` | 要克隆的 PPix。 |
| `PPixHand *outPPixHand` | 如果创建成功，则为新的 PPix 句柄。否则为 NULL。 |
| `PrPPixBufferAccess inRequestedAccess` | 请求的像素访问权限。目前仅允许只读。 |

---

## PPix 创建器 2

更多创建 PPix 的回调，包括原始 PPix。

从 Premiere Pro 4.0.1 引入的该套件版本 2 开始，新增了 `CreateCustomPPix` 调用，用于以自定义像素格式创建 PPix。

新增了用于创建具有特定颜色空间的 PPix 的 API。颜色感知的导入器应使用新的颜色管理 API 来创建 PPix。请参阅 PrSDKPPixCreator2Suite.h。

---

## PPix

与 PPix 相关的回调和枚举。另请参阅 [PPix 2 套件](#ppix-2-suite)。

### PrPPixBufferAccess

可以是以下之一：

- `PrPPixBufferAccess_ReadOnly`,
- `PrPPixBufferAccess_WriteOnly`,
- `PrPPixBufferAccess_ReadWrite`

### Dispose

这将释放此 PPix。调用此函数后，PPix 将不再有效。

```cpp
prSuiteError (*Dispose)(
 PPixHand inPPixHand);
```

| 参数 | 描述 |
|---|---|
| `PPixHand inPPixHand` | 要释放的 PPix 句柄。 |

### GetPixels

这将返回指向像素缓冲区的指针。

```cpp
prSuiteError (*GetPixels)(
 PPixHand inPPixHand,
 PrPPixBufferAccess inRequestedAccess,
 char** outPixelAddress);
```

| 参数 | 描述 |
|---|---|
| `PPixHand inPPixHand` | 要操作的 PPix 句柄。 |
| `PrPPixBufferAccess inRequestedAccess` | 请求的像素访问权限。大多数 PPix 不支持写访问模式。 |
| `char** outPixelAddress` | 输出的像素缓冲区地址。如果请求的像素访问权限不支持，则可能为 NULL。 |

### GetBounds

这将返回边界矩形。

```cpp
prSuiteError (*GetBounds)(
 PPixHand inPPixHand,
 prRect* inoutBoundingRect);
```

| 参数 | 描述 |
|---|---|
| `PPixHand inPPixHand` | 要操作的 PPix 句柄。 |
| `prRect* inoutBoundingRect` | 要填充的边界矩形的地址。 |

### GetRowBytes

这将返回 PPix 的行字节数。

```cpp
prSuiteError (*GetRowBytes)(
 PPixHand inPPixHand,
 csSDK_int32* outRowBytes);
```

| 参数 | 描述 |
|---|---|
| `PPixHand inPPixHand` | 要操作的 PPix 句柄。 |
| `csSDK_int32* outRowBytes` | 返回必须添加到像素缓冲区地址以到达下一行的字节数。 |

### GetPixelAspectRatio

这将返回此 PPix 的像素宽高比。

```cpp
prSuiteError (*GetPixelAspectRatio)(
 PPixHand inPPixHand,
 csSDK_uint32* outPixelAspectRatioNumerator,
 csSDK_uint32* outPixelAspectRatioDenominator);
```

| 参数 | 描述 |
|---|---|
| `PPixHand inPPixHand` | 要操作的 PPix 句柄。 |
| `PrPixelFormat* outPixelFormat` | 返回此 PPix 的像素格式。 |

### GetUniqueKey

这将返回此 PPix 的唯一键。

| 返回值 | 如果 |
|---|---|
| 错误 | 缓冲区大小太小（调用 `GetUniqueKeySize` 以获取正确的大小） |
| 错误 | 键不可用 |
| 成功 | 键数据已填充 |

```cpp
prSuiteError (*GetUniqueKey)(
 PPixHand inPPixHand,
 unsigned char* inoutKeyBuffer,
 size_t inKeyBufferSize);
```

| 参数 | 描述 |
|---|---|
| `PPixHand inPPixHand` | 要操作的 PPix 句柄。 |
| `unsigned char* inoutKeyBuffer` | 用于返回键的存储。 |
| `size_t inKeyBufferSize` | 缓冲区大小 |

### GetUniqueKeySize

这将返回唯一键的大小。此大小在应用程序的整个运行期间不会改变。

```cpp
prSuiteError (*GetUniqueKeySize)(
 size_t* outKeyBufferSize);
```

| 参数 | 描述 |
|---|---|
| `size_t* outKeyBufferSize` | 返回 PPix 唯一键的大小。 |

### GetRenderTime

这将返回此 PPix 的渲染时间。

```cpp
prSuiteError (*GetRenderTime)(
 PPixHand inPPixHand,
 csSDK_int32* outRenderMilliseconds);
```

| 参数 | 描述 |
|---|---|
| `PPixHand inPPixHand` | 要操作的 PPix 句柄。 |
| `csSDK_int32* outRenderMilliseconds` | 返回渲染时间（以毫秒为单位）。 |
| | 如果帧被缓存，则时间为零。 |

---

## PPix 2

获取 PPix 大小的调用。从 CS4 引入的该套件版本 2 开始，新增了 `GetYUV420PlanarBuffers` 调用，用于获取 YUV_420_MPEG2 像素格式的缓冲区偏移量和行字节数。请参阅 PrSDKPPix2Suite.h。

---

## RollCrawl

由播放器或渲染器使用，以获取RollCrawl（滚动/平移控制）的像素。播放器或渲染器然后可以使用加速算法或硬件移动和合成它。请参阅 PrSDKRollCrawlSuite.h。

---

## 序列信息

CS4 中新增。获取序列的帧大小和像素宽高比的调用。这对于导入器、过渡效果或视频过滤器非常有用，这些插件提供带有视频预览的自定义设置对话框，以便可以以正确的尺寸渲染预览帧。请参阅 PrSDKSequenceInfoSuite.h。

CS5.5 中新增的版本 2 添加了 `GetFrameRate()`。

CC 中新增的版本 3 添加了 `GetFieldType()`、`GetZeroPoint()` 和 `GetTimecodeDropFrame()`。

---

## 字符串

CS4 中新增。分配、复制和释放 PrSDKStrings 的调用。请参阅 PrSDKStringSuite.h。

---

## 线程工作

CS4 中新增。注册和排队线程工作回调以在渲染线程上处理的调用。如果你多次排队，可能会有多个线程调用你的回调。如果这是一个问题，你需要在你的端处理它。

---

## 时间

一个 SweetPea 套件，包括以下结构、回调和枚举：

### pmPlayTimebase

| 成员 | 描述 |
|---|---|
| `csSDK_uint32 scale` | 时间基准的速率 |
| `csSDK_int32 sampleSize` | 一个样本的大小 |
| `csSDK_int32 fileDuration` | 文件中的样本数 |

### PrVideoFrameRates

| 成员 | 描述 |
|---|---|
| `kVideoFrameRate_24Drop` | 24000 / 1001 |
| `kVideoFrameRate_24` | 24 |
| `kVideoFrameRate_PAL` | 25 |
| `kVideoFrameRate_NTSC` | 30000 / 1001 |
| `kVideoFrameRate_30` | 30 |
| `kVideoFrameRate_PAL_HD` | 50 |
| `kVideoFrameRate_NTSC_HD` | 60000 / 1001 |
| `kVideoFrameRate_60` | 60 |
| `kVideoFrameRate_Max` | 0xFFFFFFFF |

### GetTicksPerSecond

获取当前的每秒滴答数。这保证在运行期间保持不变。

```cpp
prSuiteError (*GetTicksPerSecond)(
 PrTime* outTicksPerSec);
```

### GetTicksPerVideoFrame

获取当前视频帧速率中的滴答数。inVideoFrameRate 可以是 `PrVideoFrameRates` 枚举中的任何一个。

```cpp
prSuiteError (*GetTicksPerVideoFrame)(
 PrVideoFrameRates inVideoFrameRate,
 PrTime* outTicksPerFrame);
```

### GetTicksPerAudioSample

获取当前音频采样速率中的滴答数。

| 返回值 | 如果 |
|---|---|
| `kPrTimeSuite_RoundedAudioRate` | 请求的音频采样速率不是基本滴答计数的偶数除数，因此此速率中的时间将不准确。 |
| `kPrTimeSuite_Success` | 否则 |

```cpp
prSuiteError (*GetTicksPerAudioSample)(
 float inSampleRate,
 PrTime* outTicksPerSample);
```

---

## 视频片段渲染

该套件使用内置的软件路径进行渲染，并支持子树渲染。这意味着插件可以要求主机渲染片段的一部分，然后仍然处理其余的渲染。例如，如果其中一个图层具有插件无法自行渲染的效果，则插件可以让主机渲染该图层，但然后处理其他图层以及合成。

在 CS5.5 中新增的版本 2 中，新增的调用 `SupportsInitiateClipPrefetch()` 可用于查询剪辑是否支持预取。

在 CS6 中新增的版本 3 中，函数签名已现代化，使用 `inSequenceTicksPerFrame` 而不是 `inFrameRateScale` 和 `inFrameRateSampleSize`。

---

## 视频片段

该套件提供了解析序列并获取视频片段详细信息的调用。所有可查询的节点属性都在 PrSDKVideoSegmentProperties.h 中。这些属性将作为 PrSDKStrings 返回，应使用 [字符串套件](#string-suite) 进行管理。片段提供了一个哈希值，调用者可以使用它快速确定片段是否已更改。即使片段在时间上发生偏移，也可以维护此哈希值。

在 CS5.5 中新增的版本 4 中，新增的调用 `AcquireNodeForTime()` 为请求的时间返回一个片段节点。还有一些新的媒体节点属性：StreamIsContinuousTime、ColorProfileName、ColorProfileData 和 ScanlineOffsetToImproveVerticalCentering。

在 CC 中新增的版本 5 中，新增了视频片段属性：Effect_ClipName。在 CC 2014 中新增的版本 6 中，添加了 `AcquireFirstNodeInTimeRange()` 和 `AcquireOperatorOwnerNodeID()`，以及新的节点类型 kVideoSegment_NodeType_AdjustmentEffect。

视频片段的基本结构是树结构。有一个具有 n 个输入的合成器节点。每个输入是一个剪辑节点，它有一个输入是媒体节点，并且它还有 n 个操作符，即效果。

因此，一个简单的例子，三个剪辑堆叠在一起，最上面的一个有三个效果，看起来像这样：

```cpp
Segment
 Compositor Node
 Clip Node
 Media Node (bottom clip) Clip Node
 Clip Node
 Media Node (middle clip) Clip Node
 Clip Node
 Media Node (top clip)
 Clip Operators (Blur, Color Corrector, Motion)
```

要了解片段结构，请尝试使用 SDK 播放器，使用 SDK 编辑模式创建序列，并在执行编辑时观察序列监视器中的文本叠加。

请参阅 PrSDKVideoSegmentSuite.h 和 PrSDKVideoSegmentProperties.h。

---

## 窗口

CS4 中新增。这是获取主框架窗口句柄的新首选方式，特别是对于无法访问旧版 [piSuites](../legacy-callback-suites#pisuites) 的导出器。
