---
title: tmModule 结构
---
# tmModule 结构

## tmStdParms

此结构传递给所有调用。大部分内容由发射器在启动时分配并填充，并可能在设置对话框期间修改。

```cpp
typedef struct {
 csSDK_int32 inPluginIndex;
 PrMemoryPtr ioSerializedPluginData;
 csSDK_size_t ioSerializedPluginDataSize;
 void* ioPrivatePluginData;
 piSuitesPtr piSuites;
} tmStdParms;
```

| 成员 | 描述 |
|---|---|
| `inPluginIndex` | 如果插件在同一模块中定义了多个发射器，此索引值用于区分它们。 |
| `ioSerializedPluginData` | 此数据应包含用户可选择的发射器设置，这些设置将显示在发射器设置对话框中，并且需要持久化以便可以在会话之间保存和恢复。 |
| | 在启动期间首次分配时，必须使用 `NewPtr` 分配此数据，以便主机可以在关闭时释放它。 |
| | 这必须是主机可以序列化的扁平内存，并且在调用启动时如果之前可用，则已经填充。 |
| `ioSerializedPluginDataSize` | 上述数据的大小。如果尚未设置，请在启动期间设置此值。 |
| `ioPrivatePluginData` | 此数据应包含在发射器调用之间所需的任何内存，除了存储在 `ioSerializedPluginData` 中的设置数据。 |
| | 在启动期间分配此数据。与 `ioSerializedPluginData` 不同，它不需要是扁平的，并且必须在关闭时由插件释放。 |

---

## tmPluginInfo

此结构由发射器在启动时填充。

```cpp
typedef struct {
 prPluginID outIdentifier;
 unsigned int outPriority;
 prBool outAudioAvailable;
 prBool outAudioDefaultEnabled;
 prBool outClockAvailable;
 prBool outVideoAvailable;
 prBool outVideoDefaultEnabled;
 prUTF16Char outDisplayName[256];
 prBool outHideInUI;
 prBool outHasSetup;
 csSDK_int32 outInterfaceVersion;
} tmPluginInfo;
```

| 成员 | 描述 |
|---|---|
| `outIdentifier` | 持久化插件标识符。 |
| `outPriority` | `0` 为默认值，优先级越高越优先。 |
| `outAudioAvailable` | 如果发射器支持音频，请将此设置为 `kPrTrue`。 |
| `outAudioDefaultEnabled` | 如果希望默认启用音频处理，请将此设置为 `kPrTrue`。 |
| `outClockAvailable` | 如果提供基于插件的音频，请将此设置为 `kPrTrue`。 |
| | 目前，即使使用基于主机的音频，发射器也必须提供时钟——如果您希望仅使用基于主机的音频，请告知我们，我们将记录此问题的错误。 |
| `outVideoAvailable` | 如果发射器支持视频，请将此设置为 `kPrTrue`。 |
| `outVideoDefaultEnabled` | 如果希望默认启用视频处理，请将此设置为 `kPrTrue`。 |
| `outDisplayName[256]` | 设置发射器的显示名称，最多 256 个 UTF-16 字符，包括 NULL 终止符。 |
| `outHideInUI` | 如果不希望此选项显示为用户可选的发射器选项，请将此设置为 `kPrTrue`。 |
| `outHasSetup` | 如果提供设置对话框，请将此设置为 `kPrTrue`。 |
| `outInterfaceVersion` | 将此设置为发射器正在编译的 `tmInterfaceVersion`。 |
| `outPushAudioAvailable` | 24.0 新增。如果发射器支持推送音频功能，请将此设置为 `kPrTrue`。设备将启用“次要”模式，其中来自“主要”或“时钟”设备的音频将推送到此设备。 |
| `outHasStreaming` | 24.0 新增。如果发射器通过网络流式传输音频或视频，请将此设置为 `kPrTrue`。 |

:::bug

设备将启用“次要”模式，其中来自“主要”或“时钟”设备的音频将推送到此设备。这对于远程设备特别有用。PushAudio API 将仅在此“镜像”情况下使用。StartPushAudio() 初始化设备以进行后续的 PushAudio() 调用。与 StartPlaybackClock 不同，StartPushAudio() 仅在调用 StopPushAudio() 之前调用一次。每当所需的缓冲区大小达到时，PushAudio() 将被调用。
:::

---

## tmInstance

此结构包含发射器用于初始化实例的信息。

```cpp
typedef struct {
 csSDK_int32 inInstanceID;
 PrTimelineID inTimelineID;
 PrPlayID inPlayID;
 prBool inHasAudio;
 csSDK_uint32 inNumChannels;
 PrAudioChannelLabel inChannelLabels[16];
 PrAudioSampleType inAudioSampleType;
 float inAudioSampleRate;
 prBool inHasVideo;
 csSDK_int32 inVideoWidth;
 csSDK_int32 inVideoHeight;
 csSDK_int32 inVideoPARNum;
 csSDK_int32 inVideoPARDen;
 PrTime inVideoFrameRate;
 prFieldType inVideoFieldType;
 void* ioPrivateInstanceData;
} tmInstance;
```

| 成员 | 描述 |
|---|---|
| `inInstanceID` | 实例标识符。 |
| `inTimelineID` | `TimelineID`，用于各种套件函数。可能为 0。 |
| `inPlayID` | `PlayID`，用于各种套件函数。可能为 0。 |
| `inHasAudio` | 如果实例处理带有音频的序列，则为 True。 |
| `inNumChannels` | 音频通道数。 |
| `inChannelLabels[16]` | 每个音频通道的标识符。 |
| `inAudioSampleType` | 音频数据的格式。 |
| `inAudioSampleRate` | 音频数据的采样率。 |
| `inHasVideo` | 如果实例处理带有视频的序列，则为 True。 |
| `inVideoWidth` | 视频分辨率。 |
| `inVideoHeight` | |
| `inVideoPARNum` | 视频像素宽高比的分子和分母。 |
| `inVideoPARDen` | |
| `inVideoFrameRate` | 视频的帧率。 |
| `inVideoFieldType` | 视频的场序。 |
| `ioPrivateInstanceData` | 可以在 `CreateInstance` 中由插件写入，并在 `DisposeInstance` 中释放。不需要由主机序列化。 |

---

## tmAudioMode

发射器将支持的音频模式的完整描述。

发射器应在 `QueryAudioMode` 期间填充此信息。

```cpp
typedef struct {
 float outAudioSampleRate;
 csSDK_uint32 outMaxBufferSize;
 csSDK_uint32 outNumChannels;
 PrAudioChannelLabel outChannelLabels[16];
 PrTime outLatency;
 PrSDKString outAudioOutputNames[16]
} tmAudioMode;
```

| 成员 | 描述 |
|---|---|
| `outAudioSampleRate` | 首选音频采样率。 |
| `outMaxBufferSize` | 如果发射器使用基于插件的音频通过 [Playmod Audio Suite](../suites#playmod-audio-suite) 请求音频缓冲区，则需要的最大音频缓冲区大小。 |
| `outNumChannels` | 支持的最大音频通道数。 |
| `outChannelLabels[16]` | 使用适当的标识符为每个音频通道设置输出硬件的音频通道配置。 |
| `outLatency` | 此值仅用于播放，而不是在擦洗时使用。 |
| | 它指定在音频播放开始时提前发送帧的时间，以及在 `StartPlaybackClock` 调用之前将发送多少帧。使用此值可以使源/程序监视器与外部硬件输出之间的播放同步。 |
| | 所有模式必须具有相同的延迟。 |
| | 注意不要将此值设置得过高，因为播放开始将延迟此时间。建议使用相当于 5 个视频帧或更少的值。 |
| `outAudioOutputNames[16]` | CS6.0.2 新增。这些必须是物理音频输出的可显示名称，如“XYZ HD Speaker 1” |
| | tmAudioMode 中的音频输出名称应由插件使用 [String Suite](../../universals/sweetpea-suites#string-suite) 分配，并且不由插件释放。主机将负责释放这些字符串。 |

---

## tmVideoMode

发射器将支持的视频模式的完整描述。

发射器应在 `QueryVideoMode` 期间填充此信息。

```cpp
typedef struct {
 csSDK_int32 outWidth;
 csSDK_int32 outHeight;
 csSDK_int32 outPARNum;
 csSDK_int32 outPARDen;
 prFieldType outFieldType;
 PrPixelFormat outPixelFormat;
 PrSDKString outStreamLabel;
 PrTime outLatency;
 ColorSpaceRec outColorSpaceRec;
} tmVideoMode;
```

| 成员 | 描述 |
|---|---|
| `outWidth` | 首选视频分辨率。 |
| | 如果支持任何分辨率，则设置为 0。 |
| `outHeight` | |
| `outPARNum` | 首选视频像素宽高比。 |
| | 如果支持任何像素宽高比，则设置为 0。 |
| `outPARDen` | |
| `outFieldType` | 支持的视频场序。 |
| | 如果支持任何场序，则设置为 prFieldsAny。 |
| `outPixelFormat` | 首选视频像素格式。 |
| | 如果任何格式都可接受，则设置为 `PrPixelFormat_Any`。 |
| | 如果您的发射器可以从 GPU 上的帧中受益，请告知我们。 |
| `outStreamLabel` | 暂时将此保留为 0。发射器尚不支持流标签（错误组 BG127571） |
| `outLatency` | 此值仅用于播放，而不是在擦洗时使用。 |
| | 它指定在播放开始时提前发送帧的时间，以及在 `StartPlaybackClock` 调用之前将发送多少帧。使用此值可以使源/程序监视器与外部硬件输出之间的播放同步。 |
| | 所有模式必须具有相同的延迟。 |
| | 注意不要将此值设置得过高，因为播放开始将延迟此时间。建议使用相当于 5 帧或更少的值。 |
| `outColorSpaceRec` | 14.x 新增。使用的色彩空间定义；默认为 BT 709 全范围 32f。 |
| | 发射器可以请求主机应用程序以特定色彩空间发送帧。有关详细描述，请参阅 `ColorSpaceRec`。 |

---

## tmPlaybackClock

此结构由主机填充并发送给发射器，以描述由发射器管理的播放时钟。

发射器使用此处的回调定期更新主机。

```cpp
typedef struct {
 tmClockCallback inClockCallback;
 void* inCallbackContext;
 PrTime inStartTime;
 pmPlayMode inPlayMode;
 float inSpeed;
 PrTime inInTime;
 PrTime inOutTime;
 prBool inLoop;
 tmDroppedFrameCallback inDroppedFrameCallback;
} tmPlaybackClock;
```

| 成员 | 描述 |
|---|---|
| `tmClockCallback` | 指向具有以下签名的调用： |
| | <pre lang="cpp">void (\*tmClockCallback)(<br/>  void\*   inContext,<br/>  PrTime  inRelativeTimeAdjustment);</pre>当时间发生变化时调用此函数，并使用非速度调整量来递增时钟。 |
| | 可以在每次 PushVideo 响应中每帧调用一次。 |
| | 使用负时间应仅用于等待设备，而不是用于实现同步。 |
| | 发射器在使用负时间时将不会接收任何帧。 |
| | 在第一次正值的时钟回调后，时间将为 `StartTime + inRelativeTimeAdjustment * inSpeed`。 |
| `inCallbackContext` | 将此传递给上述时钟回调。 |
| `inStartTime` | 在此时间启动时钟。 |
| `inPlayMode` | 指定 `StartPlaybackClock` 是否设置为播放或擦洗。 |
| `inSpeed` | 1.0 为正常速度，-2.0 为双倍速度倒放。 |
| | 仅用于信息。 |
| | 这对于内置的 DV 发射器很有用，它仅在以正常速度播放时写入 DV 字幕。 |
| `inInTime` | 仅用于信息，将由主机处理。 |
| `inOutTime` | |
| `inLoop` | |
| `inDroppedFrameCallback` | 指向具有以下签名的调用： |
| | <pre lang="cpp">void (\*tmDroppedFrameCallback)(<br/>  void*   inContext,<br/>  csSDK_int64  inNewDroppedFrames);</pre>使用此调用报告推送到发射器插件但未传递到设备的帧。 |
| | 如果推送到发射器的每一帧都按时发送到硬件，则永远不需要调用此函数，因为主机将计算未推送到插件的帧。 |
| | `inNewDroppedFrames` 应为自上次调用 `tmDroppedFrameCall` 以来新增的丢帧数。 |

---

## tmPushVideo

描述要传输的视频帧。

```cpp
typedef struct {
 PrTime inTime;
 pmPlayMode inPlayMode;
 PrRenderQuality inQuality;
 const tmLabeledFrame* inFrames;
 csSDK_size_t inFrameCount;
} tmPushVideo;
```

| 成员 | 描述 |
|---|---|
| `inTime` | 描述正在传递的视频帧。 |
| | 负值表示应立即显示该帧。 |
| | 使用此值确定正在推送的帧的对应时间码。 |
| `inPlayMode` | 将此传递给上述时钟回调。 |
| `inQuality` | 渲染的质量。 |
| `inFrames` | 要传输的帧或帧集。从 CS6 开始，这将始终是单帧。 |
| | `tmLabeledFrame` 定义为： |
| | <pre lang="cpp">typedef struct {<br/>  PPixHand     inFrame;<br/>  PrSDKStreamLabel  inStreamLabel;<br/>} tmLabeledFrame;</pre> |
| | 帧必须由发射器在使用完毕后释放。 |
| `inFrameCount` | inFrames 中的帧数。 |

---

## tmPushAudio

描述要传输的音频样本。

```cpp
typedef struct {
 PrTime inTime;
 float** inBuffers;
 csSDK_uint32 inNumSamples;
 csSDK_uint32 inNumChannels;
} tmPushAudio;
```

| 成员 | 描述 |
|---|---|
| `inTime` | 描述正在传递的视频帧。 |
| | 负值表示应立即显示该帧。 |
| | 使用此值确定正在推送的帧的对应时间码。 |
| `inBuffers` | 要传输的音频数据。 |
| `inNumSamples` | 要处理的样本数。 |
| `inNumChannels` | 要输出的通道数。 |

---

## tmStopPushAudio

在通过 PushAudio() 结束播放时发送。

```cpp
typedef struct {
 PrTime inTime;
 float** inBuffers;
 csSDK_uint32 inNumSamples;
 csSDK_uint32 inNumChannels;
} tmPushAudio;
```

| 成员 | 描述 |
|---|---|
| `inTime` | 描述正在传递的视频帧。 |
| | 负值表示应立即显示该帧。 |
| | 使用此值确定正在推送的帧的对应时间码。 |
| `inBuffers` | 要传输的音频数据。 |
| `inNumSamples` | 要处理的样本数。 |
| `inNumChannels` | 要输出的通道数。 |
