---
title: tmModule 函数
---
# tmModule 函数

对于任何不支持的调用，请填写 `0`。线程安全性是按模块定义的，同一时间只有一个线程会进入模块。

| 成员 | 描述 |
|---|---|
| `Startup` | 初始化一个发射器，填写基本的插件信息，分配内存以保存用户设置和其他数据。 |
| | <pre lang="cpp">tmResult (\*Startup)(<br/>tmStdParms\* ioStdParms,<br/>tmPluginInfo\* outPluginInfo);</pre> |
| | - 可以返回 `tmResult_ContinueIterate` 以支持同一模块中的多个传输插件。 |
| | - `ioPrivatePluginData`、`ioSerializedPluginData` 和 `ioSerializedPluginDataSize` 可以在 `Startup` 中写入。 |
| `Shutdown` | 终止一个发射器。 |
| | <pre lang="cpp">tmResult (\*Shutdown)(<br/>tmStdParms\* ioStdParms);</pre> |
| | 如果之前在 `Startup` 中分配了 `ioPrivatePluginData`，请在此处释放。 |
| `QueryAudioMode` | 描述发射器支持的音频模式，一次一个。 |
| | <pre lang="cpp">tmResult (\*QueryAudioMode)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance,<br/>csSDK_int32 inQueryIterationIndex,<br/>tmAudioMode\* outAudioMode);</pre> |
| | 注意，目前只支持一种音频模式。您可以使用 [Audio Suite](../../universals/sweetpea-suites#audio-suite) 在音频格式之间进行转换。 |
| `QueryVideoMode` | 描述发射器支持的视频模式，一次一个。 |
| | <pre lang="cpp">tmResult (\*QueryVideoMode)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance,<br/>csSDK_int32 inQueryIterationIndex,<br/>tmVideoMode\* outVideoMode);</pre> |
| | 稍后在 `PushVideo` 中发送的视频将是此处指定的格式之一。 |
| `SetupDialog` | 显示您自己的模态设置对话框。 |
| | <pre lang="cpp">tmResult (\*SetupDialog)(<br/>tmStdParms\* ioStdParms,<br/>prParentWnd inParent);</pre> |
| | 只有在插件返回 `outHasSetup` 时才会调用。 |
| | 将任何设置保存到 `ioSerializedPluginData`，如果需要，请更新 `ioSerializedPluginDataSize`。 |
| | 在此调用之后将调用 `NeedsReset`，以允许您的发射器有机会重置所有打开的插件并使用新设置重新启动。 |
| `NeedsReset` | 将定期在模块的第一个插件上调用，以允许在状态更改时重建。 |
| | <pre lang="cpp">tmResult (\*NeedsReset)(<br/>const tmStdParms\* inStdParms,<br/>prBool\* outResetModule);</pre> |
| | 如果传入的设置与创建时的设置差异较大，或者硬件本身的设置发生了变化，发射器应指定需要重置。 |
| | 如果 `outResetModule` 设置为 `true`，所有打开的插件将被关闭并重新启动。 |
| `CreateInstance` | 创建一个发射器的实例。 |
| | <pre lang="cpp">tmResult (\*CreateInstance)(<br/>const tmStdParms\* inStdParms,<br/>tmInstance\* ioInstance);</pre> |
| | 如果不由播放器驱动，`inPlayID` 和 `inTimelineID` 可能为 0。 |
| | 可以同时创建多个实例。 |
| | 分配 `ioPrivateInstanceData`。 |
| `DisposeInstance` | 释放一个发射器的实例。 |
| | <pre lang="cpp">tmResult (\*DisposeInstance)(<br/>const tmStdParms\* inStdParms,<br/>tmInstance\* ioInstance);</pre> |
| | 应释放任何 `ioPrivateInstanceData`。 |
| `ActivateDeactivate` | 激活或停用一个发射器实例，例如在应用程序挂起或切换显示器时。 |
| | <pre lang="cpp">tmResult (\*ActivateDeactivate)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance,<br/>PrActivationEvent inActivationEvent,<br/>prBool inAudioActive,<br/>prBool inVideoActive);</pre> |
| | 发射器应通过这些调用来管理硬件访问，而不是通过 `Startup`/`Shutdown`，因为同一设备的多个插件可以同时处于活动状态。 |
| | 音频和视频可以独立激活。 |
| `StartPlaybackClock` | 启动播放时钟。 |
| | <pre lang="cpp">tmResult (\*StartPlaybackClock)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance,<br/>const tmPlaybackClock\* inClock);</pre> |
| | 这不仅会在开始播放时发送，还会在擦洗时发送。 |
| | 只有在发射器返回 `outHasClock` 时才会调用。 |
| | 每次时间变化时都必须调用提供的回调，例如在响应 `PushVideo` 的每一帧时调用一次。 |
| | 可以在没有停止的情况下多次调用 `Start` 以更新播放参数，例如在播放期间速度发生变化时。 |
| | 在 `StartPlaybackClock` 期间立即调用回调，并使用负数进行预卷，但不要使用此方法来等待帧。 |
| | 如果指定了视频延迟，则在调用 `StartPlaybackClock` 之前，最多会发送标记为 `playmode_Playing` 的延迟帧数。 |
| `StopPlaybackClock` | 停止播放时钟。 |
| | <pre lang="cpp">tmResult (\*StopPlaybackClock)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance);</pre> |
| `PushVideo` | 异步将视频帧推送到发射器实例。 |
| | <pre lang="cpp">tmResult (\*PushVideo)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance,<br/>const tmPushVideo\* inPushVideo);</pre> |
| | 只有在发射器返回 `outHasVideo` 时才会调用。 |
| | 传递给发射器的视频帧列表将根据 `QueryVideoMode` 返回的属性进行协商。 |
| | 发射器负责释放所有传入的 `PPixes`。 |
| | 实例将使用创建视频段的属性创建，这些属性可能与实际发送到发射器的帧不同。 |
| | 例如，如果以 1/2 分辨率播放序列，实例将以序列的尺寸创建，但渲染并发送到发射器的帧将以 1/2 分辨率发送。 |
| | 这些属性可能会因段而异，例如，如果您的发射器支持多种像素格式，不同的段可能会渲染为不同的像素格式。 |
| `StartPushAudio` | 异步将音频样本推送到发射器实例。 |
| | <pre lang="cpp">tmResult (\*StartPushAudio)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance,<br/>PrTime inStartTime,<br/>PrTime inOutTime,<br/>prBool inLoop,<br/>prBool inScrubbing,<br/>csSDK_int32\* outSamplesPerFrame);</pre> |
| | 初始化设备以进行后续的 `PushAudio()` 调用。只有在发射器返回 `outPushAudioAvailable` 时才会调用。 |
| | 设备将启用“次要”模式，其中来自“主要”或“时钟”设备的音频被推送到次要设备；对于远程设备非常有用。 |
| | 与 `StartPlaybackClock()` 不同，`StartPushAudio()` 只调用一次，直到调用 `StopPushAudio()`。 |
| `PushAudio` | 异步将音频样本推送到发射器实例。注意：即使同时调用另一个 API，也可能调用 `PushAudio()`。 |
| | <pre lang="cpp">tmResult (\*PushAudio)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance,<br/>const tmPushAudio\* inPushAudio);</pre> |
| `StopPushAudio` | 当通过 `PushAudio()` 的播放结束时调用 `StopPushAudio()`。 |
| | <pre lang="cpp">tmResult (\*StopPushAudio)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance);</pre> |
| `SetStreamingStateChangedCallback` | 设置主机回调以通知流状态更改，即当插件由于主机连接或启用更改而变为活动或非活动状态时。 |
| | <pre lang="cpp">tmResult (\*SetStreamingStateChangedCallback)(<br/>const tmStdParms\* inStdParms,<br/>void\* inContext,<br/>tmStreamingStateChangedCallback inCallback);</pre> |
| `EnableStreaming` | 启用/禁用向连接的客户端流式传输，而无需加载或卸载插件。 |
| | <pre lang="cpp">tmResult (\*EnableStreaming)(<br/>const tmStdParms\* inStdParms,<br/>prBool      inEnabled);</pre> |
| `IsStreamingEnabled` | 返回是否启用了流式传输。 |
| | <pre lang="cpp">tmResult (\*IsStreamingEnabled)(<br/>const tmStdParms\* inStdParms,<br/>prBool\*      outEnabled);</pre> |
| `IsStreamingActive` | 返回插件是否正在主动流式传输，即流式传输已启用并且插件有活动连接。 |
| | <pre lang="cpp">tmResult (\*IsStreamingActive)(<br/>const tmStdParms\* inStdParms,<br/>prBool\*      outActive);</pre> |
| `Shutdown` | 终止一个发射器。 |
| | <pre lang="cpp">tmResult (\*Shutdown)(<br />tmStdParms\* ioStdParms);</pre> |
| | 如果之前在 `Startup` 中分配了 `ioPrivatePluginData`，请在此处释放。 |
