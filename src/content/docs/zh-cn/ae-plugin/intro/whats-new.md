---
title: 最新动态
---
# 最新动态

如果你是第一次开发 After Effects 插件，可以跳过“最新动态”部分，直接前往[如何开始创建插件](../how-to-start-creating-plug-ins)。

---

## 25.2 SDK 中的新功能

作为 AEGP_LayerSuite9 的一部分，如果对象类型是 3D 模型，AEGP_GetLayerObjectType 现在可以返回 AEGP_ObjectType_3D_MODEL。

---

## After Effects 2022 中的新功能

After Effects 2022 包含了首个支持多帧渲染的完整公开版本。2021 年 10 月发布的 AE Effects SDK 包含了一个变化，用于增加 PF_Iterate 线程的最大数量。

---

## 2021 年 3 月 After Effects SDK 中的新功能

### 多帧渲染的变化

1. `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` 标志的最终行为现已确定。设置此标志以表示支持多帧渲染时，还将强制在渲染时将 `sequence_data` 中的数据设为 const/只读，并且现在通过 `PF_EffectSequenceDataSuite1` 套件访问 `sequence_data`。
2. 如果您的插件无法更新以适应新的 `sequence_data` 行为，现在可以设置一个新标志 `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` 与 `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` 一起使用。After Effects 将无法对设置此标志的效果应用尽可能多的渲染并发性，因此性能改进也会受到影响（因此标志名称为 \_SLOWER）。
3. 现在提供了一个新的套件，即计算缓存（之前称为三向检出缓存）。该套件提供了一个线程安全的缓存，插件可以用它来替代或补充 `sequence_data`，以支持多个渲染线程计算和缓存渲染帧所需的数据。

由于这些变化，您必须更新并使用 2021 年 3 月的 SDK 进行编译，以保持与 AE Beta 版本的多帧渲染兼容性。使用 2020 年 6 月 SDK 编译的插件将不再支持多帧渲染，即使设置了 `PF_OutFlag2_SUPPORTS_THREADED_RENDERING`，从 AE 22.0x6（2021 年 6 月 29 日发布）开始。

有关更多信息，请参阅 [AE 中的多帧渲染](../../effect-details/multi-frame-rendering-in-ae)。

### Apple Silicon 支持

* AE SDK 现在支持为 Apple Silicon 原生构建效果。虽然 After Effects 本身尚未在 Apple Silicon 上运行，但 Adobe 公司正在为许多产品推进原生支持。诸如 Premiere Pro 等应用程序现在已有原生版本可用，您的效果可能会通过 Motion Graphic Templates 等功能在 Premiere Pro 中加载。当运行 Premiere Pro 的原生版本时，只有原生编译的效果才能工作，因此尽快更新您的效果以支持 Apple Silicon 非常重要。有关更多信息，请参阅 [Apple Silicon 支持](../apple-silicon-support) 部分。

### 从效果中导出符号

* SDK 示例已更新，默认情况下不在 MacOS 上导出符号。有关更多信息，请参阅 [效果中的符号导出](../symbol-export)。

### 下载 2021 年 3 月 SDK

可以从 Adobe Developer Console 下载 SDK：[https://adobe.io/after-effects/](https://adobe.io/after-effects/)

### After Effects Beta 版本

要获取此 SDK 的 AE 主机端更改，您需要从 Creative Cloud 桌面应用程序下载新的 After Effects beta 版本。2021 年 3 月 SDK 支持 18.2x11 及更高版本。

---

## 2020 年 6 月之后的 After Effects Beta 版本中的新功能

AE（目前仅在 Beta 版本中）现在支持多帧渲染。有关更多详细信息，请参阅 [AE 中的多帧渲染](../../effect-details/multi-frame-rendering-in-ae)。

---

## CC 2019 (16.0) 中的新功能

我们对 GPU 效果的处理方式进行了一些更改。有关详细信息，请参阅“GPU 效果更改”。

---

## 15.0 中的新功能

After Effects 现在支持之前在 Premiere Pro 中支持的 *GPU 效果渲染*。请注意，如果匹配名称中包含 "ADBE " 的未知效果将被排除在 GPU 渲染之外，因此请确保您的任何 GPU 效果都有自己的自定义匹配名称。支持 GPU 渲染的效果将在效果面板中收到 GPU 徽章。

Premiere Pro SDK 中的 GPU 效果示例项目已更新为在 AE 中注册为 GPU 效果，尽管渲染输出仍需改进。

定义了一个新的入口函数，允许效果在运行时向主机注册基本信息，而不依赖于传统的 PiPL 资源。通过这种方式，效果可以在单个二进制文件中注册多个入口函数。Premiere Pro 是第一个支持此入口函数的主机，After Effects 将在未来的版本中支持此功能。

效果示例项目已更新为使用此方法，同时保留 PiPL 以实现向后兼容性。

`AEGP_StreamSuite` 现在为版本 5，其中 [AEGP_GetExpression()](../aegps/aegp-suites.md#aegp_streamsuite5) 和 [AEGP_SetExpression()](../aegps/aegp-suites.md#aegp_streamsuite5) 已升级以支持 Unicode。

`PF_AdvTimeSuite` 现在为版本 4，新增了一个调用 [PF_TimeCountFrames()](../effect-details/useful-utility-functions.md#pf_advtimesuite4)，返回当前合成中帧的索引。

新的 AEGP Math Suite 提供了用于矩阵乘法的有用调用。

应用程序字体现在为 Adobe Clean。以前，After Effects 的 UI 中使用的字体在 Windows 上是 Tahoma，在 macOS X 上是 Lucida Grande。这是一种专有字体，我们无法将其提供给您的 UI 使用。

---

## CC 2017.1 (14.2) 中的新功能

* 图层参数可以包括遮罩和效果

使用图层作为输入的效果（如 Set Matte 和 Displacement Map）现在可以定位输入图层的遮罩和效果，而不仅仅是图层的源。这意味着不再需要预合成图层以便效果可以引用它们。

在效果包含图层参数的情况下，图层选择器右侧的新菜单允许您选择是从图层的源、遮罩还是效果中定位输入图层：

* 源：仅定位图层的源。忽略遮罩和效果。
* 遮罩：定位应用了遮罩后的图层。忽略效果。
* 效果和遮罩：定位应用了遮罩和效果后的图层。

此控件类似于图层查看器面板底部的视图菜单，允许您从渲染顺序中的不同位置渲染图层：从其源、从其遮罩或从其各个效果。

由于这是一个面向用户的选项，设计旨在对效果透明。从效果的角度来看，输入只是简单地包含了上游效果和遮罩，而无需对效果进行任何更改。对于任何使用图层参数的效果，以下是一些测试建议：

* 效果继续按预期工作。
* 在图层参数中使用新的源/遮罩/效果控件与效果一起工作。
* 打开旧项目或保存回旧版本项目不会破坏效果。
* 确认效果不能自引用；即不能使用同一图层上的效果作为同一图层的输入。
* 套件增强

`PF_AdvTimeSuite` 现在为版本 3，提供了一个修订的 [PF_GetTimeDisplayPref()](../effect-details/useful-utility-functions.md#pf_advtimesuite4) 调用，使用修订的 `PF_TimeDisplayPrefVersion` 参数，支持更高的帧速率。
如果值超出结构支持的范围，版本 2 的调用现在可能会返回错误。

`Comp Suite` 现在为版本 11，新增了一个调用 [AEGP_ReorderCompSelection()](../aegps/aegp-suites.md#aegp_compsuite11)，用于将选择移动到某个图层索引。
应与 `AEGP_SetSelection()` 一起使用。

---

## CC 2017 (14.1) 中的新功能

[AEGP Item Suite](../aegps/aegp-suites.md#aegp_itemsuite9) 和 [AEGP Render Queue Item Suite](../aegps/aegp-suites.md#render-queue-item-suite) 的 Unicode 支持。

---

## CC 2017 (14.0) 中的新功能

GLator 示例回来了！它已更新为演示效果插件中的正确 OpenGL 上下文管理。

---

## CC 2015.3 (13.8) 中的新功能

`PF_OutFlag_I_AM_OBSOLETE` 现在在 Premiere Pro 中受支持。此外，Premiere Pro 中的效果自定义 UI 现在支持高 DPI 显示器，例如 Retina 显示器。

---

## CC 2015 (13.6) 中的新功能

新的 AEGP Item View Suite。这提供了一种获取项目视图播放时间的方法。此版本中仅实现了合成情况。返回的时间应为播放时的视图播放时间，否则为当前（指针）时间。

`AEGP_RenderNewItemSoundData()` 已重新设计，并提供类似于 13.2 的功能。

---

## CC 2015 (13.5.1) 中的新功能

此版本修复了由于线程更改而在 13.5 中损坏的一些音频 API。在 13.5 中，当在 UI 线程上调用时，`AEGP_RenderNewItemSoundData()` 会返回 `A_Err_GENERIC`。此版本恢复了在 UI 线程上调用时的功能。

为了避免死锁，在 `PF_Cmd_UPDATE_PARAMS_UI` 中，`AEGP_RenderNewItemSoundData()` 现在将返回静音。在此上下文中，它将不再像以前那样工作，但在其他地方将继续正常工作。

---

## CC 2015 (13.5) 中的新功能

* 分离 UI 和渲染线程

此版本的 After Effects 包括将 UI（主）线程与渲染线程分离的重大架构更改。渲染线程发送诸如 `PF_Cmd_RENDER`、`PF_Cmd_SMART_PRERENDER` 和 `PF_Cmd_SMART_RENDER` 等选择器到效果插件。UI 线程发送诸如 `PF_Cmd_SEQUENCE_SETUP`、`PF_Cmd_USER_CHANGED_PARAM`、`PF_Cmd_DO_DIALOG` 和 `PF_EVENT_DRAW` 等选择器。`PF_Cmd_SEQUENCE_RESETUP` 在渲染和 UI 线程上都会发送。

这些更改旨在提高交互性能和响应能力。同时，新设计引入了一些新要求，并可能破坏现有插件所依赖的假设。以下是一些主要变化：

1. 渲染线程不能再修改项目（事实上，渲染线程现在有自己的项目本地副本）
2. 渲染不能将修改后的序列数据传递回 UI 线程以进行自定义 UI 更新
3. 通常，UI 线程不应再执行耗时的操作，例如同步渲染帧

您的插件是否受到影响？测试以下问题：

1. 由于依赖于可能未复制到渲染的 `sequence_data`，UI 参数更改后渲染未更新
2. 在合成窗口中点击/拖动期间渲染未更新（类似原因）
3. 自定义效果 UI 未更新，因为它依赖于渲染中生成的 `sequence_data`（由于它位于不同的项目中，渲染项目是不可变的，并且缓存包含先前渲染的帧，因此不再可用于 UI）
4. 错误提示渲染线程（或 UI 线程）上的操作不符合预期

通常，持久化或更新 UI 的计算现在必须从 UI 线程中提取，而不是从渲染线程中推送。这些情况可能需要使用新的 13.5 API 或与过去版本不同的解决方案。

* 更高效的序列数据处理需求

`PF_OutFlag2_SUPPORTS_GET_FLATTENED_SEQUENCE_DATA`

`PF_Cmd_GET_FLATTENED_SEQUENCE_DATA`

在 13.2 版本之前，序列化/扁平化 `sequence_data` 总是涉及释放和重新分配任何数据结构。从 13.5 开始，随着效果的更改，序列化/扁平化发生得更加频繁。为什么？AE 需要序列化/扁平化项目更改以从 UI 线程发送到渲染线程，以保持它们同步。

为了使此过程更高效，从 13.5 开始，AE 可以发送 `PF_Cmd_GET_FLATTENED_SEQUENCE_DATA` 以请求序列数据，而无需释放和重新分配现有数据。此选择器与 `PF_Cmd_SEQUENCE_FLATTEN` 的主要区别在于，返回的是正确扁平化状态的副本，而不会释放效果当前使用的原始结构。有关代码示例，请参阅 PathMaster 示例项目。

这最终将成为重建为线程安全的插件的要求（请参阅下面的 `PF_OutFlag2_AE13_5_THREADSAFE`）。传统的 `PF_Cmd_SEQUENCE_FLATTEN` 最终将在未来版本中不受支持。

* `PF_OutFlag_FORCE_RERENDER` 更改

在可能的情况下，我们建议使用以下方法之一触发重新渲染：`GuidMixInPtr()`（在下一节中描述）、arb 数据或 `PF_ChangeFlag_CHANGED_VALUE`。所有这些都允许在撤消后重用缓存的帧。

注意：从 14.0 开始，为图层或路径参数设置 `PF_ChangeFlag_CHANGED_VALUE` 不会触发重新渲染。相反，您可以使用 `AEGP_StreamSuite` 更改设置值。

`FORCE_RERENDER` 仍然需要在将 `sequence_data` 从 UI 线程复制到渲染项目/效果克隆以保持它们匹配的情况下使用。

无论渲染请求是否使用缓存，`FORCE_RERENDER` 都是此操作的触发器。一旦我们有了管理渲染状态所需的完整 API 集，我们将能够弃用 `FORCE_RERENDER`。

`FORCE_RERENDER` 并不像以前那样在所有情况下都有效，因为它需要同步 UI 副本的 `sequence_data` 与渲染线程副本。

`FORCE_RERENDER` 在 `PF_Cmd_USER_CHANGED_PARAM` 期间设置时有效。它也在 `CLICK` 和 `DRAG` 事件中有效，但仅在实现了 `PF_Cmd_GET_FLATTENED_SEQUENCE_DATA` 时有效。这是为了防止在鼠标操作中间扁平化和丢失 UI 状态。如果没有 `GET_FLATTENED`，新的 `FORCE_RERENDER` 行为将不会启用。

* 缓存帧的 GUID

`PF_OutFlag2_I_MIX_GUID_DEPENDENCIES`

`GuidMixInPtr()`

仅由 SmartFX 使用。如果自定义 UI 或 `PF_Cmd_DO_DIALOG` 更改了序列数据，或者渲染结果依赖于其他未考虑的因素，并且可能需要重新渲染，请使用此功能。在 `PF_Cmd_SMART_PRERENDER` 期间，效果可以调用 `GuidMixInPtr()` 将任何影响渲染的附加状态混合到我们内部缓存的帧 GUID 中。使用此 GUID，AE 可以判断帧是否已经存在或是否需要渲染。请参阅 SmartyPants 示例项目中的示例。

这是对旧机制 `PF_OutFlag_FORCE_RERENDER` 和 `PF_Cmd_DO_DIALOG` 的改进，这些机制会从缓存中删除帧，因为主机不知道插件在渲染中还考虑了哪些其他因素。这也可以用来替代 `PF_OutFlag2_OUTPUT_IS_WATERMARKED`。

* 异步请求帧而不阻塞 UI

`PF_OutFlag2_CUSTOM_UI_ASYNC_MANAGER`

`PF_GetContextAsyncManager()` `AEGP_CheckoutOrRender_ItemFrame_AsyncManager()` `AEGP_CheckoutOrRender_LayerFrame_AsyncManager()`

对于以前通过副作用或隐式取消触发的渲染（例如自定义 UI 直方图绘制），并且从插件内部不清楚生命周期的情况，请使用新的“异步管理器”，它可以处理效果自定义 UI 的多个同时异步请求，并自动支持与其他 AE UI 行为的交互。

注意：异步检索帧是处理被动绘制情况的首选方法，但当用户操作将更新项目状态时则不适用。如果您（1）响应特定的用户点击，并且（2）需要更新项目作为结果，建议使用同步的 `AEGP_RenderAndCheckoutLayerFrame()`。

SDK 中的新 HistoGrid 示例展示了如何在 UI 线程上完全异步处理自定义 UI DRAW 事件，当需要 1 个或多个帧渲染时。例如，用于计算显示在效果面板中的直方图。请注意，仍然存在一个已知的错误，即拖动更改上游参数可能不会刷新直方图绘制，直到鼠标悬停在其上。

* 从效果的 UI 获取渲染输出

诸如键控器或绘制后处理视频直方图的效果可以使用 `AEGP_LayerRenderOptionsSuite` 中的新函数 `AEGP_NewFromDownstreamOfEffect()` 检索所需的 `AEGP_LayerRenderOptionsH`。此函数只能在 UI 线程上调用。

* 渲染线程上的 AEGP 使用

我们加强了对 AEGP 调用何时可能被危险使用的验证（例如从错误的线程或在渲染中更改项目状态）。如果代码遇到此类情况，您可能会看到新的错误。例如，在渲染线程上执行以下调用将导致错误：

`suites.UtilitySuite5()->AEGP_StartUndoGroup()` `suites.StreamSuite2()->AEGP_GetStreamName()` `suites.StreamSuite2()->AEGP_SetExpressionState()` `suites.StreamSuite2()->AEGP_SetExpression()` `suites.StreamSuite2()->AEGP_GetNewLayerStream()` `suites.StreamSuite2()->AEGP_DisposeStream()` `suites.EffectSuite3()->AEGP_DisposeEffect()` `suites.UtilitySuite5()->AEGP_EndUndoGroup()`

解决方案是将这些调用移动到 UI 线程。用于被动 UI 更新的选择器（例如 `PF_EVENT_DRAW`）不是更改项目状态的地方。

另一个更严格要求的示例是 `AEGP_RegisterWithAEGP()`。文档一直指出此函数必须在 `PF_Cmd_GLOBAL_SETUP` 上调用。然而，在以前的版本中，插件能够在其他时间调用此函数而不会遇到问题。在 13.5 中不再如此！在其他时间调用此函数可能会导致崩溃！

* `PF_Cmd_SEQUENCE_RESETUP` 在 UI 或渲染线程上调用？

现在有一个 `PF_InFlag_PROJECT_IS_RENDER_ONLY` 标志，仅在 `PF_Cmd_SEQUENCE_RESETUP` 中有效，它将告诉您效果实例是否仅用于渲染目的。如果是，项目应被视为完全只读，您将不会在该效果实例上收到与 UI 相关的选择器。这可以
