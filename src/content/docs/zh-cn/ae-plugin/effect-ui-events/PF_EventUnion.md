---
title: PF_EventUnion
---
# PF_EventUnion

PF_EventExtra 中的 PF_EventUnion 是以下四种结构的联合体。

---

## Click

在自定义 UI 区域内发生了鼠标点击或拖动。

### PF_DoClickEventInfo

| 成员 | 用途 |
|---|---|
| `when` | 点击发生的（操作系统级别的）时间。 |
| `screen_point` | 点击发生的屏幕坐标位置。对于自定义合成 UI，可以使用 [UI 回调](../ui-callbacks) 将这些坐标转换为合成坐标。 |
| | 请参阅 CCU 示例项目以获取示例。 |
| `num_clicks` | 发生的点击次数。 |
| `modifiers` | 点击期间按下的修饰键（如果有）。 |
| `continue_refcon[4]` | 插件可以在点击-拖动-拖动序列期间使用的 4 个 `A_intptr_t` 数组。 |
| `send_drag` | 将此标志设置为 `TRUE` 以指示持续拖动。下一个点击事件将有效地成为拖动事件。 |
| `last_time` | 在拖动事件结束时设置（用户已释放鼠标按钮）。 |

---

## Draw

After Effects 需要刷新您的自定义 UI。

注意：处理绘制请求时，请使用 [PF_InData](../../effect-basics/PF_InData) 中提供的图像尺寸（而不是输入图层的尺寸，如在 [PF_Cmd_RENDER](../../effect-basics/command-selectors#frame-selectors) 期间那样）。

### PF_DrawEventInfo

| 成员 | 用途 |
|---|---|
| `update_rect` | 在上下文窗口的坐标系中绘制的矩形。可以使用 [UI 回调](../ui-callbacks) 将这些坐标转换为不同的坐标系。 |
| | 请参阅 CCU 示例项目以获取示例。 |
| `depth` | 绘图上下文的像素深度。 |

---

## Keydown

用户按下了键，并且效果的 UI 处于活动状态。

使用 AE_EffectUI.h 中的宏来访问和操作接收到的键码。

为了在 Premiere Pro 中接收按键事件，插件必须在 PF_Cmd_PARAM_SETUP 期间在 PF_CustomUIInfo.events 中设置 PF_CustomEFlag_COMP。

### PF_KeyDownEvent

| 成员 | 用途 |
|---|---|
| `when` | 点击发生的时间。 |
| `screen_point` | 按键时鼠标指针的屏幕坐标。 |
| | 对于自定义合成 UI，可以使用 [UI 回调](../ui-callbacks) 将这些坐标转换为合成坐标。 |
| | 请参阅 CCU 示例项目以获取示例。 |
| `key_code` | 字符码（对于可打印字符，我们使用未移位的上版本；A 而不是 a，7 而不是 &）或控制码： |
| | - `PF_ControlCode_Unknown` |
| | - `PF_ControlCode_Space` |
| | - `PF_ControlCode_Backspace` |
| | - `PF_ControlCode_Tab` |
| | - `PF_ControlCode_Return` |
| | - `PF_ControlCode_Enter` |
| | - `PF_ControlCode_Escape` |
| | - `PF_ControlCode_F1` |
| | - ... |
| | - `PF_ControlCode_F24` |
| | - `PF_ControlCode_PrintScreen` |
| | - `PF_ControlCode_ScrollLock` |
| | - `PF_ControlCode_Pause` |
| | - `PF_ControlCode_Insert` |
| | - `PF_ControlCode_Delete` |
| | - `PF_ControlCode_Home` |
| | - `PF_ControlCode_End` |
| | - `PF_ControlCode_PageUp` |
| | - `PF_ControlCode_PageDown` |
| | - `PF_ControlCode_Help` |
| | - `PF_ControlCode_Clear` |
| | - `PF_ControlCode_Left` |
| | - `PF_ControlCode_Right` |
| | - `PF_ControlCode_Up` |
| | - `PF_ControlCode_Down` |
| | - `PF_ControlCode_NumLock` |
| | - `PF_ControlCode_Command` |
| | - `PF_ControlCode_Option` |
| | - `PF_ControlCode_Alt` = `PF_ControlCode_Option` |
| | - `PF_ControlCode_Control` |
| | - `PF_ControlCode_Shift` |
| | - `PF_ControlCode_CapsLock` |
| | - `PF_ControlCode_ContextMenu` |
| `modifiers` | 按键期间按下的修饰键（如果有）。 |
| | - `PF_Mod_NONE` |
| | - `PF_Mod_CMD_CTRL_KEY`（Mac 上的 cmd，Windows 上的 ctrl） |
| | - `PF_Mod_SHIFT_KEY` |
| | - `PF_Mod_CAPS_LOCK_KEY` |
| | - `PF_Mod_OPT_ALT_KEY`（Mac 上的 option，Windows 上的 alt） |
| | - `PF_Mod_MAC_CONTROL_KEY` |

---

## AdjustCursor

光标已移动到效果的自定义 UI 上（但未移出），以允许效果更改光标。

### PF_AdjustCursorEventInfo

| 成员 | 用途 |
| --- | --- |
| `screen_point` | 鼠标指针的屏幕坐标。对于自定义合成 UI，可以使用 [UI 回调](../ui-callbacks) 将这些坐标转换为合成坐标。 |
| | 请参阅 CCU 示例项目以获取示例。 |
| `modifiers` | 发送消息时按下的修饰键（如果有）。 |
| `set_cursor` | 将此设置为您所需的光标，或如果您已使用操作系统特定的调用设置了光标，则设置为 `PF_Cursor_CUSTOM`。请参阅 AE_EffectUI.h 以获取内置光标的完整枚举。 |
| | 如果您不想覆盖光标，请将此设置为 `PF_Cursor_NONE`，或者直接忽略此消息。 |

---

## Arbitrary Parameters Event

After Effects 需要您的插件管理其任意数据参数。

尽管自定义 UI 支持不需要任意数据类型，但 `PF_ArbParamsExtra` 遵循 EventInfo 模型。

### PF_ArbParamsExtra

| 成员 | 用途 |
| --- | --- |
| `which_function` | 指示调用哪个函数的 `PF_FunctionSelector` |
| `id` | 由 After Effects 使用；将与 *PF_Cmd_PARAM_SETUP* 期间分配给任意数据类型的 ID 匹配。 |
| `padding` | 用于字节对齐 |
| <pre lang="cpp">u {<br/>  new_func_params<br/>  dispose_func_params<br/>  copy_func_params<br/>  flat_size_func_params<br/>  flatten_func_params<br/>  unflatten_func_params<br/>  interp_func_params<br/>  compare_func_params<br/>  print_size_func_params<br/>  print_func_params<br/>  scan_func_params<br/>}</pre> | （将传递其中之一；请参阅 [任意数据参数](../../effect-details/arbitrary-data-parameters)） |
