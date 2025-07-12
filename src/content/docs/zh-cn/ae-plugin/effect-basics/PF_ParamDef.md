---
title: PF_ParamDef
---
# PF_ParamDef

After Effects 会通过每个选择器向效果传递一个 PF_ParamDefs 数组，描述插件在当前时间的参数。params 数组中的值仅在某些选择器期间有效（这在[选择器描述](../command-selectors#calling-sequence)中有说明）。

---

## 参数零

第一个参数，params[0]，是输入图像（一个 [PF_EffectWorld / PF_LayerDef](../PF_EffectWorld)），效果应应用于此图像。

---

## 其余参数

所有参数类型都由 PF_ParamDef 表示。使用联合体，因此只需要（或应该）填充 PF_ParamDef 的相关部分。

## PF_ParamDef 成员

| 数据类型 | 名称 | 描述 |
|---|---|---|
| `A_long` | `id` | 此参数的 ID。如果您在插件的未来版本中重新排序参数，并且保持参数的 ID 不变，则不会导致用户重新应用您的效果。 |
| `PF_ChangeFlags` | `change_flags` | 如果您更改了参数值，则设置此标志。仅在拖动（而非点击！）事件、[PF_Cmd_USER_CHANGED_PARAM](../command-selectors#messaging) 或 [PF_Cmd_UPDATE_PARAMS_UI](../command-selectors#messaging) 期间有效。 |
| [PF_ParamUIFlags](#parameter-ui-flags) | `ui_flags` | 在添加之前指定参数的 UI 行为；仅在事件处理期间可以设置 `PF_PUI_DISABLED`。 |
| `A_short` | `ui_width` | 参数用户界面的宽度（仅适用于非标准参数）。 |
| `A_short` | `ui_height` | 参数用户界面的高度（仅适用于非标准参数）。 |
| [PF_ParamType](../parameters#parameter-types) | `param_type` | 参数类型。 |
| `A_char[32]` | `name` | 参数的名称。可以在事件处理期间更改。 |
| | | 是的，自 After Effects 1.0 以来，人们一直要求更长的参数名称。 |
| | | 将用 31 个字符充分描述您改变世界的效果视为一种语言挑战，就像俳句一样。 |
| [PF_ParamFlags](#parameter-flags) | `flags` | 在添加之前指定参数的 UI 行为；仅在事件处理期间可以设置 `PF_ParamFlag_COLLAPSE_TWIRLY`。 |
| `PF_ParamDefUnion` | `u` | 所有可能的[参数类型](../parameters#parameter-types)的联合体。 |
| | | 只有 `param_type` 指定的类型包含有意义的数据。 |

---

## 参数 UI 标志

使用这些标志控制参数的用户界面。

不要将 UI 标志与行为标志混淆；它们位于参数定义的不同字段中，如果误用会导致不可预测的行为。

| 标志 | 描述 |
|---|---|
| `PF_PUI_TOPIC` | 如果您处理参数的“主题”的 `PF_Cmd_EVENTs`，请设置此标志。 |
| | “主题”是效果控制窗口（ECW）中参数 UI 的部分，当该参数的旋转箭头旋转起来时仍然可见。 |
| | 如果您设置此标志，还必须在 PF_Cmd_GLOBAL_SETUP 时设置 `PF_OutFlag_CUSTOM_UI`。 |
| `PF_PUI_CONTROL` | 如果您处理控制区域（在旋转参数时变为不可见的区域）的 `PF_Cmd_EVENTs`，请设置此标志。 |
| | 如果您设置此标志，还必须在 `PF_Cmd_GLOBAL_SETUP` 时设置 `PF_OutFlag_CUSTOM_UI`。 |
| | 有关更多详细信息，请参阅[效果 UI 和事件](../../effect-ui-events/effect-ui-events)。 |
| `PF_PUI_STD_CONTROL_ONLY` | 如果您只想要标准控制，请设置此标志 - 此参数不会关联数据流，因此时间轴面板中不会显示关键帧。 |
| | 您可能希望使用标准控制来控制序列数据中的某些内容。 |
| | 或者在您的 arb 数据中，或者在合成窗口中的自定义 UI 中，或者分组设置多个其他控件。 |
| | 此标志不能与以下内容一起使用： |
| | - `PF_Param_CUSTOM` |
| | - `PF_Param_NO_DATA` |
| | - `PF_Param_LAYER` |
| | - `PF_Param_ARBITRARY_DATA` |
| | - `PF_Param_PATH` |
| | 如果您设置此标志，还必须设置 `PF_ParamFlag_SUPERVISE`（否则您将永远不会得知值的变化，并且该设置将永远不会用于任何用途）。 |
| | 此标志不需要设置 [PF_OutFlag_CUSTOM_UI](../PF_OutData#pf_outflags) 标志。 |
| | 如果您想要 `PF_Param_ARBITRARY_DATA` 的标准控制，只需使用 `PF_PUI_STD_CONTROL_ONLY` 添加一个（或多个）支持参数类型的控件，然后在处理 [PF_Cmd_USER_CHANGED_PARAM](../command-selectors#messaging) 时可以修改您的 arb 数据。 |
| `PF_PUI_NO_ECW_UI` | 如果您不希望在效果控制窗口中显示 UI，请设置此标志。 |
| | 假设您通过其他方法设置参数的值（例如，在合成窗口中的自定义 UI，或在处理具有 `PF_ParamFlag_SUPERVISE` 设置的不同参数的 `PF_Cmd_USER_CHANGED_PARAM` 时）。 |
| | 在 AE 中，这不会影响时间轴中的关键帧可见性。在 PPro 中，它会删除整行，因此您将看不到关键帧。 |
| `PF_PUI_ECW_SEPARATOR` | 在 After Effects 中未使用，但在 Premiere 中使用。如果您希望在效果控制窗口中此参数上方显示一条粗线，请设置此标志。 |
| | 这是为了在需要时（无需添加组）可以视觉上分组参数。此标志可以通过 `PF_UpdateParamUI()` 方法在运行时更改。 |
| `PF_PUI_DISABLED` | 禁用（灰显）参数，通常是为了响应 [PF_Cmd_USER_CHANGED_PARAM](../command-selectors#messaging)。 |
| `PF_PUI_DONT_ERASE_TOPIC` | After Effects 不会擦除参数的主题。 |
| `PF_PUI_DONT_ERASE_CONTROL`| After Effects 不会擦除参数的控制。 |
| `PF_PUI_RADIO_BUTTON` | 在 After Effects 中未使用，但在 Premiere 中使用。将参数显示为单选按钮组。仅对 `PF_Param_POPUP` 有效。 |
| `PF_PUI_INVISIBLE` | 首先在 Premiere 中支持，现在在 After Effects CS6 及更高版本中支持。此标志隐藏效果控制和时间轴中的参数 UI。 |
| | 仅限 Premiere：此标志是动态的，可以在 [PF_UpdateParamUI](../../effect-details/parameter-supervision#pf_paramutilsuite3) 回调期间切换参数可见性。 |

除了这些标志外，还可以使用 [AEGP_GetDynamicStreamFlags](../../aegps/aegp-suites#aegp_dynamicstreamsuite4) 隐藏或显示效果参数。

---

## 参数标志

行为标志和 UI 标志描述了参数的不同特性。在 [PF_Cmd_PARAM_SETUP](../command-selectors#global-selectors) 期间添加参数之前设置它们。在事件期间可以设置的标志已注明。

| 标志 | 含义 |
|---|---|
| `PF_ParamFlag_CANNOT_TIME_VARY` | 参数不随时间变化；时间轴面板中不会提供关键帧控制。 |
| `PF_ParamFlag_CANNOT_INTERP` | 值不会代数插值。 |
| | 您仍然可以使用不连续（保持）插值。适用于参数为开或关的情况。加速渲染。 |
| `PF_ParamFlag_COLLAPSE_TWIRLY` | 在 [PF_Cmd_USER_CHANGED_PARAM](../command-selectors#messaging) 期间设置此标志。 |
| | 现在可以在处理 [PF_Cmd_UPDATE_PARAMS_UI](../command-selectors#messaging) 和 [PF_Cmd_USER_CHANGED_PARAM](../command-selectors#messaging) 消息时设置和清除此位，以便随意旋转您的参数和组。 |
| `PF_ParamFlag_SUPERVISE` | 设置以接收此参数的 [PF_Cmd_USER_CHANGED_PARAM](../command-selectors#messaging) 消息。 |
| | 有关更多信息，请参阅[参数监督](../../effect-details/parameter-supervision)。 |
| `PF_ParamFlag_START_COLLAPSED` | 控制主题旋转器的旋转状态。 |
| | 可以在参数监督期间更改，而不仅仅是在 [PF_Cmd_PARAM_SETUP](../command-selectors#global-selectors) 期间。 |
| | 除非设置了 [PF_OutFlag2_PARAM_GROUP_START_COLLAPSED](../PF_OutData#pf_outflags)，否则此标志不会被遵守。 |
| `PF_ParamFlag_USE_VALUE_FOR_OLD_PROJECTS` | 这仅影响加载使用旧版本效果保存的项目，这些项目缺少后来添加的参数。 |
| | 设置后，`PF_ADD_PARAM()` 中设置的 `PF_ParamDef.value` 字段将用于初始化缺失的参数，但默认字段仍将用于新应用或重置效果时参数的初始值。 |
| | 当您希望参数默认为一个值，但需要将其设置为其他值以保留旧项目的渲染行为时，这很有用。 |
| `PF_ParamFlag_LAYER_PARAM_IS_TRACKMATTE` | 仅限 Premiere Pro：仅对图层参数有效。指示图层参数用作应用滤镜的轨道遮罩。 |
| | 在 After Effects 中忽略。 |
| `PF_ParamFlag_EXCLUDE_FROM_HAVE_INPUTS_CHANGED`| 仅当效果设置了 [PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT](../PF_OutData#pf_outflags) 并且将调用 [PF_AreStatesIdentical](../../effect-details/parameter-supervision#pf_paramutilsuite3) 或 [PF_HaveInputsChangedOverTimeSpan](../../effect-details/parameter-supervision#pf_paramutilsuite3) 时相关 |
| `PF_ParamFlag_SKIP_REVEAL_WHEN_UNHIDDEN` | CS6 新增。如果此参数被取消隐藏，则此标志告诉 After Effects 不要旋转打开任何父级，并且不要在效果控制面板和时间轴面板中将参数滚动到视图中。 |
| | After Effects 在创建画笔描边时内部使用此行为，以免通过显示参数来分散用户的注意力。 |
| | 然而，在另一种情况下，当启用时间重映射时，该参数会被显示。 |
| | 因此，我们为您提供了对您自己效果中参数的相同控制。 |

---

## PF_ValueDisplayFlags

在 PF_ParamDefUnion 中，PF_FloatSliderDef 和 PF_FixedSliderDef 都有一个成员变量 PF_ValueDisplayFlags，它允许它们响应用户的像素值显示偏好（他们在信息面板中设置）。如果设置了此标志，参数的值将根据偏好显示为 0-1、0-255、0-32768 或 0.0 到 1.0。您还可以设置第一个位（PF_ValueDisplayFlag_PERCENT）以在参数的显示值后附加百分号。

我们知道您永远不会做这样的事情，但如果您创建了一个显示为百分比的参数，请不要通过允许除 0 到 100 之外的任何范围来混淆用户。拜托。百分比的意思是“百分之一百”。
