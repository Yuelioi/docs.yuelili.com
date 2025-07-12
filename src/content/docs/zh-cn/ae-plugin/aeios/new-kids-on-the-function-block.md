---
title: 函数块中的新成员
---
# 函数块中的新成员

在其主入口函数中，每个 AEIO 插件必须填充一个 `AEIO_FunctionBlock`，提供 After Effects 将调用的函数指针，以处理不同的文件相关任务。

下表显示了输入需要哪些函数，输出需要哪些函数。对于最基本的实现，请从右侧标记为“必需”的函数开始。通常可以通过让 After Effects 为您处理调用来实现“最佳情况”行为（通过返回 `AEIO_Err_USE_DFLT_CALLBACK`）。

对于仅用于视频输入的最基本 AEIO，请实现以下函数：`AEIO_InitInSpecFromFile` 或 `AEIO_InitInSpecInteractive`（取决于源是文件还是交互生成的），`AEIO_DisposeInSpec`，`AEIO_GetInSpecInfo`，`AEIO_DrawSparseFrame`，`AEIO_CloseSourceFiles` 和 `AEIO_InqNextFrameTime`（使用 `AEIO_Err_USE_DFLT_CALLBACK` 是可以的）。

从 IO 示例开始，最好也保留其他函数的定义，并根据需要进一步填充它们。

---

## AEIO_FunctionBlock4

| 函数 | 响应 | 输入或输出？ | 必需？ |
|---|---|---|---|
| `AEIO_InitInSpecFromFile` | 给定文件路径，在提供的 `AEIO_InSpecH` 中描述其内容。 | 输入 | 是，适用于基于文件的媒体 |
| | 使用 [AEGP_IOInSuite](#aegp_ioinsuite5) 中的所有适当“set”调用来完成此操作；如果有图像数据，请设置其深度、尺寸和 Alpha 解释。 | | |
| | 如果有音频，请描述其声道和采样率。 | | |
| | 文件路径是一个以 NULL 结尾的 UTF-16 字符串，带有平台分隔符。 | | |
| | <pre lang="cpp">AEIO_InitInSpecFromFile(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  const A_UTF16Char  \*file_pathZ,<br/>  AEIO_InSpecH   inH);</pre> | | |
| `AEIO_InitInSpecInteractive` | 使用某种形式的用户交互（而不是由 After Effects 提供的文件路径），描述生成的 `AEIO_InSpecH` 中包含的音频和视频。 | 输入 | 是，适用于交互生成的媒体 |
| | <pre lang="cpp">AEIO_InitInSpecInteractive(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH);</pre> | | |
| `AEIO_DisposeInSpec` | 释放 `AEIO_InSpecH`。 | 输入 | 是 |
| | <pre lang="cpp">AEIO_DisposeInSpec(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH);</pre> | | |
| `AEIO_FlattenOptions` | 对于给定的 `AEIO_InSpecH`，返回其选项句柄中包含的数据的扁平化版本。 | 输入 | 否 |
| | 使用 `AEGP_GetInSpecOptionsHandle` 获取未扁平化的选项句柄。 | | |
| | <pre lang="cpp">AEIO_FlattenOptions(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  AEIO_Handle   \*flat_optionsPH);</pre> | | |
| `AEIO_InflateOptions` | 对于给定的 `AEIO_InSpecH`，使用 `AEGP_SetInSpecOptionsHandle` 创建其扁平化选项数据的未扁平化版本。 | 输入 | 否 |
| | <pre lang="cpp">AEIO_InflateOptions(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  AEIO_Handle   flat_optionsH);</pre> | | |
| `AEIO_SynchInSpec` | 允许 `AEIO_Err_USE_DFLT_CALLBACK`。检查 `AEIO_InSpecH`，（必要时更新其选项），并指示是否进行了更改。 | 输入 | 否 |
| | <pre lang="cpp">AEIO_SynchInSpec(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_Boolean   \*changed0);</pre> | | |
| `AEIO_GetActiveExtent` | 允许 `AEIO_Err_USE_DFLT_CALLBACK`。使用给定时间的文件像素的活动范围填充提供的 `A_LRect`。 | 输入 | 是 |
| | <pre lang="cpp">AEIO_GetActiveExtent(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  const A_Time  \*tr,<br/>  A_LRect   \*extent);</pre> | | |
| `AEIO_GetInSpecInfo` | 在 `AEIO_Verbiage` 中提供一些字符串来描述文件，这些字符串将出现在项目面板中。这包括用于描述文件类型和子类型（编解码器）的字符串。 | 输入 | 是 |
| | <pre lang="cpp">AEIO_GetInSpecInfo(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  AEIO_Verbiage   \*verbiageP);</pre> | | |
| | 此函数被频繁调用；每次刷新项目面板时都会调用。尽量减少内存分配。 | | |
| | 在 After Effects 附带的 AEIO 中，我们检查有效的 `optionsH`（使用 `AEGP_GetInSpecOptionsHandle`）；如果找到，我们使用其中的信息。如果没有，我们什么也不做。 | | |
| | 这很重要；如果您的 AEIO 处理静态图像，此函数 *将* 被调用以处理包含静态图像的文件夹。希望不会有与之关联的 `optionsH`（除非您正在编写一个非常奇怪的 AEIO）。 | | |
| `AEIO_DrawSparseFrame` | 从 `AEIO_InSpecH` 绘制一帧。 | 输入 | 是 |
| | `PF_EffectWorld*` 包含要使用的宽度和高度，但如果 `required_region0` 不是 `NULL`，请确保考虑到它。 | | |
| | <pre lang="cpp">AEIO_DrawSparseFrame(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  AEIO_Quality  qual,<br/>  const AEIO_RationalScale  \*rs0,<br/>  const A_Time  \*tr,<br/>  const A_Time  \*duration0,<br/>  const A_Rect   \*required_region0,<br/>  PF_EffectWorld  \*wP,<br/>  A_long*   originx,<br/>  A_long*   originy,<br/>  AEIO_DrawingFlags   \*draw_flagsP);</pre> | | |
| | 注意：返回的数据应为线性光（1.0），After Effects 将执行任何必要的转换以将素材带入工作色彩空间。 | | |
| `AEIO_GetDimensions` | 允许 `AEIO_Err_USE_DFLT_CALLBACK`。提供 `AEIO_InSpecH` 中视频的尺寸（以及必要的缩放因子）。 | 输入 | 否 |
| | <pre lang="cpp">AEIO_GetDimensions(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  const AEIO_RationalScale  \*rs0,<br/>  A_long  \*width0,<br/>  A_long  \*height0);</pre> | | |
| `AEIO_GetDuration` | 允许 `AEIO_Err_USE_DFLT_CALLBACK`。提供 `AEIO_InSpecH` 的持续时间（以秒为单位）。 | 输入 | 否 |
| | <pre lang="cpp">AEIO_GetDuration(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_Time  \*trP);</pre> | | |
| `AEIO_GetTime` | 允许 `AEIO_Err_USE_DFLT_CALLBACK`。提供 `AEIO_InSpecH` 的时间基准。 | 输入 | 否 |
| | <pre lang="cpp">AEIO_GetTime(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_Time  \*tr);</pre> | | |
| | 以下是我们内部用于常见时间基准的值： | | |
| | - 29.97 fps: `scale = 100; value= 2997;` | | |
| | - 59.94 fps: `scale = 50; value = 2997;` | | |
| | - 23.976 fps: `scale = 125; value = 2997;` | | |
| | - 30 fps: `scale = 1; value = 30;` | | |
| | - 25 fps: `scale = 1; value = 25;` | | |
| `AEIO_GetSound` | 允许 `AEIO_Err_USE_DFLT_CALLBACK`。以描述的品质提供 `AEIO_InSpecH` 中的声音。 | 输入 | 否 |
| | <pre lang="cpp">AEIO_GetSound(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_InSpecH   inH,<br/>  AEIO_SndQuality  quality,<br/>  const AEIO_InterruptFuncs  \*interrupt_funcsP0,<br/>  const A_Time   \*startPT,<br/>  const A_Time   \*durPT,<br/>  A_u_long   start_sampLu,<br/>  A_u_long   num_samplesLu,<br/>  void   \*dataPV);</pre> | | |
| | `AEIO_SndQuality` 可能为： | | |
| | - `AEIO_SndQuality_APPROX`,（此品质用于绘制音频波形） | | |
| | - `AEIO_SndQuality_LO`, | | |
| | - `AEIO_SndQuality_HI` | | |
| `AEIO_InqNextFrameTime` | 允许 `AEIO_Err_USE_DFLT_CALLBACK`。 | 输入 | 是 |
| | 提供 `AEIO_InSpecH` 中下一帧的时间（以源素材的时间基准为准）。 | | |
| | <pre lang="cpp">AEIO_InqNextFrameTime(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  const A_Time  \*base_time_tr,<br/>  AEIO_TimeDir  time_dir,<br/>  A_Boolean   \*found0,<br/>  A_Time  \*key_time_tr0);</pre> | | |
| `AEIO_InitOutputSpec` | 允许 `AEIO_Err_USE_DFLT_CALLBACK`。 | 输出 | 是 |
| | 执行新 `AEIO_OutSpecH` 所需的任何初始化，并指示是否进行了更改。 | | |
| | <pre lang="cpp">AEIO_InitOutputSpec(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_Boolean   \*user_interacted);</pre> | | |
| | !!! 注意 | | |
| | 首次使用您的 AEIO 时，After Effects 会在其首选项中缓存最后已知的良好 `optionsH`。 | | |
| | 在测试此函数时，请经常[删除您的首选项](../../intro/debugging-plug-ins#deleting-preferences)。 | | |
| `AEIO_GetFlatOutputOptions` | 在 `AEIO_Handle` 中描述 `AEIO_OutSpecH` 的输出选项，以磁盘安全的扁平数据结构（不引用外部内存）。 | 输出 | 是 |
| | 请注意，您的输出选项必须是跨平台的，因此请注意字节顺序问题。 | | |
| | <pre lang="cpp">AEIO_GetFlatOutputOptions(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_Handle   \*optionsH);</pre> | | |
| `AEIO_DisposeOutputOptions` | 允许 `AEIO_Err_USE_DFLT_CALLBACK`。释放传入的输出选项的内存。 | 输出 | 否 |
| | <pre lang="cpp">AEIO_DisposeOutputOptions(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  void  \*optionsPV);</pre> | | |
| `AEIO_UserOptionsDialog` | 显示输出设置对话框（在 After Effects 中选择 TIFF 输出以查看此对话框何时出现）。 | 输出 | 否 |
| | 使用 `AEGP_SetInSpecOptionsHandle` 将此信息存储在选项句柄中。 | | |
| | <pre lang="cpp">AEIO_UserOptionsDialog(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  PF_EffectWorld  \*sample0,<br/>  A_Boolean   \*interacted0);</pre> | | |
| `AEIO_GetOutputInfo` | 以文本形式描述 `AEIO_OutSpecH` 中的输出选项。 | | |
| | <pre lang="cpp">AEIO_GetOutputInfo(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_Verbiage   \*verbiage);</pre> | | |
| `AEIO_OutputInfoChanged` | 根据当前设置更新 `AEIO_OutSpecH`（使用各种 Get 函数获取设置）。 | 输出 | 否 |
| | <pre lang="cpp">AEIO_OutputInfoChanged(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH);</pre> | | |
| `AEIO_SetOutputFile` | 允许 `AEIO_Err_USE_DFLT_CALLBACK`。为 `AEIO_OutSpecH` 设置输出文件路径。 | 输出 | 是 |
| | 除非你更改了路径，否则返回 `AEIO_Err_USE_DEFAULT_CALLBACK`。 | | |
| | 文件路径是一个以 NULL 结尾的 UTF-16 字符串，带有平台分隔符。 | | |
| | <pre lang="cpp">AEIO_SetOutputFile(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_UTF16Char   \*file_pathZ);</pre> | | |
| `AEIO_StartAdding` | 准备将帧添加到输出文件中。 | 输出 | 是，适用于支持多帧的写入格式 |
| | 这是创建磁盘上的输出文件并将任何头信息写入此类文件的好时机。这也是你第一次根据有效的输出规范值分配像素缓冲区的机会。 | | |
| | <pre lang="cpp">AEIO_StartAdding(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_long  flags);</pre> | | |
| `AEIO_AddFrame` | 将帧添加到输出文件中。你可以传递一个指向你希望在用户中断渲染时调用的函数的指针。 | 输出 | 是，适用于支持多帧的写入格式 |
| | <pre lang="cpp">AEIO_AddFrame(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_OutSpecH  outH,<br/>  A_long   frame_index,<br/>  A_long   frames,<br/>  PF_EffectWorld   \*wP,<br/>  const A_LPoint   \*origin0,<br/>  A_Boolean  was_compressedB,<br/>  AEIO_InterruptFuncs  \*inter0);</pre> | | |
| `AEIO_EndAdding` | 执行与添加帧相关的任何清理操作。 | 输出 | 是，适用于支持多帧的写入格式 |
| | <pre lang="cpp">AEIO_EndAdding(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_long  flags);</pre> | | |
| `AEIO_OutputFrame` | 输出单个帧。 | 输出 | 是，适用于支持单帧的写入格式 |
| | <pre lang="cpp">AEIO_OutputFrame(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  PF_EffectWorld  \*wP);</pre> | | |
| `AEIO_WriteLabels` | 允许 `AEIO_Err_USE_DFLT_CALLBACK`。为 `AEIO_OutSpecH` 设置 alpha 解释和字段使用信息。 | 输出 | 是 |
| | 在 `AEIO_LabelFlags` 中指示你写入了哪些标志。 | | |
| | <pre lang="cpp">AEIO_WriteLabels(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_OutSpecH  outH,<br/>  AEIO_LabelFlags  \*written);</pre> | | |
| `AEIO_GetSizes` | 允许 `AEIO_Err_USE_DFLT_CALLBACK`。提供有关文件大小和输出卷上剩余可用空间的信息。 | 输出 | 是 |
| | <pre lang="cpp">AEIO_GetSizes(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_u_longlong  \*free_space,<br/>  A_u_longlong  \*file_size);</pre> | | |
| `AEIO_Flush` | 销毁与 `OutSpecH` 相关的任何选项或用户数据。 | | |
| | <pre lang="cpp">AEIO_Flush(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH);</pre> | | |
| `AEIO_AddSoundChunk` | 将给定的声音添加到输出文件中。 | 输出 | 是，适用于带有音频的写入格式 |
| | <pre lang="cpp">AEIO_AddSoundChunk(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  const A_Time  \*start,<br/>  AEIO_SndWorldH  swH);</pre> | | |
| `AEIO_Idle` | 可选。在空闲时间执行某些操作。不支持 `AEIO_Err_USE_DFLT_CALLBACK`。 | 输出 | 否 |
| | <pre lang="cpp">AEIO_Idle(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_ModuleSignature  sig,<br/>  AEIO_IdleFlags  \*idle_flags0);</pre> | | |
| `AEIO_GetDepths` | 设置 `AEIO_OptionsFlags` 以指示哪些像素和颜色深度对你的输出格式有效。 | 输出 | 是 |
| | 请参阅 [导出位深度](../implementation-details#implementation-details) 的讨论。 | | |
| | <pre lang="cpp">AEIO_GetDepths(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_OutSpecH  outH,<br/>  AEIO_OptionsFlags  \*which);</pre> | | |
| `AEIO_GetOutputSuffix` | 允许 `AEIO_Err_USE_DFLT_CALLBACK`。描述输出文件的三字符扩展名。 | 输出 | 是 |
| | <pre lang="cpp">AEIO_GetOutputSuffix(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_char  \*suffix);</pre> | | |
| `AEIO_SeqOptionsDlg` | 显示素材选项对话框，并指示用户是否进行了任何更改。 | 输入 | 否 |
| | <pre lang="cpp">AEIO_SeqOptionsDlg(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_Boolean   \*interactedPB);</pre> | | |
| `AEIO_GetNumAuxChannels` | 枚举 `AEIO_InSpecH` 中包含的辅助（超出红、绿、蓝和 alpha）数据通道的数量。 | 输入 | 否 |
| | <pre lang="cpp">AEIO_GetNumAuxChannels(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_long  \*num_channelsPL);</pre> | | |
| `AEIO_GetAuxChannelDesc` | 描述辅助数据通道的数据类型、名称、通道和维度。 | 输入 | 否 |
| | <pre lang="cpp">AEIO_GetAuxChannelDesc(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  long  chan_indexL,<br/>  PF_ChannelDesc  \*descP);</pre> | | |
| `AEIO_DrawAuxChannel` | 从 `AEIO_InSpecH` 绘制辅助通道。 | | |
| | <pre lang="cpp">AEIO_DrawAuxChannel(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_long  chan_indexL,<br/>  const AEIO_DrawFramePB  \*pbP,<br/>  PF_ChannelChunk   \*chunkP);</pre> | | |
| `AEIO_FreeAuxChannel` | 释放与辅助通道相关的数据。 | 输入 | 否 |
| | <pre lang="cpp">AEIO_FreeAuxChannel(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_InSpecH   inH,<br/>  PF_ChannelChunk  \*chunkP);</pre> | | |
| `AEIO_Num` AuxFiles | 枚举渲染给定 `AEIO_InSpecH` 所需的文件。 | 输入 | 否 |
| | 当用户选择 `文件 > 依赖项 > 收集文件...` 时，将调用此函数和 `AEIO_GetNthAuxFileSpec`。在这里，你的 AEIO 告诉 AE 相关的文件是什么。 | | |
| | <pre lang="cpp">AEIO_NumAuxFiles(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  seqH,<br/>  A_long  \*files_per_framePL);</pre> | | |
| `AEIO_GetNthAuxFileSpec` | 从第 n 个辅助文件中检索指定帧的数据。 | 输入 | 否，如果没有辅助文件 |
| | 路径是一个指向以 NULL 结尾的 A_UTF16Char 字符串的句柄，必须使用 `AEGP_FreeMemHandle` 释放。 | | |
| | <pre lang="cpp">AEIO_GetNthAuxFileSpec(<br/>  AEIO_BasicData \*basic_dataP,<br/>  AEIO_InSpecH   seqH,<br/>  A_long   frame_numL,<br/>  A_long   n,<br/>  AEGP_MemHandle \*pathPH);</pre> | | |
| `AEIO_CloseSourceFiles` | 关闭（或打开，取决于 closeB）`AEIO_InSpecH` 的源文件。 | 输入 | 是 |
| | 当用户收集文件时，AEIO 将首先被要求关闭其源文件，然后重新打开它们。 | | |
| | <pre lang="cpp">AEIO_CloseSourceFiles(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  seqH,<br/>  A_Boolean   closeB);</pre> | | |
| | - `TRUE` 表示关闭 | | |
| | - `FALSE` 表示打开。 | | |
| `AEIO_CountUserData` | 枚举与 `AEIO_InSpecH` 相关的用户数据单元。 | | |
| | <pre lang="cpp">AEIO_CountUserData(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_u_long  typeLu,<br/>  A_u_long  max_sizeLu,<br/>  A_u_long  \*num_of_typePLu);</pre> | | |
| `AEIO_SetUserData` | 为给定的 `AEIO_OutSpecH` 设置用户数据（给定索引和类型）。 | 输出 | 否 |
| | <pre lang="cpp">AEIO_SetUserData(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_OutSpecH  outH,<br/>  A_u_long   typeLu,<br/>  A_u_long   indexLu,<br/>  const AEIO_Handle  dataH);</pre> | | |
| `AEIO_GetUserData` | 描述与 `AEIO_InSpecH` 相关的用户数据（给定索引和类型）。 | 输入 | 否 |
| | <pre lang="cpp">AEIO_GetUserData(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_u_long  typeLu,<br/>  A_u_long  indexLu,<br/>  A_u_long  max_sizeLu,<br/>  AEIO_Handle   \*dataPH);</pre> | | |
| `AEIO_AddMarker` | 将指定类型的标记与 `AEIO_OutSpecH` 关联到指定帧。 | 输出 | 否 |
| | 你可以提供一个中断函数来处理用户取消此操作的情况。 | | |
| | <pre lang="cpp">AEIO_AddMarker(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_OutSpecH  outH,<br/>  A_long   frame_index,<br/>  AEIO_MarkerType  marker_type,<br/>  void   \*marker_dataPV,<br/>  AEIO_InterruptFuncs  \*inter0);</pre> | | |
| `AEIO_VerifyFileImportable` | 通过设置 `importablePB` 指示插件是否可以导入文件。 | 输入 | 否 |
| | 请注意，After Effects 已经完成了基本的扩展检查；你可能希望打开文件并确定它是否有效。 | | |
| | 这可能是一个耗时的过程；大多数随 After Effects 一起发布的 AEIO 只是返回 TRUE，并在 `AEIO_InitInSpecFromFile` 期间处理坏文件。 | | |
| | 文件路径是一个以 NULL 结尾的 UTF-16 字符串，带有平台分隔符。 | | |
| | <pre lang="cpp">AEIO_VerifyFileImportable(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_ModuleSignature  sig,<br/>  const A_UTF16Char   \*file_pathZ,<br/>  A_Boolean   \*importablePB);</pre> | | |
| `AEIO_UserAudioOptionsDialog` | 显示音频选项对话框。 | 输出 | 否 |
| | <pre lang="cpp">AEIO_UserAudioOptionsDialog(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_Boolean   \*interacted0);</pre> | | |
| `AEIO_AddMarker3` | 添加一个标记，并带有一个标志，指示这是否是一个合成标记。 | 输出 | 否 |
| | <pre lang="cpp">AEIO_AddMarker3(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_OutSpecH  outH,<br/>  A_long   frame_index,<br/>  AEGP_ConstMarkerValP   marker_valP,<br/>  AEIO_RenderMarkerFlag  marker_flag,<br/>  AEIO_InterruptFuncs  \*inter0);</pre> | | |
| `AEIO_GetMimeType` | 描述输出的 MIME 类型。用于 XMP 支持。 | 输出 | 否 |
| | <pre lang="cpp">AEIO_GetMimeType(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_long  mime_type_sizeL,<br/>  char  \*mime_typeZ);</pre> | | |

---

## 输入管理

这些函数管理输入规范，即 After Effects 内部表示从任何来源收集的数据的方式。

After Effects 中的任何图像或音频数据（除了纯色）都是从输入规范句柄（`AEIO_InSpecH`）中获取的。

### AEGP_IOInSuite5

| 函数 | 用途 |
|---|---|
| `AEGP_GetInSpecOptionsHandle` | 获取给定 `AEIO_InSpecH` 的选项数据（由您的 AEIO 创建）。 |
| | <pre lang="cpp">AEGP_GetInSpecOptionsHandle(<br/>  AEIO_InSpecH  inH,<br/>  void  \*optionsPPV);</pre> |
| `AEGP_SetInSpecOptionsHandle` | 设置给定 `AEIO_InSpecH` 的选项数据。 |
| | 必须使用 [Memory Suite](../../aegps/aegp-suites#aegp_memorysuite1) 分配。 |
| | <pre lang="cpp">AEGP_SetInSpecOptionsHandle(<br/>  AEIO_InSpecH  inH,<br/>  void  \*optionsPV,<br/>  void  \*old_optionsPPV);</pre> |
| `AEGP_GetInSpecFilePath` | 获取 `AEIO_InSpecH` 的文件路径。 |
| | 文件路径是一个指向以 NULL 结尾的 A_UTF16Char 字符串的句柄，必须使用 `AEGP_FreeMemHandle` 释放。 |
| | <pre lang="cpp">AEGP_GetInSpecFilePath(<br/>  AEIO_InSpecH  inH,<br/>  AEGP_MemHandle  \*file_nameZ);</pre> |
| `AEGP_GetInSpecNativeFPS` | 获取 `AEIO_InSpecH` 的帧率。 |
| | <pre lang="cpp">AEGP_GetInSpecNativeFPS(<br/>  AEIO_InSpecH  inH,<br/>  A_Fixed   \*native_fpsP);</pre> |
| `AEGP_SetInSpecNativeFPS` | 设置 `AEIO_InSpecH` 的帧率。 |
| | <pre lang="cpp">AEGP_SetInSpecNativeFPS(<br/>  AEIO_InSpecH  inH,<br/>  A_Fixed   native_fpsP);</pre> |
| `AEGP_GetInSpecDepth` | 获取 `AEIO_InSpecH` 中图像数据的位深度。 |
| | <pre lang="cpp">AEGP_GetInSpecDepth(<br/>  AEIO_InSpecH  inH,<br/>  A_short   \*depthPS);</pre> |
| `AEGP_SetInSpecDepth` | 向 After Effects 指示 `AEIO_InSpecH` 中图像数据的位深度。 |
| | <pre lang="cpp">AEGP_SetInSpecDepth(<br/>  AEIO_InSpecH  inH,<br/>  A_short   depthS);</pre> |
| `AEGP_GetInSpecSize` | 获取 `AEIO_InSpecH` 引用的数据的大小（以字节为单位）。 |
| | <pre lang="cpp">AEGP_GetInSpecSize(<br/>  AEIO_InSpecH   inH,<br/>  AEIO_FileSize  \*sizePLLu);</pre> |
| `AEGP_SetInSpecSize` | 向 After Effects 指示 `AEIO_InSpecH` 引用的数据的大小（以字节为单位）。 |
| | <pre lang="cpp">AEGP_SetInSpecSize(<br/>  AEIO_InSpecH   inH,<br/>  AEIO_FileSize  sizeL);</pre> |
| `AEGP_GetInSpecInterlaceLabel` | 获取 `AEIO_InSpecH` 的场信息。 |
| | <pre lang="cpp">AEGP_GetInSpecInterlaceLabel(<br/>  AEIO_InSpecH  inH,<br/>  FIEL_Label  \*interlaceP);</pre> |
| `AEGP_SetInSpecInterlaceLabel` | 指定 `AEIO_InSpecH` 的场信息。 |
| | <pre lang="cpp">AEGP_SetInSpecInterlaceLabel(<br/>  AEIO_InSpecH  inH,<br/>  const FIEL_Label  \*interlaceP);</pre> |
| `AEGP_GetInSpecAlphaLabel` | 获取 `AEIO_InSpecH` 的 Alpha 通道解释信息。 |
| | <pre lang="cpp">AEGP_GetInSpecAlphaLabel(<br/>  AEIO_InSpecH   inH,<br/>  AEIO_AlphaLabel  \*alphaP);</pre> |
| `AEGP_SetInSpecAlphaLabel` | 设置 `AEIO_InSpecH` 的 Alpha 通道解释信息。 |
| | <pre lang="cpp">AEGP_SetInSpecAlphaLabel(<br/>  AEIO_InSpecH   inH,<br/>  const AEIO_AlphaLabel* alphaP);</pre> |
| `AEGP_GetInSpecDuration` | 获取 `AEIO_InSpecH` 的持续时间。 |
| | <pre lang="cpp">AEGP_GetInSpecDuration(<br/>  AEIO_InSpecH  inH,<br/>  A_Time  \*durationP);</pre> |
| `AEGP_SetInSpecDuration` | 设置 `AEIO_InSpecH` 的持续时间。 |
| | !!! 注意 |
| | 从 5.5 版本开始，即使对于基于帧的文件格式，也必须调用此函数。 |
| | 如果您没有将 `A_Time.scale` 设置为非零值，您的文件将无法导入。 |
| | 此问题将在未来的版本中修复。 |
| | <pre lang="cpp">AEGP_SetInSpecDuration(<br/>  AEIO_InSpecH  inH,<br/>  const A_Time  \*durationP);</pre> |
| `AEGP_GetInSpecDimensions` | 获取 `AEIO_InSpecH` 中图像数据的宽度和高度。 |
| | <pre lang="cpp">AEGP_GetInSpecDimensions(<br/>  AEIO_InSpecH  inH,<br/>  A_long  \*widthPL0,<br/>  A_long  \*heightPL0);</pre> |
| `AEGP_SetInSpecDimensions` | 向 After Effects 指示 `AEIO_InSpecH` 中图像数据的宽度和高度。 |
| | <pre lang="cpp">AEGP_SetInSpecDimensions(<br/>  AEIO_InSpecH  inH,<br/>  A_long  widthL,<br/>  A_long  heightL);</pre> |
| `AEGP_InSpecGetRational` Dimensions | 获取应用于 `AEIO_InSpecH` 的宽度、高度、边界矩形和缩放因子。 |
| | <pre lang="cpp">AEGP_InSpecGetRationalDimensions(<br/>  AEIO_InSpecH  inH,<br/>  const AEIO_RationalScale  \*rs0,<br/>  A_long  \*width0,<br/>  A_long  \*height0,<br/>  A_Rect  \*r0);</pre> |
| `AEGP_GetInSpecHSF` | 获取应用于 `AEIO_InSpecH` 的水平缩放因子。 |
| | <pre lang="cpp">AEGP_GetInSpecHSF(<br/>  AEIO_InSpecH  inH,<br/>  A_Ratio   \*hsf);</pre> |
| `AEGP_SetInSpecHSF` | 设置 `AEIO_InSpecH` 的水平缩放因子。 |
| | <pre lang="cpp">AEGP_SetInSpecHSF(<br/>  AEIO_InSpecH   inH,<br/>  const A_Ratio  \*hsf);</pre> |
| `AEGP_GetInSpecSoundRate` | 获取 `AEIO_InSpecH` 引用的音频数据的采样率（每秒采样数）。 |
| | <pre lang="cpp">AEGP_GetInSpecSoundRate(<br/>  AEIO_InSpecH  inH,<br/>  A_FpLong  \*ratePF);</pre> |
| `AEGP_SetInSpecSoundRate` | 设置 `AEIO_InSpecH` 引用的音频数据的采样率（每秒采样数）。 |
| | <pre lang="cpp">AEGP_SetInSpecSoundRate(<br/>  AEIO_InSpecH  inH,<br/>  A_FpLong  rateF);</pre> |
| `AEGP_GetInSpecSoundEncoding` | 从 `AEIO_InSpecH` 获取编码方法（有符号 PCM、无符号 PCM 或浮点数）。 |
| | <pre lang="cpp">AEGP_GetInSpecSoundEncoding(<br/>  AEIO_InSpecH  inH,<br/>  AEIO_SndEncoding  \*encodingP);</pre> |
| `AEGP_SetInSpecSoundEncoding` | 设置 `AEIO_InSpecH` 的编码方法。 |
| | <pre lang="cpp">AEGP_SetInSpecSoundEncoding(<br/>  AEIO_InSpecH  inH,<br/>  AEIO_SndEncoding  encoding);</pre> |
| `AEGP_GetInSpecSoundSampleSize` | 从 `AEIO_InSpecH` 获取每样本字节数（1、2 或 4）。 |
| | <pre lang="cpp">AEGP_GetInSpecSoundSampleSize(<br/>  AEIO_InSpecH  inH,<br/>  AEIO_SndSampleSize  \*bytes_per_smpP);</pre> |
| `AEGP_SetInSpecSoundSampleSize` | 设置 `AEIO_InSpecH` 的每样本字节数。 |
| | <pre lang="cpp">AEGP_SetInSpecSoundSampleSize(<br/>  AEIO_InSpecH  inH,<br/>  AEIO_SndSampleSize  bytes_per_sample);</pre> |
| `AEGP_GetInSpecSoundChannels` | 确定 `AEIO_SndChannels` 中的音频是单声道还是立体声。 |
| | <pre lang="cpp">AEGP_GetInSpecSoundChannels(<br/>  AEIO_InSpecH  inH,<br/>  AEIO_SndChannels  \*num_channelsP);</pre> |
| `AEGP_SetInSpecSoundChannels` | 将 `AEIO_SndChannels` 中的音频设置为单声道或立体声。 |
| | <pre lang="cpp">AEGP_SetInSpecSoundChannels(<br/>  AEIO_InSpecH  inH,<br/>  AEIO_SndChannels  num_channels);</pre> |
| `AEGP_AddAuxExtMap` | 如果您的文件格式有辅助文件，并且您希望防止用户直接打开这些文件，请将其扩展名、文件类型和创建者传递给此函数，以防止其出现在输入对话框中。 |
| | <pre lang="cpp">AEGP_AddAuxExtMap(<br/>  const A_char  \*extension,<br/>  A_long  file_type,<br/>  A_long  creator);</pre> |
| `AEGP_SetInSpecEmbeddedColorProfile` | 对于 RGB 数据，如果存在嵌入的 icc 配置文件，请使用 [AEGP_ColorSettingsSuite5](../../aegps/aegp-suites#aegp_colorsettingssuite5) 中的 `AEGP_GetNewColorProfileFromICCProfile` 从此 icc 配置文件中构建 `AEGP_ColorProfile`，并将配置文件描述设置为 NULL。 |
| | 对于非 RGB 数据，如果存在嵌入的非 RGB icc 配置文件，或者您知道数据的颜色空间，请将颜色配置文件设置为 NULL，并将描述作为以 NULL 结尾的 Unicode 字符串提供。这样做会禁用允许用户在应用程序 UI 中影响配置文件选择的颜色管理 UI。 |
| | 如果您直接将非 RGB 数据解包到工作空间（使用 `AEGP_GetNewWorkingSpaceColorProfile` 获取工作空间），则已完成。 |
| | 如果您将非 RGB 数据解包到特定的 RGB 颜色空间，则必须将描述此空间的配置文件传递给下面的 `AEGP_SetInSpecAssignedColorProfile`。否则，您的 RGB 数据将被错误地解释为在工作空间中。 |
| | 在此函数中，颜色配置文件或配置文件描述应为 NULL。不能同时使用两者。 |
| | <pre lang="cpp">AEGP_SetInSpecEmbeddedColorProfile(<br/>  AEIO_InSpecH   inH,<br/>  AEGP_ConstColorProfileP  color_profileP0,<br/>  const A_UTF16Char  \*profile_descP0);</pre> |
| `AEGP_SetInSpecAssignedColorProfile` | 为素材分配有效的 RGB 颜色配置文件。 |
| | <pre lang="cpp">AEGP_SetInSpecAssignedColorProfile(<br/>  AEIO_InSpecH   inH,<br/>  AEGP_ConstColorProfileP  color_profileP);</pre> |
| `AEGP_GetInSpecNativeStartTime` | 新增于 CC。获取素材的本地起始时间。 |
| | <pre lang="cpp">AEGP_GetInSpecNativeStartTime(<br/>  AEIO_InSpecH  inH,<br/>  A_Time  \*startTimeP);</pre> |
| `AEGP_SetInSpecNativeStartTime` | 新增于 CC。为素材分配本地起始时间。 |
| | <pre lang="cpp">AEGP_SetInSpecNativeStartTime(<br/>  AEIO_InSpecH  inH,<br/>  const A_Time  \*startTimeP);</pre> |
| `AEGP_ClearInSpecNativeStartTime` | 新增于 CC。清除素材的本地起始时间。 |
| | 使用 `AEGP_SetInSpecNativeStartTime` 将本地起始时间设置为 0 并不能实现此功能。 |
| | 这仍然意味着提供了特殊的本地起始时间。 |
| | <pre lang="cpp">AEGP_ClearInSpecNativeStartTime(<br/>  AEIO_InSpecH  inH);</pre> |
| `AEGP_GetInSpecNativeDisplayDropFrame` | 新增于 CC。获取素材的丢帧设置。 |
| | <pre lang="cpp">AEGP_GetInSpecNativeDisplayDropFrame(<br/>  AEIO_InSpecH  inH,<br/>  A_Boolean   \*displayDropFrameBP);</pre> |
| `AEGP_SetInSpecNativeDisplayDropFrame` | 新增于 CC。设置素材的丢帧设置。 |
| | <pre lang="cpp">AEGP_SetInSpecNativeDisplayDropFrame(<br/>  AEIO_InSpecH  inH,<br/>  A_Boolean   displayDropFrameB);</pre> |

---

## 输出管理

这些函数管理 After Effects 渲染队列中与输出规范相关的所有交互。

### AEGPIOOutSuite4

| 函数 | 用途 |
|---|---|
| `AEGP_GetOutSpecOptionsHandle` | 获取 `AEIO_OutSpecH` 的选项。 |
| | <pre lang="cpp">AEGP_GetOutSpecOptionsHandle(<br/>  AEIO_OutSpecH  outH,<br/>  void   \*optionsPPV);</pre> |
| `AEGP_SetOutSpecOptionsHandle` | 设置 `AEIO_OutSpecH` 的选项。 |
| | <pre lang="cpp">AEGP_SetOutSpecOptionsHandle(<br/>  AEIO_OutSpecH  outH,<br/>  void   \*optionsPV,<br/>  void   \*old_optionsPPV);</pre> |
| `AEGP_GetOutSpecFilePath` | 获取 `AEIO_OutSpecH` 的文件路径。 |
| | 文件路径是一个指向以 NULL 结尾的 A_UTF16Char 字符串的句柄，必须使用 `AEGP_FreeMemHandle` 释放。 |
| | 如果 `file_rsrvdPB` 返回 `TRUE`，插件不应覆盖它（After Effects 已经创建了一个空文件）；这样做可能会导致网络渲染失败。 |
| | <pre lang="cpp">AEGP_GetOutSpecFilePath(<br/>  AEIO_OutSpecH   outH,<br/>  AEGP_MemHandle  \*unicode_pathPH,<br/>  A_Boolean   \*file_rsrvdPB);</pre> |
| `AEGP_GetOutSpecFPS` | 获取 `AEIO_OutSpecH` 的帧率。 |
| | <pre lang="cpp">AEGP_GetOutSpecFPS(<br/>  AEIO_OutSpecH  outH,<br/>  A_Fixed  \*native_fpsP);</pre> |
| `AEGP_SetOutSpecNativeFPS` | 设置 `AEIO_OutSpecH` 的帧率。 |
| | <pre lang="cpp">AEGP_SetOutSpecNativeFPS(<br/>  AEIO_OutSpecH  outH,<br/>  A_Fixed  native_fpsP);</pre> |
| `AEGP_GetOutSpecDepth` | 获取 `AEIO_OutSpecH` 的像素位深度。 |
| | <pre lang="cpp">AEGP_GetOutSpecDepth(<br/>  AEIO_OutSpecH  outH,<br/>  A_short  \*depthPS);</pre> |
| `AEGP_SetOutSpecDepth` | 设置 `AEIO_OutSpecH` 的像素位深度。 |
| | <pre lang="cpp">AEGP_SetOutSpecDepth(<br/>  AEIO_OutSpecH  outH,<br/>  A_short  depthPS);</pre> |
| `AEGP_GetOutSpecInterlaceLabel` | 获取 `AEIO_OutSpecH` 的场信息。 |
| | <pre lang="cpp">AEGP_GetOutSpecInterlaceLabel(<br/>  AEIO_OutSpecH  outH,<br/>  FIEL_Label   \*interlaceP);</pre> |
| `AEGP_SetOutSpecInterlaceLabel` | 设置 `AEIO_OutSpecH` 的场信息。 |
| | <pre lang="cpp">AEGP_SetOutSpecInterlaceLabel(<br/>  AEIO_OutSpecH   outH,<br/>  const FIEL_Label  \*interlaceP);</pre> |
| `AEGP_GetOutSpecAlphaLabel` | 获取 `AEIO_OutSpecH` 的 Alpha 解释信息。 |
| | <pre lang="cpp">AEGP_GetOutSpecAlphaLabel(<br/>  AEIO_OutSpecH  outH,<br/>  AEIO_AlphaLabel  \*alphaP);</pre> |
| `AEGP_SetOutSpecAlphaLabel` | 设置 `AEIO_OutSpecH` 的 Alpha 解释。 |
| | <pre lang="cpp">AEGP_SetOutSpecAlphaLabel(<br/>  AEIO_OutSpecH  outH,<br/>  const AEIO_AlphaLabel  \*alphaP);</pre> |
| `AEGP_GetOutSpecDuration` | 获取 `AEIO_OutSpecH` 的持续时间。 |
| | <pre lang="cpp">AEGP_GetOutSpecDuration(<br/>  AEIO_OutSpecH  outH,<br/>  A_Time   \*durationP);</pre> |
| `AEGP_SetOutSpecDuration` | 设置 `AEIO_OutSpecH` 的持续时间。 |
| | <pre lang="cpp">AEGP_SetOutSpecDuration(<br/>  AEIO_OutSpecH  outH,<br/>  const A_Time   \*durationP);</pre> |
| `AEGP_GetOutSpecDimensions` | 获取 `AEIO_OutSpecH` 的尺寸。 |
| | <pre lang="cpp">AEGP_GetOutSpecDimensions(<br/>  AEIO_OutSpecH  outH,<br/>  A_long   \*widthPL0,<br/>  A_long   \*heightPL0);</pre> |
| `AEGP_GetOutSpecHSF` | 获取 `AEIO_OutSpecH` 的水平缩放因子。 |
| | <pre lang="cpp">AEGP_GetOutSpecHSF(<br/>  AEIO_OutSpecH  outH,<br/>  A_Ratio  \*hsf);</pre> |
| `AEGP_SetOutSpecHSF` | 设置 `AEIO_OutSpecH` 的水平缩放因子。 |
| | <pre lang="cpp">AEGP_SetOutSpecHSF(<br/>  AEIO_OutSpecH  outH,<br/>  const A_Ratio  \*hsf);</pre> |
| `AEGP_GetOutSpecSoundRate` | 获取 `AEIO_OutSpecH` 的采样率。 |
| | <pre lang="cpp">AEGP_GetOutSpecSoundRate(<br/>  AEIO_OutSpecH  outH,<br/>  A_FpLong   \*ratePF);</pre> |
| `AEGP_SetOutSpecSoundRate` | 设置 `AEIO_OutSpecH` 的采样率。 |
| | <pre lang="cpp">AEGP_SetOutSpecSoundRate(<br/>  AEIO_OutSpecH  outH,<br/>  A_FpLong   rateF);</pre> |
| `AEGP_GetOutSpecSoundEncoding` | 获取 `AEIO_OutSpecH` 的声音编码格式。 |
| | <pre lang="cpp">AEGP_GetOutSpecSoundEncoding(<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_SndEncoding  \*encodingP);</pre> |
| `AEGP_SetOutSpecSoundEncoding` | 设置 `AEIO_OutSpecH` 的声音编码格式。 |
| | <pre lang="cpp">AEGP_SetOutSpecSoundEncoding(<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_SndEncoding  encoding);</pre> |
| `AEGP_GetOutSpecSoundSampleSize` | 获取 `AEIO_OutSpecH` 的每样本字节数。 |
| | <pre lang="cpp">AEGP_GetOutSpecSoundSampleSize(<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_SndSampleSize  \*bpsP);</pre> |
| `AEGP_SetOutSpecSoundSampleSize` | 设置 `AEIO_OutSpecH` 的每样本字节数。 |
| | <pre lang="cpp">AEGP_SetOutSpecSoundSampleSize(<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_SndSampleSize  bpsP);</pre> |
| `AEGP_GetOutSpecSoundChannels` | 获取 `AEIO_OutSpecH` 的声音通道数。 |
| | <pre lang="cpp">AEGP_GetOutSpecSoundChannels(<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_SndChannels  \*channelsP);</pre> |
| `AEGP_SetOutSpecSoundChannels` | 设置 `AEIO_OutSpecH` 的声音通道数。 |
| | <pre lang="cpp">AEGP_SetOutSpecSoundChannels(<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_SndChannels  channels);</pre> |
| `AEGP_GetOutSpecIsStill` | 判断 `AEIO_OutSpecH` 是否为静态图像。 |
| | <pre lang="cpp">AEGP_GetOutSpecIsStill(<br/>  AEIO_OutSpecH  outH,<br/>  A_Boolean  \*is_stillPB);</pre> |
| `AEGP_GetOutSpecPosterTime` | 获取 `AEIO_OutSpecH` 的海报帧时间。 |
| | <pre lang="cpp">AEGP_GetOutSpecPosterTime(<br/>  AEIO_OutSpecH  outH,<br/>  A_Time   \*poster_timeP);</pre> |
| `AEGP_GetOutSpecStartFrame` | 获取 `AEIO_OutSpecH` 的第一帧时间。 |
| | <pre lang="cpp">AEGP_GetOutSpecStartFrame(<br/>  AEIO_OutSpecH  outH,<br/>  A_long   \*start_frameP);</pre> |
| `AEGP_GetOutSpecPullDown` | 获取 `AEIO_OutSpecH` 的下拉相位。 |
| | <pre lang="cpp">AEGP_GetOutSpecPullDown(<br/>  AEIO_OutSpecH  outH,<br/>  AEIO_Pulldown  \*pulldownP);</pre> |
| `AEGP_GetOutSpecIsMissing` | 如果没有 `AEIO_OutSpecH`，则返回 TRUE。 |
| | <pre lang="cpp">AEGP_GetOutSpecIsMissing(<br/>  AEIO_OutSpecH  outH,<br/>  A_Boolean  \*missingPB);</pre> |
| `AEGP_GetOutSpecShouldEmbedICCProfile` | 如果 AEIO 应在输出中嵌入颜色配置文件，则返回 TRUE。 |
| | <pre lang="cpp">AEGP_GetOutSpecShouldEmbedICCProfile(<br/>  AEIO_OutSpecH  outH,<br/>  A_Boolean  \*embedPB);</pre> |
| `AEGP_GetNewOutSpecColorProfile` | 返回一个（不透明的）ICC 颜色配置文件，用于嵌入到 AEIO 的输出中。 |
| | 必须使用 `AEGP_DisposeColorProfile` 释放。 |
| | <pre lang="cpp">AEGP_GetNewOutSpecColorProfile(<br/>  AEGP_PluginID   aegp_plugin_id,<br/>  AEIO_OutSpecH   outH,<br/>  AEGP_ColorProfileP  \*color_profilePP);</pre> |
| `AEGP_GetOutSpecOutputModule` | 返回与给定 `AEIO_OutSpecH` 关联的 `AEGP_RQItemRefH` 和 `AEGP_OutputModuleRefH`。 |
| | 如果未找到渲染队列项，或者 `AEIO_OutSpecH` 不是已确认的 outH 并且是副本（即如果输出模块设置对话框已打开且用户尚未点击确定），则失败。 |
| | <pre lang="cpp">AEGP_GetOutSpecOutputModule(<br/>  AEIO_OutSpecH  outH,<br/>  AEGP_RQItemRefH  \*rq_itemP,<br/>  AEGP_OutputModuleRefH  \*om_refP);</pre> |
