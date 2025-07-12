---
title: 最新动态
---
# 最新动态

## 24.0 版本的新功能

随着 Premiere Pro 中 Capture 功能的移除，SDK 中移除了对 Record 模块和 Device Control 插件的支持。

## 15.4 版本的新功能

我们更新了 `PrSetEnv.h` 头文件，以支持构建 ARM 原生插件。

## 14.2 版本的新功能

清理了 SDK 源文件上的灰尘和碎片。;) 此次新 SDK 发布的主要动机是提供更新的头文件。使用这些新头文件的示例代码以及其新内容的文档（遗憾的是）需要等待另一天。

## 13.1 版本的新功能

从产品名称中移除了 "CC"。

---

## 13.0 版本的新功能

Premiere Pro 的 C++ API 在 13.0 版本中唯一的重要变化是在 Importer API 中添加了颜色空间说明符。ColorProfileRec 结构已被弃用；相反，导入器将使用 ColorSpaceRec 来描述支持的颜色空间（响应 imGetIndColorSpace）。

---

## 12.0 版本的新功能

### 效果和过渡

使用此 SDK 构建的 [GPU 效果和过渡](../../gpu-effects-transitions/gpu-effects-transitions) 现在与 After Effects 15.0 及更高版本兼容。示例 GPU 效果项目已更新，以便它们可以在 Premiere Pro 和 After Effects 中加载。

新提供的 [PrGPU SDK 宏](../../gpu-effects-transitions/PrGPU-SDK-macros) 和设备函数允许您编写可在 CUDA 和 Metal 上编译的内核。

现在可以在单个插件二进制文件中实现多个效果和过渡，通过在运行时在软件中定义多个入口函数。注册入口函数的新方法将取代 PiPL 资源，目前仅在 Premiere Pro 中支持。示例效果和过渡展示了这种新方法，而 [插件属性列表 (PiPL) 资源](../../resources/pipl-resource) 仍然保留，以便在 PPro 中向后兼容，并与 AE 兼容。

[序列信息套件](../../universals/sweetpea-suites#sequence-info-suite) 现在为版本 5，添加了新的调用 GetImmersiveVideoVRConfiguration()，它返回指定序列的 VR 视频设置。

[导出信息套件](../../exporters/suites#export-info-suite) 现在有一个新的选择器：kExportInfo_SourceBitrate。它返回源的比特率（以 kbps 为单位），并且并非所有源类型都可用。exParamType 现在可以是 exParamType_thumbnail 类型。现在可以设置一个新的标志 exParamFlag_verticalAlignment，以便属性名称和值控件垂直显示而不是并排显示。

---

## CC 2017.1 版本的新功能

### 导入器

支持字幕的导入器可以利用 `imFileInfoRec8` 中的 mayHaveCaptions 标志来提高性能。此外，`imImageInfoRec` 现在被添加到 `imInitiateAsyncClosedCaptionScanRec` 中，仅用于宽度和高度参数。

### 导出器

导出器可以宣传它们是否支持颜色配置文件嵌入。还有一些 API 可以在导出器中设置颜色配置文件，以及一个控制是否嵌入配置文件的标志。颜色配置文件通过 exDoExportRec 传递给导出器，以便根据格式标准将其嵌入到输出媒体中。目前用于通过 Media Encoder 从 After Effects 导出的内容。

### 传输

新增了 10 位和 12 位 RGB HLG 格式，以扩展 HDR 支持。

在 [应用信息套件](../../universals/sweetpea-suites#app-info-suite) 中，新增了一个用于 Character Animator 的标识符，它现在支持传输插件。

### VR 视频支持

Playmod Immersive Video Suite 可用于查询 VR 视频设置中是否开启了 ambisonics 监控。

---

## CC 2017 版本的新功能

### 新增 VR 视频支持

传输插件可以让桌面监视器中的 VR 视角由头戴式显示器驱动，因此当佩戴头戴式显示器的人看向不同方向时，桌面监视器会显示相同的视角。为此，传输插件可以使用新的 Playmod Immersive Video Suite 来表明它支持跟踪。

一旦 Premiere 看到传输器支持跟踪，当用户激活 VR 查看器时，新的菜单项“跟踪头戴式显示器”将变为活动状态，并且可以切换以开始跟踪。传输器应尽可能频繁地调用 NotifyDirection() 以更新信息。Premiere 将在下一帧绘制时获取新位置。

对于导入器，imFileInfoRec8 现在已扩展，因此如果导入器检测到剪辑包含 VR 视频，它可以通知 Premiere。

### 新的示例项目

此 SDK 包含一个新的 ProcAmp 示例的 Metal 渲染路径。此示例需要 macOS 10.11.4 及更高版本。

我们还添加了一个名为 Vignette 的示例 GPU 效果，由 Bart Walczak 捐赠。此效果具有 OpenCL、CUDA 和软件渲染路径。Premiere Pro 中的软件渲染包括 8 位/32 位 RGB/YUV 软件渲染路径。After Effects 中的软件渲染包括 8 位和 32 位智能渲染。

最后，Control Surface 示例现在跨平台。

### 新的面板/脚本功能

脚本（HTML5 面板的基础处理）正在不断改进。在此版本中，我们添加了脚本来添加/修改效果关键帧。请参阅 GitHub 上的示例面板代码：

[https://github.com/Adobe-CEP/Samples/tree/master/PProPanel](https://github.com/Adobe-CEP/Samples/tree/master/PProPanel)

特别是，请参阅 jsx/Premiere.jsx 中的 onPlayWithKeyframes() 函数。

### 杂项

在 [视频片段渲染套件](../../universals/sweetpea-suites#video-segment-render-suite) 中，添加了各种调用的新版本，其中包含一个额外的布尔值，允许渲染跳过非固有效果的渲染。

---

## CC 2024.0 版本的新功能

传输 API 已扩展，以支持多个音频输出，以及流式传输视频和音频信息的插件。

## CC 2015.4 版本的新功能

### Metal 渲染效果和过渡

现在支持使用 Metal 进行 GPU 加速渲染的第三方效果和过渡。PrGPUDeviceFramework_Metal 已作为 PrGPUDeviceFramework 中的一个枚举值添加。

---

## CC 2015.3 版本的新功能

### 控制面板

新增了用于控制面板的套件，以支持 Lumetri 颜色面板。大多数控件都受支持，包括颜色轮，但不包括曲线控件。

现在有一个共享位置用于控制面板插件。在 Mac 上：

/Library/Application Support/Adobe/Common/Plugins/ControlSurface，以及

~/Library/Application Support/Adobe/Common/Plugins/ControlSurface

在 Windows 上：

C:Program FilesAdobeCommonPluginsControlSurface

### 导入器

现在可以使用新的 imFileInfoRec8.vidDurationInFrames 以 64 位整数报告视频时长，以支持更长的文件长度。还有一个新的套件函数 SetImporterInstanceStreamFileCount()，用于导入器指定它们打开的文件数量。

### 导出器

现在可以在 exExporterInfoRec.flags 中设置新标志，以限制导出器在不合理的情况下使用。现在，导出器可以指定不支持仅视频导出。此外，导出器可以选择关闭发布选项卡。

### 效果

源设置效果应使用更新的源设置套件和新 SetIsSourceSettingsEffect() 函数。它们应在 *PF_Cmd* *GLOBAL_SETUP* 期间进行此调用。添加此函数是为了处理效果应用于代理视频的情况。

### 杂项

使用 [序列信息套件](../../universals/sweetpea-suites#sequence-info-suite)，添加了一个新的调用 GetProxyFlag()，以便插件知道代理模式是开启还是关闭。

---

## CC 2015.1 版本的新功能

### 传输

新增了对 12 位 Dolby PQ 像素格式的原生支持，包括 Rec. 709、P3 和 Rec. 2020 原色。

---

## CC 2015 版本的新功能

### After Effects 风格的过渡

AE 风格的过渡现在可以获取和设置过渡的开始和结束百分比。用户可以在效果控制面板中更改开始和结束参数。为了让插件能够获知这些值的变化，PF TransitionSuite 中有两个新函数：RegisterTransitionStartParam() 和 RegisterTransitionEndParam()，它们将这些参数注册为浮点参数。一旦注册，当这些参数发生变化时，插件将收到 *PF_Cmd_USER_CHANGED_PARAM*，以及在首次应用过渡时，以便插件可以将它们初始化为所需的值。

AE 风格的过渡现在可以从底层剪辑的任意位置检索 GPU 帧。有一个新的 PrGPUDependency_TransitionInputFrame，并且 PrGPUFilterFrameDependency 有一个新成员来指定是否需要来自传入或传出剪辑的帧。

### 源设置 = 效果 + 导入器

现在可以使用与导入器绑定的效果来实现剪辑的源设置。这样做的好处是在效果控制面板中提供设置，而不是在模态对话框中。编辑者可以通过这种方式调整多个剪辑的源设置。这些效果用于 DPX 源设置、CinemaDNG 等。

要实现这一点，导入器应将 `imImportInfoRec.hasSourceSettingsEffect` 设置为 true。然后在 imFileInfoRec8 中，它应将 sourceSettingsMatchName 设置为用于源设置的效果的匹配名称。

在效果方面，PrSDKAESupport.h 中添加了一个新的 PF 源设置套件，用于使用 After Effects API 的效果。这是效果注册处理源设置命令的函数的方式。

源设置效果主要用于参数 UI 和管理。源设置效果不提供实际的帧。事实上，效果甚至不会调用 *PF_Cmd_RENDER*。帧直接来自导入器，导入器根据通过 prefs 数据传递给导入器的设置提供帧。

当首次导入剪辑时，效果会调用 *PF_Cmd_SEQUENCE_SETUP*。它应调用源设置套件中的 PerformSourceSettingsCommand() 以初始化 prefs。这会导致导入器调用 *imPerformSourceSettingsCommand*，在那里它可以读取文件并设置默认的 prefs。该函数的 param1 是 imFileAccessRec8\*，param2 是 imSourceSettingsCommandRec\*。

当源设置效果参数更改时，效果会调用 *PF_Cmd_TRANSLATE_PARAMS_TO_PREFS*。函数签名为：

```cpp
PF_Err TranslateParamsToPrefs(
 PF_InData* in_data,
 PF_OutData* out_data,
 PF_ParamDef* params[],
 PF_TranslateParamsToPrefsExtra *extra)
```

使用新的 prefs，导入器将发送 *imOpenFile8, imGetInfo8, imGetIndPixelFormat, imGetPreferredFrameSize, imGetSourceVideo* 等。

imSourceSettingsCommandRec 和 PF 源设置套件允许效果直接与导入器通信，以便它可以正确初始化其参数，基于源媒体。例如，在 DPX 源设置效果中，在 *PF_Cmd_SEQUENCE_SETUP* 中，它调用 PF_SourceSettingsSuite->PerformSourceSettingsCommand()，这通过选择器 *imPerformSourceSettingsCommand* 调用导入器。在这里，导入器打开媒体，查看标头并根据媒体初始化 prefs。对于 DPX，初始参数和默认 prefs 基于视频的位深度。这些默认 prefs 被传递回效果，效果设置初始参数值并将它们的副本存储在 sequence_data 中以用于未来的 *PF_Cmd_SEQUENCE_RESETUP* 调用。

### 导入器

对于使用 imClipFrameDescriptorRec 的任何导入器，请注意结构定义已更改。在 CC 2014 和 CC 2015 或更高版本中使用此结构的任何导入器都需要在访问此结构的成员之前进行运行时检查。

### 导出器

导出器现在可以使用标准参数进行音频通道配置，如内置 QuickTime 导出器所使用的。新的导出器参数 ADBEAudioChannelConfigurationGroup 和 ADBEAudioChannelConfiguration 取代了 ADBEAudioNumChannels。新的导出音频参数套件可用于查询/更改音频通道配置。

[序列音频套件](../../exporters/suites#sequence-audio-suite) 现在为版本 2，修订了 `MakeAudioRenderer()` 以接受 `PrAudioChannelLabel*` 作为参数。

### 传输器

传输器可以获取一些新的信息以帮助 A/V 同步。在 [Playmod 音频套件](../../transmitters/suites#playmod-audio-suite) 中，新的函数 GetNextAudioBuffer2() 返回渲染缓冲区的实际时间。

此外，在 `tmPlaybackClock` 中，新增了 `inAudioOffset` 和 `inVideoOffset` 成员，用于指定用户在首选项中选择的偏移量。

主机通过提前发送帧自动考虑这些偏移量，但如果传输器手动尝试对齐音频和视频时间，它可以使用此信息来了解它们应该相距多远。

### 杂项

遗留回调 bottlenecks->ConvolvePtr() 和 IndexMapPtr() 的参数类型已更新以修复错误。在先前版本和 CC 2015 中使用这些回调的任何插件都需要在调用此函数之前进行运行时检查。

从 CC 2015 开始，我们现在为 Mac 提供安装提示。您将在 "/Library/Preferences" 中找到一个新的 plist 文件 "com. Adobe.Premiere Pro.paths.plist"。这包含您的 Mac 安装程序知道在哪里安装插件的提示，类似于我们在 Windows 上提供的注册表项。

### 新的示例项目

此 SDK 包括更新的 GPU 效果和过渡示例，展示了 GPU 渲染。感谢 nVidia 的 Rama Hoetzlein 为 SDK_CrossDissolve 示例提供的 CUDA 渲染路径！

现在还提供了一个简单的控制面板示例。

---

## CC 2014 (8.2) 版本的新功能

导入器现在对播放器在给定异步请求中的意图有更多的可见性，因为渲染上下文信息现在在 imSourceVideoRec.inRenderContext 中传递。异步导入器可以实现 *aiSelectEfficientRenderTime* 来指定帧请求是否在另一个帧时间（例如 I 帧边界）更有效。[视频片段渲染套件](../../universals/sweetpea-suites#video-segment-render-suite) 已更新到版本 4，添加了包含 imRenderContext 作为参数的新调用。

---

## CC 2014 (8.1) 版本的新功能

支持增长文件的导入器现在会收到一个提示，如果主机知道文件已停止增长：imFileInfoRec8.ignoreGrowing。

导出器现在可以获取正在智能渲染的序列中使用的源像素格式列表。GetExportSourceInfo(…, kExportInfo_SourcePixelFormat, …) 提供了此信息。

---

## CC 2014 (8.0.1) 版本的新功能

导入器可以填写 imImageInfoRec.codecDescription 以提供一个字符串，该字符串将显示在项目面板的视频编解码器列中的剪辑中。

---

## CC 2014 版本的新功能

导入器现在可以选择它们渲染的格式，这允许导入器根据启用的硬件和其他源设置（如 HDR）更改像素格式和质量。为了处理协商，实现 *imSelectClipFrameDescriptor*。

imSourceVideoRec 现在包括一个质量属性。[PPix 缓存套件](../../universals/sweetpea-suites#ppix-cache-suite) 现在为版本 6，添加了 AddFrameToCacheWithColorProfile2() 和 GetFrameFromCacheWithColorProfile2()，它们与版本 5 中添加的相同，但增加了 PrRenderQuality 参数。

imFileInfoRec8.highMemUsage 不再受支持。

新增了一个新的记录器返回代码 rmRequiresRoyaltyContent。如果使用的编解码器未获得许可，请从 recmod_Startup8 或 recmod_StartRecord 返回此代码。

OpenCL 渲染现在还使用半精度 16 位浮点像素格式进行渲染。支持 OpenCL 的 GPU 效果和过渡应实现 16f 和 32f 渲染。

引入了一个新的插件 API 用于硬件控制面板。这是支持 EUCON 和 Mackie 设备控制音频混音和基本传输控制的 API。该 API 支持与 Premiere Pro 的双向通信，以便硬件推子、VU 表等与应用程序同步。

Premiere Pro 现在已本地化为俄语和巴西葡萄牙语。

---

## CC 2013 年 10 月版本的新功能

我们扩展了 After Effects API 以支持 Premiere Pro 中的原生过渡。

对于设备控制器，新增了命令 *cmdSetDeviceHandler*。此命令告诉设备控制器哪个面板正在使用设备控制器 - 捕获面板或导出到磁带面板。

对于导入器，imInitiateAsyncClosedCaptionScanRec 现在提供了额外的字段，供导入器填写所有字幕的估计时长。这对于某些嵌入字幕包含许多空数据帧的情况很有用。

我们添加了 [导出文件套件](../../exporters/suites#export-file-suite) 的版本 2 以解决搜索模式不匹配的问题。

---

## CC 2013 年 7 月版本的新功能

在 2013 年 7 月更新到 CC 版本中，唯一的重要新增内容是在设备控制器 API 中。

---

## CC 版本的新功能

### 新的编辑到磁带面板

您可以将其视为捕获面板的导出到磁带等效物，用于捕获，它在 PPro UI 中提供视频预览和各种设置。其中的好处包括更无缝的集成、更熟悉的用户界面、集成的设备预设以及一些新功能，如将 Bars and Tone / Black Video / Universal Counting Leader 添加到磁带输出的开头。要使用此新功能，请阅读设备控制器 API 中的新增内容。

### 效果和过渡的新 GPU 扩展

现有 API 的新 GPU 扩展允许效果和过渡在使用 GPU 加速模式的 Mercury Playback Engine 时访问 GPU 内存中的视频帧。有关更多信息，请参阅 [GPU 效果和过渡](../../gpu-effects-transitions/gpu-effects-transitions)。

### 导入器和导出器 API 中的隐藏字幕支持

导入器和导出器 API 已扩展以支持嵌入媒体中的隐藏字幕。

:::note
Premiere Pro 还可以导入和导出与任何媒体文件一起的辅助文件（例如 .mcc、.scc 或 .xml）中的字幕，无论媒体文件格式如何。
:::

### 杂项改进

- 新增原生支持10位RGB的像素格式 - PrPixelFormat_RGB_444_10u，以及 `PrPixelFormat_UYVY_422_32f_*` 格式
- VST 3 支持使得更多音频插件可以在 Premiere Pro 中运行
- Windows 安装程序改进，新增预设和设置位置的注册表值
- 通过 [App Info Suite](../../universals/sweetpea-suites#app-info-suite) 获取当前构建号
- 导入器现在可以支持超出基本单声道、立体声和5.1的音频，而无需实现多个流，导入器可以根据剪辑设置返回不同的像素格式。了解更多关于导入器的新功能。
- 导出器可以获取源中的音频通道数量，并检查用户是否在导出设置对话框中勾选了“使用预览”。它们还可以将现有的设置参数移动到不同的位置。了解更多关于导出器的新功能。
- [Sequence Info Suite](../../universals/sweetpea-suites#sequence-info-suite) 可以检索场类型、零点以及时间码是否为丢帧
- 新增过渡API的标志，用于在过渡仅在一侧有输入时优化渲染
- [Video Segment Suite](../../universals/sweetpea-suites#video-segment-suite) 提供了访问新属性的功能：Effect_ClipName

Premiere Pro 现已支持中文本地化。

---

## CS6.0.x 的新功能？

CS6.0.2 增加了对导入器中增长文件的支持。发射器现在可以为其音频通道标记，以便在音频输出映射首选项中使用。

CS6.0.1 为设备控制器提供了一种获取插入编辑期间丢帧数的方法，以便在需要时中止导出到磁带。此方法已被 CC 中新的“导出到磁带”面板功能取代。

---

## CS6 的新功能？

### 发射 API

我们引入了发射 API 作为外部硬件监控的首选方式。这个新 API 提供了大大简化的外部硬件监控支持。发射插件提供了更灵活的使用方式，因为它们不依赖于序列编辑模式，而序列编辑模式一旦编辑后无法更改。用户可以在“首选项 > 播放”中指定发射器。其他插件（如导入器和带有设置预览对话框的效果）可以将视频发送到活动的发射器，从而为硬件监控开辟了新的可能性。详见 [发射器](../../transmitters/transmitters) 了解更多详情。

### 导出器增强

导出器现在可以使用“推送”模型压缩。这可以简化导出代码并提高性能。“拉取”模型仍然受支持，并且是旧版本和 Encore 所必需的。

我们新增了 [Export Standard Param Suite](../../exporters/suites#export-standard-param-suite)，它提供了许多内置导出器中使用的标准参数。这可以大大减少管理典型导出器标准参数所需的代码量，并确保与内置导出器的一致性。

导出器现在可以为参数设置工具提示字符串。现在单个插件中支持多个导出器。并且最大渲染精度标志现在从导出器查询，而不是在导出器不知情的情况下处理。

导出器现在可以使用新的 [Exporter Utility Suite](../../exporters/suites#exporter-utility-suite) 为 Adobe Media Encoder 渲染队列中正在进行的特定编码设置事件（错误、警告或信息）。这些事件显示在应用程序 UI 中，并添加到 AME 编码日志中。

确保您的预设在新 AME 预设浏览器中位于正确的位置。阅读更多关于 [导出器](../../exporters/exporters) 的新功能。

### 立体视频管道

我们还在整个渲染管道中添加了对立体视频的 API 支持。这影响了导入器、使用 After Effects API 构建的效果以及导出器。

### 其他更改

#### 导入器

导入器现在可以在 Premiere Pro 中支持增长文件。我们还为导入器添加了一种方式，以指定其所有源文件在 After Effects 中通过“收集文件”进行复制。Media Accelerator Suite 中新增了一个函数，用于验证媒体加速器的内容状态。了解更多关于 [导入器](../../importers/importers) 的新功能。

#### 记录器

对于记录器，现在在 *recmod_ShowOptions* 期间正确传递了父窗口句柄，当记录器应显示其模态设置对话框时。

#### 播放器

对于播放器，pmPlayerSettings 新增了一个成员 mPrimaryDisplayFullScreen，用于指示播放器是否应全屏显示。

#### 设备控制器

设备控制器新增了一个回调 DroppedFrameProc，用于提供在丢帧时中止导出到磁带的功能。

新增了以下视频段属性：

- `kVideoSegmentProperty_MediaClipScaleToFramePolicy`,
- `kVideoSegmentProperty_AdjustmentAdjustmentMediaIsOpaque`,
- `kVideoSegmentProperty_AdjustmentOperatorsHash`,
- `kVideoSegmentProperty_Media_InPointMediaTimeAsTicks`,
- `kVideoSegmentProperty_Media_OutPointMediaTimeAsTicks`,
- `kVideoSegmentProperty_Clip_TrackItemStartAsTicks`,
- `kVideoSegmentProperty_Clip_TrackItemEndAsTicks`,
- `kVideoSegmentProperty_Clip_EffectiveTrackItemStartAsTicks`,
- `kVideoSegmentProperty_Clip_EffectiveTrackItemEndAsTicks`

[Memory Manager Suite](../../universals/sweetpea-suites#memory-manager-suite) 现在升级到版本 4。AdjustReservedMemorySize 提供了一种相对于当前大小调整保留内存大小的方法。这对于插件来说可能更容易，而不是维护绝对内存使用量并使用旧的 ReserveMemory 调用进行更新。

MPEG-4 像素格式和全范围 Rec. 709 MPEG-2 和 MPEG-4 格式现已添加到渲染管道中的原生支持。

---

## CS5.5 的新功能？

#### 导入器

导入器现在可以在 After Effects 中运行时支持色彩管理。现在，即使是非合成的导入器也可以显式提供峰值音频数据。新增的返回值允许导入器指定它依赖于需要激活的库。了解更多关于 [导入器](../../importers/importers) 的新功能。

#### 播放器

播放器现在可以支持隐藏字幕。了解更多关于播放器章节的新功能。

#### 导出器

导出器现在有一个调用可以请求渲染帧，然后将其转换为特定的像素格式。了解更多关于 [导出器](../../exporters/exporters) 的新功能。

#### 导出控制器

我们开放了一个新的导出控制器 API，可以驱动任何导出器以任何格式输出文件并执行自定义的后处理操作。希望将 Premiere Pro 与资产管理系统集成的开发人员将希望使用此 API 而不是导出器 API。详见 [导出控制器](../../export-controllers/export-controllers) 了解更多详情。

新增了一对像素格式，以原生支持全范围 Rec. 601 4:2:0 YUV 平面视频，包括逐行和隔行：PrPixelFormat_YUV_420_MPEG2_FRAME_PICTURE_PLANAR_8u_601_FullRange 和 PrPixelFormat_YUV_420_MPEG2_FIELD_PICTURE_PLANAR_8u_601_FullRange。

[Video Segment Suite](../../universals/sweetpea-suites#video-segment-suite) 现在提供了一个新的调用，用于检索请求时间的段节点。还有一些新的媒体节点属性：

- `StreamIsContinuousTime`,
- `ColorProfileName`,
- `ColorProfileData`, 和
- `ScanlineOffsetToImproveVerticalCentering`

[Sequence Info Suite](../../universals/sweetpea-suites#sequence-info-suite) 现在提供了一个调用，用于获取序列帧率，这可能对效果有用。

[Image Processing Suite](../../universals/sweetpea-suites#image-processing-suite) 新增了一个调用，用于设置 DV 帧的宽高比标志。

---

## CS5 的新功能？

#### 导入器

导入器现在可以从设置对话框中访问源剪辑的分辨率、像素宽高比、时间基准和音频采样率。自定义导入器可以使用新的调用在用户在设置对话框中修改剪辑后更新剪辑。请参阅 [导入器](../../importers/importers) 了解更多新功能。

#### 记录器

记录器现在可以在预览和捕获期间提供音频计量。

#### 导出器和播放器

导出器和播放器现在可以自动利用 GPU 加速（如果最终用户的系统支持）。每个项目现在都有一个渲染器设置，用户可以在项目设置对话框中选择。当通过 [Sequence Render Suite](../../exporters/suites#sequence-render-suite) 或 Playmod Render Suite 进行渲染时，它们现在会通过为当前项目选择的渲染器进行渲染。这允许第三方导出器和播放器使用新的 Mercury Playback Engine 中内置的 GPU 加速。

导出器和播放器现在可以处理任何像素格式，使用新的 [Image Processing Suite](../../universals/sweetpea-suites#image-processing-suite)。解析段并执行自己渲染的导出器和播放器现在可以调用主机进行子树渲染。详见 [Video Segment Render Suite](../../universals/sweetpea-suites#video-segment-render-suite)。

:::note
如果您为导出器提供安装程序，Premiere Pro 中创建的自定义预设现在在 AME 中可见，反之亦然。
:::

### Mac 64 位和 Cocoa

由于 Objective-C 运行时的限制，卸载任何使用 Cocoa 的 bundle 是无效的，因为不支持注销类。如果插件使用 Cocoa，它必须在其自己的 bundle 上调用 CFRetain，否则当应用程序关闭并尝试卸载插件时会导致崩溃。

---

## CS4 的新功能？

### 新渲染器 API 和自定义像素格式

新的渲染器 API 提供了一种接管和加速段渲染的方式。就像播放器可以选择加速哪些段一样，渲染器也可以选择加速哪些段。渲染器可以加速任何项目中的任何序列中的任何段。

渲染器还提供了一种向渲染管道添加完全自定义像素格式的方式。在导入器、渲染器和导出器中支持自定义像素格式是通过从输入到输出传递自定义压缩数据来实现智能渲染的新方式。

### 序列预览格式

序列预览文件格式现在由序列编码器预设文件定义。如果没有安装任何预设，您将无法使用自定义编辑模式创建新序列。

### 导出期间的独立进程

在选择导出设置时，设置 UI 由 Premiere Pro 显示。当用户确认设置后，剪辑或序列将传递给 Media Encoder。从 Media Encoder 中，可以检索并渲染剪辑或序列的帧，而无需 Premiere Pro 的进一步参与。对于剪辑导出，Media Encoder 使用任何已安装的导入器来获取源帧。对于序列导出，Media Encoder 使用一个称为 PProHeadless 的进程来导入并渲染要导出的帧。

由于导出期间涉及如此多的进程，因此插件必须安装在公共插件文件夹中，以便所有进程都可以访问。PProHeadless Plugin Loading.log 提供了有关 PProHeadless 进程的信息。当用户创建指向未在 Premiere Pro 中打开的 .prproj 的动态链接时，也会使用 PProHeadless。

### XMP 元数据

内置的 XMP 元数据处理器用于已知文件类型。这些处理器在不通过导入器的情况下从文件中写入和读取元数据。*imSetTimeInfo8* 不再被调用，因为这是由该文件类型的 XMP 处理器设置的。

### 更多像素格式灵活性

效果、过渡和导出器不再需要最低支持 8 位 RGB。因此，例如，可以编写一个仅处理浮点 YUV 的效果。如有必要，Premiere 将进行中间转换，以便效果接收到它支持的像素格式。

---

## 旧版 API

旧版 API 功能（如被新功能取代的选择器和回调）已被弃用，但仍受支持，除非另有说明。
