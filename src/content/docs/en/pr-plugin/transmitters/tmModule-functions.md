---
title: tmModule Functions
---
# tmModule Functions

Fill in `0` for any unsupported calls. Thread safety is defined per-module, only a single thread will enter a module at a time.

| Member | Description |
|---|---|
| `Startup` | Initialize a transmitter, fill in basic plugin info, allocate memory to hold user settings and other data. |
| | <pre lang="cpp">tmResult (\*Startup)(<br/>tmStdParms\* ioStdParms,<br/>tmPluginInfo\* outPluginInfo);</pre> |
| | - `tmResult_ContinueIterate` may be returned to support multiple transmit plugins within the same module. |
| | - `ioPrivatePluginData`, `ioSerializedPluginData` & `ioSerializedPluginDataSize` may be written from Startup. |
| `Shutdown` | Terminate a transmitter. |
| | <pre lang="cpp">tmResult (\*Shutdown)(<br/>tmStdParms\* ioStdParms);</pre> |
| | Dispose of `ioPrivatePluginData` if previously allocated in `Startup`. |
| `QueryAudioMode` | Describe the audio modes supported by the transmitter, one at a time. |
| | <pre lang="cpp">tmResult (\*QueryAudioMode)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance,<br/>csSDK_int32 inQueryIterationIndex,<br/>tmAudioMode\* outAudioMode);</pre> |
| | Note that currently one audio mode is currently supported. You can convert between audio formats using the [Audio Suite](../../universals/sweetpea-suites#audio-suite). |
| `QueryVideoMode` | Describe the video modes supported by the transmitter, one at a time. |
| | <pre lang="cpp">tmResult (\*QueryVideoMode)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance,<br/>csSDK_int32 inQueryIterationIndex,<br/>tmVideoMode\* outVideoMode);</pre> |
| | The video sent later in `PushVideo` will be one of the formats specified here. |
| `SetupDialog` | Display your own modal settings dialog. |
| | <pre lang="cpp">tmResult (\*SetupDialog)(<br/>tmStdParms\* ioStdParms,<br/>prParentWnd inParent);</pre> |
| | Will only be called if the plugin returned `outHasSetup`. |
| | Save any settings to `ioSerializedPluginData` and if needed update `ioSerializedPluginDataSize`. |
| | `NeedsReset` will be invoked after this call, to allow your transmitter a chance to reset all open plugins and startup with the new settings. |
| `NeedsReset` | Will be called regularly on the first plugin of a module to allow rebuilding on state changes. |
| | <pre lang="cpp">tmResult (\*NeedsReset)(<br/>const tmStdParms\* inStdParms,<br/>prBool\* outResetModule);</pre> |
| | If the passed in settings differ enough from the created settings, or if the settings on the hardware itself have changed, the transmitter should specify a reset is needed. |
| | If `outResetModule` is set to `true`, all open plugins will be shutdown and started up again. |
| `CreateInstance` | Creates an instance of a transmitter. |
| | <pre lang="cpp">tmResult (\*CreateInstance)(<br/>const tmStdParms\* inStdParms,<br/>tmInstance\* ioInstance);</pre> |
| | `inPlayID` and `inTimelineID` may be 0 if not driven by a player. |
| | Multiple instances may be created at the same time. |
| | Allocate `ioPrivateInstanceData`. |
| `DisposeInstance` | Dispose an instance of a transmitter. |
| | <pre lang="cpp">tmResult (\*DisposeInstance)(<br/>const tmStdParms\* inStdParms,<br/>tmInstance\* ioInstance);</pre> |
| | Any `ioPrivateInstanceData` should be disposed. |
| `ActivateDeactivate` | Activate or deactivate a transmitter instance, for example during application suspend or switching between monitors. |
| | <pre lang="cpp">tmResult (\*ActivateDeactivate)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance,<br/>PrActivationEvent inActivationEvent,<br/>prBool inAudioActive,<br/>prBool inVideoActive);</pre> |
| | Transmitters should manage hardware access with these calls, not `Startup`/`Shutdown`, since it is valid for multiple plugins to be simultaneously active for the same device. |
| | Audio and video may be independently activated. |
| `StartPlaybackClock` | Start a clock for playback. |
| | <pre lang="cpp">tmResult (\*StartPlaybackClock)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance,<br/>const tmPlaybackClock\* inClock);</pre> |
| | This will be sent not only when starting playback, but also for scrubbing. |
| | Will only be called if the transmitter returned `outHasClock`. |
| | The provided callback must be called each time the time changes, for example once for each frame in response to `PushVideo`. |
| | Start may be called multiple times without a stop in between to update playback parameters, for example if the speed changes during playback. |
| | Invoke the callback immediately during `StartPlaybackClock` with a negative number for preroll but do not use this to wait for frames. |
| | If video latency is specified, up to the latency's amount of frame marked as `playmode_Playing` will be sent before `StartPlaybackClock` is called. |
| `StopPlaybackClock` | Stop a clock for playback. |
| | <pre lang="cpp">tmResult (\*StopPlaybackClock)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance);</pre> |
| `PushVideo` | Asynchronously pushes a video frame to a transmitter instance. |
| | <pre lang="cpp">tmResult (\*PushVideo)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance,<br/>const tmPushVideo\* inPushVideo);</pre> |
| | Will only be called if the transmitter returned `outHasVideo`. |
| | The list of video frames passed to the transmitter will be negotiated based on the properties returned from `QueryVideoMode`. |
| | The transmitter is responsible for disposing of all passed in `PPixes`. |
| | The instance will be created with the properties of the creating video segments which may differ from the actual frames that will be sent to the transmitter. |
| | For example, if a sequence is being played at 1/2 resolution, the instance will be created with the dimensions of the sequence, but the frames rendered and sent to the transmitter will be at 1/2. |
| | These properties may change by segment, for example if your transmitter supports multiple pixel formats, different segments may render to different pixel formats. |
| `StartPushAudio` | Asynchronously pushes audio samples to a transmitter instance. |
| | <pre lang="cpp">tmResult (\*StartPushAudio)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance,<br/>PrTime inStartTime,<br/>PrTime inOutTime,<br/>prBool inLoop,<br/>prBool inScrubbing,<br/>csSDK_int32\* outSamplesPerFrame);</pre> |
| | Initializes the device for subsequent PushAudio() calls. Will only be called if the transmitter returned `outPushAudioAvailable`. |
| | Device will be enabled for a "secondary" mode where audio from the "primary" or "clock" device, is pushed to a secondary device; very useful for remote devices. |
| | Unlike `StartPlaybackClock()`, `StartPushAudio()` is only called once, until ``StopPushAudio()`` is called. |
| `PushAudio` | Asynchronously pushes audio samples to a transmitter instance.  Note: PushAudio() may be called even if another API is called at the same time. |
| | <pre lang="cpp">tmResult (\*PushAudio)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance,<br/>const tmPushAudio\* inPushAudio);</pre> |
| `StopPushAudio` | StopPushAudio() is called when playback via PushAudio() ends. |
| | <pre lang="cpp">tmResult (\*StopPushAudio)(<br/>const tmStdParms\* inStdParms,<br/>const tmInstance\* inInstance);</pre> |
| `SetStreamingStateChangedCallback` | Set the host callback for notification streaming state changes, i.e. when the plug-in becomes active or inactive due to changes connections or enablement from the host. |
| | <pre lang="cpp">tmResult (\*SetStreamingStateChangedCallback)(<br/>const tmStdParms\* inStdParms,<br/>void\* inContext,<br/>tmStreamingStateChangedCallback inCallback);</pre> |
| `EnableStreaming` | Enable/disable streaming to connected clients without loading or unloading the plug-in. |
| | <pre lang="cpp">tmResult (\*EnableStreaming)(<br/>const tmStdParms\* inStdParms,<br/>prBool            inEnabled);</pre> |
| `IsStreamingEnabled` | Returns whether streaming is enabled. |
| | <pre lang="cpp">tmResult (\*IsStreamingEnabled)(<br/>const tmStdParms\* inStdParms,<br/>prBool\*           outEnabled);</pre> |
| `IsStreamingActive` | Returns whether the plug-in is actively streaming, i.e. streaming is enabled and the plug-in has active connections. |
| | <pre lang="cpp">tmResult (\*IsStreamingActive)(<br/>const tmStdParms\* inStdParms,<br/>prBool\*           outActive);</pre> |
| `Shutdown` | Terminate a transmitter. |
| | <pre lang="cpp">tmResult (\*Shutdown)(<br />tmStdParms\* ioStdParms);</pre> |
| | Dispose of `ioPrivatePluginData` if previously allocated in `Startup`. |
