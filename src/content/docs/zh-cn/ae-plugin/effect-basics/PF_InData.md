---
title: PF_InData
---
# PF_InData

After Effects 使用 `PF_InData` 来传递系统、项目、图层和音频信息。在每次向插件发送命令选择器之前，此结构会被更新。

仅在特定 [PF_Cmds](../command-selectors) 期间有效的字段会被标注。

另外，不用担心；虽然 `PF_InData` 看起来很大，但你不需要记住每个成员的用途；你只需要在某些时候使用其中的一些字段。

---

## PF_InData 成员

| 名称 | 描述 |
|---|---|
| `inter` | 用于用户交互、添加参数、检查用户是否中断了效果、显示进度条以及在渲染当前时间之外的时间获取源帧和参数值的回调函数。 |
| | 这个非常有用的函数套件在 [交互回调函数](../../effect-details/interaction-callback-functions) 中有详细描述。 |
| `utils` | 图形和数学回调函数。此指针在所有时间都定义。 |
| `effect_ref` | 必须传递给大多数各种回调例程的不透明数据。 |
| | After Effects 使用此数据来识别你的插件。 |
| `quality` | 当前的质量设置，可以是 `PF_Quality_HI` 或 `PF_Quality_LO`。 |
| | 在 LO 质量下，效果应该更快地执行，而在 HI 质量下，效果应该更精确。 |
| | 图形实用程序回调函数在 LO 和 HI 质量下的表现不同；你的效果也应该如此！ |
| | 此字段在所有帧和序列选择器期间定义。 |
| `version` | 效果规范版本，指示在 `PF_Cmd_GLOBAL_SETUP` 期间成功运行所需的版本。 |
| `serial_num` | 调用应用程序的序列号。 |
| `appl_id` | 调用应用程序的标识符。 |
| | 如果你的插件在 After Effects 中运行，`appl_id` 包含应用程序创建者代码 'FXTC'。 |
| | 如果它在 [Premiere Pro & 其他主机](../../ppro/ppro) 中运行，则会是 'PrMr'。 |
| | 使用此字段来测试你的插件是否被用于另一个应用程序，而不是它被授权的应用程序。 |
| `num_params` | 输入参数的数量。 |
| `what_cpu` | 在 macOS 下，此字段包含 CPU 类型的 Gestalt 值（参见 Inside Macintosh, volume 6）。在 Windows 上未定义。 |
| `what_fpu` | 在 macOS 下，此字段包含 FPU 类型的 Gestalt 值。在 Windows 上未定义。 |
| `current_time` | 当前渲染帧的时间，在 [PF_Cmd_RENDER](../command-selectors#frame-selectors) 期间有效。 |
| | 这是图层中的当前时间，而不是任何合成中的时间。 |
| | 如果图层不是从时间 0 开始或时间被拉伸，图层时间和合成时间是不同的。 |
| | 当前帧号是 `current_time` 除以 `time_step`。 |
| | 当前时间（以秒为单位）是 `current_time` 除以 `time_scale`。 |
| | 为了处理时间拉伸、合成帧率变化和时间重映射，After Effects 可能会要求效果在非整数时间（两帧之间）渲染。 |
| | 为此做好准备；不要假设你只会被要求在帧边界上渲染帧。 |
| | !!! 注意 |
| | 从 CS3 (8.0) 开始，效果可能会被要求在负的当前时间渲染。请处理这种情况！ |
| `time_step` | 当前渲染源帧的持续时间。 |
| | 在嵌套合成的几种情况下，此源帧持续时间可能与图层中帧之间的时间跨度（`local_time_step`）不同。 |
| | 此值可以通过除以 `time_scale` 转换为秒。 |
| | 在计算其他源帧时间时，例如用于 [PF_CHECKOUT_PARAM](../../effect-details/interaction-callback-functions#interaction-callbacks)，请使用此值而不是 `local_time_step`。 |
| | 如果图层时间反转，此值可以为负。如果时间重映射应用于嵌套合成，此值可以从一帧到下一帧变化。 |
| | 当源材料在嵌套合成中被拉伸或重映射时，此值可能与 `local_time_step` 不同。 |
| | 例如，当内部合成嵌套在具有不同帧率的外部合成中，或者时间重映射应用于外部合成时，可能会发生这种情况。 |
| | 如果此值在所有帧中不恒定，则在 [PF_Cmd_SEQUENCE_SETUP](../command-selectors#sequence-selectors) 期间此值将为 0。 |
| | 在 `PF_Cmd_FRAME_SETUP` 和 `PF_Cmd_FRAME_SETDOWN` 选择器期间，此值将被正确设置。 |
| | !!! 警告 |
| | 此值可能为零，因此在除以之前请检查它。 |
| `total_time` | 图层的持续时间。 |
| | 如果图层时间拉伸超过 100%，此值将相应调整；但如果图层时间拉伸缩短，此值不会受到影响。 |
| | 如果启用了时间重映射，此值将是合成的持续时间。 |
| | 此值可以通过除以 `time_scale` 转换为秒。 |
| `local_time_step` | 图层中帧之间的时间差。 |
| | 受应用于图层的时间拉伸影响。 |
| | 如果图层时间反转，此值可以为负。 |
| | 与 `time_step` 不同，此值从一帧到下一帧是恒定的。 |
| | 此值可以通过除以 `time_scale` 转换为秒。 |
| | 对于图层整个帧范围内恒定的步长值，请使用 `local_time_step`，它基于合成的帧率和图层拉伸。 |
| `time_scale` | `current_time`、`time_step`、`local_time_step` 和 `total_time` 的单位每秒。 |
| | 如果 `time_scale` 为 30，则 `current_time`、`time_step`、`local_time_step` 和 `total_time` 的单位为 1/30 秒。 |
| | `time_step` 可能为 3，表示序列实际上以每秒 10 帧渲染。`total_time` 可能为 105，表示序列长度为 3.5 秒。 |
| `field` | 仅在 [PF_OutFlag_PIX_INDEPENDENT](../PF_OutData#pf_outflags) 在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置时有效。 |
| | 检查此字段以查看是否可以仅处理上字段或下字段。 |
| `shutter_angle` | 运动模糊快门角度。值范围为 0 到 1，表示 360 度。 |
| | 除非为目标图层启用并检查了运动模糊，否则此值为零。 |
| | `shutter_angle == 180` 表示 `current_time` 和 `current_time + 1/2 time_step` 之间的时间间隔。 |
| | 仅在 [PF_OutFlag_I_USE_SHUTTER_ANGLE](../PF_OutData#pf_outflags) 在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间设置时有效。 |
| | 有关如何在效果中实现运动模糊的详细信息，请参见 [运动模糊](../../effect-details/motion-blur) 部分。 |
| `width` | 源图层的尺寸，不一定与输入图像参数中的宽度和高度字段相同。 |
| | 缓冲区调整效果可能导致此差异。不受下采样影响。 |
| `height` | |
| `extent_hint` | 输入和输出图层可见部分的交集；包含转换为图层坐标的合成矩形。 |
| | 仅迭代此矩形像素可以显著加快你的效果。有关正确用法，请参见本章后面的 [extent_hint 用法](#extent_hint-usage)。 |
| `output_origin_x` | 输出缓冲区在输入缓冲区中的原点。仅在效果更改原点时非零。 |
| `output_origin_y` | |
| `downsample_x` | 点控制参数和图层参数尺寸会自动调整，以补偿用户告诉 After Effects 仅渲染每第 n 个像素的情况。 |
| | 效果需要下采样因子来解释表示图像中像素距离的标量参数（如滑块）。 |
| | 例如，如果下采样因子在每个方向上为 1/2（下采样因子表示为比率），则 4 像素的模糊应解释为 2 像素的模糊。 |
| | 仅在以下期间有效： |
| | - [PF_Cmd_SEQUENCE_SETUP](../command-selectors#sequence-selectors) |
| | - [PF_Cmd_SEQUENCE_RESETUP](../command-selectors#sequence-selectors) |
| | - [PF_Cmd_FRAME_SETUP](../command-selectors#frame-selectors) |
| | - [PF_Cmd_RENDER](../command-selectors#frame-selectors) |
| `downsample_y` | |
| `pixel_aspect_ratio` | 像素宽高比（宽度除以高度）。 |
| `in_flags` | 未使用。 |
| `global_data` | 你的插件在其他选择器期间存储的数据。在调用插件之前和之后，After Effects 会锁定和解锁此数据。 |
| `sequence_data` | |
| `frame_data` | |
| `start_sampL` | 相对于音频图层开始的起始采样号。 |
| `dur_sampL` | 音频的持续时间，表示为采样数。音频专用。 |
| `total_sampL` | 音频图层中的采样数；相当于以采样表示的 `total_time`。 |
| `src_snd` | 描述输入声音的 `PF_SoundWorld`。音频专用。 |
| `pica_basicP` | 指向 PICA Basic 套件的指针，用于获取其他套件。 |
| `pre_effect_source_origin_x` | 输入缓冲区中源图像的原点。仅在发送帧选择器时有效。 |
| | 仅当同一图层上在此效果之前的一个或多个效果调整了输出缓冲区并移动了原点时，此值才为非零。 |
| | 检查调整大小和新原点以确定输出区域。 |
| | 这对于具有隐式空间操作（除了点控制之外）的效果非常有用，例如围绕图像中心翻转文件。 |
| | !!! 注意 |
| | 检出的点参数会根据当前时间的预效果原点进行调整，而不是根据检出的时间。 |
| `pre_effect_source_origin_y` | |
| `shutter_phase` | 从帧时间到快门打开时间的偏移量，表示为帧持续时间的百分比。 |

---

## extent_hint 用法

:::note
提示矩形对于 [SmartFX](../../smartfx/smartfx) 来说更加有效...也更复杂。
:::

使用 `extent_hint` 仅处理需要输出的像素；这是你可以进行的最简单的优化之一。

通过在 [PF_OutData](../PF_OutData#pf_outdata) 中设置 [PF_OutFlag_USE_OUTPUT_EXTENT](../PF_OutData#pf_outflags) 来告诉 After Effects 你使用 `in_data>extent_hint`，在 [PF_Cmd_GLOBAL_SETUP](../command-selectors#global-selectors) 期间（以及在你的 PiPL 中）。

在测试 `extent_hint` 代码之前，请从首选项菜单中禁用缓存，以便 After Effects 在合成中的任何内容更改时渲染你的效果。

否则，缓存机制可能会掩盖你的插件（可能不正确）的输出。

将图层移动到合成中，使其被裁剪。`output>extent_hint` 是图层在合成中可见的部分。

向你的图层添加一个遮罩并移动它。

这会改变 `extent_hint`，它包围了图像的所有非零 alpha 区域。

`in_data>extent_hint` 是这两个矩形（合成和遮罩）的交集，并且每当它们发生变化时都会改变。

范围矩形在原始输入图层的坐标空间中计算，在调整大小和原点移动之前，以简化输入和输出范围之间的矩形交集，适用于设置了 [PF_OutFlag_PIX_INDEPENDENT](../PF_OutData#pf_outflags) 的效果。

要在输出缓冲区的坐标系中获取输出范围，请将 `extent_hint` 偏移 `PF_InData->output_origin_x` 和 `y` 字段。

在计算输出大小时考虑下采样；用户必须能够以全分辨率渲染。

如果输出缓冲区超过 30,000 x 30,000，请将其限制为该大小，并考虑显示警告对话框。

一旦你的代码行为正确，启用缓存并查看效果需要重新渲染的频率。

考虑一个投影效果；用户经常将静态投影应用于静止图像。

`output>extent_hint` 被忽略，因此缓存会更频繁地使用。

对于缓冲区扩展效果，在 [PF_Cmd_FRAME_SETUP](../command-selectors#frame-selectors) 期间将 `output>extent_hint` 与插件的变换边界相交，并相应地设置大小。

---

## 现在增加了 20% 的像素

从 6.0 开始，传递的 `extent_hints` 比图层本身大 20%，以帮助我们的预测渲染决策。

许多效果会“稍微”扩展缓冲区，而 After Effects 经常在以后使用提示矩形。

---

## 点控制和缓冲区扩展

扩展输出缓冲区的效果通过在 [PF_Cmd_FRAME_SETUP](../command-selectors#frame-selectors) 期间设置 `PF_InData` 中的 `output_origin_x/y` 来定位原始图层的左上角。

此偏移会通过 `pre_effect_source_origin_x/y` 报告给后续效果。点参数会自动调整此偏移。

在你的效果之前应用一个缓冲区扩展器，例如高斯模糊或 Resizer SDK 示例，并使用较大的调整值。

如果你的效果没有正确处理 `pre_effect_source_origin_x/y`，打开和关闭模糊会改变输出的位置。

所有点参数值（在任何时间）都有由 `pre_effect_source_origin_x/y` 描述的偏移值。对于大多数效果，这是透明的。

然而，如果缓冲区扩展随时间变化（例如动画模糊量），则原点偏移会移动非动画点。

在设计在帧之间缓存点参数值的效果时，请考虑这一点。
