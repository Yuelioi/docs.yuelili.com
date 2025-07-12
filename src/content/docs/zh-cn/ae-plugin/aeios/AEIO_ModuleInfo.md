---
title: AEIO_ModuleInfo
---
# AEIO_ModuleInfo

这是您的 AEIO 定义其基本属性的结构。

请注意，除了描述您的 AEIO 支持的文件类型和扩展名外，您还使用 `AEIO_ModuleFlags` 描述您的签名和行为。我们喜欢标志。

---

## AEIO_ModuleInfo 成员

| 成员 | 用途 |
|---|---|
| `sig` | 一个长整型，用于唯一标识您的插件。 |
| | 许多开发者更喜欢在这里使用明确的 Mac 风格的四字符代码。 |
| | 请[告诉我们](mailto:zlam@adobe.com)您使用的签名。 |
| `name` | 您的 AEIO 插件的描述性名称。 |
| `flags` | `AEIO_ModuleFlags` 的集合。 |
| `flags2` | `AEIO_ModuleFlags2` 的集合。 |
| `max_width`, `max_height` | 您的格式支持的最大尺寸。 |
| `num_filetypes` | 您的 AEIO 支持的文件类型数量。 |
| `num_extensions` | 您的 AEIO 支持的文件扩展名数量。 |
| `num_clips` | 您的 AEIO 支持的剪贴板格式数量。 |
| `create_kind` | 您的 AEIO 创建的文件在 macOS 上的四字符代码。 |
| `create_ext` | 您的 AEIO 创建的文件扩展名。 |
| `read_kinds` | 这个包含 16 个 `AEIO_FileKinds` 的数组不需要完全填充，但前 `[num_filetypes + num_extensions + num_clips]` 个必须按顺序填充。 |
| `num_aux_extensions` | 您的 AEIO 支持的辅助扩展名数量。 |
| | 例如，假设您正在编写一个 AEIO 以从 3D 程序中导入信息，该程序将场景信息保存到 .123 文件中，并将相机信息保存到 .xyz 文件中。 |
| | .xyz 将是一个辅助扩展名；它不是获取其余场景信息所必需的，但它与 .123 文件相关联。 |
| `aux_ext` | 您的 AEIO 支持的辅助文件类型的文件扩展名。 |

---

## 行为标志

AEIO 在 `AEIO_ModuleInfo.flags` 中设置这些标志（就像效果插件使用全局输出标志一样），以向 After Effects 指示其行为。一些标志仅与输入相关，一些仅与输出相关。

### AEIO_ModuleFlags

| 标志 | 用途 | 输入或输出？ |
|---|---|---|
| `AEIO_MFlag_INPUT` | AEIO 是一个输入模块。 | 输入！ |
| `AEIO_MFlag_OUTPUT` | AEIO 是一个输出模块（一个插件可以同时是两者）。 | 输出！ |
| `AEIO_MFlag_FILE` | 每个直接导入的剪辑都对应于某个文件。 | 两者 |
| `AEIO_MFlag_STILL` | 支持静态图像，不支持视频。 | 输出 |
| `AEIO_MFlag_VIDEO` | 支持视频图像，不支持静态图像。 | 输出 |
| `AEIO_MFlag_AUDIO` | 支持音频。 | 输出 |
| `AEIO_MFlag_NO_TIME` | 时间信息不是文件格式的一部分。 | 输入 |
| | 这适用于编号的静态图像，根据合成的时间设置导入单个帧。 | |
| `AEIO_MFlag_INTERACTIVE_GET` | 新的输入序列需要用户交互。 | 输入 |
| | 这适用于非基于文件的输入模块。 | |
| `AEIO_MFlag_INTERACTIVE_PUT` | 新的输出序列需要用户交互。 | 输出 |
| | 这适用于非基于文件的输出模块。 | |
| `AEIO_MFlag_CANT_CLIP` | AEIO 的绘图函数不能接受小于请求尺寸的尺寸。 | 输入 |
| `AEIO_MFlag_MUST_INTERACT_PUT` | AEIO 必须显示一个对话框，即使有有效的选项数据句柄可用。 | 输出 |
| `AEIO_MFlag_CANT_SOUND_INTERLEAVE` | AEIO 要求先处理所有视频数据，然后再处理音频数据（而不是交错处理视频和音频）。 | 输出 |
| `AEIO_MFlag_CAN_ADD_FRAMES_NON_LINEAR` | AEIO 支持添加非顺序帧。 | 输出 |
| `AEIO_MFlag_HOST_DEPTH_DIALOG` | AEIO 希望 After Effects 显示位深度选择对话框。 | 输入 |
| `AEIO_MFlag_HOST_FRAME_START_DIALOG` | AEIO 希望 After Effects 显示一个对话框，要求用户指定起始帧。 | 输入 |
| `AEIO_MFlag_NO_OPTIONS` | AEIO 不接受输出选项。 | 输出 |
| `AEIO_MFlag_NO_PIXELS` | AEIO 的文件格式实际上不存储像素。截至 CS6 未使用。 | （未使用） |
| `AEIO_MFlag_SEQUENCE_OPTIONS_OK` | 如果选择了文件夹，AEIO 将采用其父级的序列选项。 | 输入 |
| `AEIO_MFlag_INPUT_OPTIONS` | AEIO 具有与每个输入序列关联的用户选项。 | 输入 |
| | !!! 注意 | |
| | 选项信息必须是平面的（不引用外部指针或句柄中包含的任何数据）。 | |
| `AEIO_MFlag_HSF_AWARE` | AEIO 将为每个新序列提供水平缩放因子（像素宽高比）信息。 | 输入 |
| | 这可以防止 After Effects 猜测。 | |
| `AEIO_MFlag_HAS_LAYERS` | AEIO 支持单个文档中的多个图层。 | 输入 |
| `AEIO_MFlag_SCRAP` | AEIO 具有剪贴板解析组件。 | 输入 |
| `AEIO_MFlag_NO_UI` | After Effects 不应为此模块显示 UI | 输入 |
| | （不要将此标志与 `AEIO_MFlag_HOST_DEPTH_DIALOG` 或 `AEIO_MFlag_HOST_FRAME_START_DIALOG` 结合使用） | |
| `AEIO_MFlag_SEQ_OPTIONS_DLG` | AEIO 具有可从“解释素材”对话框中的“更多选项”按钮访问的序列选项。 | 输入 |
| `AEIO_MFlag_HAS_AUX_DATA` | AEIO 支持的文件格式具有深度信息、法线或与每个像素相关的其他非颜色信息。 | 输入 |
| `AEIO_MFlag_HAS_META_DATA` | AEIO 支持的文件格式支持用户可定义的元数据。 | 输出 |
| | 如果设置了此标志，输出模块对话框中的嵌入弹出窗口将启用。 | |
| `AEIO_MFlag_CAN_DO_MARKERS` | AEIO 支持的文件格式支持标记、URL 翻转和/或章节。 | 输出 |
| `AEIO_MFlag_CAN_DRAW_DEEP` | AEIO 可以绘制到 16bpc（“深”）的 `PF_EffectWorlds` 中。 | 输入 |
| `AEIO_MFlag_RESERVED4` | 特殊的超级秘密标志。它什么都不做……还是做了？ | ??? |
| | (*不，它没有。*) | |

### AEIO_ModuleFlags2

必须有这些标志...

| 标志 | 用途 | 输入或输出？ |
| --- | --- | --- |
| `AEIO_MFlag2_AUDIO_OPTIONS` | AEIO 具有音频选项对话框。 | 输出 |
| `AEIO_MFlag2_SEND_ADDMARKER_BEFORE_ADDFRAME` | AEIO 希望在输出视频或音频之前接收标记数据（对 MPEG 流有用）。 | 输出 |
| `AEIO_MFlag2_CAN_DO_MARKERS_2` | AEIO 支持组合标记；URL 翻转、章节和注释。 | 输出 |
| `AEIO_MFlag2_CAN_DRAW_FLOAT` | AEIO 可以绘制到浮点（32-bpc）世界中。 | 输入 |
| `AEIO_MFlag2_CAN_DO_AUDIO_32` | 支持 32 位音频输出。 | 输出 |
| `AEIO_MFlag2_SUPPORTS_ICC_PROFILES` | 支持 ICC 配置文件。 | 两者 |
| `AEIO_MFlag2_CAN_DO_MARKERS_3` | AEIO 支持组合标记；URL 翻转、章节、注释和提示点。 | 输出 |
| `AEIO_MFlag2_SEND_ADDMARKER_BEFORE_STARTADDING` | AEIO 希望在导出期间在视频之前处理标记。 | 输出 |
| `AEIO_MFlag2_USES_QUICKTIME` | 在 MacOS 上，主机在从 [AEIO_FunctionBlock4](../new-kids-on-the-function-block#aeio_functionblock4) 调用 `AEIO_AddFrame` 或 `AEIO_OutputFrame` 之前，将锁定全局 QuickTime 互斥锁。 | 输出 |
