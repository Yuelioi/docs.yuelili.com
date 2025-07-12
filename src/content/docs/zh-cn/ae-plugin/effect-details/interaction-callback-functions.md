---
title: 交互回调函数
---
# 交互回调函数

尽管在 [PF_InData](../../effect-basics/PF_InData#pf_indata) 中提供了未宏定义的函数指针，但请使用提供的宏来访问它们。看到我们对弃用宏的使用有多严格了吗？让我们把这个当作我们的小秘密。

---

## 交互回调

| 函数 | 用途 |
| --- | --- |
| `PF_ADD_PARAM` | 在[PF_Cmd_PARAM_SETUP](../../effect-basics/command-selectors#global-selectors) 期间，使用多次调用此函数将插件的参数枚举给 After Effects。 |
| | !!! 注意 |
| | 在调用 `PF_ADD_PARAM()` 之前未能完全清除 `PF_ParamDef` 会导致许多问题。 |
| | 在添加参数之前始终使用 `AEFX_CLR_STRUCT`。 |
| | `<pre lang="cpp">`PF_Err PF_ADD_PARAM (``PF_InData       \*in_data,``  PF_ParamIndex   index,``  PF_ParamDefPtr  def);`</pre>` |
| | 我们在 Utils/Param_Utils.h 中为特定参数类型提供了便捷宏： |
| | -`PF_ADD_COLOR` |
| | -`PF_ADD_ARBITRARY` |
| | -`PF_ADD_SLIDER` |
| | -`PF_ADD_FIXED` |
| | -`PF_ADD_FLOAT_SLIDERX` |
| | -`PF_ADD_CHECKBOXX` |
| | -`PF_ADD_BUTTON` |
| | -`PF_ADD_ANGLE` |
| | -`PF_ADD_NULL` |
| | -`PF_ADD_LAYER` |
| | -`PF_ADD_255_SLIDER` |
| | -`PF_ADD_PERCENT` |
| | -`PF_ADD_POINT` |
| | -`PF_ADD_POINT_3D` |
| | -`PF_ADD_TOPICX` |
| | -`PF_END_TOPIC` |
| | -`PF_ADD_POPUPX` |
| | -`PF_ADD_FLOAT_SLIDERX_DISABLED` |
| `PF_ABORT` | 如果用户取消，则返回非零值；将该值返回给 After Effects。 |
| | 将渲染例程包装在“未请求中止”的 while 循环中。 |
| | `<pre lang="cpp">`PF_Err PF_ABORT (PF_InData \*in_data);`</pre>` |
| `PF_PROGRESS` | 在处理过程中显示进度条；current 和 total 描述完成的百分比。 |
| | 如果应暂停或中止当前处理，则返回非零值；将该值返回给 After Effects。 |
| | 除非效果非常慢，否则每扫描线调用一次。 |
| | 如果 total 为 `0`，则改用 `PF_ABORT`（向用户提供不同的选择）。 |
| | `<pre lang="cpp">`PF_Err PF_PROGRESS (``PF_InData  \*in_data,``  A_long     current,``  A_long     total );`</pre>` |
| `PF_CHECKOUT_PARAM` | 在指定时间获取参数值或源视频层。After Effects 根据参数的检出状态做出缓存决策。 |
| | 分配一个新的[PF_ParamDef](../../effect-basics/PF_ParamDef#pf_paramdef) 来保存结果；传递给插件的是只读的。 |
| | 如果检出一个设置为 `<none>` 的图层参数，返回的图层将填充为零。 |
| | 检出的图层不包含遮罩。 |
| | 在 UI 事件处理期间不要检出图层参数。 |
| | `<pre lang="cpp">`PF_Err PF_CHECKOUT_PARAM (``PF_InData      \*in_data,``  PF_ParamIndex  index,``A_long         what_time,``  A_long         step,``A_long         time_scale,``  PF_ParamDef    \*param);`</pre>` |
| | 如果检出源图层，将返回一个去隔行帧。如果你请求的时间引用的是上场，你将收到上场，并使用过滤器生成额外的扫描线。 |
| | 例如，假设第 0 行和第 2 行是上场，第 1 行是下场，如果你检出上场，第 0 行和第 2 行将直接从源素材中返回，第 1 行将通过平均第 0 行和第 2 行来计算。 |
| | 如果你想重新组装一个包含两个场的完整分辨率源帧，可以调用 `PF_CHECKOUT_PARAM` 两次以获取两个场，并重新隔行素材。 |
| | 在非帧对齐的时间检出图层时会发生什么？所有项目基本上都有无限的时间分辨率，因此在请求任何时间值时，AE 会在该时间渲染项目。 |
| | 对于合成，这涉及将所有关键帧值插值到子帧时间。 |
| | 对于素材，AE 返回与请求时间对应的完整图像，即最接近左侧的帧。 |
| | 如果用户在该图层上启用了帧混合，则会生成一个插值帧。 |
| `PF_CHECKIN_PARAM` | 每次 `PF_CHECKOUT_PARAM` 都要用 `PF_CHECKIN_PARAM` 平衡。 |
| | 不这样做会导致性能下降和内存泄漏。一旦检入，[PF_ParamDef](../../effect-basics/PF_ParamDef#pf_paramdef) 中的字段将不再有效。 |
| | `<pre lang="cpp">`PF_Err PF_CHECKIN_PARAM (``PF_InData    \*in_data,``  PF_ParamDef  \*param );`</pre>` |
| `PF_REGISTER_UI` | 注册自定义用户界面元素。参见[Effect UI &amp; Events](../../effect-ui-events/effect-ui-events)。注意：PF_UIAlignment 标志不受支持。 |
| | `<pre lang="cpp">`PF_Err PF_REGISTER_UI (``PF_InData        \*in_data,``  PF_CustomUIInfo  \*cust_info );`</pre>` |
| `PF_CHECKOUT_LAYER_AUDIO` | 给定索引、start_time、duration、time_scale、rate、bytes_per_sample、num_channels 和 fmt_signed，After Effects 将返回相应的 PF_LayerAudio。 |
| | After Effects 将执行任何必要的重采样。 |
| | `<pre lang="cpp">`PF_Err PF_CHECKOUT_LAYER_AUDIO (``PF_InData      \*in_data,``  PF_ParamIndex  index,``A_long         start_time,``  A_long         duration,``A_u_long       time_scale,``  PF_UFixed      rate,``A_long         bytes_per_sample,``  A_long         num_channels,``A_long         fmt_signed,``  PF_LayerAudio  \*audio);`</pre>` |
| `PF_CHECKIN_LAYER_AUDIO` | 无论错误条件如何，所有对 `PF_CHECKOUT_LAYER_AUDIO` 的调用都要用匹配的 `PF_CHECKIN_LAYER_AUDIO` 来平衡。 |
| | `<pre lang="cpp">`PF_Err PF_CHECKIN_LAYER_AUDIO (``PF_InData      \*in_data,``  PF_LayerAudio  audio );`</pre>` |
| `PF_GET_AUDIO_DATA` | 返回有关 PF_LayerAudio 的信息。 |
| | audio 之后的所有参数都是可选的；对于你不感兴趣的任何值，传递 0。rate0 是无符号的，fmt_signed0 对于有符号应为非零，对于无符号应为零。 |
| | 此回调适用于读取音频信息的视觉效果。要*修改*音频，请编写音频过滤器。 |
| | `<pre lang="cpp">`PF_Err PF_GET_AUDIO_DATA (``PF_InData        \*in_data,``  PF_LayerAudio    audio,``PF_SndSamplePtr  \*data0,``  A_long    \*num_samples0,``PF_UFixed        \*rate0,``  A_long    \*bytes_per_sample0,``A_long    \*num_channels0,``  A_long    \*fmt_signed0);`</pre>` |

---

## 参数检出与参数零

效果按从 0 到 n 的顺序应用于效果控制面板（和合成面板）中的图像。

effect[n-1] 的输出是 effect[n] 的输入（[param[0]](../../effect-basics/PF_ParamDef#param-zero)）。

另一方面，当普通效果使用 `PF_CHECKOUT_PARAM` 检出图层时，它会收到原始的（未应用效果的）源图层，无论其顺序如何。

然而，当 [SmartFX](../../smartfx/smartfx) 效果检出其输入参数（params[0]）时，之前的效果*会*被应用。

---

## 参数检出行为

无论图层的入点和出点是否被修剪，你都将从源素材的开始到结束获得有效帧，然后在此前后获得透明帧。

在检出图层参数时，如果图层的帧率低于合成帧率，则仅根据需要刷新较低的帧率。

在 30fps 合成中检出的 10fps 图层每三帧才需要刷新一次。如果你的效果希望在静态输入图层的情况下每帧更改输出，则需要设置 [PF_Outflag_NON_PARAM_VARY](../../effect-basics/PF_OutData#pf_outflags)。

当效果检出连续栅格化的 Adobe Illustrator 图层时，After Effects 会在合成大小的缓冲区中渲染应用了几何图形的 Illustrator 图层。

---

## 参数检出与重入

在不同时间检出图层的插件可能会生成重入行为。考虑一个场景，其中 Checkout 示例插件应用于合成 B 中的图层，而 B 被预合成到合成 A 中，并在 A 中应用了 Checkout。

当合成 A 渲染时，Checkout[A] 将收到 *PF_Cmd_RENDER*，在此期间它从当前时间以外的时间检出图层（合成 B）。

为了提供该检出的图层，After Effects 向 `Checkout[B]` 发送 *PF_Cmd_RENDER*。

瞧，递归！

如果你要检出参数，你的效果必须适当地处理重入渲染请求。

不要使用全局变量，也不要读取或写入静态变量……但你本来就不会这样做，对吧？

---

## 迭代期间的进度

After Effects 力求在渲染期间尽可能响应用户交互。通过适当使用 `PF_ITERATE()` 来实现相同的效果。例如，也许你在响应 `PF_Cmd_RENDER` 期间使用了三次 `PF_ITERATE` 函数。

在这种情况下，你可以这样开始：

```cpp
lines_per_iterateL = in_data>extent_hint.top - in_data>extent_hint.bottom;
total_linesL = 3 * lines_per_iterateL;
lines_so_farL = 0;
```

每次迭代后，你将已完成的行数添加到当前位置：

```cpp
suites.iterate8suite()>iterate( lines_so_farL,
 total_linesL,
 input_worldP,
 &output>extent_hint,
 refcon,
 WhizBangPreProcessFun,
 output_worldP);

lines_so_farL += lines_per_iterateL;

ERR(PF_PROGRESS(lines_so_farL, total_linesL));

suites.iterate8suite()>iterate( lines_so_farL,
 total_linesL,
 input_worldP,
 &output>extent_hint,
 refcon,
 WhizBangRenderFunc,
 output_worldP);

lines_so_far += lines_per_iterateL;

ERR(PF_PROGRESS(lines_so_farL, total_linesL));

suites.iterate8suite()>iterate( lines_so_farL,
 total_linesL,
 input_worldP,
 &output>extent_hint,
 refcon,
 WhizBangPostProcessFunc,
 output_worldP);

ERR(PF_PROGRESS(lines_so_farL, total_linesL));
```
