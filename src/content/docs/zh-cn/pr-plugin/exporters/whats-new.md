---
title: 新功能
---
# 新功能

## CC 中的新功能

在导出设置中新增了一个“字幕”选项卡，用于导出隐藏式字幕。对于所有格式，都可以导出一个包含字幕的辅助文件。

要了解导出器如何选择将隐藏式字幕直接嵌入输出文件中，请参阅 [隐藏式字幕](../getting-started#closed-captioning)。

在 [导出信息套件](../suites#export-info-suite) 的 `GetExportSourceInfo` 中新增了两个选择器。您可以使用 `kExportInfo_UsePreviewFiles` 来检查用户是否在导出设置对话框中勾选了“使用预览”。如果是，尽可能重用已渲染的预览文件。您可以使用 `kExportInfo_NumAudioChannels` 来获取给定源中的音频通道数。

这可以用于自动初始化导出设置中音频选项卡的音频通道参数，以匹配源。

在 [导出参数套件](../suites#export-param-suite) 中，新增了一个函数 `MoveParam()`，可用于将现有参数移动到新位置。

---

## CS6 中的新功能

导出器现在可以使用 [导出器实用套件](../suites#exporter-utility-suite) 进行“推送”模型压缩。导出器主机可以简单地将帧推送到线程安全的导出器指定回调中。这将减少以前用于渲染循环管理的代码。对于尚未优化其多线程渲染的导出器，这也应能显著提高性能。“拉取”模型仍然受支持，并且是 Encore 以及旧版 Premiere Pro 和 Media Encoder 所必需的。

新的 [导出标准参数套件](../suites#export-standard-param-suite) 提供了许多内置导出器中使用的标准参数。这可以大大减少管理典型导出器标准参数所需的代码量，并确保与内置导出器的一致性。

现在支持直接从 Premiere Pro 导出立体视频。换句话说，当导出排队在 Adobe Media Encoder 中运行时，它们无法获得立体视频。

:::note
目前，立体导出器必须使用“拉取”模型和新的 `MakeVideoRendererForTimelineWithStreamLabel()` 来从多个视频流中获取渲染帧。
:::

[导出参数套件](../suites#export-param-suite) 现在增加了 `SetParamDescription()`，用于设置参数的工具提示字符串。对于导出设置对话框中的三行导出摘要描述，我们交换了第 2 行和第 3 行，以便比特率摘要出现在音频摘要之后。我们重命名了该结构，以便开发者在重新编译时注意到这一点。

Adobe Media Encoder 现在包含一个预设浏览器，为预设提供了更好的组织。确保您的预设利用此组织，并在预设浏览器中显示在您期望的正确位置。

导出器现在可以为 Adobe Media Encoder 渲染队列中正在进行的特定编码设置事件（错误、警告或信息）。[错误套件](../../universals/sweetpea-suites#error-suite) 中的现有调用不足以让 AME 将事件与特定编码关联。因此，新的 [导出器实用套件](../suites#exporter-utility-suite) 提供了一种方式，让在 Premiere Pro 或 Adobe Media Encoder 中运行的导出器可以记录事件。这些事件显示在应用程序 UI 中，并添加到 AME 编码日志中。

现在支持在单个插件中使用多个导出器。为了支持这一点，`exExporterInfoRec` 现在在 *exShutdown* 时设置为导出器。

`exQueryOutputSettingsRec` 有一个新成员 `outUseMaximumRenderPrecision`，将此渲染参数的知识转移到导出器。

---

## CS5.5 中的新功能

在 [序列渲染套件](../suites#sequence-render-suite) 中新增了一个调用 `RenderVideoFrameAndConformToPixelFormat`。这允许导出器请求渲染帧，然后将其转换为特定的像素格式。

新增了一个返回值 `exportReturn_ParamButtonCancel`，用于表示导出器从 `exSelParamButton` 返回时未修改任何内容。

### 导出控制器 API

我们开放了一个新的导出控制器 API，可以驱动任何导出器生成任何格式的文件并执行自定义的后处理操作。希望将 Premiere Pro 与资产管理系统集成的开发者将希望使用此 API。

---

## CS5 中的新功能

`exQueryOutputFileListAfterExportRec` 现在更名为 `exQueryOutputFileListRec`，结构顺序略有变化。

我们还修复了一些错误，例如错误 1925419，其中所有滑块都会获得一个复选框以禁用控件，就像设置了 `exParamFlag_optional` 一样。

我们通过 `GetExportSourceInfo()` 调用向导出器提供了几个新属性——视频海报帧时间和源时间码。

现在可以使用第三方导出器将资产转码为 MPEG-2 或蓝光兼容文件。

---

## 从编译器 API 移植

导出 API 取代了 CS3 及更早版本中的旧编译器 API。导出 API 结合了旧编译器 API 的处理速度和质量，以及 Media Encoder 的 UI 灵活性。尽管选择器和结构已重命名和重组，但处理渲染和写入帧的大部分代码基本相同。

参数 UI 变化最大。与标准编译器具有的标准参数集或自定义编译器具有的完全自定义 UI 不同，在新的导出器 API 中，所有参数必须使用 [导出参数套件](../suites#export-param-suite) 显式添加。首先在 `exSelGenerateDefaultParams` 期间注册参数，然后在 `exSelPostProcessParams` 期间提供本地化字符串和约束参数值。当导出器收到 `exSelExport` 以导出时，再次使用 [导出参数套件](../suites#export-param-suite) 获取参数值。
