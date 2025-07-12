---
title: 效果UI与事件
---
# 效果 UI 与事件

效果可以在两个区域提供自定义 UI：(1) 效果控制窗口（自定义 ECW UI），以及 (2) 合成或图层窗口（自定义 Comp UI）。

使用自定义 UI 的效果应在 `PF_Cmd_GLOBAL_SETUP`（来自 [全局选择器](../../effect-basics/command-selectors#global-selectors)）期间设置 `PF_OutFlag_CUSTOM_UI`（来自 [PF_OutFlags](../../effect-basics/PF_OutData#pf_outflags)），并处理 `PF_Cmd_EVENT` 选择器。

自定义 ECW UI 允许效果为参数提供自定义控件，该控件可以与标准参数类型或 [任意数据参数](../../effect-details/arbitrary-data-parameters#arbitrary-data-parameters) 一起使用。

具有自定义 UI 的参数在 [添加参数](../../effect-details/interaction-callback-functions#interaction-callbacks) 时应设置 `PF_PUI_CONTROL`（来自 [参数 UI 标志](../../effect-basics/PF_ParamDef#parameter-ui-flags)）。

自定义 Comp UI 允许效果在合成或图层窗口中直接操作视频。

当效果被选中时，窗口可以在视频上直接覆盖自定义控件，并可以处理用户与这些控件的交互，从而更快速、自然地调整参数。

效果应通过调用 `PF_REGISTER_UI` 注册自己以接收事件。

After Effects 可以向效果发送事件以处理用户界面和参数管理，将效果集成到其中心消息队列中。

虽然许多事件是响应用户输入发送的，但 After Effects 也会向管理任意数据参数的效果发送事件。

事件类型在 [PF_EventExtra-&gt;e_type](../PF_EventExtra#pf_eventextra) 中指定，各种事件如下所述。

---

## 事件

| 事件 | 说明 |
| --- | --- |
| `PF_Event_NEW_CONTEXT` | 用户创建了一个新的事件上下文（可能是通过打开窗口）。 |
| | 插件允许使用上下文句柄在上下文中存储状态信息。 |
| | [PF_EventUnion](../PF_EventUnion#pf_eventunion) 包含有效的上下文和类型，但其他内容应忽略。 |
| `PF_Event_ACTIVATE` | 用户激活了一个新上下文（可能是通过将窗口带到前台）。[PF_EventUnion](../PF_EventUnion#pf_eventunion) 为空。 |
| `PF_Event_DO_CLICK` | 用户在效果的 UI 中点击。[PF_EventUnion](../PF_EventUnion#pf_eventunion) 包含一个 `PF_DoClickEventInfo`。 |
| | 处理鼠标点击并响应，传递拖动信息；请参阅示例代码），在上下文中。 |
| | !!! 注意 |
| | 从 7.0 开始，*不要* 阻塞直到鼠标松开；而是依赖 `PF_Event_DRAG`。 |
| `PF_Event_DRAG` | 也是一个点击事件，[PF_EventUnion](../PF_EventUnion#pf_eventunion) 包含一个 `PF_DoClickEventInfo`。 |
| | 通过在 `PF_Event_DO_CLICK` 中返回 `send_drag == TRUE` 来请求此事件。 |
| | 这样做是为了让 After Effects 可以看到用户更改的新数据。 |
| `PF_Event_DRAW` | 绘制！[PF_EventUnion](../PF_EventUnion#pf_eventunion) 包含一个 `PF_DrawEventInfo`。 |
| `PF_Event_DEACTIVATE` | 用户已停用上下文（可能是通过将另一个窗口带到前台）。`PF_EventUnion` 为空。 |
| `PF_Event_CLOSE_CONTEXT` | 用户已关闭上下文。`PF_EventUnion` 将为空。 |
| `PF_Event_IDLE` | 上下文已打开，但没有发生任何事情。`PF_EventUnion` 为空。 |
| `PF_Event_ADJUST_CURSOR` | 鼠标悬停在插件的 UI 上。通过更改 `PF_AdjustCursorEventInfo` 中的 `PF_CursorType` 来设置光标。 |
| | 使用操作系统特定的调用来实现自定义光标；通过将 `PF_CursorType` 设置为 `PF_Cursor_CUSTOM` 来告诉 After Effects 你已经这样做了。 |
| | 尽可能使用 After Effects 的光标以保持界面一致性。 |
| `PF_Event_KEYDOWN` | 按键。[PF_EventUnion](../PF_EventUnion#pf_eventunion) 包含一个 `PF_KeyDownEvent`。 |
| `PF_Event_MOUSE_EXITED` | CS6 新增。通知鼠标不再悬停在特定视图上（仅限图层或合成）。 |
