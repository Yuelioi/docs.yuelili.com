---
title: 参数监督
---
# 参数监督

监督意味着根据其他参数的值动态更改某些参数的值。要监督一个参数，在 *PF_Cmd_PARAM_SETUP* 期间添加参数之前设置 [PF_ParamFlag_SUPERVISE](../../effect-basics/PF_ParamDef#pf_paramdef)。每当它被更改时，您将收到 [PF_Cmd_USER_CHANGED_PARAM](../../effect-basics/command-selectors#messaging)。更改参数的索引（插入插件的参数数组）将在 PF_UserChangedParamExtra（额外）参数中发送。在 *PF_Cmd_USER_CHANGED_PARAM* 期间，您可以更改任何参数的值 *和* 外观。

---

## 更新参数 UI

如果您在任何参数上设置了 `PF_ParamFlag_SUPERVISE`，After Effects 将向您发送 *PF_Cmd_UPDATE_PARAMS_UI*，就像您设置了 PF_OutFlag_SEND_UPDATE_PARAMS_UI 一样。

在 *PF_Cmd_UPDATE_PARAMS_UI* 期间，您只能更改参数的外观和启用状态。使用 [PF_ParamUtilSuite3](#pf_paramutilsuite3) 中的 `PF_UpdateParamUI()` 来更新 UI，传递您希望修改的参数的 *副本*。请 *不要* 尝试修改原始参数。无需设置 `PF_OutFlag_REFRESH_UI`；`PF_UpdateParamUI()` 会为您处理。

:::note
这是更新 `PF_PUI_STD_CONTROL_ONLY` 参数 UI 的唯一方法。
:::

---

## 更新参数值

可以在 [PF_Cmd_USER_CHANGED_PARAM](../../effect-basics/command-selectors#messaging) 和 [PF_Cmd_EVENT](../../effect-basics/command-selectors#messaging)（*PF_Event_DO_CLICK*、*PF_Event_DRAG* 和 *PF_Event_KEYDOWN*）期间修改参数的值（不仅仅是 UI）。After Effects 不会接受在其他时间所做的更改。

当更改参数 *值*（而不仅仅是 UI）时，修改原始参数，并将 `PF_Paramdef.uu.change_flags` 设置为 `PF_ChangeFlag_CHANGED_VALUE`。

此更改还将更新 UI，并且用户可以撤销。请注意，`PF_ChangeFlag_CHANGED_VALUE` 不支持图层参数。

此套件旨在为效果插件提供对其参数流的访问，而无需使用 AEGP 套件。至少部分这些功能由多个第三方主机提供。这些功能对于具有监督参数的效果特别方便。

---

## PF_ParamUtilSuite3

| 函数 | 用途 |
|---|---|
| `PF_UpdateParamUI` | <pre lang="cpp">PF_UpdateParamUI(<br/>  PF_ProgPtr         effect_ref,<br/>  PF_ParamIndex      param_index,<br/>  const PF_ParamDef  \*defP);</pre> |
| | 强制 After Effects 刷新效果控制面板中的参数 UI。 |
| | 从 CC 2014 开始，After Effects 现在将接受自定义 UI 高度的更改。只需更改自定义 UI PF_ParamDef 的 ui_height，然后调用 PF_UpdateParamUI。 |
| | 效果的自定义 UI 高度将在效果控制窗口中更新。 |
| | 从 CS6 开始，当插件禁用参数时，我们现在将该状态保存在 UI 标志中，以便插件将来可以检查该标志以查看是否被禁用。 |
| | !!! 危险 |
| | 永远不要将 param[0] 传递给此函数。 |
| `PF_GetCurrentState` | <pre lang="cpp">PF_GetCurrentState(<br/>  PF_ProgPtr     effect_ref,<br/>  PF_ParamIndex  param_index,<br/>  const A_Time   \*startPT0,<br/>  const A_Time   \*durationPT0,<br/>  PF_State       \*stateP);</pre> |
| | 此 API 与下面的 `PF_AreStatesIdentical` 结合使用，可以让您确定一组输入（图层、其他属性或两者）在您首次调用 `PF_GetCurrentState` 和当前调用之间是否不同，因此可以用于缓存。您可以指定要考虑的时间范围或所有时间。 |
| | 在 CS6 中更新以添加 `param_index`、`startPT0` 和 `durationPT0`。`param_index` 的预定义常量如下： |
| | - `PF_ParamIndex_CHECK_ALL` - 检查每个参数，包括图层参数引用的每个图层。 |
| | - `PF_ParamIndex_CHECK_ALL_EXCEPT_LAYER_PARAMS` - 省略所有图层。传递特定的图层参数索引以将其作为唯一测试的图层参数。 |
| | - `PF_ParamIndex_CHECK_ALL_HONOR_EXCLUDE` - 类似于 `CHECK_ALL`，但尊重 `PF_ParamFlag_EXCLUDE_FROM_HAVE_INPUTS_CHANGED`。 |
| | 为 start 和 duration 传递 NULL 表示所有时间。 |
| | 对于跨时间进行模拟并因此设置 `PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT` 的效果，当您询问时间范围时，它将扩展为包括生成该范围所需的任何时间。 |
| | 填充一个 `PF_State`，这是一个不透明的数据类型，用作效果参数当前状态的收据（PF_State 用于我们的内部帧缓存数据库）。 |
| `PF_AreStatesIdentical` | <pre lang="cpp">PF_AreStatesIdentical(<br/>  PF_ProgPtr      effect_ref,<br/>  const PF_State  \*state1P,<br/>  const PF_State  \*state2P,<br/>  A_Boolean       \*samePB);</pre> |
| | CS6 新增。比较使用 `PF_GetCurrentState` 检索的两个不同状态。 |
| `PF_HasParamChanged` | 不再支持 `PFParamUtilsSuite3`。 |
| | <pre lang="cpp">PF_HasParamChanged(<br/>  PF_ProgPtr     effect_ref,<br/>  const   PF_State \*stateP,<br/>  PF_ParamIndex  param_index,<br/>  PF_Boolean     \*changedPB);</pre> |
| | 给定一个 PF_State，如果任何测试的参数与保存的状态不同，则返回 true。与名称相反，该调用不提供测试单个参数的方法。 |
| | 至少，所有非图层参数都将被测试。要测试特定参数集，请改用下面的 `PF_HaveInputsChangedOverTimeSpan`。 |
| | `param_index` 的预定义常量如下： |
| | - `PF_ParamIndex_CHECK_ALL` - 检查每个参数，包括图层参数引用的每个图层。 |
| | - `PF_ParamIndex_CHECK_ALL_EXCEPT_LAYER_PARAMS` - 省略所有图层。传递特定的图层参数索引以将其作为唯一测试的图层参数。 |
| `PF_HaveInputsChangedOverTimeSpan` | 不再支持 `PFParamUtilsSuite3`。请改用 `PF_AreStatesIdentical()`。 |
| `PF_IsIdenticalCheckout` | <pre lang="cpp">PF_IsIdenticalCheckout(<br/>  PF_ProgPtr     effect_ref,<br/>  PF_ParamIndex  param_index,<br/>  A_long         what_time1,<br/>  A_long         time_step1,<br/>  A_u_long       time_scale1,<br/>  A_long         what_time2,<br/>  A_long         time_step2,<br/>  A_u_long       time_scale2,<br/>  PF_Boolean     \*identicalPB);</pre> |
| | 如果参数的值在两个传递的时间相同，则返回 `TRUE`。注意：时间不必连续；可能有不同的中间值。 |
| `PF_FindKeyframeTime` | <pre lang="cpp">PF_FindKeyframeTime(<br/>  PF_ProgPtr     effect_ref,<br/>  PF_ParamIndex  param_index,<br/>  A_long         what_time,<br/>  A_u_long       time_scale,<br/>  PF_TimeDir     time_dir,<br/>  PF_Boolean     \*foundPB,<br/>  PF_KeyIndex    \*key_indexP0,<br/>  A_long         \*key_timeP0,<br/>  A_u_long       \*key_timescaleP0);</pre> |
| | 在指定方向上搜索参数流中的下一个关键帧。最后三个参数是可选的。 |
| `PF_GetKeyframeCount` | <pre lang="cpp">PF_GetKeyframeCount(<br/>  PF_ProgPtr     effect_ref,<br/>  PF_ParamIndex  param_index,<br/>  PF_KeyIndex    \*key_countP);</pre> |
| | 返回参数流中的关键帧数量。 |
| `PF_CheckoutKeyframe` | <pre lang="cpp">PF_CheckoutKeyframe(<br/>  PF_ProgPtr     effect_ref,<br/>  PF_ParamIndex  param_index,<br/>  PF_KeyIndex    key_index,<br/>  A_long         \*key_timeP0,<br/>  A_u_long       \*key_timescaleP0,<br/>  PF_ParamDef    \*paramP0);</pre> |
| | 从我们的关键帧数据库中检出指定参数的关键帧。param_index 从零开始。您可以请求时间、时间尺度或两者都不请求；如果您正在执行自己的运动模糊，这将非常有用。 |
| `PF_CheckinKeyframe` | <pre lang="cpp">PF_CheckinKeyframe(<br/>  PF_ProgPtr   effect_ref,<br/>  PF_ParamDef  \*paramP);</pre> |
| | 所有对 PF_CheckoutKeyframe 的调用都必须与此检入平衡，否则将导致问题。 |
| `PF_KeyIndexToTime` | <pre lang="cpp">PF_KeyIndexToTime(<br/>  PF_ProgPtr     effect_ref,<br/>  PF_ParamIndex  param_index,<br/>  PF_KeyIndex    key_indexP,<br/>  A_long         \*key_timeP,<br/>  A_u_long       \*key_timescaleP);</pre> |
| | 返回指定关键帧的时间（和时间尺度）。 |
