---
title: smartfx
---
# SmartFX

SmartFX API 提供了效果与 After Effects 之间的双向通信，实现了许多性能优化，并提供了以前不可用的依赖信息。此效果 API 的扩展是在 After Effects 中实现每通道 32 位支持的方式。

普通的效果插件会获得一个完整大小的输入缓冲区，并被要求渲染一个完整大小的输出缓冲区。虽然输出 [extent_hint](../../effect-basics/PF_InData#pf_indata-members) 指定了必须实际填充的输出缓冲区部分，但如果效果不需要其整个输入，这种方案仍然非常低效。此外，许多效果不使用范围提示。

---

## 过去的方式

考虑一个应用于大部分在屏幕外、通过一个小区域查看或缩小到小尺寸的巨大图层的模糊效果。只需要渲染输出的一小部分，使用输出 `extent_hint` 指示给效果。同样，只需要模糊输入的一小部分——输出 `extent_hint` 扩展了模糊半径。然而，使用旧版效果 API，After Effects 无法知道这一点，因此整个图层都会传递给插件。这些额外的像素计算起来可能非常昂贵和浪费，尤其是在先前效果或嵌套合成的情况下。

---

## 现在的方式

SmartFX 通过反转调用顺序解决了这个问题。效果被告知需要多少输出，并且必须明确*请求*主机提供所需的输入。渲染过程分为两部分：预渲染和渲染。

在预渲染期间，效果描述其所需的输入像素数据；这个必要的输入可以根据你喜欢的任何内容变化（非输入图层参数、非图层参数、来自 `in_data` 的信息、序列数据中的设置...）。效果还必须返回生成的输出的范围，如果请求的图层部分中有空像素，则可能比请求的大小小。

在渲染阶段，效果*只能*检索它之前请求的像素。这种两阶段方法促进了许多重要的优化。例如，如果一个效果将一个输入与另一个输入相乘或遮罩，它可能会发现如果遮罩不与其相交，则根本不需要第一个输入。After Effects 内部还执行了一些重要的优化，以确保尽可能少地复制图像缓冲区，这些优化只有在主机知道所有输入和输出的缓冲区大小后才可能实现。

与 AEGP 一样，SmartFX 插件永远不会被 After Effects 卸载。

---

## 内容边界

节点的内容边界是从 `PreRender` 调用返回的最大可能结果矩形。它绝对不能根据当前渲染请求或其他任何内容而变化。它应该仔细计算，而不是松散地计算。

这个计算非常重要。它是节点（及其输入）的固有属性，一旦图构建完成就固定下来。违反它可能会导致各种代码中的各种问题。

---

## 如何智能化

设置 `PF_OutFlag2_SUPPORTS_SMART_RENDER`（来自 [PF_OutFlags](../../effect-basics/PF_OutData#pf_outflags)）的效果将接收 SmartFX 调用 `PF_Cmd_SMART_PRE_RENDER` 和 `PF_Cmd_SMART_RENDER`（来自 [Frame Selectors](../../effect-basics/command-selectors#frame-selectors)），而不是旧的 `PF_Cmd_FRAME_SETUP` / `PF_Cmd_RENDER` / `PF_Cmd_FRAME_SETDOWN` 序列。为了保持与非智能化主机的兼容性，你可能希望继续支持旧命令。

---

## PF_Cmd_SMART_PRE_RENDER

After Effects 请求效果的输出。效果通过使用回调函数并操作额外参数中的结构，告诉 After Effects 它需要什么输入来生成该输出。效果无法访问在 *PF_Cmd_SMART_PRE_RENDER* 期间未签出的任何图层输入的像素。因此，效果可能需要的所有图层输入必须使用 `checkout_layer` 提前签出。如果效果可能需要某些图层输入，即使稍后在渲染期间效果可能决定不需要该图层，也必须现在签出。此外，由于在 *PF_Cmd_SMART_PRE_RENDER* 或 `PF_Cmd_SMART_RENDER` 期间没有传递参数数组给 SmartFX，因此必须使用 `PF_CHECKOUT_PARAM`（来自 [Interaction Callbacks](../../effect-details/interaction-callback-functions#interaction-callbacks)）检索任何非图层参数。

---

## PF_PreRenderExtra

| 成员 | 用途 |
|---|---|
| `PF_PreRenderInput` | 描述 After Effects 需要渲染的内容（在 `PF_RenderRequest` 中），以及请求的位深度（在名为 `bitdepth` 的成员中）。 |
| | <pre lang="cpp">typedef struct {<br/>  PF_LRect        rect;<br/>  PF_Field        field;<br/>  PF_ChannelMask  channel_mask;<br/>  PF_Boolean      preserve_rgb_of_zero_alpha;<br/>  char      unused[3];<br/>  long      reserved[4];<br/>} PF_RenderRequest;</pre> |
| | `rect` 是图层坐标。`field` 也是相对于图层原点的；输出缓冲区的活动字段落在偶数还是奇数扫描线上取决于输出缓冲区的原点。 |
| | `channel_mask` 指定效果应提供输出的通道。 |
| | 写入其他通道的数据将不会被接受。 |
| | 它将是以下一个或多个，或组合： |
| | - `PF_ChannelMask_ALPHA` |
| | - `PF_ChannelMask_RED` |
| | - `PF_ChannelMask_GREEN` |
| | - `PF_ChannelMask_BLUE` |
| | - `PF_ChannelMask_ARGB` |
| | 如果 `preserve_rgb_of_zero_alpha` 像素为 `TRUE`，效果必须将透明像素的颜色内容传播到输出。 |
| | 这与 [PF_OutFlag2_REVEALS_ZERO_ALPHA](../../effect-basics/PF_OutData#pf_outflags) 相关但不同，后者告诉 After Effects 效果可能会为此类像素设置非零的 alpha 值，使它们恢复可见性。 |
| `PF_PreRenderOutput` | 由效果填充，告诉 After Effects 它计划基于输入生成什么输出。 |
| | <pre lang="cpp">typedef struct {<br/>  PF_LRect        result_rect;<br/>  PF_LRect        max_result_rect;<br/>  PF_Boolean      solid;<br/>  PF_Boolean      reserved;<br/>  PF_RenderOutputFlags        flags;<br/>  void*    pre_render_data;<br/>  PF_DeletePreRenderDataFunc  func;<br/>} PF_PreRenderOutput;</pre> |
| | `pre_render_data` 将在 [PF_Cmd_SMART_RENDER](../../effect-basics/command-selectors#frame-selectors) 期间传递回效果。 |
| | 目前，唯一的 `PF_RenderOutputFlags` 是 `PF_RenderOutputFlag_RETURNS_EXTRA_PIXELS`。 |
| `PF_PreRenderCallbacks` | 目前，只有一个回调 - `checkout_layer`。`checkout_idL` 由效果选择。 |
| | 它必须是正数且唯一的。After Effects 填充 `PF_CheckoutResult`。 |
| | <pre lang="cpp">PF_Err checkout_layer(<br/>  PF_ProgPtr        effect_ref,<br/>  PF_ParamIndex     index,<br/>  A_long      checkout_idL,<br/>  const PF_RenderRequest  \*req,<br/>  A_long      what_time,<br/>  A_long      time_step,<br/>  A_u_long   time_scale,<br/>PF_CheckoutResult       \*result);<br/><br/>typedef struct {<br/>  PF_LRect    result_rect;<br/>  PF_LRect    max_result_rect;<br/>  PF_RationalScale  par;<br/>  long        solid;<br/>  PF_Boolean        reservedB[3];<br/>  A_long      ref_width;<br/>  A_long      ref_height;<br/>} PF_CheckoutResult;</pre> |
| | `result_rect` 可以为空。`max_result_rect` 是输出可能的最大值，如果主机请求所有输出。 |
| | 如果 `solid` 为 `TRUE`，整个 `result_rect` 具有不透明的 alpha。 |
| | `ref_width` 和 `ref_height` 是图层的原始尺寸，在应用任何效果之前，忽略任何下采样因子。 |
| | 对于折叠图层，这将是合成的大小。 |
| | 在 11.0 中，当 SmartFX 效果同时使用 [PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT](../../effect-basics/PF_OutData#pf_outflags) 和 [PF_OutFlag_NON_PARAM_VARY](../../effect-basics/PF_OutData#pf_outflags) 时，全局性能缓存存在一个错误。 |
| | 在 `PF_Cmd_SMART_PRE_RENDER` 期间调用 `checkout_layer` 会返回 `PF_CheckoutResult` 中的空矩形。 |
| | 解决方法是简单地再次调用。此解决方法在 11.0.1 中不再需要。 |
| `result_rect` | 由渲染请求生成的输出（图层坐标）（可以为空）。 |
| | 这不能大于输入请求矩形（除非设置了 `PF_RenderOutputFlag_RETURNS_EXTRA_PIXELS`），但可以更小。 |
| `max_result_rect` | 如果 After Effects 请求所有输出，输出可能的最大大小。 |
| | 这不能根据请求的输出大小而变化。 |
| `solid` | 如果输出中的每个像素都是完全不透明的，则设置为 `TRUE`。如果可能，请设置；它启用了某些优化。 |
| `reserved` | 忽略。 |
| `flags` | 目前，唯一的标志是 `PF_RenderOutputFlag_RETURNS_EXTRA_PIXELS`，它告诉 After Effects 智能效果将返回比 After Effects 请求更多的像素。 |
| `pre_render_data` | 指向效果在渲染期间希望访问的任何数据。 |
| | 效果还可以分配句柄并将其存储在 `out_data>frame_data` 中，就像常规（非智能）效果一样。 |
| | 由于 [PF_Cmd_SMART_PRE_RENDER](../../effect-basics/command-selectors#frame-selectors) 可以在没有相应的 [PF_Cmd_SMART_RENDER](../../effect-basics/command-selectors#frame-selectors) 的情况下调用，效果绝不能自行删除此数据；一旦效果从 [PF_Cmd_SMART_PRE_RENDER](../../effect-basics/command-selectors#frame-selectors) 返回，After Effects 就拥有此数据并将处理它（使用以下函数或标准释放调用）。 |
| `delete_pre_render_data_func` | 指向一个最终将被调用以删除 `pre_render_data` 的函数。 |

---

## preserve_rgb_of_zero_alpha

`preserve_rgb_of_zero_alpha` 既作为效果的输入，告诉它要渲染什么，也作为效果的输出，描述它所需的输入（传递给签出调用）。当在输入请求中设置 `preserve_rgb_of_zero_alpha` 时，效果必须在进行签出时递归传递它，否则先前效果和遮罩将消除效果将揭示的那些像素。尽管在 CS3（8.0）中仍然支持，但不鼓励使用此功能。

---

## 矩形

效果必须准确设置两个结果矩形。After Effects 的缓存系统依赖于它们，不正确的值可能会导致许多问题。如果插件返回的 `result_rect` 小于 `request_rect`，则告诉 After Effects 在 `request_rect` 内但在 `result_rect` 外的像素是空的。

同样，`max_result_rect` 必须包含所有非零像素；效果永远不会被要求渲染此区域之外的任何内容。如果此矩形之外有像素，它们将永远不会显示。

输出矩形大小错误也会导致问题。如果这些矩形太大，会导致性能损失。

不仅会缓存许多空像素（剥夺应用程序宝贵的内存），效果可能会不必要地被要求渲染大片的空白区域。因此，必须正确计算 `max_result_rect`，而不是设置为任意大的大小。

`result_rect` 和 `max_result_rect` 都可能根据效果的参数、当前时间等而变化；它们仅对效果的给定调用有效。然而，`max_result_rect` *不能*依赖于特定的渲染请求。无论 After Effects 请求输出的哪一部分，它都必须相同。

如果 `request_rect` 不与效果的输出像素相交，则返回空的 `result_rect` 是合法的；不需要进行渲染。

After Effects 也可能使用空的 `request_rect` 调用效果，这意味着效果仅被要求计算 `max_result_rect`。

`preserve_rgb_of_zero_alpha` 可以影响边界计算过程（`result_rect` 和 `max_result_rect`），如果效果的行为根据此设置而不同，则必须尊重它。

---

## 图层的“大小”

与非智能效果一样，每个智能效果可以任意缩小或扩展其请求的输入。它们不能依赖于固定的帧大小，并且输入的大小可能会随时间变化。

例如，用户可以将动画投影应用于图层，这将在不同时间向图层的不同边缘添加像素，具体取决于投影的方向。

某些效果（例如，需要将一个图层与另一个图层对齐的效果）需要某种“大小”的概念。这可以通过两种方式定义，每种方式都有其优缺点。

在应用任何效果和下采样之前的原始图层的大小由 `in_data>width/height` 给出。由于此值不受后续效果的影响，它可以作为诸如中心点之类的绝对参考。

然而，这并不是万无一失的，因为用户可能应用了扭曲或平移效果。此外，此值仅适用于应用效果的图层，而不适用于其他图层参数。

...或者...

每个图层输入都有一个 `max_result_rect`，它包含所有像素数据，在某种意义上，它是图层的“大小”。

它适用于所有图层，但会根据先前应用的效果随时间变化，可能以用户可能不期望的方式（如上面的投影示例）。

请注意，可以通过调用 `checkout_layer` 并传递空的 `request_rect` 来获取输入的 `ref_width/height` 和 `max_result_rect`，而无需渲染。

这相当高效，如果首先需要图层“大小”来确定渲染所需的像素，则非常有用。

这是在预渲染期间请求图层然后从不调用 `checkout_layer` 的示例（在这种情况下，没有）。

---

## 播放标志

通常，给定 `PF_RenderRequest` 的 `max_result_rect` 将被裁剪到任何应用的遮罩的边界。

然而，如果设置了 [PF_OutFlag2_REVEALS_ZERO_ALPHA](../../effect-basics/PF_OutData#pf_outflags2)，则 `max_result_rect` 将是图层的大小。

---

## PF_Cmd_SMART_RENDER

效果最多会为每个预渲染接收一次 *PF_Cmd_SMART_RENDER* 调用。

请注意，渲染可能永远不会被调用。After Effects 可能只想执行一些边界计算，或者它可能随后发现根本不需要效果的输出（例如，如果轨道遮罩的预渲染阶段返回的矩形不与效果的输出相交，则可能发生这种情况）。

所有效果都必须能够处理没有渲染的预渲染，而不会泄漏资源或以其他方式进入不稳定状态。

在 *PF_Cmd_SMART_RENDER* 期间，额外参数指向 `PF_SmartRenderExtra`。

---

## PF_SmartRenderExtra

| 成员 | 用途 |
|---|---|
| `PF_SmartRenderInput` | 由 [PF_RenderRequest](#pf_prerenderextra)、位深度和指向 `pre_render_data` 的指针组成（在 [PF_Cmd_SMART_PRE_RENDER](../../effect-basics/command-selectors#frame-selectors) 期间分配）。 |
| | 这个 `PF_SmartRenderInput` 与在相应的 *PF_Cmd_SMART_PRE_RENDER* 中传递的完全相同。 |
| `PF_SmartRenderCallbacks` | <pre lang="cpp">PF_Err checkout_layer_pixels(<br/>  PF_ProgPtr      effect_ref,<br/>  A_long    checkout_idL,<br/>  PF_EffectWorld  \*pixels);</pre> |
| | 用于实际访问在 *PF_Cmd_SMART_PRE_RENDER* 期间检出的图层中的像素。 |
| | 返回的 `PF_EffectWorld` 在当前命令期间或直到检出之前有效。 |
| | 你只能使用之前在 *PF_Cmd_SMART_PRERENDER* 中使用的 `checkout_idL` 调用一次 `checkout_layer_pixels`。 |
| | 在 *PF_Cmd_SMART_PRERENDER* 和 *PF_Cmd_SMART_RENDER* 中检出的次数必须一一对应。 |
| | 如果需要对同一图层多次调用 `checkout_layer_pixels`，你应该在 *PF_Cmd_SMART_PRERENDER* 中再次使用不同的唯一 `checkout_idL` 调用 [checkout_layer](#pf_prerenderextra)，然后在 *PF_Cmd_SMART_RENDER* 中使用该 `checkout_idL` 进行另一次 `checkout_layer_pixels`。 |
| | <pre lang="cpp">PF_Err checkin_layer_pixels(<br/>  PF_ProgPtr  effect_ref,<br/>  A_long      checkout_idL);</pre> |
| | 不需要调用（After Effects 在效果从 *PF_Cmd_SMART_RENDER* 返回时会清理所有此类检出），但有助于释放内存。 |
| | <pre lang="cpp">PF_Err checkout_output(<br/>  PF_ProgPtr      effect_ref,<br/>  PF_EffectWorld  \*output);</pre> |
| | 获取输出缓冲区。请注意，效果在至少检出一个输入之前不允许检出输出（除非效果根本没有输入）。 |
| | !!! 提示 |
| | 为了优化内存使用，尽可能晚地请求输出，并尽可能少地同时请求输入。 |

---

## 何时访问图层参数

除了图层输入之外的其他参数可以随时自由检出。图层输入必须在 [PF_Cmd_SMART_PRE_RENDER](../../effect-basics/command-selectors#frame-selectors) 期间访问。

然而，你并不需要实际*使用*每一个输入。

如果你在 [PF_Cmd_SMART_PRE_RENDER](../../effect-basics/command-selectors#frame-selectors) 中检出一帧（或其一部分），并且随后不在 `PF_Cmd_SMART_RENDER` 中检出它，那么它就不需要被渲染，从而大大提高了性能。

---

## 等等，把那个图层还给我

`checkout_layer_pixels` 只能使用在 PreRender 中使用的 `checkout_id` 调用一次。PreRender 和 SmartRender 中的检出次数必须一一对应。如果你需要多次检出图层的像素，可能是因为代码结构的原因，只需使用多个 `checkout_id`。在 PreRender 中，使用不同的唯一 `checkout_id` 对同一图层调用 `checkout_layer`。然后在 SmartRender 中，每次在 SmartRender 中调用 `checkout_layer_pixels` 时使用不同的 `checkout_id`。
