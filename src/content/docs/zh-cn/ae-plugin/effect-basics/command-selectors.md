---
title: 命令选择器
---
# 命令选择器

命令是 After Effects 希望你的效果执行的操作。

某些选择器的响应是必需的；大多数是可选的，但请记住，我们添加它们是有*原因*的...

每次发送命令选择器时，效果会从 After Effects 接收 [PF_InData](../PF_InData#pf_indata) 中的信息，输入和参数值在 PF_ParamDef[]（一个包含输入层的参数描述数组）中，并访问回调和功能套件。

它们通过 [PF_OutData](../PF_OutData#pf_outdata) 将信息发送回 After Effects，并在适当的时候将渲染输出发送到 PF_LayerDef，也称为 [PF_EffectWorld](../PF_EffectWorld)。

在事件期间，它们会在 [PF_EventExtra](../../effect-ui-events/PF_EventExtra) 中接收特定事件的信息。

---

## 调用顺序

只有前几个命令选择器是可预测的；其余的调用顺序由用户操作决定。

当首次应用时，插件会收到 `PF_Cmd_GLOBAL_SETUP`，然后是 `PF_Cmd_PARAM_SETUP`。每次用户将效果添加到图层时，都会发送 `PF_Cmd_SEQUENCE_SETUP`。

对于每个由基本非 SmartFX 效果渲染的帧，After Effects 会发送 `PF_Cmd_FRAME_SETUP`，然后是 `PF_Cmd_RENDER`，接着是 `PF_Cmd_FRAME_SETDOWN`。

所有效果插件都必须响应 `PF_Cmd_RENDER`。

对于 SmartFX，`PF_Cmd_SMART_PRE_RENDER` 可能会被发送任意次数，然后才会发送一次 `PF_Cmd_SMART_RENDER`。

`PF_Cmd_SEQUENCE_SETDOWN` 在退出时发送，当用户移除效果或关闭项目时。`PF_Cmd_SEQUENCE_RESETUP` 在项目加载或应用效果的图层发生变化时发送。`PF_Cmd_SEQUENCE_FLATTEN` 在 After Effects 项目写入磁盘时发送。

`PF_Cmd_ABOUT` 在用户从效果控制窗口（ECW）中选择 *关于...* 时发送。

`PF_Cmd_GLOBAL_SETDOWN` 在 After Effects 关闭或最后一个效果实例被移除时发送。不要依赖此消息来确定插件何时从内存中移除；请使用操作系统特定的入口函数。

---

## 命令选择器表

### 全局选择器

所有插件都必须响应这些选择器。

| 选择器 | 响应 |
|---|---|
| `PF_Cmd_ABOUT` | 显示描述插件的对话框。填充 out_data>return_msg，After Effects 将在简单的模态对话框中显示它。 |
| | 在对话框中包含插件的版本信息。在 macOS 上，当前资源文件将在此时设置为你的效果模块。 |
| `PF_Cmd_GLOBAL_SETUP` | 设置任何必需的标志和 `PF_OutData` 字段（包括 out_data>my_version）以描述插件的行为。 |
| `PF_Cmd_GLOBAL_SETDOWN` | 释放所有全局数据（仅在分配了一些时才需要）。 |
| `PF_Cmd_PARAM_SETUP` | 描述你的参数并使用 [PF_ADD_PARAM](../../effect-details/interaction-callback-functions#interaction-callbacks) 注册它们。 |
| | 同时，注册自定义用户界面元素。 |
| | 设置 [PF_OutData>num_params](../PF_OutData#pf_outdata) 以匹配你的参数数量。 |

### 序列选择器

这些控制序列数据处理。

| 选择器 | 响应 |
|---|---|
| `PF_Cmd_SEQUENCE_SETUP` | 分配并初始化任何序列特定的数据。在效果首次应用时发送。此时 [PF_InData](../PF_InData) 已初始化。 |
| `PF_Cmd_SEQUENCE_RESETUP` | 重新创建（通常是解压）序列数据。在从磁盘读取序列数据、预合成期间或效果被复制时发送； |
| | After Effects 在复制之前会压缩序列数据。在复制期间，`PF_Cmd_SEQUENCE_RESETUP` 会为旧序列和新序列都发送。 |
| | 不要期望在 `PF_Cmd_SEQUENCE_RESETUP` 之间有 `PF_Cmd_SEQUENCE_FLATTEN`。 |
| `PF_Cmd_SEQUENCE_FLATTEN` | 在保存和复制序列时发送。压缩包含指针或句柄的序列数据，以便可以写入磁盘。 |
| | 这将与项目文件一起保存。释放未压缩的数据并将 `out_data>sequence_data` 指向新的压缩数据。压缩数据必须正确字节序以进行文件存储。 |
| | 从 6.0 开始，如果效果的序列数据最近被压缩，效果可能会被删除而不会收到额外的 `PF_Cmd_SEQUENCE_SETDOWN`。 |
| | 在这种情况下，After Effects 将处理你的压缩序列数据。 |
| `PF_Cmd_SEQUENCE_SETDOWN` | 释放所有序列数据。 |

### 帧选择器

为插件渲染的每一帧（或一组音频样本）传递。

| 选择器 | 响应 |
|---|---|
| `PF_Cmd_FRAME_SETUP` | 分配任何帧特定的数据。这在每帧渲染之前立即发送，以允许帧特定的设置数据。 |
| | 如果你的效果更改了输出缓冲区的大小，请指定新的输出高度、宽度和相对原点。除输入层外的所有参数都有效。 |
| | 如果你将宽度和高度设置为 0，After Effects 将忽略你对后续 `PF_Cmd_RENDER` 的响应。 |
| | 注意：如果设置了 [PF_Outflag_I_EXPAND_BUFFER](../PF_OutData#pf_outflags)，你将收到此选择器（和 `PF_Cmd_FRAME_SETDOWN`）两次，中间没有 `PF_Cmd_RENDER`。 |
| | 这是为了让我们知道给定图层是否可见。 |
| | 帧数据源自机器可能只有 8MB RAM 的时代。鉴于调用顺序（如上所述），在 `PF_Cmd_RENDER` 期间分配效率要高得多。 |
| `PF_Cmd_RENDER` | 根据输入帧和任何参数将效果渲染到输出中。 |
| | 此渲染调用仅支持每通道 8 位或 16 位渲染。每通道 32 位渲染必须在 `PF_Cmd_SMART_RENDER` 中处理。 |
| | `PF_InData` 中的所有字段都有效。 |
| | 如果对此选择器的响应被中断（你对 `PF_ABORT` 或 `PF_PROGRESS` 的调用返回错误代码），你的结果将不会被使用。 |
| | 你不能在此选择器期间删除 `frame_data`；你必须等到 `PF_Cmd_FRAME_SETDOWN`。 |
| `PF_Cmd_FRAME_SETDOWN` | 释放 `PF_Cmd_FRAME_SETUP` 期间分配的任何帧数据。 |
| `PF_Cmd_AUDIO_SETUP` | 在每次音频渲染之前发送。请求输入音频的时间跨度。分配并初始化任何序列特定的数据。 |
| | 如果你的效果需要来自输出时间跨度之外的时间跨度的输入，请更新 `PF_OutData` 中的 `startsampL` 和 `endsampL` 字段。 |
| `PF_Cmd_AUDIO_RENDER` | 使用效果编辑的音频填充 [PF_OutData.dest_snd](../PF_OutData#pf_outdata)。`PF_InData` 中的所有字段都有效。 |
| | 如果对此选择器的响应被中断（你对 `PF_ABORT` 或 `PF_PROGRESS` 的调用返回错误代码），你的结果将不会被使用。 |
| `PF_Cmd_AUDIO_SETDOWN` | 释放 `PF_Cmd_AUDIO_SETUP` 期间分配的内存。 |
| `PF_Cmd_SMART_PRE_RENDER` | 仅限 SmartFX。根据效果实现的任何标准，识别效果生成输出所需的输入区域。 |
| | 当 MediaCore 托管时，可能会发送最多两次。第一次将在 GetFrameDependencies 期间收集输入。 |
| | 源签出可以在此处返回完整的帧尺寸。一旦源被渲染，如果它们的大小与第一次调用不同，则此选择器将第二次发出，以获取正确的输出大小。 |
| | 请注意，MediaCore 需要所有输出，因此将使用 `PF_PreRenderOutput::max_result_rect`。 |
| | **16.0 新增** |
| | 在 `PF_PreRenderOutput` 中设置 `PF_RenderOutputFlag_GPU_RENDER_POSSIBLE` 以在 GPU 上渲染。 |
| | 如果未设置此标志，则由于参数或渲染设置，无法使用请求的 GPU 进行渲染。 |
| | 主机可能会使用另一个 what_gpu 选项（或 PF_GPU_Framework_None）重新调用 PreRender。 |
| | <pre lang="cpp">typedef struct {<br/>  PF_RenderRequest  output_request; // 效果被要求渲染的内容<br/>  short   bitdepth;   // 效果被驱动的位深度（以 bpc 为单位）<br/>  const   void \*gpu_data; // （AE 16.0 新增）<br/>  PF_GPU_Framework  what_gpu;   // （AE 16.0 新增）<br/>  A_u_long   device_index;   // （AE 16.0 新增）与 PrSDKGPUDeviceSuite 结合使用<br/>} PF_PreRenderInput;</pre> |
| `PF_Cmd_SMART_RENDER` | 仅限 SmartFX。执行渲染并提供效果被要求渲染的区域的输出。 |

### 消息通信

After Effects 与插件之间的通信通道。

| 选择器 | 响应说明 |
|---|---|
| `PF_Cmd_EVENT` | 该选择器使用 extra 参数；要处理的事件类型由 extra 指向的结构体中的 e_type 字段指示。 |
| | 详见[效果UI与事件](../../effect-ui-events/effect-ui-events)。 |
| `PF_Cmd_USER_CHANGED_PARAM` | 用户更改了参数值。仅当设置了 `PF_ParamFlag_SUPERVISE` 标志时才会收到此命令。 |
| | 可修改参数以控制数值，或使一个参数值影响其他参数。参数可能因不同操作而被修改。 |
| | `in_data.current_time` 设置为用户在界面中查看的帧时间（内部为合成当前时间转换为图层时间），此时用户正在更改触发 `PF_Cmd_USER_CHANGED_PARAM` 的参数。 |
| | 这也是自动添加关键帧的时间（如果尚未存在关键帧且启用了秒表）。 |
| | 通常与紧随其后的 PF_Cmd_RENDER 传入值相同（除非大写锁定被按下），但不一定——可能有其他打开的合成窗口导致在不同时间进行渲染响应参数更改。 |
| `PF_Cmd_UPDATE_PARAMS_UI` | 需要更新效果控制面板(ECP)。可能在打开ECP或在合成中移动到新时间时发生。 |
| | 可通过调用 `PF_UpdateParamUI()` 修改参数特性（例如启用或禁用）。 |
| | 仅允许进行外观更改。不要在此命令响应期间更改参数值；应在 `PF_Cmd_USER_CHANGED_PARAM` 期间进行。 |
| | 只有PiPL中设置了 `PF_OutFlag_SEND_UPDATE_PARAMS_UI` 且在 `PF_Cmd_GLOBAL_SETUP` 期间才会定期发送此命令。 |
| | !!! 注意 |
| | 切勿在此选择器期间检出参数，几乎必然导致递归错误。 |
| `PF_Cmd_DO_DIALOG` | 显示选项对话框。当点击选项按钮（或选择菜单命令）时发送。 |
| | 仅当效果先前通过设置全局 `PF_OutFlag_I_DO_DIALOG` 标志（响应 `PF_Cmd_GLOBAL_SETUP`）表明具有对话框时才会发送。 |
| | 在3.x版本中，`PF_Cmd_DO_DIALOG` 传递的参数无效。 |
| | 现在情况已改变；插件可访问非图层参数，在其他时间检出参数，并在 `PF_Cmd_DO_DIALOG` 期间执行UI更新。 |
| | 但仍不可更改参数值。 |
| `PF_Cmd_ARBITRARY_CALLBACK` | 管理自定义数据类型。仅当注册了自定义数据类型参数时才会收到。 |
| | extra参数指示正在调用的处理函数。 |
| | 自定义数据类型详见[实现任意数据](../../effect-details/arbitrary-data-parameters)。 |
| `PF_Cmd_GET_EXTERNAL_DEPENDENCIES` | 仅在 `PF_Cmd_GLOBAL_SETUP` 期间设置了 `PF_OutFlag_I_HAVE_EXTERNAL_DEPENDENCIES` 时发送。 |
| | 用插件依赖项描述填充字符串句柄（位于extra指向的PF_ExtDependenciesExtra中），确保为终止NULL字符分配空间。 |
| | 若无依赖项可报告，只需返回 `NULL` 指针。 |
| | 若检查类型为 `PF_DepCheckType_ALL_DEPENDENCIES`，则报告插件渲染可能需要的一切内容。 |
| | 若检查类型为 `PF_DepCheckType_MISSING_DEPENDENCIES`，则仅报告缺失项（若无缺失则返回空字符串）。 |
| `PF_Cmd_COMPLETELY_GENERAL` | 响应AEGP。extra参数指向AEGP发送的任何参数。 |
| | AEGP只能与此选择器响应的效果通信。 |
| `PF_Cmd_QUERY_DYNAMIC_FLAGS` | 仅发送给在PiPL和 `PF_Cmd_GLOBAL_SETUP` 期间指定了 `PF_OutFlag2_SUPPORTS_QUERY_DYNAMIC_FLAGS` 的插件。 |
| | 对于所有动态标志，若在此命令期间会更改它们，则必须在 `PF_Cmd_GLOBAL_SETUP` 期间设置标志。 |
| | 此选择器会在任意时间发送。 |
| | 响应时，效果应使用 `PF_CHECKOUT_PARAM` 访问其（非图层）参数，并决定是否应设置支持 `PF_Cmd_QUERY_DYNAMIC_FLAGS` 的标志，例如： |
| | - `PF_OutFlag_WIDE_TIME_INPUT` |
| | - `PF_OutFlag_NON_PARAM_VARY` |
| | - `PF_OutFlag_PIX_INDEPENDENT` |
| | - `PF_OutFlag_I_USE_SHUTTER_ANGLE` |
| | - `PF_OutFlag2_I_USE_3D_CAMERA` |
| | - `PF_OutFlag2_I_USE_3D_LIGHTS` |
| | - `PF_OutFlag2_DOESNT_NEED_EMPTY_PIXELS` |
| | - `PF_OutFlag2_REVEALS_ZERO_ALPHA` |
| | - `PF_OutFlag2_DEPENDS_ON_UNREFERENCED_MASKS` |
| | - `PF_OutFlag2_OUTPUT_IS_WATERMARKED` |
| | After Effects 将此信息用于缓存和优化，因此请尽快响应。 |
| `PF_Cmd_GPU_DEVICE_SETUP` | 主机可随时调用此选择器。对每个GPU设备最多调用一次。 |
| | 多个GPU设备可能同时处于设置状态。 |
| | 在GlobalSetup之后、SequenceSetup之前调用。 |
| | 目的是让效果在必要时进行GPU初始化，并有机会仅基于设备属性（而非渲染上下文如帧大小等）选择退出GPU设备。 |
| | 若效果拒绝GPU设备，则会调用CPU渲染。 |
| | 预期 `PF_InData::what_gpu != PF_GPU_Framework_None`。 |
| | 若支持what_gpu中的设备和框架，效果应在 `PF_OutData::out_flags2` 中设置一个或多个 `PF_OutFlag2_SUPPORTS_GPU_RENDER_Fxx` 标志。 |
| | 注意AE 16.0中仅有 `PF_OutFlag2_SUPPORTS_GPU_RENDER_F32`。 |
| | 未在此设置标志的效果将不被视为支持这些设备的GPU渲染。 |
| | `PF_GPUDeviceSetupOutput::gpu_data` 是插件拥有的指针，必须通过 `PF_Cmd_GPU_DEVICE_SETDOWN` 选择器释放。 |
| | 此指针在渲染时也可用。 |
| `PF_Cmd_GPU_DEVICE_SETDOWN` | 释放与gpu_data关联的所有资源。在AE中，GPU设备释放前会调用此函数。 |
| | <pre lang="cpp">typedef struct {<br/>  void  \*gpu_data;  // 必须由效果释放<br/>  PF_GPU_Framework  what_gpu;<br/>  A_u_long  device_index; // 与PrSDKGPUDeviceSuite配合使用<br/>} PF_GPUDeviceSetdownInput;<br/><br/>typedef struct {<br/>  PF_GPUDeviceSetdownInput  input;<br/>} PF_GPUDeviceSetdownExtra;</pre> |
| `PF_Cmd_GPU_SMART_RENDER_GPU` | 现有 `PF_Cmd_SMART_RENDER` 选择器的GPU等效项。 |
| | 渲染时，根据效果预期输出CPU帧还是GPU帧，会调用 `PF_Cmd_SMART_RENDER` 或 `PF_Cmd_SMART_RENDER_GPU` 选择器。 |
| | 仅当 `what_gpu != PF_GPU_Framework_None` 且对任何输入/输出 `PF_LayerDef` 有影响时才会调用 `PF_Cmd_SMART_RENDER_GPU`。 |
| | 此选择器进行期间，所有帧检出和检入操作将在GPU帧上执行。注意 `PF_Cmd_SMART_RENDER` 共享 `Extra` 结构体。 |
| | <pre lang="cpp">typedef struct {<br/>  PF_RenderRequest  output_request; // 要求效果渲染的内容<br/>  short bitdepth; // 效果驱动的位深度(bpc)<br/>  void  \*pre_render_data; // 从PF_Cmd_PRE_RENDER期间extra->output->pre_render_data放置的值传回<br/>  const void  \*gpu_data;  // (新增AE 16.0)<br/>  PF_GPU_Framework  what_gpu; // (新增AE 16.0)<br/>  A_u_long  device_index; // (新增AE 16.0)<br/>} PF_SmartRenderInput;<br/><br/>typedef struct {<br/>  PF_SmartRenderInput \*input;<br/>  PF_SmartRenderCallbacks \*cb;<br/>} PF_SmartRenderExtra;</pre> |
| | GPU相关选择器的extra输入中的 `what_gpu` 和 `device_index` 字段指示插件用于渲染的GPU框架。 |
| | 输入和输出缓冲区将在此框架和设备上准备。 |
| | 可通过 `PrSDKGPUDeviceSuite::GetDeviceInfo` 查询设备、上下文、命令队列和其他相关GPU状态。 |
| | `what_gpu` 在 `PF_Cmd_SMART_PRE_RENDER` 和 `PF_Cmd_SMART_RENDER_GPU` 选择器调用之间保持一致。 |

---

## 区别说明

`PF_Cmd_USER_CHANGED_PARAM` 和 `PF_Cmd_UPDATE_PARAMS_UI` 存在微妙差异。

效果需要区分用户实际更改参数值（`PF_Cmd_USER_CHANGED_PARAM`）与仅在时间轴上滑动（`PF_Cmd_UPDATE_PARAMS_UI`，插件首次加载时也会发送）。

只有前几个命令选择器是可预测的；其余调用顺序由用户操作决定。

首次应用时，插件接收 `PF_Cmd_GLOBAL_SETUP`，然后是 `PF_Cmd_PARAM_SETUP`。用户每次将效果添加到图层时，发送 `PF_Cmd_SEQUENCE_SETUP`。

对于基本非SmartFX效果渲染的每一帧，After Effects发送 `PF_Cmd_FRAME_SETUP`，然后 `PF_Cmd_RENDER`，最后 `PF_Cmd_FRAME_SETDOWN`。所有效果插件必须响应 `PF_Cmd_RENDER` *.*

对于SmartFX，可能发送任意次数的 `PF_Cmd_SMART_PRE_RENDER`，然后发送一次 `PF_Cmd_SMART_RENDER`。

`PF_Cmd_SEQUENCE_SETDOWN` 在退出时发送，用户移除效果或关闭项目时。`PF_Cmd_SEQUENCE_RESETUP` 在加载项目或应用图层更改时发送。`PF_Cmd_SEQUENCE_FLATTEN` 在After Effects项目写入磁盘时发送。

`PF_Cmd_ABOUT` 在用户从效果控制窗口(ECW)选择*关于...*时发送。

`PF_Cmd_GLOBAL_SETDOWN` 在After Effects关闭或移除最后一个效果实例时发送。不要依赖此消息确定插件何时从内存中移除；使用操作系统特定的入口点。
