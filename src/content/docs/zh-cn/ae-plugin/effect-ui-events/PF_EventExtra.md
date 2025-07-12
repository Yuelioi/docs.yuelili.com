---
title: PF_EventExtra
---
# PF_EventExtra

此结构体为当前事件提供上下文信息。After Effects 在 [入口函数](../../effect-basics/entry-point) 函数的 `extra` 参数中传递指向此结构体的指针。

`PF_EventUnion`（通过 `PF_EventExtra` 发送）随事件类型而变化，并包含特定于该事件的信息。

| 成员 | 用途 |
|---|---|
| `contextH` | `PF_Context` 的句柄。 |
| | 此绘图上下文与 [Drawbot 套件](../custom-ui-and-drawbot) 一起用于绘图，也用于 [UI 回调](../ui-callbacks)。 |
| `e_type` | 发生的 [事件](../effect-ui-events) 类型。 |
| `u` | 包含特定事件信息的 [PF_EventUnion](../PF_EventUnion)。 |
| `effect_win` | 如果事件发生在效果窗口内，则为关于该事件的 `PF_EffectWindowInfo`。 |
| | 否则，自 After Effects 5.0 起，`effect_win` 可以被 `PF_WindowUnion` 替换。 |
| | 此结构体包含 `PF_EffectWindowInfo` 和 `PF_ItemWindowInfo`（目前只是项目窗口的端口矩形）。 |
| | 只有在编译时定义了 `PF_USE_NEW_WINDOW_UNION` 时才会进行替换；否则，它将继续只是一个 `PF_EffectWindowInfo`。 |
| `cbs` | 指向 [UI 回调](../ui-callbacks) 的指针，这些回调用于在图层、合成和屏幕坐标系之间转换点。 |
| `evt_in_flags` | 事件输入标志。目前仅包含一个值 `PF_EI_DONT_DRAW`，在绘制前应检查此标志！ |
| `evt_out_flags` | 以下一个或多个值，通过按位 OR 操作组合： |
| | - `PF_EO_NONE` |
| | - `PF_EO_HANDLED_EVENT` 告诉 After Effects 你已经处理了该事件。 |
| | - `PF_EO_ALWAYS_UPDATE` 强制 After Effects 在每次点击或拖动时重新渲染合成；这与“alt-scrubbing”参数值生成的行为相同。 |
| | - `PF_EO_NEVER_UPDATE` 阻止 After Effects 在用户停止点击和拖动之前重新渲染合成。 |
| | - `PF_EO_UPDATE_NOW` 告诉 After Effects 在调用 `PF_InvalidateRect` 后立即更新视图。 |

---

## PF_Context

PF_Context 详细说明了事件的 UI 上下文。

| 成员 | 用途 |
|---|---|
| `magic` | 请勿更改。 |
| `w_type` | 窗口类型。如果你在同一插件中有自定义合成和 ECW UI，这是区分它们的方式（你到底是有多自虐？）。 |
| | - `PF_Window_COMP`, |
| | - `PF_Window_LAYER`, |
| | - `PF_Window_EFFECT` |
| `reserved_flt` | 请勿更改。 |
| `plugin_state[4]` | 一个包含 4 个 `A_longs` 的数组，插件可以使用它来存储给定上下文的状态信息。 |
| `reserved_drawref` | 用于 [Drawbot 套件](../custom-ui-and-drawbot) 的 `DRAWBOT_DrawRef`。 |
| `*reserved_paneP` | 请勿更改。 |

---

## PF_EffectWindowInfo

如果事件发生在 ECP 中，则会在 PF_EventExtra 中发送 PF_EffectWindowInfo。

| 成员 | 用途 |
|---|---|
| `index` | 这表示效果窗口中哪个参数受到影响。控件从 0 到控件数量减 1 编号。 |
| `area` | 这表示是控件标题 (`PF_EA_PARAM_TITLE`) 还是控件本身 (`PF_EA_CONTROL`) 受到影响。 |
| | 标题是当参数的“twirly”展开时仍然可见的区域。 |
| `current_frame` | 一个 PF_Rect，指示控件占用的完整区域。 |
| `param_title_frame` | 一个 PF_Rect，指示控件的标题区域。 |
| `horiz_offset` | 从标题区域左侧的水平偏移量，用于在标题中绘制。 |
