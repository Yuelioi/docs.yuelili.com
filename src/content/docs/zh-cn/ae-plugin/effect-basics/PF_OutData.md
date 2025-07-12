---
title: PF_OutData
---
# PF_OutData

通过 `PF_OutData` 向 After Effects 传递插件所做的更改。修改这些字段的有效时间已注明。

---

## PF_OutData 成员

| 字段 | 描述 |
|---|---|
| `my_version` | 使用 PF_VERSION 宏将此标志设置为插件代码的版本号。 |
| | After Effects 使用此数据决定加载哪个重复的效果。 |
| `name` | 未使用。 |
| `global_data` | 每次调用时会在 [PF_InData](../PF_InData) 中返回给您的句柄。 |
| | 请使用 After Effects 的内存分配函数。 |
| `num_params` | After Effects 会检查此字段与 `PF_ADD_PARAM` 调用次数以及隐式输入图层是否匹配。 |
| `sequence_data` | 在收到 [PF_Cmd_SEQUENCE_SETUP](../command-selectors#sequence-selectors) 时可分配，此句柄将在后续所有调用中通过 [PF_InData](../PF_InData) 传回给您。 |
| `flat_sdata_size` | 未使用（After Effects 知道大小，因为您最初是使用其分配函数获取内存的）。 |
| `frame_data` | 您在 [PF_Cmd_FRAME_SETUP](../command-selectors#frame-selectors) 期间（可能）分配的句柄。 |
| | 此内容从不写入磁盘；用于将信息从 [PF_Cmd_FRAME_SETUP](../command-selectors#frame-selectors) 响应传递到 [PF_Cmd_RENDER](../command-selectors#frame-selectors) 或 [PF_Cmd_FRAME_SETDOWN](../command-selectors#frame-selectors)（如果您调整了输出缓冲区大小则必须这样做）。 |
| | 否则，此内存很少使用。 |
| `width`, `height`, `origin` | 如果输出图像尺寸与输入不同，则在 [PF_Cmd_FRAME_SETUP](../command-selectors#frame-selectors) 期间设置。 |
| | `width` 和 `height` 是输出缓冲区的大小，`origin` 是输入应映射到输出的点。 |
| | 要创建向左上方偏移 5 像素的投影，请将 origin 设置为 (5, 5)。 |
| [out_flags](#pf_outflags) | 向 After Effects 发送消息。可组合多个值。 |
| `return_msg` | After Effects 会显示您在此处放置的任何 C 字符串（每次命令选择器后都会检查并清除）。 |
| `start_sampL`, `dur_sampL`, `dest_snd` | 仅用于 [音频](../../audio/audio) 命令 |
| [out_flags2](#pf_outflags2) | 向 After Effects 发送消息。可组合多个值。 |

---

## PF_OutFlags

这些标志向 After Effects 传递功能和状态信息。在早期版本中，它们也用于发送基本消息，例如刷新 UI、发送错误消息。

这些功能已被函数套件取代，所有新的消息功能都将以该格式提供。但功能标志仍包含在 [PiPL](../../intro/pipl-resources) 中。

进行更改时，请同时更新 PiPL 和源代码。许多这些标志可以在 After Effects 会话期间更改。

| 标志 | 说明 |
|---|---|
| `PF_OutFlag_KEEP_RESOURCE_OPEN` | 插件的资源必须在所有命令期间可用。 |
| | 在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间，插件的资源始终处于打开状态，但在其他所有时间均不可用（除了 [PF_Cmd_ABOUT](../command-selectors#global-selectors) 和 [PF_Cmd_DO_DIALOG](../command-selectors#messaging) 期间），除非设置了此标志。 |
| | 如果您需要在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 之外的任何时间访问资源，请设置此标志。 |
| | !!! 注意 |
| | 我们建议插件加载并将必要的资源存储在全局数据中，而不是保持文件资源处于打开状态。 |
| `PF_OutFlag_WIDE_TIME_INPUT` | 效果在非 `current_time` 时间检查参数。 |
| | 如果您使用来自其他时间的参数（包括图层参数），请设置此标志。 |
| | 否则，After Effects 不会正确使效果使用的缓存帧失效。 |
| | 在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置。 |
| | 如果设置此标志，强烈建议同时设置 `PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT` 以获得更好的性能。 |
| `PF_OutFlag_NON_PARAM_VARY` | 设置此标志后，当效果应用于静止图像时，After Effects 不会缓存输出。 |
| | 否则，After Effects 会尽可能缓存您的输出以用于渲染其他帧。 |
| | 如果输出基于参数值以外的内容而变化，请设置此标志。 |
| | 如果效果应用于静止图像且所有参数恒定时生成变化的帧，这明确表明应设置此位（例如 Wave Warp）。 |
| | 例如，粒子效果需要此标志。 |
| | 在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置。 |
| | 如果需要，可以在 [PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging) 期间动态覆盖。 |
| | 尽可能关闭此标志以提高性能。 |
| `PF_OutFlag_RESERVED6` | 未使用。以前为 `PF_OutFlag_SEND_PARAMS_UPDATE`。已被 `PF_OutFlag_REFRESH_UI` 取代。 |
| `PF_OutFlag_SEQUENCE_DATA_NEEDS_FLATTENING` | After Effects 和 Premiere Pro 均假定已设置此标志。 |
| | 当序列数据包含引用项（指针、句柄）时必须进行扁平化处理，以便存储和反扁平化使用。 |
| | 参见 [PF_Cmd_SEQUENCE_RESETUP](../command-selectors#sequence-selectors)。 |
| `PF_OutFlag_I_DO_DIALOG` | 效果在响应 [PF_Cmd_DO_DIALOG](../command-selectors#messaging) 时显示对话框。 |
| | 在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置，在 [PF_Cmd_SEQUENCE_SETUP](../command-selectors#sequence-selectors) 期间检查。 |
| | !!! 注意 |
| | 效果对 `PF_OutFlag_I_DO_DIALOG` 的响应不可撤销。您可以使用自定义 UI 的任意数据，如果此类更改变得必要。 |
| `PF_OutFlag_USE_OUTPUT_EXTENT` | 效果遵循输出 `extent_rect`。在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置。 |
| | 有关正确用法，请参阅本章末尾的详细信息。 |
| | !!! 注意 |
| | 对 SmartFX 已过时。 |
| `PF_OutFlag_SEND_DO_DIALOG` | 效果必须显示对话框才能正常工作（为与 Photoshop 插件兼容而添加）。 |
| | After Effects 在 [PF_Cmd_SEQUENCE_SETUP](../command-selectors#sequence-selectors) 之后发送 [PF_Cmd_DO_DIALOG](../command-selectors#messaging)。 |
| | 在 [PF_Cmd_SEQUENCE_RESETUP](../command-selectors#sequence-selectors) 期间设置，而不是在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间。 |
| `PF_OutFlag_DISPLAY_ERROR_MESSAGE` | 在错误对话框中显示 `return_msg` 的内容。 |
| | 每当 return_msg 非 NULL 时，After Effects 会在对话框中显示内容，如果设置了此标志，则显示为错误对话框。 |
| | 可在任何命令后设置，并可用于调试。 |
| | 这也是为试用版实现提示消息的好方法。 |
| `PF_OutFlag_I_EXPAND_BUFFER` | 效果扩展输出缓冲区。 |
| | 在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置。 |
| | 设置此标志和 `PF_OutFlag_USE_OUTPUT_EXTENT` 以在 [PF_Cmd_FRAME_SETUP](../command-selectors#frame-selectors) 期间使用输出 `extent_rect` 与新缓冲区大小的交集。 |
| | 使用 `pre_effect_source_origin` 字段检测其他变换。 |
| | !!! 注意 |
| | 仅在需要时设置此标志；它会大幅降低缓存效率。 |
| | !!! 注意 |
| | 对 SmartFX 已过时。 |
| `PF_OutFlag_PIX_INDEPENDENT` | 给定像素独立于其周围的像素。 |
| | 在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 或 [PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging) 期间设置。 |
| | 例如，色彩校正效果通常是像素独立的，而扭曲效果则不是。 |
| | !!! 注意 |
| | 如果您的效果不使用一个像素的颜色值来影响相邻像素的颜色值，请设置此 outflag！ |
| | 它可以显著提高性能。 |
| `PF_OutFlag_I_WRITE_INPUT_BUFFER` | 效果写入输入缓冲区。 |
| | 此功能用途有限；虽然可以节省分配，但会使某些管道缓存失效。在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置。 |
| `PF_OutFlag_I_SHRINK_BUFFER` | 效果根据 `extent_rect` 缩小其缓冲区以提高内存效率。 |
| | 尽可能在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置。 |
| | !!! 注意 |
| | 对 SmartFX 已过时。 |
| `PF_OutFlag_WORKS_IN_PLACE` | 未使用。 |
| `PF_OutFlag_SQUARE_PIX_ONLY` | 未使用。 |
| `PF_OutFlag_CUSTOM_UI` | 效果具有自定义用户界面，并需要 [PF_Cmd_EVENT](../command-selectors#messaging) 消息。 |
| | 在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置。 |
| `PF_OutFlag_RESERVED5` | 未使用。 |
| `PF_OutFlag_REFRESH_UI` | 刷新整个效果控件、合成和图层窗口。 |
| | 在 [PF_Cmd_EVENT](../command-selectors#messaging)、[PF_Cmd_RENDER](../command-selectors#frame-selectors) 和 [PF_Cmd_DO_DIALOG](../command-selectors#messaging) 期间设置。 |
| | 如果在 `PF_Cmd_EVENT` 期间刷新自定义 UI，建议使用 [新的重绘机制](../../effect-ui-events/custom-ui-and-drawbot) 进行更精细的控制。 |
| `PF_OutFlag_NOP_RENDER` | 在 [PF_Cmd_FRAME_SETUP](../command-selectors#frame-selectors) 期间设置此标志以使当前渲染失效。 |
| `PF_OutFlag_I_USE_SHUTTER_ANGLE` | 表示渲染的图像取决于 `shutter_angle` 的值。 |
| `PF_OutFlag_I_USE_AUDIO` | 效果的参数取决于音频数据，使用 [PF_CHECKOUT_LAYER_AUDIO](../../effect-details/interaction-callback-functions#interaction-callbacks) 获取。 |
| `PF_OutFlag_I_AM_OBSOLETE` | 效果在最初应用它的旧项目中可用，但不会出现在效果菜单中。 |
| `PF_OutFlag_FORCE_RERENDER` | 效果进行了需要重新渲染的更改。PF_ChangeFlag_CHANGED_VALUE 也会强制重新渲染。 |
| `PF_OutFlag_PiPL_OVERRIDES_OUTDATA_OUTFLAGS` | After Effects 将使用 PiPL outflags，并忽略在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置的标志。 |
| `PF_OutFlag_I_HAVE_EXTERNAL_DEPENDENCIES` | 效果依赖于外部文件（或外部字体）。 |
| | 如果设置，After Effects 会发送 [PF_Cmd_GET_EXTERNAL_DEPENDENCIES](../command-selectors#messaging)。 |
| `PF_OutFlag_DEEP_COLOR_AWARE` | 效果支持 16-bpc 颜色。 |
| `PF_OutFlag_SEND_UPDATE_PARAMS_UI` | 在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置此标志以接收 [PF_Cmd_UPDATE_PARAMS_UI](../command-selectors#messaging)。 |
| `PF_OutFlag_AUDIO_FLOAT_ONLY` | 效果需要 PF_SIGNED_FLOAT 格式的音频数据。 |
| | After Effects 将执行任何所需的格式转换。 |
| | 您还必须设置 `PF_OutFlag_AUDIO_EFFECT_TOO` 或 `PF_OutFlag_AUDIO_EFFECT_ONLY` 之一。 |
| `PF_OutFlag_AUDIO_IIR` | 如果（音频）效果是无限脉冲响应滤波器，则在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置。 |
| | 如果给定时间的输出取决于先前时间的输出，则为 true。 |
| | 当 IIR 滤波器收到 [PF_Cmd_AUDIO_RENDER](../command-selectors#frame-selectors) 时，输入音频时间跨度与输出音频时间跨度相同（当它们与 [PF_Cmd_AUDIO_SETUP](../command-selectors#frame-selectors) 中请求的输出时间跨度相交时）。 |
| | 在响应 [PF_Cmd_AUDIO_SETUP](../command-selectors#frame-selectors) 时，滤波器可以请求来自较早时间的音频（如延迟效果）。 |
| | 滤波器可以访问来自该较早时间的参数，并应将这些参数（以及临时音频）缓存在序列数据中。 |
| | 如果生成的音频与请求的输出音频时间不对应，则应将输出音频持续时间设置为零。 |
| | 滤波器可以使用参数和输入音频更新其延迟线。 |
| | 缓存其延迟线后，根据最后缓存的延迟线在 [PF_Cmd_AUDIO_SETUP](../command-selectors#frame-selectors) 期间请求更多输入音频。使用 [PF_HasParamChanged](../../effect-details/parameter-supervision#pf_paramutilsuite3) 确定缓存是否有效。 |
| `PF_OutFlag_I_SYNTHESIZE_AUDIO` | 如果效果生成音频（即使传入静音），则在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置。 |
| | 您还必须设置 `PF_OutFlag_AUDIO_EFFECT_TOO` 或 `PF_OutFlag_AUDIO_EFFECT_ONLY` 之一。 |
| `PF_OutFlag_AUDIO_EFFECT_TOO` | 如果效果修改音频，则在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置。 |
| `PF_OutFlag_AUDIO_EFFECT_ONLY` | 如果效果仅修改音频输出，则在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置。 |

---

## PF_OutFlags2

我们在After Effects 5.0中新增了第二组输出标志（outflags），一方面是为了未来扩展预留空间，另一方面也是为了改掉我们重用现有标志的坏习惯。

与`PF_OutFlags`一样，这些标志中有许多可以在After Effects会话期间被更改。

注意：当您进行更改时，别忘了同时更新[PiPL](../../intro/pipl-resources)和源代码。

| 标志 | 说明 |
|---|---|
| `PF_OutFlag2_NONE` | 无特殊标志 |
| `PF_OutFlag2_SUPPORTS_QUERY_DYNAMIC_FLAGS` | 效果能响应[PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging)。必须在PiPL和[PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors)期间设置。 |
| `PF_OutFlag2_I_USE_3D_CAMERA` | 效果会访问3D摄像机信息 |
| `PF_OutFlag2_I_USE_3D_LIGHTS` | 效果会访问3D灯光信息 |
| `PF_OutFlag2_PARAM_GROUP_START_COLLAPSED_FLAG` | 这个标志本身并不控制参数组的折叠状态 |
| | 每个参数组的初始折叠状态是在[PF_Cmd_PARAM_SETUP](../command-selectors#global-selectors)期间通过设置[PF_ParamFlags](../pf_paramdef#parameter-flags)中的[PF_ParamFlag_START_COLLAPSED](../pf_paramdef#parameter-flags)来确定的，但除非效果设置了这个标志位，否则这些单独设置将不会被采纳 |
| | 否则，所有参数组默认都会折叠显示 |
| | 记得在PiPL和[PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors)期间都设置这个标志 |
| `PF_OutFlag2_I_AM_THREADSAFE` | 目前这个标志没有实际作用。如果您对这个感兴趣，可能会对下面描述的`PF_OutFlag2_PPRO_DO_NOT_CLONE_SEQUENCE_DATA_FOR_RENDER`标志感兴趣 |
| `PF_OutFlag2_CAN_COMBINE_WITH_DESTINATION` | 最初为Premiere添加，但现已不再使用 |
| `PF_OutFlag2_DOESNT_NEED_EMPTY_PIXELS` | 为渲染优化添加；缩小传递给效果的输入缓冲区，排除所有空像素（空像素指"零alpha"的像素，除非设置了`PF_OutFlag2_REVEALS_ZERO_ALPHA`，这种情况下RGB也必须为零） |
| | 在[PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors)或[PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging)期间设置 |
| | 修剪后的缓冲区原点可以在`in_data>pre_effect_source_origin`中找到 |
| | 同时设置了这个标志和`PF_OutFlag_I_EXPAND_BUFFER`的效果，如果输入完全为空，可能会收到空输入缓冲区，必须能够处理这种情况而不会崩溃 |
| | !!! 注意 |
| | 这个标志可能导致输出缓冲区大小改变 |
| | !!! 注意 |
| | 对SmartFX已废弃 |
| `PF_OutFlag2_REVEALS_ZERO_ALPHA` | 这是实现者最需要注意的标志，因为它代表了默认行为的改变 |
| | 如果效果可以处理零alpha像素并显示其中的RGB数据（如我们的Set Channels效果），则设置此标志 |
| | 这会告诉After Effects在确定效果输入时不要修剪这些像素 |
| | 这个标志可以在[PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging)期间更改 |
| | 注意，虽然这个标志可能导致`extent_hint`大小改变，但不会改变图像缓冲区大小 |
| | 从6.0开始，蒙版边界框外的像素会被置零 |
| | 如果您的效果可以显示这些像素，请通过设置此标志告诉AE不要丢弃这些RGB值 |
| | 如果您的效果并不总是显示这些像素，请动态设置此位 |
| | 要判断您的效果是否需要设置此位，可以将明显小于图层的蒙版应用到实色上，然后应用效果并将其设置为修改alpha的状态 |
| | 如果蒙版的矩形边界框变得可见，则需要设置此位 |
| `PF_OutFlag2_PRESERVES_FULLY_OPAQUE_PIXELS` | 保留那些完全不透明的像素！ |
| `PF_OutFlag2_SUPPORTS_SMART_RENDER` | 效果使用SmartFX API |
| `PF_OutFlag2_FLOAT_COLOR_AWARE` | 效果支持32位浮点颜色表示 |
| | !!! 注意 |
| | 必须同时设置`PF_OutFlag2_SUPPORTS_SMART_RENDER` |
| `PF_OutFlag2_I_USE_COLORSPACE_ENUMERATION` | 这是为在Premiere Pro中针对不同色彩空间优化的效果准备的。详情请参阅Premiere Pro SDK |
| `PF_OutFlag2_I_AM_DEPRECATED` | 在[PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors)期间设置此标志会将效果放在效果面板本地化的"已废弃"文件夹中 |
| | 与`PF_OutFlag_I_AM_OBSOLETE`对比 |
| `PF_OutFlag2_PPRO_DO_NOT_CLONE_SEQUENCE_DATA_FOR_RENDER` | 在Premiere Pro中支持，After Effects不支持 |
| | 这会影响Premiere Pro如何使用[多线程](../../ppro/multithreading)驱动插件 |
| `PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT` | 在[PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors)期间设置 |
| | 需要设置`PF_OutFlag_WIDE_TIME_INPUT`（允许您支持旧主机），但实际上会覆盖该标志 |
| | 设置后，所有参数签出都会被跟踪，因此主机知道随时间变化的依赖关系，效率更高 |
| | 例如，如果您只设置了旧的`PF_OutFlag_WIDE_TIME_INPUT`，任何时候在效果上游有任何变化，您都会被调用来重新渲染 |
| | 设置此标志后，如果特定帧17已经签出了0-17时间点的内容，AE会知道18+帧的任何变化都不会影响该缓存帧 |
| | 注意，如果您使用这个新标志，不得在序列数据（或其他地方）缓存任何时间相关数据，除非您在使用时间相关数据之前也使用[PF_ParamUtilSuite3](../../effect-details/parameter-supervision#pf_paramutilsuite3)中的`PF_GetCurrentState()`/`PF_AreStatesIdentical()`来[验证该缓存](../../effect-details/global-sequence-frame-data#validating-sequence-data) |
| | 这只适用于SmartFX（设置了`PF_OutFlag2_SUPPORTS_SMART_RENDER`的效果） |
| | 如果您没有设置该标志，After Effects会静默将此视为`PF_OutFlag_WIDE_TIME_INPUT` |
| `PF_OutFlag2_I_USE_COMP_TIMECODE` | 在[PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors)期间设置 |
| | 这让AE知道如果合成开始时间和/或丢帧设置被修改，应该重新渲染效果 |
| `PF_OutFlag2_DEPENDS_ON_UNREFERENCED_MASKS` | CS6新增。如果您要查看未被路径参数直接引用的路径（例如要在所有蒙版上绘制描边），请设置此标志 |
| | 这需要让After Effects知道当修改了看似未被效果引用的蒙版时，应使您的输出无效 |
| | 在[PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors)或[PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging)期间设置 |
| `PF_OutFlag2_OUTPUT_IS_WATERMARKED` | CS6新增。如果您的输出将以某种方式添加水印（可能是因为用户使用的是未授权的演示版本），请在[PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors)期间设置此标志 |
| | 如果例如浮动许可证状态发生变化，可以在应用会话期间通过[PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging)更改此状态 |
| | 如果插件作者确实有这种状态异步变化的情况，必须确保下一次渲染与从[PF_Cmd_QUERY_DYNAMIC_FLAGS](../command-selectors#messaging)返回的最后状态匹配，否则竞争条件可能导致缓存错误帧 |
| | （如果您只在响应`DO_DIALOG`时更改此设置，则不存在此问题） |
| `PF_OutFlag2_SUPPORTS_GPU_RENDER_F32` | 16.0新增。在PF_Cmd_GLOBAL_SETUP期间设置，表示支持GPU |
| | 效果将收到GPU选择器调用，并在GUI中标记为支持GPU |
| | 在`PF_Cmd_GPU_DEVICE_SETUP`时，这些标志表示特定设备和框架的渲染能力 |
| `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` | 从2020年6月的After Effects Beta版本开始提供，After Effects 2022正式支持 |
| | 在`PF_Cmd_GLOBAL_SETUP`期间设置，表示效果支持同时在多个线程上渲染。可以在多个线程上同时调用此效果在图层上的单个或多个应用进行渲染 |
| | 此标志表示效果支持同时在多个线程上渲染。可以在多个线程上同时调用此效果在图层上的单个或多个应用进行渲染 |
| | 如果您使用`PF_OutFlag_SEQUENCE_DATA_NEEDS_FLATTENING`标志，记得也要设置`PF_OutFlag2_SUPPORTS_GET_FLATTENED_SEQUENCE_DATA`标志。详情请参阅[多帧渲染中的序列数据](../../effect-details/multi-frame-rendering-in-ae#sequence-data-in-multi-frame-rendering) |
| | !!! 注意 |
| | 此标志应仅在经过测试确认在AE启用多帧渲染时线程安全的插件上设置 |
| | 有关如何使用此标志的更多信息，请参阅效果详情下的[AE中的多帧渲染](../../effect-details/multi-frame-rendering-in-ae) |
| `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` | 从2021年3月的After Effects Beta版本开始提供，After Effects 2022正式支持 |
| | 表示效果需要为每个渲染线程复制sequence_data，从而允许每个渲染都有可写入的sequence_data。注意对sequence_data的更改会定期丢弃，目前在每个帧跨度渲染完成后（如单次RAM预览或渲染队列导出） |
| | !!! 注意 |
| | 此标志应仅在经过测试确认在AE启用多帧渲染时线程安全的插件上设置 |
| | 有关如何使用此标志的更多信息，请参阅效果详情下的[AE中的多帧渲染](../../effect-details/multi-frame-rendering-in-ae) |
