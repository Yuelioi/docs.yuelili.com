---
title: PF_OutData
---
# PF_OutData

Communicate changes made by your plug-in to After Effects using `PF_OutData`. Valid times for altering these fields are noted.

---

## PF_OutData Members

| Field | Description |
|---|---|
| `my_version` | Set this flag (using the PF_VERSION macro) to the version of your plug-in code. |
| | After Effects uses this data to decide which of duplicate effects to load. |
| `name` | Unused. |
| `global_data` | Handle which will be returned to you in [PF_InData](../PF_InData) with every call. |
| | Use After Effects' memory allocation functions. |
| `num_params` | After Effects checks this field against the number of calls made to `PF_ADD_PARAM`, as well as the implicit input layer. |
| `sequence_data` | Allocatable upon receiving [PF_Cmd_SEQUENCE_SETUP](../command-selectors#sequence-selectors), this handle will be passed back to you in [PF_InData](../PF_InData) during all subsequent calls. |
| `flat_sdata_size` | Unused (After Effects knows the size, because you used its allocation functions to get the memory in the first place). |
| `frame_data` | Handle you (might have) allocated during [PF_Cmd_FRAME_SETUP](../command-selectors#frame-selectors). |
| | This is never written to disk; it was used to pass information from your [PF_Cmd_FRAME_SETUP](../command-selectors#frame-selectors) response to your [PF_Cmd_RENDER](../command-selectors#frame-selectors) or [PF_Cmd_FRAME_SETDOWN](../command-selectors#frame-selectors) (which you must do if you resize the output buffer). |
| | Otherwise, this memory is rarely used. |
| `width`, `height`, `origin` | Set during [PF_Cmd_FRAME_SETUP](../command-selectors#frame-selectors) if the output image size differs from the input. |
| | `width` and `height` are the size of the output buffer, and `origin` is the point the input should map to in the output. |
| | To create a 5-pixel drop shadow up and left, set origin to (5, 5). |
| [out_flags](#pf_outflags) | Send messages to After Effects. OR together multiple values. |
| `return_msg` | After Effects displays any C string you put here (checked and cleared after every command selector). |
| `start_sampL`, `dur_sampL`, `dest_snd` | Used only for [Audio](../../audio/audio) commands |
| [out_flags2](#pf_outflags2) | Send messages to After Effects. OR together multiple values. |

---

## PF_OutFlags

These flags communicate capability and status information to After Effects. In previous versions they were also used to send rudimentary messages, e.g. refresh the UI, send an error message.

These capabilities have been supplanted by function suites, and all new messaging functions will come in that format. However, capability flags are still contained in the [PiPL](../../intro/pipl-resources).

Update both the PiPL and your source code when you make a change. Many of these flags can be changed during an After Effects session.

| Flag | Indicates |
|---|---|
| `PF_OutFlag_KEEP_RESOURCE_OPEN` | The plug-in's resources must be available during all commands. |
| | During [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors), the plug-in's resources are always open, but unavailable at all other times (except during [PF_Cmd_ABOUT](../command-selectors#global-selectors) and [PF_Cmd_DO_DIALOG](../command-selectors#messaging)), unless this flag has been set. |
| | Set if you need access to resources at any time other than during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors). |
| | !!! note |
| | We recommend the plug-in load and store the necessary resources in global data, rather than keeping the file's resources open. |
| `PF_OutFlag_WIDE_TIME_INPUT` | The effect checks out a parameter at a time other than `current_time`. |
| | If you use a parameter (including layer parameters) from another time, set this flag. |
| | Otherwise, After Effects won't correctly invalidate cached frames used by your effect. |
| | Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors). |
| | If you set this flag, we strongly recommend you also set `PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT` for better performance. |
| `PF_OutFlag_NON_PARAM_VARY` | With this flag set, After Effects will not cache output when the effect is applied to a still. |
| | Otherwise, After Effects will cache your output to be used to render other frames, if possible. |
| | Set this flag if output varies based on something besides a parameter value. |
| | If the effect produces changing frames when applied to a still image and all parameters are constant, that's a sure sign that this bit should be set (e.g. Wave Warp). |
| | Particle effects, for example, will need this. |
| | Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors). |
| | Can be overridden dynamically if needed during [PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging). |
| | Turn this off whenever possible to improve performance. |
| `PF_OutFlag_RESERVED6` | Unused. Formerly `PF_OutFlag_SEND_PARAMS_UPDATE`. Replaced by `PF_OutFlag_REFRESH_UI`. |
| `PF_OutFlag_SEQUENCE_DATA_NEEDS_FLATTENING` | Both After Effects and Premiere Pro assume this flag is set. |
| | Flattening is necessary when sequence data contains referencing items (pointers, handles), which must be flattened for storage and unflattened for use. |
| | See [PF_Cmd_SEQUENCE_RESETUP](../command-selectors#sequence-selectors). |
| `PF_OutFlag_I_DO_DIALOG` | Effect displays a dialog in response to [PF_Cmd_DO_DIALOG](../command-selectors#messaging). |
| | Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors), checked during [PF_Cmd_SEQUENCE_SETUP](../command-selectors#sequence-selectors). |
| | !!! note |
| | The effect's response to `PF_OutFlag_I_DO_DIALOG` is not undoable. You can use arbitrary data with a custom UI, should such changes become necessary. |
| `PF_OutFlag_USE_OUTPUT_EXTENT` | Effect honors the output `extent_rect`. Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors). |
| | See details at the end of the chapter for proper usage. |
| | !!! note |
| | Obsolete for SmartFX. |
| `PF_OutFlag_SEND_DO_DIALOG` | Effect must show dialog to function (added for compatibility with Photoshop plug-ins). |
| | After Effects sends [PF_Cmd_DO_DIALOG](../command-selectors#messaging) after [PF_Cmd_SEQUENCE_SETUP](../command-selectors#sequence-selectors). |
| | Set during [PF_Cmd_SEQUENCE_RESETUP](../command-selectors#sequence-selectors), not during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors). |
| `PF_OutFlag_DISPLAY_ERROR_MESSAGE` | Display the contents of `return_msg` in an error dialog. |
| | Whenever return_msg is non-NULL, After Effects displays the contents in a dialog, which will be an error dialog if this flag is set. |
| | Set after any command, and can be used during debugging. |
| | This is also a good way to implement nag messages for tryout versions. |
| `PF_OutFlag_I_EXPAND_BUFFER` | Effect expands the output buffer. |
| | Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors). |
| | Set this flag and `PF_OutFlag_USE_OUTPUT_EXTENT` to use the intersection of the output `extent_rect` and your new buffer size during [PF_Cmd_FRAME_SETUP](../command-selectors#frame-selectors). |
| | Use `pre_effect_source_origin` fields to detect other transformations. |
| | !!! note |
| | Only set this flag if you need to; it drastically reduces caching efficiency. |
| | !!! note |
| | Obsolete for SmartFX. |
| `PF_OutFlag_PIX_INDEPENDENT` | A given pixel is independent of the pixels around it. |
| | Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) or [PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging). |
| | As an example, color correction effects are typically pixel independent, distortions are not. |
| | !!! note |
| | If your effect doesn't use the color values of one pixel to affect those of adjacent pixels, set this outflag! |
| | It can provide dramatic performance improvements. |
| `PF_OutFlag_I_WRITE_INPUT_BUFFER` | The effect writes into the input buffer. |
| | This is of limited use; while saving an allocation, it invalidates some pipeline caching. Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors). |
| `PF_OutFlag_I_SHRINK_BUFFER` | The effect shrinks its buffer based on the `extent_rect` in order to be more memory efficient. |
| | Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) whenever possible. |
| | !!! note |
| | Obsolete for SmartFX. |
| `PF_OutFlag_WORKS_IN_PLACE` | Unused. |
| `PF_OutFlag_SQUARE_PIX_ONLY` | Unused. |
| `PF_OutFlag_CUSTOM_UI` | The effect has a custom user interface and requires [PF_Cmd_EVENT](../command-selectors#messaging) messages. |
| | Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors). |
| `PF_OutFlag_RESERVED5` | Unused. |
| `PF_OutFlag_REFRESH_UI` | Refresh the entire effect controls, composition, and layer windows. |
| | Set during [PF_Cmd_EVENT](../command-selectors#messaging), [PF_Cmd_RENDER](../command-selectors#frame-selectors), and [PF_Cmd_DO_DIALOG](../command-selectors#messaging). |
| | If refreshing custom UI during `PF_Cmd_EVENT`, we recommend using the [new redraw mechanism](../../effect-ui-events/custom-ui-and-drawbot) with finer granularity. |
| `PF_OutFlag_NOP_RENDER` | Set this flag during [PF_Cmd_FRAME_SETUP](../command-selectors#frame-selectors) to invalidate the current render. |
| `PF_OutFlag_I_USE_SHUTTER_ANGLE` | Indicates rendered images depend upon the value of `shutter_angle`. |
| `PF_OutFlag_I_USE_AUDIO` | Effect's parameters depend on audio data, obtained using [PF_CHECKOUT_LAYER_AUDIO](../../effect-details/interaction-callback-functions#interaction-callbacks). |
| `PF_OutFlag_I_AM_OBSOLETE` | Effect is available for use when working with an old project in which it was originally applied, but doesn't appear in the effect menu. |
| `PF_OutFlag_FORCE_RERENDER` | Effect made a change that requires a re-render. PF_ChangeFlag_CHANGED_VALUE also forces a re-render. |
| `PF_OutFlag_PiPL_OVERRIDES_OUTDATA_OUTFLAGS` | After Effects will use PiPL outflags, and ignore those set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors). |
| `PF_OutFlag_I_HAVE_EXTERNAL_DEPENDENCIES` | Effect depends on an external file (or external font). |
| | If set, After Effects sends [PF_Cmd_GET_EXTERNAL_DEPENDENCIES](../command-selectors#messaging). |
| `PF_OutFlag_DEEP_COLOR_AWARE` | The effect handles 16-bpc color. |
| `PF_OutFlag_SEND_UPDATE_PARAMS_UI` | Set this flag during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) to receive [PF_Cmd_UPDATE_PARAMS_UI](../command-selectors#messaging). |
| `PF_OutFlag_AUDIO_FLOAT_ONLY` | Effect requires audio data in PF_SIGNED_FLOAT format. |
| | After Effects will perform any required format conversion. |
| | You must also set either `PF_OutFlag_AUDIO_EFFECT_TOO` or `PF_OutFlag_AUDIO_EFFECT_ONLY`. |
| `PF_OutFlag_AUDIO_IIR` | Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) if the (audio) effect is an Infinite Impulse Response filter. |
| | This is true if output at a given time depends on output from previous times. |
| | When an IIR filter receives [PF_Cmd_AUDIO_RENDER](../command-selectors#frame-selectors), the input audio time span is the same as the output audio time span (when they intersect with the output time span requested in [PF_Cmd_AUDIO_SETUP](../command-selectors#frame-selectors)). |
| | In response to [PF_Cmd_AUDIO_SETUP](../command-selectors#frame-selectors), the filter can request audio from earlier times (as for delay effects). |
| | The filter can access parameters from that earlier time, and should cache them (along with interim audio) in sequence data. |
| | If the audio generated does not correspond to the requested output audio's time, the output audio duration should be set to zero. |
| | The filter can update its delay line using the parameters and the input audio. |
| | Having cached its delay line, request more input audio during [PF_Cmd_AUDIO_SETUP](../command-selectors#frame-selectors) based on the last cached delay line. Use [PF_HasParamChanged](../../effect-details/parameter-supervision#pf_paramutilsuite3) to determine whether or not your cache is valid. |
| `PF_OutFlag_I_SYNTHESIZE_AUDIO` | Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) time if the effect generates audio, even when passed silence. |
| | You must also set either `PF_OutFlag_AUDIO_EFFECT_TOO` or `PF_OutFlag_AUDIO_EFFECT_ONLY`. |
| `PF_OutFlag_AUDIO_EFFECT_TOO` | Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) if the effect alters audio. |
| `PF_OutFlag_AUDIO_EFFECT_ONLY` | Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) if the effect alters only audio output. |

---

## PF_OutFlags2

We added a second set of outflags in After Effects 5.0; partly for room to expand in the future, and partly to break ourselves of the bad habit of repurposing existing flags.

As with `PF_OutFlags`, many of these flags can be changed during an After Effects session.

And don't forget to update both the [PiPL](../../intro/pipl-resources) and your source code when you make a change.

| Flag | Indicates |
|---|---|
| `PF_OutFlag2_NONE` | Nothing. |
| `PF_OutFlag2_SUPPORTS_QUERY_DYNAMIC_FLAGS` | The effect responds to [PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging). Must be set in the PiPL and during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors). |
| `PF_OutFlag2_I_USE_3D_CAMERA` | The effect accesses 3D camera information. |
| `PF_OutFlag2_I_USE_3D_LIGHTS` | The effect accesses 3D lighting information. |
| `PF_OutFlag2_PARAM_GROUP_START_COLLAPSED_FLAG` | This flag in itself doesn't control the state of the param group twirlies. |
| | The initial collapse state of each individual parameter group is set during [PF_Cmd_PARAM_SETUP](../command-selectors#global-selectors), by setting the [PF_ParamFlag_START_COLLAPSED](../pf_paramdef#parameter-flags) flag in [PF_ParamFlags](../pf_paramdef#parameter-flags), but those individual settings will not be honored unless the effect sets this bit. |
| | Otherwise, all parameter groups will be collapsed by default. |
| | Remember to set this flag in both the PiPL and here during [PF_Cmd_GLOBAL_SETUP.](../command-selectors#global-selectors) |
| `PF_OutFlag2_I_AM_THREADSAFE` | Currently this does nothing. If this sounds interesting to you, you may be interested in `PF_OutFlag2_PPRO_DO_NOT_CLONE_SEQUENCE_DATA_FOR_RENDER`, described below. |
| `PF_OutFlag2_CAN_COMBINE_WITH_DESTINATION` | Originally added for Premiere usage, but no longer used. |
| `PF_OutFlag2_DOESNT_NEED_EMPTY_PIXELS` | Added for render optimizations; shrinks the input buffer passed to the effect to exclude any empty pixels (where empty means "zero alpha" unless `PF_OutFlag2_REVEALS_ZERO_ALPHA` is set, in which case RGB must be zero as well). |
| | Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) or [PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging). |
| | The origin of the trimmed buffer can be found in `in_data>pre_effect_source_origin`. |
| | Effects with both this flag and `PF_OutFlag_I_EXPAND_BUFFER` set may get called with a null input buffer if their input is completely empty, and must be able to handle this case without crashing. |
| | !!! note |
| | this flag can cause the size of the output buffer to change. |
| | !!! note |
| | Obsolete for SmartFX. |
| `PF_OutFlag2_REVEALS_ZERO_ALPHA` | This is the one flag implementors need to pay most attention to since it represents a change in the default behavior. |
| | Set this flag if the effect can take pixels with zero alpha and reveal the RGB data in them (like our Set Channels effect). |
| | This tells After Effects not to trim such pixels when determining the input for the effect. |
| | This flag can be changed during [PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging). |
| | Note that, while this flag can cause changes to the size of the `extent_hint`, it will not change the image buffer size. |
| | As of 6.0, pixels outside the mask's bounding box are zeroed. |
| | If your effect can reveal such pixels, tell AE not to throw away these RGB values by setting this flag. |
| | If your effect does not always reveal such pixels, set this bit dynamically. |
| | To see if your effect needs this bit set, apply a mask significantly smaller than the layer to a solid, then apply the effect and set it to its alpha-modifying state. |
| | If the rectangular bounding box of the mask becomes visible, this bit needs to be set. |
| `PF_OutFlag2_PRESERVES_FULLY_OPAQUE_PIXELS` | Preserve those pixels! |
| `PF_OutFlag2_SUPPORTS_SMART_RENDER` | The effect uses the SmartFX API. |
| `PF_OutFlag2_FLOAT_COLOR_AWARE` | The effect supports 32-bpc floating point color representation. |
| | !!! note |
| | `PF_OutFlag2_SUPPORTS_SMART_RENDER` must also be set. |
| `PF_OutFlag2_I_USE_COLORSPACE_ENUMERATION` | This is for effects which optimized for different color spaces in Premiere Pro. See the Premiere Pro SDK for more details. |
| `PF_OutFlag2_I_AM_DEPRECATED` | Setting this during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) puts the effect in the localized "Obsolete" folder in the Effects panel. |
| | Compare to `PF_OutFlag_I_AM_OBSOLETE`. |
| `PF_OutFlag2_PPRO_DO_NOT_CLONE_SEQUENCE_DATA_FOR_RENDER` | Supported in Premiere Pro, and not in After Effects. |
| | This affects how Premiere Pro drives the plug-in using [Multithreading](../../ppro/multithreading). |
| `PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT` | Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors). |
| | Requires setting of `PF_OutFlag_WIDE_TIME_INPUT` (which allows you to support old hosts), but effectively overrides that flag. |
| | When set, all parameter checkouts are tracked so over-time dependencies are known by the host, and much more efficient. |
| | For example, if you set only the old `PF_OutFlag_WIDE_TIME_INPUT`, anytime anything changes at any time upstream from your effect, you will be called to re-render. |
| | With this flag set, if a given frame 17 has checked out things from times 0-17, AE will know that any changes at frames 18+ will not affect that cached frame. |
| | Note that if you use this new flag, you must not cache any time-dependent data in your sequence data (or anywhere else), unless you also [validate that cache](../../effect-details/global-sequence-frame-data#validating-sequence-data) using `PF_GetCurrentState()` / `PF_AreStatesIdentical()` from [PF_ParamUtilSuite3](../../effect-details/parameter-supervision#pf_paramutilsuite3) before using the time-dependent data. |
| | This only works for SmartFX (those that set `PF_OutFlag2_SUPPORTS_SMART_RENDER`). |
| | If you haven't set that, After Effects will silently treat this as `PF_OutFlag_WIDE_TIME_INPUT` instead. |
| `PF_OutFlag2_I_USE_COMP_TIMECODE` | Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors). |
| | This lets AE know it should rerender an effect if the composition start time and/ or drop-frame setting has been modified. |
| `PF_OutFlag2_DEPENDS_ON_UNREFERENCED_MASKS` | New in CS6. Set this if you are going to look at paths that aren't directly referenced by a path param, e.g. if you are going to draw a stroke on all masks. |
| | This is needed so After Effects knows to invalidate your output when a mask is modified that doesn't appear to be referenced by your effect. |
| | Set during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) or [PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging). |
| `PF_OutFlag2_OUTPUT_IS_WATERMARKED` | New in CS6. Set this during [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) if your output is going to be watermarked in some way that makes it unsuitable for final use, probably because the user is using an unlicensed demo version. |
| | It is ok to change this state during the course of app session during [PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging), if e.g. a floating license status changes. |
| | Plug-in authors that actually do have this state changing asynchronously must be careful to have the next render match the last state returned from [PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging) otherwise race conditions could cause incorrect frames to be cached. |
| | (This is a non-issue if you only change this in response to `DO_DIALOG`.) |
| `PF_OutFlag2_SUPPORTS_GPU_RENDER_F32` | New in 16.0 Set during PF_Cmd_GLOBAL_SETUP, this indicates GPU support. |
| | The effect will be called with GPU selectors, and will be badged as GPU-supporting in the GUI. |
| | At `PF_Cmd_GPU_DEVICE_SETUP` time, these flags indicate rendering capabilities for a specific device and framework. |
| `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` | Available in After Effects Beta builds starting June 2020, After Effects 2022. |
| | Set during `PF_Cmd_GLOBAL_SETUP`, this indicates the effect supports rendering on multiple threads at the same time. Single or multiple applications of this effect on a layer can be called to render at the same time on multiple threads. |
| | This flag indicates the effect supports rendering on multiple threads at the same time. Single or multiple applications of this effect on a layer can be called to render at the same time on multiple threads. |
| | If you are using the `PF_OutFlag_SEQUENCE_DATA_NEEDS_FLATTENING` flag, remember to also set the `PF_OutFlag2_SUPPORTS_GET_FLATTENED_SEQUENCE_DATA` flag. See [Sequence Data in Multi-Frame rendering](../../effect-details/multi-frame-rendering-in-ae#sequence-data-in-multi-frame-rendering) for more information. |
| | !!! note |
| | This flag should only be set on plugins that have been tested to be thread-safe with multi-frame rendering enabled in AE. |
| | For more information on how to use this flag, please see [Multi-Frame Rendering in AE](../../effect-details/multi-frame-rendering-in-ae) under Effect Details. |
| `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` | Available in After Effects Beta builds starting March 2021, After Effects 2022. |
| | Indicates the effect needs sequence_data replicated for each render thread, thus allowing each render to have sequence_data which can be written to. Note that changes to sequence_data will be discarded regularly, currently after each span of frames is rendered such as single RAM Preview or Render Queue export. |
| | !!! note |
| | This flag should only be set on plugins that have been tested to be thread-safe with multi-frame rendering enabled in AE. |
| | For more information on how to use this flag, please see [Multi-Frame Rendering in AE](../../effect-details/multi-frame-rendering-in-ae) under Effect Details. |
